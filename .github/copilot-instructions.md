<!-- Generated from AGENTS.md; edit the source and run yarn instructions:sync. -->

# dframework-ui contributor instructions

`AGENTS.md` is the canonical repository-wide guidance. Edit this source;
`CLAUDE.md` imports it and Copilot instructions are generated. Scoped rules live
in `src/lib/AGENTS.md` and `tests/AGENTS.md`. Reference material lives in
`docs/CONTRIBUTING.md`, README and the existing component documentation.

## Scope and working process

- This is the stable React/MUI library `@durlabh/dframework-ui`, not a consuming
  application. Keep changes surgical; preserve public APIs and consumer behavior.
- Inspect status, history, existing branches/PRs and related implementations.
  Preserve unrelated work and use a dedicated branch/worktree. The default base
  is `main`; confirm a different requested base rather than substituting one.
- Understand affected components, imports and exports before editing. Explain
  material behavior changes and risks; ask when ambiguity blocks safe progress.
  Avoid unrelated refactors and commented-out code.
- Do not change peer ranges, add dependencies, rename/remove exports or introduce
  breaking behavior outside the user's authorized scope. Document approved
  breaking changes in `migration.md` and update affected usage documentation.
- Validate only touched projects and affected behavior. Instructions-only edits
  need `yarn instructions:check`; workflow/tooling edits also need workflow checks
  and their UI quality commands. Runtime/package changes need `yarn check`,
  relevant tests and `yarn build`, plus consumer verification when UI behavior
  changes. Do not require blanket builds of Playbook or other repositories.
- Do not merge, create/push release tags, publish, deploy or access production
  services without explicit user authorization. Draft PRs are reviewable work.

## Toolchain and dependencies

- Use CI's Node 24.21.0 (supported engines are in `package.json`) and the pinned
  Yarn 4.18.1. Install with `yarn install --immutable`; commit `yarn.lock`.
- Intentional dependency updates use `yarn install`; commit manifest and lock
  together. Keep one installer's lockfile. Dependency scripts stay disabled in
  `.yarnrc.yml`; preserve its age gate, Git-source restriction and narrow Vitest
  exceptions, plus `.npmrc`'s defensive script restriction.
- Runtime dependencies are peers, with explicit development copies for tests and
  separate development tooling. Do not classify every dependency as a peer or
  treat development vulnerabilities as irrelevant. Consumers lock their own graph.
- Run `yarn prepare` explicitly to initialize the reviewed Vite+ hooks. It uses
  `vp config --no-agent`; do not enable all dependency scripts or overwrite agent
  guidance to initialize hooks. Preserve the check and React Doctor commit gates.
- Use locally installed Vite+. `yarn dev`/`yarn start` watch the library package;
  they do not launch a browser application. Browser checks use a safe consumer.

## Checks and packaging

```text
yarn instructions:check
yarn check
yarn test
yarn build
```

- `vite.config.ts` owns checks, tests and packaging. Check warnings/errors fail;
  formatting is opt-in, and this JavaScript package does not generate declarations.
- `yarn lint:react:ci` runs the additional React Doctor gate. Do not weaken
  existing opt-outs or skip Git hooks to make a change pass.
- Preserve ES modules, ES2020 output, source maps, copied assets and external
  runtime peers. `src/lib/index.js` is the public source entry; `dist/index.js`
  is the generated distribution entry. The source manifest's `./index.js` paths
  apply at the distribution root. Do not commit `dist/` or `stats.html`.
- Release tags (`v*`) build and publish the existing `dist-release` branch and
  `dist-v*` tag with a minimal manifest, without development dependencies or
  lifecycle scripts. Source changes do not publish releases automatically.

## Instruction and workflow maintenance

- Run `yarn instructions:sync` after editing root/scoped sources; commit generated
  regular Claude bridges and Copilot files with them. `yarn instructions:check`
  checks drift without writing. Add new scopes to the generator explicitly.
- Quality/release workflows reuse the exact-commit Yarn setup action from
  dframework-node. Keep UI's Vite+ version explicit, quality permissions read-only,
  and existing publishing permissions/secrets confined to the release workflow.
