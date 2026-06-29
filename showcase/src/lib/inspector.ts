import { CSS_VAR_MAP } from '../data/catalog';
import { getComputedVar } from './tokens';

export type InspectPayload = {
  tag: string;
  classes: string;
  tokens: string[];
  computed: Record<string, string>;
};

export function parseTokens(el: Element): string[] {
  const attr = el.getAttribute('data-ds-tokens');
  if (attr) return attr.split(',').map((t) => t.trim()).filter(Boolean);

  const styles = getComputedStyle(el);
  const found: string[] = [];
  for (const cssVar of Object.values(CSS_VAR_MAP)) {
    const val = styles.getPropertyValue(cssVar);
    if (val && val !== getComputedVar(cssVar)) {
      found.push(cssVar);
    }
  }
  return found.slice(0, 8);
}

export function inspectElement(el: Element): InspectPayload {
  const tokens = parseTokens(el);
  const computed: Record<string, string> = {};
  const styles = getComputedStyle(el);

  for (const token of tokens) {
    computed[token] = getComputedVar(token) || styles.getPropertyValue(token).trim();
  }

  computed['background-color'] = styles.backgroundColor;
  computed['color'] = styles.color;
  computed['border-color'] = styles.borderColor;
  computed['box-shadow'] = styles.boxShadow;
  computed['font-size'] = styles.fontSize;

  return {
    tag: el.tagName.toLowerCase(),
    classes: el.className?.toString?.() ?? '',
    tokens,
    computed,
  };
}

export function renderInspector(payload: InspectPayload | null): string {
  if (!payload) {
    return '<p class="small text-muted mb-0">Click any demo element to inspect tokens.</p>';
  }

  const tokenRows = payload.tokens
    .map((t) => `<tr><td><code>${t}</code></td><td><code>${payload.computed[t] ?? '—'}</code></td></tr>`)
    .join('');

  const computedRows = Object.entries(payload.computed)
    .filter(([k]) => !payload.tokens.includes(k))
    .map(([k, v]) => `<tr><td>${k}</td><td><code>${v}</code></td></tr>`)
    .join('');

  return `
    <div class="small">
      <div class="mb-2"><strong>&lt;${payload.tag}&gt;</strong> ${payload.classes ? `<code class="ms-1">${payload.classes}</code>` : ''}</div>
      ${tokenRows ? `<table class="table table-sm mb-2"><thead><tr><th>Token</th><th>Value</th></tr></thead><tbody>${tokenRows}</tbody></table>` : ''}
      <table class="table table-sm mb-0"><thead><tr><th>Computed</th><th>Value</th></tr></thead><tbody>${computedRows}</tbody></table>
    </div>`;
}
