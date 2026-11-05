# Contributing and coding-agent instructions

Root `AGENTS.md` owns shared working rules; `src/lib/AGENTS.md` owns UI contracts
and `tests/AGENTS.md` owns validation guidance. Regular `CLAUDE.md` files import
their matching source. Regular repository/path-specific Copilot instructions are
generated mirrors; Windows clones do not need symlink privileges.

Edit the source, run `yarn instructions:sync`, then `yarn instructions:check`,
and commit both. CI checks drift without rewriting files. Add scopes explicitly
to `scripts/sync-agent-instructions.mjs`. The obsolete, nonstandard
`.github/claude-instructions.md` has been replaced by the standard bridges.
Verify loaded instructions in your client when configuring a new environment.

## Project and reference map

| Area | Location and reference |
| --- | --- |
| Public API | `src/lib/index.js`; README usage and exports |
| Grid, UiModel, CRUD, transport, preferences | `src/lib/components/Grid/`; [preferences](GridPreferences.md), [preference enums](defaultPreferenceEnums.md), [toolbar filters](ToolbarFilters.md), [CRUD hooks](crud_helper_hooks.md) |
| Internal Form and relationship fields | `src/lib/components/Form/`; `field-mapper.js` and `relations.js` |
| Global state, routing, loaders, dates, endpoints | `src/lib/components/useRouter/`; [StateProvider](StateProvider.md) |
| Snackbar, Dialog, HelpModal, PageTitle, Typography | Their directories under `src/lib/components/`; README usage |
| Shared hooks and utilities | `src/lib/hooks/`, `src/lib/components/utils.js`, `src/lib/components/useMobile.js` |
| MUI locale dictionaries | `src/lib/components/mui/locale/` |
| Assets and packaging | `src/lib/assets/`, `vite.config.ts` |
| Regression tests | `tests/`, `tests/AGENTS.md` |
| Breaking changes and planned work | [migration](../migration.md), [TODO](../TODO.md) |

Read the relevant implementation and docs before changes, identify affected
consumers and exports, preserve existing patterns, add translation keys when
needed, and document approved API changes. README contains current Grid,
StateProvider, loader and server-grouping examples; do not duplicate stale API
snippets or package versions in tool-specific files. `package.json` and its lock
are authoritative for versions, peer ranges and supported engines.

## Development and validation

Use the pinned Yarn installer and explicit `yarn prepare` to configure reviewed
hooks after installation. `yarn check`, `yarn test` and `yarn build` run the UI
quality/build pipeline. `yarn lint:react:ci` adds the React Doctor gate.
`yarn dev`/`yarn start` rebuild the library on changes; browser verification needs
a consuming application. Do not expect a localhost:3000 application server.

Builds preserve ES modules, ES2020, `dist/index.js`, source maps, assets and
external peers. Set `VISUALIZER_OPEN=true` only for intentional bundle analysis;
routine builds skip `stats.html`. Review build output and imports for accidental
bundling before adding peers. Missing peers must be investigated, not dismissed
as harmless warnings. Keep `dist/`, `stats.html` and `node_modules/` untracked;
commit the Yarn lockfile with dependency changes.

For a UI issue, check endpoint/CORS configuration, Yup/UiModel field definitions,
required provider nesting and initialized translation data. For build problems,
check imports, JSX transforms and externalization. Only clear a verified local
cache or stop a process you own; do not remove shared dependencies or kill an
unrelated service to troubleshoot a library watcher.

## CI and release boundaries

Both workflows reuse dframework-node's immutable Yarn setup action at a full
commit SHA, with UI's Vite+ version passed explicitly. The foundation verifies
the package manager and installs the committed lockfile. Node and UI retain
their own quality commands and runners. Review the source before updating the
shared-action pin; merge its source PR before merging the dependent UI PR.

Quality uses `contents: read`, timeout and stale-run cancellation. Release keeps
its dedicated self-hosted runner, existing `contents: write` and
`VP_GIT_HOOKS=0`; no new secrets or cross-owner private access are required. Tag
publishing is not run as a PR check. A release builds the UI, writes a minimal
manifest without development dependencies/lifecycle scripts, and publishes the
existing `dist-release` branch with a `dist-v*` tag. Do not release without the
user's explicit instruction; source changes alone do not publish a version.

Playbook must refer to a verified published framework distribution/version after
the user merges and releases it, not an assumed future tag.
