import request, { DATA_PARSERS, getErrorMessage } from "./httpRequest";

const dateDataTypes = ['date', 'dateTime'];
const lookupDataTypes = ['singleSelect'];
const exportDefaultLimit = 1_000_000;

function shouldApplyFilter(filter) {
    const { operator, value, type } = filter;

    const isUnaryOperator = ["isEmpty", "isNotEmpty"].includes(operator);
    const hasValidValue = value !== undefined &&
        value !== null &&
        (value !== '' || (type === 'number' && value === 0) || (type === 'boolean' && value === false));

    return isUnaryOperator || hasValidValue;
}

/**
 * Parses a date string into a JavaScript Date object based on specific format lengths.
 * * @param {string} value - The date string to parse.
 * Supported formats:
 * - 17 chars: "YYYYMMDDHHmmssSSS" (e.g., "20260413104406000")
 * - 24 chars: "YYYY-MM-DDTHH:mm:ss.SSSZ" (e.g., "2026-04-13T10:44:06.000Z")
 * @param {boolean} [utc=false] - If true, treats the input as UTC and returns a localized Date.
 * If false, treats input as local time (for 17-char) or 
 * strips the 'Z' (for 24-char) to treat as local.
 * @returns {Date|string|null} - Returns a Date object, the original value if not a string, or null if empty.
 * @throws {Error} - Throws error if the string length is not 17 or 24.
 * * @example
 * // Length 17: Treat as UTC and convert to local
 * // Input: "20260413104406000"
 * dateParser("20260413104406000", true); 
 * * @example
 * // Length 24: ISO format
 * // Input: "2026-04-13T10:44:06.000Z"
 * dateParser("2026-04-13T10:44:06.000Z", true);
 */
const dateParser = (value, utc = false) => {
    // Validation: Return original value if it's not a string or is undefined/null
    if (typeof value !== 'string' || value === undefined || value === null) {
        return value;
    }

    // Handle empty strings
    if (value.length === 0) {
        return null;
    }

    // Handle "Compact" Format (YYYYMMDDHHmmssSSS)
    if (value.length === 17) {
        const year = +value.slice(0, 4);
        const month = +value.slice(4, 6) - 1; // Months are 0-indexed in JS Date
        const day = +value.slice(6, 8);
        const hour = +value.slice(8, 10);
        const min = +value.slice(10, 12);
        const sec = +value.slice(12, 14);
        const ms = +value.slice(14, 17);

        if (utc) {
            // Create Date as UTC, which the browser automatically localizes
            return new Date(Date.UTC(year, month, day, hour, min, sec, ms));
        }
        // Create Date using system local time
        return new Date(year, month, day, hour, min, sec, ms);
    }

    // Handle "ISO" Format (YYYY-MM-DDTHH:mm:ss.SSSZ)
    if (value.length === 24) {
        if (utc) {
            // Standard behavior: 'Z' suffix indicates UTC
            return new Date(value);
        }
        // Slice off the 'Z' to force the constructor to treat it as local time
        return new Date(value.slice(0, -1));
    }

    // Fallback for other valid date formats (e.g. ISO without milliseconds, with offset)
    const parsedValue = new Date(value);
    return Number.isNaN(parsedValue.getTime()) ? value : parsedValue;
};

