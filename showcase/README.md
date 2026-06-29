# Showcase

Standalone Design System Showcase — the canonical visual reference for Plantasonic applications.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output to showcase/dist/
npm run preview
```

From repository root:

```bash
npm run showcase:dev
npm run showcase:build
```

## Architecture

- **Vite + TypeScript** — no framework; consumes design system directly
- **Styles** — `@ds/scss/bootstrap-theme` + Bootstrap 5.0.2 + `@ds/css/variables.css`
- **Tokens** — imported from `../tokens/*.json` for catalog display
- **No app imports** — reference components are built in this folder only

## Sections

Overview · Tokens · Colors · Typography · Spacing · Radius · Shadows · Motion · Bootstrap · Forms · Navigation · Dialogs · Overlays · Icons · Plantasonic · Layouts · Utilities · Accessibility · Themes · Changelog
