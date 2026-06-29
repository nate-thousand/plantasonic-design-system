# Plantasonic Design System

Standalone design tokens, CSS variables, and Bootstrap theme for the Plantasonic product ecosystem.

Extracted from the [Plantasonic app](https://github.com/nate-thousand/plantasonic) so tokens and theming live in one reusable package — product apps consume this repo instead of duplicating definitions.

---

## What's Included

| Path | Purpose |
| ---- | ------- |
| `tokens/` | W3C Design Tokens JSON — foundation + dark/light themes |
| `css/variables.css` | Runtime CSS custom properties (`--ds-*`, `--ps-*`) |
| `scss/bootstrap-theme.scss` | Bootstrap 5.0.2 variable overrides |
| `docs/` | Brand, principles, token architecture, component mapping |
| `prompts/` | AI application instructions |

---

## Quick Start

### CSS variables (any stack)

```html
<link rel="stylesheet" href="path/to/plantasonic-design-system/css/variables.css" />
```

```css
.my-panel {
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
<html data-theme="dark">  <!-- default -->
<html data-theme="light">
```

---

## Token Structure

```text
foundation.tokens.json     Primitives (palette, spacing, typography, motion)
theme.dark.tokens.json     Dark semantic tokens (default)
theme.light.tokens.json    Light semantic tokens
```

See [docs/TOKEN_ARCHITECTURE.md](./docs/TOKEN_ARCHITECTURE.md) for the full layer model.

---

## Build Pipeline

`css/variables.css` is generated from token JSON — do not edit it manually.

```bash
# Validate token aliases and required CSS mappings
npm run tokens:validate

# Regenerate css/variables.css from tokens/
npm run tokens:build-css

# Default build (same as tokens:build-css)
npm run build
```

### Source files

| Input | Role |
| ----- | ---- |
| `tokens/foundation.tokens.json` | Primitives — palette, spacing, typography, motion |
| `tokens/theme.dark.tokens.json` | Dark semantic tokens (default) |
| `tokens/theme.light.tokens.json` | Light semantic overrides |

### Output

| Output | Contents |
| ------ | -------- |
| `css/variables.css` | `:root` defaults, `[data-theme="dark"]`, `[data-theme="light"]` blocks |

Validation runs before every build. Unresolved `{token.aliases}` cause a non-zero exit — no CSS is written until all aliases resolve.

After editing token JSON, run `npm run build` and commit both the token files and regenerated CSS.

---

## Documentation

| Doc | Contents |
| --- | -------- |
| [BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md) | Color identity, typography voice, visual hierarchy |
| [DESIGN_PRINCIPLES.md](./docs/DESIGN_PRINCIPLES.md) | Token-driven, Bootstrap, accessibility rules |
| [TOKEN_ARCHITECTURE.md](./docs/TOKEN_ARCHITECTURE.md) | Naming, layers, Figma sync |
| [COMPONENT_MAPPING.md](./docs/COMPONENT_MAPPING.md) | Bootstrap class mapping |
| [APPLY_DESIGN_SYSTEM.md](./prompts/APPLY_DESIGN_SYSTEM.md) | AI agent instructions |

---

## Ecosystem

```text
plantasonic-design-system   →  tokens, theme, docs (this repo)
plantasonic                   →  product app (consumes this package)
plantasia-sound-engine        →  audio capability
ascii-visual-engine           →  visual capability
ai-product-framework          →  engineering workflow
```

Do not copy token source into product repos. Reference this package.

---

## Related Repositories

| Repository | Role |
| ---------- | ---- |
| `plantasonic` | Reference product implementation |
| `frameworks/ai-native-design-system` | Generic predecessor — Plantasonic tokens are the product-specific fork |

---

## License

Private — part of the Nate Thousand AI Projects workspace.
