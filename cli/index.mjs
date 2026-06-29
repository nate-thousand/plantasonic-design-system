#!/usr/bin/env node

import { createCommand } from './commands/create.mjs';
import { listCommand } from './commands/list.mjs';

const [,, command, ...args] = process.argv;

const HELP = `Plantasonic Design System CLI

Usage:
  plantasonic create <name> [--template <id>] [--dir <path>]
  plantasonic list
  plantasonic --help

Templates:
  react-vite       Vite + React + Application Shell (recommended)
  react-bootstrap  React + Bootstrap + Application Shell
  nextjs           Next.js App Router + Application Shell
  electron         Electron + Vite + Application Shell

All templates use plantasonic-design-system/shell — configure src/shell-config.ts (or lib/shell-config.ts).

Examples:
  npx plantasonic create my-app
  npx plantasonic create my-app --template nextjs
  npx plantasonic create my-app --dir ../projects
`;

async function main() {
  if (!command || command === '--help' || command === '-h') {
    console.log(HELP);
    process.exit(0);
  }

  try {
    if (command === 'create') {
      await createCommand(args);
      return;
    }
    if (command === 'list') {
      listCommand();
      return;
    }
    console.error(`Unknown command: ${command}\n`);
    console.log(HELP);
    process.exit(1);
  } catch (error) {
    console.error(`✗ ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
}

main();
