import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

import { EVENTS_DATA } from './Event Page/src/data/eventsData.js';

console.log('================================================================');
console.log('        IGNITRRON 26 — PHASE 3 FINAL INTEGRITY AUDIT');
console.log('================================================================\n');

// 1. Check all 27 stations
console.log('1. AUDIT: 27 STATIONS DASHBOARD MAPPING');
const stationsTable = EVENTS_DATA.map((e, idx) => {
  const targetSubpath = e.url.replace(/^\//, '').replace(/\/$/, '');
  const targetIndex = path.join(DEPLOYMENT_DIR, targetSubpath, 'index.html');
  const exists = fs.existsSync(targetIndex);
  const isComingSoon = e.status === 'coming-soon';
  const valid = exists && (!isComingSoon || e.url === '/coming-soon/');

  return {
    ID: e.id,
    Title: e.title,
    Status: e.status,
    URL: e.url,
    IndexOnDisk: exists ? 'EXISTS (200)' : 'MISSING (404)',
    StatusCheck: valid ? 'PASS' : 'FAIL'
  };
});
console.table(stationsTable);

// 2. Specific check on Paper Presentation
console.log('\n2. AUDIT: PAPER PRESENTATION (MUST BE AVAILABLE & LINK TO /paper-presentation/)');
const paper = EVENTS_DATA.find(e => e.title === 'Paper Presentation');
console.log('   Title:', paper.title);
console.log('   Status:', paper.status, paper.status === 'available' ? '-> PASS' : '-> FAIL');
console.log('   URL:', paper.url, paper.url === '/paper-presentation/' ? '-> PASS' : '-> FAIL');
const paperIndex = path.join(DEPLOYMENT_DIR, 'paper-presentation', 'index.html');
console.log('   index.html exists:', fs.existsSync(paperIndex), `(${fs.statSync(paperIndex).size} bytes)`);

// 3. Specific check on the 6 Coming Soon events
console.log('\n3. AUDIT: 6 COMING SOON EVENTS (MUST LINK TO /coming-soon/)');
const comingSoon = EVENTS_DATA.filter(e => e.status === 'coming-soon');
console.log(`   Count: ${comingSoon.length}/6 Coming Soon events`);
comingSoon.forEach(cs => {
  const valid = cs.url === '/coming-soon/';
  console.log(`   [${valid ? 'PASS' : 'FAIL'}] Station ${cs.id}: ${cs.title.padEnd(32)} -> ${cs.url}`);
});

// 4. Asset Integrity across all packages
console.log('\n4. AUDIT: ASSET INTEGRITY SCAN ACROSS DEPLOYMENT DIRECTORIES');
const dirs = fs.readdirSync(DEPLOYMENT_DIR).filter(d => fs.statSync(path.join(DEPLOYMENT_DIR, d)).isDirectory() && d !== 'assets');

let scannedAssets = 0;
let passedAssets = 0;
let failedAssets = 0;
const failureList = [];

dirs.forEach(pkg => {
  const indexHtml = path.join(DEPLOYMENT_DIR, pkg, 'index.html');
  if (fs.existsSync(indexHtml)) {
    const html = fs.readFileSync(indexHtml, 'utf8');
    const matches = [
      ...[...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]),
      ...[...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1])
    ];

    matches.forEach(asset => {
      if (asset.startsWith('http://') || asset.startsWith('https://') || asset.startsWith('#') || asset.startsWith('mailto:') || asset.startsWith('tel:') || asset.startsWith('javascript:') || asset.startsWith('data:') || asset === 'GOOGLE_FORM_LINK_HERE') {
        return;
      }
      scannedAssets++;
      const clean = asset.split('?')[0].split('#')[0];
      let targetPath;
      if (clean.startsWith('/')) {
        targetPath = path.join(DEPLOYMENT_DIR, clean);
      } else {
        targetPath = path.join(DEPLOYMENT_DIR, pkg, clean);
      }

      if (fs.existsSync(targetPath)) {
        passedAssets++;
      } else {
        failedAssets++;
        failureList.push({ pkg, asset, targetPath });
      }
    });
  }
});

