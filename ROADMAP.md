# Roadmap

Milestone plan for the Plantasonic Design System package.

---

## Phase 1 — Package Extraction ✅

**Status:** Complete

- Standalone repo scaffold with tokens, CSS, SCSS, and docs
- Foundation + dark/light theme token files
- CSS custom properties for runtime theming
- Bootstrap 5.0.2 theme overrides
- Brand guidelines, design principles, token architecture, component mapping
- AI application prompt

---

## Phase 2 — Build Pipeline ✅

**Status:** Complete

- Token build script: `tokens/*.json` → `css/variables.css`
- Alias validation before write (`npm run tokens:validate`)
- npm scripts: `tokens:validate`, `tokens:build-css`, `build`

**Remaining:**

- CI verification that generated CSS matches committed output
- npm publish or git submodule consumption path for Plantasonic app

---

## Phase 3 — Figma Sync

**Status:** Planned

- Port Figma import scripts from Plantasonic app
- `npm run tokens:import-json` for native Figma `.tokens.json` exports
- Figma MCP pull workflow documentation

---

## Phase 4 — Component Specs

**Status:** Planned

- Document control factory patterns (Button, Slider, Toggle, etc.)
- Pattern specs: overlays, performance mode, instrument shell layout
- Storybook or static HTML component gallery

---

## Phase 5 — Light Theme Validation

**Status:** Planned

- WCAG contrast audit for light theme
- Visual regression snapshots for both themes
- Theme toggle component spec

---

## Phase 6 — Figma Library

**Status:** Planned

- Publish Figma component library aligned to this package
- Code Connect mappings to Bootstrap classes
- Variable collections synced to `tokens/` files

---

## Non-Goals

- Application business logic or runtime orchestration
- Engine aesthetics (ASCII visuals, audio timbres)
- Engineering workflow templates (see `ai-product-framework`)
