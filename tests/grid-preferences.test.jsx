import { StrictMode } from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
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
// Avoid loading the entire icon catalog through the export menu's barrel import.
vi.mock('@mui/icons-material', () => ({ GridOn: () => null, Code: () => null, Language: () => null, TableChart: () => null, DataObject: () => null }));
vi.mock('../src/lib/components/PageTitle', () => ({ default: () => null }));
vi.mock('@mui/x-data-grid-premium', async (importOriginal) => {
    const actual = await importOriginal();
    return { ...actual, DataGridPremium: (props) => <actual.DataGridPremium {...props} disableVirtualization /> };
});

const model = {
    title: 'Items', preferenceId: 'items', api: '/items', readOnly: true,
    columns: [{ field: 'id', type: 'number' }, { field: 'name', type: 'string', width: 150 }],
    permissions: { add: false, edit: false, delete: false },
    updatePageTitle: false, showHeaderFilters: false
};
const preference = {
    prefId: 1, prefName: 'Saved', prefDesc: 'Saved layout', isDefault: true,
    prefValue: JSON.stringify({
        columns: { columnVisibilityModel: { name: false } },
        sorting: { sortModel: [{ field: 'id', sort: 'desc' }] }
    })
};
const snapshot = {
    currentPreference: 'Saved',
    gridState: {
        columns: { orderedFields: ['name', 'id'], columnVisibilityModel: { name: true }, dimensions: { name: { width: 240 } } },
        pinnedColumns: { left: ['name'], right: [] },
        sorting: { sortModel: [{ field: 'name', sort: 'asc' }] },
        filter: { filterModel: { items: [{ field: 'name', operator: 'contains', value: 'edited' }] } },
        pagination: { paginationModel: { page: 2, pageSize: 20 } }
    },
    rowSelectionModel: { type: 'include', ids: [7] }
};
beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    window.history.replaceState({}, '', '/items');
    mocks.request.mockResolvedValue({ preferences: [preference] });
    mocks.getList.mockResolvedValue({ records: [], recordCount: 100, lookups: {} });
});
afterEach(cleanup);

function mount({ saved, overrides, strict = false, gridProps = {} } = {}) {
    if (saved) {
        sessionStorage.setItem('grid-list-state:saved', JSON.stringify(saved));
        window.history.replaceState({}, '', '/items?ls=saved');
    }
    const apiRef = { current: null };
    const element = <Grid model={{ ...model, ...overrides }} apiRef={apiRef} preserveListState {...gridProps} />;
    const view = render(strict ? <StrictMode>{element}</StrictMode> : element);
    return { ...view, apiRef };
}

async function ready() {
    await waitFor(() => expect(mocks.getList).toHaveBeenCalled());
}
function openPreferences() {
    fireEvent.click(screen.getByRole('button', { name: /^Preferences/ }));
}

it('applies a default once and reset restores the model layout and controlled models', async () => {
    const { apiRef } = mount();
    await ready();
    expect(apiRef.current.exportState().columns.columnVisibilityModel.name).toBe(false);
    expect(apiRef.current.getSortModel()).toMatchObject([{ field: 'id', sort: 'desc' }]);
    openPreferences();
    fireEvent.click(screen.getByText('Reset to Default'));
    await waitFor(() => expect(apiRef.current.getSortModel()).toEqual([]));
    expect(apiRef.current.exportState().columns.columnVisibilityModel).toEqual({});
    expect(mocks.request).toHaveBeenCalledTimes(1);
});

it.each(['Saved', null, 'Deleted preference'])('preserves the full snapshot when the remembered preference is %s', async (currentPreference) => {
    const { apiRef } = mount({ saved: { ...snapshot, currentPreference } });
    await ready();
    const state = apiRef.current.exportState();
    expect(state.columns.columnVisibilityModel.name).toBe(true);
    expect(state.columns.orderedFields.slice(0, 2)).toEqual(['name', 'id']);
    expect(apiRef.current.getColumn('name').width).toBe(240);
    expect(state.pinnedColumns.left).toEqual(['name']);
    expect(state.sorting.sortModel).toEqual(snapshot.gridState.sorting.sortModel);
    expect(state.filter.filterModel.items).toEqual(snapshot.gridState.filter.filterModel.items);
    expect(state.pagination.paginationModel).toEqual({ page: 2, pageSize: 20 });
    expect(apiRef.current.getSelectedRows().has(7)).toBe(true);
    expect(screen.getByRole('button', { name: /^Preferences/ }).textContent).toBe(currentPreference === 'Saved' ? 'Preferences (Saved)' : 'Preferences ');
});

