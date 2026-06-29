# Architecture

The Plantasonic Design System is a **token-first developer platform** — not an application.

## Layers

```
tokens/*.tokens.json     Source of truth (W3C Design Tokens)
        ↓
scripts/lib/tokens.mjs   Resolve aliases, validate, generate
        ↓
css/variables.css        Runtime CSS custom properties (--ds-*)
scss/bootstrap-theme     Bootstrap 5 SCSS variable overrides
scss/css-theme-bridge    Runtime Bootstrap ↔ CSS var mapping
        ↓
showcase/                Visual reference + Bootstrap coverage
templates/               Application starters
cli/                     Project generator (plantasonic create)
```

## Consumption model

Applications depend on `plantasonic-design-system` and import:

1. `@ds/css/variables.css` — theme tokens at runtime
2. `@ds/scss/bootstrap-theme` — compile-time Bootstrap palette
3. `@ds/scss/css-theme-bridge` — sync Bootstrap components to CSS vars

Theme switching uses `data-theme="dark" | "light"` on `<html>` without reload.

## Boundaries

| In scope | Out of scope |
| --- | --- |
| Application chrome, tokens, Bootstrap theme | Product features, audio engine, ASCII visuals |
| Reference components in showcase | Full component library in apps |
| Starters and CLI scaffolding | Modifying existing Plantasonic apps |

See [Vision and Scope](../VISION_AND_SCOPE.md) for the canonical boundary definition.
