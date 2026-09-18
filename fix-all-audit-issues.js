import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

// Default fallback favicon SVG
const DEFAULT_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="#00f0ff" stroke-width="5"/>
  <polygon points="50,20 62,40 85,45 68,62 72,85 50,73 28,85 32,62 15,45 38,40" fill="#00f0ff"/>
</svg>`;

function purgeDuplicateFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        purgeDuplicateFiles(fullPath);
      }
    } else {
      if (/\s\d+(\.[^.]+)?$/i.test(entry.name) || / (2|3|4|5|6|7|8|9)(\..*)?$/i.test(entry.name)) {
        try {
          fs.unlinkSync(fullPath);
          console.log(`Purged duplicate file: ${path.relative(ROOT_DIR, fullPath)}`);
        } catch {}
      }
    }
  }
}

function fixFaviconsAndAssetPaths(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Create favicon.svg in deployment folder if missing
      const favPath = path.join(fullPath, 'favicon.svg');
      if (!fs.existsSync(favPath) && entry.name !== 'node_modules' && entry.name !== '.git') {
        try { fs.writeFileSync(favPath, DEFAULT_FAVICON_SVG, 'utf8'); } catch {}
      }
      fixFaviconsAndAssetPaths(fullPath);
    } else if (entry.isFile() && (entry.name === 'index.html' || entry.name.endsWith('.js') || entry.name.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace leading slash subpath favicons e.g. href="/coming-soon/favicon.svg" -> href="favicon.svg"
      if (/href="\/\w+[\w-]*\/favicon\.svg"/i.test(content)) {
        content = content.replace(/href="\/\w+[\w-]*\/favicon\.svg"/gi, 'href="favicon.svg"');
        modified = true;
      }
      if (/href="\/favicon\.svg"/i.test(content)) {
        content = content.replace(/href="\/favicon\.svg"/gi, 'href="favicon.svg"');
        modified = true;
      }

      // Replace unused unbundled asset references e.g. ../assets/JwwBb.png or ../assets/hero.png
      if (content.includes('../assets/JwwBb.png')) {
        content = content.replace(/\.\.\/assets\/JwwBb\.png/g, 'assets/hero.png');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed asset paths in: ${path.relative(ROOT_DIR, fullPath)}`);
      }
    }
  }
}

console.log('1. Purging macOS duplicate files across workspace...');
purgeDuplicateFiles(ROOT_DIR);

console.log('2. Fixing favicons and asset paths in deployment directory...');
fixFaviconsAndAssetPaths(DEPLOYMENT_DIR);

console.log('3. Complete!');
