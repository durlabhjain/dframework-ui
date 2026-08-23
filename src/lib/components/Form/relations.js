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
 * @param {Object} [params.extraParams] - Extra request parameters merged into the child grid's list/export calls
 * @param {Object} params.parent - Parent data
 * @param {Object} params.where - Conditions for the grid
 * @param {Array} params.models - List of available models
 * @param {boolean} [params.readOnly] - Renders the child grid read-only
 * @param {boolean} [params.disableCellRedirect] - Disables the default row-click navigation
 * @param {Function} [params.onCellClick] - Cell click handler
 * @param {Object} [params.gridStyle] - Style applied to the child grid container (also toggles fill-height layout)
 * @param {boolean} [params.showHeaderFilters] - Overrides the model's showHeaderFilters setting for this child grid
 * @param {Object} [params.sx] - MUI sx prop forwarded to the child grid
 */
const ChildGrid = memo(({ relation, parentFilters, extraParams, parent, where, models, readOnly, disableCellRedirect, onCellClick, gridStyle, showHeaderFilters, sx }) => {
  const modelConfigOfChildGrid = models.find(({ name }) => name === relation);
  // Child grids need their own hideBreadcrumb/showHeaderFilters even when several tabs share the
  // same underlying model, so we can't set those directly on modelConfigOfChildGrid - that instance
  // is shared (e.g. also used as a top-level Grid), and mutating it would leak into every other
  // consumer. Build a fully-formed clone in one step instead of creating-then-mutating, so there's
  // never a point where the clone exists without its overrides. Preserving the prototype chain (when
  // the source is already a UiModel) keeps subclass methods like createRequestPayload intact; memoizing
  // keeps ChildModel's identity stable across re-renders instead of rebuilding it every time.
  // (The hook must run before any early return, so the missing-model check happens inside it.)
  const ChildModel = React.useMemo(() => {
    if (!modelConfigOfChildGrid) return null;
    const overrides = { hideBreadcrumb: true, ...(showHeaderFilters !== undefined && { showHeaderFilters }) };

    if (modelConfigOfChildGrid instanceof UiModel) {
      return Object.assign(Object.create(Object.getPrototypeOf(modelConfigOfChildGrid)), modelConfigOfChildGrid, overrides);
    }
    return new UiModel({ ...modelConfigOfChildGrid, ...overrides });
  }, [modelConfigOfChildGrid, showHeaderFilters]);

  if (!ChildModel) return null;

  return (
    // model is passed explicitly (not just relying on ChildModel.Grid's own `model={this}`)
    // because Grid is a class-field arrow function: it closes over the `this` that existed when
    // modelConfigOfChildGrid was originally constructed, not over ChildModel. Without this explicit
    // prop, GridBase would silently receive the original shared model and drop our overrides.
    <ChildModel.Grid
      model={ChildModel}
      readOnly={readOnly}
      parentFilters={parentFilters}
      parent={parent}
      relationName={relation}
      where={where}
      isChildGrid={true}
      extraParams={extraParams}
      disableCellRedirect={disableCellRedirect}
      onCellClick={onCellClick}
      gridStyle={gridStyle}
      sx={sx}
    />
  );
});
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
