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
    initialValues: { name: '', startDate: '' },
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

it('Finish still reports an invalid earlier step', async () => {
    renderForm(stepped({ field: 'notes', type: 'string', label: 'Notes', tab: 'first' }, { ...name, tab: 'second' }));
    await screen.findByRole('button', { name: 'Next' });
    await click('Next');
    await click('Finish');
    expect(mocks.saveRecord).not.toHaveBeenCalled();
    expect(mocks.snackbar.showError).toHaveBeenCalledWith('Name: required', null, 'error');
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
    expect(screen.getByText('Start Date: required')).toBeTruthy();
});