it('keeps the restored preference label when the preference list fails to load', async () => {
    mocks.request.mockRejectedValue(new Error('offline'));
    mount({ saved: snapshot });
    await ready();
    expect(screen.getByRole('button', { name: /^Preferences/ }).textContent).toBe('Preferences (Saved)');
});

it('applies default preferences even when the toolbar is hidden', async () => {
    const { apiRef } = mount({ overrides: { showToolbar: false } });
    await ready();
    expect(apiRef.current.exportState().columns.columnVisibilityModel.name).toBe(false);
    expect(screen.queryByRole('button', { name: /^Preferences/ })).toBeNull();
});

it.each([undefined, '{bad json', 'null', '[]'])('loads data even when the default preference is invalid (%s)', async (prefValue) => {
    mocks.request.mockResolvedValue({ preferences: [{ ...preference, prefValue }] });
    mount();
    await ready();
    expect(mocks.snackbar.showMessage).toHaveBeenCalled();
});

it('loads data after a preference request fails', async () => {
    mocks.request.mockRejectedValue(new Error('offline'));
    mount();
    await ready();
    expect(mocks.snackbar.showMessage).toHaveBeenCalledWith('Failed to load preferences.');
});

it('restores snapshots and loads data with a hidden toolbar', async () => {
    const { apiRef } = mount({ saved: snapshot, overrides: { showToolbar: false } });
    await ready();
    expect(apiRef.current.getColumn('name').width).toBe(240);
    expect(mocks.request).toHaveBeenCalledTimes(1);
});

it('keeps user edits when the toolbar is hidden and shown again', async () => {
    const { apiRef, rerender } = mount();
    await ready();
    act(() => apiRef.current.setColumnVisibility('name', true));
    rerender(<Grid model={{ ...model, showToolbar: false }} apiRef={apiRef} preserveListState />);
    rerender(<Grid model={model} apiRef={apiRef} preserveListState />);
    await waitFor(() => expect(screen.getByRole('button', { name: /^Preferences/ }).disabled).toBe(false));
    expect(apiRef.current.exportState().columns.columnVisibilityModel.name).toBe(true);
    expect(mocks.request).toHaveBeenCalledTimes(1);
});

it('does not revive a restored preference label after reset and a toolbar remount', async () => {
    const { apiRef, rerender } = mount({ saved: snapshot });
    await ready();
    openPreferences();
    fireEvent.click(screen.getByText('Reset to Default'));
    rerender(<Grid model={{ ...model, showToolbar: false }} apiRef={apiRef} preserveListState />);
    rerender(<Grid model={model} apiRef={apiRef} preserveListState />);
    await waitFor(() => expect(screen.getByRole('button', { name: /^Preferences/ }).disabled).toBe(false));
    expect(screen.getByRole('button', { name: /^Preferences/ }).textContent).toBe('Preferences ');
});

it('restores API-owned snapshot state beyond columns and pinning', async () => {
    const aggregation = { model: { id: 'sum' } };
    const { apiRef } = mount({
        saved: { ...snapshot, gridState: { ...snapshot.gridState, aggregation } },
        overrides: { disableAggregation: false }
    });
    await ready();
    expect(apiRef.current.exportState().aggregation).toEqual(aggregation);
});

it('applying a partial preference resets controlled models omitted from it', async () => {
    const other = { prefId: 2, prefName: 'Other', prefValue: { columns: { columnVisibilityModel: {} } } };
    mocks.request.mockResolvedValue({ preferences: [preference, other] });
    const { apiRef } = mount();
    await ready();
    openPreferences();
    fireEvent.click(screen.getByText('Other'));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Preferences (Other)' })).toBeTruthy());
    expect(apiRef.current.getSortModel()).toEqual([]);
});

it('ignores an in-flight response after unmount', async () => {
    let resolve;
    mocks.request.mockReturnValue(new Promise(done => { resolve = done; }));
    const view = mount();
    const signal = mocks.request.mock.calls[0][0].signal;
    view.unmount();
    expect(signal.aborted).toBe(true);
    await act(async () => resolve({ preferences: [preference] }));
    expect(mocks.getList).not.toHaveBeenCalled();
});

