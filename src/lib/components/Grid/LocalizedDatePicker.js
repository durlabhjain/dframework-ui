import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { getGridDateOperators } from '@mui/x-data-grid-premium';
import utcPlugin from 'dayjs/plugin/utc.js';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useStateContext } from '../useRouter/StateProvider';
import utils from '../utils';

dayjs.extend(utcPlugin);
const componentMap = {
    date: DatePicker,
    dateTime: DateTimePicker
};

const LocalizedDatePicker = (props) => {
    const { fixedFilterFormat } = utils;
    const { item, applyValue, convert, colDef } = props;
    const { systemDateTimeFormat, stateData } = useStateContext();
    const columnType = colDef?.type || 'date';
    const filterFormat = fixedFilterFormat[columnType];
    const localize = colDef?.localize ?? props.localize ?? false;
    const isValidDate = (date) => {
        const parsedDate = dayjs(date);
        return parsedDate.isValid() && parsedDate.year() > 1900;
    };
    const format = systemDateTimeFormat(columnType !== "dateTime", false, stateData.dateTime);

    const handleFilterChange = (newValue) => {
        if (columnType !== "date" && columnType !== "dateTime") return;
        const isPartialDate = (value) => {
            if (typeof value !== 'string') return false;
            return !dayjs(value, format, true).isValid();
        };
        if (isPartialDate(newValue)) {
            return;
        }
        if (convert || localize) {
            if (!newValue) {
                applyValue({ ...item, value: null });
                return;
            }
            newValue = dayjs(newValue).utc();
            applyValue({ ...item, value: newValue });
            return;
        }
        if (!isValidDate(newValue)) {
            applyValue({ ...item, value: null });
            return;
        }
        applyValue({ ...item, value: newValue.format(filterFormat) });
    };
    const getMonthAbbreviation = (format) => {
        if (format && format === fixedFilterFormat.OverrideDateFormat) {
            const parts = format.split('-');
            return parts.length === 3 ? parts[1] : null;
        }
    };
    const ComponentToRender = componentMap[columnType];
    const Dateformatvalue = item?.value ? dayjs(item.value) : null;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ComponentToRender
                fullWidth
                format={format}
                value={Dateformatvalue}
                onChange={handleFilterChange}
                slotProps={{
                    textField: {
                        variant: "standard"
                    }
                }}
                localeText={{
                    fieldMonthPlaceholder: () => {
                        const monthAbbreviation = getMonthAbbreviation(format);
                        return monthAbbreviation === "MMM" ? 'MMM' : 'MM';
                    }
                }}
            />
        </LocalizationProvider>
    );
};

const localizedDateFormat = (colProps) => getGridDateOperators().map((operator) => ({
    ...operator,
    InputComponent: operator.InputComponent
        ? (props) => <LocalizedDatePicker {...props} {...colProps} />
        : undefined
}));

export default localizedDateFormat;