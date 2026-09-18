import fs from 'fs';
import path from 'path';

const BASE_DIR = '/Users/vikash.l/Desktop/Ignitrron';

function fixHtmlFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('href="/') && html.includes('favicon.svg"')) {
    html = html.replace(/href="\/(?:[^\/]+\/)+favicon\.svg"/g, 'href="favicon.svg"');
    html = html.replace(/href="\/favicon\.svg"/g, 'href="favicon.svg"');
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Fixed favicon in: ${filePath}`);
  }
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        scanDir(full);
      }
    } else if (entry.name === 'index.html') {
      fixHtmlFile(full);
    }
  }
}

console.log('Fixing all favicon.svg hrefs...');
scanDir(BASE_DIR);
console.log('Done!');