it('keeps a pristine reset baseline across Strict Mode effects and snapshot restoration', async () => {
    const { apiRef } = mount({ saved: snapshot, strict: true });
    await ready();
    openPreferences();
    fireEvent.click(screen.getByText('Reset to Default'));
    await waitFor(() => expect(apiRef.current.getColumn('name').width).toBe(150));
    expect(apiRef.current.getSortModel()).toEqual([]);
    expect(apiRef.current.exportState().pagination.paginationModel).toEqual({ page: 0, pageSize: 50 });
    expect(apiRef.current.getSelectedRows().size).toBe(0);
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 100)); });
    expect(window.location.search).toBe('');
    expect(sessionStorage.getItem('grid-list-state:saved')).toBeNull();
});

it('does not offer reset on a first load with nothing applied', async () => {
    mocks.request.mockResolvedValue({ preferences: [] });
    mount();
    await ready();
    openPreferences();
    expect(screen.queryByText('Reset to Default')).toBeNull();
});

it('offers reset for a restored snapshot without a saved preference and restores implicit column widths', async () => {
    mocks.request.mockResolvedValue({ preferences: [] });
    const { apiRef } = mount({ saved: snapshot });
    await ready();
    const originalWidth = apiRef.current.getColumn('id').width;
    act(() => apiRef.current.setColumnWidth('id', 250));
    openPreferences();
    fireEvent.click(screen.getByText('Reset to Default'));
    await waitFor(() => expect(apiRef.current.getColumn('id').width).toBe(originalWidth));
});

it('applying another preference clears widths left over from the previous one', async () => {
    const wide = { ...preference, prefValue: { columns: { dimensions: { id: { width: 260 } } } } };
    const other = { prefId: 2, prefName: 'Other', prefValue: { columns: { columnVisibilityModel: {} } } };
    mocks.request.mockResolvedValue({ preferences: [wide, other] });
    const { apiRef } = mount();
    await ready();
    expect(apiRef.current.getColumn('id').width).toBe(260);
    openPreferences();
    fireEvent.click(screen.getByText('Other'));
    await waitFor(() => expect(apiRef.current.getColumn('id').width).toBe(100));
    expect(screen.getByRole('button', { name: 'Preferences (Other)' })).toBeTruthy();
});

it('does not reinsert toolbar or custom filters into a snapshot where they were cleared', async () => {
    const { apiRef } = mount({
        saved: { ...snapshot, gridState: { ...snapshot.gridState, filter: { filterModel: { items: [] } } } },
        overrides: { columns: [{ field: 'id', type: 'number' }, { field: 'name', toolbarFilter: { defaultFilterValue: 'default' } }] },
        gridProps: { customFilters: { name: 'custom' } }
    });
    await ready();
    expect(apiRef.current.exportState().filter.filterModel.items).toEqual([]);
});

it('ignores the old request when the preference key changes', async () => {
    let resolveOld;
    mocks.request.mockReturnValueOnce(new Promise(resolve => { resolveOld = resolve; }));
    const { rerender, apiRef } = mount({ overrides: { preferenceId: 'old' } });
    const signal = mocks.request.mock.calls[0][0].signal;
    rerender(<Grid model={{ ...model, preferenceId: 'new' }} apiRef={apiRef} preserveListState />);
    await ready();
    expect(screen.getByRole('button', { name: 'Preferences (Saved)' })).toBeTruthy();
    expect(signal.aborted).toBe(true);
    await act(async () => resolveOld({ preferences: [{ ...preference, prefName: 'Old' }] }));
    expect(screen.getByRole('button', { name: 'Preferences (Saved)' })).toBeTruthy();
    expect(apiRef.current.exportState().columns.columnVisibilityModel.name).toBe(false);
});

it('saving a new default refreshes the menu without applying it', async () => {
    const { apiRef } = mount();
    await ready();
    act(() => apiRef.current.setColumnWidth('id', 225));
    mocks.request.mockResolvedValueOnce({ success: true }).mockResolvedValueOnce({ preferences: [preference, { prefId: 2, prefName: 'New', isDefault: true }] });
    openPreferences();
    fireEvent.click(screen.getByText('Add Preference'));
    fireEvent.change(screen.getByRole('textbox', { name: /Preference Name/ }), { target: { value: 'New' } });
    fireEvent.click(screen.getByRole('checkbox', { name: 'Default' }));
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(mocks.request).toHaveBeenCalledTimes(3));
    expect(mocks.request.mock.calls[1][0].params).toMatchObject({ action: 'save', prefName: 'New', isDefault: true });
    expect(JSON.parse(mocks.request.mock.calls[1][0].params.prefValue).columns.dimensions.id.width).toBe(225);
    expect(apiRef.current.getColumn('id').width).toBe(225);
    await waitFor(() => expect(screen.getByRole('button', { name: 'Preferences (Saved)' })).toBeTruthy());
});

