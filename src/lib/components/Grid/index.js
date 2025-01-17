import Button from '@mui/material/Button';
import React from 'react';
import {
    DataGridPremium,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExportContainer,
    getGridDateOperators,
    GRID_CHECKBOX_SELECTION_COL_DEF,
    getGridStringOperators,
} from '@mui/x-data-grid-premium';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import {
    GridActionsCellItem,
    useGridApiRef
} from '@mui/x-data-grid-premium';
import { useMemo, useEffect, memo, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { useSnackbar } from '../SnackBar/index';
import { DialogComponent } from '../Dialog/index';
import { getList, getRecord, deleteRecord, saveRecord } from './crud-helper';
import PropTypes from 'prop-types';
import { Footer } from './footer';
import template from './template';
import { Tooltip, CardContent, Card } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core";
import PageTitle from '../PageTitle';
import { useStateContext, useRouter } from '../useRouter/StateProvider';
import LocalizedDatePicker from './LocalizedDatePicker';
import actionsStateProvider from '../useRouter/actions';
import GridPreferences from './GridPreference';
import CustomDropdownmenu from './CustomDropdownmenu';
import { getPermissions } from '../utils';
import HistoryIcon from '@mui/icons-material/History';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Checkbox from '@mui/material/Checkbox';

const defaultPageSize = 10;
const sortRegex = /(\w+)( ASC| DESC)?/i;
const recordCounts = 60000;
const actionTypes = {
    Copy: "Copy",
    Edit: "Edit",
    Delete: "Delete",
    History: "History",
    Download: "Download",
    NavigateToRelation: "NavigateToRelation"
};
const constants = {
    gridFilterModel: { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' },
    permissions: { edit: true, add: true, export: true, delete: true, clearFilterText: "CLEAR THIS FILTER", showColumnsOrder: true, filter: true },
}

const booleanIconRenderer = (params) => {
    if (params.value) {
        return <CheckIcon style={{ color: 'green' }} />;
    } else {
        return <CloseIcon style={{ color: 'gray' }} />;
    }
}

const useStyles = makeStyles({
    buttons: {
        margin: '6px !important'
    }
})

const convertDefaultSort = (defaultSort) => {
    const orderBy = [];
    if (typeof defaultSort === 'string') {
        const sortFields = defaultSort.split(',');
        for (const sortField of sortFields) {
            sortRegex.lastIndex = 0;
            const sortInfo = sortRegex.exec(sortField);
            if (sortInfo) {
                const [, field, direction = 'ASC'] = sortInfo;
                orderBy.push({ field: field.trim(), sort: direction.trim().toLowerCase() });
            }
        }
    }
    return orderBy;
};
const ExportMenuItem = ({ handleExport, contentType, type, isPivotExport = false }) => {
    return (
        <MenuItem
            onClick={handleExport}
            data-type={type}
            data-content-type={contentType}
            data-is-pivot-export={isPivotExport}
        >
            {"Export"} {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
        </MenuItem>
    );
};

ExportMenuItem.propTypes = {
    hideMenu: PropTypes.func
};

const CustomExportButton = (props) => (
    <GridToolbarExportContainer {...props}>
        {props?.showOnlyExcelExport !== true && <ExportMenuItem {...props} type="csv" contentType="text/csv" />}
        <ExportMenuItem {...props} type="excel" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
        {props.showPivotExportBtn && <ExportMenuItem {...props} type="excel With Pivot" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" isPivotExport={true} />}
        {props?.showOnlyExcelExport !== true && <>
            <ExportMenuItem {...props} type="xml" contentType="text/xml" />
            <ExportMenuItem {...props} type="html" contentType="text/html" />
            <ExportMenuItem {...props} type="json" contentType="application/json" />
        </>}
    </GridToolbarExportContainer>
);

const areEqual = (prevProps = {}, nextProps = {}) => {
    let equal = true;
    for (const o in prevProps) {
        if (prevProps[o] !== nextProps[o]) {
            equal = false;
        }
    }
    for (const o in nextProps) {
        if (!prevProps.hasOwnProperty(o)) {
            equal = false;
        }
    }
    return equal;
}
const GridBase = memo(({
    showGrid = true,
    useLinkColumn = true,
    model,
    columns,
    api,
    defaultSort,
    setActiveRecord,
    parentFilters,
    parent,
    where,
    title,
    showModal,
    OrderModal,
    permissions,
    selected,
    assigned,
    available,
    disableCellRedirect = false,
    onAssignChange,
    customStyle,
    onCellClick,
    showRowsSelected,
    chartFilters,
    clearChartFilter,
    showFullScreenLoader,
    customFilters,
    onRowDoubleClick,
    baseFilters,
    onRowClick = () => { },
    gridStyle,
    reRenderKey,
    additionalFilters,
    onCellDoubleClickOverride,
    onAddOverride,
    dynamicColumns,
    ...props
}) => {

    const [paginationModel, setPaginationModel] = useState({ pageSize: defaultPageSize, page: 0 });
    const [data, setData] = useState({ recordCount: 0, records: [], lookups: {} });
    const [isLoading, setIsLoading] = useState(true);
    const forAssignment = !!onAssignChange;
    const rowsSelected = showRowsSelected;
    const [selection, setSelection] = useState([]);
    const [isOrderDetailModalOpen, setIsOrderDetailModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [visibilityModel, setVisibilityModel] = useState({ CreatedOn: false, CreatedByUser: false, ...model?.columnVisibilityModel });
    const [isDeleting, setIsDeleting] = useState(false);
    const [record, setRecord] = useState(null);
    const snackbar = useSnackbar();
    const isClient = model.isClient === true ? 'client' : 'server';
    const [errorMessage, setErrorMessage] = useState('');
    const [sortModel, setSortModel] = useState(convertDefaultSort(defaultSort || model?.defaultSort));
    const initialFilterModel = { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' }
    if (model.defaultFilters) {
        initialFilterModel.items = [];
        model.defaultFilters.forEach((ele) => {
            initialFilterModel.items.push(ele);
        })
    }
    const [filterModel, setFilterModel] = useState({ ...initialFilterModel });
    const [selectState, setSelectState] = useState([]);
    const { navigate, getParams, useParams, pathname } = useRouter();
    const { id: idWithOptions } = useParams() || getParams;
    const id = idWithOptions?.split('-')[0];
    const apiRef = useGridApiRef();
    const { idProperty = "id", showHeaderFilters = true, disableRowSelectionOnClick = true, createdOnKeepLocal = true, hideBackButton = false, hideTopFilters = true, updatePageTitle = true, isElasticScreen = false, nestedGrid = false, selectionApi = {} } = model;
    const isReadOnly = model.readOnly === true;
    const isDoubleClicked = model.doubleClicked === false;
    const dataRef = useRef(data);
    const showAddIcon = model.showAddIcon === true;
    const toLink = model.columns.map(item => item.link);
    const [isGridPreferenceFetched, setIsGridPreferenceFetched] = useState(false);
    const classes = useStyles();
    const { stateData, dispatchData, formatDate, removeCurrentPreferenceName, getAllSavedPreferences, applyDefaultPreferenceIfExists } = useStateContext();
    const { timeZone } = stateData;
    const effectivePermissions = { ...constants.permissions, ...stateData.gridSettings.permissions, ...model.permissions, ...permissions };
    const { Username } = stateData?.getUserData ? stateData.getUserData : {};
    const routesWithNoChildRoute = stateData.gridSettings.permissions?.routesWithNoChildRoute || [];
    const url = stateData?.gridSettings?.permissions?.Url;
    const withControllersUrl = stateData?.gridSettings?.permissions?.withControllersUrl;
    const currentPreference = stateData?.currentPreference;
    const tablePreferenceEnums = stateData?.gridSettings?.permissions?.tablePreferenceEnums;
    const emptyIsAnyOfOperatorFilters = ["isEmpty", "isNotEmpty", "isAnyOf"];
    const userData = stateData.getUserData;
    const documentField = model.columns.find(ele => ele.type === 'document')?.field || "";
    const userDefinedPermissions = { add: effectivePermissions.add, edit: effectivePermissions.edit, delete: effectivePermissions.delete };
    const { canAdd, canEdit, canDelete } = getPermissions({ userData, model, userDefinedPermissions });
    const filterFieldDataTypes = {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean'
    };

    const { addUrlParamKey, searchParamKey, hideBreadcrumb = false, tableName, showHistory = true, hideBreadcrumbInGrid = false, navigateToRelation = [], breadcrumbColor } = model;
    const gridTitle = model.gridTitle || model.title;
    const OrderSuggestionHistoryFields = {
        OrderStatus: 'OrderStatusId'
    }
    const preferenceApi = stateData?.gridSettings?.permissions?.preferenceApi;
    const searchParams = new URLSearchParams(window.location.search);

    let baseSaveData = {};

    const baseDataFromParams = searchParams.has('baseData') && searchParams.get('baseData');
    if (baseDataFromParams) {
        const parsedData = JSON.parse(baseDataFromParams);
        if (typeof parsedData === 'object' && parsedData !== null) {
            baseSaveData = parsedData;
        }
    }

    const handleSelectRow = (params) => {
        setSelectState((prevState) => [
            ...prevState,
            {
                ...baseSaveData,
                ...params.row
            },
        ]);
    }

    const customCheckBox = (params) => {
        
        return (
            <Checkbox
                onClick={() => handleSelectRow(params)}
                color="primary"
                inputProps={{ 'aria-label': 'checkbox' }}
            />
        )
    }

    const gridColumnTypes = {
        "radio": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "date": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: true, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "date" }),
        },
        "dateTime": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: false, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "datetime" }),
        },
        "dateTimeLocal": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: false, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ type: "dateTimeLocal", convert: true }),
        },
        "boolean": {
            renderCell: booleanIconRenderer
        },
        "select": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "selection": {
            renderCell: customCheckBox
        }
    }

    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    useEffect(() => {
        if (customFilters && Object.keys(customFilters) != 0) {
            if (customFilters.clear) {
                let filterObject = {
                    items: [],
                    logicOperator: "and",
                    quickFilterValues: [],
                    quickFilterLogicOperator: "and"
                }
                setFilterModel(filterObject)
                return
            } else {
                const newArray = [];
                for (const key in customFilters) {
                    if (key === 'startDate' || key === 'endDate') {
                        newArray.push(customFilters[key])
                    } else {
                        if (customFilters.hasOwnProperty(key)) {
                            const newObj = {
                                field: key,
                                value: customFilters[key],
                                operator: "equals",
                                type: "string"
                            };
                            newArray.push(newObj);
                        }
                    }
                }
                let filterObject = {
                    items: newArray,
                    logicOperator: "and",
                    quickFilterValues: [],
                    quickFilterLogicOperator: "and"
                }
                setFilterModel(filterObject)
            }
        }
    }, [customFilters]);

    const lookupOptions = ({ row, field, id, ...others }) => {
        const lookupData = dataRef.current.lookups || {};
        return lookupData[lookupMap[field].lookup] || [];
    };

    useEffect(() => {
        if (props.isChildGrid) {
            return;
        }
        if (hideTopFilters) {
            dispatchData({
                type: actionsStateProvider.PASS_FILTERS_TOHEADER, payload: {
                    filterButton: null,
                    hidden: { search: true, operation: true, export: true, print: true, filter: true }
                }
            });
        }
    }, []);

    const { gridColumns, pinnedColumns, lookupMap } = useMemo(() => {
        let baseColumnList = columns || model?.gridColumns || model?.columns;
        if (dynamicColumns) {
            baseColumnList = [...dynamicColumns, ...baseColumnList];
        }
        const pinnedColumns = { left: [GRID_CHECKBOX_SELECTION_COL_DEF.field], right: [] };
        const finalColumns = [];
        const lookupMap = {};
        for (const column of baseColumnList) {
            const overrides = {};
            if (column.headerName === null) {
                continue;
            }
            if (parent && column.lookup === parent) {
                continue;
            }
            if (column.type === 'oneToMany') {
                if (column.countInList === false) {
                    continue;
                }
                overrides.type = 'number';
                overrides.field = column.field.replace(/s$/, 'Count');
            }

            if (gridColumnTypes[column.type]) {
                Object.assign(overrides, gridColumnTypes[column.type]);
            }
            if (overrides.valueOptions === "lookup") {
                overrides.valueOptions = lookupOptions;
                let lookupFilters = [...getGridDateOperators(), ...getGridStringOperators()].filter((operator) => ['is', 'not', 'isAnyOf'].includes(operator.value))
                overrides.filterOperators = lookupFilters.map((operator) => ({
                    ...operator,
                    InputComponent: operator.InputComponent ? (params) => (
                        <CustomDropdownmenu
                            column={{
                                ...column,
                                dataRef: dataRef
                            }}
                            {...params}
                            autoHighlight
                        />
                    ) : undefined
                }));
            }
            if (column.linkTo) {
                overrides.cellClassName = "mui-grid-linkColumn";
            }
            if (column.link) {
                overrides.cellClassName = "mui-grid-linkColumn";
            }
            finalColumns.push({ headerName: column.headerName || column.label, ...column, ...overrides });
            if (column.pinned) {
                pinnedColumns[column.pinned === 'right' ? 'right' : 'left'].push(column.field);
            }
            lookupMap[column.field] = column;
            column.label = column?.label
        }

        const auditColumns = model.standard === true;

        if (auditColumns && model?.addCreatedModifiedColumns !== false) {
            if (model?.addCreatedOnColumn !== false) {
                finalColumns.push(
                    {
                        field: "CreatedOn", type: "dateTime", headerName: "Created On", width: 200, filterOperators: LocalizedDatePicker({ columnType: "date" }), valueFormatter: gridColumnTypes.dateTime.valueFormatter, keepLocal: true
                    }
                );
            }
            if (model?.addCreatedByColumn !== false) {
                finalColumns.push(
                    { field: "CreatedByUser", type: "string", headerName: "Created By", width: 200 },
                );
            }
            if (model?.addModifiedOnColumn !== false) {
                finalColumns.push(
                    {
                        field: "ModifiedOn", type: "dateTime", headerName: "Modified On", width: 200, filterOperators: LocalizedDatePicker({ columnType: "date" }), valueFormatter: gridColumnTypes.dateTime.valueFormatter, keepLocal: true

                    }
                );
            }
            if (model?.addModifiedByColumn !== false) {
                finalColumns.push(
                    { field: "ModifiedByUser", type: "string", headerName: "Modified By", width: 200 }
                );
            }
        }

        if (!forAssignment && !isReadOnly) {
            const actions = [];
            if (canEdit) {
                actions.push(<GridActionsCellItem icon={<Tooltip title="Edit">   <EditIcon /></Tooltip>} data-action={actionTypes.Edit} label="Edit" color="primary" />);
            }
            if (effectivePermissions.copy) {
                actions.push(<GridActionsCellItem icon={<Tooltip title="Copy"><CopyIcon /> </Tooltip>} data-action={actionTypes.Copy} label="Copy" color="primary" />);
            }
            if (canDelete) {
                actions.push(<GridActionsCellItem icon={<Tooltip title="Delete"><DeleteIcon /> </Tooltip>} data-action={actionTypes.Delete} label="Delete" color="error" />);
            }
            if (showHistory) {
                actions.push(<GridActionsCellItem icon={<Tooltip title="History"><HistoryIcon /> </Tooltip>} data-action={actionTypes.History} label="History" color="primary" />);
            }
            if (documentField.length) {
                actions.push(<GridActionsCellItem icon={<Tooltip title="Download document"><FileDownloadIcon /> </Tooltip>} data-action={actionTypes.Download} label="Download document" color="primary" />);
            }
            if (navigateToRelation.length > 0) {
                actions.push(<GridActionsCellItem icon={<Tooltip title=""><ArticleIcon /> </Tooltip>} data-action={actionTypes.NavigateToRelation} color="primary" label="" />);
            }
            if (actions.length > 0) {
                finalColumns.push({
                    field: 'actions',
                    type: 'actions',
                    label: '',
                    width: actions.length * 50,
                    hideable: false,
                    getActions: (params) => {
                        const rowActions = [...actions];
                        const isDisabled = params.row.canEdit === false;
                        if(canEdit) {
                            rowActions[0] = (
                                <GridActionsCellItem
                                    icon={
                                        <Tooltip title="Edit">
                                            <EditIcon />
                                        </Tooltip>
                                    }
                                    data-action={actionTypes.Edit}
                                    label="Edit"
                                    color="primary"
                                    disabled={isDisabled}
                                />
                            );
                        }
                        return rowActions;
                    },
                });
            }
            pinnedColumns.right.push('actions');
        }
        return { gridColumns: finalColumns, pinnedColumns, lookupMap };
    }, [columns, model, parent, permissions, forAssignment, dynamicColumns]);
    const fetchData = (action = "list", extraParams = {}, contentType, columns, isPivotExport, isElasticExport) => {
        const { pageSize, page } = paginationModel;
        let gridApi = `${model.controllerType === 'cs' ? withControllersUrl : url || ""}${model.api || api}`

        let controllerType = model?.controllerType;
        if (isPivotExport) {
            gridApi = `${withControllersUrl}${model?.pivotAPI}`;
            controllerType = 'cs';
        }
        if (assigned || available) {
            extraParams[assigned ? "include" : "exclude"] = Array.isArray(selected) ? selected.join(',') : selected;
        }
        let filters = { ...filterModel }, finalFilters = { ...filterModel };
        if (chartFilters?.items?.length > 0) {
            let { columnField: field, operatorValue: operator } = chartFilters.items[0];
            field = constants.chartFilterFields[field];
            const chartFilter = [{ field: field, operator: operator, isChartFilter: false }];
            filters.items = [...chartFilter];
            if (JSON.stringify(filterModel) !== JSON.stringify(filters)) {
                setFilterModel({ ...filters });
                finalFilters = filters;
                chartFilters.items.length = 0;
            }
        }
        if (model.joinColumn && id) {
            baseFilters = [
                {
                    field: model.joinColumn,
                    operator: 'is',
                    type: "number",
                    value: Number(id)
                }
            ]
        }
        if (additionalFilters) {
            finalFilters.items = [...finalFilters.items, ...additionalFilters];
        }
        getList({
            action,
            page: !contentType ? page : 0,
            pageSize: !contentType ? pageSize : 1000000,
            sortModel,
            filterModel: finalFilters,
            controllerType: controllerType,
            api: gridApi,
            setIsLoading,
            setData,
            gridColumns,
            modelConfig: model,
            parentFilters,
            extraParams,
            setError: snackbar.showError,
            contentType,
            columns,
            template: isPivotExport ? model?.template : null,
            configFileName: isPivotExport ? model?.configFileName : null,
            dispatchData,
            showFullScreenLoader,
            history: navigate,
            baseFilters,
            isElasticExport,
            model: model
        });
    };
    const openForm = ({ id, record = {}, mode }) => {
        if (setActiveRecord) {
            getRecord({ id, api: api || model?.api, setIsLoading, setActiveRecord, modelConfig: model, parentFilters, where, model });
            return;
        }
        let path = pathname;
        if (!path.endsWith("/")) {
            path += "/";
        }
        if (mode === "copy") {
            path += "0-" + id;
            dispatchData({ type: 'UPDATE_FORM_MODE', payload: 'copy' })

        } else {
            path += id;
            dispatchData({ type: 'UPDATE_FORM_MODE', payload: '' })
        }
        if (addUrlParamKey) {
            searchParams.set(addUrlParamKey, record[addUrlParamKey]);
            path += `?${searchParams.toString()}`;
        }
        navigate(path);
    };

    const handleDownload = async ({ documentLink, fileName }) => {
        if (!documentLink) return;
        try {
            const response = await fetch(documentLink);
            if (!response.ok) {
                throw new Error(`Failed to fetch the file: ${response.statusText}`);
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            const fileNameFromLink = documentLink.split("/").pop() || `downloaded-file.${blob.type.split("/")[1] || "txt"}`;
            link.download = fileName || fileNameFromLink;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading the file:", error);
            snackbar.showError("Failed to download the file. Please try again.");
        }
    };
    const onCellClickHandler = async (cellParams, event, details) => {
        if (!isReadOnly) {
            if (onCellClick) {
                const result = await onCellClick({ cellParams, event, details });
                if (typeof result !== "boolean") {
                    return;
                }
            }
            const { row: record } = cellParams;
            const columnConfig = lookupMap[cellParams.field] || {};
            if (columnConfig.linkTo) {
                navigate({
                    pathname: template.replaceTags(columnConfig.linkTo, record)
                });
                return;
            }
            let action = useLinkColumn && cellParams.field === model.linkColumn ? actionTypes.Edit : null;
            if (!action && cellParams.field === 'actions') {
                action = details?.action;
                if (!action) {
                    const el = event.target.closest('button');
                    if (el) {
                        action = el.dataset.action;
                    }
                }
            }
            if (action === actionTypes.Edit) {
                return openForm({ id: record[idProperty], record });
            }
            if (action === actionTypes.Copy) {
                return openForm({ id: record[idProperty], mode: 'copy' });
            }
            if (action === actionTypes.Delete) {
                setIsDeleting(true);
                setRecord({ name: record[model?.linkColumn], id: record[idProperty] });
            }
            if (action === actionTypes.History) {
                return navigate(`historyScreen?tableName=${tableName}&id=${record[idProperty]}&breadCrumb=${searchParamKey ? searchParams.get(searchParamKey) : gridTitle}`);
            }
            if (action === actionTypes.Download) {
                handleDownload({ documentLink: record[documentField], fileName: record.FileName });
            }
            if (action === actionTypes.NavigateToRelation) {
                return navigate(`/masterScope/${record[idProperty]}?showRelation=${navigateToRelation}`);
            }
        }
        if (isReadOnly && toLink) {
            if (model?.isAcostaController && onCellClick && cellParams.colDef.customCellClick === true) {
                onCellClick(cellParams.row);
                return;
            }
            const { row: record } = cellParams;
            const columnConfig = lookupMap[cellParams.field] || {};
            let historyObject = {
                pathname: template.replaceTags(columnConfig.linkTo, record),
            }

            if (model.addRecordToState) {
                historyObject.state = record
            }
            navigate(historyObject);
        }
    };

    const handleDelete = async function () {

        let gridApi = `${model.controllerType === 'cs' ? withControllersUrl : url}${model.api || api}`
        const result = await deleteRecord({ id: record?.id, api: gridApi, setIsLoading, setError: snackbar.showError, setErrorMessage });
        if (result === true) {
            setIsDeleting(false);
            snackbar.showMessage('Record Deleted Successfully.');
            fetchData();
        } else {
            setTimeout(() => {
                setIsDeleting(false);
            }, 200);
        }
    }
    const clearError = () => {
        setErrorMessage(null);
        setIsDeleting(false);
    };

    const processRowUpdate = (updatedRow) => {
        if (props.processRowUpdate) {
            props.processRowUpdate(updatedRow, data);
        }
        return updatedRow;
    }

    const onCellDoubleClick = (event) => {
        const { row: record } = event;
        if (typeof onCellDoubleClickOverride === 'function') {
            onCellDoubleClickOverride(event);
            return;
        }

        if(event.row.canEdit === false) {
            return;
        }

        if (!isReadOnly && !isDoubleClicked && !disableCellRedirect) {
            openForm({ id: record[idProperty], record });
        }

        if (isReadOnly && model.rowRedirectLink) {
            let historyObject = {
                pathname: template.replaceTags(model.rowRedirectLink, record),
            }

            if (model.addRecordToState) {
                historyObject.state = record
            }
            navigate(historyObject);
        }

        if (onRowDoubleClick) {
            onRowDoubleClick(event);
        }
    };

    const handleCloseOrderDetailModal = () => {
        setIsOrderDetailModalOpen(false);
        setSelectedOrder(null);
        fetchData();
    };


    const onAdd = () => {
        if(selectionApi.length > 0){
            const url = stateData?.gridSettings?.permissions?.Url;
            let gridApi = `${url}${selectionApi || api}/updateMany`;
            saveRecord({id: 0, api: gridApi, values: { items: selectState }, setIsLoading, setError: snackbar.showError }).then((success) => {
                if (success) {
                  snackbar.showMessage("Record Updated Successfully.");
                  window.location.reload();
                }
              })
              .catch((err) => {
                snackbar.showError(
                  "An error occured, please try after some time.second",
                  err
                );
              })
              .finally(() => setIsLoading(false));
            
            return;
        }
        if (typeof onAddOverride === 'function') {
            onAddOverride();
        } else {
            openForm({ id: 0 });
        }
    }

    const clearFilters = () => {
        if (filterModel?.items?.length > 0) {
            const filters = JSON.parse(JSON.stringify(constants.gridFilterModel));
            setFilterModel(filters);
            if (clearChartFilter) {
                clearChartFilter();
            }
        }
    }
    const updateAssignment = ({ unassign, assign }) => {
        const assignedValues = Array.isArray(selected) ? selected : (selected.length ? selected.split(',') : []);
        const finalValues = unassign ? assignedValues.filter(id => !unassign.includes(parseInt(id))) : [...assignedValues, ...assign];
        onAssignChange(typeof selected === 'string' ? finalValues.join(',') : finalValues);
    }

    const onAssign = () => {
        updateAssignment({ assign: selection });
    }

    const onUnassign = () => {
        updateAssignment({ unassign: selection });
    }

    useEffect(() => {
        if (model.preferenceId && preferenceApi) {
            removeCurrentPreferenceName({ dispatchData });
            getAllSavedPreferences({ preferenceName: model.preferenceId, history: navigate, dispatchData, Username, preferenceApi, tablePreferenceEnums });
            applyDefaultPreferenceIfExists({ preferenceName: model.preferenceId, history: navigate, dispatchData, Username, gridRef: apiRef, setIsGridPreferenceFetched, preferenceApi, tablePreferenceEnums });
        }
    }, [preferenceApi])

    const CustomToolbar = function (props) {
        const addtext = model.customAddText || (model.title ? `Add ${model.title}` : 'Add');
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {model.gridSubTitle && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }}> {(model.gridSubTitle)}</Typography>}
                {currentPreference && model.showPreferenceInHeader && <Typography className="preference-name-text" variant="h6" component="h6" textAlign="center" sx={{ ml: 1 }} >Applied Preference - {currentPreference}</Typography>}
                {(isReadOnly || (!canAdd && !forAssignment)) && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }} > {!canAdd || isReadOnly ? "" : model.title}</Typography>}
                {!forAssignment && canAdd && !isReadOnly && !showAddIcon && <Button startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAdd} size="medium" variant="contained" className={classes.buttons} >{addtext}</Button>}
                {available && <Button startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAssign} size="medium" variant="contained" className={classes.buttons}  >{"Assign"}</Button>}
                {assigned && <Button startIcon={!showAddIcon ? null : <RemoveIcon />} onClick={onUnassign} size="medium" variant="contained" className={classes.buttons}  >{"Remove"}</Button>}

                <GridToolbarContainer {...props}>
                    {effectivePermissions.showColumnsOrder && (
                        <GridToolbarColumnsButton />
                    )}
                    {effectivePermissions.filter && (<>
                        <GridToolbarFilterButton />
                        <Button startIcon={<FilterListOffIcon />} onClick={clearFilters} size="small">{"CLEAR FILTER"}</Button>
                    </>)}

                    {effectivePermissions.export && (
                        <CustomExportButton handleExport={handleExport} showPivotExportBtn={model?.showPivotExportBtn} showOnlyExcelExport={model.showOnlyExcelExport} />
                    )}
                    {model.preferenceId &&
                        <GridPreferences preferenceName={model.preferenceId} gridRef={apiRef} columns={gridColumns} setIsGridPreferenceFetched={setIsGridPreferenceFetched} />
                    }
                </GridToolbarContainer>
            </div >
        );
    };

    const getGridRowId = (row) => {
        return row[idProperty];
    };

    const handleExport = (e) => {
        if (data?.recordCount > recordCounts) {
            snackbar.showMessage('Cannot export more than 60k records, please apply filters or reduce your results using filters');
            return;
        }
        const { orderedFields, columnVisibilityModel, lookup } = apiRef.current.state.columns;
        const columns = {};
        const isPivotExport = e.target.dataset.isPivotExport === 'true';
        const hiddenColumns = Object.keys(columnVisibilityModel).filter(key => columnVisibilityModel[key] === false);
        const visibleColumns = orderedFields.filter(ele => !hiddenColumns?.includes(ele) && ele !== '__check__' && ele !== 'actions');
        if (visibleColumns?.length === 0) {
            snackbar.showMessage('You cannot export while all columns are hidden... please show at least 1 column before exporting');
            return;
        }

        visibleColumns.forEach(ele => {
            columns[ele] = { field: ele, width: lookup[ele].width, headerName: lookup[ele].headerName || lookup[ele].field, type: lookup[ele].type, keepLocal: lookup[ele].keepLocal === true, isParsable: lookup[ele]?.isParsable };
        })

        fetchData(isPivotExport ? 'export' : undefined, undefined, e.target.dataset.contentType, columns, isPivotExport, isElasticScreen);
    };
    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [paginationModel, sortModel, filterModel, api, gridColumns, model, parentFilters, assigned, selected, available, chartFilters, isGridPreferenceFetched, reRenderKey, url])

    useEffect(() => {
        if (props.isChildGrid) {
            return;
        }
        if (forAssignment || !updatePageTitle) {
            return;
        }
        dispatchData({ type: actionsStateProvider.PAGE_TITLE_DETAILS, payload: { icon: "", titleHeading: model?.pageTitle || model?.title, titleDescription: model?.titleDescription, title: model?.title } })
        return () => {
            dispatchData({
                type: actionsStateProvider.PAGE_TITLE_DETAILS, payload: null
            })
        }
    }, [])

    useEffect(() => {
        if (props.isChildGrid) {
            return;
        }
        let backRoute = pathname;

        // we do not need to show the back button for these routes
        if (hideBackButton || routesWithNoChildRoute.includes(backRoute)) {
            dispatchData({
                type: actionsStateProvider.SET_PAGE_BACK_BUTTON,
                payload: { status: false, backRoute: '' },
            });
            return;
        }
        backRoute = backRoute.split("/");
        backRoute.pop();
        backRoute = backRoute.join("/");
        dispatchData({
            type: actionsStateProvider.SET_PAGE_BACK_BUTTON,
            payload: { status: true, backRoute: backRoute },
        });
    }, [isLoading]);

    const updateFilters = (e) => {
        const { items } = e;
        const updatedItems = items.map(item => {
            const { field, operator, type, value } = item;
            const column = gridColumns.find(col => col.field === field);
            const isNumber = column?.type === filterFieldDataTypes.Number;

            if (field === OrderSuggestionHistoryFields.OrderStatus) {
                const { filterField, ...newItem } = item;
                return newItem;
            }

            if ((emptyIsAnyOfOperatorFilters.includes(operator)) || (isNumber && !isNaN(value)) || ((!isNumber))) {
                const isKeywordField = isElasticScreen && gridColumns.filter(element => element?.field === item?.field)[0]?.isKeywordField;
                if (isKeywordField) {
                    item.filterField = `${item.field}.keyword`;
                }
                return { ...item, type: column.type };
            }
            const updatedValue = isNumber ? null : value;
            return { field, operator, type, value: updatedValue };
        });
        e.items = updatedItems;
        setFilterModel(e);
        if (e?.items?.findIndex(ele => ele.isChartFilter && !(['isEmpty', 'isNotEmpty'].includes(ele.operator))) === -1) {
            if (clearChartFilter) {
                clearChartFilter();
            }
        }
        if (chartFilters?.items?.length > 0) {
            if (e.items.length === 0) {
                if (clearChartFilter) {
                    clearChartFilter();
                }
            } else {
                const chartFilterIndex = chartFilters?.items.findIndex(ele => ele.columnField === e.items[0].field);
                if (chartFilterIndex > -1) {
                    if (clearChartFilter) {
                        clearChartFilter();
                    }
                }
            }
        }
    };

    const updateSort = (e) => {
        const sort = e.map((ele) => {
            const isKeywordField = isElasticScreen && gridColumns.filter(element => element?.field === ele?.field)[0]?.isKeywordField
            return { ...ele, filterField: isKeywordField ? `${ele.field}.keyword` : ele.field };
        })
        setSortModel(sort);
    }

    let breadCrumbs;

    if (searchParamKey) {
        const subBreadcrumbs = searchParams.get(searchParamKey);
        breadCrumbs = [{ text: subBreadcrumbs }];
    }
    else {
        breadCrumbs = [{ text: title || model.gridTitle || model.title }];
    }

    return (
        <>
            <PageTitle showBreadcrumbs={!hideBreadcrumb && !hideBreadcrumbInGrid}
                breadcrumbs={breadCrumbs} nestedGrid={nestedGrid} breadcrumbColor={breadcrumbColor}/>
            <Card style={gridStyle || customStyle} elevation={0} sx={{ '& .MuiCardContent-root': { p: 0 } }}>
                <CardContent>
                    <DataGridPremium
                        sx={{
                            "& .MuiTablePagination-selectLabel": {
                                marginTop: 2
                            },
                            "& .MuiTablePagination-displayedRows": {
                                marginTop: 2
                            },
                            "& .MuiDataGrid-columnHeader .MuiInputLabel-shrink": {
                                display: "none"
                            }
                        }}
                        unstable_headerFilters={showHeaderFilters}
                        checkboxSelection={forAssignment}
                        loading={isLoading}
                        className="pagination-fix"
                        onCellClick={onCellClickHandler}
                        onCellDoubleClick={onCellDoubleClick}
                        columns={gridColumns}
                        paginationModel={paginationModel}
                        pageSizeOptions={[5, 10, 20, 50, 100]}
                        onPaginationModelChange={setPaginationModel}
                        pagination
                        rowCount={data.recordCount}
                        rows={data.records}
                        sortModel={sortModel}
                        paginationMode={isClient}
                        sortingMode={isClient}
                        filterMode={isClient}
                        processRowUpdate={processRowUpdate}
                        keepNonExistentRowsSelected
                        onSortModelChange={updateSort}
                        onFilterModelChange={updateFilters}
                        rowSelection={selection}
                        onRowSelectionModelChange={setSelection}
                        filterModel={filterModel}
                        getRowId={getGridRowId}
                        onRowClick={onRowClick}
                        slots={{
                            headerFilterMenu: false,
                            toolbar: CustomToolbar,
                            footer: Footer
                        }}
                        slotProps={{
                            footer: {
                                pagination: true,
                                apiRef
                            },
                            panel: {
                                placement: "bottom-end"
                            }
                        }}
                        hideFooterSelectedRowCount={rowsSelected}
                        density="compact"
                        disableDensitySelector={true}
                        apiRef={apiRef}
                        disableAggregation={true}
                        disableRowGrouping={true}
                        disableRowSelectionOnClick={disableRowSelectionOnClick}
                        autoHeight
                        initialState={{
                            columns: {
                                columnVisibilityModel: visibilityModel
                            },
                            pinnedColumns: pinnedColumns
                        }}
                        localeText={{
                            filterValueTrue: 'Yes',
                            filterValueFalse: 'No'
                        }}
                    />
                    {isOrderDetailModalOpen && selectedOrder && model.OrderModal && (
                        <model.OrderModal
                            orderId={selectedOrder.OrderId}
                            isOpen={true}
                            orderTotal={selectedOrder.OrderTotal}
                            orderDate={selectedOrder.OrderDateTime}
                            orderStatus={selectedOrder.OrderStatus}
                            customerNumber={selectedOrder.CustomerPhoneNumber}
                            customerName={selectedOrder.CustomerName}
                            customerEmail={selectedOrder.CustomerEmailAddress}
                            onClose={handleCloseOrderDetailModal}
                        />
                    )}
                    {errorMessage && (<DialogComponent open={!!errorMessage} onConfirm={clearError} onCancel={clearError} title="Info" hideCancelButton={true} > {errorMessage}</DialogComponent>)
                    }
                    {isDeleting && !errorMessage && (<DialogComponent open={isDeleting} onConfirm={handleDelete} onCancel={() => setIsDeleting(false)} title="Confirm Delete"> {`${'Are you sure you want to delete'} ${record?.name}?`}</DialogComponent>)}
                </CardContent>
            </Card >
        </>
    );
}, areEqual);

export default GridBase;