const buildRequestData = ({ gridColumns, page, pageSize, sortModel, filterModel, baseFilters, action = 'list', extraParams = {}, model, api }) => {
    const isElasticExport = action === 'export' && model.isElasticExport === true;

    const lookups = [];
    const lookupWithDeps = []; // for backward compatibility having two lookups arrays
    const dateColumns = [];
    gridColumns.forEach(({ lookup, type, field, localize = false, filterable = true, dependsOn }) => {
        if (dateDataTypes.includes(type)) {
            dateColumns.push({ field, localize });
        }
        if (!lookup) {
            return;
        }
        if (!lookups.includes(lookup) && lookupDataTypes.includes(type) && filterable) {
            lookups.push(lookup);
            lookupWithDeps.push({ lookup, dependsOn });
        }
    });

    const where = [];
    if (filterModel?.items?.length) {
        filterModel.items.forEach(filter => {
            if (shouldApplyFilter(filter)) {
                const { field, operator, filterField } = filter;
                let { value } = filter;
                const column = gridColumns.filter((item) => item?.field === filter.field);
                const type = column[0]?.type;
                if (type === 'boolean') {
                    value = (value === 'true' || value === true) ? 1 : 0;
                } else if (type === 'number') {
                    value = Array.isArray(value) ? value.filter(e => e) : value;
                }
                value = filter.filterValues || value;
                where.push({
                    field: filterField || field,
                    operator,
                    value,
                    type
                });
            }
        });
    }

    // Add baseFilters if present (already includes parentFilters merged in Grid component)
    if (baseFilters && Array.isArray(baseFilters)) {
        where.push(...baseFilters);
    }

    const requestData = {
        start: page * pageSize,
        limit: isElasticExport ? (model.exportSize || exportDefaultLimit) : pageSize,
        ...extraParams,
        logicalOperator: filterModel.logicOperator,
        sort: sortModel.map(sort => (sort.filterField || sort.field) + ' ' + sort.sort).join(','),
        where,
        isElasticExport,
        model: model.module,
        fileName: model.overrideFileName
    };

    if (lookups.length) {
        requestData.lookups = lookups.join(',');
    }

    if (lookupWithDeps.length) {
        requestData.lookupWithDeps = JSON.stringify(lookupWithDeps);
    }

    if (model?.limitToSurveyed) {
        requestData.limitToSurveyed = model?.limitToSurveyed;
    }

    let url = `${api}/${action}`;

    const queryParams = new URLSearchParams();
    if (extraParams.template) {
        queryParams.append('template', extraParams.template);
    }
    if (extraParams.configFileName) {
        queryParams.append('configFileName', extraParams.configFileName);
    }
    const queryString = queryParams.toString();
    if (queryString) {
        url += `?${queryString}`;
    }

    return { requestData, url, where, dateColumns };
};

/**
 * Fetches a list of records or triggers a file export depending on whether `contentType` is provided.
 *
 * - Without `contentType` (list path):
 *   - Performs a JSON POST request via `request`.
 *   - Returns the parsed response.
 *   - Throws on HTTP or application-level errors.
 *
 * - With `contentType` (export path):
 *   - Builds a POST payload and submits a hidden `<form>` to trigger a file download in a new window/tab.
 *   - This is a fire-and-forget operation: the promise resolves once the form is submitted.
 *   - No errors from the export request are propagated back to the caller; failures are effectively silent
 *     from this function's perspective and should be handled via server-side logging or a custom UX flow
 *     (e.g. returning an error file or exposing a separate export-status API).
 */
const getList = async (props = {}) => {
    const { contentType, columns, extraParams = {}, action = 'list', model, signal } = props;
    const { requestData, url, where, dateColumns } = buildRequestData(props);

    if (contentType) {
        requestData.responseType = contentType;
        requestData.columns = columns;
        // IANA timezone string is preferred over a numeric offset because the offset changes with DST
        // (e.g. America/New_York is UTC-5 in winter and UTC-4 in summer). Sending the IANA name lets
        // the server derive the correct offset for any date in the export range.
        // userTimezoneOffset is kept for backward compatibility with servers that haven't yet migrated.
        requestData.userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        requestData.userTimezoneOffset = new Date().getTimezoneOffset();
        if (typeof model.createRequestPayload === 'function') {
            await model.createRequestPayload(requestData, { where, url, dataParsers: DATA_PARSERS, ...props });
        }
        const form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("id", "exportForm");
        form.setAttribute("target", "_blank");
        // Template-based exports are fully server-driven via the template query param.
        // Request data (where, sort, limit, etc.) is intentionally omitted — the template
        // defines the data shape and filtering on the server side.
        if (!extraParams.template) {
            for (const key in requestData) {
                let v = requestData[key];
                if (v === undefined || v === null) {
                    continue;
                } else if (typeof v !== 'string') {
                    v = JSON.stringify(v);
                }
                const hiddenTag = document.createElement('input');
                hiddenTag.type = "hidden";
                hiddenTag.name = key;
                hiddenTag.value = v;
                form.append(hiddenTag);
            }
        }
        form.setAttribute('action', requestData.url || url);
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => { form.remove(); }, 0);
        return;
    }

    const reqParams = {
        url,
        additionalHeaders: {
            "Content-Type": "application/json"
        },
        jsonPayload: true,
        params: requestData,
        dataParser: DATA_PARSERS.json,
        signal
    };

    // for manipulating the request payload before sending the request.
    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(reqParams, { where, dataParsers: DATA_PARSERS, ...props });
    }
    const response = await request(reqParams);

    if (response?.aborted) {
        return response;
    }

    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'An error occurred while fetching data');
    }

    // Parse response data if needed custom processing.
    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes(action)) {
        await model.parseResponsePayload({ responseData: response, model, dateColumns, action, ...props });
    }

    response.records.forEach(record => {
        dateColumns.forEach(column => {
            const { field, localize } = column;
            if (record[field]) {
                record[field] = dateParser(record[field], localize);
            }
        });
        model.columns.forEach(({ field, displayIndex }) => {
            if (!displayIndex) return;
            record[field] = record[displayIndex];
        });
    });

    return response;
};