it('renaming the active preference updates its label without reapplying the default', async () => {
    const { apiRef } = mount();
    await ready();
    act(() => apiRef.current.setColumnWidth('id', 225));
    mocks.request.mockResolvedValueOnce(true).mockResolvedValueOnce({ preferences: [{ ...preference, prefName: 'Renamed' }] });
    openPreferences();
    fireEvent.click(screen.getByText('Manage Preferences'));
    fireEvent.click(await screen.findByRole('menuitem', { name: 'Edit' }));
    fireEvent.change(screen.getByRole('textbox', { name: /Preference Name/ }), { target: { value: 'Renamed' } });
    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Preferences (Renamed)' })).toBeTruthy());
    expect(mocks.request.mock.calls[1][0].params).toMatchObject({ action: 'save', prefId: 1, prefName: 'Renamed' });
    expect(apiRef.current.getColumn('id').width).toBe(225);
});

it('deleting the active preference uses prefId and clears its label without changing the layout', async () => {
    const { apiRef } = mount();
    await ready();
    mocks.request.mockResolvedValueOnce(true).mockResolvedValueOnce({ preferences: [] });
    openPreferences();
    fireEvent.click(screen.getByText('Manage Preferences'));
    fireEvent.click(await screen.findByRole('menuitem', { name: 'Delete' }));
    const dialog = (await screen.findByText('Confirm delete')).closest('[role="dialog"]');
    fireEvent.click(within(dialog).getByRole('button', { name: 'Yes' }));
    await waitFor(() => expect(mocks.request).toHaveBeenCalledTimes(3));
    expect(mocks.request.mock.calls[1][0].params).toMatchObject({ action: 'delete', prefIdArray: 1 });
    expect(apiRef.current.exportState().columns.columnVisibilityModel.name).toBe(false);
    fireEvent.click(await screen.findByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Preferences' })).toBeTruthy());
});

it('preserves column widths while applying a grouping preference', async () => {
    mocks.request.mockResolvedValue({ preferences: [{ ...preference, prefValue: {
        columns: { dimensions: { id: { width: 260 } } },
        rowGrouping: { model: ['name'] }
    } }] });
    const { apiRef } = mount({ overrides: { disableRowGrouping: false } });
    await ready();
    expect(apiRef.current.exportState().rowGrouping.model).toEqual(['name']);
    expect(apiRef.current.getColumn('id').width).toBe(260);
});

it('resets restored aggregation to the empty model baseline', async () => {
    const { apiRef } = mount({
        saved: { ...snapshot, gridState: { ...snapshot.gridState, aggregation: { model: { id: 'sum' } } } },
        overrides: { disableAggregation: false }
    });
    await ready();
    openPreferences();
    fireEvent.click(screen.getByText('Reset to Default'));
    await waitFor(() => expect(apiRef.current.exportState().aggregation).toBeUndefined());
});

it('waits for preferences when switching from an already initialized preference key', async () => {
    const { rerender, apiRef } = mount();
    await ready();
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 10)); });
    mocks.getList.mockClear();
    let resolveNew;
    mocks.request.mockReturnValueOnce(new Promise(resolve => { resolveNew = resolve; }));
    rerender(<Grid model={{ ...model, preferenceId: 'new' }} apiRef={apiRef} preserveListState />);
    expect(mocks.getList).not.toHaveBeenCalled();
    await act(async () => resolveNew({ preferences: [{ ...preference, prefName: 'New' }] }));
    await ready();
    expect(screen.getByRole('button', { name: 'Preferences (New)' })).toBeTruthy();
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 80)); });
    expect(window.location.search).toBe('');
});

it('still fetches records when no preference key is configured', async () => {
    const { apiRef } = mount({ overrides: { preferenceId: undefined } });
    await ready();
    expect(mocks.request).not.toHaveBeenCalled();
    expect(apiRef.current.getSortModel()).toEqual([]);
});

