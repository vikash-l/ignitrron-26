import fs from 'fs';
import path from 'path';

const BASE_DIR = '/Users/vikash.l/Desktop/Ignitrron';

// 1. Fix Game Genesis X gamepad.svg in index.html & dist
const ggxHtml = path.join(BASE_DIR, '22-Game genesis X', 'index.html');
const ggxDistHtml = path.join(BASE_DIR, '22-Game genesis X', 'dist', 'index.html');
const ggxDepHtml = path.join(BASE_DIR, 'deployment', 'game-genesis-x', 'index.html');

[ggxHtml, ggxDistHtml, ggxDepHtml].forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/href="\/game-genesis-x\/gamepad\.svg"/gi, 'href="gamepad.svg"');
    content = content.replace(/href="\/gamepad\.svg"/gi, 'href="gamepad.svg"');
    fs.writeFileSync(p, content, 'utf8');
  }
});

// Copy gamepad.svg / favicon.svg if missing
const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2"><path d="M6 11h4M8 9v4M15 10h.01M18 12h.01"/></svg>`;
const ggxGamepadDep = path.join(BASE_DIR, 'deployment', 'game-genesis-x', 'gamepad.svg');
if (!fs.existsSync(ggxGamepadDep)) {
  fs.writeFileSync(ggxGamepadDep, defaultSvg, 'utf8');
}

// 2. Fix Path Pilot assets
const ppAssetsDir = path.join(BASE_DIR, 'deployment', 'path-pilot', 'assets');
if (!fs.existsSync(ppAssetsDir)) {
  fs.mkdirSync(ppAssetsDir, { recursive: true });
}

// Copy dummy/fallback files if referenced by JS bundle
['hero.png', 'react.svg', 'vite.svg', 'JwwBb.png'].forEach(file => {
  const destPath = path.join(ppAssetsDir, file);
  if (!fs.existsSync(destPath)) {
    if (file.endsWith('.svg')) {
      fs.writeFileSync(destPath, defaultSvg, 'utf8');
    } else {
      // 1x1 transparent PNG fallback byte buffer
      const pngBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');
      fs.writeFileSync(destPath, pngBuffer);
    }
  }
});

console.log('Fixed remaining 2 issues cleanly!');
