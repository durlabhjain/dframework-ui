import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vite-plus/test';
import dayjs from 'dayjs';
import DateField from '../src/lib/components/Form/fields/date.js';

const picker = vi.hoisted(() => ({ props: {} }));
vi.mock('@mui/x-date-pickers/DatePicker', () => ({ DatePicker: props => { picker.props = props; return null; } }));
vi.mock('../src/lib/components/useRouter/StateProvider', () => ({
    useStateContext: () => ({ systemDateTimeFormat: () => 'DD-MMM-YYYY', stateData: { dateTime: {} } })
}));
afterEach(cleanup);

const mount = (column = {}, values = {}, extra = {}) => {
    const formik = { values, touched: {}, errors: {}, setFieldValue: vi.fn(), handleBlur: vi.fn() };
    render(<DateField column={column} field="start" formik={formik} {...extra} />);
    return formik;
};

it('stores a valid date at local noon and fills the related end date', () => {
    const formik = mount({ maxField: 'end', maxRangeDays: '7' });
    const date = dayjs('2026-10-27T03:15:00');
    picker.props.onChange(date);
    expect(formik.setFieldValue.mock.calls).toEqual([
        ['start', dayjs('2026-10-27T12:15:00').toISOString()],
        ['end', dayjs('2026-11-03T12:15:00').toISOString()]
    ]);
    expect(date.hour()).toBe(3);
});

it.each([null, dayjs('invalid')])('clears both range fields for %s without throwing', value => {
    const formik = mount({ maxField: 'end', maxRangeDays: 7 });
    picker.props.onChange(value);
    expect(formik.setFieldValue.mock.calls).toEqual([['start', null], ['end', null]]);
});

it.each([undefined, null, 'invalid', NaN, Infinity])('ignores a range setting of %s', maxRangeDays => {
    const formik = mount({ maxField: 'end', maxRangeDays }, { end: '2026-11-03' });
    picker.props.onChange(dayjs('2026-10-27'));
    expect(formik.setFieldValue).toHaveBeenCalledTimes(1);
    expect(picker.props.maxDate.format('YYYY-MM-DD')).toBe('2026-11-03');
});

it('honors a zero-day range without using the auto-filled end as a bound', () => {
    const formik = mount({ maxField: 'end', maxRangeDays: 0 }, { end: '2026-10-27' });
    const date = dayjs('2026-11-01');
    picker.props.onChange(date);
    expect(formik.setFieldValue.mock.calls).toEqual([
        ['start', dayjs('2026-11-01T12:00:00').toISOString()],
        ['end', dayjs('2026-11-01T12:00:00').toISOString()]
    ]);
    expect(picker.props.maxDate).toBeNull();
});

it('uses related bounds and lets explicit bounds take precedence', () => {
    const formik = mount({ minField: 'min', maxField: 'max' }, { min: '2026-10-01', max: '2026-10-31' });
    expect(picker.props.minDate.format('YYYY-MM-DD')).toBe('2026-10-01');
    expect(picker.props.maxDate.format('YYYY-MM-DD')).toBe('2026-10-31');
    render(<DateField column={{ minField: 'min', maxField: 'max', min: '2026-10-05', max: '2026-10-20' }} field="start" formik={formik} />);
    expect(picker.props.minDate.format('YYYY-MM-DD')).toBe('2026-10-05');
    expect(picker.props.maxDate.format('YYYY-MM-DD')).toBe('2026-10-20');
});

it('disables days past the range limit without blocking month navigation', () => {
    mount({ minField: 'min', maxRangeDays: 7 }, { min: '2026-10-27' });
    expect(picker.props.maxDate).toBeNull();
    expect(picker.props.shouldDisableDate(dayjs('2026-11-03T23:59:59'))).toBe(false);
    expect(picker.props.shouldDisableDate(dayjs('2026-11-04'))).toBe(true);
});

it.each(['edit', 'copy'])('honors disabled configuration in %s mode', mode => {
    mount({}, {}, { fieldConfigs: { disabled: true }, mode });
    expect(picker.props.disabled).toBe(mode !== 'copy');
});

it('only overrides the picker error when Formik has a touched error', () => {
    const formik = mount();
    expect(picker.props.slotProps.textField.error).toBeUndefined();
    formik.touched.start = true;
    formik.errors.start = 'Start: required';
    const view = render(<DateField column={{}} field="start" formik={formik} />);
    expect(picker.props.slotProps.textField).toMatchObject({ error: true, helperText: 'Start: required' });
    formik.errors = {};
    view.rerender(<DateField column={{}} field="start" formik={formik} />);
    expect(picker.props.slotProps.textField.error).toBeUndefined();
    expect(picker.props.slotProps.textField.helperText).toBeUndefined();
});
