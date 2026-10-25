import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vite-plus/test';
import Grid from '../src/lib/components/Grid/index.js';

const mocks = vi.hoisted(() => ({
    request: vi.fn(),
    getList: vi.fn(),
    snackbar: { showMessage: vi.fn() },
    context: {
        stateData: { userData: {} },
        getApiEndpoint: (name) => name === 'GridPreferenceManager' ? '/preferences' : '',
        buildUrl: (url) => url,
        setPageTitle: vi.fn(),
        formatDate: vi.fn()
    },
    router: { navigate: vi.fn(), getParams: {}, useParams: () => ({}), pathname: '/items' },
    translation: { tTranslate: (text) => text, tOpts: {}, translate: false }
}));
vi.mock('../src/lib/components/useRouter/StateProvider', () => ({
    useStateContext: () => mocks.context,
    useRouter: () => mocks.router
}));
vi.mock('../src/lib/components/SnackBar', () => ({ useSnackbar: () => mocks.snackbar }));
vi.mock('../src/lib/hooks/useModelTranslation', () => ({ useModelTranslation: () => mocks.translation }));
vi.mock('../src/lib/components/Grid/httpRequest', () => ({ default: mocks.request, DATA_PARSERS: { json: (value) => value } }));
vi.mock('../src/lib/components/Grid/crud-helper', () => ({ getList: mocks.getList, getRecord: vi.fn(), deleteRecord: vi.fn(), saveRecord: vi.fn() }));
vi.mock('@mui/icons-material', () => ({ GridOn: () => null, Code: () => null, Language: () => null, TableChart: () => null, DataObject: () => null }));
vi.mock('../src/lib/components/PageTitle', () => ({ default: () => null }));
vi.mock('@mui/x-data-grid-premium', async (importOriginal) => {
    const actual = await importOriginal();
    return { ...actual, DataGridPremium: (props) => <actual.DataGridPremium {...props} disableVirtualization /> };
});

// A lookup column makes the columns prop rebuild once the first list response brings lookups in,
// which is what used to wipe the restored column layout.
const model = {
    title: 'Items', preferenceId: 'items', api: '/items', readOnly: true,
    columns: [
        { field: 'id', type: 'number' },
        { field: 'name', type: 'string', width: 150 },
        { field: 'statusId', type: 'string', lookup: 'Status' }
    ],
    permissions: { add: false, edit: false, delete: false },
    updatePageTitle: false, showHeaderFilters: false
};

beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    window.history.replaceState({}, '', '/items');
    mocks.request.mockResolvedValue({ preferences: [] });
    // Lookups arrive with the first list response, as the real API does.
    mocks.getList.mockResolvedValue({ records: [], recordCount: 100, lookups: { Status: [{ value: 1, label: 'Active' }] } });
});
afterEach(cleanup);

const fields = (apiRef) => apiRef.current.exportState().columns.orderedFields.filter(f => ['id', 'name', 'statusId'].includes(f));

function mount({ saved } = {}) {
    if (saved) {
        sessionStorage.setItem('grid-list-state:saved', JSON.stringify(saved));
        window.history.replaceState({}, '', '/items?ls=saved');
    }
    const apiRef = { current: null };
    const view = render(<Grid model={model} apiRef={apiRef} preserveListState />);
    return { ...view, apiRef };
}
const ready = () => waitFor(() => expect(mocks.getList).toHaveBeenCalled());

it('restores reordered columns from a snapshot when lookups load after mount', async () => {
    const saved = {
        currentPreference: null,
        gridState: {
            columns: {
                orderedFields: ['name', 'statusId', 'id'],
                columnVisibilityModel: { statusId: false },
                dimensions: { name: { width: 240 } }
            },
            pinnedColumns: { left: ['name'], right: [] }
        },
        rowSelectionModel: { type: 'include', ids: [] }
    };
    const { apiRef } = mount({ saved });
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(fields(apiRef)).toEqual(['name', 'statusId', 'id']);
    expect(apiRef.current.exportState().columns.columnVisibilityModel.statusId).toBe(false);
    expect(apiRef.current.getColumn('name').width).toBe(240);
    expect(apiRef.current.exportState().pinnedColumns.left).toContain('name');
});

