import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { afterEach, beforeEach, expect, it, vi } from 'vite-plus/test';
import * as yup from 'yup';
import Form from '../src/lib/components/Form/Form.js';

const mocks = vi.hoisted(() => ({
    getRecord: vi.fn(), saveRecord: vi.fn(), deleteRecord: vi.fn(), transport: vi.fn(), getLookups: vi.fn(),
    router: { navigate: vi.fn(), useParams: () => ({ id: '0' }), pathname: '/items/0' },
    context: { stateData: { userData: {}, dateTime: {} }, buildUrl: x => x, setPageTitle: vi.fn(), getApiEndpoint: () => '/api', systemDateTimeFormat: () => 'DD-MMM-YYYY' },
    snackbar: { showMessage: vi.fn(), showError: vi.fn(), showErrorCode: vi.fn() },
    translation: { tTranslate: x => x, tOpts: {}, translate: false }
}));
vi.mock('../src/lib/components/useRouter/StateProvider', () => ({ useRouter: () => mocks.router, useStateContext: () => mocks.context }));
vi.mock('../src/lib/components/SnackBar', () => ({ useSnackbar: () => mocks.snackbar }));
vi.mock('../src/lib/hooks/useModelTranslation', () => ({ useModelTranslation: () => mocks.translation }));
vi.mock('../src/lib/components/Grid/crud-helper', () => ({ getRecord: mocks.getRecord, saveRecord: mocks.saveRecord, deleteRecord: mocks.deleteRecord, getLookups: mocks.getLookups }));
vi.mock('../src/lib/components/Grid/httpRequest', () => ({ default: vi.fn(), transport: mocks.transport, DATA_PARSERS: { json: x => x } }));
vi.mock('../src/lib/components/PageTitle', () => ({ default: () => null }));
vi.mock('../src/lib/components/Dialog', () => ({ DialogComponent: () => null }));
vi.mock('../src/lib/components/Form/relations', () => ({ default: () => null }));

const name = { field: 'name', type: 'string', label: 'Name', required: true };
const startDate = { field: 'startDate', type: 'date', label: 'Start Date', required: true, skipCopy: true };
const model = {
    title: 'Items', api: '/items', linkColumn: 'name', tabs: {}, formConfig: {},
    columns: [name, startDate],
    initialValues: { name: '', startDate: '', notes: '' },
    permissions: { add: true, edit: true, delete: false, copy: true },
    getValidationSchema: () => yup.object({
        name: yup.string().required('Name: required'),
        startDate: yup.date().nullable().transform((value, original) => (original ? value : null)).required('Start Date: required')
    }),
    navigateBack: false
};
const stepped = (...tabbedColumns) => ({ ...model, formConfig: { showTabbed: true }, tabs: { first: 'First', second: 'Second' }, columns: tabbedColumns });

const renderForm = (override) => render(<LocalizationProvider dateAdapter={AdapterDayjs}><Form model={override || model} /></LocalizationProvider>);
const findInput = (field) => waitFor(() => { const input = document.querySelector(`input[name="${field}"]`); expect(input).toBeTruthy(); return input; });
const shownFields = () => [...document.querySelectorAll('input')].map(input => input.name);
const click = async (label) => { await act(async () => { fireEvent.click(screen.getByRole('button', { name: label })); }); };

beforeEach(() => {
    vi.clearAllMocks();
    mocks.router.useParams = () => ({ id: '0' });
    window.history.replaceState({}, '', '/items/0');
    mocks.getRecord.mockResolvedValue({ id: '0', record: {}, lookups: {} });
    mocks.saveRecord.mockResolvedValue(true);
    mocks.getLookups.mockResolvedValue([]);
});
afterEach(cleanup);

it('Next holds an invalid step open until its fields are filled', async () => {
    renderForm(stepped({ ...name, tab: 'first' }, { field: 'notes', type: 'string', label: 'Notes', tab: 'second' }));
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    expect(shownFields()).toEqual(['name']);
    expect(screen.getByText('Name: required')).toBeTruthy();

    await act(async () => { fireEvent.change(await findInput('name'), { target: { name: 'name', value: 'Weekly check' } }); });
    await click('Next');
    expect(shownFields()).toEqual(['notes']);
});

it('Finish validates the final step', async () => {
    renderForm(stepped({ field: 'notes', type: 'string', label: 'Notes', tab: 'first' }, { ...name, tab: 'second' }));
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    await click('Finish');
    expect(mocks.saveRecord).not.toHaveBeenCalled();
    expect(mocks.snackbar.showError).toHaveBeenCalledWith('Name: required', null, 'error');
});

it('read-only forms can navigate past invalid values', async () => {
    mocks.router.useParams = () => ({ id: '7' });
    renderForm({
        ...stepped({ ...name, tab: 'first' }, { field: 'notes', type: 'string', label: 'Notes', tab: 'second' }),
        permissions: { edit: false, delete: true }
    });
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    expect(shownFields()).toEqual(['notes']);
    expect(screen.getByRole('button', { name: 'Finish' }).disabled).toBe(true);
});

