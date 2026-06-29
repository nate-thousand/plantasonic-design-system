# Plantasonic Design System

Centralized design tokens, CSS variables, Bootstrap theme, Application Shell, CLI, and starter templates for the [Plantasonic](https://github.com/nate-thousand/plantasonic) product ecosystem.

**Current release:** v1.2.0

This repository is the single source of truth for visual identity — product apps consume this package instead of duplicating token definitions.

**Start here:** [Vision and Scope](./docs/VISION_AND_SCOPE.md) defines the purpose, boundaries, and decision filter for every change to this system.

---

## Purpose

Plantasonic is a generative audiovisual instrument. This design system is the visual operating system for the Plantasonic ecosystem — not another UI kit. It provides:

- **W3C Design Tokens JSON** — foundation primitives and dark/light theme semantics
- **CSS custom properties** — runtime theming via `--ds-*` and `--ps-*` variables
- **Bootstrap 5.0.2 theme** — SCSS variable overrides for component styling
- **Application Shell** — public API at `plantasonic-design-system/shell` for app chrome, navigation, commands, and theme
- **Developer platform** — CLI (`npx plantasonic create`), starter templates, code generation, quality gates
- **Documentation** — vision, brand guidelines, design principles, token architecture, component mapping

Engine aesthetics (ASCII visuals, audio) live in separate repositories. This package covers application chrome only.

---

## Installation

### Git submodule or clone

```bash
git clone https://github.com/nate-thousand/plantasonic-design-system.git
```

### npm (local path — for monorepo or adjacent checkout)

```json
{
  "dependencies": {
    "plantasonic-design-system": "file:../plantasonic-design-system"
  }
}
```

### npm (GitHub — after publish)

```bash
npm install github:nate-thousand/plantasonic-design-system
```

No npm dependencies are required to build this package — only Node.js 18+.

---

## Developer Platform

Create a new Plantasonic application in minutes:

```bash
npx plantasonic create my-app
npx plantasonic create my-app --template nextjs
npx plantasonic list
```

### Starter templates

All templates consume the public Application Shell — no copied layout code:

| Template | Stack |
| --- | --- |
| `react-vite` | Vite + React + Application Shell (default) |
| `react-bootstrap` | React + Bootstrap + Application Shell |
| `nextjs` | Next.js App Router + Application Shell |
| `electron` | Electron + Vite + Application Shell |

Each generated app includes `shell-config.ts`, `ShellHost`, design tokens, Bootstrap theme, shell SCSS, theme switching, command palette, and an example page. Customize navigation in shell config; add pages under `src/pages/` or `app/`.

Validate template builds: `npm run validate:templates`

### Build commands

```bash
npm run tokens:validate       # alias + reference checks
npm run tokens:build-css      # regenerate css/variables.css
npm run tokens:build-bootstrap # validate Bootstrap theme + optional showcase build
npm run generate              # types, SCSS, token/component docs
npm run docs                  # documentation index
npm run audit:bootstrap       # CSS var resolution + hardcoded value scan
npm run quality               # full validation gate
npm run test                  # automated tests
npm run release -- patch      # semver bump + release notes
npm run showcase              # alias for showcase:dev
npm run tokens:watch          # rebuild CSS on token changes
```

Platform documentation: [docs/platform/README.md](./docs/platform/README.md)

Bootstrap styling audit: [docs/platform/BOOTSTRAP_STYLING_AUDIT.md](./docs/platform/BOOTSTRAP_STYLING_AUDIT.md)

Navigation framework: [docs/platform/NAVIGATION_FRAMEWORK.md](./docs/platform/NAVIGATION_FRAMEWORK.md)

Application shell: [docs/platform/APPLICATION_SHELL.md](./docs/platform/APPLICATION_SHELL.md)

### Application Shell (public API)

```typescript
import {
  renderApplicationShell,
  bindApplicationShell,
  EXAMPLE_SHELL,
} from 'plantasonic-design-system/shell';
```

Navigation infrastructure is internal — apps configure `ApplicationShellConfig` only. See [APPLICATION_SHELL.md](./docs/platform/APPLICATION_SHELL.md).

---

## Design System Showcase

The **Showcase** is the canonical visual reference for every Plantasonic application. Implement every new design feature here first — before shipping product UI.

```bash
# Install showcase dependencies (first time)
cd showcase && npm install

# Development server
npm run showcase:dev

# Production build
npm run showcase:build

# Preview production build
npm run showcase:preview
```

Open `http://localhost:5173` after running `showcase:dev`.

### What the showcase includes

**Milestone 4 — Application Shell Framework (complete):**

- Full application operating system: app frame, workspace manager, dock framework, panel system, overlay manager, notification system, theme provider, command registry, keyboard framework, window state persistence
- Developer API — `ApplicationShellConfig` + `renderApplicationShell()`
- Styles: `scss/application-shell.scss` (extends navigation-framework)

**Milestone 3.5 — Navigation & Workspace Framework (complete):**

- Reusable app shell, sidebar, navigation rail, top bar, dock, inspector, workspace, panels
- Command palette (⌘K), fuzzy search, breadcrumbs, keyboard navigation
- Developer API — applications configure navigation with data; design system renders everything
- Styles: `scss/navigation-framework.scss`

**Milestone 2B — Bootstrap Styling Layer (complete):**

- Three-layer SCSS: `bootstrap-theme` → `bootstrap-components` → `bootstrap-utilities`
- Every Bootstrap component styled from tokens — no default Bootstrap blue/gray
- Full interaction states with showcase state labels

**Milestone 2 — Bootstrap Reference (complete):**

- 12 Bootstrap category pages with full interaction state coverage
- Bootstrap Overview with coverage checklist
- Theme switching (dark/light) without reload via css-theme-bridge

**Foundations + tooling:**

- Design tokens, colors, typography, spacing, radius, shadows, motion
- Token inspector, search, responsive viewport, WCAG contrast audit
- Developer panel with git commit and file locations

**Milestone 3 — Plantasonic components:** planned (knob, dock, stage, presets, etc.)

### Design validation workflow

Before implementing UI in any Plantasonic application:

1. Find or create the matching section in the showcase
2. Match token usage and layout patterns exactly
3. Switch themes and verify both dark and light
4. Use token inspector to confirm CSS variables
5. Compare your implementation side-by-side with the showcase
6. Do not ship UI that diverges without explicit design review

The showcase imports **only** from this repository (`css/variables.css`, `scss/bootstrap-theme.scss`, `tokens/*.json`). No Plantasonic app code is imported.

---

## Repository Structure

```text
plantasonic-design-system/
├── tokens/                  W3C Design Tokens JSON (source of truth)
├── css/variables.css        Generated CSS custom properties
├── scss/bootstrap-theme.scss       Bootstrap $variable overrides (compile-time)
├── scss/bootstrap-components.scss  Runtime component styling (CSS vars)
├── scss/bootstrap-utilities.scss   Utility class overrides
├── scripts/                 Token build pipeline
├── showcase/                Design system showcase app (Vite)
├── docs/                    Brand, principles, architecture
├── prompts/                 AI agent instructions
└── package.json
```

---

## Token Architecture

Three-layer model:

```text
foundation.tokens.json     Primitives — palette, spacing, typography, motion
        ↓
theme.dark.tokens.json     Semantic roles — dark instrument theme (default)
theme.light.tokens.json    Semantic roles — light variant
        ↓
css/variables.css            Runtime CSS custom properties
scss/bootstrap-theme.scss    Bootstrap SCSS variable overrides
```

| Prefix | Usage |
| ------ | ----- |
| `--ds-*` | Design system semantic tokens |
| `--ps-*` | Product layout tokens (nav height, dock, touch targets) |

See [docs/TOKEN_ARCHITECTURE.md](./docs/TOKEN_ARCHITECTURE.md) for naming rules and Figma sync guidance.

---

## Build Commands

`css/variables.css` is generated — do not edit manually.

```bash
# Validate token aliases (no file write)
npm run tokens:validate

# Regenerate css/variables.css
npm run tokens:build-css

# Full build — generate CSS, then validate
npm run build
```

After editing token JSON, run `npm run build` and commit both token files and regenerated CSS.

---

## Consuming the Design System

### CSS variables (any stack)

```html
<link rel="stylesheet" href="node_modules/plantasonic-design-system/css/variables.css" />
```

```css
.panel {
  background: var(--ds-color-surface-raised);
  color: var(--ds-color-text-primary);
  border-radius: var(--ds-radius-default);
}
```

### Bootstrap 5 (SCSS)

```scss
@import 'plantasonic-design-system/scss/bootstrap-theme';
@import 'bootstrap/scss/bootstrap';
@import 'plantasonic-design-system/scss/bootstrap-components';
@import 'plantasonic-design-system/scss/bootstrap-utilities';
```

Also link `css/variables.css` for runtime theming. `css-theme-bridge.scss` re-exports components + utilities for backward compatibility.

### Theme switching

```html
<html data-theme="dark">   <!-- default -->
<html data-theme="light">
```

### AI-assisted development

Use [prompts/APPLY_DESIGN_SYSTEM.md](./prompts/APPLY_DESIGN_SYSTEM.md) as agent instructions when building UI.

---

## Release Workflow

1. Update token JSON in `tokens/`
2. Run `npm run build` — validation must pass
3. Update `CHANGELOG.md` with version and date
4. Bump `version` in `package.json` (semver)
5. Commit token JSON + regenerated CSS together
6. Tag: `git tag v1.x.x`
7. Push to GitHub: `git push origin main --tags`

Pre-release checklist:

- [ ] `npm run build` passes
- [ ] `CHANGELOG.md` updated
- [ ] `package.json` version bumped
- [ ] No manual edits to `css/variables.css`

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

- Edit tokens in `tokens/` — not CSS directly
- Run `npm run build` before committing
- Keep changes scoped to design system assets

---

## Documentation

| Doc | Contents |
| --- | -------- |
| [VISION_AND_SCOPE.md](./docs/VISION_AND_SCOPE.md) | **Start here** — purpose, boundaries, decision filter, success criteria |
| [COLORS.md](./docs/COLORS.md) | Semantic color roles and values |
| [TYPOGRAPHY.md](./docs/TYPOGRAPHY.md) | Font families and type scale |
| [SPACING.md](./docs/SPACING.md) | Spacing scale and product layout tokens |
| [PATTERNS.md](./docs/PATTERNS.md) | App shell and interaction patterns |
| [BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md) | Color identity, typography, visual hierarchy |
| [DESIGN_PRINCIPLES.md](./docs/DESIGN_PRINCIPLES.md) | Implementation rules — tokens, motion, accessibility |
| [TOKEN_ARCHITECTURE.md](./docs/TOKEN_ARCHITECTURE.md) | Naming, layers, theme switching |
| [COMPONENT_MAPPING.md](./docs/COMPONENT_MAPPING.md) | Bootstrap class mapping |
| [APPLY_DESIGN_SYSTEM.md](./prompts/APPLY_DESIGN_SYSTEM.md) | AI agent instructions |

---

## Ecosystem

```text
plantasonic-design-system   →  tokens, theme, docs (this repo)
plantasonic                   →  product app (future consumer)
plantasia-sound-engine        →  audio capability
ascii-visual-engine           →  visual capability
```

Do not copy token source into product repos. Reference this package.

---

## License

[MIT](./LICENSE) © 2026 Nate Thousand
