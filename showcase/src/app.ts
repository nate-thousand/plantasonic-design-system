import { BUILD_TIME, CSS_VAR_MAP, DS_VERSION, NAV, NAV_GROUPS } from './data/catalog';
import { inspectElement, renderInspector } from './lib/inspector';
import { search } from './lib/search';
import { countTokens } from './lib/tokens';
import { getTheme, initTheme, setTheme } from './lib/theme';
import { bindViewportControls } from './lib/viewport';
import { renderSection } from './sections';

export function mountApp(root: HTMLElement): void {
  initTheme();

  root.innerHTML = `
    <aside class="ds-showcase__nav" aria-label="Showcase navigation">
      <div class="ds-showcase__brand p-3 border-bottom">
        <div class="fw-semibold">Plantasonic DS</div>
        <div class="ds-type-caption text-muted">Showcase v${DS_VERSION}</div>
      </div>
      <div class="p-2 border-bottom">
        <input type="search" class="form-control form-control-sm" id="ds-search" placeholder="Search tokens, components…" autocomplete="off" />
        <div id="ds-search-results" class="ds-search-results"></div>
      </div>
      <nav class="ds-showcase__nav-scroll p-2" id="ds-nav">
        ${NAV_GROUPS.map((group) => {
          const items = NAV.filter((n) => n.group === group);
          if (!items.length) return '';
          return `<div class="mb-3"><div class="ds-type-overline text-muted px-2 mb-1">${group}</div>
            ${items.map((i) => `<a href="#${i.id}" class="ds-nav-item" data-route="${i.id}">${i.label}</a>`).join('')}</div>`;
        }).join('')}
      </nav>
    </aside>

    <div class="ds-showcase__main">
      <header class="ds-showcase__header d-flex flex-wrap align-items-center gap-2 p-3 border-bottom">
        <div class="btn-group btn-group-sm" role="group" aria-label="Viewport">
          <button type="button" class="btn btn-outline-secondary active" data-viewport="desktop">Desktop</button>
          <button type="button" class="btn btn-outline-secondary" data-viewport="tablet">Tablet</button>
          <button type="button" class="btn btn-outline-secondary" data-viewport="mobile">Mobile</button>
          <button type="button" class="btn btn-outline-secondary" data-viewport="free">Free</button>
        </div>
        <input type="range" class="form-range ds-viewport-slider" id="viewport-width" min="320" max="1440" value="1280" title="Viewport width" />
        <div class="ms-auto d-flex align-items-center gap-2">
          <label class="ds-type-caption mb-0">Theme</label>
          <select class="form-select form-select-sm" id="theme-select" style="width:auto">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <label class="form-check form-switch mb-0 ms-2">
            <input class="form-check-input" type="checkbox" id="reduced-motion" />
            <span class="form-check-label ds-type-caption">Reduced motion</span>
          </label>
        </div>
      </header>

      <div class="ds-showcase__viewport-wrap">
        <div class="ds-showcase__viewport" id="viewport" data-viewport="desktop">
          <main class="ds-showcase__content p-4" id="content"></main>
        </div>
      </div>
    </div>

    <aside class="ds-showcase__panel" aria-label="Developer panel">
      <div class="p-3 border-bottom"><strong class="small">Developer Panel</strong></div>
      <dl class="small p-3 mb-0 ds-dev-stats">
        <dt>Version</dt><dd>${DS_VERSION}</dd>
        <dt>Build</dt><dd class="font-monospace">${new Date(BUILD_TIME).toLocaleString()}</dd>
        <dt>Theme</dt><dd id="dev-theme">${getTheme()}</dd>
        <dt>Token count</dt><dd>${Object.keys(CSS_VAR_MAP).length}</dd>
        <dt>CSS variables</dt><dd id="dev-css-count">${countTokens()}</dd>
        <dt>Generated</dt><dd><code>css/variables.css</code></dd>
      </dl>
      <div class="p-3 border-top mt-auto">
        <div class="ds-type-label mb-2">Token Inspector</div>
        <div id="inspector">${renderInspector(null)}</div>
      </div>
    </aside>`;

  const content = root.querySelector('#content') as HTMLElement;
  const navLinks = root.querySelectorAll<HTMLAnchorElement>('[data-route]');
  const themeSelect = root.querySelector('#theme-select') as HTMLSelectElement;
  const devTheme = root.querySelector('#dev-theme') as HTMLElement;
  const searchInput = root.querySelector('#ds-search') as HTMLInputElement;
  const searchResults = root.querySelector('#ds-search-results') as HTMLElement;
  const inspectorEl = root.querySelector('#inspector') as HTMLElement;
  const viewport = root.querySelector('#viewport') as HTMLElement;
  const reducedMotion = root.querySelector('#reduced-motion') as HTMLInputElement;
  const themePreview = () => {
    const label = document.querySelector('#theme-preview-label');
    if (label) label.textContent = getTheme();
  };

  themeSelect.value = getTheme();

  const routeIds = NAV.map((n) => n.id);

  function navigate(id: string): void {
    const route = routeIds.includes(id) ? id : 'overview';
    location.hash = route;
    content.innerHTML = renderSection(route);
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.route === route);
    });
    themePreview();
    initBootstrapWidgets(content);
  }

  window.addEventListener('hashchange', () => navigate(location.hash.replace('#', '') || 'overview'));
  navigate(location.hash.replace('#', '') || 'overview');

  themeSelect.addEventListener('change', () => {
    setTheme(themeSelect.value as 'dark' | 'light');
    devTheme.textContent = getTheme();
    themePreview();
  });

  reducedMotion.addEventListener('change', () => {
    document.documentElement.toggleAttribute('data-ds-reduced-motion', reducedMotion.checked);
  });

  searchInput.addEventListener('input', () => {
    const results = search(searchInput.value);
    searchResults.innerHTML = results.length
      ? results.map((r) => `<a href="${r.href}" class="ds-search-item" data-route="${r.href.replace('#', '')}"><span class="badge bg-secondary me-1">${r.type}</span>${r.label}</a>`).join('')
      : '';
    searchResults.querySelectorAll('[data-route]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        navigate((a as HTMLElement).dataset.route!);
        searchResults.innerHTML = '';
        searchInput.value = '';
      });
    });
  });

  content.addEventListener('click', (e) => {
    const target = (e.target as Element).closest('[data-ds-inspect], [data-ds-tokens], .card, .btn, .ds-swatch, input, button');
    if (target) {
      inspectorEl.innerHTML = renderInspector(inspectElement(target));
    }
  });

  bindViewportControls(viewport, root.querySelectorAll('[data-viewport]'), root.querySelector('#viewport-width') as HTMLInputElement);

  document.addEventListener('ds-theme-change', () => {
    devTheme.textContent = getTheme();
    themePreview();
  });
}

async function initBootstrapWidgets(container: HTMLElement): Promise<void> {
  const { Tooltip, Popover } = await import('bootstrap');
  container.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));
  container.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => new Popover(el));
}
