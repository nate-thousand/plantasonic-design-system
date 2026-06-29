import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = join(ROOT, 'docs/generated');
const INDEX = join(OUT_DIR, 'INDEX.md');

const sections = [
  ['Architecture', '../platform/ARCHITECTURE.md'],
  ['Folder Structure', '../platform/FOLDER_STRUCTURE.md'],
  ['Theme System', '../platform/THEME_SYSTEM.md'],
  ['Bootstrap Integration', '../platform/BOOTSTRAP.md'],
  ['Component Usage', '../platform/COMPONENTS.md'],
  ['Token Usage', '../platform/TOKENS.md'],
  ['Accessibility', '../platform/ACCESSIBILITY.md'],
  ['Versioning', '../platform/VERSIONING.md'],
  ['Migration Guides', '../platform/MIGRATION.md'],
  ['Examples', '../platform/EXAMPLES.md'],
  ['FAQ', '../platform/FAQ.md'],
  ['Tokens (generated)', './TOKENS.md'],
  ['Components (generated)', './COMPONENTS.md'],
];

mkdirSync(OUT_DIR, { recursive: true });

const lines = [
  '# Plantasonic Design System — Documentation Index',
  '',
  'Generated index. Run `npm run docs` to refresh generated pages.',
  '',
  '## Platform guides',
  '',
  ...sections.map(([title, href]) => `- [${title}](${href})`),
  '',
  '## Core references',
  '',
  '- [Vision and Scope](../VISION_AND_SCOPE.md)',
  '- [Design Principles](../DESIGN_PRINCIPLES.md)',
  '- [Brand Guidelines](../BRAND_GUIDELINES.md)',
  '',
];

writeFileSync(INDEX, lines.join('\n'), 'utf8');
console.log(`✓ ${INDEX}`);
