// Delay (ms) before the global full-screen loader is shown.
// Requests that complete before this threshold will not trigger the loader.
const LOADER_DELAY_MS = 2000
// Track pending requests that are eligible for loader display.
let pendingRequests = 0;
// Count of requests whose timer has fired and shown the loader.
let loaderShownCount = 0;
// Debounce timer for hiding the loader -- prevents flicker on back-to-back requests.
let hideLoaderTimer = null;

// Loader callback registered by the consuming application (e.g. StateProvider).
let _showLoader = null;

/**
 * Register a callback to control the global full-screen loader.
 * Should be called once during app initialisation (e.g. inside StateProvider on mount).
 *
 * Uses first-registration-wins: React runs child effects before parent effects, so
 * the innermost StateProvider (the one that wraps the Loader component) registers
 * first and wins. Outer/ancestor StateProviders are ignored.
 *
 * @param {Object} callbacks
 * @param {Function} callbacks.showLoader - Function(flag: boolean) that shows/hides the loader.
 * @param {boolean} [callbacks.force=false] - Force re-registration even if already registered.
 * @param {Function} [callbacks.clearIfMatch=null] - Only clear the global callback if it still
 *   equals this function reference. Use in cleanup to avoid clobbering a newer registration.
 */
const registerLoaderCallbacks = ({ showLoader, force = false, clearIfMatch = null }) => {
    if (clearIfMatch !== null) {
        if (_showLoader === clearIfMatch) {
            _showLoader = null;
        }
        return;
    }
    if (_showLoader === null || force) {
        _showLoader = showLoader;
    }
};

