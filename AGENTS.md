# AGENTS.md

Guidance for AI coding assistants working in this repository.

## Purpose

This repo is the **Plantasonic Design System** — tokens, Bootstrap theme, showcase, CLI, and starter templates. It is **not** a product application.

## Do

- Implement design system features, tokens, showcase sections, CLI, templates, docs, and build scripts here
- Run `npm run tokens:validate` and `npm run test` after token or theme changes
- Implement new UI in the **showcase** before suggesting product app changes
- Follow [Vision and Scope](./docs/VISION_AND_SCOPE.md) as the decision filter
- Use existing patterns: `scripts/lib/tokens.mjs`, `@ds` alias, `data-theme` switching

## Do not

- Modify Plantasonic product applications unless explicitly requested
- Add application features (audio, presets, MIDI, etc.)
- Duplicate tokens in templates — templates consume this package
- Edit `css/variables.css` manually — run `npm run tokens:build-css`
- Upgrade Bootstrap without updating bridge + showcase coverage

## Key commands

```bash
npm run build              # tokens build + validate
npm run generate           # types, scss, token/component docs
npm run docs               # documentation index
npm run quality            # validation gate
npm run test               # node:test suite
npm run showcase:dev       # visual reference at :5173
node cli/index.mjs create my-app --no-install
```

## Architecture

```
tokens → scripts/lib/tokens.mjs → css/variables.css + scss/
                                 → showcase + templates + CLI
```

## File ownership

| Area | Path |
| --- | --- |
| Token source | `tokens/*.tokens.json` |
| Build logic | `scripts/` |
| CLI | `cli/` |
| Starters | `templates/` |
| Visual reference | `showcase/` |
| Platform docs | `docs/platform/` |

## Commit style

Concise imperative messages. Update `CHANGELOG.md` under `[Unreleased]` for user-visible changes.
