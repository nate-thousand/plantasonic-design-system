import { BOOTSTRAP_DEMOS, CSS_VAR_MAP, NAV, PLANTASONIC_COMPONENTS } from '../data/catalog';

export type SearchResult = {
  id: string;
  label: string;
  type: 'section' | 'token' | 'component' | 'bootstrap';
  href: string;
};

function buildIndex(): SearchResult[] {
  const items: SearchResult[] = [];

  for (const item of NAV) {
    items.push({
      id: item.id,
      label: item.label,
      type: 'section',
      href: `#${item.id}`,
    });
    for (const kw of item.keywords ?? []) {
      items.push({ id: `${item.id}-${kw}`, label: `${item.label} — ${kw}`, type: 'section', href: `#${item.id}` });
    }
  }

  for (const [path, cssVar] of Object.entries(CSS_VAR_MAP)) {
    items.push({ id: path, label: `${path} (${cssVar})`, type: 'token', href: '#tokens' });
    items.push({ id: cssVar, label: cssVar, type: 'token', href: '#colors' });
  }

  for (const name of BOOTSTRAP_DEMOS) {
    items.push({ id: `bs-${name}`, label: name, type: 'bootstrap', href: '#bootstrap' });
  }

  for (const name of PLANTASONIC_COMPONENTS) {
    items.push({ id: `ps-${name}`, label: name, type: 'component', href: '#plantasonic' });
  }

  const classes = ['btn-primary', 'form-control', 'navbar', 'modal', 'card', 'alert', 'badge', 'nav-tabs'];
  for (const cls of classes) {
    items.push({ id: cls, label: `.${cls}`, type: 'bootstrap', href: '#bootstrap' });
  }

  return items;
}

const INDEX = buildIndex();

export function search(query: string, limit = 12): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return INDEX.filter((item) => item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)).slice(
    0,
    limit,
  );
}
