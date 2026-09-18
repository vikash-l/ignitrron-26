import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

function removeHideStyleFromFile(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  if (code.includes('ignitrron-mobile-img-hide')) {
    const updated = code.replace(/<style\s+id=["']ignitrron-mobile-img-hide["']>[\s\S]*?<\/style>/gi, '');
    if (updated !== code) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✓ Removed image-hide style from ${path.relative(ROOT_DIR, filePath)}`);
    }
  }
}

function walkAndClean(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === 'backup') continue;
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkAndClean(fp);
      } else if (e.isFile() && e.name.endsWith('.html')) {
        removeHideStyleFromFile(fp);
      }
    }
  } catch (err) {}
}

console.log('Cleaning injected image-hide style tags from all index.html files...');
walkAndClean(ROOT_DIR);
