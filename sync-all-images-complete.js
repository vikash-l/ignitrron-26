import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOY_DIR = path.join(ROOT_DIR, 'deployment');

const subdirs = [
  { folder: '1-Lanch Pad', subpath: 'launchpad' },
  { folder: '2-MUN Conference', subpath: 'mun-conference' },
  { folder: '3-Techno clash/sample', subpath: 'techno-clash' },
  { folder: '3-Techno clash', subpath: 'techno-clash' },
  { folder: '4-Mechanical design challenge', subpath: 'mechanical-design-challenge' },
  { folder: '6-Legacy code', subpath: 'legacy-code' },
  { folder: '7-research_zero_to_hero', subpath: 'research-zero-to-hero' },
  { folder: '10-ipl-main', subpath: 'ipl-mega-auction' },
  { folder: '11-E-sports Arcade', subpath: 'e-sports-arcade' },
  { folder: '12-Criminal Chronicals', subpath: 'criminal-chronicles' },
  { folder: '13-Milan 26', subpath: 'milan-26' },
  { folder: '14-Project_Presntation', subpath: 'project-presentation' },
  { folder: '15-Paper presentation', subpath: 'paper-presentation' },
  { folder: '17-roborace', subpath: 'robo-race' },
  { folder: '18-Drone_Race', subpath: 'drone-race' },
  { folder: '19-Line follower', subpath: 'line-follower' },
  { folder: '21-Marvel Quiz/sample', subpath: 'marvel-quiz' },
  { folder: '21-Marvel Quiz', subpath: 'marvel-quiz' },
  { folder: '22-Game genesis X', subpath: 'game-genesis-x' },
  { folder: '23-Breaking the build', subpath: 'breaking-the-build' },
  { folder: '26-Japanese_Street', subpath: 'japanese-street' },
  { folder: '27-Auto show', subpath: 'auto-show' },
  { folder: 'Coming_soon', subpath: 'coming-soon' }
];

console.log('=== FULL COMPLETE IMAGE SYNC ===');

let totalCopied = 0;

for (const { folder, subpath } of subdirs) {
  const srcBase = path.join(ROOT_DIR, folder);
  if (!fs.existsSync(srcBase)) continue;

  const targetBase = path.join(DEPLOY_DIR, subpath);
  const targetAssets = path.join(targetBase, 'assets');
  const targetSrcAssets = path.join(targetBase, 'src', 'assets');
  const rootAssets = path.join(DEPLOY_DIR, 'assets');

  fs.mkdirSync(targetBase, { recursive: true });
  fs.mkdirSync(targetAssets, { recursive: true });
  fs.mkdirSync(targetSrcAssets, { recursive: true });
  fs.mkdirSync(rootAssets, { recursive: true });

  scanAndCopy(srcBase, (file, relPath) => {
    const filename = path.basename(file);
    
    // Copy to target subpath root
    fs.copyFileSync(file, path.join(targetBase, filename));
    // Copy to target subpath/assets
    fs.copyFileSync(file, path.join(targetAssets, filename));
    // Copy to target subpath/src/assets
    fs.copyFileSync(file, path.join(targetSrcAssets, filename));
    // Copy to global deployment/assets/
    fs.copyFileSync(file, path.join(rootAssets, filename));
    // Copy to global deployment/ root
    fs.copyFileSync(file, path.join(DEPLOY_DIR, filename));

    totalCopied++;
  });
}

function scanAndCopy(dir, callback) {
  for (const item of fs.readdirSync(dir)) {
    if (item === 'node_modules' || item === '.git' || item === 'dist') continue;
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scanAndCopy(full, callback);
    } else if (/\.(png|jpe?g|svg|webp|avif|gif|ico)$/i.test(item)) {
      callback(full, item);
    }
  }
}

console.log(`Successfully synced ${totalCopied} image files across all locations.`);
