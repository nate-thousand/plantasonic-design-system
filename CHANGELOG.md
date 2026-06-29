# Changelog

All notable changes to the Plantasonic Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.1] — 2026-06-28

Patch release — shell TypeScript compatibility for strict consumers and Plantasonic app integration complete.

### Fixed

- **Shell TypeScript strictness** — `exactOptionalPropertyTypes` compatibility in `src/shell/` (config merge, routes clone, panel states, theme cycle, render options)

### Changed

- **Phase 6 complete** — [Plantasonic app](https://github.com/nate-thousand/plantasonic) is the first consumer of the public Application Shell API

### Known issues

- Bootstrap SCSS deprecation warnings during build (Bootstrap 5.0.2 + Dart Sass 3)
- No npm registry publish yet — consume via GitHub or `file:` dependency
- CI/GitHub Actions pipeline not yet configured (Phase 5)

## [1.2.0] — 2026-06-28

Developer platform release — public Application Shell API, CLI, starter templates, navigation framework, and Bootstrap styling layer.

### Added

- **Application Shell (public API)** — `plantasonic-design-system/shell` exports `renderApplicationShell()`, `bindApplicationShell()`, theme provider, command registry, window state persistence; internal navigation in `src/shell/internal/`; [APPLICATION_SHELL.md](./docs/platform/APPLICATION_SHELL.md)
- **Starter templates** — all four CLI templates (`react-vite`, `react-bootstrap`, `nextjs`, `electron`) consume the public shell API; no copied layouts; `npm run validate:templates`
- **Navigation & Workspace Framework** — sidebar, rail, top bar, dock, inspector, panels, command palette (⌘K), fuzzy search; `scss/navigation-framework.scss`; showcase section; [NAVIGATION_FRAMEWORK.md](./docs/platform/NAVIGATION_FRAMEWORK.md)
- **Bootstrap Styling Layer** — three-layer SCSS (`bootstrap-theme`, `bootstrap-components`, `bootstrap-utilities`); generated compile manifest; full interaction states; [BOOTSTRAP_STYLING_AUDIT.md](./docs/platform/BOOTSTRAP_STYLING_AUDIT.md)
- **Developer Platform** — CLI (`npx plantasonic create`), code generation pipeline, platform docs, quality gates, automated tests (32 tests), repo standards (AGENTS.md, SECURITY.md, CODE_OF_CONDUCT.md)
- **Build commands** — `tokens:build-bootstrap`, `generate`, `docs`, `quality`, `test`, `release`, `validate:templates`, `audit:bootstrap`
- **Generated artifacts** — TypeScript CSS var types, SCSS token aliases, token/component documentation
- **Vision and Scope** — canonical `docs/VISION_AND_SCOPE.md`; foundation reference docs (`COLORS.md`, `TYPOGRAPHY.md`, `SPACING.md`, `PATTERNS.md`)
- **Showcase Milestone 2 — Bootstrap Reference** — 12 Bootstrap category pages; Application Shell section (11 pages); Navigation section (15 pages); developer panel; WCAG contrast audit

### Fixed

- **Text color semantics** — `color.text.primary` is neutral readable text, not brand green
- **Runtime theme bridge** — `scss/css-theme-bridge.scss` so Bootstrap follows CSS custom properties when switching themes
- **Shell hardening** — routes wired to nav + command palette; `CommandRegistry.execute()` on palette click; full `persistState` restore

## [1.1.0] — 2026-06-28

### Added

- **Design System Showcase** — standalone Vite app in `showcase/`
- Interactive token browser, Bootstrap component catalog, Plantasonic reference components
- Theme switcher (dark/light), token inspector, search, responsive viewport preview
- Developer panel with version, build timestamp, token counts
- npm scripts: `showcase:dev`, `showcase:build`, `showcase:preview`
- Design validation workflow in README

## [1.0.0] — 2026-06-28

Initial public release of the Plantasonic Design System.

### Added

- W3C Design Tokens JSON — `foundation.tokens.json`, `theme.dark.tokens.json`, `theme.light.tokens.json`
- Generated `css/variables.css` — 122 CSS custom properties with `:root`, `[data-theme="dark"]`, and `[data-theme="light"]` blocks
- `scss/bootstrap-theme.scss` — Bootstrap 5.0.2 variable overrides
- Token build pipeline — `scripts/lib/tokens.mjs`, `scripts/validate-tokens.mjs`, `scripts/build-css.mjs`
- npm scripts: `tokens:validate`, `tokens:build-css`, `build`
- Documentation — brand guidelines, design principles, token architecture, component mapping
- AI application prompt — `prompts/APPLY_DESIGN_SYSTEM.md`
- MIT license, contributing guidelines, release workflow

### Notes

- Dark theme is the default (`:root`)
- Light theme provides 38 semantic overrides via `[data-theme="light"]`
- Product apps should consume this package — do not duplicate token definitions
