# Changelog

All notable changes to the Plantasonic Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] — 2026-06-28

### Added

- Token build pipeline — `scripts/lib/tokens.mjs`, `scripts/validate-tokens.mjs`, `scripts/build-css.mjs`
- npm scripts: `tokens:validate`, `tokens:build-css`, `build`
- Alias validation before CSS generation — unresolved references fail the build

### Changed

- `css/variables.css` is now generated output (do not edit manually)
- Removed self-referential status/decorative aliases from theme token files (inherited from foundation)

## [0.1.0] — 2026-06-28

### Added

- First release — standalone design system package
