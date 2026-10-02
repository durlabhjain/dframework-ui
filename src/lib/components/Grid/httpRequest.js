import dayjs from 'dayjs';
import { ERROR_CODES, ERROR_MESSAGES } from '../../errors';

const HTTP_STATUS_CODES = {
    OK: 200,
    SESSION_EXPIRED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

// Shown when the server sends no usable message of its own for a failed request.
// Wording is kept identical to the consuming app's own status messages so existing
// translation entries keyed by these strings keep working.
const HTTP_ERROR_MESSAGES = {
    401: 'You are unauthorized to access this resource. Please log in with appropriate credentials.',
    403: 'You don\'t have permission to access this page.',
    404: 'The requested page was not found.',
    408: 'The server is taking too long to respond. Please try again later.',
    500: 'Something went wrong on our server. Please try again later.',
    503: 'Something went wrong on our server. Please try again later.',
    504: 'The server is taking too long to respond. Please try again later.'
};

const dateFormatterForForm = new Intl.DateTimeFormat('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});

const getFormData = (props) => {
    const formData = new FormData();
    for (const key in props) {
        let value = props[key];
        if (value === null) {
            value = '';
        } else if (value instanceof Date) {
            value = dateFormatterForForm.format(value).replace(',', '');
        } else if (dayjs.isDayjs(value)) {
            value = dateFormatterForForm.format(value.toDate()).replace(',', '');
        } else if (typeof Blob !== "undefined" && value instanceof Blob) {
            // Leave File/Blob as-is so FormData.append sends it as a file part, not "{}".
        } else if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        formData.append(key, value);
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

// IIS/nginx answer a non-200 with a full HTML error page, and a stack trace or a wall of
// text is no better in a snackbar - only short plain text counts as a usable message.
const MAX_ERROR_MESSAGE_LENGTH = 300;
const MARKUP_PATTERN = /<\s*(!doctype|\/?(?:html|head|body|div|span|p|h[1-6]|style|script|table|pre|title|meta|link))\b/i;

const toDisplayableMessage = (value) => {
    if (typeof value !== 'string') return undefined;
    const text = value.trim();
    if (!text || text.length > MAX_ERROR_MESSAGE_LENGTH || MARKUP_PATTERN.test(text)) return undefined;
    return text;
};

/**
 * Extract error message from response
 * Utility to normalize error messages across different response formats
 * Only returns short plain-text values; non-string fields (e.g. error: true) and server-rendered
 * HTML error pages are ignored so callers' `|| default` fallback applies.
 */
const getErrorMessage = (response) => {
    if (typeof response === 'string') return toDisplayableMessage(response);

    return [response?.message, response?.info, response?.error, response?.err]
        .map(toDisplayableMessage)
        .find(Boolean);
};

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
 * Enhanced HTTP request handler with automatic data parsing
 * 
 * Note: Loader management is the responsibility of the calling component.
 * This allows components to control when and how to show loading states.
 * 
 * @param {Object} config - Request configuration
 * @param {string} config.url - API endpoint URL
 * @param {Object} config.params - Request parameters
 * @param {Function} config.history - Navigation function for redirects
 * @param {boolean} config.jsonPayload - Whether to send JSON payload instead of FormData
 * @param {string} [config.method='POST'] - HTTP method (e.g. 'GET', 'POST', 'PUT', 'DELETE')
 * @param {AbortSignal} [config.signal] - AbortSignal for cancellable requests
 * @param {Object} config.additionalParams - Additional fetch parameters (rarely needed; prefer named params above)
 * @param {Object} config.additionalHeaders - Additional request headers
 * @param {Function} config.dataParser - Parser function to normalize response data (default: DATA_PARSERS.raw)
 * @param {Function} config.onParseError - Custom error handler for parse failures
 *
 * @returns {Promise<any>} Parsed response data, `{ error: true, message }` on failure,
 *   or `{ error: true, aborted: true, message }` when the request is cancelled via an `AbortSignal`.
 * 
 * @example
 * // Basic usage
 * const data = await request({ 
 *   url: '/api/data', 
 *   params: { id: 1 }
 * });
 * 
 * @example
 * // With custom error handling
 * const data = await request({ 
 *   url: '/api/data',
 *   params: { id: 1 },
 *   onParseError: (error, rawData) => {
 *     console.error('Parse failed:', error);
 *     return { error: true, message: 'Custom error message' };
 *   }
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
    onParseError
}) => {
    if (params.exportData) {
        return exportRequest(url, params);
    }

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

        if (response.status !== HTTP_STATUS_CODES.OK) {
            return {
                error: true,
                status: response.status,
                message: getErrorMessage(data)
                    || HTTP_ERROR_MESSAGES[response.status]
                    || ERROR_MESSAGES[ERROR_CODES.AN_ERROR_OCCURRED]
            };
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
    }
};

export {
    transport,
    DATA_PARSERS,
    getErrorMessage,
    HTTP_ERROR_MESSAGES
};

export default request;