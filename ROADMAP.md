# Roadmap

Milestone plan for the Plantasonic Design System.

Success is defined in [docs/VISION_AND_SCOPE.md](./docs/VISION_AND_SCOPE.md#success-criteria): every Plantasonic application feels related, Figma/tokens/CSS/components stay synchronized, and the design language scales coherently.

---

## Phase 1 — Package Extraction ✅

**Status:** Complete

- Standalone repo with tokens, CSS, SCSS, and docs
- Foundation + dark/light theme token files
- Bootstrap 5.0.2 theme overrides
- Brand guidelines, design principles, token architecture, component mapping

---

## Phase 2 — Build Pipeline ✅

**Status:** Complete

- Token build: `tokens/*.json` → `css/variables.css`
- Alias validation (`npm run tokens:validate`)
- npm scripts: `tokens:validate`, `tokens:build-css`, `build`

---

## Phase 3 — GitHub Publish ✅

**Status:** Complete

- Production README, LICENSE, CONTRIBUTING
- Package metadata for npm/GitHub consumption
- Initial public release (v1.0.0)

---

## Phase 4 — Design System Showcase ✅

**Status:** Complete (Milestone 1 — foundations + shell)

- Standalone Vite showcase in `showcase/`
- Foundations, theme switcher, token inspector, search, responsive viewport
- Design validation workflow documented

---

## Phase 4b — Showcase Milestone 2B: Bootstrap Styling Layer ✅

**Status:** Complete — [styling audit](./docs/platform/BOOTSTRAP_STYLING_AUDIT.md) passed 2026-06-28

- Three-layer Bootstrap architecture: `bootstrap-theme` → `bootstrap-components` → `bootstrap-utilities`
- Generated compile-time token SCSS (`_bootstrap-compile.generated.scss`) — no hardcoded theme values
- Full interaction states (default, hover, focus, active, selected, disabled) for all Bootstrap components
- Showcase updated with state labels; dark + light theme validation
- **Plantasonic app integration deferred** until styling validated in showcase
- Audit: `docs/platform/BOOTSTRAP_STYLING_AUDIT.md` — 12/12 categories pass; `npm run audit:bootstrap`

---

## Phase 4b — Showcase Milestone 2: Bootstrap Reference ✅

**Status:** Complete

- 12 Bootstrap category pages (buttons, forms, selection, navigation, cards, lists, tables, feedback, disclosure, floating UI, dialogs, utilities)
- Every component demonstrates interaction states (default, hover, focus, active, disabled)
- Expanded `scss/css-theme-bridge.scss` — ghost buttons, pills, validation, alerts, badges, popovers
- Bootstrap overview with coverage checklist and validation criteria
- Plantasonic components deferred to Milestone 3

---

## Phase 4d — Developer Platform ✅

**Status:** Complete (Milestone 4)

- `plantasonic` CLI — `npx plantasonic create <name> [--template]`
- Starter templates: `react-vite`, `react-bootstrap`, `nextjs`, `electron` — all consume public `plantasonic-design-system/shell` (no copied layouts)
- Template validation: `npm run validate:templates`
- Code generation: CSS vars, SCSS aliases, TypeScript types, token/component docs
- Build pipeline: `generate`, `docs`, `quality`, `test`, `release`
- Platform documentation in `docs/platform/`
- Automated validation: tokens, themes, bootstrap coverage, accessibility contrast
- Repository standards: AGENTS.md, SECURITY.md, CODE_OF_CONDUCT.md

---

## Phase 4c — Showcase Milestone 3: Plantasonic Components

**Status:** In progress

- Native `.ps-*` instrument components (controls, transport, MIDI, musical, presets, layout, feedback, visual)
- `scss/plantasonic-components.scss` — token-driven component stylesheet
- Showcase sections per category

---

## Phase 4c — Showcase Milestone 3.5: Navigation & Workspace Framework ✅

**Status:** Complete

- Reusable app shell, sidebar, navigation rail, top bar, dock, inspector, workspace layouts, panels
- Command palette (⌘K) and fuzzy search framework
- Developer configuration API — applications provide nav data, design system renders
- `scss/navigation-framework.scss` + showcase Navigation section (15 interactive pages)
- Documentation: [NAVIGATION_FRAMEWORK.md](./docs/platform/NAVIGATION_FRAMEWORK.md)

---

## Phase 4e — Application Shell Framework ✅

**Status:** Complete (Showcase Milestone 4 + public API + template migration)

- Application Shell — app frame, workspace manager, layout engine, dock framework, panel system
- Overlay manager, notification system, theme provider (dark/light/auto), command registry, keyboard framework
- Window state persistence (sidebar, dock, theme, workspace layout)
- Public package export: `plantasonic-design-system/shell` — `renderApplicationShell()`, `bindApplicationShell()`
- All starter templates consume the public shell API (no copied layouts)
- `scss/application-shell.scss` + showcase Application Shell section (11 interactive pages)
- Documentation: [APPLICATION_SHELL.md](./docs/platform/APPLICATION_SHELL.md)
- Builds on M3.5 Navigation & Workspace Framework

---

## Phase 5 — CI & Quality Gates

**Status:** Next

- GitHub Actions: validate + build on every PR
- Verify committed `css/variables.css` matches build output
- Showcase build in CI

---

## Phase 6 — App Integration ✅

**Status:** Complete (Plantasonic app v0.2.2 — first consumer)

- [Plantasonic app](https://github.com/nate-thousand/plantasonic) consumes `plantasonic-design-system/shell`
- Public `renderApplicationShell()` + `bindApplicationShell()` API in production use
- No duplicated token definitions in app repo

---

## Phase 7 — Figma Sync

**Status:** Planned

- Port Figma import scripts from Plantasonic app
- `npm run tokens:import-json` for native Figma `.tokens.json` exports
- Figma MCP pull workflow documentation

---

## Phase 8 — Light Theme Validation

**Status:** Planned

- WCAG contrast audit for light theme
- Visual regression snapshots via showcase
- Theme toggle component spec

---

## Phase 10 — Release & Deployment ✅

**Status:** Complete (v1.2.1)  
**Date:** 2026-06-28

- [x] Public Application Shell API (`plantasonic-design-system/shell`)
- [x] Plantasonic app is first consumer (Phase 6 integration)
- [x] Showcase deployed to Vercel — https://plantasonic-design-system.vercel.app
- [x] Version tags v1.2.0, v1.2.1 pushed to GitHub
- [x] 32 automated tests passing; quality gates passing

### Known issues

- Bootstrap SCSS deprecation warnings (Bootstrap 5.0.2 + Dart Sass 3)
- No npm registry publish yet — consume via GitHub or `file:` dependency
- CI/GitHub Actions pipeline not yet configured

### Next milestone

Phase 5 — CI/CD pipeline, npm publish, Figma library (Phase 9)

---

## Phase 9 — Figma Library

**Status:** Planned

- Publish Figma component library aligned to this package
- Code Connect mappings to Bootstrap classes
- Variable collections synced to `tokens/` files

---

## Non-Goals

Per [VISION_AND_SCOPE.md](./docs/VISION_AND_SCOPE.md#scope-boundaries):

- An application, dashboard, page builder, or theme gallery (the showcase is documentation tooling, not the design system)
- A collection of disconnected components or style experiments
- Application business logic or runtime orchestration
- Engine aesthetics (ASCII visuals, audio timbres)
- Engineering workflow templates
