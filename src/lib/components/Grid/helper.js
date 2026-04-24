import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { GridToolbarExportContainer } from '@mui/x-data-grid-premium';
import { GridOn, Code, Language, TableChart, DataObject as DataObjectIcon } from '@mui/icons-material';
import React from 'react';

// Helper to convert default sort string to array
export const convertDefaultSort = (defaultSort, constants, sortRegex) => {
    if (typeof defaultSort !== constants.string) return [];
    return defaultSort.split(',').map(sortField => {
        sortRegex.lastIndex = 0;
        const sortInfo = sortRegex.exec(sortField);
        if (!sortInfo) return null;
        const [, field, direction = 'ASC'] = sortInfo;
        return {
            field: field.trim(),
            sort: direction.trim().toLowerCase()
        };
    }).filter(Boolean);
};

// Export menu item component
export const ExportMenuItem = ({ tTranslate, tOpts, handleExport, contentType, type, isPivotExport = false, icon }) => (
    <MenuItem
        onClick={handleExport}
        data-type={type}
        data-content-type={contentType}
        data-is-pivot-export={isPivotExport}
    >
        <Box className="grid-icons" sx={{ pointerEvents: 'none', marginTop: 1 }}>{icon}</Box>
        {tTranslate(type, tOpts)}
    </MenuItem>
);

// Custom export button component
export const CustomExportButton = ({ exportFormats, customExportOptions, isStaticDataMode = false, ...props }) => {
    const exportItems = [
        exportFormats.csv !== false && <ExportMenuItem key="csv" {...props} icon={<GridOn fontSize="small" />} type="CSV" contentType="text/csv" />,
        exportFormats.excel !== false && <ExportMenuItem key="excel" {...props} icon={<TableChart fontSize="small" />} type="Excel" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />,
        !isStaticDataMode && props.showPivotExportBtn && <ExportMenuItem key="pivot" {...props} icon={<TableChart fontSize="small" />} type="Excel With Pivot" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" isPivotExport={true} />,
        !isStaticDataMode && exportFormats.xml !== false && <ExportMenuItem key="xml" {...props} icon={<Code fontSize="small" />} type="XML" contentType="text/xml" />,
        !isStaticDataMode && exportFormats.html !== false && <ExportMenuItem key="html" {...props} icon={<Language fontSize="small" />} type="HTML" contentType="text/html" />,
        !isStaticDataMode && exportFormats.json !== false && <ExportMenuItem key="json" {...props} icon={<DataObjectIcon fontSize="small" />} type="JSON" contentType="application/json" />,
        !isStaticDataMode && Array.isArray(customExportOptions) && customExportOptions.map((item, index) => (
            <ExportMenuItem
                key={item.key || index}
                {...props}
                icon={item.icon || <TableChart fontSize="small" />}
                type={item.label || 'Excel'}
                contentType={item.contentType || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
                handleExport={item.handleExport || props.handleExport}
            />
        ))
    ].flat().filter(Boolean);

    if (exportItems.length === 0) return null;

    return (
        <GridToolbarExportContainer {...props}>
            {exportItems}
        </GridToolbarExportContainer>
    );
};

// Get default operator based on column type
export const getDefaultOperator = (type, customOperator) => {
    if (customOperator) return customOperator;
    switch (type) {
        case 'string':
            return 'startsWith';
        case 'number':
            return '=';
        case 'date':
        case 'dateTime':
            return 'is';
        case 'boolean':
            return 'is';
        case 'select':
        case 'lookup':
            return 'isAnyOf';
        default:
            return 'startsWith';
    }
};

// Shallow props comparison
export const areEqual = (prevProps = {}, nextProps = {}) => {
    let equal = true;
    for (const o in prevProps) {
        if (prevProps[o] !== nextProps[o]) {
            equal = false;
        }
    }
    for (const o in nextProps) {
        if (!(o in prevProps)) {
            equal = false;
        }
    }
    return equal;
};
