import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

// Create deployment directory
fs.mkdirSync(DEPLOYMENT_DIR, { recursive: true });

const PACKAGES = [
  { name: 'Dashboard', src: path.join(ROOT_DIR, 'Event Page', 'dist'), subpath: 'dashboard', isStatic: false },
  { name: 'Coming Soon', src: path.join(ROOT_DIR, 'Coming_soon', 'dist'), subpath: 'coming-soon', isStatic: false },
  { name: 'Launchpad', src: path.join(ROOT_DIR, '1-Lanch Pad', 'dist'), subpath: 'launchpad', isStatic: false },
  { name: 'MUN Conference', src: path.join(ROOT_DIR, '2-MUN Conference'), subpath: 'mun-conference', isStatic: true },
  { name: 'Techno Clash', src: path.join(ROOT_DIR, '3-Techno clash', 'sample', 'dist'), subpath: 'techno-clash', isStatic: false },
  { name: 'Mechanical Design Challenge', src: path.join(ROOT_DIR, '4-Mechanical design challenge', 'dist'), subpath: 'mechanical-design-challenge', isStatic: false },
  { name: 'Legacy Code', src: path.join(ROOT_DIR, '6-Legacy code', 'dist'), subpath: 'legacy-code', isStatic: false },
  { name: 'Research Zero to Hero', src: path.join(ROOT_DIR, '7-research_zero_to_hero', 'dist'), subpath: 'research-zero-to-hero', isStatic: false },
  { name: 'IPL Mega Auction', src: path.join(ROOT_DIR, '10-ipl-main', 'dist'), subpath: 'ipl-mega-auction', isStatic: false },
  { name: 'E-Sports Arcade', src: path.join(ROOT_DIR, '11-E-sports Arcade', 'dist'), subpath: 'e-sports-arcade', isStatic: false },
  { name: 'Criminal Chronicles', src: path.join(ROOT_DIR, '12-Criminal Chronicals', 'dist'), subpath: 'criminal-chronicles', isStatic: false },
  { name: 'MILAN 26', src: path.join(ROOT_DIR, '13-Milan 26', 'dist'), subpath: 'milan-26', isStatic: false },
  { name: 'Project Presentation', src: path.join(ROOT_DIR, '14-Project_Presntation', 'dist'), subpath: 'project-presentation', isStatic: false },
  { name: 'Paper Presentation', src: path.join(ROOT_DIR, '15-Paper presentation'), subpath: 'paper-presentation', isStatic: true },
  { name: 'Robo Race', src: path.join(ROOT_DIR, '17-roborace', 'dist'), subpath: 'robo-race', isStatic: false },
  { name: 'Drone Race', src: path.join(ROOT_DIR, '18-Drone_Race', 'dist'), subpath: 'drone-race', isStatic: false },
  { name: 'Line Follower', src: path.join(ROOT_DIR, '19-Line follower', 'dist'), subpath: 'line-follower', isStatic: false },
  { name: 'Marvel Quiz', src: path.join(ROOT_DIR, '21-Marvel Quiz', 'sample', 'dist'), subpath: 'marvel-quiz', isStatic: false },
  { name: 'Game Genesis X', src: path.join(ROOT_DIR, '22-Game genesis X', 'dist'), subpath: 'game-genesis-x', isStatic: false },
  { name: 'Breaking the Build', src: path.join(ROOT_DIR, '23-Breaking the build', 'dist'), subpath: 'breaking-the-build', isStatic: false },
  { name: 'Japanese Street', src: path.join(ROOT_DIR, '26-Japanese_Street', 'dist'), subpath: 'japanese-street', isStatic: false },
  { name: 'Auto Show', src: path.join(ROOT_DIR, '27-Auto show', 'dist'), subpath: 'auto-show', isStatic: false }
];

console.log('Assembling all 22 packages into deployment directory:');

for (const pkg of PACKAGES) {
  const dest = path.join(DEPLOYMENT_DIR, pkg.subpath);
  fs.mkdirSync(dest, { recursive: true });

  if (pkg.isStatic) {
    ['index.html', 'assets', 'styles', 'scripts', 'data'].forEach(item => {
      const s = path.join(pkg.src, item);
      if (fs.existsSync(s)) {
        fs.cpSync(s, path.join(dest, item), { recursive: true });
      }
    });
  } else {
    if (!fs.existsSync(pkg.src)) {
      console.error(`ERROR: Source dist missing for ${pkg.name} at ${pkg.src}`);
      continue;
    }
    fs.cpSync(pkg.src, dest, { recursive: true });
  }

  const idxExists = fs.existsSync(path.join(dest, 'index.html'));
  console.log(`[DEPLOYED] /${pkg.subpath}/ -> index.html: ${idxExists ? 'OK' : 'MISSING'}`);
}

// Copy dashboard files to root deployment folder
['index.html', 'assets', 'favicon.svg', 'icons.svg', 'ignitrron_logo.png', 'ignitrron_official_banner.png'].forEach(item => {
  const s = path.join(ROOT_DIR, 'Event Page', 'dist', item);
  if (fs.existsSync(s)) {
    fs.cpSync(s, path.join(DEPLOYMENT_DIR, item), { recursive: true });
  }
});
console.log('Root dashboard synced.');
