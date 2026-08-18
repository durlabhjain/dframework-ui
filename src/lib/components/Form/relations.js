import React, {
  memo,
  useState
} from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import { UiModel } from "../Grid/ui-models";

function CustomTabPanel(props) {
  const { children, value, index, fillHeight, ...other } = props;
  const isActive = value === index;
  return (
    <div
      role="tabpanel"
      hidden={!isActive}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={fillHeight && isActive ? { display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 } : undefined}
      {...other}
    >
      {isActive && <Box sx={fillHeight ? { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' } : { p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

/**
 * Memoized ChildGrid Component
 * @param {Object} params - Parameters for rendering the child grid
 * @param {string} params.relation - Name of the related model
 * @param {Object} params.parentFilters - Filters to apply to the parent
 * @param {Object} params.parent - Parent data
 * @param {Object} params.where - Conditions for the grid
 * @param {Array} params.models - List of available models
 */
const ChildGrid = memo(({ relation, parentFilters, parent, where, models, readOnly, disableCellRedirect, onCellDoubleClickOverride, onCellClick, gridStyle, showHeaderFilters }) => {
  const modelConfigOfChildGrid = models.find(({ name }) => name === relation);
  if (!modelConfigOfChildGrid) return null;
  // Memoize derived model/config so ChildModel.ChildGrid component identity stays stable
  // across re-renders (UiModel defines ChildGrid as an instance field).
  const { config, ChildModel } = React.useMemo(() => {
    const baseConfig = modelConfigOfChildGrid instanceof UiModel
      ? Object.assign(Object.create(Object.getPrototypeOf(modelConfigOfChildGrid)), modelConfigOfChildGrid)
      : { ...modelConfigOfChildGrid };

    baseConfig.hideBreadcrumb = true;
    if (showHeaderFilters !== undefined) {
      baseConfig.showHeaderFilters = showHeaderFilters;
    }

    const modelInstance = baseConfig instanceof UiModel ? baseConfig : new UiModel(baseConfig);
    return { config: baseConfig, ChildModel: modelInstance };
  }, [modelConfigOfChildGrid, showHeaderFilters]);
  if (!ChildModel) return null;

  return (
    <ChildModel.Grid
      readOnly={readOnly}
      parentFilters={parentFilters}
      parent={parent}
      relationName={relation}
      model={config}
      where={where}
      isChildGrid={true}
      disableCellRedirect={disableCellRedirect}
      onCellDoubleClickOverride={onCellDoubleClickOverride}
      onCellClick={onCellClick}
      gridStyle={gridStyle}
    />
  );
});
const EMPTY_WHERE = [];

/**
 * Relations component using MUI Tabs
 * Renders a tab for each relation, and a ChildGrid in each panel
 */
const Relations = React.memo(({ relations, parent, where = EMPTY_WHERE, models, relationFilters, readOnly, disableCellRedirect, onCellDoubleClickOverrides, onCellClickOverrides, childGridStyle, showChildHeaderFilters, tTranslate = (key) => key, tOpts = {} }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };
  // childGridStyle means the consumer wants child grids to fill/scroll within a bounded parent, so make this container and the active tab panel flex-participate too.
  const fillHeight = !!childGridStyle;

  return (
    <Box sx={{ width: '100%', minWidth: 0, ...(fillHeight && { display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }) }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: 0 }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="relations tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
          {relations.map((relation, idx) => {
            const modelConfigOfChildGrid = models.find(({ name }) => name === relation) || {};
            const label = modelConfigOfChildGrid.listTitle || modelConfigOfChildGrid.title || relation;
            return (
              <Tab
                key={relation}
                label={tTranslate(label, tOpts)}
                {...a11yProps(idx)}
              />
            );
          })}
        </Tabs>
      </Box>
      {relations.map((relation, idx) => (
        <CustomTabPanel value={tabIndex} index={idx} key={relation} fillHeight={fillHeight}>
          <ChildGrid
            readOnly={readOnly}
            relation={relation}
            key={relation}
            models={models}
            parentFilters={relationFilters[relation] || []}
            parent={parent}
            where={where}
            disableCellRedirect={disableCellRedirect}
            onCellDoubleClickOverride={onCellDoubleClickOverrides?.[relation]}
            onCellClick={onCellClickOverrides?.[relation]}
            gridStyle={childGridStyle}
            showHeaderFilters={showChildHeaderFilters}
          />
        </CustomTabPanel>
      ))}
    </Box>
  );
});

export default Relations;
