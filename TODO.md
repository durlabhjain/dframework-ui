# dframework-ui TODO

Reviewed against the current source on October 22, 2026. Completed work has been removed. Older reports that require a consuming application are explicitly listed as verification work, rather than confirmed defects.

## Validation and error handling

- [ ] Validate malformed `baseData` URL JSON in `src/lib/components/Form/Form.js` without crashing the form. Record identifiers may be strings; do not assume all valid IDs are numeric.
- [ ] Add client-side file size/type feedback in `Form/fields/fileUpload.js`, matching the model's `maxSize` and `formats`. Verify actual content and authorization on the server; an input's MIME value is not a security boundary.
- [ ] Decide whether JSON fields need a model-supplied schema and chip fields need additional value validation. Number/string min/max and custom Yup validation already exist in `Grid/ui-models.js`.
- [ ] Expand consistent user-facing error codes/messages and verify server details do not leak. The transport already filters long/HTML error messages.
- [ ] Review component prop contracts and JSDoc/types for public APIs. A TypeScript migration remains an optional design decision, not a prerequisite for the JavaScript package.

## Verification and test coverage

- [ ] Add focused coverage for CRUD serialization, request cancellation, lookup resolution, date/timezone conversion, and malformed input.
- [ ] Add consuming-app workflow tests for Grid + Form + StateProvider and routing. Component permission, preferences, child-tab, split-resizer, and resize-timer regression tests already run through Vite+.
- [ ] Reproduce the old reports about filter changes retaining the current page, exporting with all columns hidden, multi-step validation, cascading selections, and date/time `keepLocal` behavior before making behavioral changes.
- [ ] Verify keyboard navigation, focus on validation errors, accessible field descriptions, screen-reader feedback, and RTL behavior in a real consuming app. MUI already supplies grid virtualization, dialog focus handling, and many ARIA roles.
- [ ] Verify rendering/performance with representative large datasets and slow networks before adding memoization or more caches.

## Grid and form improvements

- [ ] Review remaining Grid/Form complexity when changing those paths; several helpers, preferences, toolbar, child-grid, and panel components have already been extracted.
- [ ] Review column memoization and processing cost with profiling. Grid requests already cancel superseded work, filter updates are debounced, remote lookups support lazy paging/search, and JSON edits are debounced.
- [ ] Consider lazy field/locale loading where consumer bundle analysis shows a benefit. Locale modules are still imported eagerly in `components/mui/locale/localization.js`.
- [ ] Improve empty/loading states and mobile usability where the consuming app needs them.
- [ ] Add upload progress feedback, richer field hints, or validation summaries where requested.
- [ ] Document/export/import preference files if that workflow is required. Saved grid layouts, column order, list-state restoration, and reset already exist; see [GridPreferences](docs/GridPreferences.md).
- [ ] Review remaining legacy MUI export APIs when upgrading MUI X.

## Documentation and maintenance

- [ ] Extend public component/prop examples beyond the existing [README](README.md) and [docs](docs).
- [ ] Document breaking changes and consumer migration steps with releases; keep minimum peer versions aligned with the manifest.
- [ ] Remove commented/debug code or resolve naming inconsistencies when touching the affected code; configured unused-variable and import checks already run.
- [ ] Review untranslated strings and locale/number/date formatting in consuming apps. Translation content and backend validation belong to the application's existing translation workflow.
- [ ] Decide whether formatting should become mandatory. Oxfmt is available through Vite+; formatting is currently opt-in.
- [ ] Consider PR-level CI, bundle-size budgets, and release automation beyond the existing distribution workflow. Checks, tests, builds, source maps, and commit hooks are already configured.

## Feature ideas requiring product or API decisions

These remain proposals, not scheduled defects or a promised version roadmap.

- [ ] Bulk editing/deletion and shared filter URLs; row selection, export, filters, saved preferences, and grouping already exist.
- [ ] Inline editing, draft autosave/restore, reusable form templates, or richer conditional/dependent field configuration.
- [ ] Optional Community/lite package or alternate module formats, if a concrete consumer needs them. The supported distribution remains ESM with Premium peers.
- [ ] Shared dark-mode/RTL theming contracts, audit-log UI, offline synchronization, or realtime/collaboration features.
- [ ] Storybook, contribution templates, or changelog automation if the team adopts those workflows.

Do not restore the old claims that there are no tests, linting, CI, source maps, request cancellation, Excel export, row grouping, or dayjs support. These capabilities are implemented. Creating a dayjs value is not by itself a memory leak, React text inputs are not inherently XSS sinks, and using a ref for imperative API configuration is not inherently a bug.
