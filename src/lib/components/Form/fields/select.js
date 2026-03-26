import React, { useMemo, useCallback } from 'react';
import { FormHelperText, useTheme, IconButton, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useCascadingLookup from '../../../hooks/useCascadingLookup';

const SelectField = React.memo(({ column, field, formik, lookups, dependsOn = [], model, tTranslate, tOpts, ...otherProps }) => {
    const userSelected = React.useRef(false);
    const { placeHolder } = column;
    const options = useCascadingLookup({ column, formik, lookups, dependsOn, userSelected, model });
    const theme = useTheme();

    // Memoize input value processing to avoid recalculation on each render
    const inputValue = useMemo(() => {
        let value = formik.values[field];

        // Handle default value from column.defaultValue
        if (!value && !userSelected.current && column.defaultValue !== undefined) {
            const userDefault = column.defaultValue;
            if (userDefault !== undefined && userDefault !== null && userDefault !== '') {
                if (options && options.length) {
                    const defaultOption = options.find(o => String(o.value) === String(userDefault));
                    if (defaultOption) {
                        value = defaultOption.value;
                        formik.setFieldValue(field, defaultOption.value);
                    }
                }
            }
        }

        // Handle default value selection based on IsDefault property in options
        if (options?.length && !value && !userSelected.current && !column.multiSelect && "IsDefault" in options[0]) {
            const isDefaultOption = options.find(e => e.IsDefault);
            if (isDefaultOption) {
                value = isDefaultOption.value;
                formik.setFieldValue(field, isDefaultOption.value);
            }
        }
        
        // Handle multi-select values
        if (column.multiSelect) {
            if (!value || value.length === 0) {
                value = [];
            } else if (!Array.isArray(value)) {
                value = value.split(',').map((e) => parseInt(e));
            }
        }
        
        return value;
    }, [formik.values[field], options, column.multiSelect, field]);

    const handleChange = useCallback((event) => {
        if (typeof column.onChange === 'function') {
            column.onChange({ formik, value: event.target.value, options, event , t: tTranslate, tOpts});
        }
        formik.handleChange(event);
        userSelected.current = true;
    }, [formik.values[field], column.onChange, options]);

    // Determine if the current value is valid and should show the clear button
    const hasValue = useMemo(() => {
        if (column.multiSelect) {
            return Array.isArray(inputValue) && inputValue.length > 0;
        }
        return inputValue !== '' && inputValue !== null && inputValue !== undefined &&
               Array.isArray(options) && options.some(o => String(o.value) === String(inputValue));
    }, [inputValue, column.multiSelect, options]);

    // Determine if any dependency is empty (memoized)
    const isDependentFieldEmpty = useMemo(() => {
        if (!Array.isArray(dependsOn) || dependsOn.length === 0) return false;
        return dependsOn.some(dep => {
            const val = formik.values?.[dep];
            if (val == null) return true;
            if (Array.isArray(val)) return val.length === 0;
            if (typeof val === 'string' && val.trim() === '') return true;
            // Treat numeric/string zero as empty for lookup keys (common pattern where 0 means unset)
            if (val === 0 || val === '0') return true;
            return false;
        });
    // only re-evaluate when the dependent values (not unrelated form fields) change
    }, [dependsOn, ...(Array.isArray(dependsOn) ? dependsOn.map(dep => formik.values?.[dep]) : [])]);

    const clearSelection = useCallback((e) => {
        e.stopPropagation();
        const newValue = column.multiSelect ? [] : '';
        formik.setFieldValue(field, newValue);
        if (typeof column.onChange === 'function') {
            column.onChange({ formik, value: newValue, options, t: tTranslate, tOpts });
        }
        userSelected.current = true;
    }, [column.multiSelect, field, formik, column.onChange, options, tTranslate, tOpts]);

    return (
        <FormControl
            fullWidth
            key={field}
            error={formik.touched[field] && formik.errors[field]}
            variant="standard">
            <InputLabel>{placeHolder ? placeHolder : ""}</InputLabel>
            <Box sx={{ position: 'relative' }}>
                <Select
                    IconComponent={KeyboardArrowDownIcon}
                    {...otherProps}
                    name={field}
                    multiple={column.multiSelect === true}
                    readOnly={column.readOnly === true}
                    // Only disable when the column is disableOnEmptyDependentField and at least one dependent field is empty.
                    disabled={column.disableOnEmptyDependentField  && isDependentFieldEmpty}
                    value={column.multiSelect ? (Array.isArray(inputValue) ? inputValue : []) : `${inputValue ?? ''}`}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                    sx={{
                        width: '100%',
                        backgroundColor: column.readOnly ? theme.palette?.action?.disabled : ''
                    }}
                >
                    {Array.isArray(options) && options.map(option => (
                        <MenuItem key={option.value} value={option.value} disabled={option.isDisabled}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {hasValue && !column.readOnly && (
                    <IconButton
                        size="small"
                        onClick={clearSelection}
                        tabIndex={-1}
                        sx={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', p: '2px' }}
                    >
                        <ClearIcon fontSize="small" aria-label={tTranslate('Clear selection', tOpts)} />
                    </IconButton>
                )}
            </Box>
            <FormHelperText>{formik.touched[field] && formik.errors[field]}</FormHelperText>
        </FormControl>
    );
});

export default SelectField;