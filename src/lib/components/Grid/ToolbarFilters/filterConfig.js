/**
 * Configuration utilities for toolbar filters
 * Handles parsing column.toolbarFilter configs and generating display labels
 */

// Operators that use symbols (compact display)
export const operatorSymbols = {
    '=': '=',
    '!=': '≠',
    '>': '>',
    '>=': '≥',
    '<': '<',
    '<=': '≤'
};

// Operators that use text labels (need clarity)
export const operatorLabels = {
    contains: 'contains',
    doesNotContain: 'not contains',
    startsWith: 'starts with',
    endsWith: 'ends with',
    equals: 'exact match',      // For string equals (non-obvious)
    doesNotEqual: 'not equals',
    isEmpty: 'empty',
    isNotEmpty: 'not empty',
    is: 'is',
    not: 'is not',
    after: 'after',
    onOrAfter: 'on/after',
    before: 'before',
    onOrBefore: 'on/before',
    isAnyOf: 'any of'
};

/**
 * Returns default operator based on column type
 * @param {string} columnType - The column type (string, number, date, etc.)
 * @returns {string} - Default operator for that type
 */
export const getDefaultOperator = (columnType) => {
    const defaults = {
        string: 'startsWith',
        number: '=',
        date: 'is',
        dateTime: 'is',
        boolean: 'is',
        select: 'isAnyOf',
        singleSelect: 'isAnyOf'
    };
    return defaults[columnType] || 'equals';
};

/**
 * Parses column.toolbarFilter config and returns normalized config object
 * @param {Object} column - Column definition
 * @returns {Object|null} - Normalized toolbar filter config or null
 */
export const parseToolbarFilterConfig = (column) => {
    const { toolbarFilter, field, headerName, label, type, filterOperators } = column;

    // Return null if toolbarFilter is not defined or false
    if (!toolbarFilter) return null;

    // Validate required properties
    if (!field || !type) {
        console.warn(`[ToolbarFilters] Column missing required properties (field or type):`, column);
        return null;
    }

    // Validate filterOperators exist
    if (!filterOperators || filterOperators.length === 0) {
        console.warn(`[ToolbarFilters] Column '${field}' has no filterOperators`);
        return null;
    }

    const columnLabel = headerName || label || field;
    let operator;
    let customLabel = null;
    let initialValue = null;

    // Handle boolean: toolbarFilter: true
    if (toolbarFilter === true) {
        operator = getDefaultOperator(type);
    }
    // Handle string: toolbarFilter: 'startsWith'
    else if (typeof toolbarFilter === 'string') {
        operator = toolbarFilter;
    }
    // Handle object: toolbarFilter: { operator: 'equals', label: 'Custom', initialValue: 'x' }
    else if (typeof toolbarFilter === 'object') {
        operator = toolbarFilter.operator || getDefaultOperator(type);
        customLabel = toolbarFilter.label;
        initialValue = toolbarFilter.initialValue;
    }
    else {
        console.warn(`[ToolbarFilters] Invalid toolbarFilter config for column '${field}':`, toolbarFilter);
        return null;
    }

    // Validate operator exists in filterOperators
    const operatorExists = filterOperators.some(op => op.value === operator);
    if (!operatorExists) {
        console.warn(
            `[ToolbarFilters] Operator '${operator}' not found for column '${field}'. ` +
            `Available operators: ${filterOperators.map(op => op.value).join(', ')}`
        );
        return null;
    }

    return {
        field,
        operator,
        type,
        label: customLabel || columnLabel,
        initialValue: initialValue !== undefined ? initialValue : null,
        filterOperators
    };
};

/**
 * Generates display label for toolbar filter
 * Uses symbols for obvious operators (>, >=, etc.) and text for non-obvious ones
 * @param {Object} config - Toolbar filter config
 * @param {Function} tTranslate - Translation function
 * @param {Object} tOpts - Translation options
 * @returns {string} - Display label
 */
export const generateFilterLabel = (config, tTranslate, tOpts) => {
    const { label, operator, type } = config;
    const defaultOp = getDefaultOperator(type);

    // If using default operator, just show column label
    if (operator === defaultOp) {
        return tTranslate(label, tOpts);
    }

    // Check if operator has a symbol (compact display)
    if (operatorSymbols[operator]) {
        return `${tTranslate(label, tOpts)} ${operatorSymbols[operator]}`;
    }

    // Use text label for non-obvious operators
    const opLabel = operatorLabels[operator] || operator;
    return `${tTranslate(label, tOpts)} (${tTranslate(opLabel, tOpts)})`;
};

/**
 * Determines which input component to use for a filter
 * @param {Object} config - Toolbar filter config
 * @returns {Object} - { component, props, requiresInput }
 */
export const resolveInputComponent = (config) => {
    const { operator, filterOperators } = config;

    // Find the operator definition
    const operatorDef = filterOperators?.find(op => op.value === operator);

    if (!operatorDef) {
        return { component: null, props: {}, requiresInput: false };
    }

    // Operators that don't require input (isEmpty, isNotEmpty, etc.)
    if (operatorDef.requiresFilterValue === false) {
        return { component: null, props: {}, requiresInput: false };
    }

    // Return the InputComponent from operator definition
    return {
        component: operatorDef.InputComponent,
        props: operatorDef.InputComponentProps || {},
        requiresInput: true
    };
};
