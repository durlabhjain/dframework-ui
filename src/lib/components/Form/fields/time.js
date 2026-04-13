import React from 'react';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';

dayjs.extend(utcPlugin);

const field = ({ column, field, formik, otherProps }) => {
    return <TimePicker
        {...otherProps}
        variant="standard"
        readOnly={column.readOnly === true}
        key={field}
        fullWidth
        name={field}
        value={formik.values[field]}
        onBlur={formik.handleBlur}
        helperText={formik.touched[field] && formik.errors[field]}
        slotProps={{ textField: { fullWidth: true, helperText: formik.errors[field], variant: "standard" } }}
    />
}

export default field;