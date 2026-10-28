#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'docs', 'img');

const TARGETS = [
  { name: 'editorial', url: path.join(ROOT_DIR, 'examples', 'editorial', 'index.html') },
  { name: 'neo-brutalist', url: path.join(ROOT_DIR, 'examples', 'neo-brutalist', 'index.html') },
  { name: 'swiss-grid', url: path.join(ROOT_DIR, 'examples', 'swiss-grid', 'index.html') },
  { name: 'terminal', url: path.join(ROOT_DIR, 'examples', 'terminal', 'index.html') },
  { name: 'retro-print', url: path.join(ROOT_DIR, 'examples', 'retro-print', 'index.html') },
  { name: 'soft-organic', url: path.join(ROOT_DIR, 'examples', 'soft-organic', 'index.html') },
  { name: 'quiet-luxury', url: path.join(ROOT_DIR, 'examples', 'quiet-luxury', 'index.html') },
  { name: 'y2k-chrome', url: path.join(ROOT_DIR, 'examples', 'y2k-chrome', 'index.html') },
  { name: 'before-after', url: path.join(ROOT_DIR, 'examples', 'before-after', 'index.html') },
  { name: 'gallery', url: path.join(ROOT_DIR, 'gallery', 'index.html') }
];

async function captureScreenshots() {
  let playwright;
  try {
    playwright = await import('playwright');
  } catch (err) {
    console.log('\n[NOTICE] Playwright is not installed in the current environment.');
    console.log('Playwright is an optional dev dependency for automated screenshot capture.');
    console.log('To install Playwright and capture demo screenshots:');
    console.log('  npm install -D playwright');
    console.log('  npx playwright install chromium');
    console.log('  node scripts/screenshot.mjs\n');
    console.log('Skipping screenshot generation as permitted by specification.\n');
    process.exit(0);
  }

  const { chromium } = playwright;
  console.log('Starting Playwright Chromium browser for screenshot capture...');
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const target of TARGETS) {
    const fileUrl = `file://${path.resolve(target.url).replace(/\\/g, '/')}`;
    console.log(`Capturing [${target.name}] at 1440px from: ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    const outPath = path.join(OUTPUT_DIR, `${target.name}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved screenshot -> ${outPath}`);
  }

  await browser.close();
  console.log('\nAll 1440px screenshots captured successfully in docs/img/.\n');
}

captureScreenshots().catch(err => {
  console.error('Error during screenshot capture:', err);
  process.exit(1);
});
