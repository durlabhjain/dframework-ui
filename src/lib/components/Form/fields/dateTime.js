import { useMemo } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useStateContext } from '../../useRouter/StateProvider'

dayjs.extend(utc);

const EMPTY_FIELD_CONFIGS = {};

const Field = ({ column, field, formik, otherProps, fieldConfigs = EMPTY_FIELD_CONFIGS }) => {
    const isReadOnly = column?.readOnly === true || Boolean(fieldConfigs.readOnly);
    const { systemDateTimeFormat, stateData } = useStateContext();
    const fieldValue = formik.values[field];
    const dateTimeValue = useMemo(() => {
        if (!fieldValue) return null;
        return dayjs(fieldValue);
    }, [fieldValue]);
    
    return <DateTimePicker
        key={field}
        {...otherProps}
        variant="standard"
        readOnly={isReadOnly}
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