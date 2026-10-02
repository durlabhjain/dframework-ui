import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ChildGrid, CustomTabPanel, a11yProps } from "../Form/relations";

const EMPTY_WHERE = [];

/**
 * Child grid tabs for a parent *grid* - the `relations: { items: [...] }` form, resolved into
 * model.relationItems and rendered below the parent grid once a row is selected (see GridBase).
 *
 * Kept separate from Form/relations' Relations, which serves the legacy `relations: ['Name']` array
 * form on a form page. The two look alike but their `parent` differs - a selected row here, the
 * parent model's name there - so this one can branch on it and that one can't.
 *
 * The tab strip always renders: which relations exist stays visible even with no row selected, or
 * with the panel dragged all the way shut, so the available tabs are always discoverable.
 *
 * @param {Object} props
 * @param {string[]} props.relations - Names of the related models to render as tabs
 * @param {Object} props.models - Resolved relation models (matched against `relations` by name)
 * @param {Object|null} props.parent - The selected parent row; null renders `emptyMessage` in place of the grids
 * @param {Object} props.relationFilters - Per-relation filters, keyed by relation name
 * @param {Array} [props.where] - Conditions applied to every child grid
 * @param {boolean} [props.readOnly] - Renders every child grid read-only
 * @param {boolean} [props.disableCellRedirect] - Disables the default row-click navigation
 * @param {Function} [props.onCellClick] - Cell click handler, forwarded to every child grid
 * @param {Object} [props.childGridStyle] - Style applied to every child grid container; also enables fill-height tab panels
 * @param {boolean} [props.showChildHeaderFilters] - Overrides showHeaderFilters on every child grid
 * @param {Object} [props.extraParams] - Extra request parameters merged into every child grid's list/export calls
 * @param {Object} [props.sx] - MUI sx prop forwarded to every child grid
 * @param {boolean} [props.collapsed] - Set by GridBase once the splitter is dragged down to the tab strip; drops the panels
 * @param {Function} [props.onExpandRequest] - Called when a tab is picked while collapsed, so the caller can reopen the panel
 * @param {React.ReactNode} [props.emptyMessage] - Shown in place of the child grids when no row is selected
 * @param {Function} [props.tTranslate] - Translation function used for tab labels
 * @param {Object} [props.tOpts] - Options passed to tTranslate
 */
const ChildGridTabs = React.memo(({ relations, models, parent, relationFilters, where = EMPTY_WHERE, readOnly, disableCellRedirect, onCellClick, childGridStyle, showChildHeaderFilters, extraParams, sx, collapsed = false, onExpandRequest, emptyMessage, tTranslate = (key) => key, tOpts = {} }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
    // Picking a tab while the panel is dragged shut is a request to see that grid, so reopen it.
    if (collapsed) onExpandRequest?.();
  };

  const showPanels = !collapsed && !!parent;
  // childGridStyle means the consumer wants child grids to fill/scroll within a bounded parent, so
  // make this container and the active tab panel flex-participate too. With no panel showing there
  // is nothing to fill, and the tab strip should take only its natural height so the space goes
  // back to the parent grid above it.
  const fillHeight = !!childGridStyle && showPanels;

  return (
    <Box sx={{ width: '100%', minWidth: 0, ...(fillHeight && { display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }) }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', minWidth: 0, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="child grid tabs" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile sx={{ flex: 1, minWidth: 0 }}>
          {relations.map((relation, idx) => {
            const childModel = models.find(({ name }) => name === relation) || {};
            const label = childModel.listTitle || childModel.title || relation;
            return <Tab key={relation} label={tTranslate(label, tOpts)} {...a11yProps(idx)} />;
          })}
        </Tabs>
      </Box>
      {showPanels
        ? relations.map((relation, idx) => (
          <CustomTabPanel value={tabIndex} index={idx} key={relation} fillHeight={fillHeight}>
            <ChildGrid
              relation={relation}
              models={models}
              parent={parent}
              parentFilters={relationFilters?.[relation] || []}
              where={where}
              readOnly={readOnly}
              disableCellRedirect={disableCellRedirect}
              onCellClick={onCellClick}
              gridStyle={childGridStyle}
              showHeaderFilters={showChildHeaderFilters}
              extraParams={extraParams}
              sx={sx}
            />
          </CustomTabPanel>
        ))
        : !collapsed && <Box sx={{ p: 3 }}>{emptyMessage}</Box>}
    </Box>
  );
});

export default ChildGridTabs;
