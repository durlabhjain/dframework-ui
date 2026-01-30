import { useEffect, useMemo, useState } from 'react';
import request from "../components/Grid/httpRequest";
import { useStateContext } from "../components/useRouter/StateProvider";

const emptyValues = [null, undefined, ''];

export default function useCascadingLookup({ column, formik, lookups, dependsOn = [], isAutoComplete = false, userSelected, model }) {
    const [options, setOptions] = useState([]);
    const { stateData } = useStateContext();
    const isCsController = model.controllerType === 'cs';
    const url = model.api && isCsController ? model.api : stateData?.gridSettings?.permissions?.Url;
    const api = useMemo(() => `${ isAutoComplete ? url : `${url}${model?.api || ''}`}`, [url, model?.api]);
    
    // Memoize dependency values
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn.length) return toReturn;
        for (const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, dependsOn.map(dep => formik.values[dep]));

    // Initial options for non-cascading
    const initialOptions = useMemo(() => {
        if (dependsOn.length) return [];
        // Check for lookup first, then comboType
        const lookupKey = column.lookup || column.comboType;
        return typeof lookupKey === 'string' ? lookups[lookupKey] : lookupKey;
    }, [column.lookup, column.comboType, lookups, dependsOn]);

    const fetchOptions = async () => {
        const lookupKey = column.lookup || column.comboType;
        if (!lookupKey) return;
        // Only fetch if all dependencies have values
        const allDependenciesHaveValues = Object.values(dependencyValues).every(
            value => !emptyValues.includes(value)
        );
        if (!allDependenciesHaveValues) {
            setOptions([]);
            return;
        }
        let newOptions = [];
        const requestBody = {
            lookups: [{ lookup: lookupKey, where: dependencyValues }]
        };
        try {
            const response = await request({ url: `${api}/combo`, params: requestBody, disableLoader: true, jsonPayload: true });
            if (response && response.success && response.lookups) {
                newOptions = response.lookups[lookupKey] || [];
            } else {
                newOptions = [];
            }
        } catch {
            newOptions = [];
        } finally {
            setOptions(newOptions);
        }
    };

    // Fetch cascading options
    useEffect(() => {
        if (dependsOn.length) {
            fetchOptions();
        } else if (isAutoComplete || !userSelected.current) {
            setOptions(initialOptions);
        }
    }, [dependencyValues, initialOptions, api, column.lookup, column.comboType]);

    return options;
}
