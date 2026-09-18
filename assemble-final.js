import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

const comingSoonSrc = fs.existsSync(path.join(ROOT_DIR, '0-Coming Soon Portal', 'dist'))
  ? path.join(ROOT_DIR, '0-Coming Soon Portal', 'dist')
  : path.join(ROOT_DIR, 'Coming_soon', 'dist');

const PACKAGES = [
  { name: 'Dashboard',              src: path.join(ROOT_DIR, 'Event Page', 'dist'),                         subpath: 'dashboard' },
  { name: 'Coming Soon Portal',     src: comingSoonSrc,                                                     subpath: 'coming-soon' },
  { name: 'Launchpad',              src: path.join(ROOT_DIR, '1-Lanch Pad', 'dist'),                        subpath: 'launchpad' },
  { name: 'MUN Conference',         src: path.join(ROOT_DIR, '2-MUN Conference'),                           subpath: 'mun-conference' },
  { name: 'Techno Clash',           src: path.join(ROOT_DIR, '3-Techno clash', 'sample', 'dist'),           subpath: 'techno-clash' },
  { name: 'Mechanical Design',      src: path.join(ROOT_DIR, '4-Mechanical design challenge', 'dist'),      subpath: 'mechanical-design-challenge' },
  { name: 'Legacy Code',            src: path.join(ROOT_DIR, '6-Legacy code', 'dist'),                      subpath: 'legacy-code' },
  { name: 'Research Zero to Hero',  src: path.join(ROOT_DIR, '7-research_zero_to_hero', 'dist'),            subpath: 'research-zero-to-hero' },
  { name: 'IPL Mega Auction',       src: path.join(ROOT_DIR, '10-ipl'),                                     subpath: 'ipl-mega-auction' },
  { name: 'E-Sports Arcade',        src: path.join(ROOT_DIR, '11-E-sports', '11-E-sports Arcade', '11-E-sports Arcade', 'dist'), subpath: 'e-sports-arcade' },
  { name: 'Criminal Chronicles',    src: path.join(ROOT_DIR, '12-Criminal Chronicals', 'dist'),             subpath: 'criminal-chronicles' },
  { name: 'MILAN 26',               src: path.join(ROOT_DIR, '13-Milan 26', 'dist'),                        subpath: 'milan-26' },
  { name: 'Project Presentation',   src: path.join(ROOT_DIR, '14-Project_Presntation', 'dist'),             subpath: 'project-presentation' },
  { name: 'Paper Presentation',     src: path.join(ROOT_DIR, '15-Paper presentation'),                      subpath: 'paper-presentation' },
  { name: 'Robo Race',              src: path.join(ROOT_DIR, '17-roborace', 'dist'),                        subpath: 'robo-race' },
  { name: 'Drone Race',             src: path.join(ROOT_DIR, '18-Drone_Race', 'dist'),                      subpath: 'drone-race' },
  { name: 'Line Follower',          src: path.join(ROOT_DIR, '19-Line follower', 'dist'),                   subpath: 'line-follower' },
  { name: 'Marvel Quiz',            src: path.join(ROOT_DIR, '21-marvel quiz', 'dist'),                     subpath: 'marvel-quiz' },
  { name: 'Game Genesis X',         src: path.join(ROOT_DIR, '22-Game genesis X', 'dist'),                  subpath: 'game-genesis-x' },
  { name: 'Breaking the Build',     src: path.join(ROOT_DIR, '23-Breaking the build', 'dist'),              subpath: 'breaking-the-build' },
  { name: 'Japanese Street',        src: path.join(ROOT_DIR, '26-Japanese_Street', 'dist'),                 subpath: 'japanese-street' },
  { name: 'Auto Show',              src: path.join(ROOT_DIR, 'auto show', 'out'),                            subpath: 'auto-show' },
  { name: 'Corporate Walk',         src: path.join(ROOT_DIR, 'Corporate Walk'),                             subpath: 'corporate-walk' },
  { name: 'StructureX',             src: path.join(ROOT_DIR, 'Structure X', 'dist'),                        subpath: 'structure-x' },
  { name: 'Business Model Canvas',  src: path.join(ROOT_DIR, 'BMC', 'dist'),                                subpath: 'business-model-canvas' },
  { name: 'Project JARVIS',         src: path.join(ROOT_DIR, 'Project JARVIS'),                             subpath: 'project-jarvis' },
  { name: 'Path Pilot',             src: path.join(ROOT_DIR, 'Path_Pilot', 'dist'),                         subpath: 'path-pilot' },
  { name: 'Workshop 2 (Hire Code)', src: path.join(ROOT_DIR, 'Hire_Code', 'dist'),                          subpath: 'hire-code' },
  { name: 'Workshop 1',             src: path.join(ROOT_DIR, 'Workshop-1', 'dist'),                         subpath: 'workshop-1' },
];

