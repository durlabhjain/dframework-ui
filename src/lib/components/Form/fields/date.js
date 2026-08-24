import { useMemo, useCallback } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useStateContext } from '../../useRouter/StateProvider';

const EMPTY_FIELD_CONFIGS = {};

const Field = ({ column, field, formik, otherProps, fieldConfigs = EMPTY_FIELD_CONFIGS, mode }) => {
    const isDisabled = mode !== 'copy' && fieldConfigs.disabled;
    const { systemDateTimeFormat, stateData } = useStateContext(); //provider
    
    const fieldValue = formik.values[field];
    const dateValue = useMemo(() => {
        return fieldValue ? dayjs(fieldValue) : null;
    }, [fieldValue]);

    const minFieldValue = column.minField ? formik.values[column.minField] : undefined;
    const maxFieldValue = column.maxField ? formik.values[column.maxField] : undefined;

    const minDateValue = useMemo(() => {
        if (column.min) return dayjs(column.min);
        if (column.minField && minFieldValue) return dayjs(minFieldValue);
        return null;
    }, [column.min, column.minField, minFieldValue]);

    const maxDateValue = useMemo(() => {
        if (column.max) return dayjs(column.max);
        // When maxRangeDays drives this field (see handleChange), maxField holds a value
        // this field just auto-set, not an independent upper bound — don't clamp maxDate to it.
        if (column.maxField && column.maxRangeDays == null && maxFieldValue) return dayjs(maxFieldValue);
        return null;
    }, [column.max, column.maxField, column.maxRangeDays, maxFieldValue]);

    // minField + maxRangeDays: days past minField + maxRangeDays stay visible on the calendar but disabled, rather than bounding maxDate (which would also block navigating to those months).
    const rangeLimitDate = useMemo(() => {
        if (column.minField && column.maxRangeDays != null && minFieldValue) return dayjs(minFieldValue).add(Number(column.maxRangeDays), 'day');
        return null;
    }, [column.minField, column.maxRangeDays, minFieldValue]);

    const shouldDisableDate = useCallback((day) => Boolean(rangeLimitDate) && day.isAfter(rangeLimitDate, 'day'), [rangeLimitDate]);

    const handleChange = useCallback((value) => {
        if (value === null) {
            formik.setFieldValue(field, null);
            if (column.maxField && column.maxRangeDays != null) formik.setFieldValue(column.maxField, null);
            return;
        }
        const adjustedDate = dayjs(value).hour(12);
        formik.setFieldValue(field, adjustedDate.toISOString());

        if (column.maxField && column.maxRangeDays != null) formik.setFieldValue(column.maxField, adjustedDate.add(Number(column.maxRangeDays), 'day').toISOString());
    }, [field, formik, column.maxField, column.maxRangeDays]);
    
    return <DatePicker
        key={field}
        {...otherProps}
        variant="standard"
        readOnly={column?.readOnly === true}
        fullWidth
        format={systemDateTimeFormat(true, false, stateData.dateTime)}
        name={field}
        value={dateValue}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched[field] && formik.errors[field]}
        minDate={minDateValue}
        maxDate={maxDateValue}
        shouldDisableDate={rangeLimitDate ? shouldDisableDate : undefined}
        disabled={isDisabled}
        slotProps={{ textField: { fullWidth: true, variant: "standard" } }}
    />

}

export default Field;