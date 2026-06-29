export type DocMeta = {
  purpose: string;
  usage: string;
  dos: string[];
  donts: string[];
};

export function docBlock(meta: DocMeta): string {
  return `
    <div class="ds-doc-block mb-4">
      <div class="row g-3">
        <div class="col-md-6">
          <h3 class="h6 text-uppercase ds-overline mb-2">Purpose</h3>
          <p class="small text-secondary mb-0">${meta.purpose}</p>
        </div>
        <div class="col-md-6">
          <h3 class="h6 text-uppercase ds-overline mb-2">Usage</h3>
          <p class="small text-secondary mb-0">${meta.usage}</p>
        </div>
        <div class="col-md-6">
          <h3 class="h6 text-uppercase ds-overline mb-2">Do</h3>
          <ul class="small text-secondary mb-0">${meta.dos.map((d) => `<li>${d}</li>`).join('')}</ul>
        </div>
        <div class="col-md-6">
          <h3 class="h6 text-uppercase ds-overline mb-2">Don't</h3>
          <ul class="small text-secondary mb-0">${meta.donts.map((d) => `<li>${d}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`;
}

export function sectionHeader(title: string, subtitle?: string): string {
  return `
    <header class="ds-section-header mb-4">
      <h1 class="h2 mb-1">${title}</h1>
      ${subtitle ? `<p class="text-secondary mb-0">${subtitle}</p>` : ''}
    </header>`;
}

export function demoCard(title: string, body: string, tokens: string[] = []): string {
  const tokenAttr = tokens.length
    ? ` data-ds-tokens="${tokens.join(',')}"`
    : '';
  return `
    <div class="card ds-demo-card mb-4"${tokenAttr}>
      <div class="card-header py-2">
        <span class="small fw-semibold">${title}</span>
        ${tokens.length ? `<code class="small ms-2 text-muted">${tokens.join(', ')}</code>` : ''}
      </div>
      <div class="card-body">${body}</div>
    </div>`;
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
