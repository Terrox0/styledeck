#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const PACKS = {
  'editorial': {
    name: 'editorial',
    title: 'Editorial',
    summary: 'Literary magazine columns, Fraunces serif headlines, drop caps, and warm paper ink.'
  },
  'neo-brutalist': {
    name: 'neo-brutalist',
    title: 'Neo-Brutalist',
    summary: 'High-impact Archivo Black, 3px solid ink borders, hard offset shadows, and electric vermilion.'
  },
  'swiss-grid': {
    name: 'swiss-grid',
    title: 'Swiss-Grid',
    summary: 'Schibsted Grotesk, mathematical 12-column asymmetric grid, massive numerals, and signal red.'
  },
  'terminal': {
    name: 'terminal',
    title: 'Terminal',
    summary: 'JetBrains Mono, cathode-dark phosphor greens, prompt headings, and ASCII dividers.'
  },
  'retro-print': {
    name: 'retro-print',
    title: 'Retro-Print',
    summary: 'DM Serif Display, aged manila paper, two-ink letterpress aesthetic, and stamped badges.'
  },
  'soft-organic': {
    name: 'soft-organic',
    title: 'Soft-Organic',
    summary: 'Young Serif, warm sun-bleached linen, rounded pebble containers, and terracotta clay.'
  },
  'quiet-luxury': {
    name: 'quiet-luxury',
    title: 'Quiet-Luxury',
    summary: 'Cormorant Garamond, obsidian dark canvas, spun silk champagne, and brushed antique gold.'
  },
  'y2k-chrome': {
    name: 'y2k-chrome',
    title: 'Y2K-Chrome',
    summary: 'Unbounded display sans, metallic chrome gradients, pill capsules, and playful sticker badges.'
  }
};

function printHelp() {
  console.log(`
styledeck v0.1.0
Stop AI coding agents from shipping the same purple-gradient website.

Usage:
  styledeck list
  styledeck add <pack> [options]

Options:
  --target <target>   Installation target: "agents" (default), "claude", or "cursor"
  --force             Overwrite existing files or existing AGENTS.md blocks
  --help, -h          Show this help message

Available Packs:
${Object.entries(PACKS).map(([id, p]) => `  - ${id.padEnd(16)} ${p.summary}`).join('\n')}

Examples:
  styledeck list
  styledeck add editorial
  styledeck add neo-brutalist --target claude
  styledeck add swiss-grid --target cursor --force
`);
}

function listPacks() {
  console.log('\nAvailable styledeck design-direction packs:\n');
  for (const [id, pack] of Object.entries(PACKS)) {
    console.log(`  * ${id.padEnd(16)} : ${pack.summary}`);
  }
  console.log('\nInstall any pack using: styledeck add <pack> [--target <agents|claude|cursor>]\n');
}

function parseArgs(args) {
  const parsed = {
    command: args[0],
    pack: null,
    target: 'agents',
    force: false,
    help: false
  };

  let i = 0;
  while (i < args.length) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--force') {
      parsed.force = true;
    } else if (arg === '--target') {
      parsed.target = args[i + 1]?.toLowerCase();
      i++;
    } else if (i === 1 && !arg.startsWith('-')) {
      parsed.pack = arg.toLowerCase();
    }
    i++;
  }

  return parsed;
}

function getPackContent(packId) {
  const packPath = path.join(ROOT_DIR, 'packs', packId, 'SKILL.md');
  if (!fs.existsSync(packPath)) {
    throw new Error(`Pack definition not found on disk at: ${packPath}`);
  }
  return fs.readFileSync(packPath, 'utf8');
}

function installToClaude(packId, force) {
  const destDir = path.join(process.cwd(), '.claude', 'skills', `styledeck-${packId}`);
  const destFile = path.join(destDir, 'SKILL.md');

  if (fs.existsSync(destFile) && !force) {
    console.error(`Error: Destination file already exists: ${destFile}`);
    console.error('Use --force to overwrite.');
    process.exit(1);
  }

  const content = getPackContent(packId);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destFile, content, 'utf8');
  console.log(`[OK] Installed ${packId} pack for Claude to: ${destFile}`);
}

