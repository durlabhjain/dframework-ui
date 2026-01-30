import React, { useMemo, useCallback } from 'react';
import {
    useGridSelector,
    gridFilterModelSelector
} from '@mui/x-data-grid-premium';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const GridOperators = {
    IsAnyOf: 'isAnyOf'
};

const CustomDropdownMenu = (props) => {
    const { column, item, applyValue, apiRef } = props;
    const lookupData = column?.dataRef?.current?.lookups;
    
    // Support both lookup and comboType - comboType takes precedence
    const lookupKey = column.comboType || column.lookup;
    let options = column.customLookup || lookupData?.[lookupKey] || [];

    if (typeof lookupKey === 'string') {
        options = options.map((option) => ({
            label: option?.label || option?.DisplayValue || '',
            value: option?.value ?? option?.LookupId ?? ''
        }));
    }

    const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
    const currentFieldFilters = useMemo(
        () =>
            filterModel.items?.filter((value) => {
                return value.field === column.field;
            }),
        [column.field, filterModel.items]
    );

    const handleFilterChange = useCallback(
        (event) => {
            let inputValue = event.target.value;
            if (filterModel.items.length >= 1) {
                inputValue = inputValue.length === 1 ? inputValue[0] : inputValue;

                for (const element of filterModel.items) {
                    if (element.field !== item.field) {
                        continue;
                    }
                    if (element.operator === GridOperators.IsAnyOf) {
                        inputValue = Array.isArray(inputValue) ? inputValue : [inputValue];
                    } else {
                        inputValue = inputValue === 0 ? '0' : inputValue;
                    }
                }
            }

            if (inputValue.length === 0 && currentFieldFilters[0]) {
                apiRef.current.deleteFilterItem(currentFieldFilters[0]);
                return;
            }

            const newValue = inputValue;
            const newitem = currentFieldFilters[0] ? currentFieldFilters[0] : item;
            applyValue({ ...newitem, value: newValue });
        },
        [apiRef, column.applyZeroFilter, currentFieldFilters, item, applyValue, filterModel.items]
    );

    // Determine if this should be a multiple select based on operator
    const isMultiple = currentFieldFilters[0]?.operator === GridOperators.IsAnyOf || item?.operator === GridOperators.IsAnyOf;
    
    // Get the value from the actual filter only - never apply defaults here
    // Defaults are applied once during grid initialization in index.js
    let value = currentFieldFilters[0]?.value ?? item?.value ?? '';
    
    // Ensure value matches the multiple state
    if (isMultiple && !Array.isArray(value)) {
        value = value ? [value] : [];
    } else if (!isMultiple && Array.isArray(value)) {
        value = value.length > 0 ? value[0] : '';
    }

    return (
        <FormControl variant="standard" className="w-100">
            <Select
                label={column.field}
                variant="standard"
                value={value}
                onChange={(e) => handleFilterChange(e)}
                multiple={isMultiple}
                MenuProps={{
                    PaperProps: {
                        style: {
                            height: 'fit-content',
                            overflow: 'hidden'
                        }
                    }
                }}
            >
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdownMenu;
