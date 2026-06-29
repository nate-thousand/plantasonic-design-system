import { DS_VERSION } from '../data/catalog';
import { getComputedVar } from '../lib/tokens';
import { demoCard, docBlock, sectionHeader } from '../lib/ui';

export function renderLayouts(): string {
  return `
    ${sectionHeader('Layouts', 'Instrument shell and responsive grid.')}
    ${docBlock({
      purpose: 'Stage-first layout with nav, optional sidebar, and dock.',
      usage: 'Use --ps-nav-height, --ps-dock-height, --ps-sidebar-width in product shell CSS.',
      dos: ['Keep stage full-bleed', 'Use sidebar overlay on mobile'],
      donts: ['Let chrome compete with stage for attention'],
    })}
    ${demoCard(
      'Shell grid',
      `<pre class="small mb-0 font-monospace text-secondary">┌ TopNav (--ps-nav-height) ─┐
│ Sidebar │ Stage            │
├─────────┴──────────────────┤
│ ControlDock (--ps-dock-height) │
└────────────────────────────┘</pre>`,
      ['--ps-nav-height', '--ps-dock-height'],
    )}`;
}

export function renderUtilities(): string {
  return `
    ${sectionHeader('Utilities', 'Bootstrap utilities with Plantasonic theme.')}
    ${docBlock({
      purpose: 'Spacing, display, and flex helpers from Bootstrap.',
      usage: 'Prefer design tokens for colors. Use Bootstrap utilities for layout.',
      dos: ['Combine utilities with token-based custom classes'],
      donts: ['Use utility colors that bypass tokens'],
    })}
    <div class="d-flex gap-3 flex-wrap mb-3"><span class="p-2 rounded bg-dark">.bg-dark</span><span class="p-2 rounded border">.border</span><span class="p-2 rounded text-muted">.text-muted</span></div>
    <div class="ds-overline">Touch target minimum: ${getComputedVar('--ps-touch-target')}</div>`;
}

export function renderAccessibility(): string {
  return `
    ${sectionHeader('Accessibility', 'Contrast, focus, keyboard, and reduced motion.')}
    ${docBlock({
      purpose: 'WCAG 2.1 AA baseline for instrument UI.',
      usage: 'Verify every product screen against these patterns.',
      dos: ['Use :focus-visible rings', 'Provide keyboard paths', 'Respect prefers-reduced-motion'],
      donts: ['Remove focus outlines', 'Use muted text for essential content'],
    })}
    ${demoCard(
      'Focus indicators',
      `<button class="btn btn-primary me-2">Tab to focus</button><input class="form-control d-inline-block w-auto" placeholder="Focus me" />`,
      ['--ds-shadow-focus', '--ds-color-border-focus'],
    )}
    ${demoCard(
      'Contrast pairs',
      `<div class="row g-2">
        <div class="col-md-6 p-3 rounded" style="background:var(--ds-color-surface-default);color:var(--ds-color-text-primary)">Primary on default</div>
        <div class="col-md-6 p-3 rounded" style="background:var(--ds-color-surface-raised);color:var(--ds-color-text-secondary)">Secondary on raised</div>
      </div>`,
    )}
    ${demoCard(
      'Reduced motion',
      `<p class="small">Toggle reduced motion in the developer panel. Animations respect <code>prefers-reduced-motion</code> and <code>data-ds-reduced-motion</code>.</p>
       <button class="btn btn-outline-secondary btn-sm ds-motion-demo">Animated control</button>`,
    )}`;
}

export function renderThemes(): string {
  return `
    ${sectionHeader('Themes', 'Dark (default) and light variants.')}
    ${docBlock({
      purpose: 'Runtime theme switching without page reload.',
      usage: 'Set data-theme on &lt;html&gt;. CSS variables update instantly.',
      dos: ['Test both themes before shipping', 'Use semantic tokens that adapt per theme'],
      donts: ['Maintain separate stylesheets per theme'],
    })}
    <div class="row g-3">
      <div class="col-md-6"><div class="card p-4" style="background:var(--ds-color-surface-app);color:var(--ds-color-text-primary)"><strong>Current theme</strong><div id="theme-preview-label" class="font-monospace mt-2">dark</div></div></div>
      <div class="col-md-6"><div class="card p-4"><div class="ds-type-label mb-2">Sample tokens</div>
        <dl class="small mb-0"><dt>--ds-color-surface-app</dt><dd>${getComputedVar('--ds-color-surface-app')}</dd>
        <dt>--ds-color-text-primary</dt><dd>${getComputedVar('--ds-color-text-primary')}</dd></dl></div></div>
    </div>`;
}

export function renderChangelog(): string {
  return `
    ${sectionHeader('Changelog', `Design system v${DS_VERSION}`)}
    ${docBlock({
      purpose: 'Track design system releases.',
      usage: 'Compare showcase version with package.json in consuming apps.',
      dos: ['Pin design system version in product apps'],
      donts: ['Silently drift token values without changelog entry'],
    })}
    <div class="card"><div class="card-body small">
      <h2 class="h6">1.0.0 — Initial release</h2>
      <ul class="mb-0"><li>Foundation + dark/light theme tokens</li><li>CSS variable pipeline</li><li>Bootstrap theme overrides</li><li>Design system showcase</li></ul>
    </div></div>`;
}
