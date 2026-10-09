import { useState } from 'react';

// Parameter data is small and immutable. Bound traversal so opting in cannot turn a
// large/cyclic payload into unbounded render work. Unsupported values retain identity semantics.
export function equalExtraParams(left, right) {
    if (Object.is(left, right)) return true;
    const pending = [[left, right]];
    const seenLeft = new WeakSet();
    const seenRight = new WeakSet();
    let remaining = 1000;
    while (pending.length) {
        if (--remaining < 0) return false;
        const [a, b] = pending.pop();
        if (Object.is(a, b)) continue;
        if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
        const array = Array.isArray(a);
        if (array !== Array.isArray(b)) return false;
        if (!array && (Object.getPrototypeOf(a) !== Object.prototype || Object.getPrototypeOf(b) !== Object.prototype)) return false;
        if (array && (a.length !== b.length || a.length > remaining)) return false;
        if (seenLeft.has(a) || seenRight.has(b)) return false;
        seenLeft.add(a);
        seenRight.add(b);
        const keys = Object.keys(a);
        if (keys.length > remaining || keys.length !== Object.keys(b).length) return false;
        for (const key of keys) {
            const aProp = Object.getOwnPropertyDescriptor(a, key);
            const bProp = Object.getOwnPropertyDescriptor(b, key);
            // Do not evaluate getters during comparison.
            if (!aProp || !bProp || !('value' in aProp) || !('value' in bProp)) return false;
            pending.push([aProp.value, bProp.value]);
        }
    }
    return true;
}

export default function useExtraParams(value, comparison) {
    const [previous, setPrevious] = useState(() => value);
    if (comparison !== 'value') return value;
    if (!equalExtraParams(previous, value)) {
        setPrevious(() => value);
        return value;
    }
    return previous;
}
