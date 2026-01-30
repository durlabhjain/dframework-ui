import React from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, FormHelperText, useTheme } from "@mui/material";

const Field = ({ field, formik, orientation = "row", label, lookups, fieldConfigs={}, mode, column, ...otherProps }) => {
    const handleChange = (event) => {
        formik.setFieldValue(field, event.target.value);
    }

    const options = lookups ? lookups[column.lookup || column.comboType] : [];
    const theme = useTheme();
    const selectField = column.selectField || field;
    const isError = formik.touched[selectField] && Boolean(formik.errors[selectField]);
    const isDisabled = mode !== 'copy' && fieldConfigs.disabled;
    const valueType = options[0] ? typeof options[0].value : 'string';
    const castValue = (value) => {
        if (valueType === 'number') return Number(value);
        if (valueType === 'boolean') return Boolean(value);
        return String(value);
    };
    const { showRadioLabel = true } = column;
    return (
        <>
            <FormControl component="fieldset" error={isError}>
                {showRadioLabel && <FormLabel id={`${selectField}-label`}>{label}</FormLabel>}
                <RadioGroup
                    row={orientation === "row"}
                    aria-labelledby={`${selectField}-label`}
                    name={selectField}
                    value={castValue(formik.values[selectField])}
                    onChange={handleChange}
                >
                    {options?.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                            disabled={isDisabled}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            {isError && <FormHelperText style={{ color: theme.palette.error.main }}>{formik.errors[field]}</FormHelperText>}
        </>
    );
};

export default Field;
