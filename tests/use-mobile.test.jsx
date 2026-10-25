import { act, cleanup, fireEvent, renderHook } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vite-plus/test';
import useMobile from '../src/lib/components/useMobile.js';

afterEach(() => {
    cleanup();
    vi.useRealTimers();
});

it('cancels a pending resize update when the hook unmounts', () => {
    vi.useFakeTimers();
    const { unmount } = renderHook(() => useMobile());
    fireEvent(window, new Event('resize'));
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
});

it('coalesces repeated resize events and applies the latest orientation', () => {
    vi.useFakeTimers();
    const originalWidth = window.innerWidth;
    const originalHeight = window.innerHeight;
    try {
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1200 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 600 });
        const { result } = renderHook(() => useMobile());
        expect(result.current.landscape).toBe(true);
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 400 });
        fireEvent(window, new Event('resize'));
        fireEvent(window, new Event('resize'));
        expect(vi.getTimerCount()).toBe(1);
        act(() => vi.advanceTimersByTime(10));
        expect(result.current.portrait).toBe(true);
    } finally {
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalWidth });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalHeight });
    }
});
