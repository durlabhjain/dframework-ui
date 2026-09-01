import {
    DataGridPremium,
    GRID_CHECKBOX_SELECTION_COL_DEF,
    GridActionsCellItem,
    useGridApiRef,
    useGridApiContext,
    useGridSelector,
    gridRowSelectionStateSelector,
    getGridNumericOperators,
    getGridSingleSelectOperators,
    getGridStringOperators,
    getGridBooleanOperators
} from '@mui/x-data-grid-premium';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import { useMemo, useEffect, memo, useRef, useState, useCallback } from 'react';
// MUI's fixed field id for the auto-generated treeData grouping column - not part of x-data-grid-premium's public named exports.
const TREE_DATA_GROUPING_FIELD = '__tree_data_group__';
import { useSnackbar } from '../SnackBar/index';
import { DialogComponent } from '../Dialog/index';
import { getList, getRecord, deleteRecord, saveRecord } from './crud-helper';
import { Footer } from './footer';
import template from './template';
import { Tooltip, Box, Tabs, Tab } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PageTitle from '../PageTitle';
import { useStateContext, useRouter } from '../useRouter/StateProvider';
import LocalizedDatePicker from './LocalizedDatePicker';
import CustomToolbar from './CustomToolbar';
import utils, { getPermissions } from '../utils';
import HistoryIcon from '@mui/icons-material/History';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Checkbox from '@mui/material/Checkbox';
import { useModelTranslation } from '../../hooks/useModelTranslation';
import { convertDefaultSort, areEqual, getDefaultOperator } from './helper';
import { styled } from '@mui/material/styles';
import { ERROR_CODES } from '../../errors';
import RemoteSelectField from '../Form/fields/remoteSelectField.js';
import { useChangedDeps } from '../../hooks/useChangedDeps';

const defaultPageSize = 50;
const sortRegex = /(\w+)( ASC| DESC)?/i;
const recordCounts = 60_000;
const exportPage = 0;
const exportPageSize = 1_000_000;
const actionTypes = {
    Copy: "Copy",
    Edit: "Edit",
    Delete: "Delete",
    History: "History",
    Download: "Download"
};
const iconMapper = {
    'article': <ArticleIcon />,
    'edit': <EditIcon />,
    'copy': <CopyIcon />,
    'delete': <DeleteIcon />,
    'history': <HistoryIcon />,
    'download': <FileDownloadIcon />,
};

