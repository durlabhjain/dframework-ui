import { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react';
import request, { DATA_PARSERS } from './httpRequest';

export function parsePreferenceState(value) {
    const state = typeof value === 'string' ? JSON.parse(value) : value;
    if (!state || typeof state !== 'object' || Array.isArray(state)) throw new Error('Invalid grid state');
    return state;
}

// Preference loading belongs to the grid lifecycle, independently of its toolbar.
export default function useGridPreferences({ url, preferenceKey, onInitialize, onError }) {
    const [result, setResult] = useState(null);
    const controllerRef = useRef(null);
    const initialize = useEffectEvent((loaded) => {
        setResult({ url, preferenceKey, preferences: loaded ?? [] });
        if (!loaded) onError();
        onInitialize(loaded);
    });

    const fetchPreferences = useCallback(async (signal) => {
        const response = await request({
            url,
            params: { action: 'list', id: preferenceKey },
            dataParser: DATA_PARSERS.json,
            signal
        });
        if (!Array.isArray(response?.preferences)) throw new Error('Failed to load preferences.');
        return response.preferences.filter(pref => typeof pref?.prefName === 'string' && pref.prefName.trim() && pref.prefId !== 0);
    }, [url, preferenceKey]);

    useEffect(() => {
        if (!preferenceKey) return;
        const controller = new AbortController();
        controllerRef.current = controller;
        fetchPreferences(controller.signal).then(
            loaded => { if (!controller.signal.aborted) initialize(loaded); },
            () => { if (!controller.signal.aborted) initialize(null); }
        );
        return () => controller.abort();
    }, [preferenceKey, fetchPreferences]);

    // Refresh menu data after mutations without reapplying a layout.
    const reloadPreferences = async () => {
        const controller = controllerRef.current;
        if (!controller || controller.signal.aborted) return;
        try {
            const loaded = await fetchPreferences(controller.signal);
            if (!controller.signal.aborted) setResult({ url, preferenceKey, preferences: loaded });
        } catch {
            if (!controller.signal.aborted) onError();
        }
    };

    const preferences = result?.url === url && result.preferenceKey === preferenceKey ? result.preferences : null;
    return { preferences, reloadPreferences };
}
