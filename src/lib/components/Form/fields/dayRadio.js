import { useCallback, useMemo, useState } from 'react';
import { Avatar, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, styled, useTheme } from '@mui/material';
import {  grey } from '@mui/material/colors';
import { brandBackgroundColor } from './CustomRenderCell';


const days = [
    { label: 'Sunday', value: 0, display: 'S' },
    { label: 'Monday', value: 1, display: 'M' },
    { label: 'Tuesday', value: 2, display: 'T' },
    { label: 'Wednesday', value: 3, display: 'W' },
    { label: 'Thursday', value: 4, display: 'T' },
    { label: 'Friday', value: 5, display: 'F' },
    { label: 'Saturday', value: 6, display: 'S' },
];

const CustomAvator = styled(Avatar)(({ isSelected }) => ({
    width: 34,
    height: 34,
    padding: 1,
    margin: 1,
    backgroundColor: isSelected ? brandBackgroundColor : '#ffffff',
    border: `1px solid ${grey[500]}`,
    color: isSelected ? 'white' : 'black',
}));

const DayAvatar = ({ day, onClick, isSelected, disabled }) => {
    return (
        <CustomAvator
            key={day.value}
            onClick={disabled ? undefined : () => onClick(day.value)}
            aria-disabled={disabled}
            isSelected={isSelected}
            style={{ margin: '4px' }}
        >
            {day.display}
        </CustomAvator>
    );
};
const DaySelection = ({ name, field, formik, expired, column }) => {
    const isDisabled = Boolean(expired || column.readOnly);
    const { setFieldValue } = formik;
    const { value } = formik.getFieldProps(name || field);

    const isWeekend = '1000001';
    const isWeekdays = '0111110';
    const defaultVal = "0".repeat(7);

    // Derived from the formik value rather than held in state: on an edit form the record arrives after this field first renders, and state seeded at mount would keep showing the empty selection.
    const selectedDays = value || defaultVal;
    const radioValue = useMemo(() => {
        if (!value) return '';
        if (value === isWeekend) return isWeekend;
        if (value === isWeekdays) return isWeekdays;
        return 'Custom';
    }, [value]);
    const [presetSelected, setPresetSelected] = useState(false);
    const onAssignChange = useCallback((newValue) => {
        if (isDisabled) return;
        if (Array.isArray(newValue)) {
            let finalValue = defaultVal;
            for (const val of newValue) {
                finalValue = finalValue.substring(0, val) + "1" + finalValue.substring(val + 1);
            }
            setFieldValue(name || field, finalValue);
            setPresetSelected(true);
        } else {
            const baseValue = presetSelected ? defaultVal : selectedDays;
            const finalValue = baseValue.slice(0, newValue) + (baseValue[newValue] === "1" ? "0" : "1") + baseValue.slice(newValue + 1);
            setFieldValue(name || field, finalValue);
            setPresetSelected(false);
        }
    }, [isDisabled, presetSelected, defaultVal, selectedDays, name, field, setFieldValue]);
    const theme = useTheme();
    const isError = formik.touched[field] && Boolean(formik.errors[field]);
    return (
        <>
            <FormControl component="fieldset" error={isError}>
                <RadioGroup
                    row
                    name={name || field}
                    value={radioValue}
                    onChange={event => {
                        if (isDisabled) return;
                        const val = event.target.value;
                        if (val !== 'Custom') {
                            setFieldValue(name || field, val);
                            setPresetSelected(true);
                        } else {
                            setFieldValue(name || field, defaultVal);
                            setPresetSelected(false);
                        }
                    }}
                >
                    <FormControlLabel value={isWeekend} control={<Radio />} label={"Weekends (Sat - Sun)"} disabled={isDisabled} onClick={() => onAssignChange([0, 6])} />
                    <FormControlLabel value={isWeekdays} control={<Radio />} label={"Weekdays (Mon - Fri)"} disabled={isDisabled} onClick={() => onAssignChange([1, 2, 3, 4, 5])} />
                    <FormControlLabel value={'Custom'} control={<Radio />} label={"Specific days"} disabled={isDisabled} />
                    {days.map((day, index) => (
                        <DayAvatar
                            key={day.value}
                            day={day}
                            onClick={() => onAssignChange(index)}
                            isSelected={radioValue === 'Custom' && selectedDays[index] === "1"}
                            disabled={isDisabled}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            {isError && <FormHelperText style={{ color: theme.palette.error.main }}>{formik.errors[field]}</FormHelperText>}
        </>
    );
};

export default DaySelection;
