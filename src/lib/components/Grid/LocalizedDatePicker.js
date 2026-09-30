import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
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

const isValidDate = (date) => {
    const parsedDate = dayjs(date);
    return parsedDate.isValid() && parsedDate.year() > 1900;
};

const LocalizedDatePicker = (props) => {
    const { fixedFilterFormat } = utils;
    const { item, applyValue, convert, colDef: colDefProp, columnType: explicitColumnType, apiRef } = props;
    const { systemDateTimeFormat, stateData } = useStateContext();
    // The filter panel passes apiRef and item but never colDef, so column flags come from the lookup
    const colDef = colDefProp ?? (item?.field ? apiRef?.current?.getColumn?.(item.field) : null);
    const columnType = explicitColumnType || colDef?.type || 'date';
    const filterFormat = fixedFilterFormat[columnType];
    const localize = colDef?.localize ?? props.localize ?? false;
    const format = systemDateTimeFormat(columnType !== "dateTime", false, stateData.dateTime);

    const [pendingValue, setPendingValue] = useState(item?.value ?? null);
    useEffect(() => {
        setPendingValue(item?.value ?? null);
    }, [item?.value]);

    const commitValue = (newValue) => {
        if (columnType !== "date" && columnType !== "dateTime") return;
        const isPartialDate = (value) => {
            if (typeof value !== 'string') return false;
            return !dayjs(value, format, true).isValid();
        };
        if (isPartialDate(newValue)) {
            return;
        }
        if (convert) {
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
        // A localized column is displayed in the viewer's timezone, so the picked wall clock has to go back as UTC to match what the column stores
        if (localize && columnType === 'dateTime') {
            applyValue({ ...item, value: dayjs(newValue).utc().format(filterFormat) });
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
    // A committed localized value is UTC, so it is read back through UTC to show the viewer's own time again
    const readsBackAsUtc = localize && columnType === 'dateTime' && typeof pendingValue === 'string';
    let Dateformatvalue = null;
    if (pendingValue) {
        Dateformatvalue = readsBackAsUtc ? dayjs.utc(pendingValue).local() : dayjs(pendingValue);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ComponentToRender
                fullWidth
                format={format}
                value={Dateformatvalue}
                onChange={setPendingValue}
                onAccept={commitValue}
                onClose={() => setPendingValue(item?.value ?? null)}
                {...(columnType === 'dateTime'
                    ? { views: ['year', 'month', 'day', 'hours', 'minutes', 'seconds'], timeSteps: { hours: 1, minutes: 1, seconds: 1 } }
                    : {})}
                slotProps={{
                    textField: {
                        variant: "standard",
                        inputProps: {
                            'aria-label': 'date-input'
                        }
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

const localizedDateFormat = (colProps) => getGridDateOperators(colProps?.columnType === 'dateTime').map((operator) => ({
    ...operator,
    InputComponent: operator.InputComponent
        ? (props) => <LocalizedDatePicker {...props} {...colProps} />
        : undefined
}));

export default localizedDateFormat;