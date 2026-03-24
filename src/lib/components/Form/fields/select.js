import React, { useMemo, useCallback } from 'react';
import { FormHelperText, useTheme, IconButton, InputAdornment } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useCascadingLookup from '../../../hooks/useCascadingLookup';
import { useStateContext } from '../../useRouter/StateProvider';

const SelectField = React.memo(({ column, field, formik, lookups, dependsOn = [], model, tTranslate, tOpts, ...otherProps }) => {
    const userSelected = React.useRef(false);
    const { placeHolder } = column;
    const options = useCascadingLookup({ column, formik, lookups, dependsOn, userSelected, model });
    const theme = useTheme();
    const { stateData } = useStateContext();
    const userStateData = stateData?.userData?.userData || stateData?.userData;

    // Memoize the specific user field value so `inputValue` doesn't re-run when unrelated properties on `userStateData` change.
    const userFieldValue = React.useMemo(() => {
        return userStateData ? userStateData[column.field] : undefined;
    }, [userStateData, column.field]);

    // Memoize input value processing to avoid recalculation on each render
    const inputValue = useMemo(() => {
        let value = formik.values[field];

        // Handle user state default: if column.setUserDefault key is defined,look it up in userStateData and apply as the field default
        if (!value && !userSelected.current && column.setUserDefault && userFieldValue !== undefined) {
            const userDefault = userFieldValue;
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

        // Handle default value selection
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
    }, [formik.values[field], options, column.multiSelect, field, column.setUserDefault, userFieldValue]);

    const handleChange = useCallback((event) => {
        if (typeof column.onChange === 'function') {
            column.onChange({ formik, value: event.target.value, options, event , t: tTranslate, tOpts});
        }
        formik.handleChange(event);
        userSelected.current = true;
    }, [formik.values[field], column.onChange, options]);

    const hasValue = column.multiSelect
        ? (Array.isArray(inputValue) && inputValue.length > 0)
        : (inputValue !== '' && inputValue !== null && inputValue !== undefined &&
           Array.isArray(options) && options.some(o => String(o.value) === String(inputValue)));

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
            <Select
                IconComponent={KeyboardArrowDownIcon}
                {...otherProps}
                name={field}
                multiple={column.multiSelect === true}
                readOnly={column.readOnly === true}
                value={column.multiSelect ? (Array.isArray(inputValue) ? inputValue : []) : `${inputValue ?? ''}`}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                    hasValue && !column.readOnly ? (
                        <InputAdornment position="end" sx={{ mr: 2 }}>
                            <IconButton size="small" onClick={clearSelection} tabIndex={-1}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </InputAdornment>
                    ) : undefined
                }
                sx={{
                    backgroundColor: column.readOnly ? theme.palette?.action?.disabled : ''
                }}
            >
                {Array.isArray(options) && options.map(option => (
                    <MenuItem key={option.value} value={option.value} disabled={option.isDisabled}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{formik.touched[field] && formik.errors[field]}</FormHelperText>
        </FormControl>
    );
});

export default SelectField;