import { act, cleanup, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test';
import Grid from '../src/lib/components/Grid/index.js';

const mocks = vi.hoisted(() => ({
    request: vi.fn(),
    getList: vi.fn(),
    snackbar: { showMessage: vi.fn(), showErrorCode: vi.fn() },
    context: {
        stateData: { userData: {} },
        getApiEndpoint: () => '',
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
    title: 'Items', api: '/items', readOnly: true, idProperty: 'id',
    columns: [
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Score', label: 'Score', type: 'number' }
    ],
    permissions: { add: false, edit: false, delete: false },
    updatePageTitle: false, showHeaderFilters: false,
    isServerGrouping: true,
    groupAggregations: { Score: 'avg' }
};

// What the list API returns for a page: a summary row ahead of its group's rows on this page.
// Fruit holds 120 rows in all and Veg 40, of which only these few are paged onto this page.
const pageOne = {
    records: [
        { Category: 'Fruit', childrenCount: 120, Score: 7.5 },
        { id: 1, Category: 'Fruit', Name: 'Apple', Score: 8 },
        { id: 2, Category: 'Fruit', Name: 'Pear', Score: 7 },
        { Category: 'Veg', childrenCount: 40, Score: 3.25 },
        { id: 3, Category: 'Veg', Name: 'Leek', Score: 3 }
    ],
    recordCount: 160,
    lookups: {}
};

beforeEach(() => {
    vi.clearAllMocks();
    mocks.getList.mockResolvedValue(pageOne);
});
afterEach(cleanup);

async function mountGrouped() {
    const apiRef = { current: null };
    const view = render(<Grid model={model} apiRef={apiRef} rowGroupingField={['Category']} />);
    await waitFor(() => expect(mocks.getList).toHaveBeenCalled());
    await waitFor(() => expect(view.container.textContent).toContain('Fruit'));
    return { ...view, apiRef };
}

const groupCell = (container, label) =>
    [...container.querySelectorAll('[data-field="__tree_data_group__"]')].find(cell => cell.textContent.includes(label));

describe('server-side row grouping', () => {
    it('requests the grouped page with its aggregates', async () => {
        await mountGrouped();
        const { extraParams } = mocks.getList.mock.calls[0][0];
        expect(extraParams.rowGroupField).toBe('Category');
        expect(extraParams.rowGroupAggregations).toEqual({ Score: 'avg' });
    });

    it('shows each group’s whole count, not the rows it has on this page', async () => {
        const { container } = await mountGrouped();
        // Fruit has 2 of its 120 rows on this page, and Veg 1 of 40.
        expect(groupCell(container, 'Fruit').textContent).toContain('(120)');
        expect(groupCell(container, 'Veg').textContent).toContain('(40)');
    });

    it('shows the server-side average on the group row', async () => {
        const { container } = await mountGrouped();
        const scores = [...container.querySelectorAll('[data-field="Score"]')].map(cell => cell.textContent);
        expect(scores).toContain('7.5');
        expect(scores).toContain('3.25');
    });

    it('keeps the group total when the rest of the group pages in', async () => {
        const { apiRef, container } = await mountGrouped();
        // A later page carries more of Fruit's rows; the count is still the group's own total.
        mocks.getList.mockResolvedValue({
            records: [
                { Category: 'Fruit', childrenCount: 120, Score: 7.5 },
                { id: 4, Category: 'Fruit', Name: 'Plum', Score: 6 }
            ],
            recordCount: 160,
            lookups: {}
        });
        await act(async () => { apiRef.current.setPage(1); });
        await waitFor(() => expect(mocks.getList).toHaveBeenCalledTimes(2));
        await act(async () => { apiRef.current.setRowChildrenExpansion('__group__Fruit', true); });
        await waitFor(() => expect(container.textContent).toContain('Plum'));
        // One of Fruit's rows on this page, but the count is still the group's own total.
        expect(groupCell(container, 'Fruit').textContent).toContain('(120)');
    });

    it('expands a group to the rows it has on this page', async () => {
        const { apiRef, container } = await mountGrouped();
        expect(container.textContent).not.toContain('Apple');
        await act(async () => { apiRef.current.setRowChildrenExpansion('__group__Fruit', true); });
        await waitFor(() => expect(container.textContent).toContain('Apple'));
        expect(container.textContent).toContain('Pear');
        // The rest of Fruit's 120 rows arrive on later pages, as before.
        expect(groupCell(container, 'Fruit').textContent).toContain('(120)');
    });

    it('leaves rows with no group value as plain top-level rows', async () => {
        mocks.getList.mockResolvedValue({
            records: [{ id: 7, Category: null, Name: 'Loose item', Score: 1 }], recordCount: 1, lookups: {}
        });
        const apiRef = { current: null };
        const { container } = render(<Grid model={model} apiRef={apiRef} rowGroupingField={['Category']} />);
        await waitFor(() => expect(mocks.getList).toHaveBeenCalled());
        // Not bucketed into a group of their own, and not dropped either.
        await waitFor(() => expect(container.textContent).toContain('Loose item'), { timeout: 3000 });
        expect(apiRef.current.getRowNode('7')?.depth).toBe(0);
    });
});
