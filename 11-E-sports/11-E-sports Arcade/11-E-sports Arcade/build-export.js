import fs from 'fs';
import path from 'path';
import { build } from 'vite';

const outDir = '/Users/vikash.l/Desktop/Ignitrron/deployment/e-sports-arcade';
fs.mkdirSync(outDir, { recursive: true });

const res = await build({
  root: process.cwd(),
  configFile: './vite.config.ts'
});

const bundle = Array.isArray(res) ? res[0] : res;
for (const c of bundle.output) {
  const dest = path.join(outDir, c.fileName);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (c.type === 'asset') {
    fs.writeFileSync(dest, c.source);
  } else {
    fs.writeFileSync(dest, c.code);
  }
}

if (fs.existsSync('public')) {
  fs.readdirSync('public').forEach(f => {
    fs.cpSync(path.join('public', f), path.join(outDir, f), { recursive: true });
  });
}

console.log('Successfully written to:', outDir, 'Files:', fs.readdirSync(outDir));
