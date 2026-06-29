import { TEMPLATE_IDS } from '../lib/utils.mjs';

const DESCRIPTIONS = {
  'react-vite': 'Vite + React + Application Shell — recommended default',
  'react-bootstrap': 'React + Bootstrap + Application Shell',
  nextjs: 'Next.js App Router + Application Shell',
  electron: 'Electron + Vite + Application Shell',
};

export function listCommand() {
  console.log('Plantasonic starter templates:\n');
  for (const id of TEMPLATE_IDS) {
    console.log(`  ${id.padEnd(18)} ${DESCRIPTIONS[id]}`);
  }
}
