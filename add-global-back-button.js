import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);

const BACK_BUTTON_HTML = `<!-- IGNITRRON GLOBAL TOP-LEFT BACK BUTTON -->
<a href="/" id="ignitrron-global-back-btn" style="position: fixed; top: 16px; left: 16px; z-index: 99999; display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 6px 12px; background: rgba(10, 15, 25, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 9999px; color: #ffffff; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 20px rgba(0,0,0,0.5); transition: all 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.06)'; this.style.borderColor='rgba(255,255,255,0.6)';" onmouseout="this.style.transform='scale(1)'; this.style.borderColor='rgba(255,255,255,0.25)';">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  <span>Back</span>
</a>`;

const PACKAGES = [
  { name: 'Dashboard',              src: path.join(ROOT_DIR, 'Event Page') },
  { name: 'Coming Soon',            src: path.join(ROOT_DIR, 'Coming_soon') },
  { name: 'Launchpad',              src: path.join(ROOT_DIR, '1-Lanch Pad') },
  { name: 'MUN Conference',         src: path.join(ROOT_DIR, '2-MUN Conference') },
  { name: 'Techno Clash',           src: path.join(ROOT_DIR, '3-Techno clash', 'sample') },
  { name: 'Mechanical Design',      src: path.join(ROOT_DIR, '4-Mechanical design challenge') },
  { name: 'Legacy Code',            src: path.join(ROOT_DIR, '6-Legacy code') },
  { name: 'Research Zero to Hero',  src: path.join(ROOT_DIR, '7-research_zero_to_hero') },
  { name: 'IPL Mega Auction',       src: path.join(ROOT_DIR, '10-ipl') },
  { name: 'E-Sports Arcade',        src: path.join(ROOT_DIR, '11-E-sports', '11-E-sports Arcade', '11-E-sports Arcade') },
  { name: 'Criminal Chronicles',    src: path.join(ROOT_DIR, '12-Criminal Chronicals') },
  { name: 'MILAN 26',               src: path.join(ROOT_DIR, '13-Milan 26') },
  { name: 'Project Presentation',   src: path.join(ROOT_DIR, '14-Project_Presntation') },
  { name: 'Paper Presentation',     src: path.join(ROOT_DIR, '15-Paper presentation') },
  { name: 'Robo Race',              src: path.join(ROOT_DIR, '17-roborace') },
  { name: 'Drone Race',             src: path.join(ROOT_DIR, '18-Drone_Race') },
  { name: 'Line Follower',          src: path.join(ROOT_DIR, '19-Line follower') },
  { name: 'Marvel Quiz',            src: path.join(ROOT_DIR, '21-marvel quiz') },
  { name: 'Game Genesis X',         src: path.join(ROOT_DIR, '22-Game genesis X') },
  { name: 'Breaking the Build',     src: path.join(ROOT_DIR, '23-Breaking the build') },
  { name: 'Japanese Street',        src: path.join(ROOT_DIR, '26-Japanese_Street') },
  { name: 'Auto Show',              src: path.join(ROOT_DIR, '27-Auto show') },
  { name: 'Corporate Walk',         src: path.join(ROOT_DIR, 'Corporate Walk') },
  { name: 'StructureX',             src: path.join(ROOT_DIR, 'Structure X') },
  { name: 'Business Model Canvas',  src: path.join(ROOT_DIR, 'BMC') },
  { name: 'Project JARVIS',         src: path.join(ROOT_DIR, 'Project JARVIS') },
  { name: 'Path Pilot',             src: path.join(ROOT_DIR, 'Path_Pilot') },
  { name: 'Workshop 2 (Hire Code)', src: path.join(ROOT_DIR, 'Hire_Code') }
];

export function injectBackButtonToHtml(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let html = fs.readFileSync(filePath, 'utf8');

  // Skip Dashboard itself (or inject on event sites)
  if (filePath.includes('Event Page')) return false;

  // Remove existing back button if present to prevent duplicates
  if (html.includes('id="ignitrron-global-back-btn"')) {
    html = html.replace(/<!-- IGNITRRON GLOBAL TOP-LEFT BACK BUTTON -->[\s\S]*?<\/a>/g, '');
  }

  // Inject before </body> or </html>
  if (html.includes('</body>')) {
    html = html.replace('</body>', `${BACK_BUTTON_HTML}\n</body>`);
  } else if (html.includes('</html>')) {
    html = html.replace('</html>', `${BACK_BUTTON_HTML}\n</html>`);
  } else {
    html += `\n${BACK_BUTTON_HTML}`;
  }

  fs.writeFileSync(filePath, html, 'utf8');
  return true;
}

console.log('Injecting Top-Left Back Button across all 27 projects...');
let count = 0;

for (const pkg of PACKAGES) {
  const sourceHtmlPath = path.join(pkg.src, 'index.html');
  const distHtmlPath = path.join(pkg.src, 'dist', 'index.html');

  const srcOk = injectBackButtonToHtml(sourceHtmlPath);
  const distOk = injectBackButtonToHtml(distHtmlPath);

  if (srcOk || distOk) {
    count++;
    console.log(`✓ ${pkg.name}`);
  } else {
    console.log(`- ${pkg.name}`);
  }
}

// Also process deployment index.html files
const deploymentDir = path.join(ROOT_DIR, 'deployment');
if (fs.existsSync(deploymentDir)) {
  const dirs = fs.readdirSync(deploymentDir);
  for (const d of dirs) {
    if (d === '.' || d === '..' || d === 'dashboard') continue;
    const depHtml = path.join(deploymentDir, d, 'index.html');
    injectBackButtonToHtml(depHtml);
  }
}

console.log(`\nCOMPLETED: Processed ${count} project source/dist folders & deployment directory.`);
