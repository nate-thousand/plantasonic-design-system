# Migration Guides

## From inline tokens to design system package

1. Add dependency: `plantasonic-design-system`
2. Remove duplicated `--ds-*` / `--ps-*` definitions from app CSS
3. Import `@ds/css/variables.css` once at app entry
4. Replace SCSS palette with `@ds/scss/bootstrap-theme` + bridge
5. Run visual QA against showcase Bootstrap reference

## From ai-native-design-system (legacy)

That package is deprecated. Point all docs and imports at `plantasonic-design-system`. Token paths and CSS variable names are stable in this repo.

## Theme text color fix (v1.1+)

`color.text.primary` is neutral (`#e5e5e5` dark). Accent green is `color.text.accent`. Update any app code that assumed primary text was green.

## Upgrading Bootstrap

Plantasonic pins Bootstrap **5.0.2**. Do not upgrade Bootstrap in consuming apps without a design system release — variable names and bridge selectors may break.

## Template refresh

Re-scaffold is not required. Compare your `theme.ts` and SCSS imports with the latest template in `templates/react-vite/` when upgrading major versions.
