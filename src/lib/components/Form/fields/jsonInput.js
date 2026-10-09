import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import useDebounce from '../../../hooks/useDebounce';

const parseJson = (raw) => {
    if (!raw) return {};
    try { return JSON.parse(raw); } catch { return {}; }
};

const Field = ({ column, field, formik }) => {
    const [state, setState] = React.useState(() => parseJson(formik.values[field]));
    const debouncedState = useDebounce(state, 300);
    const fieldValue = formik.values[field];

    // Update formik when debounced state changes
    React.useEffect(() => {
        if (column.readOnly) return;
        const nextValue = JSON.stringify(debouncedState);
        if (fieldValue !== nextValue) {
            formik.setFieldValue(field, nextValue);
        }
    }, [column.readOnly, debouncedState, field, formik, fieldValue]);

    // Resync local state when formik changes externally (e.g. form reinitialise). Can't be a plain
    // derived value: `state` is also directly user-edited via handleChange between formik updates.
    // react-doctor-disable-next-line no-derived-state-effect -- see rationale above
    React.useEffect(() => {
        setState(parseJson(fieldValue));
    }, [fieldValue]);

    const handleChange = (key, value) => {
        if (column.readOnly) return;
        const updatedState = { ...state, [key]: value };
        setState(updatedState);
    };

    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard"
            error={formik.touched[field] && Boolean(formik.errors[field])}
            style={{ marginBottom: '1rem' }}
        >
            {Object.keys(state).map((key) => (
                <div
                    key={key}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                    }}
                >
                    <Typography variant="body1" sx={{ width: "180px", marginRight: 2 }}>
                        {key}:
                    </Typography>
                    <Input
                        id={key}
                        name={key}
                        value={state[key]}
                        onChange={(e) => handleChange(key, e.target.value)}
                        readOnly={column.readOnly}
                        fullWidth
                        style={{ flex: 2 }}
                    />
                </div>
            ))}
        </FormControl>
    );
};

export default Field;
