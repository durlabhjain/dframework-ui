import React, { memo } from 'react';
import { UiModel } from '../Grid/ui-models';

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

export default ChildGrid;
