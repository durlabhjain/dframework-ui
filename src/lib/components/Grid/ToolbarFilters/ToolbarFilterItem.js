import React, { useCallback, useMemo } from 'react';
import { Box, FormControl, InputLabel } from '@mui/material';
import { generateFilterLabel, resolveInputComponent } from './filterConfig';

/**
 * Individual toolbar filter control
 * Renders appropriate input component based on column type and operator
 */
const ToolbarFilterItem = ({
    config,        // Parsed config from filterConfig.js
    column,        // Full column object
    apiRef,        // Grid API reference
    filterModel,   // Current filter state
    onFilterChange,// Callback to update filterModel
    tTranslate,    // Translation function
    tOpts,         // Translation options
    dataRef        // Lookup data reference
}) => {
    // Generate display label with operator suffix if needed
    const displayLabel = useMemo(
        () => generateFilterLabel(config, tTranslate, tOpts),
        [config, tTranslate, tOpts]
    );

    // Get input component from operator definition
    const { component: InputComponent, props: inputProps, requiresInput } = useMemo(
        () => resolveInputComponent(config),
        [config]
    );

    // Find existing filter item in filterModel.items for this field+operator
    const existingFilterItem = useMemo(() => {
        return filterModel.items.find(
            item => item.field === config.field && item.operator === config.operator
        );
    }, [filterModel.items, config.field, config.operator]);

    // Create filter item object with current or initial value
    const filterItem = useMemo(() => ({
        id: existingFilterItem?.id || `toolbar-filter-${config.field}`,
        field: config.field,
        operator: config.operator,
        type: config.type,
        value: existingFilterItem?.value ?? config.initialValue
    }), [existingFilterItem, config]);

    // Handle value changes from input component
    const applyValue = useCallback((newItem) => {
        onFilterChange(newItem);
    }, [onFilterChange]);

    // Don't render if operator doesn't require input (isEmpty, isNotEmpty, etc.)
    if (!requiresInput || !InputComponent) {
        return null;
    }

    // Enhance column with dataRef for CustomDropdownMenu to access lookup data
    const enhancedColumn = useMemo(() => ({
        ...column,
        dataRef
    }), [column, dataRef]);

    return (
        <Box
            sx={{
                minWidth: 180,
                maxWidth: 250,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <FormControl variant="standard" size="small" fullWidth>
                <InputLabel shrink sx={{
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {displayLabel}
                </InputLabel>
                <InputComponent
                    item={filterItem}
                    applyValue={applyValue}
                    apiRef={apiRef}
                    column={enhancedColumn}
                    type={config.type}
                    {...inputProps}
                />
            </FormControl>
        </Box>
    );
};

export default ToolbarFilterItem;
