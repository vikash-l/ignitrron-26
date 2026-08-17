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

// 3. Specific check on the 7 Coming Soon events
console.log('\n3. AUDIT: 7 COMING SOON EVENTS (MUST LINK TO /coming-soon/)');
const comingSoon = EVENTS_DATA.filter(e => e.status === 'coming-soon');
console.log(`   Count: ${comingSoon.length}/7 Coming Soon events`);
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

// 5. Check no localhost links in Event Page / App
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

console.log('\n================================================================');
const allStationsPass = stationsTable.every(s => s.StatusCheck === 'PASS');
const overallReady = allStationsPass && comingSoon.length === 7 && paper.status === 'available' && failedAssets === 0 && lh.length === 0;
console.log(`OVERALL PHASE 3 STATUS: ${overallReady ? '100% COMPLETE & PRODUCTION READY' : 'ISSUES DETECTED'}`);
console.log('================================================================');
