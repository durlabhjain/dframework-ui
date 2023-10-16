import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const Field = ({ column, field, fieldLabel, formik, otherProps, classes }) => {
    const [timePeriod, setTimePeriod] = useState('AM');

    const handleRadioChange = (event) => {
        setTimePeriod(event.target.value);
        const combinedValue = `${formik.values[field]} ${event.target.value}`;
        formik.setFieldValue(field, combinedValue);
    };

    if (column.modifiedLabel) {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    type="text"
                    variant="filled"
                    placeholder="Enter/Select"
                    label={column.label}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        readOnly: column?.readOnly === true,
                        disableUnderline: true,
                        endAdornment: (
                            <KeyboardArrowDownIcon style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                        ),
                        style: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            marginLeft: '5px'
                        }
                    }}
                    key={field}
                    required={column?.required}
                    fullWidth
                    sx={{ width: '300px',backgroundColor: 'transparent !important' }}
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[field] && Boolean(formik.errors[field])}
                    helperText={formik.touched[field] && formik.errors[field]}
                    {...otherProps}
                />

                <FormControl component="fieldset">
                    <RadioGroup
                        style={{ flexDirection: 'row', marginLeft: '2.9rem', flexWrap: 'nowrap' }}
                        value={timePeriod}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="AM" control={<Radio checked={timePeriod === 'AM'} />} label="AM" />
                        <FormControlLabel value="PM" control={<Radio checked={timePeriod === 'PM'} sx={{ color: timePeriod === 'PM' ? 'primary.silverBlue ' : '' }} />} label="PM" />
                    </RadioGroup>
                </FormControl>
            </div>
        );
    } else {
        let inputValue = formik.values[field];
        if (column.isUtc) {
            inputValue = dayjs.utc(inputValue).utcOffset(dayjs().utcOffset(), true).format();
        }
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    {...otherProps}
                    variant="standard"
                    readOnly={column?.readOnly === true}
                    key={field}
                    fullWidth
                    name={field}
                    value={inputValue}
                    onChange={(value) => {
                        if (column.isUtc) {
                            value = (value && value.isValid()) ? value.format('YYYY-MM-DDTHH:mm:ss') + '.000Z' : null;
                        }
                        return formik.setFieldValue(field, value);
                    }}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched[field] && formik.errors[field]}
                    renderInput={(params) => {
                        const props = { ...params, variant: "standard" };
                        return <TextField
                            {...props}
                            helperText={formik.errors[field]}
                            fullWidth />
                    }}
                />
            </LocalizationProvider>
        );
    }
};

export default Field;
