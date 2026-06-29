import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateTokens, TOKEN_FILES } from './lib/tokens.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function flattenAliases(obj, prefix = '', out = new Map(), dupes = []) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && '$value' in value) {
      if (out.has(path)) dupes.push(path);
      out.set(path, value);
    } else if (value && typeof value === 'object') {
      flattenAliases(value, path, out, dupes);
    }
  }
  return { map: out, dupes };
}

function loadFlat(file) {
  return flattenAliases(JSON.parse(readFileSync(file, 'utf8')));
}

const files = [
  ['foundation', TOKEN_FILES.foundation],
  ['dark', TOKEN_FILES.dark],
  ['light', TOKEN_FILES.light],
];

const withinFileDupes = [];
for (const [name, file] of files) {
  const { dupes } = loadFlat(file);
  for (const path of dupes) withinFileDupes.push({ path, file: name });
}

const validation = validateTokens();
let ok = validation.ok;

console.log('Plantasonic quality check\n');

if (!validation.ok) {
  console.error('✗ Token validation failed');
  ok = false;
} else {
  console.log(`✓ Tokens valid (${validation.cssVarCount} CSS mappings)`);
}

if (withinFileDupes.length > 0) {
  console.error('✗ Duplicate token paths within a token file:');
  for (const { path, file } of withinFileDupes) {
    console.error(`  ${path} in ${file}`);
  }
  ok = false;
} else {
  console.log('✓ No duplicate token paths within token files');
}

const bootstrapFiles = [
  ['scss/bootstrap-theme.scss', /\$ds-color-primary|bootstrap-compile\.generated/],
  ['scss/bootstrap-components.scss', /\$ds-color-primary-default|var\(--ds-/],
  ['scss/bootstrap-utilities.scss', /\$ds-color-primary-default|var\(--ds-/],
  ['scss/css-theme-bridge.scss', /bootstrap-components/],
  ['scss/_bootstrap-compile.generated.scss', /\$ds-color-primary:/],
];
for (const [rel, pattern] of bootstrapFiles) {
  const content = readFileSync(join(ROOT, rel), 'utf8');
  if (!pattern.test(content)) {
    console.error(`✗ ${rel} missing expected token references`);
    ok = false;
  }
}
console.log('✓ Bootstrap SCSS layer files present and token-linked');

const bootstrapSections = join(ROOT, 'showcase/src/sections/bootstrap');
const sectionCount = readdirSync(bootstrapSections).filter((f) => f.endsWith('.ts') && f !== 'index.ts').length;
if (sectionCount < 10) {
  console.error(`✗ Bootstrap showcase coverage low (${sectionCount} sections)`);
  ok = false;
} else {
  console.log(`✓ Bootstrap showcase coverage (${sectionCount} sections)`);
}

const templates = readdirSync(join(ROOT, 'templates'));
if (templates.length < 4) {
  console.error('✗ Missing starter templates');
  ok = false;
} else {
  console.log(`✓ Starter templates (${templates.length})`);
}

if (!ok) process.exit(1);
console.log('\nAll quality checks passed');
