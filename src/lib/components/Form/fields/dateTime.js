import React, { useMemo } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useStateContext } from '../../useRouter/StateProvider'

dayjs.extend(utc);

const Field = ({ column, field, formik, otherProps }) => {
    const { systemDateTimeFormat, stateData } = useStateContext();
    debugger
    const dateTimeValue = useMemo(() => {
        const val = formik.values[field];
        if (!val) return null;
        if (column.localize) {
            return dayjs(val);
        }
        // Non-localized: adjust UTC value to appear as local time so user sees raw UTC digits
        let date = new Date(val);
        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        date = new Date(date.getTime() + userTimezoneOffset);
        return dayjs(date);
    }, [formik.values[field], column]);
    
    return <DateTimePicker
        {...otherProps}
        variant="standard"
        readOnly={column?.readOnly === true}
        key={field}
        fullWidth
        format={systemDateTimeFormat(false, false, stateData.dateTime)}
        name={field}
        value={dateTimeValue}
        onChange={(value) => {
            if (!value) {
                formik.setFieldValue(field, null);
            } else {
                if (column.localize) {
                    formik.setFieldValue(field, value.toISOString());
                } else {
                    formik.setFieldValue(field, value.utcOffset(0, true).toISOString());
                }
            }
        }}
        onBlur={formik.handleBlur}
        helperText={formik.touched[field] && formik.errors[field]}
        minDateTime={(column.min ? dayjs(column.min) : null)}
        maxDateTime={(column.max ? dayjs(column.max) : null)}
        slotProps={{ textField: { fullWidth: true, helperText: formik.errors[field], variant: "standard" } }}
    />

}

export default Field;