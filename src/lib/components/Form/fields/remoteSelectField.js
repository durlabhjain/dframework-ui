import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
    TextField, Autocomplete, Checkbox, Chip, CircularProgress,
    FormControl, FormHelperText, Typography, Box,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useCascadingLookup from '../../../hooks/useCascadingLookup';
import useDebounce from '../../../hooks/useDebounce';

const DEFAULT_PAGE_SIZE = 50;
const SEARCH_DEBOUNCE_MS = 300;
const SCROLL_LOAD_MORE_THRESHOLD_PX = 48;
// Stable reference for "nothing selected" in multi-select: a fresh `[]` literal on every render would make
// Autocomplete's `value` prop change identity every time, tripping MUI's internal input-reset (which always
// blanks the input in multi-select) on every re-render - e.g. every state update while a chunk is loading.
const EMPTY_ARRAY = [];

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

    const { options, fetchOptions, labelMap } = useCascadingLookup({
        column, formik, lookups, dependsOn, model, lazy: true,
    });

    const rawValue = filterMode ? filterValue : formik?.values[field];
    const currentValue = useMemo(() => {
        if (isMultiSelect) {
            if (!rawValue || rawValue.length === 0) return EMPTY_ARRAY;
            if (!Array.isArray(rawValue)) return String(rawValue).split(',').map(v => v.trim()).map(v => (isNaN(v) ? v : Number(v)));
            return rawValue;
        }
        if (rawValue === 0 || rawValue === '0' || rawValue == null) return '';
        return rawValue;
    }, [rawValue, isMultiSelect]);

    // Open is tracked locally (not passed to Autocomplete) purely to gate the reload effect below.
    const [open, setOpen] = useState(false);
    // Tracks DOM focus (distinct from `open`) so renderTags can mirror MUI's own limitTags rule:
    // collapse to column.limitTags while blurred, show every chip in a scrollable box once focused.
    const [isFocused, setIsFocused] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const searchTerm = useDebounce(searchInput, SEARCH_DEBOUNCE_MS);
    // Separate from the hook's isLoading, which is shared with the lookupId label-resolution fetch below.
    const [isChunkLoading, setIsChunkLoading] = useState(false);

    // Id of the most recently started request (reload or append), so a response from a
    // superseded request (e.g. an append pre-dating a later reload) is never committed.
    const latestRequestId = useRef(0);
    // DOM node of the listbox (via slotProps.listbox.ref below) and the scrollTop to reapply once an
    // appended chunk lands - see the scroll-restore effect below for why this is needed.
    const [listboxNode, setListboxNode] = useState(null);
    const [pendingScrollRestore, setPendingScrollRestore] = useState(null);

    // append replaces vs. adds; isStale (forwarded into fetchOptions) skips committing a response a later request has superseded.
    const loadChunk = useCallback(async ({ start, append }) => {
        const requestId = ++latestRequestId.current;
        const isStale = () => requestId !== latestRequestId.current;
        setIsChunkLoading(true);
        try {
            const result = await fetchOptions({ search: searchTerm, start, limit: chunkSize, append, isStale });
            if (isStale() || !result) return;
            const incomingLength = result.options?.length ?? 0;
            setHasMore(result.recordCount != null
                ? start + incomingLength < result.recordCount
                : incomingLength >= chunkSize);
        } finally {
            if (!isStale()) setIsChunkLoading(false);
        }
    }, [fetchOptions, searchTerm, chunkSize]);

    // Reloads on open/searchTerm change or when loadChunk's identity changes (e.g. fetchOptions becoming ready).
    useEffect(() => {
        if (!open) return;
        setPendingScrollRestore(null);
        loadChunk({ start: 0, append: false });
    }, [open, loadChunk]);

    // MUI resets listbox scroll toward the selected option whenever the options array reference
    // changes (e.g. an appended chunk); restore the scrollTop the user was at. Scoped to [options] only.
    useEffect(() => {
        if (pendingScrollRestore == null || !listboxNode) return;
        listboxNode.scrollTop = pendingScrollRestore;
        setPendingScrollRestore(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);

    // isChunkLoading also guards against overlapping "load more" requests from rapid scroll events;
    // loadChunk's own request-id guard covers ordering against a reload started mid-append.
    const handleScroll = useCallback((e) => {
        if (isChunkLoading || !hasMore) return;
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop - clientHeight > SCROLL_LOAD_MORE_THRESHOLD_PX) return;
        setPendingScrollRestore(scrollTop);
        loadChunk({ start: options.length, append: true });
    }, [isChunkLoading, hasMore, loadChunk, options.length]);

    // Resolve display labels for pre-selected values that aren't cached in labelMap yet.
    // Tracks ids already requested so a labelMap update (which recomputes selectedIds) doesn't re-fire the fetch.
    const requestedLookupIdsRef = useRef(new Set());
    const selectedIds = isMultiSelect ? currentValue : (currentValue !== '' ? [currentValue] : []);
    const selectedIdsKey = selectedIds.map(String).join(',');
    useEffect(() => {
        selectedIds.forEach(id => {
            const idKey = String(id);
            if (!id || Number(id) === 0) return;
            if (Object.prototype.hasOwnProperty.call(labelMap, idKey)) return;
            if (requestedLookupIdsRef.current.has(idKey)) return;
            requestedLookupIdsRef.current.add(idKey);
            fetchOptions({ lookupId: id }).then(result => {
                if (!result) requestedLookupIdsRef.current.delete(idKey);
            });
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIdsKey, fetchOptions]);

    // labelMap is a superset of options (it also carries past chunks and lookupId resolutions).
    const getLabel = useCallback((key) => labelMap[String(key)] ?? String(key), [labelMap]);

    // Keyed on just the selected ids' labels (not getLabel/labelMap directly) so unrelated labelMap growth from a search reload doesn't change this reference mid-keystroke and trigger MUI's internal input-reset.
    // JSON.stringify (not a manual join) avoids delimiter-collision: a label containing the join
    // separator could otherwise make two different id/label sets serialize to the same key.
    // A missing labelMap entry and one resolved to '' must serialize differently, or a resolution to
    // '' won't change this key and selectedValue will keep showing the stale getLabel fallback.
    const selectedLabelsKey = JSON.stringify(selectedIds.map(id => {
        const idKey = String(id);
        return Object.prototype.hasOwnProperty.call(labelMap, idKey) ? [idKey, labelMap[idKey]] : [idKey];
    }));
    // Synthesised from labelMap (not looked up in options) so a selection outside the loaded/filtered page still shows its label.
    const selectedValue = useMemo(() => {
        if (isMultiSelect) return currentValue.length === 0 ? EMPTY_ARRAY : currentValue.map(v => ({ value: v, label: getLabel(v) }));
        return currentValue === '' ? null : { value: currentValue, label: getLabel(currentValue) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue, isMultiSelect, selectedLabelsKey]);

    // No reset here: MUI also opens as a side effect of the first keystroke when focused-but-closed (e.g. grid filter auto-focus), which would wipe that keystroke.
    const handleOpen = useCallback(() => setOpen(true), []);
    // Search text isn't cleared here - it stays in sync with what's still visibly typed (see handleInputChange), so a later reload keeps filtering by it instead of silently going unfiltered.
    const handleClose = useCallback(() => { setOpen(false); setIsChunkLoading(false); }, []);
    const handleFocus = useCallback(() => setIsFocused(true), []);
    const handleBlur = useCallback(() => setIsFocused(false), []);
    // 'blur' syncs a real blur-away revert; 'reset' is excluded since MUI also fires it on every async labelMap-driven value reference change, which would wipe an in-progress keystroke.
    const handleInputChange = useCallback((e, value, reason) => {
        if (reason === 'input' || reason === 'clear' || reason === 'blur') setSearchInput(value);
    }, []);

    // Clear search on an actual pick/unpick (content change), not on every `value` reference change Autocomplete resets internally in multi-select.
    // Covers single-select too: picking a value closes the dropdown without clearing searchInput, so a stale search term would otherwise
    // survive (handleClose intentionally preserves it) and filter the list down on the next reopen.
    const selectionSignature = isMultiSelect ? currentValue.map(String).join(',') : String(currentValue);
    useEffect(() => {
        setSearchInput('');
    }, [selectionSignature]);

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

    const handleChange = useCallback((e, newValue) => {
        applyValue(isMultiSelect ? newValue.map(o => o.value) : (newValue ? newValue.value : ''));
    }, [isMultiSelect, applyValue]);

    const control = (
        <Autocomplete
            multiple={isMultiSelect}
            disabled={isReadOnly}
            options={options}
            sx={{
                '& .MuiAutocomplete-clearIndicator': { visibility: 'visible' },
                '& .MuiAutocomplete-inputRoot': {
                    flexWrap: 'wrap',
                },
            }}
            getOptionKey={(option) => option.value}
            filterOptions={(x) => x}
            loading={isChunkLoading}
            loadingText={`${tTranslate('Loading', tOpts)}...`}
            noOptionsText={searchInput
                ? `${tTranslate('No results for', tOpts)} "${searchInput}"`
                : tTranslate('No options available', tOpts)}
            getOptionLabel={(option) => option.label ?? ''}
            isOptionEqualToValue={(option, value) => String(option.value) === String(value.value)}
            value={selectedValue}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInputChange={handleInputChange}
            disableCloseOnSelect={isMultiSelect}
            size="small"
            popupIcon={<KeyboardArrowDownIcon />}
            fullWidth
            slotProps={{
                // MUI's default 8px top padding lives on the listbox itself, which also scrolls -
                // so it's part of the scrollable content and disappears the instant you scroll.
                // Move it onto the (non-scrolling) Paper frame instead so it stays visible.
                paper: { sx: { pt: 1 } },
                listbox: { ref: setListboxNode, onScroll: handleScroll, style: { maxHeight: 280, paddingTop: 0 } },
            }}
            renderTags={(tagValue, getTagProps) => {
                const tagLimit = column.limitTags || 5;
                // Collapsed (blurred): mirror MUI's own limitTags rule, no scroll box needed since the count is bounded.
                if (!isFocused && tagValue.length > tagLimit) {
                    const hiddenCount = tagValue.length - tagLimit;
                    return (
                        <>
                            {tagValue.slice(0, tagLimit).map((option, index) => {
                                const { key, ...tagProps } = getTagProps({ index });
                                return <Chip key={key} {...tagProps} label={option.label} size="small" />;
                            })}
                            <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                                {`+${hiddenCount}`}
                            </Typography>
                        </>
                    );
                }
                // Focused (or few enough to fit anyway): render every chip inside its own bounded,
                // scrollable box - not on `.MuiAutocomplete-inputRoot` itself, since that element also
                // owns the outlined border/radius and its native scrollbar isn't reliably clipped to it.
                return (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.5,
                            width: '100%',
                            maxHeight: 180,
                            overflowY: 'auto',
                        }}
                    >
                        {tagValue.map((option, index) => {
                            const { key, ...tagProps } = getTagProps({ index });
                            return <Chip key={key} {...tagProps} label={option.label} size="small" />;
                        })}
                    </Box>
                );
            }}
            renderOption={(props, option, { selected }) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        {isMultiSelect && (
                            <Checkbox size="small" disableRipple sx={{ mr: 1, p: 0 }} checked={selected} />
                        )}
                        <Typography variant="body2" noWrap>{option.label}</Typography>
                    </li>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant={filterMode ? 'outlined' : 'standard'}
                    error={!filterMode && Boolean(formik?.touched[field] && formik?.errors[field])}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {isChunkLoading && <CircularProgress color="inherit" size={16} />}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );

    if (filterMode) {
        return control;
    }

    return (
        <FormControl fullWidth error={Boolean(formik?.touched[field] && formik?.errors[field])} variant="standard">
            {control}
            <FormHelperText>{formik?.touched[field] && formik?.errors[field]}</FormHelperText>
        </FormControl>
    );
});

export default RemoteSelectField;