function copyClean(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  try {
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const name = entry.name;
      if (entry.isSymbolicLink()) continue;
      if (name === 'node_modules' || name === '.git' || name === '.github' || name === '.next' || name === '.cache' || name === 'src' || name === 'build' || name === 'deployment' || name === 'sample') continue;
      if (/\s\d+(\.[^.]+)?$/i.test(name) || / (2|3|4|5|6|7|8|9)(\..*)?$/i.test(name)) continue;
      const s = path.join(src, name);
      const d = path.join(dest, name);
      if (entry.isDirectory()) {
        copyClean(s, d);
      } else {
        try { fs.copyFileSync(s, d); } catch {}
      }
    }
  } catch (err) {}
}

console.log('Starting assembly...');

if (fs.existsSync(DEPLOYMENT_DIR)) {
  fs.rmSync(DEPLOYMENT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DEPLOYMENT_DIR, { recursive: true });

// Copy dashboard to deployment root
const dashDist = path.join(ROOT_DIR, 'Event Page', 'dist');
if (fs.existsSync(dashDist)) {
  copyClean(dashDist, DEPLOYMENT_DIR);
  console.log('✓ Main Dashboard -> / (root)');
}

// Deploy all packages
for (const pkg of PACKAGES) {
  const dest = path.join(DEPLOYMENT_DIR, pkg.subpath);
  let srcDir = pkg.src;
  if (!fs.existsSync(path.join(srcDir, 'index.html'))) {
    const rawFolder = srcDir.replace(/[\\\/]dist$/, '');
    if (fs.existsSync(path.join(rawFolder, 'index.html'))) {
      srcDir = rawFolder;
    }
  }
  if (!fs.existsSync(srcDir) && !fs.existsSync(path.join(srcDir, 'index.html'))) {
    console.error(`✗ MISSING source for [${pkg.name}]: ${pkg.src}`);
    continue;
  }

  copyClean(srcDir, dest);

  const targetIndex = path.join(dest, 'index.html');
  if (fs.existsSync(targetIndex)) {
    if (pkg.subpath !== 'dashboard') {
      const BACK_BUTTON_HTML = `<!-- IGNITRRON GLOBAL TOP-LEFT BACK BUTTON -->
<a href="/" id="ignitrron-global-back-btn" style="position: fixed; top: 16px; left: 16px; z-index: 99999; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 6px 12px; background: rgba(10, 15, 25, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 9999px; color: #ffffff; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 20px rgba(0,0,0,0.5); transition: all 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.06)'; this.style.borderColor='rgba(255,255,255,0.6)';" onmouseout="this.style.transform='scale(1)'; this.style.borderColor='rgba(255,255,255,0.25)';">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  <span>Back</span>
</a>`;
      let html = fs.readFileSync(targetIndex, 'utf8');
      if (html.includes('id="ignitrron-global-back-btn"')) {
        html = html.replace(/<!-- IGNITRRON GLOBAL TOP-LEFT BACK BUTTON -->[\s\S]*?<\/a>/g, '');
      }
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${BACK_BUTTON_HTML}\n</body>`);
      } else if (html.includes('</html>')) {
        html = html.replace('</html>', `${BACK_BUTTON_HTML}\n</html>`);
      }
      fs.writeFileSync(targetIndex, html, 'utf8');
    }
  }

  console.log(`✓ [/${pkg.subpath}/] ${pkg.name}`);
}

console.log('ASSEMBLY COMPLETE!');
