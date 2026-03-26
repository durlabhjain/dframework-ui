import React, { useMemo, useCallback } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useStateContext } from '../../useRouter/StateProvider';

const Field = ({ column, field, formik, otherProps, fieldConfigs = {}, mode }) => {
    const isDisabled = mode !== 'copy' && fieldConfigs.disabled;
    const { systemDateTimeFormat, stateData } = useStateContext(); //provider
    
    const dateValue = useMemo(() => {
        return formik.values[field] ? dayjs(formik.values[field]) : null;
    }, [formik.values[field]]);

    const minFieldValue = column.minField ? formik.values[column.minField] : undefined;
    const maxFieldValue = column.maxField ? formik.values[column.maxField] : undefined;

    const minDateValue = useMemo(() => {
        if (column.min) return dayjs(column.min);
        if (column.minField && minFieldValue) return dayjs(minFieldValue);
        return null;
    }, [column.min, column.minField, minFieldValue]);

    const maxDateValue = useMemo(() => {
        if (column.max) return dayjs(column.max);
        if (column.maxField && maxFieldValue) return dayjs(maxFieldValue);
        return null;
    }, [column.max, column.maxField, maxFieldValue]);
    
    const handleChange = useCallback((value) => {
        if (value === null) {
            formik.setFieldValue(field, null);
            return;
        }
        const adjustedDate = dayjs(value).hour(12);
        const isoString = adjustedDate.toISOString();
        formik.setFieldValue(field, isoString);
    }, [field, formik]);

    const hasError = !!(formik.touched[field] && formik.errors[field]);
    
    return <DatePicker
        {...otherProps}
        variant="standard"
        readOnly={column?.readOnly === true}
        key={field}
        fullWidth
        format={systemDateTimeFormat(true, false, stateData.dateTime)}
        name={field}
        value={dateValue}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        minDate={minDateValue}
        maxDate={maxDateValue}
        disabled={isDisabled}
        slotProps={{ textField: { fullWidth: true, helperText: hasError ? formik.errors[field] : '', variant: "standard", error: hasError } }}
    />

}

export default Field;