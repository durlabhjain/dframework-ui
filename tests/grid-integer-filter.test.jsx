import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test';
import { getGridNumericOperators } from '@mui/x-data-grid-premium';
import Grid from '../src/lib/components/Grid/index.js';
import { toIntegerFilterValue } from '../src/lib/components/Grid/integerFilterValue.js';

const mocks = vi.hoisted(() => ({
    request: vi.fn(),
    getList: vi.fn(),
    snackbar: { showMessage: vi.fn() },
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
    title: 'Items', api: '/items', readOnly: true,
    columns: [
        { field: 'Size', label: 'Size', type: 'number', precision: 0 },
        { field: 'Price', label: 'Price', type: 'number', precision: 2 }
    ],
    permissions: { add: false, edit: false, delete: false },
    updatePageTitle: false, showHeaderFilters: false
};

beforeEach(() => {
    vi.clearAllMocks();
    mocks.getList.mockResolvedValue({ records: [], recordCount: 0, lookups: {} });
});
afterEach(cleanup);

async function mount(modelOverrides = {}) {
    const apiRef = { current: null };
    const view = render(<Grid model={{ ...model, ...modelOverrides }} apiRef={apiRef} />);
    await waitFor(() => expect(mocks.getList).toHaveBeenCalled());
    return { ...view, apiRef };
}
const filterValue = (apiRef) => apiRef.current.state.filter.filterModel.items[0].value;
async function openFilter({ apiRef, operator }) {
    await act(async () => { apiRef.current.upsertFilterItem({ id: 'probe', field: 'Size', operator, value: undefined }); });
    await act(async () => { apiRef.current.showFilterPanel(); });
}
const valueInput = () => document.querySelector('.MuiDataGrid-filterForm input[type="number"]');

describe('toIntegerFilterValue', () => {
    it('drops the fraction and keeps the whole number', () => {
        expect(toIntegerFilterValue('2.5')).toBe(2);
        expect(toIntegerFilterValue('2.99')).toBe(2);
        expect(toIntegerFilterValue(' -4.9 ')).toBe(-4);
        expect(toIntegerFilterValue('15')).toBe(15);
        expect(toIntegerFilterValue('1e3')).toBe(1000);
    });
    it('leaves out what is not a number at all', () => {
        expect(toIntegerFilterValue('abc')).toBeUndefined();
        expect(toIntegerFilterValue('')).toBeUndefined();
        expect(toIntegerFilterValue('   ')).toBeUndefined();
        expect(toIntegerFilterValue(null)).toBeUndefined();
        expect(toIntegerFilterValue(undefined)).toBeUndefined();
        expect(toIntegerFilterValue('12abc')).toBeUndefined();
        expect(toIntegerFilterValue('1e')).toBeUndefined();
        expect(toIntegerFilterValue(true)).toBeUndefined();
        expect(toIntegerFilterValue(Infinity)).toBeUndefined();
        expect(toIntegerFilterValue(NaN)).toBeUndefined();
    });
    it('coerces an isAnyOf list entry by entry', () => {
        expect(toIntegerFilterValue([3, '2.25', '4.9', 1.5, '', 'abc'])).toEqual([3, 2, 4, 1]);
        expect(toIntegerFilterValue([])).toEqual([]);
    });
});

describe('a precision: 0 column', () => {
    it.each(['number', 'currency', 'percentage'])('preserves allowEmpty: false for %s columns', async (type) => {
        const { apiRef } = await mount({ columns: [{ field: 'Size', type, precision: 0, allowEmpty: false }] });
        const operators = apiRef.current.getColumn('Size').filterOperators;
        expect(operators.some(op => ['isEmpty', 'isNotEmpty'].includes(op.value))).toBe(false);
        expect(operators.every(op => op.InputComponent.displayName === 'IntegerFilterInput')).toBe(true);
    });

    it('preserves custom operator metadata and rejects malformed custom input', async () => {
        const InputComponent = ({ item, applyValue, marker }) => (
            <input data-testid="custom-filter" data-marker={marker} value={item.value ?? ''}
                onChange={event => applyValue({ ...item, value: event.target.value })} />
        );
        const operator = { ...getGridNumericOperators()[0], label: 'Custom equals', InputComponent, InputComponentProps: { marker: 'preserved' } };
        const { apiRef, getByTestId } = await mount({ columns: [{ field: 'Size', type: 'number', precision: 0, filterOperators: [operator] }] });
        expect(apiRef.current.getColumn('Size').filterOperators[0]).toMatchObject({ label: 'Custom equals', getApplyFilterFn: operator.getApplyFilterFn, InputComponentProps: operator.InputComponentProps });
        await openFilter({ apiRef, operator: '=' });
        const input = getByTestId('custom-filter');
        expect(input.dataset.marker).toBe('preserved');
        fireEvent.change(input, { target: { value: '12abc' } });
        await waitFor(() => expect(filterValue(apiRef)).toBeUndefined());
        fireEvent.change(input, { target: { value: '12.5' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(12));
        expect(input.value).toBe('12');
    });

    it('clears a populated single-value filter without filtering on zero', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: '=' });
        fireEvent.change(valueInput(), { target: { value: '2' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(2));
        fireEvent.change(valueInput(), { target: { value: '' } });
        await waitFor(() => expect(filterValue(apiRef)).toBeUndefined());
        expect(valueInput().value).toBe('');
    });

    it('updates the display even when successive fractions truncate to the same value', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: '=' });
        fireEvent.change(valueInput(), { target: { value: '2.5' } });
        await waitFor(() => expect(valueInput().value).toBe('2'));
        fireEvent.change(valueInput(), { target: { value: '2.9' } });
        await waitFor(() => expect(valueInput().value).toBe('2'));
        expect(filterValue(apiRef)).toBe(2);
    });

    it('truncates negative fractions in header filters', async () => {
        const { apiRef } = await mount({ showHeaderFilters: true });
        const input = document.querySelector('.MuiDataGrid-headerFilterRow input[type="number"]');
        expect(input).not.toBeNull();
        fireEvent.change(input, { target: { value: '-4.9' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(-4));
        await waitFor(() => expect(input.value).toBe('-4'));
    });

    it('wraps every value-taking operator and leaves the valueless ones alone', async () => {
        const { apiRef } = await mount();
        const operators = apiRef.current.getColumn('Size').filterOperators;
        const wrapped = operators.filter(op => op.InputComponent?.displayName === 'IntegerFilterInput');
        expect(wrapped.map(op => op.value)).toEqual(['=', '!=', '>', '>=', '<', '<=', 'isAnyOf']);
        expect(operators.filter(op => !op.InputComponent).map(op => op.value)).toEqual(['isEmpty', 'isNotEmpty']);
    });

    it('keeps a separate wrapper per underlying input, so a single value is dropped before the list input reads it', async () => {
        const { apiRef } = await mount();
        const operators = apiRef.current.getColumn('Size').filterOperators;
        const singleValueInput = operators.find(op => op.value === '=').InputComponent;
        expect(operators.find(op => op.value === '>').InputComponent).toBe(singleValueInput);
        expect(operators.find(op => op.value === 'isAnyOf').InputComponent).not.toBe(singleValueInput);
    });

    it('survives a switch from a single-value operator to isAnyOf with a value already set', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: '=' });
        fireEvent.change(valueInput(), { target: { value: '2' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(2));

        fireEvent.mouseDown(document.querySelector('.MuiDataGrid-filterFormOperatorInput [role="combobox"]'));
        fireEvent.click([...document.querySelectorAll('li[role="option"]')].find(option => /any of/i.test(option.textContent)));

        // A leftover 2 would be read as a list by the isAnyOf input and throw; MUI clears it because the
        // two operators carry different InputComponents
        await waitFor(() => expect(filterValue(apiRef)).toBeUndefined());
        expect(valueInput()).not.toBeNull();
    });

    it('keeps one input identity across re-renders so typing is never interrupted', async () => {
        const { apiRef, rerender } = await mount();
        const before = apiRef.current.getColumn('Size').filterOperators.find(op => op.value === 'isAnyOf').InputComponent;
        rerender(<Grid model={{ ...model }} apiRef={apiRef} />);
        const after = apiRef.current.getColumn('Size').filterOperators.find(op => op.value === 'isAnyOf').InputComponent;
        expect(after).toBe(before);
    });

    it('turns a fraction typed into isAnyOf into its whole number', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: 'isAnyOf' });
        const input = valueInput();

        fireEvent.change(input, { target: { value: '2.5' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        await waitFor(() => expect(filterValue(apiRef)).toEqual([2]));

        fireEvent.change(input, { target: { value: '3' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        await waitFor(() => expect(filterValue(apiRef)).toEqual([2, 3]));
    });

    it('shows the whole number back in the chip it created', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: 'isAnyOf' });
        const input = valueInput();
        fireEvent.change(input, { target: { value: '2.5' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        await waitFor(() => expect([...document.querySelectorAll('.MuiDataGrid-filterForm .MuiChip-label')].map(chip => chip.textContent)).toEqual(['2']));
    });

    it('turns a fraction typed into a single-value operator into its whole number, in the box too', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: '=' });
        const input = valueInput();

        fireEvent.change(input, { target: { value: '2.5' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(2));
        await waitFor(() => expect(input.value).toBe('2'));

        fireEvent.change(input, { target: { value: '4' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(4));
        expect(input.value).toBe('4');
    });

    it('leaves out a value that is no number at all', async () => {
        const { apiRef } = await mount();
        await openFilter({ apiRef, operator: '=' });
        fireEvent.change(valueInput(), { target: { value: 'abc' } });
        // Left undefined rather than null: MUI's number valueParser reads null as 0, which would
        // filter on zero instead of not filtering at all.
        await waitFor(() => expect(filterValue(apiRef)).toBeUndefined());
    });
});

describe('a column with a fractional precision', () => {
    it('is left on the stock inputs', async () => {
        const { apiRef } = await mount();
        const operators = apiRef.current.getColumn('Price').filterOperators;
        expect(operators.some(op => op.InputComponent?.displayName === 'IntegerFilterInput')).toBe(false);
    });

    it('still accepts a fraction', async () => {
        const { apiRef } = await mount();
        await act(async () => { apiRef.current.upsertFilterItem({ id: 'probe', field: 'Price', operator: '=', value: undefined }); });
        await act(async () => { apiRef.current.showFilterPanel(); });
        const input = valueInput();
        fireEvent.change(input, { target: { value: '2.5' } });
        await waitFor(() => expect(filterValue(apiRef)).toBe(2.5));
    });
});