const constants = {
    gridFilterModel: { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' },
    permissions: { edit: true, add: true, export: true, delete: true, showColumnsOrder: true, filter: true },
    client: 'client',
    server: 'server',
    object: 'object',
    startDate: 'startDate',
    endDate: 'endDate',
    oneToMany: 'oneToMany',
    lookup: 'lookup',
    Number: 'number',
    string: 'string',
    boolean: 'boolean',
    right: 'right',
    left: 'left',
    dateTime: 'dateTime',
    actions: 'actions',
    function: 'function',
    pageSizeOptions: [5, 10, 20, 50, 100],
    defaultActionWidth: 50
};
// Operators that do not require a value
const NO_VALUE_OPERATORS = ['isEmpty', 'isNotEmpty'];
const EMPTY_IS_ANY_OF_OPERATOR_FILTERS = Object.freeze(['isEmpty', 'isNotEmpty', 'isAnyOf']);
const DEFAULT_FILTER_OPERATORS_BY_TYPE = {
    string: getGridStringOperators,
    number: getGridNumericOperators,
    boolean: getGridBooleanOperators,
    singleSelect: getGridSingleSelectOperators
};

// Fills and internally scrolls within a bounded-height flex ancestor; used when model.relations is set.
const CHILD_GRIDS_FILL_STYLE = Object.freeze({ height: '100%', overflowY: 'auto' });
// Default assumes an ~88px app header at the viewport top; override via the childGridsContainerHeight prop or model option.
const CHILD_GRIDS_CONTAINER_HEIGHT = 'calc(100vh - 88px)';

// Stable empty references used when localSortAndFilter is enabled to prevent
// fetchData from being recreated (and re-triggering API calls) on sort/filter changes
const EMPTY_SORT_MODEL = Object.freeze([]);
const EMPTY_FILTER_MODEL = Object.freeze({
    items: [],
    logicOperator: 'and',
    quickFilterValues: [],
    quickFilterLogicOperator: 'and'
});
// Stable pagination used when localSortAndFilter is enabled: always request page 0
// with a large pageSize so the backend returns all rows in one call.
const LOCAL_MODE_PAGINATION_MODEL = Object.freeze({ page: 0, pageSize: exportPageSize });


const normalizeStaticData = (staticData) => {
    const records = Array.isArray(staticData)
        ? staticData
        : Array.isArray(staticData?.records)
            ? staticData.records
            : [];
    return {
        records,
        recordCount: Number.isFinite(staticData?.recordCount) ? staticData.recordCount : records.length,
        lookups: (
            staticData &&
            typeof staticData.lookups === 'object' &&
            staticData.lookups !== null &&
            !Array.isArray(staticData.lookups)
        ) ? staticData.lookups : {}
    };
};

// Return only items that are valid for requests (keep no-value operators)
const filterValidItems = (items) => {
    return (items || []).filter(item => {
        if (NO_VALUE_OPERATORS.includes(item.operator)) return true;
        return item.value !== null && item.value !== undefined && item.value !== '';
    });
};

// The request field a sort/filter on `field` should actually use: an explicit dataIndex, else the Elasticsearch `.keyword` sibling for text fields, else the field itself.
const resolveRequestField = (field, column = {}, isElasticScreen) => {
    if (column.dataIndex) return column.dataIndex;
    return (isElasticScreen && column.isKeywordField) ? `${field}.keyword` : field;
};

const auditColumnMappings = [
    { key: 'addCreatedOnColumn', field: 'CreatedOn', type: 'dateTime', header: 'Created On' },
    { key: 'addCreatedByColumn', field: 'CreatedByUser', type: 'string', header: 'Created By' },
    { key: 'addModifiedOnColumn', field: 'ModifiedOn', type: 'dateTime', header: 'Modified On' },
    { key: 'addModifiedByColumn', field: 'ModifiedByUser', type: 'string', header: 'Modified By' }
];
const booleanIconRenderer = (params) => {
    if (params.value) {
        return <CheckIcon style={{ color: 'green' }} />;
    } else {
        return <CloseIcon style={{ color: 'gray' }} />;
    }
};

const gridGroupByColumnName = ['__row_group_by_columns_group__', '__detail_panel_toggle__', TREE_DATA_GROUPING_FIELD];

const DeleteContentText = styled('span')({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
});

const CustomCheckBox = ({ params, handleSelectRow, idProperty }) => {
    const apiRef = useGridApiContext();
    const rowId = params.row[idProperty];
    // useGridSelector subscribes to state changes and triggers re-render when selection updates
    const selectionModel = useGridSelector(apiRef, gridRowSelectionStateSelector);
    const isChecked = selectionModel?.ids?.has(rowId) ?? false;

    const handleCheckboxClick = (event) => {
        event.stopPropagation();
        handleSelectRow({ row: params.row });
    };

    return (
        <Checkbox
            onClick={handleCheckboxClick}
            checked={isChecked}
            color="primary"
            value={rowId}
            inputProps={{ 'aria-label': 'checkbox' }}
        />
    );
};

const GridBase = memo(({
    model,
    columns,
    api,
    defaultSort,
    setActiveRecord,
    parentFilters,
    parent,
    relationName,
    where,
    title,
    showPageTitle,
    permissions,
    selected,
    assigned,
    available,
    disableCellRedirect = false,
    onAssignChange,
    customStyle,
    onCellClick,
    showRowsSelected,
    customFilters,
    onRowDoubleClick,
    onRowClick = () => { },
    gridStyle,
    additionalFilters,
    onCellDoubleClickOverride,
    onAddOverride,
    dynamicColumns,
    toolbarItems,
    readOnly = false,
    onListParamsChange,
    apiRef: propsApiRef,
    baseFilters,
    customExportOptions,
    sx: propsSx,
    gridProps,
    childGridsContainerHeight: propsChildGridsContainerHeight,
    ...props
}) => {
    // Overridable per-call or per-model since consumer chrome above the grid varies.
    const childGridsContainerHeight = propsChildGridsContainerHeight ?? model.childGridsContainerHeight ?? CHILD_GRIDS_CONTAINER_HEIGHT;
    const { onDataLoaded, processRowUpdate: processRowUpdateProp, onRowSelectionModelChange: onRowSelectionModelChangeProp } = props;
    const staticDataSource = props.staticData ?? model.staticData;
    const hasStaticData = Array.isArray(staticDataSource) || Array.isArray(staticDataSource?.records);
    const normalizedStaticData = useMemo(
        () => hasStaticData ? normalizeStaticData(staticDataSource) : null,
        [hasStaticData, staticDataSource]
    );
    const [paginationModel, setPaginationModel] = useState({ pageSize: defaultPageSize, page: 0 });
    const [data, setData] = useState(() => normalizedStaticData || { recordCount: 0, records: null, lookups: {} });
    const forAssignment = !!onAssignChange;
    const rowsSelected = showRowsSelected;
    // MUI v8: rowSelectionModel uses object format with type ('include'/'exclude') and ids (Set)
    const [rowSelectionModel, setRowSelectionModel] = useState({
        type: 'include',
        ids: new Set()
    });
    const [isDeleting, setIsDeleting] = useState(false);
    const [record, setRecord] = useState(null);
    const visibilityModel = useMemo(() => ({ CreatedOn: false, CreatedByUser: false, ...model.columnVisibilityModel }), [model.columnVisibilityModel]);
    const [showAddConfirmation, setShowAddConfirmation] = useState(false);
    const snackbar = useSnackbar();
    const snackbarRef = useRef(snackbar);
    snackbarRef.current = snackbar;
    const onListParamsChangeRef = useRef(onListParamsChange);
    onListParamsChangeRef.current = onListParamsChange;
    // Force client pagination when localSortAndFilter is enabled so that all data is
    // fetched in a single request and MUI DataGrid handles paging/sort/filter locally.
    const paginationMode = (hasStaticData || model.localSortAndFilter) ? constants.client : (model.paginationMode === constants.client ? constants.client : constants.server);
    const { translate, tOpts, tTranslate } = useModelTranslation(model);
    const [errorMessage, setErrorMessage] = useState('');
    const [sortModel, setSortModel] = useState(() => convertDefaultSort(defaultSort || model.defaultSort, constants, sortRegex));
    // defaultFilters may be a function so relative-date filters (e.g. "last 7 days") are computed
    // fresh on mount instead of once when the model module first loaded.
    const resolvedDefaultFilters = typeof model.defaultFilters === 'function' ? model.defaultFilters() : model.defaultFilters;
    const initialFilterModel = { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' };
    if (resolvedDefaultFilters) {
        initialFilterModel.items = [];
        resolvedDefaultFilters.forEach((ele) => {
            initialFilterModel.items.push(ele);
        });
    }
    const [filterModel, setFilterModel] = useState({ ...initialFilterModel });
    const [prevCustomFilters, setPrevCustomFilters] = useState(() => ({}));
    const [prevHasStaticData, setPrevHasStaticData] = useState(hasStaticData);
    const [prevNormalizedStaticData, setPrevNormalizedStaticData] = useState(normalizedStaticData);
    const { navigate, getParams, useParams, pathname } = useRouter();
    const { id: idWithOptions } = useParams() || getParams;
    const id = idWithOptions?.split('-')[0];
    const internalRef = useGridApiRef();
    const apiRef = propsApiRef ?? internalRef;
    const backendApi = api || model.api;
    const isStaticDataWithoutBackendApi = hasStaticData && !backendApi;
    const { idProperty = "id", showHeaderFilters = true, disableRowSelectionOnClick = true, updatePageTitle = true, isElasticScreen = false, navigateBack = false, selectionApi = {}, debounceTimeOut = 300, showFooter = true, disableRowGrouping = true, localSortAndFilter = false, isServerGrouping = false, groupAggregations } = model;
    // A row click on a model with relations declared selects it as the active parent row for the child grids rendered below.
    const hasChildGrids = !!model.relationItems?.length;
    const [selectedChildRow, setSelectedChildRow] = useState(null);
    const childRelationFilters = useMemo(() => {
        if (!hasChildGrids || !selectedChildRow) return {};
        const parentValue = selectedChildRow[idProperty];
        return Object.fromEntries(model.relationItems.map(childModel => [
            childModel.name,
            [{ field: childModel.joinColumn || idProperty, operator: '=', type: 'number', value: Number(parentValue) }]
        ]));
    }, [hasChildGrids, selectedChildRow, model.relationItems, idProperty]);
    const handleChildRowClick = useCallback((params, event, details) => {
        if (hasChildGrids) {
            setSelectedChildRow(params.row ?? null);
            props.onChildRowSelected?.(params.row ?? null);
        }
        onRowClick(params, event, details);
    }, [hasChildGrids, onRowClick, props.onChildRowSelected]);
    const getRowClassNameWithChildSelection = useCallback((params) => {
        const consumerClassName = props.getRowClassName ? props.getRowClassName(params) : '';
        if (hasChildGrids && selectedChildRow && params.row[idProperty] === selectedChildRow[idProperty]) {
            return `${consumerClassName} child-grid-selected-row`.trim();
        }
        return consumerClassName;
    }, [props.getRowClassName, hasChildGrids, selectedChildRow, idProperty]);
    // When localSortAndFilter is true, sorting and filtering are handled client-side by MUI DataGrid
    // even if paginationMode is server. Sort/filter values are not sent to the API.
    const sortAndFilterMode = (hasStaticData || localSortAndFilter) ? constants.client : paginationMode;
    // Keyed on valid items only, so an operator change on a still-empty item doesn't change the key.
    const filterModelFetchKey = useMemo(
        () => JSON.stringify(filterValidItems(filterModel.items)),
        [filterModel.items]
    );
    // react-doctor-disable-next-line no-usememo-simple-expression -- memoized for referential stability of the deps array below (narrower than filterModel itself), not for compute cost
    const filterModelForFetch = useMemo(
        () => (localSortAndFilter ? EMPTY_FILTER_MODEL : filterModel),
        // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed on filterModelFetchKey to stay stable while a filter item has no value yet
        [localSortAndFilter, filterModelFetchKey, filterModel.logicOperator, filterModel.quickFilterValues, filterModel.quickFilterLogicOperator]
    );
    // Use a stable large-page pagination when localSortAndFilter is enabled so that
    // the entire dataset is loaded in one request and user page changes don't re-trigger
    // fetchData (since all rows are already in memory for the DataGrid to page locally).
    const paginationModelForFetch = localSortAndFilter ? LOCAL_MODE_PAGINATION_MODEL : paginationModel;
    // In static mode without API endpoint, force read-only to prevent invalid CRUD requests.
    const isReadOnly = model.readOnly === true || readOnly || isStaticDataWithoutBackendApi;
    const isDoubleClicked = model.allowDoubleClick === false;
    const dataRef = useRef(data);
    const fetchAbortControllerRef = useRef(null);

    useEffect(() => () => {
        fetchAbortControllerRef.current?.abort();
        fetchAbortControllerRef.current = null;
    }, []);

    const showAddIcon = model.showAddIcon === true;
    const toLink = model.columns.flatMap(({ link }) => link ? [link] : []);
    const { stateData, formatDate, getApiEndpoint, buildUrl, setPageTitle } = useStateContext();
    const [isLoading, setIsLoading] = useState(false);
    const effectivePermissions = useMemo(() => ({ ...constants.permissions, ...model.permissions, ...permissions }), [model.permissions, permissions]);
    const emptyIsAnyOfOperatorFilters = EMPTY_IS_ANY_OF_OPERATOR_FILTERS;
    const userData = stateData.userData || {};
    const documentField = model.columns.find(ele => ele.type === 'fileUpload')?.field || "";
    const userDefinedPermissions = { add: effectivePermissions.add, edit: effectivePermissions.edit, delete: effectivePermissions.delete };
    const { canAdd, canEdit, canDelete } = getPermissions({ userData, model, userDefinedPermissions });
    const { addUrlParamKey, searchParamKey, hideBreadcrumb = false, tableName, showHistory = true, hideBreadcrumbInGrid = false, breadcrumbColor, disablePivoting = false, columnHeaderHeight = 70, disablePagination = false } = model;
    const gridTitle = model.gridTitle || model.title;
    const preferenceKey = getApiEndpoint("GridPreferenceManager") ? (model.preferenceId || model.module?.preferenceId) : null;
    const searchParams = new URLSearchParams(window.location.search);
    const [currentPreference, setCurrentPreference] = useState(null);
    const [preferencesReady, setPreferencesReady] = useState(!preferenceKey);
    // State for single expanded detail panel row
    const [rowPanelId, setRowPanelId] = useState(null);
    const detailPanelExpandedRowIds = useMemo(() => new Set(rowPanelId ? [rowPanelId] : []), [rowPanelId]);
    const enableRowDetailPanel = typeof model.getDetailPanelContent === 'function';
    const [groupingModel, setGroupingModel] = useState(
        () => Array.isArray(props.rowGroupingField) ? props.rowGroupingField : []
    );
    const [prevRowGroupingField, setPrevRowGroupingField] = useState(props.rowGroupingField);
    if (prevRowGroupingField !== props.rowGroupingField) {
        setPrevRowGroupingField(props.rowGroupingField);
        setGroupingModel(Array.isArray(props.rowGroupingField) ? props.rowGroupingField : []);
    }
    // Server-side row grouping (single field): the list API returns a group-summary row (marked by
    // childrenCount) ahead of that group's leaf rows, rendered as a tree via treeData/getTreeDataPath
    // — MUI's own rowGroupingModel feature is reserved for the client-side grouping path below.
    const serverGroupField = isServerGrouping ? groupingModel[0] : undefined;
    const clientRowGroupingEnabled = !isServerGrouping && !disableRowGrouping;
    const gridRows = useMemo(() => {
        const records = data.records || [];
        // data.records can lag a serverGroupField flip to undefined (stale grouped fetch), so strip any leftover summary rows instead of handing MUI a row with no id.
        if (!serverGroupField) return records.filter(row => row.childrenCount === undefined);
        // Rows with no group value skip grouping entirely (shown as plain top-level rows) rather
        // than being bucketed into a "non-grouped" group.
        return records
            .filter(row => row.childrenCount === undefined || row[serverGroupField] != null)
            .map(row => (row.childrenCount === undefined ? row : {
                ...row,
                [idProperty]: `__group__${row[serverGroupField]}`,
                __isGroupRow: true
            }));
    }, [data.records, serverGroupField, idProperty]);
    const getTreeDataPath = useCallback((row) => {
        const groupValue = row[serverGroupField];
        if (groupValue == null) return [String(row[idProperty])];
        return row.__isGroupRow ? [String(groupValue)] : [String(groupValue), String(row[idProperty])];
    }, [serverGroupField, idProperty]);
    const rowCount = data.recordCount;

    useEffect(() => {
        if (!apiRef.current) return;
        // Store preferenceKey on apiRef for GridPreferences to access
        apiRef.current.prefKey = preferenceKey;
    }, [apiRef, preferenceKey]);

    // Callback when preferences are loaded or changed
    const onPreferenceChange = useCallback((preferenceName) => {
        setCurrentPreference(preferenceName);
        setPreferencesReady(true);
    }, []);


    // Extract column grouping props from model to override
    const columnGroupingModel = useMemo(() => {
        if (!model.columnGroupingModel) return [];
        return model.columnGroupingModel.map(group => ({
            ...group,
            headerName: group.headerName ? tTranslate(group.headerName, tOpts) : group.headerName
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps -- translate isn't read directly but its change must trigger recompute
    }, [model.columnGroupingModel, tOpts, translate, tTranslate]);

    const baseDataFromParams = searchParams.has('baseData') && searchParams.get('baseData');
    const baseSaveData = useMemo(() => {
        if (baseDataFromParams) {
            try {
                const parsedData = JSON.parse(baseDataFromParams);
                if (typeof parsedData === constants.object && parsedData !== null) {
                    return parsedData;
                }
            } catch (error) {
                console.error('Failed to parse baseData from URL:', error);
            }
        }
        return {};
    }, [baseDataFromParams]);

    const handleSelectRow = useCallback(({ row }) => {
        const rowId = row[idProperty];
        setRowSelectionModel(prevModel => {
            const newIds = new Set(prevModel?.ids || []);
            if (newIds.has(rowId)) {
                newIds.delete(rowId);
            } else {
                newIds.add(rowId);
            }
            return { type: 'include', ids: newIds };
        });
    }, [idProperty]);

    // Same source-of-truth as the column list stableGridColumns builds below: GridBase can be
    // driven by the columns prop or model.gridColumns instead of model.columns, so the filter
    // input must resolve the column config against whichever one is actually in effect.
    // dynamicColumns is prepended to match stableGridColumns, so remoteSelect columns that
    // only exist in dynamicColumns still resolve their lookup config.
    const baseColumnList = useMemo(() => {
        const list = columns || model.gridColumns || model.columns || [];
        return dynamicColumns ? [...dynamicColumns, ...list] : list;
    }, [columns, model.gridColumns, model.columns, dynamicColumns]);

    const remoteLookupFilterOperators = useMemo(() => getGridSingleSelectOperators().map(op => ({
        ...op,
        InputComponent: ({ item, applyValue }) => {
            const column = baseColumnList.find(c => c.field === item.field) ?? {};
            const isAnyOf = item.operator === 'isAnyOf';
            return (
                <RemoteSelectField
                    column={column}
                    model={model}
                    lookups={{}}
                    filterMode
                    multiSelect={isAnyOf}
                    filterValue={item.value ?? (isAnyOf ? [] : '')}
                    onFilterChange={(val) => applyValue({ ...item, value: val })}
                />
            );
        },
    })), [baseColumnList, model]);

    const currencySymbol = userData?.userData?.CurrencySymbol;
    const gridColumnTypes = useMemo(() => ({
        "radio": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "date": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: true, showOnlyDate: false, state: stateData.dateTime })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "date" })
        },
        "dateTime": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: false, showOnlyDate: false, state: stateData.dateTime })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "dateTime" })
        },
        "boolean": {
            renderCell: booleanIconRenderer
        },
        "select": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "lookup": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "selection": {
            renderCell: (params) => <CustomCheckBox params={params} handleSelectRow={handleSelectRow} idProperty={idProperty} />
        },
        "percentage": {
            type: "number",
            align: 'right',
            filterOperators: [...getGridNumericOperators()].filter(op => !['!='].includes(op.value)),
            "valueFormatter": ({ value }) => {
                if (value == null) return '';
                const numericValue = Number(value);
                return !isNaN(numericValue) ? `${numericValue.toFixed(1)}%` : '';
            }
        },
        "currency": {
            type: "number",
            align: 'right',
            filterOperators: [...getGridNumericOperators()].filter(op => !['!='].includes(op.value)),
            "valueFormatter": ({ value }) => {
                if (value == null) return '';
                const symbol = currencySymbol || '';
                return symbol ? `${symbol}${value}` : String(value);
            }
        },
        "remoteSelect": {
            "type": "singleSelect",
            filterOperators: remoteLookupFilterOperators
        }
    }), [stateData.dateTime, currencySymbol, handleSelectRow, idProperty, remoteLookupFilterOperators, formatDate]);

    useEffect(() => {
        dataRef.current = data;
        if (typeof onDataLoaded === 'function') {
            onDataLoaded(data);
        }
    }, [data, onDataLoaded]);

    if (hasStaticData !== prevHasStaticData || normalizedStaticData !== prevNormalizedStaticData) {
        setPrevHasStaticData(hasStaticData);
        setPrevNormalizedStaticData(normalizedStaticData);
        if (hasStaticData) {
            setData(normalizedStaticData);
        } else {
            setData((prevData) => ({
                ...(prevData || {}),
                records: [],
                recordCount: 0,
                lookups: {}
            }));
        }
    }

    if (prevCustomFilters !== customFilters) {
        setPrevCustomFilters(customFilters);
        if (customFilters && Object.keys(customFilters).length) {
            if (customFilters.clear) {
                setFilterModel({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
            } else {
                const items = Object.entries(customFilters).reduce((acc, [key, value]) => {
                    if (key === constants.startDate || key === constants.endDate) {
                        acc.push(value);
                    } else if (key in customFilters) {
                        acc.push({ field: key, value, operator: "equals", type: "string" });
                    }
                    return acc;
                }, []);
                setFilterModel({ items, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
            }
        }
    }

    const lookupOptions = useCallback(({ field, lookupMap: lookupMapParam }) => {
        const lookupData = dataRef.current.lookups || {};
        const map = lookupMapParam || {};
        return map[field]?.customLookup || lookupData[map[field]?.lookup] || [];
    }, []);

    const createAction = useCallback(
        ({ key, title, icon, color = "primary", disabled, otherProps }) => (
            <GridActionsCellItem
                key={key}
                icon={<Tooltip title={tTranslate(title, tOpts)}>{iconMapper[icon] || icon || tTranslate(title, tOpts)}</Tooltip>}
                data-action={key}
                label={tTranslate(title, tOpts)}
                color={color}
                disabled={disabled}
                {...otherProps}
            />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps -- translate isn't read directly but its change must trigger recompute
        [translate, tOpts, tTranslate]
    );
    const { customActions = [] } = model;
    const actionConfig = useMemo(() => {
        const actions = [];

        if (!forAssignment && !isReadOnly) {
            actions.push(
                {
                    key: actionTypes.Edit,
                    title: "Edit",
                    icon: 'edit',
                    show: !!canEdit,
                    disabled: row => row.canEdit === false
                },
                {
                    key: actionTypes.Copy,
                    title: "Copy",
                    icon: 'copy',
                    show: !!effectivePermissions.copy,
                },
                {
                    key: actionTypes.Delete,
                    title: "Delete",
                    icon: 'delete',
                    color: "error",
                    show: !!canDelete,
                },
                {
                    key: actionTypes.History,
                    title: "History",
                    icon: 'history',
                    show: !!showHistory,
                },
                ...customActions
            );
        }

        actions.push({
            key: actionTypes.Download,
            title: "Download document",
            icon: 'download',
            show: documentField.length > 0,
        });

        return actions.filter(({ show }) => show !== false);
    }, [
        forAssignment,
        isReadOnly,
        canEdit,
        canDelete,
        showHistory,
        effectivePermissions.copy,
        documentField.length,
        customActions
    ]);

    const getActions = useCallback(
        ({ row }) =>
            actionConfig
                .map(({ key, title, icon, color, disabled, action, ...otherProps }) =>
                    createAction({
                        key,
                        title: title || action, // Fallback to 'action' for backward compatibility if 'title' is not provided
                        icon,
                        color,
                        disabled: disabled?.(row),
                        otherProps
                    })
                ),
        [actionConfig, createAction]
    );
    // Derive a stable string from the loaded lookup names. Recomputes whenever the
    // set of lookup keys changes (e.g. after the first data fetch or when new lookups
    // are introduced), causing the gridColumns useMemo below to produce new column
    // object references. MUI DataGrid's GridFilterInputSingleSelect then sees a new
    // resolvedColumn and re-evaluates its memoized currentValueOptions with the fresh
    // lookup data, ensuring header-filter selections are applied correctly.
    const lookupKeys = useMemo(() => {
        const lookups = data?.lookups || {};
        return Object.keys(lookups).sort().join(',');
    }, [data?.lookups]);

    const { stableGridColumns, pinnedColumns, lookupMap } = useMemo(() => {
        const columnList = dynamicColumns ? [...dynamicColumns, ...(columns || model.gridColumns || model.columns || [])] : (columns || model.gridColumns || model.columns || []);
        const pinnedColumns = { left: [GRID_CHECKBOX_SELECTION_COL_DEF.field], right: [] };
        const finalColumns = [];
        const lookupMap = {};
        const updatedColumnType = { ...gridColumnTypes, ...model.gridColumnTypes };
        const groupingSet = new Set(groupingModel);
        for (const column of columnList) {
            if (column.gridLabel === null || (parent && column.lookup === parent) || (column.type === constants.oneToMany && column.countInList === false)) continue;
            const overrides = {};
            if (column.type === constants.oneToMany) {
                overrides.type = 'number';
                overrides.field = column.field.replace(/s$/, 'Count');
            }

            if (updatedColumnType[column.type]) {
                Object.assign(overrides, updatedColumnType[column.type]);
            }
            if (column.filterOperators) {
                overrides.filterOperators = column.filterOperators;
            }
            if (column.allowEmpty === false) {
                const finalType = overrides.type ?? column.type ?? 'string';
                const baseOperators = overrides.filterOperators
                    ?? DEFAULT_FILTER_OPERATORS_BY_TYPE[finalType]?.()
                    ?? getGridStringOperators();
                // react-doctor-disable-next-line js-set-map-lookups -- NO_VALUE_OPERATORS is a fixed 2-item constant, not a growing collection; a Set adds hashing overhead for no real gain here
                overrides.filterOperators = baseOperators.filter(op => !NO_VALUE_OPERATORS.includes(op.value));
            }
            // Common filter operator pattern
            if (overrides.valueOptions === constants.lookup) {
                overrides.valueOptions = (params) => lookupOptions({ ...params, lookupMap });
            }
            // Column-defined renderCell always wins over whatever the column type set
            if (column.renderCell) {
                overrides.renderCell = column.renderCell;
            }
            if (column.linkTo || column.link) {
                overrides.cellClassName = 'mui-grid-linkColumn';
            }

            if (column.hyperlinkURL && !column.renderCell) {
                const { hyperlinkURL, hyperlinkIndex } = column;
                overrides.renderCell = (params) => {
                    const { value, formattedValue, row } = params;
                    if (value === null || value === undefined || value === '') return value;
                    const urlValue = hyperlinkIndex ? row[hyperlinkIndex] : value;
                    const hyperlink = hyperlinkURL.replace('{0}', encodeURIComponent(String(urlValue)));
                    return <a href={hyperlink} rel="noopener noreferrer" target="_blank">{formattedValue ?? value}</a>;
                };
            }

            if (clientRowGroupingEnabled) {
                overrides.groupable = column.groupable ?? false;
            }
            const finalField = overrides.field ?? column.field;
            overrides.filterable = column.filterable === false ? false : !groupingSet.has(finalField);
            const headerName = tTranslate((typeof column.gridLabel === 'function' ? column.gridLabel({ column, t: tTranslate, tOpts }) : column.gridLabel) || column.label, tOpts);

            finalColumns.push({ ...column, ...overrides, headerName, description: headerName });
            if (column.pinned) {
                pinnedColumns[column.pinned === constants.right ? constants.right : constants.left].push(column.field);
            }
            lookupMap[column.field] = column;
        }
        let auditColumns = model.standard;
        if (auditColumns === true) {
            auditColumns = { addCreatedOnColumn: true, addCreatedByColumn: true, addModifiedOnColumn: true, addModifiedByColumn: true };
        }
        if (auditColumns && typeof auditColumns === constants.object) {
            auditColumnMappings.forEach(({ key, field, type, header }) => {
                if (auditColumns[key] === true) {
                    const column = { field, type, headerName: tTranslate(header, tOpts), width: 200 };
                    // Apply shared grid column type overrides (renderers, valueOptions, etc.)
                    if (updatedColumnType && updatedColumnType[column.type]) {
                        Object.assign(column, updatedColumnType[column.type]);
                    }
                    if (type === constants.dateTime) {
                        column.filterOperators = LocalizedDatePicker({ columnType: 'dateTime' });
                        column.valueFormatter = gridColumnTypes.dateTime.valueFormatter;
                        // Audit date columns localize by default; models can opt out via isAuditColumnLocalized: false
                        column.localize = model.isAuditColumnLocalized ?? true;
                    }
                    finalColumns.push(column);
                }
            });
        }
        if (actionConfig.length) {
            finalColumns.push({
                field: 'actions',
                type: 'actions',
                width: (model.actionWidth ?? constants.defaultActionWidth) * actionConfig.length,
                hidable: false,
                getActions,
                headerName: tTranslate('Actions', tOpts),
            });

            pinnedColumns.right.push('actions');
        }
        if (enableRowDetailPanel && model.detailPanelTogglePosition === constants.right) pinnedColumns.right.push('__detail_panel_toggle__');
        return { stableGridColumns: finalColumns, pinnedColumns, lookupMap };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- translate isn't read directly but its change must trigger recompute
    }, [columns, model, parent, dynamicColumns, translate, groupingModel, enableRowDetailPanel, actionConfig.length, clientRowGroupingEnabled, getActions, gridColumnTypes, lookupOptions, tOpts, tTranslate]);

    // Shallow-copy columns when lookups change so MUI DataGrid's GridFilterInputSingleSelect
    // sees new column object references and re-evaluates its memoized currentValueOptions.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- lookupKeys isn't read directly but its change must trigger new column references
    const gridColumns = useMemo(() => stableGridColumns.map(col => ({ ...col })), [stableGridColumns, lookupKeys]);
    // Shows the grouped column's own name (not MUI's default "Group") and blanks out leaf rows,
    // which would otherwise fall back to showing their own id (their tree path's last segment).
    const groupingColDef = useMemo(() => {
        if (!serverGroupField) return undefined;
        const groupedColumn = gridColumns.find(col => col.field === serverGroupField);
        return {
            headerName: groupedColumn?.headerName || serverGroupField,
            valueGetter: (value, row) => (row.__isGroupRow ? row[serverGroupField] : '')
        };
    }, [serverGroupField, gridColumns]);
    // Excludes the auto tree/group column from the "manage columns" panel entirely (not merely
    // hidden-but-re-addable) while there's no active group field for it to show.
    const getTogglableColumns = useCallback(
        (cols) => cols.filter(col => col.field !== TREE_DATA_GROUPING_FIELD || Boolean(serverGroupField)).map(col => col.field),
        [serverGroupField]
    );

    // Stable slice of column properties that affect the API request only (what buildRequestData reads).
    // Isolates fetchData from render-only changes like headerName, renderCell, filterOperators, etc.
    const fetchColumnsRef = useRef([]);
    const fetchColumns = useMemo(() => {
        const next = stableGridColumns.map(({ field, type, lookup, localize, dependsOn, dataIndex, isKeywordField, groupable }) => ({ field, type, lookup, localize, dependsOn, dataIndex, isKeywordField, groupable }));
        const prev = fetchColumnsRef.current;
        const isSame = Array.isArray(prev)
            && prev.length === next.length
            && next.every((col, i) => areEqual(prev[i], col));
        if (isSame) return prev;
        fetchColumnsRef.current = next;
        return next;
    }, [stableGridColumns]);

    // Sort by the grouping field(s) first (desc) so group rows land first, then the current/default sort.
    // groupingModel is seeded from the (possibly page-shared) rowGroupingField prop regardless of
    // whether this grid supports grouping at all, or whether the selected field is even one of this
    // grid's own columns - restricted to both so it never injects an ORDER BY for a field this grid's
    // query doesn't have.
    const activeGroupingFields = useMemo(
        () => ((clientRowGroupingEnabled || serverGroupField) ? groupingModel.filter(field => fetchColumns.some(col => col.field === field)) : []),
        [clientRowGroupingEnabled, serverGroupField, groupingModel, fetchColumns]
    );
    const effectiveSortModel = useMemo(() => {
        if (!activeGroupingFields.length) return sortModel;
        const groupSorts = activeGroupingFields.map(field => {
            const existing = sortModel.find(sort => sort.field === field);
            if (existing) return existing;
            const column = fetchColumns.find(col => col.field === field) || {};
            return { field, sort: 'desc', filterField: resolveRequestField(field, column, isElasticScreen) };
        });
        const remainingSorts = sortModel.filter(sort => !activeGroupingFields.includes(sort.field));
        return [...groupSorts, ...remainingSorts];
    }, [activeGroupingFields, sortModel, fetchColumns, isElasticScreen]);
    // Stable empty reference when localSortAndFilter is on, so fetchData's useCallback/effect don't re-trigger on local sort changes.
    const sortModelForFetch = localSortAndFilter ? EMPTY_SORT_MODEL : effectiveSortModel;

    // Initialize toolbar filters with default values
    const hasInitializedRef = useRef(false);
    useEffect(() => {
        // Only run once on initial mount
        if (hasInitializedRef.current) return;
        const toolbarFilterColumns = gridColumns?.filter(col => col.toolbarFilter?.defaultFilterValue !== undefined) || [];
        if (toolbarFilterColumns.length === 0) return;

        // Check if any toolbar filters already exist in filterModel
        const hasExistingToolbarFilters = filterModel.items.some(item =>
            toolbarFilterColumns.some(col => col.field === item.field)
        );
        if (hasExistingToolbarFilters) {
            hasInitializedRef.current = true;
            return;
        }

        const toolbarFilters = toolbarFilterColumns.flatMap(col => {
            const operator = getDefaultOperator(col.type, col.toolbarFilter?.defaultOperator);
            const normalizedValue = utils.normalizeFilterValue({
                operator,
                value: col.toolbarFilter.defaultFilterValue
            });
            // Skip inserting toolbar filters where normalization produced an empty array,
            // which historically could result from legacy multi-select defaults (''/null).
            // An empty array often behaves like 'match none', so avoid adding it.
            if (Array.isArray(normalizedValue) && normalizedValue.length === 0) return [];
            return [{ field: col.field, operator, value: normalizedValue, type: col.type }];
        });

        if (toolbarFilters.length > 0) {
            setFilterModel(prev => ({
                ...prev,
                items: [...prev.items, ...toolbarFilters]
            }));
        }
        hasInitializedRef.current = true;
    }, [gridColumns, filterModel.items]);


    // Logs which dep caused fetchData to be recreated. Enable with model.debug = true.
    useChangedDeps('fetchData', {
        hasStaticData, preferencesReady, paginationModelForFetch, buildUrl, model, backendApi,
        filterModelForFetch, baseFilters, id, assigned, available, selected,
        extraParams: props.extraParams, sortModelForFetch, fetchColumns, parentFilters, additionalFilters
    }, model.debug);

    const fetchData = useCallback(async ({ action = "list", extraParams = {}, isPivotExport = false, contentType, columns, exportKey } = {}) => {
        if (hasStaticData || !backendApi || !preferencesReady) return;
        const { pageSize, page } = paginationModelForFetch;
        const isExportRequest = Boolean(contentType);

        const baseUrl = buildUrl(isPivotExport && model.pivotApi ? model.pivotApi : backendApi);

        const filters = {
            ...filterModelForFetch,
            items: filterValidItems(filterModelForFetch.items)
        };

        const joinFilterItems = [];
        if (model.joinColumn && id) {
            joinFilterItems.push({ field: model.joinColumn, operator: "is", type: "number", value: Number(id) });
        }
        if (Array.isArray(parentFilters)) {
            joinFilterItems.push(...parentFilters);
        }

        const mergedBaseFilters = Array.isArray(baseFilters) ? [...baseFilters] : [];
        // joinColumnAsParam sends the join value(s) as flat request params instead of where-clause filters.
        const joinParams = {};
        if (model.joinColumnAsParam) {
            joinFilterItems.forEach(({ field, value }) => { joinParams[field] = value; });
        } else {
            mergedBaseFilters.push(...joinFilterItems);
        }

        if (additionalFilters) {
            filters.items = [...(filters.items || []), ...additionalFilters];
        }

        const mergedExtraParams = {
            ...model.relationsParam,
            ...extraParams,
            ...props.extraParams,
            ...joinParams,
        };

        if (assigned || available) {
            const selectedValue = Array.isArray(selected) ? selected.join(",") : (selected || '');
            mergedExtraParams[assigned ? "include" : "exclude"] = selectedValue || '0';
        }

        if (isPivotExport) {
            if (model.exportTemplate) {
                mergedExtraParams.template = model.exportTemplate;
            }
            if (model.configFileName) {
                mergedExtraParams.configFileName = model.configFileName;
            }
        }

        if (serverGroupField) {
            mergedExtraParams.rowGroupField = serverGroupField;
            if (groupAggregations && Object.keys(groupAggregations).length) {
                mergedExtraParams.rowGroupAggregations = groupAggregations;
            }
        }

        const isValidFilters = !filters.items.length || filters.items.every(item => "value" in item && item.value !== undefined);
        if (!isValidFilters) return;

        let signal = null;
        let controller = null;
        if (!isExportRequest) {
            if (fetchAbortControllerRef.current) {
                fetchAbortControllerRef.current.abort();
            }
            controller = new AbortController();
            fetchAbortControllerRef.current = controller;
            signal = controller.signal;
        }

        const listParams = {
            action,
            page: isExportRequest ? exportPage : page,
            pageSize: isExportRequest ? exportPageSize : pageSize,
            sortModel: sortModelForFetch,
            filterModel: filters,
            gridColumns: fetchColumns,
            model,
            baseFilters: mergedBaseFilters,
            api: baseUrl,
            extraParams: mergedExtraParams
        };
        if (typeof onListParamsChangeRef.current === 'function') {
            onListParamsChangeRef.current(listParams);
        }
        apiRef.current.listParams = listParams;
        if (!isExportRequest) setIsLoading(true);
        try {
            let listParameters = { ...listParams, contentType, columns, signal };
            if (typeof model.beforeList === 'function') {
                listParameters = await model.beforeList({ ...listParameters, t: tTranslate, tOpts, exportKey }) || listParameters;
            }
            const result = await getList(listParameters);
            if (!isExportRequest && result !== undefined && fetchAbortControllerRef.current === controller) {
                if (result?.aborted) return;
                setData(result);
            }
        } catch (error) {
            if (error?.aborted || error?.name === 'AbortError' || controller?.signal?.aborted) return;
            snackbarRef.current.showErrorCode(ERROR_CODES.DATA_LOAD_FAILED, error?.message);
            if (!isExportRequest) {
                setData((prevData) => ({ ...prevData, records: [], recordCount: 0 }));
            }
        } finally {
            if (!isExportRequest && fetchAbortControllerRef.current === controller) setIsLoading(false);
        }
    }, [hasStaticData, preferencesReady, paginationModelForFetch, buildUrl, model, backendApi, filterModelForFetch, baseFilters, id, assigned, available, selected, props.extraParams, sortModelForFetch, fetchColumns, parentFilters, additionalFilters, tTranslate, tOpts, apiRef, serverGroupField, groupAggregations]);

    const openForm = useCallback(async ({ id, record = {}, mode }) => {
        if (setActiveRecord) {
            if (isStaticDataWithoutBackendApi) {
                snackbar.showErrorCode(ERROR_CODES.API_UNDEFINED);
                return;
            }
            try {
                const baseUrl = buildUrl(backendApi);
                const data = await getRecord({ id, api: baseUrl, model, parentFilters, where });
                setActiveRecord(data);
            } catch (error) {
                snackbar.showErrorCode(ERROR_CODES.LOAD_FAILED, error?.message);
            }
            return;
        }
        let path = pathname;
        if (!path.endsWith("/")) {
            path += "/";
        }
        if (relationName) {
            path += `${encodeURIComponent(String(relationName))}/`;
        }
        if (mode === "copy") {
            path += "0-" + id;
        } else {
            path += id;
        }
        if (addUrlParamKey) {
            const currentParams = new URLSearchParams(window.location.search);
            currentParams.set(addUrlParamKey, record[addUrlParamKey]);
            path += `?${currentParams.toString()}`;
        }
        navigate(path);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setActiveRecord, isStaticDataWithoutBackendApi, backendApi, model, parentFilters, where, pathname, relationName, addUrlParamKey, navigate, getRecord, buildUrl, snackbar]);

    const handleDownload = useCallback(({ documentLink }) => {
        if (!documentLink) return;
        window.open(documentLink, '_blank');
    }, []);
    const onCellClickHandler = useCallback(async (cellParams, event, details) => {
        let action = (!disableCellRedirect && cellParams.field === model.linkColumn) ? actionTypes.Edit : null;
        if (!action && cellParams.field === constants.actions) {
            action = details?.action;
            if (!action) {
                const el = event.target.closest('button');
                if (el) {
                    action = el.dataset.action;
                }
            }
        }
        const { row: record } = cellParams;
        if (!isReadOnly) {
            if (onCellClick) {
                const result = await onCellClick({ cellParams, event, details });
                if (typeof result !== constants.boolean) {
                    return;
                }
            }
            const columnConfig = lookupMap[cellParams.field] || {};
            if (columnConfig.linkTo) {
                navigate({
                    pathname: template.replaceTags(columnConfig.linkTo, record)
                });
                return;
            }
            switch (action) {
                case actionTypes.Edit: {
                    if (model.getDetailPanelContent) {
                        const rowId = record[idProperty];
                        setRowPanelId(prevId => prevId === rowId ? null : rowId);
                        return;
                    } else {
                        return openForm({ id: record[idProperty], record });
                    }
                }
                case actionTypes.Copy:
                    return openForm({ id: record[idProperty], mode: 'copy' });
                case actionTypes.Delete:
                    setIsDeleting(true);
                    setRecord({ name: record[model.linkColumn], id: record[idProperty] });
                    break;
                case actionTypes.History:
                    // navigates to history screen, specifying the tablename, id of record and breadcrumb to render title on history screen.
                    return navigate(`${getApiEndpoint('history')}?tableName=${tableName}&id=${record[idProperty]}&breadCrumb=${searchParamKey ? new URLSearchParams(window.location.search).get(searchParamKey) : gridTitle}`);
                default: {
                    // Check if action matches any customAction and call its onClick if found
                    const foundCustomAction = customActions.find(ca => ca.action === action && typeof ca.onClick === constants.function);
                    if (foundCustomAction) {
                        foundCustomAction.onClick({ row: record, navigate });
                        return;
                    }
                    break;
                }
            }
        }
        if (action === actionTypes.Download) {
            handleDownload({ documentLink: record[documentField] });
        }
        if (!toLink.length) {
            return;
        }
        const { row } = cellParams;
        const columnConfig = lookupMap[cellParams.field] || {};
        const historyObject = {
            pathname: template.replaceTags(columnConfig.linkTo, row)
        };
        if (model.addRecordToState) {
            historyObject.state = row;
        }
        navigate(historyObject);
    }, [disableCellRedirect, isReadOnly, onCellClick, lookupMap, model, idProperty, documentField, navigate, toLink, customActions, tableName, searchParamKey, gridTitle, getApiEndpoint, handleDownload, openForm]);

    const handleDelete = useCallback(async () => {
        if (isStaticDataWithoutBackendApi) {
            snackbar.showErrorCode(ERROR_CODES.API_UNDEFINED);
            return;
        }
        const baseUrl = buildUrl(backendApi);
        try {
            await deleteRecord({ id: record.id, api: baseUrl, model });
            snackbar.showMessage(tTranslate('Record Deleted Successfully.', tOpts));
            fetchData();
        } catch (error) {
            snackbar.showErrorCode(ERROR_CODES.DELETE_FAILED, error?.message);
        } finally {
            setIsDeleting(false);
        }
    }, [isStaticDataWithoutBackendApi, backendApi, record?.id, snackbar, model, fetchData, tTranslate, tOpts, buildUrl]);

    const clearError = useCallback(() => {
        setErrorMessage(null);
        setIsDeleting(false);
    }, []);

    const processRowUpdate = useCallback((updatedRow) => {
        if (typeof processRowUpdateProp === "function") {
            processRowUpdateProp(updatedRow, data);
        }
        return updatedRow;
    }, [processRowUpdateProp, data]);

    const onCellDoubleClick = useCallback((event) => {
        if (event.row.canEdit === false) {
            return;
        }
        const { row: record } = event;
        if (typeof onCellDoubleClickOverride === constants.function) {
            onCellDoubleClickOverride(event);
            return;
        }
        if (!isReadOnly && !isDoubleClicked && !disableCellRedirect) {
            openForm({ id: record[idProperty], record });
        }
        if (isReadOnly && model.rowRedirectLink) {
            const historyObject = {
                pathname: template.replaceTags(model.rowRedirectLink, record)
            };
            if (model.addRecordToState) {
                historyObject.state = record;
            }
            navigate(historyObject);
        }
        if (typeof onRowDoubleClick === constants.function) {
            onRowDoubleClick(event);
        }
    }, [onCellDoubleClickOverride, isReadOnly, isDoubleClicked, disableCellRedirect, openForm, idProperty, model.rowRedirectLink, model.addRecordToState, navigate, onRowDoubleClick]);

    const handleAddRecords = useCallback(async () => {
        if (rowSelectionModel.ids.size < 1) {
            snackbar.showErrorCode(ERROR_CODES.SELECT_AT_LEAST_ONE);
            return;
        }

        const selectedIds = Array.from(rowSelectionModel.ids);
        const recordMap = new Map((data.records || []).map(record => [record[idProperty], record]));
        let selectedRecords = selectedIds.map(id => ({ ...baseSaveData, ...recordMap.get(id) }));

        // If selectionUpdateKeys is defined, filter each record to only those keys
        if (Array.isArray(model.selectionUpdateKeys) && model.selectionUpdateKeys.length) {
            selectedRecords = selectedRecords.map(item =>
                Object.fromEntries(model.selectionUpdateKeys.map(key => [key, item[key]]))
            );
        }

        const apiEndpoint = selectionApi || backendApi;
        if (!apiEndpoint) {
            snackbar.showErrorCode(ERROR_CODES.API_UNDEFINED);
            return;
        }
        const baseUrl = buildUrl(apiEndpoint);
        setIsLoading(true);
        try {
            const result = await saveRecord({
                id: 0,
                api: `${baseUrl}/updateMany`,
                values: { items: selectedRecords },
                model
            });

            if (result) {
                fetchData();
                const message = result.info ? result.info : tTranslate('Record Added Successfully.', tOpts);
                snackbar.showMessage(message);
            }
        } catch (err) {
            snackbar.showErrorCode(ERROR_CODES.SAVE_FAILED, err?.message);
        } finally {
            setIsLoading(false);
            setRowSelectionModel({
                type: 'include',
                ids: new Set()
            });
            setShowAddConfirmation(false);
        }
    }, [rowSelectionModel.ids, snackbar, data.records, idProperty, baseSaveData, selectionApi, backendApi, model, fetchData, tTranslate, tOpts, buildUrl]);

    const onAdd = useCallback(() => {
        if (selectionApi.length > 0) {
            if (rowSelectionModel.ids.size > 0) {
                setShowAddConfirmation(true);
                return;
            }
            snackbar.showErrorCode(ERROR_CODES.SELECT_AT_LEAST_ONE);
            return;
        }
        if (typeof onAddOverride === constants.function) {
            onAddOverride();
        } else {
            openForm({ id: 0 });
        }
    }, [selectionApi, snackbar, onAddOverride, openForm, rowSelectionModel.ids.size]);

    const clearFilters = useCallback(() => {
        if (!filterModel?.items?.length) return;
        setFilterModel({ ...constants.gridFilterModel });
    }, [filterModel]);

    /**
     * Gets the selected row IDs from the grid based on the current selection state.
     * Handles both 'include' (selected rows) and 'exclude' (all rows except excluded) selection types.
     * @returns {Array} Array of selected row IDs
     */
    const getSelectedRowIds = useCallback((selectionModel) => {
        const selection = selectionModel || apiRef.current?.state?.rowSelection || { type: 'include', ids: new Set() };
        const allRowIds = apiRef.current ? apiRef.current.getAllRowIds() : [];
        if (selection.type === 'include') {
            return Array.from(selection.ids || []);
        }
        // exclude = all rows except excluded
        return allRowIds.filter(id => !(selection.ids || new Set()).has(id));
    }, [apiRef]);

    const handleRowSelectionModelChange = useCallback((selectionModel) => {
        let normalizedModel = selectionModel;
        if (selectionModel.type === 'exclude') {
            const selectedIds = getSelectedRowIds(selectionModel);
            normalizedModel = { type: 'include', ids: new Set(selectedIds) };
        }
        setRowSelectionModel(normalizedModel);
        onRowSelectionModelChangeProp?.(normalizedModel);
    }, [getSelectedRowIds, onRowSelectionModelChangeProp]);
    

    const updateAssignment = useCallback(({ unassign, assign }) => {
        const assignedValues = Array.isArray(selected) ? selected : (selected ? selected.split(',') : []);
        const unassignSet = new Set((unassign || []).map(id => parseInt(id)));
        const filtered = assignedValues.filter(id => !unassignSet.has(parseInt(id)));
        const finalValues = assign ? [...new Set([...filtered, ...assign])] : filtered;
        onAssignChange(typeof selected === constants.string ? finalValues.join(',') : finalValues);
    }, [selected, onAssignChange]);

    const onAssign = useCallback(() => {
        updateAssignment({ assign: Array.from(rowSelectionModel.ids) });
    }, [updateAssignment, rowSelectionModel.ids]);

    const onUnassign = useCallback(() => {
        updateAssignment({ unassign: Array.from(rowSelectionModel.ids) });
    }, [updateAssignment, rowSelectionModel.ids]);

    const selectAll = useCallback(() => {
        const records = data.records || [];
        const currentCount = rowSelectionModel.ids.size;
        if (currentCount === records.length) {
            // If all records are selected, deselect all
            setRowSelectionModel({
                type: 'include',
                ids: new Set()
            });
        } else {
            // Select all records
            const allIds = records.map(record => record[idProperty]);
            setRowSelectionModel({
                type: 'include',
                ids: new Set(allIds)
            });
        }
    }, [rowSelectionModel, data.records, idProperty]);

    const getGridRowId = useCallback((row) => row[idProperty], [idProperty]);
    const handleExport = useCallback((e) => {
        const contentType = e.currentTarget?.dataset?.contentType || e.target?.dataset?.contentType;
        const isPivotExport = (e.currentTarget?.dataset?.isPivotExport || e.target?.dataset?.isPivotExport) === 'true';
        if (hasStaticData || localSortAndFilter) {
            if (contentType === 'text/csv') {
                apiRef.current?.exportDataAsCsv?.();
                return;
            }
            if (contentType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                apiRef.current?.exportDataAsExcel?.();
                return;
            }
            return;
        }
        if (data?.recordCount > recordCounts) {
            snackbar.showMessage(tTranslate('Cannot export more than 60k records, please apply filters or reduce your results using filters', tOpts));
            return;
        }
        const { orderedFields, columnVisibilityModel, lookup } = apiRef.current.state.columns;
        const hiddenColumns = Object.keys(columnVisibilityModel).filter(key => columnVisibilityModel[key] === false);

        const nonExportColumns = new Set(gridColumns.flatMap(col => col.exportable === false ? [col.field] : []));
        const hiddenColumnSet = new Set(hiddenColumns);

        const visibleColumns = orderedFields.filter(
            field => !nonExportColumns.has(field) && !hiddenColumnSet.has(field) && field !== '__check__' && field !== 'actions' && !gridGroupByColumnName.includes(field)
        );

        if (visibleColumns.length === 0) {
            snackbar.showMessage(tTranslate('You cannot export while all columns are hidden... please show at least 1 column before exporting', tOpts));
            return;
        }

        const columns = {};
        const gridColsLookup = Object.fromEntries(gridColumns.map(c => [c.field, c]));
        visibleColumns.forEach(field => {
            const col = lookup[field];
            const gridCol = gridColsLookup[field];
            columns[field] = {
                field,
                width: col.width,
                headerName: gridCol?.headerName || col.headerName || col.field,
                type: col.type,
                isParsable: col.isParsable,
                lookup: col.lookup,
                hyperlinkURL: gridCol?.hyperlinkURL ?? col.hyperlinkURL,
                hyperlinkIndex: gridCol?.hyperlinkIndex ?? col.hyperlinkIndex,
                localize: col.localize,
                exportIndex: col.exportIndex
            };
        });
        fetchData({
            action: "export",
            isPivotExport,
            exportKey: e.currentTarget?.dataset?.exportKey || e.target?.dataset?.exportKey,
            contentType,
            columns
        });
    }, [hasStaticData, localSortAndFilter, data?.recordCount, apiRef, gridColumns, snackbar, fetchData, tTranslate, tOpts]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (props.isChildGrid || forAssignment || !updatePageTitle) {
            return;
        }
        setPageTitle({ icon: "", titleHeading: model.pageTitle || model.title, title: model.title });
        return () => {
            setPageTitle(null);
        };
    }, [setPageTitle, model.pageTitle, model.title, props.isChildGrid, forAssignment, updatePageTitle]);

    const updateFilters = useCallback((e) => {
        const { items } = e;
        const updatedItems = items.map(item => {
            const { field, operator, value } = item;
            const column = gridColumns.find(col => col.field === field) || {};
            const isNumber = column.type === constants.Number;

            // Handle operators that do not require a value
            if (NO_VALUE_OPERATORS.includes(operator)) {
                return { ...item, value: null };
            }

            if (isNumber && value < 0) {
                return { ...item, value: null };
            }

            if ((emptyIsAnyOfOperatorFilters.includes(operator)) || (isNumber && !isNaN(value)) || (!isNumber)) {
                const isKeywordField = isElasticScreen && gridColumns.filter(element => element.field === field)[0]?.isKeywordField;
                if (isKeywordField) {
                    item.filterField = `${item.field}.keyword`;
                }
                return { ...item };
            }
            return { ...item, value: isNumber ? null : value };
        });
        const filteredItems = updatedItems.filter(item => !(item.operator === 'isAnyOf' && Array.isArray(item.value) && item.value.length === 0));
        setFilterModel({ ...e, items: filteredItems });
    }, [gridColumns, emptyIsAnyOfOperatorFilters, isElasticScreen, setFilterModel]);

    const updateSort = useCallback((e) => {
        if (e[0]) {
            if (gridGroupByColumnName.includes(e[0].field)) {
                snackbar.showMessage(tTranslate('Group By is applied on the same column, please remove it in order to apply sorting.', tOpts));
                return;
            }
        }
        const sort = e.map((ele) => {
            const column = gridColumns.find(element => element.field === ele.field) || {};
            return { ...ele, filterField: resolveRequestField(ele.field, column, isElasticScreen) };
        });
        setSortModel(sort);
    }, [gridColumns, isElasticScreen, setSortModel, snackbar, tTranslate, tOpts]);

    const pageTitle = title || model.gridTitle || model.title;
    const breadCrumbs = searchParamKey
        ? [{ text: searchParams.get(searchParamKey) || pageTitle }]
        : [{ text: pageTitle }];

    const handleDetailPanelExpanded = useCallback((ids) => {
        setRowPanelId(ids.size > 0 ? [...ids].pop() : null);
    }, []);

    const getDetailPanelContent = useCallback((params) => {
        if (typeof model.getDetailPanelContent === 'function') {
            return model.getDetailPanelContent({
                ...params,
                onRefresh: () => {
                    // Close the expanded panel and refresh data
                    setRowPanelId(null);
                    fetchData();
                },
                t: tTranslate,
                tOpts
            });
        }
        return null;
    }, [model, fetchData, tTranslate, tOpts]);

    const localeText =
        useMemo(() => ({
            filterValueTrue: tTranslate('Yes', tOpts),
            filterValueFalse: tTranslate('No', tOpts),
            noRowsLabel: tTranslate('No data', tOpts),
            footerTotalRows: `${tTranslate('Total rows', tOpts)}:`,
            MuiTablePagination: {
                labelRowsPerPage: tTranslate('Rows per page', tOpts),
                labelDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate('of', tOpts)} ${count}`,
            },
            toolbarQuickFilterPlaceholder: tTranslate(model?.searchPlaceholder || 'Search...', tOpts),
            toolbarColumns: tTranslate('Columns', tOpts),
            toolbarFilters: tTranslate('Filters', tOpts),
            toolbarExport: tTranslate('Export', tOpts),
            filterPanelAddFilter: tTranslate('Add filter', tOpts),
            filterPanelRemoveAll: tTranslate('Remove all', tOpts),
            filterPanelDeleteIconLabel: tTranslate('Delete', tOpts),
            filterPanelColumns: tTranslate('Columns', tOpts),
            filterPanelOperator: tTranslate('Operator', tOpts),
            filterPanelValue: tTranslate('Value', tOpts),
            filterPanelInputLabel: tTranslate('Value', tOpts),
            filterPanelInputPlaceholder: tTranslate('Filter value', tOpts),
            columnMenuLabel: tTranslate('Menu', tOpts),
            columnMenuShowColumns: tTranslate('Show columns', tOpts),
            columnMenuManageColumns: tTranslate('Manage columns', tOpts),
            columnMenuFilter: tTranslate('Filter', tOpts),
            columnMenuHideColumn: tTranslate('Hide column', tOpts),
            columnMenuManagePivot: tTranslate('Manage pivot', tOpts),
            toolbarColumnsLabel: tTranslate('Select columns', tOpts),
            toolbarExportLabel: tTranslate('Export', tOpts),
            pivotDragToColumns: tTranslate('Drag here to pivot by', tOpts),
            pivotDragToRows: tTranslate('Drag here to group by', tOpts),
            pivotDragToValues: tTranslate('Drag here to create values', tOpts),
            pivotColumns: tTranslate('Pivot columns', tOpts),
            pivotRows: tTranslate('Row groups', tOpts),
            pivotValues: tTranslate('Values', tOpts),
            pivotMenuRows: tTranslate('Rows', tOpts),
            pivotMenuColumns: tTranslate('Columns', tOpts),
            pivotMenuValues: tTranslate('Values', tOpts),
            pivotToggleLabel: tTranslate('Pivot', tOpts),
            pivotSearchControlPlaceholder: tTranslate('Search pivot columns', tOpts),
            columnMenuUnsort: tTranslate('Unsort', tOpts),
            columnMenuSortAsc: tTranslate('Sort by ascending', tOpts),
            columnMenuSortDesc: tTranslate('Sort by descending', tOpts),
            columnMenuUnpin: tTranslate('Unpin', tOpts),
            columnsPanelTextFieldLabel: tTranslate('Find column', tOpts),
            columnsPanelTextFieldPlaceholder: tTranslate('Column title', tOpts),
            columnsPanelHideAllButton: tTranslate('Hide all', tOpts),
            columnsPanelShowAllButton: tTranslate('Show all', tOpts),
            pinToLeft: tTranslate('Pin to left', tOpts),
            pinToRight: tTranslate('Pin to right', tOpts),
            unpin: tTranslate('Unpin', tOpts),
            filterValueAny: tTranslate('any', tOpts),
            filterOperatorIs: tTranslate('is', tOpts),
            filterOperatorNot: tTranslate('is not', tOpts),
            filterOperatorIsAnyOf: tTranslate('is any of', tOpts),
            filterOperatorContains: tTranslate('contains', tOpts),
            filterOperatorDoesNotContain: tTranslate('does not contain', tOpts),
            filterOperatorEquals: tTranslate('equals', tOpts),
            filterOperatorDoesNotEqual: tTranslate('does not equal', tOpts),
            filterOperatorStartsWith: tTranslate('starts with', tOpts),
            filterOperatorEndsWith: tTranslate('ends with', tOpts),
            filterOperatorIsEmpty: tTranslate('is empty', tOpts),
            filterOperatorIsNotEmpty: tTranslate('is not empty', tOpts),
            filterOperatorAfter: tTranslate('is after', tOpts),
            filterOperatorOnOrAfter: tTranslate('is on or after', tOpts),
            filterOperatorBefore: tTranslate('is before', tOpts),
            filterOperatorOnOrBefore: tTranslate('is on or before', tOpts),
            toolbarFiltersTooltipHide: tTranslate('Hide filters', tOpts),
            toolbarFiltersTooltipShow: tTranslate('Show filters', tOpts),

            //filter textfield labels
            headerFilterOperatorContains: tTranslate('contains', tOpts),
            headerFilterOperatorEquals: tTranslate('equals', tOpts),
            headerFilterOperatorStartsWith: tTranslate('starts with', tOpts),
            headerFilterOperatorEndsWith: tTranslate('ends with', tOpts),
            headerFilterOperatorIsEmpty: tTranslate('is empty', tOpts),
            headerFilterOperatorIsNotEmpty: tTranslate('is not empty', tOpts),
            headerFilterOperatorAfter: tTranslate('is after', tOpts),
            headerFilterOperatorOnOrAfter: tTranslate('is on or after', tOpts),
            headerFilterOperatorBefore: tTranslate('is before', tOpts),
            headerFilterOperatorOnOrBefore: tTranslate('is on or before', tOpts),
            headerFilterOperatorIs: tTranslate('is', tOpts),
            'headerFilterOperator=': tTranslate('equals', tOpts),
            'headerFilterOperator!=': tTranslate('does not equal', tOpts),
            'headerFilterOperator>': tTranslate('greater than', tOpts),
            'headerFilterOperator>=': tTranslate('greater than or equal to', tOpts),
            'headerFilterOperator<': tTranslate('less than', tOpts),
            'headerFilterOperator<=': tTranslate('less than or equal to', tOpts),
            columnsManagementSearchTitle: tTranslate('Search', tOpts),
            columnsManagementNoColumns: tTranslate('No columns', tOpts),
            paginationRowsPerPage: tTranslate('Rows per page', tOpts),
            paginationDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate('of', tOpts)} ${count}`,
            toolbarQuickFilterLabel: tTranslate('Search', tOpts),
            toolbarFiltersTooltipActive: (count) => {
                const key = count === 1 ? 'active filter' : 'active filters';
                return `${count} ${tTranslate(key, tOpts)}`;
            },
            columnHeaderSortIconLabel: tTranslate('Sort', tOpts),
            filterPanelOperatorAnd: tTranslate('And', tOpts),
            filterPanelOperatorOr: tTranslate('Or', tOpts),
            noResultsOverlayLabel: tTranslate('No results found', tOpts),
            columnHeaderFiltersTooltipActive: (count) => {
                const key = count === 1 ? 'active filter' : 'active filters';
                return `${count} ${tTranslate(key, tOpts)}`;
            },
            detailPanelToggle: tTranslate('Detail panel toggle', tOpts),
            checkboxSelectionHeaderName: tTranslate('Checkbox selection', tOpts),
            columnsManagementShowHideAllText: tTranslate('Show/Hide all', tOpts),
            noColumnsOverlayLabel: tTranslate('No columns', tOpts),
            noColumnsOverlayManageColumns: tTranslate('Manage columns', tOpts),
            columnsManagementReset: tTranslate('Reset', tOpts),
            groupColumn: (name) => `${tTranslate('Group by', tOpts)} ${name}`,
            unGroupColumn: (name) => `${tTranslate('Ungroup', tOpts)} ${name}`,
            footerRowSelected: (count) => {
                const key = count === 1 ? 'item selected' : 'items selected';
                return `${count.toLocaleString()} ${tTranslate(key, tOpts)}`;
            }
        }), [tTranslate, tOpts, model?.searchPlaceholder]);

    const slotProps = useMemo(() => ({
        headerFilterCell: { showClearIcon: true },
        toolbar: {
            model,
            data,
            currentPreference,
            isReadOnly,
            canAdd,
            canDelete,
            forAssignment,
            showAddIcon,
            onAdd,
            selectionApi,
            rowSelectionModel,
            selectAll,
            available,
            onAssign,
            assigned,
            onUnassign,
            effectivePermissions,
            clearFilters,
            handleExport,
            preferenceKey,
            apiRef,
            gridColumns,
            tTranslate,
            tOpts,
            idProperty,
            filterModel,
            setFilterModel,
            onPreferenceChange,
            toolbarItems,
            headerActions: props.headerActions,
            customExportOptions,
            isStaticDataMode: hasStaticData || localSortAndFilter
        },
        footer: {
            pagination: disablePagination !== true,
            apiRef,
            tTranslate,
            tOpts,
            totalRowCount: data.recordCount
        },
        panel: {
            placement: "bottom-end"
        },
        pagination: {
            backIconButtonProps: {
                title: tTranslate('Go to previous page', tOpts),
                'aria-label': tTranslate('Go to previous page', tOpts),
            },
            nextIconButtonProps: {
                title: tTranslate('Go to next page', tOpts),
                'aria-label': tTranslate('Go to next page', tOpts),
            },
        },
        columnsManagement: {
            getTogglableColumns
        }
    }), [model, data, currentPreference, isReadOnly, canAdd, canDelete, forAssignment, showAddIcon, onAdd, selectionApi, rowSelectionModel, selectAll, available, onAssign, assigned, onUnassign, effectivePermissions, clearFilters, handleExport, preferenceKey, apiRef, gridColumns, tTranslate, tOpts, idProperty, filterModel, setFilterModel, onPreferenceChange, toolbarItems, props.headerActions, customExportOptions, hasStaticData, localSortAndFilter, disablePagination, getTogglableColumns]);

    const initialState = useMemo(() => ({
        columns: {
            columnVisibilityModel: isServerGrouping
                ? { ...visibilityModel, [TREE_DATA_GROUPING_FIELD]: Boolean(serverGroupField) }
                : visibilityModel
        },
        pinnedColumns: pinnedColumns
    }), [visibilityModel, pinnedColumns, isServerGrouping, serverGroupField]);

    // initialState only applies on mount - keep the auto tree/group column's visibility in sync with serverGroupField on later renders too.
    useEffect(() => {
        if (!apiRef.current || !isServerGrouping) return;
        apiRef.current.setColumnVisibility(TREE_DATA_GROUPING_FIELD, Boolean(serverGroupField));
    }, [apiRef, isServerGrouping, serverGroupField]);

    const slots = useMemo(() => ({
        headerFilterMenu: false,
        toolbar: CustomToolbar,
        footer: Footer
    }), []);

    const gridSxProps = useMemo(() => [
        ...(Array.isArray(propsSx) ? propsSx : propsSx ? [propsSx] : []),
        ...(hasChildGrids ? [{
            '& .child-grid-selected-row': { backgroundColor: 'action.selected' },
            '& .child-grid-selected-row:hover': { backgroundColor: 'action.selected' }
        }] : [])
    ], [propsSx, hasChildGrids]);
    const outerBoxStyle = gridStyle || (hasChildGrids ? CHILD_GRIDS_FILL_STYLE : customStyle);

    const mainGridElement = (
        <Box style={outerBoxStyle}>
            {/* height: '100%' only takes effect when outerBoxStyle gives this a definite-height parent (e.g. a flex:1, minHeight:0 wrapper); otherwise the 80vh cap behaves as before. */}
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '80vh' }}>
                <DataGridPremium
                    {...gridProps}
                    sx={gridSxProps}
                    headerFilters={showHeaderFilters}
                    unstable_headerFilters={showHeaderFilters} //for older versions of mui
                    checkboxSelection={forAssignment || !!model.checkboxSelection}
                    loading={!data.records || isLoading}
                    className="pagination-fix"
                    onCellClick={onCellClickHandler}
                    onCellDoubleClick={onCellDoubleClick}
                    columns={gridColumns}
                    paginationModel={paginationModel}
                    pageSizeOptions={constants.pageSizeOptions}
                    onPaginationModelChange={setPaginationModel}
                    pagination={!disablePagination}
                    rowCount={rowCount}
                    rows={gridRows}
                    sortModel={sortModel}
                    paginationMode={paginationMode}
                    sortingMode={sortAndFilterMode}
                    filterMode={sortAndFilterMode}
                    processRowUpdate={processRowUpdate}
                    keepNonExistentRowsSelected
                    onSortModelChange={updateSort}
                    onFilterModelChange={updateFilters}
                    rowSelectionModel={rowSelectionModel}
                    onRowSelectionModelChange={handleRowSelectionModelChange}
                    filterModel={filterModel}
                    getRowId={getGridRowId}
                    onRowClick={handleChildRowClick}
                    slots={slots}
                    slotProps={slotProps}
                    hideFooterSelectedRowCount={rowsSelected}
                    density="compact"
                    disableDensitySelector={true}
                    apiRef={apiRef}
                    disableAggregation={gridProps?.disableAggregation ?? model?.disableAggregation ?? true}
                    disableRowGrouping={!clientRowGroupingEnabled}
                    disableRowSelectionOnClick={disableRowSelectionOnClick}
                    disablePivoting={disablePivoting}
                    filterDebounceMs={debounceTimeOut}
                    initialState={initialState}
                    {...(enableRowDetailPanel && {
                        getDetailPanelContent,
                        detailPanelExpandedRowIds,
                        onDetailPanelExpandedRowIdsChange: handleDetailPanelExpanded
                    })}
                    localeText={localeText}
                    showToolbar={true}
                    columnHeaderHeight={columnHeaderHeight}
                    hideFooter={!showFooter}
                    {...(isServerGrouping ? {
                        treeData: true,
                        getTreeDataPath,
                        groupingColDef
                    } : {
                        rowGroupingModel: activeGroupingFields,
                        onRowGroupingModelChange: setGroupingModel
                    })}
                    getRowClassName={getRowClassNameWithChildSelection}
                    columnGroupingModel={columnGroupingModel}
                />
            </Box>
            {errorMessage && (<DialogComponent open={!!errorMessage} onConfirm={clearError} onCancel={clearError} title="Info" hideCancelButton={true} > {errorMessage}</DialogComponent>)
            }
            {isDeleting && !errorMessage && (
                <DialogComponent open={isDeleting} onConfirm={handleDelete} onCancel={() => setIsDeleting(false)} title={tTranslate("Confirm Delete", tOpts)} okText={tTranslate("Ok", tOpts)} cancelText={tTranslate("Cancel", tOpts)}>
                    <DeleteContentText>
                        {tTranslate("Are you sure you want to delete", tOpts)} {record.name && <Tooltip style={{ display: "inline" }} title={record.name} arrow>
                            {record.name.length > 30 ? `${record.name.slice(0, 30)}...` : record.name}
                        </Tooltip>} ?
                    </DeleteContentText>
                </DialogComponent>)}
            {showAddConfirmation && (
                <DialogComponent
                    open={showAddConfirmation}
                    onConfirm={handleAddRecords}
                    onCancel={() => setShowAddConfirmation(false)}
                    title={tTranslate("Confirm Add", tOpts)}
                    okText={tTranslate("Ok", tOpts)}
                    cancelText={tTranslate("Cancel", tOpts)}
                >
                    <DeleteContentText>
                        {tTranslate("Are you sure you want to add", tOpts)} {rowSelectionModel.ids.size} {tTranslate("records", { count: rowSelectionModel.ids.size, ...tOpts })}?
                    </DeleteContentText>
                </DialogComponent>
            )}
        </Box>
    );

    return (
        <>
            {showPageTitle !== false && <PageTitle navigate={navigate} showBreadcrumbs={!hideBreadcrumb && !hideBreadcrumbInGrid}
                breadcrumbs={breadCrumbs} enableBackButton={navigateBack} breadcrumbColor={breadcrumbColor} model={model} />}
            {hasChildGrids ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', height: childGridsContainerHeight, gap: 2 }}>
                    <Box sx={{ flex: 3, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                        {mainGridElement}
                    </Box>
                    <Box sx={{ flex: 2, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', bgcolor: 'background.paper' }}>
                        {selectedChildRow ? (
                            <model.ChildGrids
                                parent={selectedChildRow}
                                relationFilters={childRelationFilters}
                                childGridStyle={CHILD_GRIDS_FILL_STYLE}
                                disableCellRedirect
                                tTranslate={tTranslate}
                                tOpts={tOpts}
                                sx={propsSx}
                                {...props.childGridProps}
                            />
                        ) : (
                            <Box sx={{ width: '100%', minWidth: 0 }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: 0 }}>
                                    <Tabs value={0} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                                        {model.relationItems.map(childModel => (
                                            <Tab key={childModel.name} label={tTranslate(childModel.listTitle || childModel.title, tOpts)} />
                                        ))}
                                    </Tabs>
                                </Box>
                                <Box sx={{ p: 3 }}>
                                    {tTranslate('Please select a record to see its details', tOpts)}
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            ) : mainGridElement}
        </>
    );
}, areEqual);

export default GridBase;

const renderersCache = new Map();

const renderers = {
    number: function ({ precision = 2, ifNaN = '-', prefix = '', suffix = '' } = {}) {
        const key = `number.${precision}:${ifNaN}:${prefix}:${suffix}`;
        if (!renderersCache.has(key)) {
            // react-doctor-disable-next-line js-hoist-intl -- already cached below, keyed on precision/prefix/suffix; can't hoist to module scope since those vary per column
            const numberFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: precision, maximumFractionDigits: precision });
            const formatter = function (value) {
                if (value === null || value === undefined || value === '') {
                    return ifNaN;
                }
                const numericValue = Number(value);
                if (isNaN(numericValue)) {
                    return ifNaN;
                }
                return `${prefix}${numberFormat.format(numericValue)}${suffix}`;
            }
            renderersCache.set(key, formatter);
        }
        return renderersCache.get(key);
    },
    stringWithDefaultOnEmpty: function (defaultValue = '') {
        const key = `stringWithDefaultOnEmpty:${defaultValue}`;
        if (!renderersCache.has(key)) {
            const formatter = function (value) {
                if (value === null || value === undefined || value === '') {
                    return defaultValue;
                }
                return value;
            }
            renderersCache.set(key, formatter);
        }
        return renderersCache.get(key);
    }
}

export { renderers };