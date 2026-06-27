import { useRef, useEffect } from 'react';

/**
 * Logs which named dependencies changed between renders.
 *
 * Set `enabled` (or model.debug) to true to activate. Shows the previous and
 * next value for every dep whose reference changed, making it straightforward
 * to spot unstable objects from parent components (e.g. parentFilters being
 * recreated on every parent render even though its content is identical).
 *
 * This is intentionally a no-op when disabled so it can be left in place
 * without affecting production behaviour.
 *
 * @param {string} label       - Human-readable identifier shown in the log
 * @param {object} namedDeps   - { depName: currentValue } map
 * @param {boolean} [enabled]  - Default false; set model.debug=true to activate
 */
export function useChangedDeps(label, namedDeps, enabled = false) {
    const prevRef = useRef(namedDeps);
    useEffect(() => {
        if (!enabled) {
            prevRef.current = namedDeps;
            return;
        }
        const prev = prevRef.current;
        const changed = {};
        for (const key of Object.keys(namedDeps)) {
            if (!Object.is(namedDeps[key], prev[key])) {
                changed[key] = { from: prev[key], to: namedDeps[key] };
            }
        }
        if (Object.keys(changed).length > 0) {
            console.debug(`[Grid/${label}] deps changed:`, changed);
        }
        prevRef.current = namedDeps;
    });
}
