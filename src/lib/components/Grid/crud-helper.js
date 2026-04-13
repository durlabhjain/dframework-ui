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
 * Executes the createRequestPayload hook if defined on the model.
 * This helper consolidates the duplicate pattern of building context and calling the hook.
 *
 * @param {Object} model - The UiModel instance
 * @param {Object} context - The context object containing request parameters (url, where, requestData, etc.)
 * @param {Object} metadata - Additional metadata (action, dataParsers, props, etc.)
 * @returns {Promise<Object>} The potentially modified context object
 */
async function executeRequestHook(model, context, metadata = {}) {
    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(context, metadata);
    }

    return {
        url: context.url,
        additionalHeaders: context.additionalHeaders,
        jsonPayload: context.jsonPayload,
        params: context.params ?? { ...context.requestData, where: context.where },
        dataParser: context.dataParser,
        signal: context.signal
    };
}

/**
 * Executes the parseResponsePayload hook if defined on the model and action is supported.
 * This helper consolidates the duplicate pattern of checking and calling the response hook.
 *
 * @param {Object} model - The UiModel instance
 * @param {string} action - The action being performed (list, load, lookups, etc.)
 * @param {Object} responseData - The response from the API
 * @param {Object} context - Additional context to pass to the hook (dateColumns, props, etc.)
 * @returns {Promise<Object>} The potentially transformed response data
 */
async function executeResponseHook(model, action, responseData, context = {}) {
    if (typeof model.parseResponsePayload === 'function' &&
        model.parseResponseActions?.includes(action)) {
        return await model.parseResponsePayload({
            responseData,
            model,
            action,
            ...context
        });
    }
    return responseData;
}

/**
 * Validates the response and throws an error if the response indicates failure.
 * This helper consolidates the duplicate error checking pattern.
 *
 * @param {Object} response - The response object to validate
 * @param {string} defaultMessage - The default error message if none is provided
 * @throws {Error} If the response contains an error or success is false
 */
function validateResponse(response, defaultMessage) {
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || defaultMessage);
    }
}

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
        // Note: where is excluded here and returned separately to allow modification via createRequestPayload hook
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
        // Build context object and execute request hook
        const context = await executeRequestHook(model, {
            where,
            url,
            requestData,
            dataParsers: DATA_PARSERS,
            columns,
            action,
            ...props
        });

        // Apply potentially modified values to requestData
        const finalRequestData = {
            ...context.params,
            columns: context.columns,
            responseType: contentType,
            userTimezoneOffset: -new Date().getTimezoneOffset(), // Negate to get the correct offset for conversion
            where: context.where
        };

        const form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("id", "exportForm");
        form.setAttribute("target", "_blank");
        // Template-based exports are fully server-driven via the template query param.
        // Request data (where, sort, limit, etc.) is intentionally omitted — the template
        // defines the data shape and filtering on the server side.
        if (!extraParams.template) {
            for (const key in finalRequestData) {
                let v = finalRequestData[key];
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
        form.setAttribute('action', context.url);
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => { form.remove(); }, 0);
        return;
    }

    // Build context object and execute request hook
    const context = await executeRequestHook(model, {
        where,
        url,
        requestData,
        dataParsers: DATA_PARSERS,
        dataParser: DATA_PARSERS.json,
        jsonPayload: true,
        action,
        signal,
        additionalHeaders: {
            "Content-Type": "application/json"
        },
        ...props
    });

    const response = await request(context);

    if (response?.aborted) {
        return response;
    }

    validateResponse(response, 'An error occurred while fetching data');

    // Execute response hook if defined
    const parsedResponse = await executeResponseHook(model, action, response, { dateColumns, ...props });
    if (parsedResponse !== response) {
        return parsedResponse;
    }

    // Default response processing for date columns and display indexes
    response.records.forEach(record => {
        dateColumns.forEach(column => {
            const { field, localize } = column;
            if (record[field]) {
                record[field] = new Date(record[field]);
                if (!localize) {
                    const userTimezoneOffset = record[field].getTimezoneOffset() * 60000;
                    record[field] = new Date(record[field].getTime() + userTimezoneOffset);
                }
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

    // Build context object and execute request hook
    const context = await executeRequestHook(model, {
        url: `${url}?${searchParams.toString()}`,
        method: 'GET',
        where,
        lookupsToFetch,
        jsonPayload: true,
        action: 'load',
        dataParsers: DATA_PARSERS,
        ...props
    });

    const response = await request(context);
    validateResponse(response, 'Load failed');

    // Execute response hook if defined
    const parsedResponse = await executeResponseHook(model, 'load', response, props);
    if (parsedResponse !== response) {
        return parsedResponse;
    }

    // Default response processing
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

    // Build context object and execute request hook
    const context = await executeRequestHook(model, {
        url: `${api}/${id}`,
        method: 'DELETE',
        dataParsers: DATA_PARSERS,
        jsonPayload: true,
        action: 'delete',
        ...props
    });

    const response = await request(context);
    validateResponse(response, 'Delete failed');
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

    // Build context object and execute request hook
    const context = await executeRequestHook(model, {
        url,
        method,
        params: values,
        action: 'save',
        jsonPayload: true,
        additionalHeaders: {
            'Content-Type': 'application/json'
        },
        dataParsers: DATA_PARSERS,
        ...props
    });

    const response = await request(context);
    validateResponse(response, 'Save failed');
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

    // Build context object and execute request hook
    const context = await executeRequestHook(model, {
        url: `${url}?${searchParams.toString()}`,
        method: 'GET',
        lookups,
        scopeId,
        dataParsers: DATA_PARSERS,
        dataParser: DATA_PARSERS.json,
        jsonPayload: true,
        action: 'lookups',
        ...reqData,
        ...props
    });

    const response = await request(context);
    validateResponse(response, 'Could not load lookups');

    // Execute response hook if defined
    return await executeResponseHook(model, 'lookups', response, props);
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
