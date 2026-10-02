import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';

// ChildGridTabs only needs UiModel to build each child grid; stub it so these tests exercise the
// tab/collapse logic without pulling a full DataGrid (and its data fetching) into every case.
vi.mock('../src/lib/components/Grid/ui-models', () => {
    class UiModel {
        constructor(config) {
            Object.assign(this, config);
        }
        Grid = ({ parent }) => <div data-testid={`child-grid-${this.name}`}>{`rows for ${parent?.AssetId}`}</div>;
    }
    return { UiModel };
});

const ChildGridTabs = (await import('../src/lib/components/Grid/ChildGridTabs.js')).default;
const Relations = (await import('../src/lib/components/Form/relations.js')).default;

const models = [
    { name: 'AssetImages', listTitle: 'Images' },
    { name: 'AssetTelemetry', listTitle: 'Telemetry' }
];
const relations = ['AssetImages', 'AssetTelemetry'];
const parentRow = { AssetId: 7 };

const renderTabs = (props = {}) => render(
    <ChildGridTabs
        relations={relations}
        models={models}
        relationFilters={{}}
        parent={parentRow}
        childGridStyle={{ height: '100%' }}
        emptyMessage="Please select a record to see its details"
        {...props}
    />
);

afterEach(cleanup);

it('renders every relation tab and the selected child grid when expanded', () => {
    renderTabs();

    expect(screen.getByRole('tab', { name: 'Images' })).toBeTruthy();
    expect(screen.getByRole('tab', { name: 'Telemetry' })).toBeTruthy();
    expect(screen.getByTestId('child-grid-AssetImages').textContent).toBe('rows for 7');
});

it('keeps the tabs visible but drops the child grids when dragged shut', () => {
    renderTabs({ collapsed: true });

    expect(screen.getByRole('tab', { name: 'Images' })).toBeTruthy();
    expect(screen.getByRole('tab', { name: 'Telemetry' })).toBeTruthy();
    expect(screen.queryByTestId('child-grid-AssetImages')).toBeNull();
});

it('asks to reopen when a tab is picked while dragged shut', () => {
    const onExpandRequest = vi.fn();
    renderTabs({ collapsed: true, onExpandRequest });

    fireEvent.click(screen.getByRole('tab', { name: 'Telemetry' }));
    expect(onExpandRequest).toHaveBeenCalledTimes(1);
});

it('does not ask to reopen when a tab is picked while open', () => {
    const onExpandRequest = vi.fn();
    renderTabs({ onExpandRequest });

    fireEvent.click(screen.getByRole('tab', { name: 'Telemetry' }));
    expect(onExpandRequest).not.toHaveBeenCalled();
    expect(screen.getByTestId('child-grid-AssetTelemetry')).toBeTruthy();
});

it('shows the tabs and the empty message when no row is selected', () => {
    renderTabs({ parent: null });

    expect(screen.getByRole('tab', { name: 'Images' })).toBeTruthy();
    expect(screen.getByText('Please select a record to see its details')).toBeTruthy();
    expect(screen.queryByTestId('child-grid-AssetImages')).toBeNull();
});

it('shows only the tabs when dragged shut with no row selected', () => {
    renderTabs({ parent: null, collapsed: true });

    expect(screen.getByRole('tab', { name: 'Images' })).toBeTruthy();
    expect(screen.queryByText('Please select a record to see its details')).toBeNull();
});

// The form path is a different component with a different `parent` (the parent model's NAME, not a
// row) and no collapse UI. It must stay exactly as it was.
it('leaves the form Relations component untouched', () => {
    render(<Relations relations={relations} models={models} relationFilters={{}} parent="" readOnly={true} />);

    expect(screen.getByRole('tab', { name: 'Images' })).toBeTruthy();
    expect(screen.getByTestId('child-grid-AssetImages')).toBeTruthy();
    expect(screen.queryByRole('separator')).toBeNull();
});
