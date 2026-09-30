import { StrictMode } from 'react';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Grid from '../src/lib/components/Grid/index.js';
import GridPreferences from '../src/lib/components/Grid/GridPreference.js';

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

it('re-identifies the restored preference from the snapshot, not from the live label', async () => {
    const onPreferenceChange = vi.fn();
    render(<GridPreferences
        gridRef={{ current: {} }}
        preferenceKey="items"
        onPreferenceChange={onPreferenceChange}
        onResetToDefault={vi.fn()}
        hasRestoredListState
        restoredPreferenceName="Saved"
        currentPreference={null}
        t={text => text}
    />);
    await waitFor(() => expect(onPreferenceChange).toHaveBeenCalledWith('Saved'));
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
    expect(mocks.request).not.toHaveBeenCalled();
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
    const onPreferenceChange = vi.fn();
    const props = { gridRef: { current: {} }, onPreferenceChange, onResetToDefault: vi.fn(), t: text => text };
    const { rerender } = render(<GridPreferences {...props} preferenceKey="old" />);
    const signal = mocks.request.mock.calls[0][0].signal;
    rerender(<GridPreferences {...props} preferenceKey="new" />);
    await waitFor(() => expect(onPreferenceChange).toHaveBeenCalledWith('Saved', JSON.parse(preference.prefValue)));
    expect(signal.aborted).toBe(true);
    await act(async () => resolveOld({ preferences: [{ ...preference, prefName: 'Old' }] }));
    expect(onPreferenceChange).toHaveBeenCalledTimes(1);
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
