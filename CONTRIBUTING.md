# Contributing

Thank you for contributing to the Plantasonic Design System.

## Scope

This repository contains design tokens, CSS variables, Bootstrap theme overrides, and documentation only. Do not add application logic, engine code, or product-specific runtime code here.

## Workflow

1. Edit token JSON in `tokens/` — never edit `css/variables.css` directly
2. Run `npm run build` to validate and regenerate CSS
3. Update `CHANGELOG.md` under `[Unreleased]`
4. Open a pull request with a clear summary of token or documentation changes

## Token changes

- **Foundation** (`foundation.tokens.json`) — theme-agnostic primitives only
- **Themes** (`theme.dark.tokens.json`, `theme.light.tokens.json`) — semantic overrides only
- Use `{token.path}` aliases instead of duplicating hex values
- All aliases must resolve — `npm run tokens:validate` must pass

## Documentation

Update relevant docs in `docs/` when changing token architecture, brand rules, or Bootstrap mapping.

## Commits

Use clear, imperative commit messages. Group token JSON and regenerated CSS in the same commit.

## Questions

Open a GitHub issue for architectural questions before large changes.
