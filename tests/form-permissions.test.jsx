import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Form from '../src/lib/components/Form/Form.js';
import FormLayout from '../src/lib/components/Form/field-mapper.js';

const mocks = vi.hoisted(() => ({
    getRecord: vi.fn(), saveRecord: vi.fn(), deleteRecord: vi.fn(), transport: vi.fn(), getLookups: vi.fn(),
    router: { navigate: vi.fn(), useParams: () => ({ id: '7' }), pathname: '/items/7' },
    context: { stateData: { userData: {} }, buildUrl: x => x, setPageTitle: vi.fn(), getApiEndpoint: () => '/api' },
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
vi.mock('../src/lib/components/Form/relations', () => ({ default: ({ readOnly }) => <div data-testid="relations" data-readonly={String(readOnly)} /> }));

const model = {
    title: 'Items', api: '/items', columns: [{ field: 'name', type: 'string', label: 'Name' }],
    initialValues: {}, permissions: { add: false, edit: false, delete: true },
    formConfig: {}, tabs: { main: 'Main' }, getValidationSchema: () => undefined, navigateBack: false
};
beforeEach(() => {
    vi.clearAllMocks();
    mocks.router.useParams = () => ({ id: '7' });
    window.history.replaceState({}, '', '/items/7');
    mocks.getRecord.mockResolvedValue({ id: '7', record: { name: 'Example', choice: '1' }, lookups: { choices: [{ value: '1', label: 'One' }, { value: '2', label: 'Two' }] } });
    mocks.saveRecord.mockResolvedValue(true);
    mocks.getLookups.mockResolvedValue([]);
});
afterEach(cleanup);

it('delete-only tabbed forms cannot submit through Finish', async () => {
    render(<Form model={{ ...model, formConfig: { showTabbed: true }, columns: [{ ...model.columns[0], tab: 'main' }] }} />);
    const finish = await screen.findByRole('button', { name: 'Finish' });
    expect(finish.disabled).toBe(true);
    fireEvent.click(finish);
    expect(mocks.saveRecord).not.toHaveBeenCalled();
});

it.each(['handleSubmit', 'submitForm'])('guards custom layout submission via %s', async (method) => {
    const beforeSubmit = vi.fn();
    let submit;
    const Layout = ({ handleSubmit, formik }) => { submit = method === 'handleSubmit' ? handleSubmit : formik.submitForm; return <div>Custom form</div>; };
    render(<Form model={model} Layout={Layout} beforeSubmit={beforeSubmit} />);
    await screen.findByText('Custom form');
    await act(async () => { await submit(); });
    expect(beforeSubmit).not.toHaveBeenCalled();
    expect(mocks.saveRecord).not.toHaveBeenCalled();
});

it('delete-only radio fields cannot change', async () => {
    render(<Form model={{ ...model, columns: [{ field: 'choice', type: 'radio', label: 'Choice', lookup: 'choices' }] }} />);
    const radio = await screen.findByRole('radio', { name: 'Two' });
    expect(radio.disabled).toBe(true);
    fireEvent.click(radio);
    expect(radio.checked).toBe(false);
});

it.each(['grid', 'form', 'both'])('honors %s action placement for delete-only users', async (actions) => {
    render(<Form model={{ ...model, actions }} />);
    await screen.findByRole('button', { name: 'Cancel' });
    expect(Boolean(screen.queryByRole('button', { name: 'Delete' }))).toBe(actions !== 'grid');
});

it.each(['prop', 'model', 'showRelation'])('%s read-only blocks all mutations and locks relations', async (source) => {
    if (source === 'showRelation') window.history.replaceState({}, '', '/items/7?showRelation');
    render(<Form model={{ ...model, readOnly: source === 'model', relations: ['child'], actions: 'both', permissions: { add: true, edit: true, delete: true, copy: true } }} readOnly={source === 'prop'} />);
    await screen.findByRole('button', { name: 'Cancel' });
    for (const name of ['Save', 'Copy', 'Delete']) expect(screen.queryByRole('button', { name })).toBeNull();
    expect(screen.getByRole('textbox').readOnly).toBe(true);
    expect(screen.getByTestId('relations').dataset.readonly).toBe('true');
});

it('delete-only file upload cannot select or post a file', async () => {
    mocks.getRecord.mockResolvedValue({ id: '7', record: { attachment: 'http://localhost/media/existing' }, lookups: {} });
    render(<Form model={{ ...model, columns: [{ field: 'attachment', type: 'fileUpload', label: 'Attachment' }] }} />);
    const input = await screen.findByLabelText('Choose file');
    expect(input.disabled).toBe(true);
    fireEvent.change(input, { target: { files: [new File(['data'], 'new.txt', { type: 'text/plain' })] } });
    const upload = screen.getByRole('button', { name: 'Upload File' });
    expect(upload.disabled).toBe(true);
    fireEvent.click(upload);
    expect(mocks.transport).not.toHaveBeenCalled();
});

it.each(['0', '0-7'])('add-only users can save %s, including a copy of a locked source', async (id) => {
    mocks.router.useParams = () => ({ id });
    mocks.getRecord.mockResolvedValue({ id: '7', record: { name: 'Copy', canEdit: false }, lookups: {} });
    render(<Form model={{ ...model, permissions: { add: true, copy: true, edit: false, delete: false } }} />);
    fireEvent.click(await screen.findByRole('button', { name: 'Save' }));
    await waitFor(() => expect(mocks.saveRecord).toHaveBeenCalledWith(expect.objectContaining({ id: '0' })));
});

it('record locks prevent editing while allowing authorized deletion', async () => {
    mocks.getRecord.mockResolvedValue({ id: '7', record: { name: 'Locked', canEdit: false }, lookups: {} });
    render(<Form model={{ ...model, actions: 'form', permissions: { edit: true, delete: true } }} />);
    await screen.findByRole('button', { name: 'Delete' });
    expect(screen.queryByRole('button', { name: 'Save' })).toBeNull();
    expect(screen.getByRole('textbox').readOnly).toBe(true);
});

function mountField(type, value, extraColumn = {}, readOnly = true) {
    const formik = { values: { value }, touched: {}, errors: {}, setFieldValue: vi.fn(), handleChange: vi.fn(), handleBlur: vi.fn(), getFieldProps: () => ({ value }) };
    const view = render(<FormLayout model={{ ...model, columns: [{ field: 'value', type, label: 'Value', lookup: 'options', ...extraColumn }] }} formik={formik} fieldConfigs={{}} lookups={{ options: [{ value: 1, label: 'One', ParentId: 1, ParentName: 'Group' }] }} id="7" readOnly={readOnly} />);
    return { formik, ...view };
}

it.each(['autocomplete', 'chipInput'])('%s cannot edit or clear read-only values', (type) => {
    const { formik } = mountField(type, type === 'autocomplete' ? [1] : ['tag']);
    const input = screen.getByRole('combobox');
    expect(input.disabled).toBe(true);
    fireEvent.change(input, { target: { value: 'new' } });
    fireEvent.blur(input);
    expect(formik.setFieldValue).not.toHaveBeenCalled();
});

it('read-only JSON stays unmodified after debounce', async () => {
    const { formik } = mountField('json', '{ "key": "original" }');
    const input = screen.getByRole('textbox');
    expect(input.readOnly).toBe(true);
    fireEvent.change(input, { target: { value: 'changed' } });
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 350)); });
    expect(formik.setFieldValue).not.toHaveBeenCalled();
});

