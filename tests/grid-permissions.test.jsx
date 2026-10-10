import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import Grid from '../src/lib/components/Grid/index.js';

const mocks = vi.hoisted(() => ({
    gridProps: null, request: vi.fn(), getList: vi.fn(),
    snackbar: { showMessage: vi.fn(), showErrorCode: vi.fn() },
    context: { stateData: { userData: {} }, getApiEndpoint: () => '', buildUrl: x => x, setPageTitle: vi.fn(), formatDate: vi.fn() },
    router: { navigate: vi.fn(), useParams: () => ({}), pathname: '/items' },
    translation: { tTranslate: x => x, tOpts: {}, translate: false }
}));
vi.mock('../src/lib/components/useRouter/StateProvider', () => ({ useStateContext: () => mocks.context, useRouter: () => mocks.router }));
vi.mock('../src/lib/components/SnackBar', () => ({ useSnackbar: () => mocks.snackbar }));
vi.mock('../src/lib/hooks/useModelTranslation', () => ({ useModelTranslation: () => mocks.translation }));
vi.mock('../src/lib/components/Grid/httpRequest', () => ({ default: mocks.request, DATA_PARSERS: { json: x => x } }));
vi.mock('../src/lib/components/Grid/crud-helper', () => ({ getList: mocks.getList, getRecord: vi.fn(), deleteRecord: vi.fn(), saveRecord: vi.fn() }));
vi.mock('@mui/icons-material', () => ({ GridOn: () => null, Code: () => null, Language: () => null, TableChart: () => null, DataObject: () => null }));
vi.mock('../src/lib/components/PageTitle', () => ({ default: () => null }));
vi.mock('@mui/x-data-grid-premium', async (importOriginal) => {
    const actual = await importOriginal();
    return { ...actual, DataGridPremium: props => {
        mocks.gridProps = props;
        return <actual.DataGridPremium {...props} disableVirtualization />;
    } };
});

const row = { id: 7, name: 'Record' };
const model = {
    title: 'Items', api: '/items', linkColumn: 'name', showHistory: false,
    columns: [{ field: 'id', type: 'number' }, { field: 'name', type: 'string', link: true, width: 150 }],
    permissions: { add: false, edit: false, delete: false, copy: false }, updatePageTitle: false, showHeaderFilters: false
};
beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    window.history.replaceState({}, '', '/items');
    mocks.context.stateData.userData = {};
});
afterEach(cleanup);

async function mount(overrides = {}, props = {}) {
    render(<Grid model={{ ...model, ...overrides }} staticData={[row]} {...props} />);
    await screen.findByText('Record');
}
async function click(record = row, field = 'name', action) {
    await act(async () => {
        await mocks.gridProps.onCellClick({ field, row: record }, {}, { action });
    });
}

it.each(['grid', 'form', 'both'])('copy-only users can open records with %s actions', async (actions) => {
    await mount({ actions, permissions: { add: true, copy: true, edit: false, delete: false } });
    expect(mocks.gridProps.columns.find(col => col.field === 'name').cellClassName).toBe('mui-grid-linkColumn');
    await click();
    expect(mocks.router.navigate).toHaveBeenCalledWith('/items/7');
});

it('copy-only users can double-click a locked source', async () => {
    await mount({ actions: 'form', permissions: { add: true, copy: true, edit: false, delete: false } });
    act(() => mocks.gridProps.onCellDoubleClick({ row: { ...row, canEdit: false } }));
    expect(mocks.router.navigate).toHaveBeenCalledWith('/items/7');
});

it('delete-only users can open locked records', async () => {
    await mount({ permissions: { add: false, edit: false, delete: true } });
    await click({ ...row, canEdit: false });
    expect(mocks.router.navigate).toHaveBeenCalledWith('/items/7');
});

it('users without record actions see plain text and cannot open the form', async () => {
    await mount();
    expect(mocks.gridProps.columns.find(col => col.field === 'name').cellClassName).toBeUndefined();
    await click();
    act(() => mocks.gridProps.onCellDoubleClick({ row }));
    expect(mocks.router.navigate).not.toHaveBeenCalled();
});

it('detail panel links remain styled and toggle without mutation permissions', async () => {
    await mount({ getDetailPanelContent: () => <div>Details</div> });
    expect(mocks.gridProps.columns.find(col => col.field === 'name').cellClassName).toBe('mui-grid-linkColumn');
    await click();
    expect(mocks.gridProps.detailPanelExpandedRowIds.has(7)).toBe(true);
    expect(mocks.router.navigate).not.toHaveBeenCalled();
});

it('explicit links remain available without mutation permissions', async () => {
    await mount({ columns: [{ ...model.columns[1], linkTo: '/view/${id}' }] });
    await click();
    expect(mocks.router.navigate).toHaveBeenCalledWith({ pathname: '/view/7' });
});

it('read-only blocks record navigation even with every permission', async () => {
    await mount({ permissions: { add: true, edit: true, copy: true, delete: true } }, { readOnly: true });
    expect(mocks.gridProps.columns.find(col => col.field === 'name').cellClassName).toBeUndefined();
    await click();
    expect(mocks.router.navigate).not.toHaveBeenCalled();
});

it('caller restrictions and user permissions prevent Copy despite a direct callback', async () => {
    mocks.context.stateData.userData = { permissions: [{ Module: 'Items', Permission2: false, Permission3: true, Permission4: true }] };
    await mount({ module: 'Items', permissions: { add: true, edit: true, copy: true, delete: true } }, { permissions: { delete: false } });
    await click(row, 'actions', 'Copy');
    await click(row, 'actions', 'Delete');
    expect(mocks.router.navigate).not.toHaveBeenCalled();
    expect(screen.queryByText('Confirm Delete')).toBeNull();
});
