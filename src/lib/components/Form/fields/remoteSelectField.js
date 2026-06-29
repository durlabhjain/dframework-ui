import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    Box, TextField, List, ListItemButton, ListItemIcon, ListItemText,
    IconButton, InputBase, Checkbox, CircularProgress, InputAdornment,
    FormControl, FormHelperText, Typography, Popover
} from '@mui/material';
import {
    FirstPage, LastPage, NavigateBefore, NavigateNext,
    ArrowDropDown, ArrowDropUp, Search, Clear, Refresh
} from '@mui/icons-material';
import useCascadingLookup from '../../../hooks/useCascadingLookup';
import useDebounce from '../../../hooks/useDebounce';

const DEFAULT_PAGE_SIZE = 50;

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
}) {
    const pageSize = column.pageSize || DEFAULT_PAGE_SIZE;
    const isMultiSelect = Boolean(column.multiSelect) && !filterMode;
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

    const [page, setPage] = useState(1);
    const [jumpTo, setJumpTo] = useState('1');
    const [totalPages, setTotalPages] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const searchTerm = useDebounce(searchInput, 300);

    // ── Fetch when open / page / searchTerm changes ───────────────────────────
    useEffect(() => {
        if (!open) return;
        async function load() {
            const start = (page - 1) * pageSize;
            const result = await fetchOptions({ search: searchTerm, start, limit: pageSize });
            if (result?.recordCount != null) {
                setTotalPages(Math.max(1, Math.ceil(result.recordCount / pageSize)));
            } else {
                const count = result?.options?.length ?? 0;
                setTotalPages(count >= pageSize ? prev => Math.max(prev, page + 1) : page);
            }
        }
        load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, page, searchTerm, fetchOptions, pageSize]);

    // Resolve display label for pre-selected value not in current page.
    // fetchOptions IS in deps so this re-fires when the hook stabilises with a
    // valid model/api after async initialisation.
    const valueSig = useMemo(() => JSON.stringify(currentValue), [currentValue]);
    useEffect(() => {
        const id = isMultiSelect ? currentValue[0] : currentValue;
        if (!id || Number(id) === 0) return;
        if (options.some(o => String(o.value) === String(id))) return;
        fetchOptions({ lookupId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSig, fetchOptions]);

    // ── Selected values as a Set for O(1) membership checks ──────────────────
    const selectedSet = useMemo(() => {
        if (!isMultiSelect || !Array.isArray(currentValue)) return null;
        return new Set(currentValue.map(v => String(v)));
    }, [currentValue, isMultiSelect]);

    // ── Helpers ───────────────────────────────────────────────────────────────
    const getLabel = useCallback((key) => {
        const k = String(key);
        return options.find(o => String(o.value) === k)?.label ?? labelMap[k] ?? k;
    }, [options, labelMap]);

    const resetPagination = useCallback(() => {
        setPage(1);
        setJumpTo('1');
        setTotalPages(1);
    }, []);

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

    const allPageSelected = useMemo(() =>
        isMultiSelect && options.length > 0 && selectedSet != null && options.every(o => selectedSet.has(String(o.value))),
    [isMultiSelect, options, selectedSet]);

    const somePageSelected = useMemo(() =>
        isMultiSelect && options.length > 0 && !allPageSelected && selectedSet != null && options.some(o => selectedSet.has(String(o.value))),
    [isMultiSelect, options, selectedSet, allPageSelected]);

    // ── Event handlers ────────────────────────────────────────────────────────
    const handleOpen = useCallback((e) => {
        if (isReadOnly) return;
        setAnchorEl(e.currentTarget);
        resetPagination();
        clearSearch();
    }, [isReadOnly, resetPagination, clearSearch]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
        clearSearch();
    }, [clearSearch]);

    const handleSearchChange = useCallback((e) => {
        setSearchInput(e.target.value);
        resetPagination();
    }, [resetPagination]);

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
        if (isMultiSelect) {
            const current = Array.isArray(currentValue) ? currentValue : [];
            const already = selectedSet?.has(String(option.value)) ?? false;
            applyValue(already
                ? current.filter(v => String(v) !== String(option.value))
                : [...current, option.value]);
        } else {
            applyValue(String(currentValue) === String(option.value) ? '' : option.value);
            handleClose();
        }
    }, [isMultiSelect, currentValue, selectedSet, applyValue, handleClose]);

    const handleClear = useCallback((e) => {
        e.stopPropagation();
        applyValue(isMultiSelect ? [] : '');
    }, [isMultiSelect, applyValue]);

    const handleSelectAll = useCallback(() => {
        if (!isMultiSelect) return;
        const current = Array.isArray(currentValue) ? currentValue : [];
        if (allPageSelected) {
            const pageVals = new Set(options.map(o => String(o.value)));
            applyValue(current.filter(v => !pageVals.has(String(v))));
        } else {
            const currentSet = new Set(current.map(v => String(v)));
            const newOnes = options.filter(o => !currentSet.has(String(o.value)));
            applyValue([...current, ...newOnes.map(o => o.value)]);
        }
    }, [isMultiSelect, currentValue, options, allPageSelected, applyValue]);

    const handlePageChange = useCallback((newPage) => {
        const p = Math.max(1, Math.min(totalPages, newPage));
        setPage(p);
        setJumpTo(String(p));
    }, [totalPages]);

    const handleJumpSubmit = useCallback((e) => {
        if (e.key !== 'Enter') return;
        const n = parseInt(jumpTo, 10);
        if (!isNaN(n) && n > 0) handlePageChange(n);
    }, [jumpTo, handlePageChange]);

    const handleRefresh = useCallback(() => {
        fetchOptions({ search: searchTerm, start: (page - 1) * pageSize, limit: pageSize });
    }, [fetchOptions, searchTerm, page, pageSize]);

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
                                    <IconButton size="small" onClick={clearSearch}>
                                        <Clear fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>

            {/* Options list */}
            <List dense sx={{ maxHeight: 280, overflowY: 'auto', py: 0 }}>
                {isLoading ? (
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
                                    <Checkbox edge="start" checked={allPageSelected} indeterminate={somePageSelected} size="small" tabIndex={-1} disableRipple />
                                </ListItemIcon>
                                <ListItemText
                                    primary={tTranslate(allPageSelected ? 'Unselect All' : 'Select All', tOpts)}
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
                    </>
                )}
            </List>

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.2, px: 1, py: 0.5, borderTop: '1px solid', borderColor: 'divider' }}>
                <IconButton size="small" onClick={() => handlePageChange(1)} disabled={page === 1 || isLoading}><FirstPage fontSize="small" /></IconButton>
                <IconButton size="small" onClick={() => handlePageChange(page - 1)} disabled={page === 1 || isLoading}><NavigateBefore fontSize="small" /></IconButton>
                <Typography variant="body2" sx={{ fontSize: 12 }}>{tTranslate('Page', tOpts)}</Typography>
                <InputBase
                    value={jumpTo}
                    onChange={e => /^\d*$/.test(e.target.value) && setJumpTo(e.target.value)}
                    onKeyDown={handleJumpSubmit}
                    disabled={isLoading}
                    sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, width: 40, height: 26, fontSize: 12, '& input': { padding: '3px', textAlign: 'center' } }}
                    inputProps={{ maxLength: 4 }}
                />
                <Typography variant="body2" sx={{ fontSize: 12 }}>{tTranslate('of', tOpts)} {totalPages}</Typography>
                <IconButton size="small" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages || isLoading}><NavigateNext fontSize="small" /></IconButton>
                <IconButton size="small" onClick={() => handlePageChange(totalPages)} disabled={page === totalPages || isLoading}><LastPage fontSize="small" /></IconButton>
                <IconButton size="small" onClick={handleRefresh} disabled={isLoading} sx={{ ml: 0.5 }}><Refresh fontSize="small" /></IconButton>
            </Box>
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