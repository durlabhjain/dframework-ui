const utils = {
    filterFieldDataTypes: {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean'
    },
    fixedFilterFormat: {
        date: "YYYY-MM-DD",
        datetime: "YYYY-MM-DD hh:mm:ss a",
        dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
        OverrideDateFormat: "DD-MMM-YYYY"
    },
    errorMapping: {
        413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file."
    },
    permissionsMapper: {
        add: "Permission2",
        edit: "Permission3",
        delete: "Permission4"
    },
    emptyIdValues: [null, undefined, '', '0', 0],
    // Normalize filter values for filter inputs used by grids/queries.
    // - If the filter is multi-valued (operator is 'isAnyOf' or `isMultiple` is true),
    //   ensure an array is returned (empty array for empty input, or wrap single
    //   values into an array).
    // - If the filter is single-valued, return a scalar: if an array was passed,
    //   take the first element; otherwise return the value or an empty string.
    normalizeFilterValue: ({ value, operator, isMultiple }) => {
        const isEmpty = ['', null, undefined].includes(value);
        const multiple = operator === 'isAnyOf' || isMultiple;

        if (multiple) {
            if (Array.isArray(value)) {
                return value;
            }
            return isEmpty ? [] : [value];
        }

        if (Array.isArray(value)) {
            return value[0] ?? '';
        }

        return value ?? '';
    }
}
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