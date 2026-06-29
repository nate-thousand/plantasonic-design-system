# Changelog

All notable changes to the Plantasonic Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
