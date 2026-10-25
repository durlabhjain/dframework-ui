import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useEffect } from 'react';
import { afterEach, beforeEach, expect, it, vi } from 'vite-plus/test';
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
    const Layout = ({ handleSubmit, formik }) => <button onClick={() => (method === 'handleSubmit' ? handleSubmit : formik.submitForm)()}>Custom form</button>;
    render(<Form model={model} Layout={Layout} beforeSubmit={beforeSubmit} />);
    await screen.findByText('Custom form');
    await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'Custom form' })); });
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

const listRequests = vi.fn();
function AssignmentGrid({ available, assigned }) {
    useEffect(() => { listRequests({ available, assigned }); }, [available, assigned]);
    return <div>{available ? 'Available members' : 'Assigned members'}</div>;
}

it('blocks duplicate submissions while beforeSubmit is still pending', async () => {
    let finishBeforeSubmit, submit;
    const beforeSubmit = vi.fn(() => new Promise(resolve => { finishBeforeSubmit = resolve; }));
    const Layout = ({ handleSubmit }) => {
        useEffect(() => { submit = handleSubmit; }, [handleSubmit]);
        return <div>Custom form</div>;
    };
    render(<Form model={{ ...model, permissions: { edit: true } }} Layout={Layout} beforeSubmit={beforeSubmit} />);
    await screen.findByText('Custom form');
    let first, second;
    act(() => { first = submit(); second = submit(); });
    expect(beforeSubmit).toHaveBeenCalledTimes(1);
    await act(async () => { finishBeforeSubmit(); await Promise.all([first, second]); });
    expect(mocks.saveRecord).toHaveBeenCalledTimes(1);
});

it('prevents changing an open remote-select portal during save', async () => {
    let finishSave, formState;
    mocks.saveRecord.mockReturnValue(new Promise(resolve => { finishSave = resolve; }));
    mocks.getLookups.mockResolvedValue([{ value: '1', label: 'One' }, { value: '2', label: 'Two' }]);
    const Layout = props => {
        useEffect(() => { formState = props.formik; }, [props.formik]);
        return <FormLayout {...props} />;
    };
    const { container } = render(<Form model={{
        ...model, permissions: { edit: true },
        columns: [{ field: 'choice', type: 'remoteSelect', label: 'Choice', lookup: 'choices' }],
    }} Layout={Layout} />);
    fireEvent.click(await screen.findByRole('button', { name: 'Open' }));
    const option = await screen.findByRole('option', { name: 'Two' });
    expect(container.querySelector('form').contains(option)).toBe(false);
    fireEvent.submit(container.querySelector('form'));
    await waitFor(() => expect(mocks.saveRecord).toHaveBeenCalledTimes(1));
    expect(screen.getByRole('combobox', { hidden: true }).disabled).toBe(true);
    fireEvent.click(option);
    expect(formState.values.choice).toBe('1');
    await act(async () => { finishSave(true); });
    expect(screen.getByRole('combobox').disabled).toBe(false);
});

it('allows retry after beforeSubmit rejects', async () => {
    let submit;
    const beforeSubmit = vi.fn().mockRejectedValueOnce(new Error('Before submit failed')).mockResolvedValue(undefined);
    const Layout = ({ handleSubmit }) => {
        useEffect(() => { submit = handleSubmit; }, [handleSubmit]);
        return <div>Custom form</div>;
    };
    render(<Form model={{ ...model, permissions: { edit: true } }} Layout={Layout} beforeSubmit={beforeSubmit} />);
    await screen.findByText('Custom form');
    await act(async () => { await expect(submit()).rejects.toThrow('Before submit failed'); });
    expect(mocks.saveRecord).not.toHaveBeenCalled();
    await act(async () => { await submit(); });
    expect(mocks.saveRecord).toHaveBeenCalledTimes(1);
});

