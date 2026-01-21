import React from 'react';
import Button from '@mui/material/Button';
import { Toolbar, ColumnsPanelTrigger, FilterPanelTrigger } from '@mui/x-data-grid-premium';
import { Badge, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import GridPreferences from './GridPreference';
import { CustomExportButton } from './helper';
import ToolbarFilters from './ToolbarFilters';

const ButtonWithMargin = styled(Button)({
    margin: '6px'
});

const GridToolBar = styled(Toolbar)({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '1.5rem',
    flexWrap: 'wrap',
    whiteSpace: 'nowrap',
    minHeight: 'auto',
    borderBottom: 'none'
});

const CustomToolbar = function (props) {
    const {
        model,
        data,
        currentPreference,
        isReadOnly,
        canAdd,
        forAssignment,
        showAddIcon,
        onAdd,
        selectionApi,
        selectedSet,
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
        tTranslate,
        tOpts,
        filterModel,
        onPreferenceChange,
        toolbarItems,
        gridColumns,
        setFilterModel,
        dataRef
    } = props;

    const addText = model.customAddText || (model.title ? `Add ${model.title}` : 'Add');
    const activeFilterCount = filterModel?.items?.length || 0;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px'
            }}
        >
            <div>
                {model.gridSubTitle && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }}> {tTranslate(model.gridSubTitle, tOpts)}</Typography>}
                {currentPreference && model.showPreferenceInHeader && <Typography className="preference-name-text" variant="h6" component="h6" textAlign="center" sx={{ ml: 1 }} >{tTranslate('Applied Preference', tOpts)}: {currentPreference}</Typography>}
                {(isReadOnly || (!canAdd && !forAssignment)) && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }} > {!canAdd || isReadOnly ? "" : model.title}</Typography>}
                {!forAssignment && canAdd && !isReadOnly && <ButtonWithMargin startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAdd} size="medium" variant="contained" >{tTranslate(addText, tOpts)}</ButtonWithMargin>}
                {(selectionApi.length && data.records.length) ? (
                    <ButtonWithMargin
                        onClick={selectAll}
                        size="medium"
                        variant="contained"
                    >
                        {selectedSet.size === data.records.length ? tTranslate("Deselect All", tOpts) : tTranslate("Select All", tOpts)}
                    </ButtonWithMargin>) :
                    <></>
                }
                {available && <ButtonWithMargin startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAssign} size="medium" variant="contained"  >{tTranslate("Assign", tOpts)}</ButtonWithMargin>}
                {assigned && <ButtonWithMargin startIcon={!showAddIcon ? null : <RemoveIcon />} onClick={onUnassign} size="medium" variant="contained"  >{tTranslate("Remove", tOpts)}</ButtonWithMargin>}
            </div>
            <GridToolBar {...props}>
                {effectivePermissions.showColumnsOrder && (
                    <ColumnsPanelTrigger
                        render={(triggerProps) => (
                            <Button
                                {...triggerProps}
                                startIcon={<ViewColumnIcon />}
                                size="small"
                                variant="text"
                            >
                                {tTranslate("COLUMNS", tOpts)}
                            </Button>
                        )}
                    />
                )}
                {effectivePermissions.filter && (<>
                    <FilterPanelTrigger
                        render={(triggerProps) => (
                            <Button
                                {...triggerProps}
                                startIcon={
                                    <Badge badgeContent={activeFilterCount} color="primary">
                                        <FilterListIcon />
                                    </Badge>
                                }
                                size="small"
                                variant="text"
                            >
                                {tTranslate("FILTERS", tOpts)}
                            </Button>
                        )}
                    />
                    <Button startIcon={<FilterListOffIcon />} onClick={clearFilters} size="small">{tTranslate("CLEAR FILTER", tOpts)}</Button>
                </>)}

                <ToolbarFilters
                    gridColumns={gridColumns}
                    apiRef={apiRef}
                    filterModel={filterModel}
                    setFilterModel={setFilterModel}
                    tTranslate={tTranslate}
                    tOpts={tOpts}
                    dataRef={dataRef}
                />

                {effectivePermissions.export && (
                    <CustomExportButton handleExport={handleExport} showPivotExportBtn={model.pivotApi} exportFormats={model.exportFormats || {}} tTranslate={tTranslate} tOpts={tOpts} />
                )}
                {toolbarItems}
                {preferenceKey &&
                    <GridPreferences
                        gridRef={apiRef}
                        onPreferenceChange={onPreferenceChange}
                        t={tTranslate}
                        tOpts={tOpts}
                    />
                }
            </GridToolBar>
        </div >
    );
};

export default CustomToolbar;
