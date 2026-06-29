import { BUILD_TIME, COMPONENT_COUNT, CSS_VAR_MAP, DS_VERSION, NAV } from '../data/catalog';
import { countTokens } from '../lib/tokens';
import { docBlock, sectionHeader } from '../lib/ui';

export function renderOverview(): string {
  const tokenCount = countTokens();
  return `
    ${sectionHeader('Overview', 'Canonical visual reference for every Plantasonic application.')}
    ${docBlock({
      purpose: 'Validate design decisions before shipping product UI.',
      usage: 'Compare new screens against this showcase. Use as documentation, regression baseline, and component explorer.',
      dos: [
        'Match token usage shown here in product apps',
        'Switch themes to verify both dark and light',
        'Use the token inspector on any demo element',
      ],
      donts: [
        'Copy hex values into application code',
        'Ship UI that diverges from showcased patterns without review',
        'Import styles from the Plantasonic app',
      ],
    })}
    <div class="row g-3 mb-4">
      <div class="col-sm-6 col-xl-3">
        <div class="card ds-stat-card h-100" data-ds-tokens="--ds-color-primary">
          <div class="card-body">
            <div class="ds-overline text-muted mb-1">Version</div>
            <div class="h4 mb-0 font-monospace">${DS_VERSION}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card ds-stat-card h-100">
          <div class="card-body">
            <div class="ds-overline text-muted mb-1">Build</div>
            <div class="small font-monospace">${new Date(BUILD_TIME).toLocaleString()}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card ds-stat-card h-100">
          <div class="card-body">
            <div class="ds-overline text-muted mb-1">CSS variables</div>
            <div class="h4 mb-0">${tokenCount}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-3">
        <div class="card ds-stat-card h-100">
          <div class="card-body">
            <div class="ds-overline text-muted mb-1">Catalog items</div>
            <div class="h4 mb-0">${COMPONENT_COUNT}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-header">Sections</div>
      <div class="card-body">
        <div class="row g-2">
          ${NAV.map((n) => `<div class="col-md-4"><a href="#${n.id}" class="btn btn-outline-secondary btn-sm w-100 ds-nav-link" data-route="${n.id}">${n.label}</a></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="alert alert-info mb-0">
      <strong>Design validation workflow:</strong> implement UI in product apps only after matching the corresponding showcase section. Run visual comparison against this page for every new component.
    </div>`;
}

export function renderTokens(): string {
  const rows = Object.entries(CSS_VAR_MAP)
    .map(
      ([path, cssVar]) => `
      <tr data-ds-inspect data-ds-tokens="${cssVar}">
        <td><code>${path}</code></td>
        <td><code>${cssVar}</code></td>
      </tr>`,
    )
    .join('');

  return `
    ${sectionHeader('Tokens', 'Complete mapping from token paths to CSS custom properties.')}
    ${docBlock({
      purpose: 'Single catalog of semantic token names.',
      usage: 'Reference token paths in code and docs. Values come from css/variables.css.',
      dos: ['Use --ds-* and --ps-* variables in styles', 'Edit tokens/*.json then npm run build'],
      donts: ['Hardcode resolved hex values', 'Edit variables.css manually'],
    })}
    <div class="table-responsive">
      <table class="table table-sm table-hover">
        <thead><tr><th>Token path</th><th>CSS variable</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}
