import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Box, TextField, List, ListItemButton, ListItemIcon, ListItemText,
    IconButton, Checkbox, CircularProgress, InputAdornment,
    FormControl, FormHelperText, Typography, Popover
} from '@mui/material';
import {
    ArrowDropDown, ArrowDropUp, Search, Clear
} from '@mui/icons-material';
import useCascadingLookup from '../../../hooks/useCascadingLookup';
import useDebounce from '../../../hooks/useDebounce';

const DEFAULT_PAGE_SIZE = 50;
const SEARCH_DEBOUNCE_MS = 300;
const SCROLL_LOAD_MORE_THRESHOLD_PX = 48;

const RemoteSelectField = React.memo(function RemoteSelectField({
    column,
    field,
    formik,
    model,
    lookups = {},
    dependsOn = [],
    tTranslate = k => k,
    tOpts = {},
    filterMode = false,
    filterValue,
    onFilterChange,
    multiSelect: multiSelectProp,
}) {
    const chunkSize = column.pageSize || DEFAULT_PAGE_SIZE;
    const isMultiSelect = Boolean(multiSelectProp) || (Boolean(column.multiSelect) && !filterMode);
    const isReadOnly = Boolean(column.readOnly);

    const { options, fetchOptions, isLoading, labelMap } = useCascadingLookup({
        column, formik, lookups, dependsOn, model, lazy: true,
    });

    // ── Value ─────────────────────────────────────────────────────────────────
    const rawValue = filterMode ? filterValue : formik?.values[field];
    const currentValue = useMemo(() => {
        if (isMultiSelect) {
            if (!rawValue || rawValue.length === 0) return [];
            if (!Array.isArray(rawValue)) return String(rawValue).split(',').map(v => (isNaN(v) ? v : Number(v)));
            return rawValue;
        }
        if (rawValue === 0 || rawValue === '0' || rawValue == null) return '';
        return rawValue;
    }, [rawValue, isMultiSelect]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [hasMore, setHasMore] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const searchTerm = useDebounce(searchInput, SEARCH_DEBOUNCE_MS);

    // Fetches one chunk of options and updates hasMore from the response. append=false
    // (a fresh search or the initial open) replaces the list; append=true (infinite scroll)
    // adds the chunk to what's already loaded.
    const loadChunk = useCallback(async ({ start, append }) => {
        const result = await fetchOptions({ search: searchTerm, start, limit: chunkSize, append });
        const incomingLength = result?.options?.length ?? 0;
        setHasMore(result?.recordCount != null
            ? start + incomingLength < result.recordCount
            : incomingLength >= chunkSize);
    }, [fetchOptions, searchTerm, chunkSize]);

    const reload = useCallback(() => {
        loadChunk({ start: 0, append: false });
    }, [loadChunk]);

    // Reload from the start whenever the popover opens or the search term changes.
    useEffect(() => {
        if (!open) return;
        reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, reload]);

    // isLoading (from the hook) already reflects an in-flight fetch, so it also guards
    // against firing overlapping "load more" requests from rapid scroll events.
    const handleScroll = useCallback((e) => {
        if (isLoading || !hasMore) return;
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop - clientHeight > SCROLL_LOAD_MORE_THRESHOLD_PX) return;
        loadChunk({ start: options.length, append: true });
    }, [isLoading, hasMore, loadChunk, options.length]);

    // Resolve display label for a pre-selected value that isn't cached in labelMap yet.
    // fetchOptions IS in deps so this re-fires when the hook stabilises with a
    // valid model/api after async initialisation.
    const valueSig = useMemo(() => (
        Array.isArray(currentValue) ? currentValue.join(',') : currentValue
    ), [currentValue]);
    useEffect(() => {
        const id = isMultiSelect ? currentValue[0] : currentValue;
        if (!id || Number(id) === 0 || String(id) in labelMap) return;
        fetchOptions({ lookupId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSig, fetchOptions]);

    // ── Selected values as a Set for O(1) membership checks ──────────────────
    const selectedSet = useMemo(() => {
        if (!isMultiSelect || !Array.isArray(currentValue)) return null;
        return new Set(currentValue.map(v => String(v)));
    }, [currentValue, isMultiSelect]);

    // ── Helpers ───────────────────────────────────────────────────────────────
    // labelMap accumulates labels from every fetch (including past chunks and lookupId
    // resolutions) so it's always a superset of what's in options — no need to scan options.
    const getLabel = useCallback((key) => labelMap[String(key)] ?? String(key), [labelMap]);

    const clearSearch = useCallback(() => setSearchInput(''), []);

    // ── Derived ───────────────────────────────────────────────────────────────
    const selectedLabel = useMemo(() => {
        if (isMultiSelect) {
            const count = Array.isArray(currentValue) ? currentValue.length : 0;
            if (count === 0) return '';
            if (count > 1) return tTranslate(`${count} selected`, tOpts);
            return getLabel(currentValue[0]);
        }
        if (currentValue === '') return '';
        return getLabel(currentValue);
    }, [currentValue, isMultiSelect, tTranslate, tOpts, getLabel]);

    const hasValue = isMultiSelect
        ? Array.isArray(currentValue) && currentValue.length > 0
        : currentValue !== '';

    const isOptionSelected = useCallback((option) => {
        if (selectedSet) return selectedSet.has(String(option.value));
        return String(currentValue) === String(option.value);
    }, [currentValue, selectedSet]);

    // Single pass over options instead of separate .every/.some scans for each flag.
    const { allLoadedSelected, someLoadedSelected } = useMemo(() => {
        if (!isMultiSelect || !selectedSet || options.length === 0) {
            return { allLoadedSelected: false, someLoadedSelected: false };
        }
        const selectedCount = options.reduce((count, o) => (
            selectedSet.has(String(o.value)) ? count + 1 : count
        ), 0);
        return {
            allLoadedSelected: selectedCount === options.length,
            someLoadedSelected: selectedCount > 0 && selectedCount < options.length,
        };
    }, [isMultiSelect, options, selectedSet]);

    // ── Event handlers ────────────────────────────────────────────────────────
    const handleOpen = useCallback((e) => {
        if (isReadOnly) return;
        setAnchorEl(e.currentTarget);
        clearSearch();
    }, [isReadOnly, clearSearch]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
        clearSearch();
    }, [clearSearch]);

    const handleSearchChange = useCallback((e) => {
        setSearchInput(e.target.value);
    }, []);

    const applyValue = useCallback((val) => {
        if (filterMode) {
            onFilterChange?.(val);
        } else if (formik) {
            formik.setFieldValue(field, val);
            if (typeof column.onChange === 'function') {
                column.onChange({ formik, value: val, t: tTranslate, tOpts });
            }
        }
    }, [filterMode, onFilterChange, formik, field, column, tTranslate, tOpts]);

    const handleSelect = useCallback((option) => {
        const already = isOptionSelected(option);
        if (isMultiSelect) {
            const current = Array.isArray(currentValue) ? currentValue : [];
            applyValue(already
                ? current.filter(v => String(v) !== String(option.value))
                : [...current, option.value]);
        } else {
            applyValue(already ? '' : option.value);
            handleClose();
        }
    }, [isMultiSelect, currentValue, isOptionSelected, applyValue, handleClose]);

    const handleClear = useCallback((e) => {
        e.stopPropagation();
        applyValue(isMultiSelect ? [] : '');
    }, [isMultiSelect, applyValue]);

    const handleSelectAll = useCallback(() => {
        if (!isMultiSelect) return;
        const current = Array.isArray(currentValue) ? currentValue : [];
        if (allLoadedSelected) {
            const loadedValues = new Set(options.map(o => String(o.value)));
            applyValue(current.filter(v => !loadedValues.has(String(v))));
        } else {
            const newOnes = options.filter(o => !selectedSet?.has(String(o.value)));
            applyValue([...current, ...newOnes.map(o => o.value)]);
        }
    }, [isMultiSelect, currentValue, options, allLoadedSelected, selectedSet, applyValue]);

    // ── Render ────────────────────────────────────────────────────────────────
    const trigger = (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <TextField
                fullWidth
                variant={filterMode ? 'outlined' : 'standard'}
                size="small"
                value={selectedLabel}
                placeholder={isReadOnly ? '' : tTranslate('Select...', tOpts)}
                onClick={handleOpen}
                error={!filterMode && Boolean(formik?.touched[field] && formik?.errors[field])}
                slotProps={{
                    htmlInput: { readOnly: true, style: { cursor: isReadOnly ? 'default' : 'pointer' } },
                    input: { sx: { '&&': { paddingRight: '52px' } } },
                }}
            />
            {hasValue && !isReadOnly && (
                <IconButton
                    size="small"
                    onClick={handleClear}
                    tabIndex={-1}
                    aria-label={tTranslate('Clear value', tOpts)}
                    sx={{ position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)', p: '2px' }}
                >
                    <Clear fontSize="small" />
                </IconButton>
            )}
            <IconButton
                size="small"
                onClick={handleOpen}
                disabled={isReadOnly}
                tabIndex={-1}
                aria-label={tTranslate(open ? 'Close options' : 'Open options', tOpts)}
                sx={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', p: '2px' }}
            >
                {open ? <ArrowDropUp sx={{ fontSize: 22 }} /> : <ArrowDropDown sx={{ fontSize: 22 }} />}
            </IconButton>
        </Box>
    );

    const popover = (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{ paper: { sx: { width: Math.max(anchorEl?.offsetWidth ?? 0, 280), maxHeight: 460, overflow: 'hidden' } } }}
            disableAutoFocus
            disableEnforceFocus
        >
            {/* Search */}
            <Box sx={{ p: 0.75, borderBottom: '1px solid', borderColor: 'divider' }}>
                <TextField
                    variant="outlined"
                    placeholder={tTranslate('Search...', tOpts)}
                    value={searchInput}
                    onChange={handleSearchChange}
                    size="small"
                    fullWidth
                    autoFocus
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start"><Search fontSize="small" /></InputAdornment>,
                            endAdornment: searchInput && (
                                <InputAdornment position="end">
                                    <IconButton size="small" onClick={clearSearch} aria-label={tTranslate('Clear search', tOpts)}>
                                        <Clear fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>

            {/* Options list */}
            <List dense sx={{ maxHeight: 280, overflowY: 'auto', py: 0 }} onScroll={handleScroll}>
                {isLoading && options.length === 0 ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3, gap: 1 }}>
                        <CircularProgress size={20} />
                        <Typography variant="body2">{tTranslate('Loading', tOpts)}...</Typography>
                    </Box>
                ) : options.length === 0 ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            {searchInput
                                ? `${tTranslate('No results for', tOpts)} "${searchInput}"`
                                : tTranslate('No options available', tOpts)}
                        </Typography>
                    </Box>
                ) : (
                    <>
                        {isMultiSelect && (
                            <ListItemButton onClick={handleSelectAll} sx={{ py: 0.5, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'action.hover' }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    <Checkbox edge="start" checked={allLoadedSelected} indeterminate={someLoadedSelected} size="small" tabIndex={-1} disableRipple />
                                </ListItemIcon>
                                <ListItemText
                                    primary={tTranslate(allLoadedSelected ? 'Unselect All' : 'Select All', tOpts)}
                                    primaryTypographyProps={{ fontSize: 14 }}
                                />
                            </ListItemButton>
                        )}
                        {options.map(option => (
                            <ListItemButton key={option.value} onClick={() => handleSelect(option)} sx={{ py: 0.5 }}>
                                {isMultiSelect && (
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <Checkbox edge="start" checked={isOptionSelected(option)} size="small" tabIndex={-1} disableRipple />
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={option.label} primaryTypographyProps={{ fontSize: 14, noWrap: true }} />
                            </ListItemButton>
                        ))}
                        {isLoading && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
                                <CircularProgress size={16} />
                            </Box>
                        )}
                    </>
                )}
            </List>
        </Popover>
    );

    if (filterMode) {
        return (
            <Box sx={{ width: '100%' }}>
                {trigger}
                {popover}
            </Box>
        );
    }

    return (
        <FormControl fullWidth error={Boolean(formik?.touched[field] && formik?.errors[field])} variant="standard">
            {trigger}
            {popover}
            <FormHelperText>{formik?.touched[field] && formik?.errors[field]}</FormHelperText>
        </FormControl>
    );
});

export default RemoteSelectField;