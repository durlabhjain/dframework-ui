import * as React from 'react';
import { FormHelperText, useTheme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { useCallback } from 'react';

const EMPTY_FIELD_CONFIGS = {};

const Field = ({ isAdd, column, field, formik, otherProps, fieldConfigs = EMPTY_FIELD_CONFIGS }) => {
    const theme = useTheme();
    const fieldValue = formik.values[field];
    const inputValue = React.useMemo(() => {
        const value = fieldValue || [];
        return Array.isArray(value) ? value : value.split(',').map(item => item.trim());
    }, [fieldValue]);
    const isDisabled = React.useMemo(() => {
        if (typeof fieldConfigs.disabled !== 'undefined') return fieldConfigs.disabled;
        if (typeof column.disabled === 'function') return column.disabled({ isAdd, formik });
        return Boolean(column.disabled);
    }, [fieldConfigs.disabled, column, isAdd, formik]);
    const fixedOptions = React.useMemo(
        () => (column.hasDefault && !isAdd ? [inputValue[0]] : []),
        [column, isAdd, inputValue]
    );
    const [inputText, setInputText] = React.useState('');

    const handleAutoCompleteChange = useCallback((e, newValue, action, item = {}) => {
        const lastElement = newValue.pop()?.trim();
        if (!newValue.includes(lastElement)) {
            newValue.push(lastElement);
        }
        if (column.max && newValue.length > column.max) {
            newValue.pop(); // remove the last added tag, exceeding the limit
            return;
        }
        if (fixedOptions && fixedOptions.includes(item.option) && action === "removeOption") {
            newValue = [item.option];
        }
        // multi-select values are stored as array or as comma-separated-string based on dataFormat
        if (column.dataFormat !== 'array') {
            newValue = newValue.length ? newValue.join(',') : '';
        }
        formik.setFieldValue(field, newValue);
    }, [formik, field, column, fixedOptions]);

    const handleInputBlur = useCallback((e) => {
        const typedValue = e.target.value?.trim();
        if (typedValue) {
            handleAutoCompleteChange(e, [...inputValue, typedValue], 'createOption');
        }
        setInputText('');
    }, [handleAutoCompleteChange, inputValue]);

    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard"
            error={formik.touched[field] && Boolean(formik.errors[field])}
        >
            <Autocomplete
                {...otherProps}
                multiple
                id={field}
                freeSolo={true}
                value={inputValue}
                inputValue={inputText}
                onInputChange={(e, newInputValue) => setInputText(newInputValue)}
                options={[]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        InputProps={{
                            ...params.InputProps,
                            sx: {
                                ...params.InputProps?.sx,
                                ...(isDisabled && { backgroundColor: theme.palette?.action?.disabled })
                            }
                        }}
                        onBlur={(e) => {
                            params.inputProps?.onBlur?.(e);
                            handleInputBlur(e);
                        }}
                    />
                )}
                onChange={handleAutoCompleteChange}
                size="small"
                renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });
                        return (
                            <Chip
                                key={key}
                                label={option}
                                {...tagProps}
                                disabled={fixedOptions.includes(option)}
                            />
                        );
                    })
                }
                disabled={isDisabled}
            />
            {formik.touched[field] && formik.errors[field] && <FormHelperText>{formik.errors[field]}</FormHelperText>}
        </FormControl>
    )
}

export default Field;