/**
 * Loads a single record by id along with its lookups.
 * Returns { id, title, record, lookups } or throws on error.
 */
const getRecord = async (props = {}) => {
    let { api, id, model, parentFilters, where = {} } = props;
    api = api || model.api;
    const searchParams = new URLSearchParams();
    const url = `${api}/${id === undefined || id === null ? '-' : id}`;
    const lookupsToFetch = [];
    const fields = model.formDef || model.columns;
    fields?.forEach(field => {
        if (field.lookup && !lookupsToFetch.includes(field.lookup) && !field.dependsOn) {
            lookupsToFetch.push(field.lookup);
        }
    });
    searchParams.set("lookups", lookupsToFetch);
    if (where && Object.keys(where)?.length) {
        searchParams.set("where", JSON.stringify(where));
    }
    const requestData = {
        url: `${url}?${searchParams.toString()}`,
        method: 'GET',
        jsonPayload: true
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { action: 'load', dataParsers: DATA_PARSERS, ...props });
    }

    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Load failed');
    }
    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('load')) {
        return await model.parseResponsePayload({ responseData: response, model, action: 'load', ...props });
    }
    const { data: record, lookups } = response || {};
    let title = record[model.linkColumn];
    const columnConfig = model.columns.find(a => a.field === model.linkColumn);
    if (columnConfig && columnConfig.lookup) {
        if (lookups && lookups[columnConfig.lookup] && lookups[columnConfig.lookup]?.length) {
            const lookupValue = lookups[columnConfig.lookup].find(a => a.value === title);
            if (lookupValue) {
                title = lookupValue.label;
            }
        }
    }
    const defaultValues = { ...model.defaultValues };
    return { id, title, record: { ...defaultValues, ...record, ...parentFilters }, lookups };
};

/**
 * Deletes a record by id. Returns true on success or throws on error.
 */
const deleteRecord = async function (props = {}) {
    const { id, api, model } = props;
    if (!id) {
        throw new Error('Delete failed. No active record.');
    }
    const requestData = {
        url: `${api}/${id}`,
        method: 'DELETE'
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { action: 'delete', dataParsers: DATA_PARSERS, ...props });
    }
    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Delete failed');
    }
    return true;
};

/**
 * Creates or updates a record. Returns the response on success or throws on error.
 */
const saveRecord = async function (props = {}) {
    const { id, api, values, model } = props;
    let url, method;

    if (id !== 0) {
        url = `${api}/${id}`;
        method = 'PUT';
    } else {
        url = api;
        method = 'POST';
    }

    const requestData = {
        url,
        method,
        params: values,
        additionalHeaders: {
            'Content-Type': 'application/json'
        },
        jsonPayload: true
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { action: 'save', dataParsers: DATA_PARSERS, ...props });
    }

    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Save failed');
    }
    return response;
};

/**
 * Fetches lookup data for a given scope. Returns the response or throws on error.
 */
const getLookups = async (props = {}) => {
    let { api, model, lookups, scopeId, reqData } = props;
    api = api || model.api;
    const searchParams = new URLSearchParams();
    const url = `${api}/lookups`;
    searchParams.set("lookups", lookups);
    searchParams.set("scopeId", scopeId);
    const requestData = {
        url: `${url}?${searchParams.toString()}`,
        method: 'GET',
        jsonPayload: true,
        ...reqData
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { action: 'lookups', dataParsers: DATA_PARSERS, ...props });
    }
    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Could not load lookups');
    }

    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('lookups')) {
        return await model.parseResponsePayload({ responseData: response, model, action: 'lookups', ...props });
    }
    return response;
};

export {
    getList,
    getRecord,
    deleteRecord,
    saveRecord,
    getLookups,
};

const crudHelper = {
    getList,
    getRecord,
    deleteRecord,
    saveRecord,
    getLookups,
};

export default crudHelper;
