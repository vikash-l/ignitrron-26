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

function checkProjectAssetPaths(projFolder) {
  const fullP = path.join(ROOT_DIR, projFolder);
  if (!fs.existsSync(fullP)) return [];

  const issues = [];

  function walk(d) {
    try {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        if (e.name === 'node_modules' || e.name === 'dist' || e.name === 'backup' || e.name.startsWith('.')) continue;
        const fp = path.join(d, e.name);
        if (e.isDirectory()) {
          walk(fp);
        } else if (e.isFile() && /\.(tsx?|jsx?|html|css)$/i.test(e.name)) {
          const content = fs.readFileSync(fp, 'utf8');
          // Match src="/...", href="/...", url("/...") where path starts with / and ends with asset extension
          const matches = [...content.matchAll(/(?:src|href|url)\s*=\s*["']\/([^"']+\.(?:png|jpg|jpeg|svg|gif|webp|mp4|webm|avif))["']/gi)];
          const cssUrlMatches = [...content.matchAll(/url\s*\(\s*["']?\/([^"')]+\.(?:png|jpg|jpeg|svg|gif|webp|mp4|webm|avif))["']?\s*\)/gi)];
          
          for (const m of [...matches, ...cssUrlMatches]) {
            issues.push({ file: path.relative(fullP, fp), rawMatch: m[0], assetPath: m[1] });
          }
        }
      }
    } catch (err) {}
  }

  walk(fullP);
  return issues;
}

console.log('================================================================');
console.log('       AUDITING ABSOLUTE ROOT ASSET PATHS ACROSS 28 PROJECTS');
console.log('================================================================\n');

let totalIssues = 0;

PROJECTS.forEach(proj => {
  const issues = checkProjectAssetPaths(proj);
  if (issues.length > 0) {
    console.log(`[${proj}] -> Found ${issues.length} absolute root asset references:`);
    issues.forEach(i => {
      console.log(`  - File: ${i.file} | Match: ${i.rawMatch}`);
    });
    totalIssues += issues.length;
  }
});

console.log(`\nTOTAL ABSOLUTE ASSET PATH ISSUES FOUND: ${totalIssues}`);
