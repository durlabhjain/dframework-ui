---
applyTo: "tests/**"
---

<!-- Generated from tests/AGENTS.md; edit the source and run yarn instructions:sync. -->

# UI test guidance

These rules supplement root `AGENTS.md` for `tests/**` and test selection for
implementation changes.

- Tests use React Testing Library and bundled Vitest through `vite-plus/test` in
  jsdom; run from the repository root. Existing files are `tests/**/*.test.jsx`.
- Use `yarn test` for the component regression suite. A targeted invocation such
  as `yarn test tests/grid-preferences.test.jsx` is useful while iterating; expand
  coverage when shared behavior changes or failures justify it.
- Keep `yarn check` warnings/errors blocking. Workflow/tooling/package changes
  also run `yarn test` and `yarn build`; do not build unrelated repositories.
- Mock transport/endpoints and external integrations; use safe fixture data, never
  production credentials or mutations. Avoid broad third-party mocks that hide
  the behavior under test; preserve real MUI behavior where the test relies on it.
- Test observable contracts, successful and failing/denied flows, cleanup and
  regressions. Prefer user interactions and accessible queries over internal state.
- Preserve existing coverage for permissions, form validation/date fields, grid
  columns/integer filters/multipliers/preferences/parameters/server grouping,
  nested child tabs, split sizing and mobile/resize cleanup.
- Runtime UI changes also need verification in a safe consuming application:
  changed props, console errors, responsiveness and affected CRUD/filter/sort/
  pagination/preferences/localization flows. Use representative data and record
  any unavailable manual checks. `yarn dev` is a package watcher, not a web server.
- Instruction-only changes need sync/drift verification. Do not create tests that
  merely duplicate reversible documentation changes.
