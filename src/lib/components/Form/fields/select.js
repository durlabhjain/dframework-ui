import React from 'react';
import { FormHelperText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const field = ({ column, field, fieldLabel, formik, activeRecord, otherProps, classes, onChange, lookups }) => {
    const options = lookups ? lookups[column?.lookup] : [];
    let inputValue = Number(formik.values[field]);
    if (column.multiSelect) {
        if (!inputValue || inputValue.length === 0) {
            inputValue = [];
        }
        else {
            if (!Array.isArray(inputValue)) {
                inputValue = inputValue.split(',').map((e) => parseInt(e));
            }
        }
    }
    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard">
            <InputLabel>{fieldLabel}</InputLabel>
            <Select
                IconComponent={KeyboardArrowDownIcon}
                {...otherProps}
                name={field}
                multiple={column.multiSelect === true}
                readOnly={column.readOnly === true}
                value={inputValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                MenuProps={{
                    classes: {
                    }
                }}
            >
                {Array.isArray(options) && options.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
            </Select>
            <FormHelperText>{formik.touched[field] && formik.errors[field]}</FormHelperText>
        </FormControl>
    )
}

export default field;