it('a failed Finish returns to the earlier error and keeps Next available', async () => {
    renderForm({
        ...stepped({ ...name, tab: 'first' }, { field: 'notes', type: 'string', label: 'Notes', tab: 'second' }),
        getValidationSchema: () => yup.object({
            name: yup.string().when('notes', ([notes], schema) => notes === 'require name' ? schema.required('Name: required') : schema),
            notes: yup.string()
        })
    });
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    await act(async () => { fireEvent.change(await findInput('notes'), { target: { value: 'require name' } }); });
    await click('Finish');
    expect(mocks.saveRecord).not.toHaveBeenCalled();
    expect(shownFields()).toEqual(['name']);
    expect(screen.getByRole('button', { name: 'Next' })).toBeTruthy();
    await act(async () => { fireEvent.change(await findInput('name'), { target: { value: 'Weekly check' } }); });
    await click('Next');
    expect(shownFields()).toEqual(['notes']);
    await click('Finish');
    expect(mocks.saveRecord).toHaveBeenCalledTimes(1);
});

it('waits for asynchronous validation before allowing Next or Back', async () => {
    let pauseValidation = false;
    let releaseValidation;
    renderForm({
        ...stepped({ ...name, tab: 'first' }, { field: 'notes', type: 'string', label: 'Notes', tab: 'second' }),
        tabs: { first: 'First', second: 'Second', third: 'Third' },
        getValidationSchema: () => yup.object({
            name: yup.string().test('slow', 'Invalid', () => pauseValidation
                ? new Promise(resolve => { releaseValidation = resolve; })
                : true)
        })
    });
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    pauseValidation = true;
    await click('Next');
    expect(screen.getByRole('button', { name: 'Next' }).disabled).toBe(true);
    expect(screen.getByRole('button', { name: 'Back' }).disabled).toBe(true);
    await click('Back');
    expect(shownFields()).toEqual(['notes']);
    await act(async () => { releaseValidation(true); });
    expect(screen.getByRole('button', { name: 'Finish' }).disabled).toBe(false);
});

it('Next skips a configured step without validating its fields', async () => {
    renderForm({
        ...stepped(
            { field: 'skipNotes', type: 'boolean', label: 'Skip notes', tab: 'first', skip: { step: 1 } },
            { field: 'notes', type: 'string', label: 'Notes', tab: 'second' },
            { ...name, tab: 'third' }
        ),
        tabs: { first: 'First', second: 'Second', third: 'Third' },
        initialValues: { skipNotes: true, name: '', notes: '' },
        getValidationSchema: () => yup.object({ notes: yup.string().required('Notes: required') })
    });
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    expect(shownFields()).toEqual(['name']);
    await click('Back');
    expect(shownFields()).toEqual(['skipNotes']);
});

it('copy clears a skipCopy date and cannot be saved until it is re-entered', async () => {
    mocks.router.useParams = () => ({ id: '0-7' });
    mocks.getRecord.mockResolvedValue({ id: '7', record: { name: 'Weekly check', startDate: '2020-01-15T12:00:00.000Z' }, lookups: {} });
    renderForm();
    await screen.findByRole('button', { name: 'Save' });
    expect((await findInput('startDate')).value).toBe('');

    // Copy also blanks the linkColumn, so name has to be re-entered before the date is the open error.
    await act(async () => { fireEvent.change(await findInput('name'), { target: { name: 'name', value: 'Weekly check copy' } }); });
    await click('Save');
    expect(mocks.saveRecord).not.toHaveBeenCalled();
    expect(mocks.snackbar.showError).toHaveBeenCalledWith('Start Date: required', null, 'error');
});

it('editing the original keeps its saved date', async () => {
    mocks.router.useParams = () => ({ id: '7' });
    mocks.getRecord.mockResolvedValue({ id: '7', record: { name: 'Weekly check', startDate: '2020-01-15T12:00:00.000Z' }, lookups: {} });
    renderForm();
    await screen.findByRole('button', { name: 'Save' });
    expect((await findInput('startDate')).value).toBe('15-Jan-2020');
});

it('an unparseable date clears the field instead of crashing Next', async () => {
    mocks.router.useParams = () => ({ id: '7' });
    mocks.getRecord.mockResolvedValue({ id: '7', record: { startDate: '2026-03-10T12:00:00.000Z' }, lookups: {} });
    renderForm(stepped({ ...startDate, tab: 'first' }, { field: 'notes', type: 'string', label: 'Notes', tab: 'second' }));
    await screen.findByRole('button', { name: 'Next' });

    // 31-Feb fills every section, so MUI hands handleChange an invalid Dayjs rather than holding it back.
    const user = userEvent.setup({ document });
    await user.click(await findInput('startDate'));
    await user.keyboard('31');
    await user.keyboard('Feb');
    await user.keyboard('2026');
    await click('Next');

    expect(document.querySelector('input[name="startDate"]').value).toBe('');
    expect(shownFields()).toContain('startDate');
    // Rendered through the textField slot with error:true, so it is red like every other field's message.
    expect(screen.getByText('Start Date: required').classList).toContain('Mui-error');
});
