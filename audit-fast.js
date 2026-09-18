import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const PROJECTS = [
  { id: 'dashboard', name: 'Main Dashboard', folder: 'Event Page' },
  { id: 'coming-soon', name: 'Coming Soon Portal', folder: 'Coming_soon' },
  { id: 'launchpad', name: 'Launchpad', folder: '1-Lanch Pad' },
  { id: 'mun-conference', name: 'MUN Conference', folder: '2-MUN Conference' },
  { id: 'techno-clash', name: 'Techno Clash', folder: path.join('3-Techno clash', 'sample') },
  { id: 'mechanical-design-challenge', name: 'CAD Forge', folder: '4-Mechanical design challenge' },
  { id: 'legacy-code', name: 'Legacy Code', folder: '6-Legacy code' },
  { id: 'research-zero-to-hero', name: 'Research Zero to Hero', folder: '7-research_zero_to_hero' },
  { id: 'ipl-mega-auction', name: 'IPL Mega Auction', folder: '10-ipl' },
  { id: 'e-sports-arcade', name: 'E-Sports Arcade', folder: '11-E-sports Arcade' },
  { id: 'criminal-chronicles', name: 'Criminal Chronicles 2.0', folder: '12-Criminal Chronicals' },
  { id: 'milan-26', name: 'MILAN 26', folder: '13-Milan 26' },
  { id: 'project-presentation', name: 'Project Presentation', folder: '14-Project_Presntation' },
  { id: 'paper-presentation', name: 'Paper Presentation', folder: '15-Paper presentation' },
  { id: 'robo-race', name: 'Robo Race', folder: '17-roborace' },
  { id: 'drone-race', name: 'Drone Race', folder: '18-Drone_Race' },
  { id: 'line-follower', name: 'Line Follower', folder: '19-Line follower' },
  { id: 'marvel-quiz', name: 'Marvel Quiz', folder: '21-marvel quiz' },
  { id: 'game-genesis-x', name: 'Game Genesis X', folder: '22-Game genesis X' },
  { id: 'breaking-the-build', name: 'Breaking the Build', folder: '23-Breaking the build' },
  { id: 'japanese-street', name: 'Japanese Street', folder: '26-Japanese_Street' },
  { id: 'auto-show', name: 'Auto Show', folder: '27-Auto show' },
  { id: 'corporate-walk', name: 'Corporate Walk', folder: 'Corporate Walk' },
  { id: 'structure-x', name: 'StructureX', folder: 'Structure X' },
  { id: 'business-model-canvas', name: 'Business Model Canvas', folder: 'BMC' },
  { id: 'project-jarvis', name: 'Project JARVIS', folder: 'Project JARVIS' },
  { id: 'path-pilot', name: 'Path Pilot', folder: 'Path_Pilot' },
  { id: 'hire-code', name: 'Workshop 2 (Hire Code)', folder: 'Hire_Code' }
];

console.log(`Starting scan of ${PROJECTS.length} projects...`);

let summary = [];

for (const p of PROJECTS) {
  const fullP = path.join(ROOT_DIR, p.folder);
  let files = [];

  if (fs.existsSync(fullP)) {
    const srcDir = path.join(fullP, 'src');
    const targetDir = fs.existsSync(srcDir) ? srcDir : fullP;

    function walk(d, depth = 0) {
      if (depth > 4) return;
      try {
        const entries = fs.readdirSync(d, { withFileTypes: true });
        for (const e of entries) {
          if (e.isSymbolicLink() || e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'dist' || e.name === 'build' || e.name === 'assets' || e.name === 'images' || e.name === 'public') continue;
          const fp = path.join(d, e.name);
          if (e.isDirectory()) {
            walk(fp, depth + 1);
          } else if (e.isFile()) {
            const ext = path.extname(e.name).toLowerCase();
            if (['.tsx', '.jsx', '.ts', '.js', '.html', '.css'].includes(ext) && !e.name.endsWith('.d.ts') && !e.name.includes('.config.')) {
              files.push(fp);
            }
          }
        }
      } catch (err) {}
    }
    walk(targetDir);
    const indexHtml = path.join(fullP, 'index.html');
    if (fs.existsSync(indexHtml)) files.push(indexHtml);
  }

  let fwCount = 0, gfCount = 0, rgCount = 0;
  for (const f of files) {
    if (path.basename(f) === 'node_modules' || path.basename(f).startsWith('.')) continue;
    try {
      const stat = fs.statSync(f);
      if (stat.size > 500000) continue; // skip minified bundles
      const code = fs.readFileSync(f, 'utf8');
      if (/w-\[\d{3,4}px\]|min-w-\[\d{3,4}px\]|width:\s*\d{3,4}px/i.test(code)) fwCount++;
      if (/text-(?:7xl|8xl|9xl)|font-size:\s*(?:70|80|90|\d{3})px/i.test(code)) gfCount++;
      if (/grid-cols-[234568]/i.test(code) && !/grid-cols-1/i.test(code)) rgCount++;
    } catch (err) {}
  }

  summary.push({ id: p.id, name: p.name, files: files.length, fixedWidths: fwCount, giantFonts: gfCount, rigidGrids: rgCount });
  console.log(`✓ [${p.id}] ${p.name}: ${files.length} files -> FW:${fwCount}, GF:${gfCount}, RG:${rgCount}`);
}

fs.writeFileSync('audit-summary-fast.json', JSON.stringify(summary, null, 2));
console.log('AUDIT ALL DONE!');
