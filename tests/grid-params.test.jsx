import { expect, it } from 'vitest';
import { equalExtraParams } from '../src/lib/components/Grid/useExtraParams.js';

it('compares nested parameter values without depending on property order', () => {
    expect(equalExtraParams({ clients: [1, 2], filter: { field: 'id', value: 3 } },
        { filter: { value: 3, field: 'id' }, clients: [1, 2] })).toBe(true);
    expect(equalExtraParams({ clients: [1, 2] }, { clients: [2, 1] })).toBe(false);
    expect(equalExtraParams({ value: undefined }, {})).toBe(false);
    expect(equalExtraParams({ value: null }, { value: undefined })).toBe(false);
});

it('retains identity semantics for special objects and never invokes accessors', () => {
    const value = new Map();
    expect(equalExtraParams({ value }, { value })).toBe(true);
    expect(equalExtraParams({ value: new Map() }, { value: new Map() })).toBe(false);
    const a = { get value() { throw new Error('getter executed'); } };
    const b = { get value() { throw new Error('getter executed'); } };
    expect(equalExtraParams(a, b)).toBe(false);
});

it('bounds work for cyclic, deep, and oversized parameter data', () => {
    const a = {}; a.self = a;
    const b = {}; b.self = b;
    expect(equalExtraParams(a, b)).toBe(false);
    expect(equalExtraParams({ ids: Array(10000).fill(1) }, { ids: Array(10000).fill(1) })).toBe(false);
    let left = {}, right = {};
    for (let i = 0; i < 2000; i++) { left = { next: left }; right = { next: right }; }
    expect(equalExtraParams(left, right)).toBe(false);
});
