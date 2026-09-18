import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const PROJECTS = [
  { id: 'dashboard', name: 'Main Dashboard', folder: 'Event Page' },
  { id: 'coming-soon', name: 'Coming Soon Portal', folder: 'Coming_soon' },
  { id: 'launchpad', name: 'Launchpad', folder: '1-Lanch Pad' },
  { id: 'mun-conference', name: 'MUN Conference', folder: '2-MUN Conference' },
  { id: 'techno-clash', name: 'Techno Clash', folder: '3-Techno clash/sample' },
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

function getFilesForProj(projFolder) {
  const fullP = path.join(ROOT_DIR, projFolder);
  let files = [];
  const srcP = path.join(fullP, 'src');
  if (fs.existsSync(srcP)) {
    function walk(d) {
      for (const item of fs.readdirSync(d, { withFileTypes: true })) {
        if (item.name.startsWith('.')) continue;
        const fp = path.join(d, item.name);
        if (item.isDirectory()) walk(fp);
        else if (item.isFile() && /\.(tsx?|jsx?|css)$/i.test(item.name)) files.push(fp);
      }
    }
    walk(srcP);
  }
  // add index.html if exists
  const idx = path.join(fullP, 'index.html');
  if (fs.existsSync(idx)) files.push(idx);

  // add any top-level css/js
  for (const item of fs.readdirSync(fullP, { withFileTypes: true })) {
    if (item.isFile() && /\.(css|js)$/i.test(item.name) && !item.name.includes('.config.')) {
      files.push(path.join(fullP, item.name));
    }
  }
  return [...new Set(files)];
}

let report = [];
for (const p of PROJECTS) {
  const files = getFilesForProj(p.folder);
  let fixedWidths = [], giantFonts = [], rigidGrids = [];

  for (const f of files) {
    const code = fs.readFileSync(f, 'utf8');
    const rel = path.relative(path.join(ROOT_DIR, p.folder), f);

    const fw = code.match(/w-\[\d{3,4}px\]|min-w-\[\d{3,4}px\]|width:\s*\d{3,4}px|min-width:\s*\d{3,4}px/gi);
    if (fw) fixedWidths.push({ file: rel, items: [...new Set(fw)] });

    const gf = code.match(/text-(?:7xl|8xl|9xl)|font-size:\s*(?:7|8|9|\d{2,3})px/gi);
    if (gf) giantFonts.push({ file: rel, items: [...new Set(gf)] });

    const rg = code.match(/grid-cols-[234568]/g);
    const rg1 = code.match(/grid-cols-1/g);
    if (rg && (!rg1 || rg.length > rg1.length)) {
      rigidGrids.push({ file: rel, count: rg.length - (rg1 ? rg1.length : 0) });
    }
  }

  report.push({
    id: p.id,
    name: p.name,
    folder: p.folder,
    fileCount: files.length,
    fixedWidthIssues: fixedWidths.length,
    giantFontIssues: giantFonts.length,
    rigidGridIssues: rigidGrids.length,
    fixedWidths,
    giantFonts,
    rigidGrids
  });
}

fs.writeFileSync('audit-summary.json', JSON.stringify(report, null, 2));
console.log('AUDIT COMPLETE FOR ALL 28 PROJECTS!');
