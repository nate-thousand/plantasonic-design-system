# Contributing

Thank you for contributing to the Plantasonic Design System.

## Scope

This repository contains design tokens, CSS variables, Bootstrap theme overrides, and documentation only. Do not add application logic, engine code, or product-specific runtime code here.

All contributions must align with [docs/VISION_AND_SCOPE.md](./docs/VISION_AND_SCOPE.md) and pass its [decision filter](./docs/VISION_AND_SCOPE.md#decision-filter).

## Workflow

1. Edit token JSON in `tokens/` — never edit `css/variables.css` directly
2. Run `npm run build` to validate and regenerate CSS + generated artifacts
3. Run `npm run quality && npm run test` before opening a PR
4. Update `CHANGELOG.md` under `[Unreleased]`
5. Open a pull request with a clear summary of token or documentation changes

## Developer platform

- **CLI** — `cli/`; test with `node cli/index.mjs create my-app --no-install`
- **Templates** — `templates/`; each must import the design system package, not duplicate tokens
- **Generation** — run `npm run generate` after changing `CSS_VAR_NAME` or token mappings in `scripts/lib/tokens.mjs`
- **Docs** — platform guides live in `docs/platform/`; generated output in `docs/generated/`

## Token changes

- **Foundation** (`foundation.tokens.json`) — theme-agnostic primitives only
- **Themes** (`theme.dark.tokens.json`, `theme.light.tokens.json`) — semantic overrides only
- Use `{token.path}` aliases instead of duplicating hex values
- All aliases must resolve — `npm run tokens:validate` must pass

## Documentation

Update relevant docs in `docs/` when changing token architecture, brand rules, or Bootstrap mapping. New tokens and components should document purpose, usage, examples, accessibility, and do/don't guidance per [VISION_AND_SCOPE.md](./docs/VISION_AND_SCOPE.md#documentation).

## Commits

Use clear, imperative commit messages. Group token JSON and regenerated CSS in the same commit.

## Questions

Open a GitHub issue for architectural questions before large changes.
