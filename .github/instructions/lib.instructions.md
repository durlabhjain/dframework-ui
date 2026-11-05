---
applyTo: "src/lib/**"
---

<!-- Generated from src/lib/AGENTS.md; edit the source and run yarn instructions:sync. -->

# UI library implementation guidance

These rules supplement root `AGENTS.md` for `src/lib/**`. Read relevant component
files and existing tests before changing behavior. README and
`docs/CONTRIBUTING.md` map the public API and detailed usage guides.

## Components, imports and styling

- Use functional React components and hooks. Keep component files `.js` (not a
  blanket conversion to `.jsx`); Vite+ handles source JSX. Use memoization where
  appropriate rather than refactoring working code merely to add it.
- Match local naming: PascalCase components, `index.js` entries,
  `crud-helper.js`, `StateProvider.js`; keep components self-contained.
- Group external imports before internal components/hooks/utilities. Use the
  existing `@/` source alias or established relative imports. Prefer default
  component exports and named utility exports, matching surrounding code.
- Prefer MUI `sx`, theme spacing and `styled()` for reusable styles; reserve inline
  styles for genuinely dynamic values. Check responsive behavior and accessibility.
- Add intended public APIs in `src/lib/index.js`; verify actual exports rather
  than assuming an internal component is public. Keep assets and external peers
  consistent with `vite.config.ts` and the release distribution contract.

## Grid and data operations

- `components/Grid/` is widely consumed and couples UiModel, CRUD helpers,
  transport, filtering/sorting/pagination, layouts/preferences, export and grouping.
  Inspect `ui-models.js`, `crud-helper.js`, `httpRequest.js` and affected helpers.
- Preserve CRUD permissions, errors, cancellation, debounced filters, lazy remote
  lookups, saved column order/layout, list-state restoration and CSV/Excel export.
  Check request counts and stale responses when changing effects or parameters.
- Preserve model/API endpoint configuration through StateProvider and current
  server pagination/defaults. See README for the single-level server-grouping
  request/response and leaf-row count contract; do not infer it from old examples.
- Preserve preference persistence and enums; consult `docs/GridPreferences.md`,
  `docs/defaultPreferenceEnums.md`, `docs/ToolbarFilters.md` and
  `docs/crud_helper_hooks.md` before related changes.
- HTTP/CRUD helpers perform transport/data work and propagate errors. Grid/Form
  own their local loading state. Direct callers own their loader, using local
  state or `showLoader(true)` with `finally { showLoader(false); }` as appropriate.

## Forms and relationships

- `components/Form/Form.js` is internal, not a public Form export; `Relations` is
  exported. Preserve Formik state, model-derived/custom Yup validation, conditional
  fields, dependent lookups, permissions and relationship behavior.
- `field-mapper.js` is authoritative for supported fields (including child grids,
  remote selects, upload/picker, JSON, tree, date/time and relationship fields).
  Do not copy a fixed field count or obsolete spelling into new instructions.
- Review `relations.js`, field components and mode/permission handling when
  changing forms. Test invalid, valid, read-only and denied mutations as relevant.

## Shared state, routing, notifications and localization

- Use `useStateContext()` and the documented StateProvider setters for global
  state, API endpoints, timezone/date formatting, localization and loader helpers;
  use local state for component-local concerns and `useRouter()` for routing.
- `SnackbarProvider` must wrap `StateProvider`; preserve notification behavior
  through `useSnackbar()` or StateProvider's documented message/error helpers.
  DialogComponent owns the shared confirm/cancel dialog contract.
- Preserve hook cleanup, event listeners, request cancellation and resize cleanup.
  Custom hooks live under `hooks/`; `useMobile` lives under `components/`.
- Use existing i18next/model translation helpers for user-facing text, dayjs for
  existing date behavior and StateProvider's configured timezone utilities.
- Locale data follows MUI's structure under `components/mui/locale/`. Preserve all
  current locales: English, Turkish, Spanish, Danish, German, Greek, French,
  Portuguese and Italian. Verify affected translations and formatting.

For runtime changes, run affected regression tests and exercise the built package
in a safe consuming application. Verify changed props, console errors, responsive
layout and affected CRUD/filter/preference/localization flows with representative
data. Report consumer/browser checks that could not be completed; a package watch
process or mocked test alone does not demonstrate browser integration.
