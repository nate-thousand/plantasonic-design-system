# Design Principles

Authoritative rules for applying the Plantasonic design system in any product.

---

## 1. Instrument-First

The primary content area — stage, canvas, or main viewport — owns visual priority. Chrome (nav, dock, sidebar) supports interaction without competing for attention.

In performance mode, chrome further recedes via reduced opacity and minimal controls.

---

## 2. Token-Driven

Every color, spacing value, radius, shadow, and duration must reference a documented token.

| Prefix | Usage |
| ------ | ----- |
| `--ds-*` | Design system semantic tokens (preferred) |
| `--ps-*` | Product layout tokens (nav height, dock, touch targets) |
| `$ds-*` | SCSS compile-time equivalents |

Never introduce raw hex, pixel, or millisecond values in component code.

---

## 3. Bootstrap as Implementation

Bootstrap 5.0.2 provides component behavior and accessibility primitives. Plantasonic tokens provide identity.

```text
tokens/*.json → css/variables.css → scss/bootstrap-theme.scss → Bootstrap SCSS
```

Rules:
- Import `bootstrap-theme.scss` **before** Bootstrap's variable definitions
- Never edit files in `node_modules/bootstrap/`
- App-specific layout classes use the `ps-` prefix

---

## 4. Accessible by Default

Non-negotiable requirements:

- Keyboard navigation for all interactive elements
- Visible focus rings using `--ds-shadow-focus`
- Minimum touch target: `--ps-touch-target` (2.75rem)
- Respect `prefers-reduced-motion: reduce`
- Semantic HTML landmarks (`nav`, `aside`, `section`, `footer`)
- WCAG 2.1 AA contrast for text on surfaces

---

## 5. Theme-Aware

Dark theme is the default — optimized for long performance sessions.

Light theme is available via `data-theme="light"` on the root element. Theme files:

- `tokens/theme.dark.tokens.json`
- `tokens/theme.light.tokens.json`

Switch themes by toggling the attribute and ensuring `css/variables.css` is loaded.

---

## 6. Reusable Platform

Components built with this system should be factory-based and framework-agnostic where possible. The design system defines tokens and Bootstrap mapping — not application business logic.

Product apps (like Plantasonic) consume this package; they do not duplicate token definitions.

---

## Related

- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)
- [TOKEN_ARCHITECTURE.md](./TOKEN_ARCHITECTURE.md)
- [COMPONENT_MAPPING.md](./COMPONENT_MAPPING.md)
- [../prompts/APPLY_DESIGN_SYSTEM.md](../prompts/APPLY_DESIGN_SYSTEM.md)
