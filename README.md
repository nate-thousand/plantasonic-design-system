# Plantasonic Design System

Centralized design tokens, CSS variables, and Bootstrap theme for the [Plantasonic](https://github.com/nate-thousand/plantasonic) product ecosystem.

This repository is the single source of truth for visual identity — product apps consume this package instead of duplicating token definitions.

---

## Purpose

Plantasonic is a generative audiovisual instrument. This design system provides:

- **W3C Design Tokens JSON** — foundation primitives and dark/light theme semantics
- **CSS custom properties** — runtime theming via `--ds-*` and `--ps-*` variables
- **Bootstrap 5.0.2 theme** — SCSS variable overrides for component styling
- **Documentation** — brand guidelines, design principles, token architecture, component mapping

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

## Design System Showcase

The **Showcase** is the canonical visual reference for every Plantasonic application. It is documentation, design review tool, component explorer, and regression baseline — not a product app.

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

- **Foundations** — colors, typography, spacing, radius, shadows, motion
- **Bootstrap reference** — every Bootstrap 5.0.2 component with Plantasonic theme
- **Plantasonic components** — reference implementations (dock, stage, presets, transport, etc.)
- **Theme switcher** — dark/light with instant CSS variable reload
- **Token inspector** — click any demo to see tokens and computed styles
- **Search** — tokens, components, CSS variables, Bootstrap classes
- **Responsive preview** — desktop, tablet, mobile, resizable viewport
- **Accessibility** — focus, contrast, reduced motion preview

### Design validation workflow

Before implementing UI in any Plantasonic application:

1. Find the matching section in the showcase
2. Match token usage and layout patterns exactly
3. Switch themes and verify both dark and light
4. Compare your implementation side-by-side with the showcase
5. Do not ship UI that diverges without explicit design review

The showcase imports **only** from this repository (`css/variables.css`, `scss/bootstrap-theme.scss`, `tokens/*.json`). No Plantasonic app code is imported.

---

## Repository Structure

```text
plantasonic-design-system/
├── tokens/                  W3C Design Tokens JSON (source of truth)
├── css/variables.css        Generated CSS custom properties
├── scss/bootstrap-theme.scss
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
```

Also link `css/variables.css` for runtime theming in app-specific styles.

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
| [BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md) | Color identity, typography, visual hierarchy |
| [DESIGN_PRINCIPLES.md](./docs/DESIGN_PRINCIPLES.md) | Token-driven, Bootstrap, accessibility |
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
