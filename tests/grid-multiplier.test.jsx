import { act, cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vite-plus/test';
import Grid from '../src/lib/components/Grid/index.js';
import { hasMultiplier, toStoredUnit } from '../src/lib/components/Grid/columnMultiplier.js';

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
    router: { navigate: vi.fn(), getParams: {}, useParams: () => ({}), pathname: '/readings' },
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

const MILLIVOLTS_TO_VOLTS = 1 / 1000;
// The column renders its own unit, as the battery model does; the grid only carries the multiplier
// so the request builder knows what unit a filter value was typed in.
const model = {
    title: 'Readings', api: '/readings', readOnly: true, idProperty: 'Id',
    columns: [
        { field: 'BatteryVolt', label: 'Volts', type: 'number', multiplier: MILLIVOLTS_TO_VOLTS, valueFormatter: (value) => (value ? `${(value * MILLIVOLTS_TO_VOLTS).toFixed(3)}V` : '') },
        { field: 'Millivolts', label: 'Millivolts', type: 'number' }
    ],
    permissions: { add: false, edit: false, delete: false },
    updatePageTitle: false, showHeaderFilters: false
};

beforeEach(() => {
    vi.clearAllMocks();
    mocks.getList.mockResolvedValue({ records: [{ Id: 1, BatteryVolt: 4128, Millivolts: 4128 }], recordCount: 1, lookups: {} });
});
afterEach(cleanup);

async function mount(modelOverrides = {}) {
    const apiRef = { current: null };
    const view = render(<Grid model={{ ...model, ...modelOverrides }} apiRef={apiRef} />);
    await waitFor(() => expect(mocks.getList).toHaveBeenCalled());
    return { ...view, apiRef };
}

describe('toStoredUnit', () => {
    it('converts a typed value back to the stored unit, free of binary artefacts', () => {
        expect(toStoredUnit(4.128, MILLIVOLTS_TO_VOLTS)).toBe(4128);
        expect(toStoredUnit('4.1', MILLIVOLTS_TO_VOLTS)).toBe(4100);
        // 4.35 / 0.01 is 434.99999999999994 unrounded, which an equals filter would never match
        expect(toStoredUnit(4.35, 0.01)).toBe(435);
        expect(toStoredUnit(0, MILLIVOLTS_TO_VOLTS)).toBe(0);
    });
    it('preserves full numeric precision instead of rounding every filter to 12 digits', () => {
        expect(toStoredUnit(1234567890123, 1)).toBe(1234567890123);
        expect(toStoredUnit(1.23456789012345, 1)).toBe(1.23456789012345);
        expect(toStoredUnit(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
        expect(toStoredUnit(1.23456789012345, 0.001)).toBe(1234.56789012345);
        expect(toStoredUnit(4.35, 0.02)).toBe(217.5);
        expect(toStoredUnit(4.128e-12, 1e-15)).toBe(4128);
        expect(toStoredUnit(4.128, -0.001)).toBe(-4128);
    });
    it('converts an isAnyOf list entry by entry', () => {
        expect(toStoredUnit([4.128, '4.1'], MILLIVOLTS_TO_VOLTS)).toEqual([4128, 4100]);
    });
    it('leaves alone what is not a number', () => {
        expect(toStoredUnit('abc', MILLIVOLTS_TO_VOLTS)).toBe('abc');
        expect(toStoredUnit('', MILLIVOLTS_TO_VOLTS)).toBe('');
        expect(toStoredUnit(null, MILLIVOLTS_TO_VOLTS)).toBeNull();
    });
    it('only accepts a finite non-zero multiplier', () => {
        expect(hasMultiplier(MILLIVOLTS_TO_VOLTS)).toBe(true);
        expect(hasMultiplier(0)).toBe(false);
        expect(hasMultiplier(Infinity)).toBe(false);
        expect(hasMultiplier('0.001')).toBe(false);
        expect(hasMultiplier(undefined)).toBe(false);
    });
});

describe('a column with a multiplier', () => {
    it('leaves the value alone - the column renders its own unit', async () => {
        const { apiRef, findByText } = await mount();
        await waitFor(() => expect(apiRef.current.getRowsCount()).toBe(1));
        expect(await findByText('4.128V')).toBeTruthy();
        expect(apiRef.current.getCellValue(1, 'BatteryVolt')).toBe(4128);
    });

    // buildRequestData only sees the narrow column slice the grid hands it (fetchColumns), so the
    // multiplier has to survive that slice - dropping it sends the typed value unconverted.
    it('keeps the multiplier on the columns handed to the request builder', async () => {
        await mount();
        const { gridColumns } = mocks.getList.mock.calls.at(-1)[0];
        expect(gridColumns.find(col => col.field === 'BatteryVolt').multiplier).toBe(MILLIVOLTS_TO_VOLTS);
    });

    it('tells a server-side export the column unit', async () => {
        const { findByText } = await mount();
        await act(async () => { fireEvent.click(await findByText('Export')); });
        await act(async () => { fireEvent.click(await findByText('CSV')); });

        const exportCall = mocks.getList.mock.calls.find(([args]) => args.action === 'export');
        expect(exportCall[0].columns.BatteryVolt.multiplier).toBe(MILLIVOLTS_TO_VOLTS);
        expect(exportCall[0].columns.Millivolts.multiplier).toBeUndefined();
    });
});

describe('the filter the grid sends', () => {
    const sendFilter = async (apiRef, item) => {
        await act(async () => { apiRef.current.upsertFilterItem({ id: 'probe', ...item }); });
        await waitFor(() => expect(mocks.getList.mock.calls.length).toBeGreaterThan(1), { timeout: 3000 });
        // Run what the grid asked for through the real request builder, with only the transport mocked.
        const { getList } = await vi.importActual('../src/lib/components/Grid/crud-helper.js');
        mocks.request.mockResolvedValue({ records: [], recordCount: 0 });
        await getList(mocks.getList.mock.calls.at(-1)[0]);
        return mocks.request.mock.calls[0][0].params.where;
    };

    it('converts what was typed into the stored unit, end to end', async () => {
        const { apiRef } = await mount();
        const where = await sendFilter(apiRef, { field: 'BatteryVolt', operator: '=', value: 4.128 });
        expect(where).toEqual([{ field: 'BatteryVolt', operator: '=', value: 4128, type: 'number' }]);
        // The chip goes on showing what was typed
        expect(apiRef.current.state.filter.filterModel.items[0].value).toBe(4.128);
    });

    it('reverses range comparisons when display scaling is negative', async () => {
        const { apiRef } = await mount({ columns: [{ ...model.columns[0], multiplier: -0.001 }] });
        const where = await sendFilter(apiRef, { field: 'BatteryVolt', operator: '>=', value: -4.128 });
        expect(where).toEqual([{ field: 'BatteryVolt', operator: '<=', value: 4128, type: 'number' }]);
    });

    it('leaves a column without a multiplier alone', async () => {
        const { apiRef } = await mount();
        const where = await sendFilter(apiRef, { field: 'Millivolts', operator: '>=', value: 4128 });
        expect(where).toEqual([{ field: 'Millivolts', operator: '>=', value: 4128, type: 'number' }]);
    });
});
