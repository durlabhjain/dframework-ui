import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import SplitResizer, { SPLIT_RESIZER_HEIGHT } from '../src/lib/components/Grid/SplitResizer.js';
import { clampSplitHeight } from '../src/lib/components/Grid/helper.js';

afterEach(() => {
    cleanup();
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
});

const renderResizer = (props = {}) => {
    const handlers = { onResizeStart: vi.fn(), onResize: vi.fn(), onResizeEnd: vi.fn(), ...props };
    render(<SplitResizer {...handlers} />);
    return { handle: screen.getByRole('separator'), ...handlers };
};

it('reports an upward drag as a negative delta', () => {
    const { handle, onResizeStart, onResize } = renderResizer();

    fireEvent.pointerDown(handle, { clientY: 400, pointerId: 1, pointerType: 'mouse', button: 0 });
    expect(onResizeStart).toHaveBeenCalledTimes(1);

    fireEvent.pointerMove(handle, { clientY: 340, pointerId: 1 });
    expect(onResize).toHaveBeenLastCalledWith(-60);
});

it('reports a downward drag as a positive delta, always measured from where the drag began', () => {
    const { handle, onResize } = renderResizer();

    fireEvent.pointerDown(handle, { clientY: 400, pointerId: 1, pointerType: 'mouse', button: 0 });
    fireEvent.pointerMove(handle, { clientY: 450, pointerId: 1 });
    fireEvent.pointerMove(handle, { clientY: 500, pointerId: 1 });

    expect(onResize).toHaveBeenNthCalledWith(1, 50);
    expect(onResize).toHaveBeenNthCalledWith(2, 100);
});

it('ignores pointer movement when no drag is in progress', () => {
    const { handle, onResize } = renderResizer();

    fireEvent.pointerMove(handle, { clientY: 300, pointerId: 1 });
    expect(onResize).not.toHaveBeenCalled();
});

it('stops reporting once the drag ends, and restores text selection', () => {
    const { handle, onResize, onResizeEnd } = renderResizer();

    fireEvent.pointerDown(handle, { clientY: 400, pointerId: 1, pointerType: 'mouse', button: 0 });
    expect(document.body.style.userSelect).toBe('none');

    fireEvent.pointerUp(handle, { clientY: 360, pointerId: 1 });
    expect(onResizeEnd).toHaveBeenCalledTimes(1);
    expect(document.body.style.userSelect).toBe('');

    onResize.mockClear();
    fireEvent.pointerMove(handle, { clientY: 200, pointerId: 1 });
    expect(onResize).not.toHaveBeenCalled();
});

it('ignores a non-primary mouse button', () => {
    const { handle, onResizeStart } = renderResizer();

    fireEvent.pointerDown(handle, { clientY: 400, pointerId: 1, pointerType: 'mouse', button: 2 });
    expect(onResizeStart).not.toHaveBeenCalled();
});

it('nudges by one step per arrow key', () => {
    const { handle, onResize, onResizeEnd } = renderResizer({ keyboardStep: 24 });

    fireEvent.keyDown(handle, { key: 'ArrowUp' });
    expect(onResize).toHaveBeenLastCalledWith(-24);

    fireEvent.keyDown(handle, { key: 'ArrowDown' });
    expect(onResize).toHaveBeenLastCalledWith(24);

    fireEvent.keyDown(handle, { key: 'Enter' });
    expect(onResize).toHaveBeenCalledTimes(2);
    expect(onResizeEnd).toHaveBeenCalledTimes(2);
});

// clamp math: dragging up grows the panel, down shrinks it, and neither side disappears.
const clamp = (startHeight, delta) => clampSplitHeight({ startHeight, delta, containerHeight: 600, minPanelHeight: 48, minSiblingHeight: 120 });

it('grows the panel as the handle is dragged up and shrinks it on the way down', () => {
    expect(clamp(240, -60)).toBe(300);
    expect(clamp(240, 60)).toBe(180);
});

it('stops the panel at the tab strip when dragged all the way down', () => {
    expect(clamp(240, 1000)).toBe(48);
});

it('leaves the sibling grid its floor when dragged all the way up', () => {
    expect(clamp(240, -1000)).toBe(480);
});

it('squeezes the panel rather than inverting when the container is shorter than both floors', () => {
    expect(clampSplitHeight({ startHeight: 100, delta: -500, containerHeight: 100, minPanelHeight: 48, minSiblingHeight: 120 })).toBe(48);
});

// Regression: dragging to the top used to leave the panel at `container - siblingFloor`, which with
// the handle's own height between them added up to more than the container and put a scrollbar on
// the whole page. The handle has to be reserved alongside the sibling's floor.
it('leaves room for the handle itself, so the split never exceeds the container', () => {
    const containerHeight = 600;
    const parentFloor = 120;
    const height = clampSplitHeight({
        startHeight: 240,
        delta: -10000,
        containerHeight,
        minPanelHeight: 48,
        minSiblingHeight: parentFloor + SPLIT_RESIZER_HEIGHT
    });

    expect(height + SPLIT_RESIZER_HEIGHT + parentFloor).toBeLessThanOrEqual(containerHeight);
    expect(height).toBe(containerHeight - parentFloor - SPLIT_RESIZER_HEIGHT);
});
