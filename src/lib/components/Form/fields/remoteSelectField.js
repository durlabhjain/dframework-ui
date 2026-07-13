import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    TextField, Autocomplete, Checkbox, CircularProgress,
    FormControl, FormHelperText, Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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

    const { options, fetchOptions, labelMap } = useCascadingLookup({
        column, formik, lookups, dependsOn, model, lazy: true,
    });

    const rawValue = filterMode ? filterValue : formik?.values[field];
    const currentValue = useMemo(() => {
        if (isMultiSelect) {
            if (!rawValue || rawValue.length === 0) return [];
            if (!Array.isArray(rawValue)) return String(rawValue).split(',').map(v => v.trim()).map(v => (isNaN(v) ? v : Number(v)));
            return rawValue;
        }
        if (rawValue === 0 || rawValue === '0' || rawValue == null) return '';
        return rawValue;
    }, [rawValue, isMultiSelect]);

    // Open is tracked locally (not passed to Autocomplete) purely to gate the reload effect below.
    const [open, setOpen] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const searchTerm = useDebounce(searchInput, SEARCH_DEBOUNCE_MS);
    // Separate from the hook's isLoading, which is shared with the lookupId label-resolution fetch below.
    const [isChunkLoading, setIsChunkLoading] = useState(false);

    // append replaces vs. adds; isStale (forwarded into fetchOptions) cancels a reload superseded by a later one - a reload racing an in-flight scroll-append is an accepted, self-correcting edge case.
    const loadChunk = useCallback(async ({ start, append, isStale }) => {
        setIsChunkLoading(true);
        try {
            const result = await fetchOptions({ search: searchTerm, start, limit: chunkSize, append, isStale });
            if (isStale?.() || !result) return;
            const incomingLength = result.options?.length ?? 0;
            setHasMore(result.recordCount != null
                ? start + incomingLength < result.recordCount
                : incomingLength >= chunkSize);
        } finally {
            if (!isStale?.()) setIsChunkLoading(false);
        }
    }, [fetchOptions, searchTerm, chunkSize]);

    // Reloads on open/searchTerm change or when loadChunk's identity changes (e.g. fetchOptions becoming ready); cancelled discards out-of-order responses.
    useEffect(() => {
        if (!open) return;
        let cancelled = false;
        loadChunk({ start: 0, append: false, isStale: () => cancelled });
        return () => { cancelled = true; };
    }, [open, loadChunk]);

    // isChunkLoading also guards against overlapping "load more" requests from rapid scroll events.
    const handleScroll = useCallback((e) => {
        if (isChunkLoading || !hasMore) return;
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop - clientHeight > SCROLL_LOAD_MORE_THRESHOLD_PX) return;
        loadChunk({ start: options.length, append: true });
    }, [isChunkLoading, hasMore, loadChunk, options.length]);

    // Resolve display label for a pre-selected value that isn't cached in labelMap yet.
    const preselectedId = isMultiSelect ? currentValue[0] : currentValue;
    useEffect(() => {
        if (!preselectedId || Number(preselectedId) === 0 || String(preselectedId) in labelMap) return;
        fetchOptions({ lookupId: preselectedId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preselectedId, fetchOptions]);

    // labelMap is a superset of options (it also carries past chunks and lookupId resolutions).
    const getLabel = useCallback((key) => labelMap[String(key)] ?? String(key), [labelMap]);

    // Synthesised from labelMap (not looked up in options) so a selection outside the loaded/filtered page still shows its label.
    const selectedValue = useMemo(() => {
        if (isMultiSelect) return currentValue.map(v => ({ value: v, label: getLabel(v) }));
        return currentValue === '' ? null : { value: currentValue, label: getLabel(currentValue) };
    }, [currentValue, isMultiSelect, getLabel]);

    // No reset here: MUI also opens as a side effect of the first keystroke when focused-but-closed (e.g. grid filter auto-focus), which would wipe that keystroke.
    const handleOpen = useCallback(() => setOpen(true), []);
    // Also resets isChunkLoading, since a cancelled fetch's finally otherwise leaves it stuck.
    const handleClose = useCallback(() => { setOpen(false); setSearchInput(''); setIsChunkLoading(false); }, []);
    const handleInputChange = useCallback((e, value, reason) => {
        if (reason === 'input' || reason === 'clear') setSearchInput(value);
    }, []);

    // Clear search on an actual pick/unpick (content change), not on every `value` reference change Autocomplete resets internally in multi-select.
    const selectionSignature = isMultiSelect ? currentValue.map(String).join(',') : null;
    useEffect(() => {
        if (selectionSignature !== null) setSearchInput('');
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
            sx={{ '& .MuiAutocomplete-clearIndicator': { visibility: 'visible' } }}
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
            onInputChange={handleInputChange}
            disableCloseOnSelect={isMultiSelect}
            size="small"
            popupIcon={<KeyboardArrowDownIcon />}
            fullWidth
            limitTags={column.limitTags || 5}
            slotProps={{ listbox: { onScroll: handleScroll, style: { maxHeight: 280 } } }}
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
