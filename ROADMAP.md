# Roadmap

Milestone plan for the Plantasonic Design System.

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

## Phase 4 — CI & Quality Gates

**Status:** Next

- GitHub Actions workflow: validate + build on every PR
- Verify committed `css/variables.css` matches build output
- JSON schema validation for token files

---

## Phase 5 — App Integration

**Status:** Planned

- Wire into [Plantasonic app](https://github.com/nate-thousand/plantasonic) as dependency
- Remove duplicated token definitions from app repo
- Document migration path for existing consumers

---

## Phase 6 — Figma Sync

**Status:** Planned

- Port Figma import scripts from Plantasonic app
- `npm run tokens:import-json` for native Figma `.tokens.json` exports
- Figma MCP pull workflow documentation

---

## Phase 7 — Component Specs

**Status:** Planned

- Control factory patterns (Button, Slider, Toggle, etc.)
- Pattern specs: overlays, performance mode, instrument shell
- Static HTML component gallery or Storybook

---

## Phase 8 — Light Theme Validation

**Status:** Planned

- WCAG contrast audit for light theme
- Visual regression snapshots for both themes
- Theme toggle component spec

---

## Phase 9 — Figma Library

**Status:** Planned

- Publish Figma component library aligned to this package
- Code Connect mappings to Bootstrap classes
- Variable collections synced to `tokens/` files

---

## Non-Goals

- Application business logic or runtime orchestration
- Engine aesthetics (ASCII visuals, audio timbres)
- Engineering workflow templates
