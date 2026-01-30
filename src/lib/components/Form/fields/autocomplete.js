import * as React from 'react';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import useCascadingLookup from '../../../hooks/useCascadingLookup';

const consts = {
    limitTags: 5
}

const Field = React.memo(({ column, field, formik, lookups, dependsOn = [], fieldConfigs = {}, mode, model, ...otherProps }) => {
    const options = useCascadingLookup({ column, formik, lookups, dependsOn, model, isAutoComplete: true });
    const isMultiSelect = !column.singleSelect; // If singleSelect is true, then it's NOT multi-select
    let inputValue = formik.values[field];
    
    // Handle value processing based on multi-select vs single-select
    let processedValue;
    if (isMultiSelect) {
        // Multi-select: ensure it's an array
        if (!inputValue) {
            processedValue = [];
        } else if (!Array.isArray(inputValue)) {
            processedValue = inputValue.split(", ").map(Number);
        } else {
            processedValue = inputValue;
        }
    } else {
        // Single select: ensure it's a single value
        processedValue = inputValue;
    }
    
    // Get the selected options for display
    const selectedOptions = isMultiSelect 
        ? (options?.filter(option => processedValue.includes(option.value)) || [])
        : (options?.find(option => option.value === processedValue) || null);
    
    const isDisabled = mode !== 'copy' && fieldConfigs.disabled;
    
    const handleAutoCompleteChange = (_, newValue) => {
        let toSave;
        if (isMultiSelect) {
            toSave = newValue?.map(val => val.value) || [];
            // multi-select values are stored as array or as comma-separated-string based on dataFormat
            if (column.dataFormat !== 'array') {
                toSave = toSave.length ? toSave.join(', ') : '';
            }
        } else {
            // Single select: store the single value
            toSave = newValue?.value || '';
        }
        formik.setFieldValue(field, toSave);
    };

    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard"
            error={formik.touched[field] && Boolean(formik.errors[field])}
        >
            <Autocomplete
                {...otherProps}
                multiple={isMultiSelect}
                id={field}
                limitTags={column.limitTags || consts.limitTags}
                options={options || []}
                getOptionLabel={(option) => option.label || ''}
                value={selectedOptions}
                renderInput={(params) => <TextField {...params} variant="standard" />}
                onChange={handleAutoCompleteChange}
                size="small"
                disabled={isDisabled}
            />
            {formik.touched[field] && formik.errors[field] && <FormHelperText>{formik.errors[field]}</FormHelperText>}
        </FormControl>
    )
});

export default Field;