it('shares an in-flight save when a custom layout calls Formik submitForm twice', async () => {
    let submit, finishSave, formState;
    mocks.saveRecord.mockReturnValue(new Promise(resolve => { finishSave = resolve; }));
    const Layout = ({ formik }) => {
        useEffect(() => { formState = formik; submit = formik.submitForm; }, [formik]);
        return <div>Custom form</div>;
    };
    render(<Form model={{ ...model, permissions: { edit: true } }} Layout={Layout} />);
    await screen.findByText('Custom form');
    let first, second;
    act(() => { first = submit(); });
    await waitFor(() => expect(mocks.saveRecord).toHaveBeenCalledTimes(1));
    await act(async () => { second = submit(); });
    expect(mocks.saveRecord).toHaveBeenCalledTimes(1);
    expect(formState.isSubmitting).toBe(true);
    await act(async () => { finishSave(true); await Promise.all([first, second]); });
    expect(formState.isSubmitting).toBe(false);
    expect(mocks.snackbar.showMessage).toHaveBeenCalledTimes(1);
});

it.each([
    ['redirect', undefined, 'success'],
    ['stay open', false, 'success'],
    ['failed save', undefined, 'error'],
    ['unsuccessful save', undefined, 'false'],
])('%s keeps assignment grids and remote lookups mounted during save', async (_label, navigateBack, outcome) => {
    listRequests.mockClear();
    let resolveSave, rejectSave, formState;
    mocks.saveRecord.mockReturnValue(new Promise((resolve, reject) => { resolveSave = resolve; rejectSave = reject; }));
    mocks.getLookups.mockResolvedValue([{ value: '1', label: 'One' }]);
    const saveModel = {
        ...model, navigateBack, actions: 'both', permissions: { add: true, edit: true, delete: true, copy: true },
        columns: [
            ...model.columns,
            { field: 'members', type: 'oneToMany', label: 'Members', relation: AssignmentGrid },
            { field: 'choice', type: 'remoteSelect', label: 'Choice', lookup: 'choices' },
        ],
    };
    const Layout = (props) => {
        useEffect(() => { formState = props.formik; }, [props.formik]);
        return <FormLayout {...props} />;
    };
    const onSaveSuccess = vi.fn();
    const { container } = render(<Form model={saveModel} Layout={Layout} onSaveSuccess={onSaveSuccess} />);
    await screen.findByText('Available members');
    await waitFor(() => expect(mocks.getLookups).toHaveBeenCalledTimes(1));
    expect(listRequests).toHaveBeenCalledTimes(2);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Changed' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(mocks.saveRecord).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Available members')).toBeTruthy();
    expect(screen.getByText('Assigned members')).toBeTruthy();
    expect(container.querySelector('form').hasAttribute('inert')).toBe(true);
    for (const name of ['Save', 'Cancel', 'Copy', 'Delete']) {
        expect(screen.getByRole('button', { name, hidden: true }).disabled).toBe(true);
    }
    fireEvent.submit(container.querySelector('form'));
    expect(mocks.saveRecord).toHaveBeenCalledTimes(1);
    await act(async () => {
        if (outcome === 'error') rejectSave(new Error('Save failed'));
        else resolveSave(outcome === 'false' ? false : { success: true });
    });
    await waitFor(() => expect(formState.isSubmitting).toBe(false));
    expect(listRequests).toHaveBeenCalledTimes(2);
    expect(mocks.getLookups).toHaveBeenCalledTimes(1);
    expect(mocks.getRecord).toHaveBeenCalledTimes(1);
    expect(formState.values.name).toBe('Changed');
    expect(formState.dirty).toBe(!(outcome === 'success' && navigateBack === false));
    if (outcome === 'success') {
        expect(onSaveSuccess).toHaveBeenCalledTimes(1);
        expect(mocks.snackbar.showMessage).toHaveBeenCalledTimes(1);
        if (navigateBack === false) expect(mocks.router.navigate).not.toHaveBeenCalled();
        else expect(mocks.router.navigate).toHaveBeenCalledWith('/items');
    } else {
        expect(onSaveSuccess).not.toHaveBeenCalled();
        expect(mocks.router.navigate).not.toHaveBeenCalled();
        if (outcome === 'error') expect(mocks.snackbar.showErrorCode).toHaveBeenCalled();
    }
});
