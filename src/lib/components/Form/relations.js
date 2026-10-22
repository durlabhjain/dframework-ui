import React, { useState } from 'react';
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import ChildGrid from './ChildGrid';
import CustomTabPanel from './CustomTabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
const EMPTY_WHERE = [];

/**
 * Relations component using MUI Tabs
 * Renders a tab for each relation, and a ChildGrid in each panel
 * @param {Object} props
 * @param {string[]} props.relations - Names of the related models to render as tabs
 * @param {Object} props.parent - Parent row data, passed through to each child grid
 * @param {Array} [props.where] - Conditions applied to every child grid
 * @param {Array} props.models - List of available models (matched against `relations` by name)
 * @param {Object} props.relationFilters - Per-relation filters, keyed by relation name (required - indexed directly without a fallback)
 * @param {boolean} [props.readOnly] - Renders every child grid read-only
 * @param {boolean} [props.disableCellRedirect] - Disables the default row-click navigation on every child grid
 * @param {Function} [props.onCellClick] - Cell click handler, forwarded to every child grid
 * @param {Object} [props.childGridStyle] - Style applied to every child grid container; also enables fill-height tab panels
 * @param {boolean} [props.showChildHeaderFilters] - Overrides showHeaderFilters on every child grid
 * @param {Object} [props.extraParams] - Extra request parameters merged into every child grid's list/export calls
 * @param {Object} [props.sx] - MUI sx prop forwarded to every child grid
 * @param {Function} [props.tTranslate] - Translation function used for tab labels
 * @param {Object} [props.tOpts] - Options passed to tTranslate
 */
const Relations = React.memo(({ relations, parent, where = EMPTY_WHERE, models, relationFilters, readOnly, disableCellRedirect, onCellClick, childGridStyle, showChildHeaderFilters, extraParams, sx, tTranslate = (key) => key, tOpts = {} }) => {
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
            onCellClick={onCellClick}
            gridStyle={childGridStyle}
            showHeaderFilters={showChildHeaderFilters}
            extraParams={extraParams}
            sx={sx}
          />
        </CustomTabPanel>
      ))}
    </Box>
  );
});

export default Relations;

// Named exports so the grid's own child-grid tabs (Grid/ChildGridTabs) can reuse these without
// duplicating them. Relations itself stays the form's component - nothing here changes for it.
export { ChildGrid, CustomTabPanel, a11yProps };
