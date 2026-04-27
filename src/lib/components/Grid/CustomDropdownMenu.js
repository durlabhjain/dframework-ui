import React, { useMemo, useCallback } from 'react';
import {
    useGridSelector,
    gridFilterModelSelector
} from '@mui/x-data-grid-premium';

import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const GridOperators = {
    IsAnyOf: 'isAnyOf'
};

const CustomDropdownMenu = (props) => {
    const { column, item, applyValue, apiRef } = props;
    const lookupData = column?.dataRef?.current?.lookups;
    let options = column.customLookup || lookupData[column.lookup] || [];

    if (typeof column.lookup === 'string') {
        options = options.map(({ label, value }) => ({
            label,
            value
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
        [apiRef, column.applyZeroFilter, currentFieldFilters, item, applyValue]
    );

    const value = currentFieldFilters[0]?.value ?? '';

    const handleClear = useCallback(
        (event) => {
            event.stopPropagation();
            if (currentFieldFilters[0]) {
                apiRef.current.deleteFilterItem(currentFieldFilters[0]);
            }
        },
        [apiRef, currentFieldFilters]
    );

    const hasValue = value !== '' && value !== null && value !== undefined;

    return (
        <FormControl variant="standard" className="w-100" sx={{ position: 'relative' }}>
            <Select
                label={column.field}
                variant="standard"
                value={value}
                onChange={(e) => handleFilterChange(e)}
                multiple={Array.isArray(value)}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 400, 
                            overflowY: 'auto'
                        }
                    }
                }}
            >
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {props.tTranslate(option.label, props.tOpts)}
                    </MenuItem>
                ))}
            </Select>
            {hasValue && !Array.isArray(value) && (
                <IconButton
                    size="small"
                    onClick={handleClear}
                    sx={{ position: 'absolute', right: 24, bottom: 2 }}
                >
                    <ClearIcon fontSize="small" />
                </IconButton>
            )}
        </FormControl>
    );
};

export default CustomDropdownMenu;
