import { useMemo } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useStateContext } from '../../useRouter/StateProvider';

const EMPTY_FIELD_CONFIGS = {};

const Field = ({ column, field, formik, otherProps, fieldConfigs = EMPTY_FIELD_CONFIGS, mode }) => {
    const { systemDateTimeFormat, stateData } = useStateContext();
    const fieldValue = formik.values[field];
    const dateValue = useMemo(() => fieldValue ? dayjs(fieldValue) : null, [fieldValue]);
    const fieldError = formik.touched[field] && formik.errors[field];
    const minFieldValue = column.minField ? formik.values[column.minField] : null;
    const maxFieldValue = column.maxField ? formik.values[column.maxField] : null;

    // Ignore invalid range settings rather than generating invalid dates.
    const rangeDays = Number(column.maxRangeDays);
    const maxRangeDays = column.maxRangeDays != null && Number.isFinite(rangeDays) ? rangeDays : null;
    const minDate = column.min || minFieldValue;
    // An auto-filled maxField is an output, not an upper bound for this field.
    const maxDate = column.max || (maxRangeDays == null ? maxFieldValue : null);
    const rangeLimitDate = minFieldValue && maxRangeDays != null ? dayjs(minFieldValue).add(maxRangeDays, 'day') : null;

    const handleChange = (value) => {
        // Invalid picker values must be cleared before calling toISOString().
        const adjustedDate = value?.isValid() ? value.hour(12) : null;
        formik.setFieldValue(field, adjustedDate?.toISOString() ?? null);
        if (column.maxField && maxRangeDays != null) {
            formik.setFieldValue(column.maxField, adjustedDate?.add(maxRangeDays, 'day').toISOString() ?? null);
        }
    };
    
    return <DatePicker
        key={field}
        {...otherProps}
        readOnly={column.readOnly === true}
        format={systemDateTimeFormat(true, false, stateData.dateTime)}
        name={field}
        value={dateValue}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        minDate={minDate ? dayjs(minDate) : null}
        maxDate={maxDate ? dayjs(maxDate) : null}
        shouldDisableDate={rangeLimitDate ? day => day.isAfter(rangeLimitDate, 'day') : undefined}
        disabled={mode !== 'copy' && fieldConfigs.disabled}
        slotProps={{ textField: {
            fullWidth: true,
            variant: 'standard',
            // Preserve the picker's own error styling when Formik has no error.
            ...(fieldError && { error: true, helperText: fieldError })
        } }}
    />;
};

export default Field;
