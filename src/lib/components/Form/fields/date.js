import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';

const Field = ({ column, field, fieldLabel, formik, otherProps, classes, fieldConfigs }) => {
    const isDisabled = fieldConfigs?.disabled;

    if (column.modifiedLabel) {
        const dateValue = formik.values[field] ? dayjs(formik.values[field]) : null;
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <InputLabel sx={{ margin: '0.9rem 2rem 2.5rem 0rem', position: 'absolute', zIndex: '1', transform: 'translate(14px, -9px) scale(0.75)' }}>{column.label}</InputLabel>
                <DatePicker
                    {...otherProps}
                    variant="standard"
                    readOnly={column?.readOnly === true}
                    key={field}
                    fullWidth
                    sx={{
                        width: '337px', backgroundColor: '#364072 !important', '& .MuiOutlinedInput-input': {
                            padding: '1.65625rem 0.875rem 0.59375rem 0.875rem !important',
                        },
                        '& .css-4i5lc0-MuiInputBase-input-MuiOutlinedInput-input': {
                            backgroundColor: '#364072 !important'
                        },
                        '& .css-zh6go5-MuiInputBase-root-MuiOutlinedInput-root': {
                            backgroundColor: '#364072 !important'
                        }
                    }}
                    name={field}
                    value={dateValue}
                    components={{
                        OpenPickerIcon: CalendarMonthIcon
                    }}
                    onChange={(value) => formik.setFieldValue(field, value)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched[field] && formik.errors[field]}
                    disablePast={column?.disablePast}
                    disabled={isDisabled}
                    renderInput={(params) => {
                        let helperText;
                        if (isDisabled && column.showErrorText) {
                            helperText = `Survey already started`;
                        } else if (formik.touched[field] && formik.errors[field]) {
                            helperText = formik.errors[field];
                        }
                        const showError = !!helperText;
                        const props = { ...params, variant: "standard", error: showError };
                        return <TextField
                            {...props}
                            label={column.label}
                            placeholder="MM/DD/YYYY"
                            helperText={helperText}
                            fullWidth
                            sx={{
                                width: '337px',
                                backgroundColor: '#364072',
                                color: '#FFFFFF',
                                padding: '1.65625rem 0.875rem 0.59375rem 0.875rem',
                                '& .MuiInputLabel-root': {
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '1.65625rem 0.875rem 0.59375rem 0.875rem',
                                },
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                    }}
                />
            </LocalizationProvider>
        );
    } else {
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    {...otherProps}
                    variant="standard"
                    readOnly={column?.readOnly === true}
                    key={field}
                    fullWidth
                    name={field}
                    value={formik.values[field]}
                    onChange={(value) => formik.setFieldValue(field, value)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched[field] && formik.errors[field]}
                    disablePast={column?.disablePast}
                    disabled={isDisabled}
                    renderInput={(params) => {
                        let helperText;
                        if (isDisabled && column.showErrorText) {
                            helperText = `Survey already started`;
                        } else if (formik.touched[field] && formik.errors[field]) {
                            helperText = formik.errors[field];
                        }
                        const showError = !!helperText;
                        const props = { ...params, variant: "standard", error: showError };
                        return <TextField
                            {...props}
                            helperText={helperText}
                            fullWidth />
                    }}
                />
            </LocalizationProvider>
        );
    }
};

export default Field;
