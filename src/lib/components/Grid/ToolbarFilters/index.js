import React, { useMemo, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import ToolbarFilterItem from './ToolbarFilterItem';
import { parseToolbarFilterConfig } from './filterConfig';

/**
 * ToolbarFilters - Main orchestrator component
 * Parses columns for toolbar filter configs, manages initialization, and coordinates state
 */
const ToolbarFilters = ({
    gridColumns,      // All grid columns
    apiRef,           // Grid API reference
    filterModel,      // Current filter state
    setFilterModel,   // Update filter state
    tTranslate,       // Translation function
    tOpts,            // Translation options
    dataRef           // Lookup data reference
}) => {
    // Parse toolbar filter configs from columns (memoized)
    const toolbarFilterConfigs = useMemo(() => {
        const configs = [];

        for (const column of gridColumns) {
            const config = parseToolbarFilterConfig(column);
            if (config) {
                configs.push({
                    ...config,
                    column // Store reference to full column for input component
                });
            }
        }

        return configs;
    }, [gridColumns]);

    // Initialize filters with initial values on mount
    useEffect(() => {
        if (toolbarFilterConfigs.length === 0) return;

        // Check if any configs have initialValue
        const configsWithInitialValues = toolbarFilterConfigs.filter(
            config => config.initialValue != null
        );

        if (configsWithInitialValues.length === 0) return;

        // Add initial values to filterModel if not already present
        const newItems = [...filterModel.items];
        let hasChanges = false;

        configsWithInitialValues.forEach(config => {
            const existingItem = newItems.find(
                item => item.field === config.field && item.operator === config.operator
            );

            if (!existingItem) {
                newItems.push({
                    id: `toolbar-filter-${config.field}`,
                    field: config.field,
                    operator: config.operator,
                    type: config.type,
                    value: config.initialValue
                });
                hasChanges = true;
            }
        });

        if (hasChanges) {
            setFilterModel({
                ...filterModel,
                items: newItems
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only run on mount

    // Handle filter change from individual filter item
    const handleFilterChange = useCallback((newItem) => {
        const existingIndex = filterModel.items.findIndex(
            item => item.field === newItem.field && item.operator === newItem.operator
        );

        let newItems;

        // Remove filter if value is cleared
        if (newItem.value == null || newItem.value === '' ||
            (Array.isArray(newItem.value) && newItem.value.length === 0)) {
            if (existingIndex >= 0) {
                newItems = filterModel.items.filter((_, idx) => idx !== existingIndex);
            } else {
                return; // No change needed
            }
        } else {
            // Add or update filter
            if (existingIndex >= 0) {
                newItems = [...filterModel.items];
                newItems[existingIndex] = newItem;
            } else {
                newItems = [...filterModel.items, newItem];
            }
        }

        setFilterModel({
            ...filterModel,
            items: newItems
        });
    }, [filterModel, setFilterModel]);

    // Don't render if no toolbar filters configured
    if (toolbarFilterConfigs.length === 0) {
        return null;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                flexWrap: 'wrap'
            }}
        >
            {toolbarFilterConfigs.map(config => (
                <ToolbarFilterItem
                    key={`${config.field}-${config.operator}`}
                    config={config}
                    column={config.column}
                    apiRef={apiRef}
                    filterModel={filterModel}
                    onFilterChange={handleFilterChange}
                    tTranslate={tTranslate}
                    tOpts={tOpts}
                    dataRef={dataRef}
                />
            ))}
        </Box>
    );
};

export default ToolbarFilters;