function installToCursor(packId, force) {
  const destDir = path.join(process.cwd(), '.cursor', 'rules');
  const destFile = path.join(destDir, `styledeck-${packId}.mdc`);

  if (fs.existsSync(destFile) && !force) {
    console.error(`Error: Destination file already exists: ${destFile}`);
    console.error('Use --force to overwrite.');
    process.exit(1);
  }

  const rawSkill = getPackContent(packId);
  // Cursor rules benefit from globs in the frontmatter
  let mdcContent = rawSkill;
  if (rawSkill.startsWith('---')) {
    const secondFence = rawSkill.indexOf('---', 3);
    if (secondFence !== -1) {
      const frontmatter = rawSkill.slice(3, secondFence).trim();
      const body = rawSkill.slice(secondFence + 3).trim();
      mdcContent = `---\n${frontmatter}\nglobs: *\n---\n\n${body}\n`;
    }
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destFile, mdcContent, 'utf8');
  console.log(`[OK] Installed ${packId} pack for Cursor to: ${destFile}`);
}

function installToAgents(packId, force) {
  const destFile = path.join(process.cwd(), 'AGENTS.md');
  const startMarker = `<!-- STYLEDECK:START:${packId} -->`;
  const endMarker = `<!-- STYLEDECK:END:${packId} -->`;
  const content = getPackContent(packId);

  const blockToInsert = `\n${startMarker}\n${content}\n${endMarker}\n`;

  let existing = '';
  if (fs.existsSync(destFile)) {
    existing = fs.readFileSync(destFile, 'utf8');
  }

  const hasMarker = existing.includes(startMarker);

  if (hasMarker) {
    if (!force) {
      console.error(`Error: Pack "${packId}" is already installed in ${destFile}`);
      console.error('Use --force to overwrite.');
      process.exit(1);
    }

    // Replace the existing block
    const pattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
    const updated = existing.replace(pattern, blockToInsert.trim());
    fs.writeFileSync(destFile, updated, 'utf8');
    console.log(`[OK] Updated ${packId} pack in: ${destFile}`);
  } else {
    // Append
    const updated = existing ? `${existing.trimEnd()}\n${blockToInsert}` : `# Agent Directives\n${blockToInsert}`;
    fs.writeFileSync(destFile, updated, 'utf8');
    console.log(`[OK] Appended ${packId} pack into: ${destFile}`);
  }
}

function main() {
  const args = process.argv.slice(2);
  const { command, pack, target, force, help } = parseArgs(args);

  if (help || args.length === 0) {
    printHelp();
    process.exit(0);
  }

  if (command === 'list') {
    listPacks();
    process.exit(0);
  }

  if (command === 'add') {
    if (!pack) {
      console.error('Error: Missing pack name.');
      console.error('Usage: styledeck add <pack> [--target <agents|claude|cursor>]');
      console.error(`Available packs: ${Object.keys(PACKS).join(', ')}`);
      process.exit(1);
    }

    if (!PACKS[pack]) {
      console.error(`Error: Unknown pack "${pack}".`);
      console.error(`Available packs: ${Object.keys(PACKS).join(', ')}`);
      process.exit(1);
    }

    const validTargets = ['agents', 'claude', 'cursor'];
    if (!validTargets.includes(target)) {
      console.error(`Error: Invalid target "${target}". Must be one of: ${validTargets.join(', ')}`);
      process.exit(1);
    }

    switch (target) {
      case 'claude':
        installToClaude(pack, force);
        break;
      case 'cursor':
        installToCursor(pack, force);
        break;
      case 'agents':
      default:
        installToAgents(pack, force);
        break;
    }
    process.exit(0);
  }

  console.error(`Error: Unknown command "${command}".`);
  printHelp();
  process.exit(1);
}

main();
