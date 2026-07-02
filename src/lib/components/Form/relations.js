import React, {
  memo,
  useCallback,
  useState
} from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import { UiModel } from "../Grid/ui-models";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
 *
 * Add/Edit is rendered inline (the child's own Form, switched in via local state)
 * rather than letting GridBase navigate — there's no standalone route registered
 * for child-only models like ProductPricing/ProductImage, and navigating away would
 * lose the parent Form. parentFilters[0] (the same filter used to scope the child
 * grid's list to the parent) doubles as the default value for the child's FK field
 * when adding a new record, via baseSaveData.
 */
const ChildGrid = memo(({ relation, parentFilters, parent, where, models, readOnly }) => {
  const [activeId, setActiveId] = useState(null);
  const modelConfigOfChildGrid = models.find(({ name }) => name === relation);
  if (!modelConfigOfChildGrid) return null;
  // Use the model instance directly when it is already a UiModel subclass (e.g. CsUiModel)
  // so its prototype methods (createRequestPayload, controllerType) are preserved.
  // Spreading a class instance into a plain object loses the prototype chain, causing
  // requests to fall back to the default Node.js API routing instead of the correct
  // controller (e.g. .ashx for CS models).
  const ChildModel = modelConfigOfChildGrid instanceof UiModel
    ? Object.assign(
      Object.create(Object.getPrototypeOf(modelConfigOfChildGrid)),
      modelConfigOfChildGrid,
      { hideBreadcrumb: true }
    )
    : new UiModel({ ...modelConfigOfChildGrid, hideBreadcrumb: true });
  if (!ChildModel) return null;

  const closeForm = useCallback(() => setActiveId(null), []);
  const openForm = useCallback(({ id }) => setActiveId(id ?? 0), []);

  if (activeId !== null) {
    const { field: fkField, value: parentIdValue } = parentFilters?.[0] || {};
    return (
      <ChildModel.Form
        models={models}
        readOnly={readOnly}
        detailPanelId={activeId}
        baseSaveData={fkField ? { [fkField]: parentIdValue } : {}}
        navigateBack={false}
        onCancel={closeForm}
        onSaveSuccess={closeForm}
      />
    );
  }

  return (
    <ChildModel.ChildGrid
      readOnly={readOnly}
      parentFilters={parentFilters}
      parent={parent}
      model={ChildModel}
      where={where}
      isChildGrid={true}
      setActiveRecord={openForm}
    />
  );
});
const EMPTY_WHERE = [];

/**
 * Relations component using MUI Tabs
 * Renders a tab for each relation, and a ChildGrid in each panel
 */
const Relations = React.memo(({ relations, parent, where = EMPTY_WHERE, models, relationFilters, readOnly }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabIndex} onChange={handleChange} aria-label="relations tabs">
          {relations.map((relation, idx) => {
            const modelConfigOfChildGrid = models.find(({ name }) => name === relation) || {};
            const label = modelConfigOfChildGrid.listTitle || modelConfigOfChildGrid.title || relation;
            return (
              <Tab
                key={relation}
                label={label}
                {...a11yProps(idx)}
              />
            );
          })}
        </Tabs>
      </Box>
      {relations.map((relation, idx) => {
        return (
          <CustomTabPanel value={tabIndex} index={idx} key={relation}>
            <ChildGrid
              readOnly={readOnly}
              relation={relation}
              models={models}
              parentFilters={relationFilters[relation] || []}
              parent={parent}
              where={where}
            />
          </CustomTabPanel>
        );
      })}
    </Box>
  );
});

export default Relations;
