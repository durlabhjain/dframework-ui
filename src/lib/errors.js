/**
 * Centralized error code registry.
 *
 * Each code is a stable, dot-namespaced key that can be used directly as an
 * i18next translation key. Consuming applications add these keys to their
 * translation files to override the default English messages in ERROR_MESSAGES.
 *
 * Pattern: error.<domain>_<verb>
 */
export const ERROR_CODES = {
    // Session / access
    SESSION_EXPIRED:        'error.session_expired',
    ACCESS_DENIED:          'error.access_denied',

    // Network / infrastructure
    NETWORK_FAILURE:        'error.network_failure',
    INTERNAL_SERVER_ERROR:  'error.internal_server_error',

    // CRUD operations
    LOAD_FAILED:            'error.load_failed',
    SAVE_FAILED:            'error.save_failed',
    DELETE_FAILED:          'error.delete_failed',
    DELETE_NO_RECORD:       'error.delete_no_record',
    LOOKUPS_FAILED:         'error.lookups_failed',

    SELECT_AT_LEAST_ONE:    'error.select_at_least_one',
    DATA_LOAD_FAILED:       'error.data_load_failed',

    // API / configuration
    API_UNDEFINED:          'error.api_undefined',

    // Generic fallback
    AN_ERROR_OCCURRED:      'error.an_error_occurred',
    UNKNOWN:                'error.unknown',
};

/**
 * Default English messages keyed by error code.
 *
 * These serve as the built-in fallback when the consuming application has not
 * provided a translation for a given code. Place these keys in your i18next
 * translation JSON to localize them.
 *
 * @example i18n translation file entry
 *   {
 *     "error": {
 *       "save_failed": "Echec de l'enregistrement",
 *       ...
 *     }
 *   }
 */
export const ERROR_MESSAGES = {
    [ERROR_CODES.SESSION_EXPIRED]:       'Session Expired!',
    [ERROR_CODES.ACCESS_DENIED]:         'Access Denied!',
    [ERROR_CODES.NETWORK_FAILURE]:       'Network failure or server unreachable. Please try again.',
    [ERROR_CODES.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
    [ERROR_CODES.LOAD_FAILED]:           'Could not load record',
    [ERROR_CODES.SAVE_FAILED]:           'Save failed',
    [ERROR_CODES.DELETE_FAILED]:         'Delete failed',
    [ERROR_CODES.DELETE_NO_RECORD]:      'Delete failed. No active record.',
    [ERROR_CODES.LOOKUPS_FAILED]:        'Could not load lookups',
    [ERROR_CODES.AN_ERROR_OCCURRED]:     'An error occurred.',
    [ERROR_CODES.UNKNOWN]:               'An unknown error occurred.',
    [ERROR_CODES.SELECT_AT_LEAST_ONE]:   'Please select at least one record to proceed.',
    [ERROR_CODES.DATA_LOAD_FAILED]:      'Could not load data',
    [ERROR_CODES.API_UNDEFINED]:         'This action requires an API endpoint.',
};

/**
 * Resolves an error code or plain string to a displayable message.
 *
 * When the consuming app supplies an i18next `t` function the error is
 * translated; otherwise the built-in English message is used as a fallback.
 *
 * @param {string} codeOrMessage - An ERROR_CODES value or a plain message string.
 * @param {Function} [t] - Optional i18next t() function from useTranslation().
 * @returns {string}
 */
export const resolveErrorMessage = (codeOrMessage, t) => {
    if (!codeOrMessage) return ERROR_MESSAGES[ERROR_CODES.UNKNOWN];
    const fallback = ERROR_MESSAGES[codeOrMessage] ?? codeOrMessage;
    if (typeof t === 'function') {
        return t(codeOrMessage, { defaultValue: fallback });
    }
    return fallback;
};

/**
 * Structured application error that pairs a stable error code with an optional
 * server-supplied detail message and HTTP status.
 *
 * Using AppError instead of plain strings means callers receive a predictable
 * shape regardless of which operation failed, and the display layer can
 * translate the code independently of the service layer.
 *
 * @example
 *   throw new AppError(ERROR_CODES.SAVE_FAILED, response.data.message, 200);
 *
 * @example
 *   setError(new AppError(ERROR_CODES.NETWORK_FAILURE));
 */
export class AppError extends Error {
    constructor(code, detail = null, httpStatus = null) {
        super(ERROR_MESSAGES[code] ?? code);
        this.name = 'AppError';
        this.code = code;
        this.detail = detail;
        this.httpStatus = httpStatus;
    }
}
