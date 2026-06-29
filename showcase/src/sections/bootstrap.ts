import { BOOTSTRAP_DEMOS } from '../data/catalog';
import { demoCard, docBlock, sectionHeader } from '../lib/ui';

export function renderBootstrap(): string {
  return `
    ${sectionHeader('Bootstrap', 'Bootstrap 5.0.2 with Plantasonic theme overrides.')}
    ${docBlock({
      purpose: 'Component behavior and accessibility from Bootstrap; identity from design tokens.',
      usage: 'Import scss/bootstrap-theme.scss before Bootstrap. Link css/variables.css for runtime theming.',
      dos: ['Use Bootstrap classes from docs/COMPONENT_MAPPING.md', 'Override via tokens only'],
      donts: ['Edit node_modules/bootstrap', 'Create parallel class systems'],
    })}
    <p class="text-secondary small mb-4">Demonstrating: ${BOOTSTRAP_DEMOS.join(', ')}.</p>
    ${renderButtons()}
    ${renderButtonGroups()}
    ${renderForms()}
    ${renderChecks()}
    ${renderCards()}
    ${renderAlerts()}
    ${renderBadgesProgress()}
    ${renderAccordionTabs()}
    ${renderNavbar()}
    ${renderDropdownPaginationBreadcrumb()}
    ${renderTables()}
    ${renderModalsOffcanvas()}
    ${renderTooltipsPopoversToasts()}
    ${renderSpinnersCollapseListPlaceholder()}`;
}

function renderButtons(): string {
  return demoCard(
    'Buttons',
    `<div class="d-flex flex-wrap gap-2 mb-2">
      <button type="button" class="btn btn-primary" data-ds-tokens="--ds-color-primary">Primary</button>
      <button type="button" class="btn btn-secondary" data-ds-tokens="--ds-color-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-outline-secondary">Outline</button>
      <button type="button" class="btn btn-link">Link</button>
      <button type="button" class="btn btn-primary btn-sm">Small</button>
      <button type="button" class="btn btn-primary" disabled>Disabled</button>
    </div>`,
    ['--ds-color-primary', '--ds-color-text-on-primary'],
  );
}

function renderButtonGroups(): string {
  return demoCard(
    'Button groups',
    `<div class="btn-group" role="group">
      <button type="button" class="btn btn-outline-secondary">Left</button>
      <button type="button" class="btn btn-outline-secondary active">Middle</button>
      <button type="button" class="btn btn-outline-secondary">Right</button>
    </div>`,
  );
}

function renderForms(): string {
  return demoCard(
    'Forms · Inputs · Selects · Textareas',
    `<div class="row g-3">
      <div class="col-md-6"><label class="form-label">Text input</label><input class="form-control" placeholder="Preset name" data-ds-tokens="--ds-color-surface-input,--ds-color-border-default" /></div>
      <div class="col-md-6"><label class="form-label">Select</label><select class="form-select"><option>World A</option><option>World B</option></select></div>
      <div class="col-12"><label class="form-label">Range</label><input type="range" class="form-range" min="0" max="100" value="60" data-ds-tokens="--ps-slider-track,--ps-slider-thumb" /></div>
      <div class="col-12"><label class="form-label">Textarea</label><textarea class="form-control" rows="2" placeholder="Notes"></textarea></div>
    </div>`,
    ['--ds-color-surface-input', '--ps-slider-thumb'],
  );
}

function renderChecks(): string {
  return demoCard(
    'Checkboxes · Radios · Switches',
    `<div class="form-check"><input class="form-check-input" type="checkbox" id="c1" checked /><label class="form-check-label" for="c1">Performance mode</label></div>
     <div class="form-check"><input class="form-check-input" type="radio" name="r" id="r1" checked /><label class="form-check-label" for="r1">Radio A</label></div>
     <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="sw1" /><label class="form-check-label" for="sw1">Switch</label></div>`,
  );
}

function renderCards(): string {
  return demoCard(
    'Cards',
    `<div class="card" style="max-width:20rem" data-ds-tokens="--ds-color-surface-card,--ds-radius-lg">
      <div class="card-body"><h5 class="card-title">Preset card</h5><p class="card-text small text-secondary">Semantic card using theme tokens.</p>
      <button class="btn btn-primary btn-sm">Load</button></div>
    </div>`,
    ['--ds-color-surface-card'],
  );
}

function renderAlerts(): string {
  return `<div class="row g-2 mb-4">
    <div class="col-md-6"><div class="alert alert-success mb-0">Success</div></div>
    <div class="col-md-6"><div class="alert alert-danger mb-0">Error</div></div>
  </div>`;
}

function renderBadgesProgress(): string {
  return demoCard(
    'Badges · Progress',
    `<span class="badge bg-primary me-2">Live</span><span class="badge bg-secondary">Beta</span>
     <div class="progress mt-3" style="height:0.5rem"><div class="progress-bar" style="width:65%"></div></div>`,
  );
}

function renderAccordionTabs(): string {
  return demoCard(
    'Accordion · Tabs',
    `<ul class="nav nav-tabs mb-3"><li class="nav-item"><a class="nav-link active" href="#">Controls</a></li><li class="nav-item"><a class="nav-link" href="#">MIDI</a></li></ul>
     <div class="accordion" id="acc1"><div class="accordion-item">
       <h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a1">Section</button></h2>
       <div id="a1" class="accordion-collapse collapse" data-bs-parent="#acc1"><div class="accordion-body small">Accordion body</div></div>
     </div></div>`,
  );
}

