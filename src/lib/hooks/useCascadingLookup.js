import { useEffect, useMemo, useState, useCallback } from 'react';
import { useStateContext } from "../components/useRouter/StateProvider";
import { getLookups } from "../components/Grid/crud-helper.js";
import { useSnackbar } from "../components/SnackBar/index.js";

const emptyValues = [null, undefined, ''];

export default function useCascadingLookup({ column, formik, lookups, dependsOn = [], isAutoComplete = false, userSelected, model, lazy = false }) {
    const [options, setOptions] = useState([]);
    const [labelMap, setLabelMap] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { buildUrl } = useStateContext();
    const snackbar = useSnackbar();
    const api = buildUrl(model?.api);

    const dependsOnKey = dependsOn.join(',');
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn.length) return toReturn;
        for (const dependency of dependsOn) {
            toReturn[dependency] = formik?.values[dependency];
        }
        return toReturn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dependsOnKey, ...dependsOn.map(dep => formik?.values[dep])]);

    // Initial options for non-cascading, non-lazy mode
    const initialOptions = useMemo(() => {
        if (dependsOn.length) return [];
        return column.customLookup || (typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup);
    }, [column.customLookup, column.lookup, lookups, dependsOn]);

    // fetchOptions({ search, start, limit, lookupId }) — used in lazy mode by the caller.
    // lookupId asks the server for just that one record (e.g. to resolve the label of a
    // pre-selected value that isn't on the currently loaded page).
    const fetchOptions = useCallback(async ({ search = '', start = 0, limit, lookupId } = {}) => {
        if (!column.lookup || !model) return;
        const allDependenciesHaveValues = Object.values(dependencyValues).every(
            value => !emptyValues.includes(value)
        );
        if (!allDependenciesHaveValues) {
            setOptions([]);
            return;
        }
        setIsLoading(true);
        try {
            // scopeId carries the one id this fetch is filtered by — either the value to
            // resolve (lookupId) or the single cascading dependency value, matching the
            // existing GET ?lookups=&scopeId= protocol's single-id contract. Also pass the
            // richer structured `where` via reqData.params for backends that override
            // createRequestPayload and need more than a single scopeId.
            const where = { ...dependencyValues, query: search, start, limit, lookupId };
            const data = await getLookups({
                api,
                model,
                lookups: column.lookup,
                lookupId,
                query: search,
                start,
                limit,
                reqData: {
                    params: { lookups: [{ lookup: column.lookup, where }] }
                }
            });
            // parseResponsePayload may return [{ value, label }] or { options, recordCount }
            const incoming = Array.isArray(data) ? data : (data?.options ?? []);
            const recordCount = Array.isArray(data) ? null : (data?.recordCount ?? null);
            // A lookupId fetch resolves one record out-of-band (e.g. a pre-selected value not on
            // the loaded page) — merge it in rather than replacing the page that's already shown.
            setOptions(lookupId === undefined ? incoming : prev => {
                const incomingValues = new Set(incoming.map(o => String(o.value)));
                return [...prev.filter(o => !incomingValues.has(String(o.value))), ...incoming];
            });
            setLabelMap(prev => {
                const next = { ...prev };
                incoming.forEach(o => { next[String(o.value)] = o.label; });
                return next;
            });
            return { options: incoming, recordCount };
        } catch (error) {
            snackbar.showError('Could not load lookups', error.message);
        } finally {
            setIsLoading(false);
        }
    }, [column.lookup, dependencyValues, api, model, snackbar]);

    // Skip in lazy mode — caller invokes fetchOptions explicitly
    useEffect(() => {
        if (lazy) return;
        if (dependsOn.length) {
            fetchOptions();
            return;
        }
        if (isAutoComplete || !userSelected.current) {
            setOptions(initialOptions || []);
        }
    }, [lazy, dependsOn.length, fetchOptions, isAutoComplete, initialOptions]);

    return { options, fetchOptions, isLoading, labelMap };
}