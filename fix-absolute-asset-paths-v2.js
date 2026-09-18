import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const PROJECTS = [
  'Event Page', 'Coming_soon', '1-Lanch Pad', '2-MUN Conference',
  '3-Techno clash/sample', '4-Mechanical design challenge', '6-Legacy code',
  '7-research_zero_to_hero', '10-ipl', '11-E-sports Arcade',
  '12-Criminal Chronicals', '13-Milan 26', '14-Project_Presntation',
  '15-Paper presentation', '17-roborace', '18-Drone_Race',
  '19-Line follower', '21-marvel quiz', '22-Game genesis X',
  '23-Breaking the build', '26-Japanese_Street', '27-Auto show',
  'Corporate Walk', 'Structure X', 'BMC', 'Project JARVIS',
  'Path_Pilot', 'Hire_Code'
];

function fixProjectAssetPaths(projFolder) {
  const fullP = path.join(ROOT_DIR, projFolder);
  if (!fs.existsSync(fullP)) return 0;

  let fixedCount = 0;

  function walk(d) {
    try {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        if (e.name === 'node_modules' || e.name === 'dist' || e.name === 'backup' || e.name.startsWith('.')) continue;
        const fp = path.join(d, e.name);
        if (e.isDirectory()) {
          walk(fp);
        } else if (e.isFile() && /\.(tsx?|jsx?|ts|js|html|css)$/i.test(e.name)) {
          let content = fs.readFileSync(fp, 'utf8');
          
          // Match any string quote starting with /assets/ or /filename.png/jpg/svg/etc
          const updated = content.replace(/(["'])\/((?:assets\/)?[^"'\s]+\.(?:png|jpg|jpeg|svg|gif|webp|mp4|webm|avif))\1/gi, (match, q, relPath) => {
            if (relPath.startsWith('http') || relPath.startsWith('//') || relPath.startsWith('data:')) return match;
            return `${q}${relPath}${q}`;
          });

          if (updated !== content) {
            fs.writeFileSync(fp, updated, 'utf8');
            fixedCount++;
            console.log(`  ✓ Fixed absolute string in ${path.relative(fullP, fp)}`);
          }
        }
      }
    } catch (err) {}
  }

  walk(fullP);
  return fixedCount;
}

console.log('================================================================');
console.log('    FIXING ALL LEADING SLASH ASSET STRINGS ACROSS ALL 28 PROJECTS');
console.log('================================================================\n');

let totalFixed = 0;

PROJECTS.forEach(proj => {
  const fixed = fixProjectAssetPaths(proj);
  if (fixed > 0) {
    console.log(`[${proj}] -> ${fixed} files updated.`);
    totalFixed += fixed;
  }
});

console.log(`\nTOTAL FILES FIXED: ${totalFixed}`);