const HTTP_STATUS_CODES = {
    OK: 200,
    SESSION_EXPIRED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

const getFormData = (props) => {
    const formData = new FormData();
    for (const key in props) {
        if (typeof props[key] === "object") {
            formData.append(key, JSON.stringify(props[key]));
        } else {
            formData.append(key, props[key]);
        }
    }
    return formData;
};

const exportRequest = (url, query) => {
    const newURL = new URL(url);
    for (const key in query) {
        const value = typeof query[key] === 'object' ? JSON.stringify(query[key]) : query[key];
        newURL.searchParams.append(key, value);
    }
    window.open(newURL, '_blank').focus();
};

const transport = async (config) => {
    const {
        method = 'GET',
        url,
        data,
        headers = {},
        credentials = 'include',
        ...rest
    } = config;

    const fetchOptions = {
        method,
        credentials,
        headers: {
            ...headers
        },
        ...rest
    };

    if (data) {
        if (headers['Content-Type'] === 'multipart/form-data') {
            delete fetchOptions.headers['Content-Type']; // Let browser set it
            fetchOptions.body = data instanceof FormData ? data : getFormData(data);
        } else {
            fetchOptions.headers['Content-Type'] = headers['Content-Type'] || 'application/json';
            fetchOptions.body = typeof data === 'string' ? data : JSON.stringify(data);
        }
    }

    const response = await fetch(url, fetchOptions);
    const contentType = response.headers.get('content-type') || {};
    const responseObj = {
        status: response.status,
        data: contentType.includes('application/json') ? await response.json() : await response.text(),
        headers: Object.fromEntries(response.headers.entries())
    };

    return responseObj;
};

/**
 * Extract error message from response
 * Utility to normalize error messages across different response formats
 */
const getErrorMessage = (response) => response?.message || response?.info || response?.error || response?.err;

/**
 * Default data parsers for different response types
 * Use these to normalize API responses to a consistent type
 */
const DATA_PARSERS = Object.freeze({
    /**
     * Parse JSON string or return object as-is
     * Automatically handles string JSON responses
     */
    json: (data) => {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        return data;
    },
    /**
     * Convert to string
     */
    text: (data) => String(data),
    /**
     * Return data as-is without parsing
     */
    raw: (data) => data
});

/**
 * HTTP request handler with automatic data parsing and global loader management.
 *
 * By default this function drives a global full-screen loader: if the request has
 * not completed after LOADER_DELAY_MS (2 s), the loader registered via
 * `registerLoaderCallbacks` is shown and hidden once all in-flight requests finish.
 * Multiple overlapping calls are tracked — the loader stays visible until every
 * participating request completes.
 *
 * Use `disableLoader: true` for background or high-frequency requests where showing
 * the loader would be disruptive (e.g. polling, typeahead search, silent refreshes).
 *
 * @param {Object} config - Request configuration
 * @param {string} config.url - API endpoint URL
 * @param {Object} config.params - Request parameters
 * @param {Function} config.history - Navigation function for redirects
 * @param {boolean} config.jsonPayload - Whether to send a JSON body instead of FormData
 * @param {string} [config.method='POST'] - HTTP method (e.g. 'GET', 'POST', 'PUT', 'DELETE')
 * @param {AbortSignal} [config.signal] - AbortSignal for cancellable requests
 * @param {Object} config.additionalParams - Additional fetch options (rarely needed; prefer named params above)
 * @param {Object} config.additionalHeaders - Additional request headers
 * @param {boolean} [config.disableLoader=false] - Skip global loader management for this request
 * @param {Function} config.dataParser - Parser to normalise response data (default: DATA_PARSERS.raw)
 * @param {Function} config.onParseError - Custom handler called when dataParser throws
 *
 * @returns {Promise<any>} Parsed response data, `{ error: true, message }` on failure,
 *   or `{ error: true, aborted: true, message }` when cancelled via an AbortSignal.
 *
 * @example
 * // Standard call — shows loader if the request takes longer than 2 s
 * const data = await request({ url: '/api/data', params: { id: 1 } });
 *
 * @example
 * // Silent background fetch — never triggers the loader
 * const data = await request({ url: '/api/poll', params: {}, disableLoader: true });
 *
 * @example
 * // Custom parse-error handling
 * const data = await request({
 *   url: '/api/data',
 *   params: { id: 1 },
 *   onParseError: (error, rawData) => ({ error: true, message: 'Custom error message' })
 * });
 */

const request = async ({ 
    url, 
    params = {}, 
    history, 
    jsonPayload = false,
    method = 'POST',
    signal,
    additionalParams = {}, 
    additionalHeaders = {}, 
    dataParser = DATA_PARSERS.raw,
    onParseError,
    disableLoader = false
}) => {
    if (params.exportData) {
        return exportRequest(url, params);
    }

    // --- Global loader management (mirrors playbook-frontend httpRequest pattern) ---
    // Capture participation at call time so the finally block always performs the
    // matching teardown even if _showLoader is unregistered while the request is in-flight.
    const didManageLoader = !disableLoader && typeof _showLoader === 'function';
    let loaderTimer = null;
    let loaderShown = false;

    if (didManageLoader) {
        pendingRequests++;
        if (hideLoaderTimer) {
            clearTimeout(hideLoaderTimer);
            hideLoaderTimer = null;
        }
        loaderTimer = setTimeout(() => {
            if (pendingRequests > 0 && typeof _showLoader === 'function') {
                loaderShown = true;
                loaderShownCount++;
                _showLoader(true);
            }
        }, LOADER_DELAY_MS);
    }
    // --- End loader setup ---

    const reqParams = {
        method,
        credentials: 'include',
        url: url,
        headers: jsonPayload ? { ...additionalHeaders } : { 'Content-Type': 'multipart/form-data', ...additionalHeaders },
        ...(signal && { signal }),
        ...additionalParams
    };

    if (params && Object.keys(params).length > 0) {
        reqParams.data = jsonPayload ? params : getFormData(params);
    }

    try {
        const response = await transport(reqParams);
        let data = response.data;

        // Handle HTTP errors here
        if (response.status === HTTP_STATUS_CODES.SESSION_EXPIRED && history) {
            history('/login');
            return;
        }

        if (response.status === HTTP_STATUS_CODES.FORBIDDEN) {
            return { error: true, message: data.message || 'Access Denied!' };
        }

        if (response.status !== HTTP_STATUS_CODES.OK) {
            // You can return the error object or handle as needed
            return { error: true, message: data.message || 'An error occurred' };
        }

        // Apply data parser to normalize response
        try {
            data = dataParser(data);
        } catch (parseError) {
            if (onParseError) {
                return onParseError(parseError, data);
            }
            // Return error in standard format
            return { 
                error: true, 
                message: 'Failed to parse response data', 
                parseError: parseError.message,
                rawData: data 
            };
        }

        return data;
    } catch (ex) {
        if (ex.name === 'AbortError') {
            return { error: true, aborted: true, message: ex.message || 'Request aborted' };
        }
        // Only network errors will be caught here
        return { error: true, message: ex.message || 'Network error' };
    } finally {
        // --- Global loader teardown ---
        if (didManageLoader) {
            if (loaderTimer) {
                clearTimeout(loaderTimer);
            }
            if (loaderShown) {
                loaderShownCount = Math.max(0, loaderShownCount - 1);
            }
            pendingRequests = Math.max(0, pendingRequests - 1);
            // Schedule hide whenever all requests are done and the loader count is zero,
            // regardless of whether this specific request triggered the loader. Without
            // this, a fast request completing last (loaderShown=false) would leave the
            // loader permanently visible after a preceding slow request showed it.
            if (pendingRequests === 0 && loaderShownCount === 0) {
                hideLoaderTimer = setTimeout(() => {
                    if (pendingRequests === 0 && loaderShownCount === 0 && typeof _showLoader === 'function') {
                        _showLoader(false);
                    }
                    hideLoaderTimer = null;
                }, 100);
            }
        }
        // --- End loader teardown ---
    }
};

export {
    HTTP_STATUS_CODES,
    transport,
    DATA_PARSERS,
    getErrorMessage,
    registerLoaderCallbacks
};

export default request;