it('fetches only changed parameter values and explicitly refreshed requests in value mode', async () => {
    const paramsModel = { ...model, preferenceId: undefined };
    const apiRef = { current: null };
    const element = (params, refreshKey = 0) => <Grid model={paramsModel} apiRef={apiRef}
        extraParamsComparison="value" extraParams={params} refreshKey={refreshKey} />;
    const { rerender } = render(element({ selectedClients: [1], filter: { status: 0 } }));
    await ready();
    mocks.getList.mockClear();
    rerender(element({ filter: { status: 0 }, selectedClients: [1] }));
    expect(mocks.getList).not.toHaveBeenCalled();
    rerender(element({ selectedClients: [2], filter: { status: 0 } }));
    await ready();
    expect(mocks.getList).toHaveBeenCalledTimes(1);
    expect(mocks.getList.mock.calls[0][0].extraParams.selectedClients).toEqual([2]);
    mocks.getList.mockClear();
    rerender(element({ selectedClients: [2], filter: { status: 0 } }, 1));
    await ready();
    expect(mocks.getList).toHaveBeenCalledTimes(1);
    expect(mocks.getList.mock.calls[0][0].extraParams).not.toHaveProperty('refreshKey');
    expect(apiRef.current.getSortModel()).toEqual([]);
});

it('preserves the existing reference-triggered refresh contract by default', async () => {
    const paramsModel = { ...model, preferenceId: undefined };
    const apiRef = { current: null };
    const element = () => <Grid model={paramsModel} apiRef={apiRef} extraParams={{ status: 0 }} />;
    const { rerender } = render(element());
    await ready();
    mocks.getList.mockClear();
    rerender(element());
    await ready();
    expect(mocks.getList).toHaveBeenCalledTimes(1);
});

it('cancels an in-flight list on explicit refresh and ignores its late result', async () => {
    const paramsModel = { ...model, preferenceId: undefined };
    const apiRef = { current: null };
    let resolveOld;
    mocks.getList.mockReturnValueOnce(new Promise(resolve => { resolveOld = resolve; }));
    const element = (refreshKey) => <Grid model={paramsModel} apiRef={apiRef}
        extraParamsComparison="value" extraParams={{ status: 0 }} refreshKey={refreshKey} />;
    const { rerender } = render(element(0));
    await ready();
    const signal = mocks.getList.mock.calls[0][0].signal;
    mocks.getList.mockResolvedValue({ records: [{ id: 2, name: 'fresh' }], recordCount: 1, lookups: {} });
    rerender(element(1));
    await waitFor(() => expect(apiRef.current.getRow(2)).toBeTruthy());
    expect(signal.aborted).toBe(true);
    await act(async () => resolveOld({ records: [{ id: 1, name: 'stale' }], recordCount: 1, lookups: {} }));
    expect(apiRef.current.getRow(1)).toBeFalsy();
    expect(apiRef.current.getRow(2).name).toBe('fresh');
});

it('coalesces a parameter change with refresh and preserves paging and sorting', async () => {
    const paramsModel = { ...model, preferenceId: undefined };
    const apiRef = { current: null };
    const element = (status, refreshKey) => <Grid model={paramsModel} apiRef={apiRef}
        extraParamsComparison="value" extraParams={{ status }} refreshKey={refreshKey} />;
    const { rerender } = render(element(0, 0));
    await ready();
    act(() => {
        apiRef.current.setPaginationModel({ page: 1, pageSize: 20 });
        apiRef.current.setSortModel([{ field: 'name', sort: 'asc' }]);
    });
    await waitFor(() => expect(mocks.getList.mock.lastCall[0].page).toBe(1));
    mocks.getList.mockClear();
    rerender(element(1, 1));
    await ready();
    expect(mocks.getList).toHaveBeenCalledTimes(1);
    expect(mocks.getList.mock.calls[0][0]).toMatchObject({ page: 1, pageSize: 20,
        sortModel: [{ field: 'name', sort: 'asc' }], extraParams: { status: 1 } });
});

it('exports current parameters without cancelling an in-flight list request', async () => {
    const paramsModel = { ...model, preferenceId: undefined };
    mocks.getList.mockReturnValueOnce(new Promise(() => {}));
    render(<Grid model={paramsModel} extraParamsComparison="value" extraParams={{ status: 2 }} refreshKey={1} />);
    await ready();
    const listSignal = mocks.getList.mock.calls[0][0].signal;
    mocks.getList.mockResolvedValue(undefined);
    fireEvent.click(screen.getByRole('button', { name: /export/i }));
    fireEvent.click(await screen.findByRole('menuitem', { name: 'CSV' }));
    await waitFor(() => expect(mocks.getList).toHaveBeenCalledTimes(2));
    expect(mocks.getList.mock.calls[1][0]).toMatchObject({ contentType: 'text/csv', extraParams: { status: 2 }, signal: null });
    expect(listSignal.aborted).toBe(false);
});