function renderNavbar(): string {
  return demoCard(
    'Navbar',
    `<nav class="navbar navbar-dark rounded px-3" data-ds-tokens="--ds-color-surface-nav,--ps-nav-height" style="background:var(--ds-color-surface-nav);min-height:var(--ps-nav-height)">
      <span class="navbar-brand mb-0 h1 fs-6">Plantasonic</span>
      <div class="d-flex gap-2"><button class="btn btn-link btn-sm text-secondary">Menu</button><button class="btn btn-primary btn-sm">Play</button></div>
    </nav>`,
    ['--ps-nav-height'],
  );
}

function renderDropdownPaginationBreadcrumb(): string {
  return demoCard(
    'Dropdowns · Pagination · Breadcrumbs',
    `<div class="dropdown d-inline-block me-3">
      <button class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown">Actions</button>
      <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Export</a></li><li><a class="dropdown-item" href="#">Settings</a></li></ul>
    </div>
    <nav class="d-inline-block"><ul class="pagination pagination-sm mb-0"><li class="page-item active"><span class="page-link">1</span></li><li class="page-item"><a class="page-link" href="#">2</a></li></ul></nav>
    <nav aria-label="breadcrumb" class="mt-3"><ol class="breadcrumb mb-0"><li class="breadcrumb-item"><a href="#">Home</a></li><li class="breadcrumb-item active">Showcase</li></ol></nav>`,
  );
}

function renderTables(): string {
  return demoCard(
    'Tables',
    `<table class="table table-sm"><thead><tr><th>Param</th><th>Value</th></tr></thead>
    <tbody><tr><td>Tempo</td><td class="font-monospace">120</td></tr><tr><td>World</td><td>Seed</td></tr></tbody></table>`,
  );
}

function renderModalsOffcanvas(): string {
  return demoCard(
    'Modals · Offcanvas',
    `<button class="btn btn-outline-secondary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#demoModal">Open modal</button>
     <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="offcanvas" data-bs-target="#demoOffcanvas">Open offcanvas</button>
     <div class="modal fade" id="demoModal" tabindex="-1"><div class="modal-dialog"><div class="modal-content">
       <div class="modal-header"><h5 class="modal-title">Modal</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
       <div class="modal-body small">Themed modal dialog.</div>
     </div></div></div>
     <div class="offcanvas offcanvas-start" id="demoOffcanvas" tabindex="-1">
       <div class="offcanvas-header"><h5 class="offcanvas-title">Sidebar</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button></div>
       <div class="offcanvas-body small">Offcanvas panel</div>
     </div>`,
    ['--ds-color-overlay-backdrop', '--ps-shadow-sidebar'],
  );
}

function renderTooltipsPopoversToasts(): string {
  return demoCard(
    'Tooltips · Popovers · Toasts',
    `<button type="button" class="btn btn-sm btn-outline-secondary me-2" data-bs-toggle="tooltip" title="Tempo sync">Tooltip</button>
     <button type="button" class="btn btn-sm btn-outline-secondary me-2" data-bs-toggle="popover" data-bs-content="Performance control">Popover</button>
     <div class="toast show align-items-center mt-3" role="alert" style="max-width:100%"><div class="d-flex"><div class="toast-body small">Preset loaded</div></div></div>`,
  );
}

function renderSpinnersCollapseListPlaceholder(): string {
  return demoCard(
    'Spinners · Collapse · List groups · Placeholders',
    `<div class="spinner-border spinner-border-sm text-primary me-3" role="status"></div>
     <button class="btn btn-sm btn-link" data-bs-toggle="collapse" data-bs-target="#col1">Toggle collapse</button>
     <div class="collapse mt-2" id="col1"><div class="small">Collapsed content</div></div>
     <ul class="list-group list-group-flush mt-3" style="max-width:16rem">
       <li class="list-group-item small">List item</li><li class="list-group-item small active">Active</li>
     </ul>
     <div class="placeholder-glow mt-3"><span class="placeholder col-7"></span><span class="placeholder col-4"></span></div>`,
  );
}

export function renderFormsSection(): string {
  return `${sectionHeader('Forms', 'Form controls reference.')} ${renderForms()} ${renderChecks()}`;
}

export function renderNavigationSection(): string {
  return `${sectionHeader('Navigation', 'Nav patterns.')} ${renderNavbar()} ${renderDropdownPaginationBreadcrumb()} ${renderAccordionTabs()}`;
}

export function renderDialogsSection(): string {
  return `${sectionHeader('Dialogs', 'Modal and offcanvas patterns.')} ${renderModalsOffcanvas()}`;
}

export function renderOverlaysSection(): string {
  return `${sectionHeader('Overlays', 'Tooltips, popovers, toasts.')} ${renderTooltipsPopoversToasts()}`;
}

export function renderIconsSection(): string {
  return `
    ${sectionHeader('Icons', 'Reference glyphs for instrument UI.')}
    ${docBlock({
      purpose: 'Consistent iconography for transport and controls.',
      usage: 'Use SVG icons with --ds-color-text-secondary fill. Size to --ps-touch-target when interactive.',
      dos: ['Provide aria-label on icon-only buttons'],
      donts: ['Rely on color alone for meaning'],
    })}
    <div class="d-flex flex-wrap gap-3 fs-4" data-ds-tokens="--ds-color-text-accent">
      ${['▶', '■', '⏸', '⏭', '⚙', '♪', '⌨', '◉'].map((g) => `<span class="ds-icon-ref p-3 rounded" style="background:var(--ds-color-surface-raised)" title="Reference glyph">${g}</span>`).join('')}
    </div>`;
}