it('keeps a dragged column order across saving a preference and a form round trip', async () => {
    const first = mount();
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 60)); });
    act(() => {
        first.apiRef.current.setColumnIndex('name', 0);
        first.apiRef.current.publishEvent('columnOrderChange', { column: first.apiRef.current.getColumn('name'), targetIndex: 0, oldIndex: 1 });
        first.apiRef.current.setColumnVisibility('statusId', false);
        first.apiRef.current.setColumnWidth('name', 320);
        first.apiRef.current.setPinnedColumns({ left: ['name'], right: [] });
    });
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(fields(first.apiRef)).toEqual(['name', 'id', 'statusId']);
    const written = Object.keys(sessionStorage).filter(k => k.startsWith('grid-list-state:'));
    expect(written.length).toBe(1);
    const stored = JSON.parse(sessionStorage.getItem(written[0]));
    expect(stored.gridState.columns.orderedFields.filter(f => ['id','name','statusId'].includes(f))).toEqual(['name', 'id', 'statusId']);

    // save a preference, as the user does
    mocks.request.mockResolvedValueOnce({ success: true }).mockResolvedValueOnce({ preferences: [{ prefId: 2, prefName: 'Mine', isDefault: true, prefValue: JSON.stringify(stored.gridState) }] });
    fireEvent.click(screen.getByRole('button', { name: /^Preferences/ }));
    fireEvent.click(screen.getByText('Add Preference'));
    fireEvent.change(screen.getByRole('textbox', { name: /Preference Name/ }), { target: { value: 'Mine' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(mocks.request).toHaveBeenCalledTimes(3));
    const preferenceState = JSON.parse(mocks.request.mock.calls[1][0].params.prefValue);
    expect(preferenceState.columns.columnVisibilityModel.statusId).toBe(false);
    expect(preferenceState.columns.dimensions.name.width).toBe(320);
    expect(preferenceState.pinnedColumns.left).toContain('name');
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });

    const latest = JSON.parse(sessionStorage.getItem(written[0]));
    cleanup();

    // come back from the form: same ?ls= id, preference list now has the saved default
    mocks.request.mockResolvedValue({ preferences: [{ prefId: 2, prefName: 'Mine', isDefault: true, prefValue: JSON.stringify(latest.gridState) }] });
    const second = mount({ saved: latest });
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 150)); });
    expect(fields(second.apiRef)).toEqual(['name', 'id', 'statusId']);
    expect(second.apiRef.current.exportState().columns.columnVisibilityModel.statusId).toBe(false);
    expect(second.apiRef.current.getColumn('name').width).toBe(320);
    expect(second.apiRef.current.exportState().pinnedColumns.left).toContain('name');
});

it('keeps a visibility change made during the lookup column rebuild', async () => {
    let resolveList;
    mocks.getList.mockReturnValueOnce(new Promise(resolve => { resolveList = resolve; }));
    const { apiRef } = mount({ saved: {
        gridState: { columns: { orderedFields: ['name', 'statusId', 'id'], columnVisibilityModel: { statusId: false } } },
        rowSelectionModel: { type: 'include', ids: [] }
    } });
    await ready();
    let changed = false;
    // MUI emits this after replacing columns, before Grid's delayed layout restore.
    const unsubscribe = apiRef.current.subscribeEvent('columnsChange', () => {
        if (changed) return;
        changed = true;
        apiRef.current.setColumnVisibilityModel({ statusId: true, id: false });
    });
    await act(async () => resolveList({ records: [], recordCount: 100, lookups: { Status: [] } }));
    await waitFor(() => expect(changed).toBe(true));
    expect(fields(apiRef)).toEqual(['name', 'statusId', 'id']);
    expect(apiRef.current.exportState().columns.columnVisibilityModel).toMatchObject({ statusId: true, id: false });
    unsubscribe();
});

it('keeps a resized column width across the rebuild', async () => {
    const { apiRef } = mount();
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 60)); });
    act(() => {
        apiRef.current.setColumnWidth('name', 320);
        apiRef.current.publishEvent('columnWidthChange', { colDef: apiRef.current.getColumn('name'), width: 320 });
    });
    // A later fetch brings a new lookup key, rebuilding the column objects.
    mocks.getList.mockResolvedValue({ records: [], recordCount: 100, lookups: { Status: [], Kind: [] } });
    act(() => apiRef.current.setPaginationModel({ page: 1, pageSize: 50 }));
    await waitFor(() => expect(mocks.getList).toHaveBeenCalledTimes(2));
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(apiRef.current.getColumn('name').width).toBe(320);
});

it('does not re-assert a snapshot layout after Reset to Default', async () => {
    const saved = {
        currentPreference: null,
        gridState: { columns: { orderedFields: ['name', 'statusId', 'id'], dimensions: { name: { width: 240 } } } },
        rowSelectionModel: { type: 'include', ids: [] }
    };
    const { apiRef } = mount({ saved });
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(fields(apiRef)).toEqual(['name', 'statusId', 'id']);
    fireEvent.click(screen.getByRole('button', { name: /^Preferences/ }));
    fireEvent.click(screen.getByText('Reset to Default'));
    await waitFor(() => expect(fields(apiRef)).toEqual(['id', 'name', 'statusId']));
    mocks.getList.mockResolvedValue({ records: [], recordCount: 100, lookups: { Status: [], Kind: [] } });
    act(() => apiRef.current.setPaginationModel({ page: 1, pageSize: 50 }));
    await waitFor(() => expect(mocks.getList.mock.calls.length).toBeGreaterThan(1));
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(fields(apiRef)).toEqual(['id', 'name', 'statusId']);
    expect(apiRef.current.getColumn('name').width).toBe(150);
});

it('leaves a newly added column in its natural position', async () => {
    const saved = {
        currentPreference: null,
        gridState: { columns: { orderedFields: ['name', 'statusId', 'id'] } },
        rowSelectionModel: { type: 'include', ids: [] }
    };
    const { apiRef, rerender } = mount({ saved });
    await ready();
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(fields(apiRef)).toEqual(['name', 'statusId', 'id']);
    rerender(<Grid model={model} apiRef={apiRef} preserveListState dynamicColumns={[{ field: 'extra', type: 'string' }]} />);
    await act(async () => { await new Promise(r => setTimeout(r, 120)); });
    expect(apiRef.current.exportState().columns.orderedFields.indexOf('extra'))
        .toBeLessThan(apiRef.current.exportState().columns.orderedFields.indexOf('id'));
});