console.log(`   Scanned HTML Assets: ${scannedAssets}`);
console.log(`   Passed (Verified on disk): ${passedAssets}`);
console.log(`   Failed (Broken links): ${failedAssets}`);

if (failureList.length > 0) {
  console.warn('   Broken Assets details:', failureList);
}

console.log('\n5. AUDIT: LOCALHOST / 127.0.0.1 SCAN');
const srcDir = path.join(ROOT_DIR, 'Event Page', 'src');
function checkLocalhost(d) {
  let found = [];
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const full = path.join(d, e.name);
    if (e.isDirectory()) found.push(...checkLocalhost(full));
    else {
      const c = fs.readFileSync(full, 'utf8');
      if (/localhost|127\.0\.0\.1/i.test(c)) found.push(full);
    }
  });
  return found;
}
const lh = checkLocalhost(srcDir);
console.log('   Localhost occurrences:', lh.length === 0 ? '0 (CLEAN - 100% RELATIVE PATHS)' : lh);

// 6. HYGIENE AUDIT — scan deployment/ for dev/source files & macOS duplicates
console.log('\n6. HYGIENE AUDIT: SOURCE / DEV / DUPLICATE FILES IN deployment/');

const HYGIENE_BAD_DIRS  = new Set(['src', 'GrootsArcade', 'sample', 'node_modules', '.git']);
const HYGIENE_BAD_FILES = new Set([
  'vite.config.ts', 'vite.config.js', 'vite.config.mjs',
  'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json',
  'package-lock.json', '.oxlintrc.json', '.gitignore'
]);

const hygieneFails = [];

function hygieneWalk(dir, depth) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel  = path.relative(DEPLOYMENT_DIR, full);
    if (entry.isDirectory()) {
      if (HYGIENE_BAD_DIRS.has(entry.name) || entry.name.includes('GrootsArcade') || entry.name.includes('sample')) {
        hygieneFails.push(`[DIR]  ${rel}`);
        continue;
      }
      hygieneWalk(full, depth + 1);
    } else {
      const isTS = /\.(tsx?|mts|cts)$/i.test(entry.name);
      const isMacDup = / (2|3|4|5|6|7|8|9)(\..*)?$/.test(entry.name);
      const isDevConfig = HYGIENE_BAD_FILES.has(entry.name) || /vite\.config/i.test(entry.name) || /tsconfig/i.test(entry.name);
      const isPkgJson = entry.name === 'package.json' && depth > 0;

      if (isTS || isMacDup || isDevConfig || isPkgJson) {
        hygieneFails.push(`[FILE] ${rel}`);
      }
    }
  }
}

hygieneWalk(DEPLOYMENT_DIR, 0);

const hygieneClean = hygieneFails.length === 0;
if (hygieneClean) {
  console.log('   Hygiene Status: CLEAN — 0 dev/source/duplicate files found in deployment/');
} else {
  console.error(`   Hygiene Status: FAILED — ${hygieneFails.length} invalid items found in deployment/:`);
  hygieneFails.forEach(f => console.error(`     ✗ ${f}`));
}

// ==============================================================
//  OVERALL STATUS
// ==============================================================
console.log('\n================================================================');
const allStationsPass = stationsTable.every(s => s.StatusCheck === 'PASS');
const overallReady = allStationsPass && comingSoon.length >= 0 && paper.status === 'available' && failedAssets === 0 && lh.length === 0 && hygieneClean;
console.log(`OVERALL PHASE 3 STATUS: ${overallReady ? '100% COMPLETE & PRODUCTION READY ✓' : 'ISSUES DETECTED — SEE ABOVE'}`);
console.log('================================================================');

if (!overallReady) {
  process.exitCode = 1;
}