it('read-only day selection blocks presets and day avatars', () => {
    const { formik, container } = mountField('dayRadio', '0111110');
    for (const radio of screen.getAllByRole('radio')) expect(radio.disabled).toBe(true);
    fireEvent.click(container.querySelector('[aria-disabled="true"]'));
    expect(formik.setFieldValue).not.toHaveBeenCalled();
});

it('read-only tree selection disables its checkbox', () => {
    const { formik } = mountField('treeCheckbox', '1');
    const checkbox = screen.getAllByRole('checkbox', { hidden: true })[0];
    expect(checkbox.disabled).toBe(true);
    expect(screen.getByRole('treeitem').getAttribute('aria-disabled')).toBe('true');
    fireEvent.click(checkbox);
    expect(formik.setFieldValue).not.toHaveBeenCalled();
});

it('read-only file picker cannot replace a file', () => {
    const { formik } = mountField('filePicker', 'existing.pdf');
    const input = screen.getByLabelText('Choose File');
    expect(input.disabled).toBe(true);
    fireEvent.change(input, { target: { files: [new File(['data'], 'new.txt')] } });
    expect(formik.setFieldValue).not.toHaveBeenCalled();
});

it('evaluates column read-only callbacks instead of treating functions as true', () => {
    mountField('string', 'editable', { readOnly: () => false }, false);
    expect(screen.getByRole('textbox').readOnly).toBe(false);
});
