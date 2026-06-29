import { PLANTASONIC_COMPONENTS } from '../data/catalog';
import { demoCard, docBlock, sectionHeader } from '../lib/ui';

export function renderPlantasonic(): string {
  return `
    ${sectionHeader('Plantasonic Components', 'Reference implementations — not imported from the product app.')}
    ${docBlock({
      purpose: 'Visual reference for instrument-specific UI patterns.',
      usage: 'Product apps should match these layouts and token usage. Implement with design system tokens only.',
      dos: ['Use --ps-* layout tokens for shell dimensions', 'Keep stage as darkest surface'],
      donts: ['Copy implementation from Plantasonic app repo', 'Hardcode shell dimensions'],
    })}
    <p class="small text-secondary mb-4">${PLANTASONIC_COMPONENTS.length} reference components: ${PLANTASONIC_COMPONENTS.join(', ')}.</p>
    ${renderShell()}
    ${renderDock()}
    ${renderTransport()}
    ${renderPresetBrowser()}
    ${renderSlidersKnobs()}
    ${renderPerformanceControls()}
    ${renderMidiKeyboardStatus()}
    ${renderPanelsCards()}
    ${renderVisualizer()}
    ${renderOverlayStates()}`;
}

function renderShell(): string {
  return demoCard(
    'App shell',
    `<div class="ds-ref-shell" data-ds-tokens="--ps-nav-height,--ps-dock-height,--ps-sidebar-width">
      <div class="ds-ref-nav">TopNav</div>
      <div class="ds-ref-main">
        <aside class="ds-ref-sidebar">Sidebar</aside>
        <div class="ds-ref-stage">Stage</div>
      </div>
      <div class="ds-ref-dock">Control Dock</div>
    </div>`,
    ['--ps-nav-height', '--ps-dock-height', '--ps-sidebar-width'],
  );
}

function renderDock(): string {
  return demoCard(
    'Dock',
    `<div class="ds-ref-dock-bar d-flex align-items-center justify-content-between px-3" data-ds-tokens="--ds-color-surface-dock,--ps-dock-height">
      <span class="ds-type-caption">Preset: Seed World</span>
      <div class="d-flex gap-2"><button class="btn btn-primary btn-sm">Play</button><button class="btn btn-outline-secondary btn-sm">Stop</button></div>
      <span class="font-monospace ds-type-caption">120 BPM</span>
    </div>`,
    ['--ds-color-surface-dock'],
  );
}

function renderTransport(): string {
  return demoCard(
    'Transport',
    `<div class="d-flex gap-2" data-ds-tokens="--ds-color-primary,--ps-touch-target">
      ${['Play', 'Pause', 'Stop', 'Record'].map((l) => `<button class="btn btn-outline-secondary btn-sm" style="min-width:var(--ps-touch-target);min-height:var(--ps-touch-target)">${l[0]}</button>`).join('')}
    </div>`,
    ['--ps-touch-target'],
  );
}

function renderPresetBrowser(): string {
  return demoCard(
    'Preset Browser',
    `<div class="row g-2">${['Seed', 'Bloom', 'Roots', 'Fog'].map((p, i) => `
      <div class="col-6 col-md-3"><div class="card ds-preset-card ${i === 0 ? 'ds-preset-card--active' : ''}" data-ds-tokens="--ps-preset-card-border,--ps-preset-card-active-border">
        <div class="card-body p-2 text-center small">${p}</div>
      </div></div>`).join('')}</div>`,
    ['--ps-preset-card-active-border', '--ds-shadow-glow-accent'],
  );
}

function renderSlidersKnobs(): string {
  return demoCard(
    'Sliders · Knobs',
    `<div class="row g-3 align-items-center">
      <div class="col-md-8"><label class="form-label ds-type-label">Density</label><input type="range" class="form-range" value="70" data-ds-tokens="--ps-slider-track,--ps-slider-thumb" /></div>
      <div class="col-md-4 text-center"><div class="ds-ref-knob mx-auto" data-ds-tokens="--ds-color-primary,--ds-color-surface-input"><span class="font-monospace small">64</span></div><div class="ds-type-caption mt-1">Knob</div></div>
    </div>`,
    ['--ps-slider-thumb'],
  );
}

function renderPerformanceControls(): string {
  return demoCard(
    'Performance Controls',
    `<div class="d-flex flex-wrap gap-2">${['A', 'B', 'C', 'D', 'E'].map((n) => `<button class="btn btn-outline-secondary btn-sm font-monospace">${n}</button>`).join('')}
    <span class="badge bg-success ms-2">Performance</span></div>`,
  );
}

function renderMidiKeyboardStatus(): string {
  return demoCard(
    'MIDI Monitor · Keyboard · Status Bar',
    `<div class="font-monospace small p-2 rounded mb-2" style="background:var(--ds-color-surface-sunken)" data-ds-tokens="--ds-font-family-mono">NOTE ON  C4  vel 98  ch 1</div>
     <div class="ds-ref-keyboard d-flex gap-1 mb-2">${Array.from({ length: 12 }, (_, i) => `<div class="ds-ref-key" style="height:${i % 7 === 0 ? '3rem' : '2rem'}"></div>`).join('')}</div>
     <div class="d-flex justify-content-between ds-type-caption"><span>Ready</span><span>CPU 12%</span><span>60 FPS</span></div>`,
    ['--ds-color-surface-sunken', '--ds-font-family-mono'],
  );
}

function renderPanelsCards(): string {
  return demoCard(
    'Panels · Cards · Control Groups',
    `<div class="row g-2">
      <div class="col-md-6"><div class="p-3 rounded" style="background:var(--ds-color-surface-raised);border:1px solid var(--ds-color-border-default)"><div class="ds-type-label mb-2">Panel</div><div class="btn-group btn-group-sm"><button class="btn btn-outline-secondary active">A</button><button class="btn btn-outline-secondary">B</button></div></div></div>
      <div class="col-md-6"><div class="card"><div class="card-body small">Control card</div></div></div>
    </div>`,
    ['--ds-color-surface-raised'],
  );
}

function renderVisualizer(): string {
  return demoCard(
    'Visualizer Frame',
    `<div class="ds-ref-stage-frame font-monospace p-4 text-center" data-ds-tokens="--ds-color-surface-stage,--ps-stage-border,--ds-shadow-stage-inset" style="min-height:8rem;box-shadow:var(--ds-shadow-stage-inset);border:1px solid var(--ps-stage-border)">
      <span class="text-secondary">ASCII stage region</span>
    </div>`,
    ['--ds-color-surface-stage'],
  );
}

function renderOverlayStates(): string {
  return `
    ${demoCard('Overlay', `<div class="position-relative rounded overflow-hidden" style="height:6rem;background:var(--ds-color-surface-card)"><div class="ds-ref-overlay-scrim">Overlay host</div></div>`, ['--ds-color-overlay-backdrop'])}
    ${demoCard('Loading Screen', `<div class="text-center p-4"><div class="spinner-border text-primary"></div><div class="ds-type-caption mt-2">Initializing engines…</div></div>`) }
    ${demoCard('Error State', `<div class="alert alert-danger mb-0"><strong>Engine error</strong> — sound adapter failed to start.</div>`, ['--ds-color-error'])}
    ${demoCard('Notification', `<div class="toast show w-100"><div class="toast-body small">Preset saved successfully.</div></div>`)}`;
}
