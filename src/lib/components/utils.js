/**
 * @fileoverview Utility functions and constants for the DFramework UI library
 *
 * This module provides common utility functions, data type mappings, format specifications,
 * error handling, permission management, and helper functions used throughout the
 * DFramework UI components.
 */

/**
 * Utility functions and constants for the DFramework UI library.
 * Contains common helper functions, data type mappings, format specifications,
 * and permission handling utilities.
 */
const utils = {
    /**
     * Maps filter field data types to their string representations.
     * Used for type validation and conversion in filter operations.
     */
    filterFieldDataTypes: {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean'
    },

    /**
     * Standard date and time format strings used throughout the application.
     * These formats ensure consistent date/time display and parsing.
     */
    fixedFilterFormat: {
        date: "YYYY-MM-DD",
        datetime: "YYYY-MM-DD hh:mm:ss a",
        dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
        OverrideDateFormat: "DD-MMM-YYYY"
    },

    /**
     * Maps HTTP error codes to user-friendly error messages.
     * Used for displaying meaningful error messages to users.
     */
    errorMapping: {
        413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file."
    },

    /**
     * Maps permission action names to their corresponding permission field names.
     * Used for checking user permissions against database permission fields.
     */
    permissionsMapper: {
        add: "Permission2",
        edit: "Permission3",
        delete: "Permission4"
    },

    /**
     * Array of values that are considered "empty" or invalid for ID fields.
     * Used for validation and filtering operations.
     */
    emptyIdValues: [null, undefined, '', '0', 0],
    /**
	 * Build portal-controller style filter parameters from a "where" array.
	 *
	 * Converts an array of filter descriptors into the backend-expected
	 * query parameter shape:
	 *   filter[<i>][field] = <fieldName>
	 *   filter[<i>][data][type] = <type>
	 *   filter[<i>][data][value] = <value>
	 *
	 * Behavior:
	 * - Iterates the `where` array and only processes entries that have a value:
	 *   - array values must have length > 0
	 *   - non-array values must be truthy
	 * - Uses ele.field as the field name.
	 * - Uses ele.type or defaults to 'string' for the data type.
	 * - Writes results into the provided `filterParams` object (mutates).
	 * - If `where` is falsy or empty, returns an empty object immediately.
	 *
	 * Params:
	 * @param {Array<Object>} where - Array of filter descriptors. Typical shape:
	 *    { fieldName?: string, field?: string, type?: string, value: any }
	 *    (value can be an array or scalar)
	 * @param {Object} [filterParams={}] - Optional object to populate with generated params.
	 *    This object is mutated in-place. Example after call:
	 *      filter[0][field] = 'Status'
	 *      filter[0][data][type] = 'string'
	 *      filter[0][data][value] = 'active'
	 *
	 * Returns:
	 * - undefined (function mutates filterParams).
	 * - Note: when `where` is falsy or empty the function returns an empty object {}.
	 *
	 * Usage:
	 *  const params = {};
	 *  const where = [
	 *    { field: 'Status', type: 'string', value: 'active' },
	 *    { fieldName: 'CreatedOn', type: 'date', value: ['2024-01-01','2024-12-31'] }
	 *  ];
	 *  utils.createCSPayload(where, params);
	 *  // params now has portal-style filter keys ready to be sent in request
	 * 
	 * Returns:
	 *   undefined if `where` is falsy or empty; otherwise, mutates `filterParams` in place.
	 */
	createCSPayload: function (where, filterParams = {}) {
		const numberTypes = ['number', 'numeric', 'int', 'integer', 'decimal', 'float', 'double'];
		if (!where || !where.length) return {};
		where.forEach((ele, index) => {
			if (numberTypes.includes(ele.type)) {
				ele.type = 'numeric';
			}
			if (ele.type === 'select') {
				ele.type = 'string';
			}
			if ((Array.isArray(ele.value) && ele.value?.length) || (!Array.isArray(ele.value) && ele.value) || typeof ele.value === "boolean") {
				const filterKeyName = `filter[${index}][field]`;
				filterParams[filterKeyName] = ele.field;

				const typeKeyName = `filter[${index}][data][type]`;
				filterParams[typeKeyName] = ele.type === 'lookup' ? 'list' : ele.type || 'string';

				const valueKeyName = `filter[${index}][data][value]`;
				filterParams[valueKeyName] = ele?.operator === 'contains' ? `%${ele.value}` : ele.value;

				if (numberTypes.includes(ele.type)) {
					const typeKeyName = `filter[${index}][data][comparison]`;
					filterParams[typeKeyName] = ele?.operator === '=' ? 'eq' : ele?.operator || 'eq';
					ele.type = 'numeric';
				}

			}
		});
	},
	/**
	 * Parse compact timestamp format: YYYYMMDDHHMMSSmmm (or shorter variants)
	 * @param {string} timestamp - The timestamp string to parse
	 * @returns {Date|null} - Parsed Date object or null if invalid
	 */
	parseCompactTimestamp: function (timestamp) {
		if (typeof timestamp !== 'string' || timestamp.length < 10) {
			return null;
		}

		try {
			// Extract components: YYYYMMDDHHMMSSmmm
			const year = parseInt(timestamp.substring(0, 4));
			const month = parseInt(timestamp.substring(4, 6)) - 1; // Month is 0-based in Date constructor
			const day = parseInt(timestamp.substring(6, 8));
			const hour = timestamp.length >= 10 ? parseInt(timestamp.substring(8, 10)) : 0;
			const minute = timestamp.length >= 12 ? parseInt(timestamp.substring(10, 12)) : 0;
			const second = timestamp.length >= 14 ? parseInt(timestamp.substring(12, 14)) : 0;
			const millisecond = timestamp.length >= 17 ? parseInt(timestamp.substring(14, 17)) : 0;

			// Basic validation
			if (month < 0 || month > 11) return null;
			if (day < 1 || day > 31) return null;
			if (hour < 0 || hour > 23) return null;
			if (minute < 0 || minute > 59) return null;
			if (second < 0 || second > 59) return null;
			if (millisecond < 0 || millisecond > 999) return null;

			const date = new Date(year, month, day, hour, minute, second, millisecond);
			return isNaN(date.getTime()) ? null : date;
		} catch (error) {
			return null;
		}
	},
	/**
	 * Extract the controller ID parameter from route parameters.
	 *
	 * This function is used in routing scenarios where the URL contains
	 * a wildcard parameter (*) that includes a path with an ID at the end.
	 * It extracts and converts this ID to a number.
	 *
	 * @param {Object} params - Route parameters object, typically from React Router
	 * @param {string} params['*'] - Wildcard parameter containing the path with ID
	 * @returns {number} The extracted ID as a number, or 0 if not found/invalid
	 *
	 * @example
	 * // For URL: /users/123/edit
	 * // params['*'] would be "123/edit"
	 * getCSControllerIdParam({ '*': '123/edit' }); // returns 123
	 *
	 * @example
	 * // For URL: /users
	 * // params['*'] would be undefined
	 * getCSControllerIdParam({}); // returns 0
	 */
	getCSControllerIdParam: function(params) {
		if (!params) return 0;
		return Number(params['*']?.split('/').slice(-1)[0]) || 0;
	}
}
/**
 * Determine user permissions for a specific module based on user data and model configuration.
 *
 * This function checks if a user has specific permissions (add, edit, delete) for a given module.
 * It combines user-defined permissions with database-stored permissions to determine final access rights.
 *
 * @param {Object} options - Permission check options
 * @param {Object} options.userData - User data object containing permissions array
 * @param {Array} options.userData.permissions - Array of permission objects with Module and permission fields
 * @param {Object} options.model - Model configuration object
 * @param {string} options.model.module - Module name to check permissions for
 * @param {Object} [options.userDefinedPermissions] - Override permissions (defaults to all true)
 * @param {boolean} [options.userDefinedPermissions.add=true] - Whether add permission is allowed by default
 * @param {boolean} [options.userDefinedPermissions.edit=true] - Whether edit permission is allowed by default
 * @param {boolean} [options.userDefinedPermissions.delete=true] - Whether delete permission is allowed by default
 * @returns {Object} Permission object with boolean flags
 * @property {boolean} canAdd - Whether user can add records
 * @property {boolean} canEdit - Whether user can edit records
 * @property {boolean} canDelete - Whether user can delete records
 *
 * @example
 * const userData = {
 *   permissions: [
 *     { Module: 'Users', Permission2: 1, Permission3: 1, Permission4: 0 }
 *   ]
 * };
 * const model = { module: 'Users' };
 *
 * getPermissions({ userData, model });
 * // returns: { canAdd: true, canEdit: true, canDelete: false }
 *
 * @example
 * // With user-defined permission overrides
 * getPermissions({
 *   userData,
 *   model,
 *   userDefinedPermissions: { add: false, edit: true, delete: true }
 * });
 * // returns: { canAdd: false, canEdit: true, canDelete: false }
 */
export const getPermissions = ({ userData = {}, model, userDefinedPermissions }) => {
    const { permissions = [] } = userData;
    userDefinedPermissions = userDefinedPermissions || { add: true, edit: true, delete: true };
    const userPermissions = permissions.find(item => item.Module === model.module);
    if (!userPermissions) {
        return { canAdd: userDefinedPermissions.add, canEdit: userDefinedPermissions.edit, canDelete: userDefinedPermissions.delete };
    }
    return {
        canAdd: userDefinedPermissions.add && Boolean(userPermissions[utils.permissionsMapper.add]),
        canEdit: userDefinedPermissions.edit && Boolean(userPermissions[utils.permissionsMapper.edit]),
        canDelete: userDefinedPermissions.delete && Boolean(userPermissions[[utils.permissionsMapper.delete]])
    };
};
export default utils;