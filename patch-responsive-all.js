import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// Helper to replace fixed widths with responsive classes in React/Vite JSX/TSX files
function makeResponsiveJSX(code) {
  let updated = code;

  // 1. Convert fixed width arbitrary classes w-[XXXpx] (where XXX >= 300) into w-full max-w-[XXXpx]
  updated = updated.replace(/\bw-\[(\d{3,4})px\]/g, (match, p1) => {
    const val = parseInt(p1, 10);
    if (val >= 320) {
      return `w-full max-w-[${val}px]`;
    }
    return match;
  });

  // 2. Convert min-w-[XXXpx] (where XXX >= 300) into min-w-0 max-w-full
  updated = updated.replace(/\bmin-w-\[(\d{3,4})px\]/g, (match, p1) => {
    const val = parseInt(p1, 10);
    if (val >= 300) {
      return `w-full min-w-0 max-w-full md:min-w-[${val}px]`;
    }
    return match;
  });

  // 3. Convert unclamped giant typography text-7xl/8xl/9xl to responsive sizes
  updated = updated.replace(/\btext-9xl\b/g, 'text-4xl sm:text-6xl md:text-8xl lg:text-9xl');
  updated = updated.replace(/\btext-8xl\b/g, 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl');
  updated = updated.replace(/\btext-7xl\b/g, 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl');
  updated = updated.replace(/\btext-6xl\b/g, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
  updated = updated.replace(/\btext-5xl\b/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');

  // 4. Convert rigid grids without mobile single-column fallback
  // grid-cols-2 -> grid-cols-1 sm:grid-cols-2
  updated = updated.replace(/\bgrid-cols-2\b(?![^"']*grid-cols-1)/g, 'grid-cols-1 sm:grid-cols-2');
  // grid-cols-3 -> grid-cols-1 md:grid-cols-3
  updated = updated.replace(/\bgrid-cols-3\b(?![^"']*grid-cols-1)/g, 'grid-cols-1 md:grid-cols-3');
  // grid-cols-4 -> grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
  updated = updated.replace(/\bgrid-cols-4\b(?![^"']*grid-cols-1)/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4');

  // 5. Ensure images have max-w-full and h-auto if missing responsive bounds
  updated = updated.replace(/<img\s+([^>]*)(?<!max-w-full)([^>]*)>/gi, (match) => {
    if (!match.includes('max-w-') && !match.includes('w-full') && !match.includes('className=')) {
      return match.replace('<img ', '<img className="max-w-full h-auto" ');
    }
    return match;
  });

  return updated;
}

// Traverse project directory and patch React/HTML source files
function patchProject(projFolder) {
  const fullP = path.join(ROOT_DIR, projFolder);
  if (!fs.existsSync(fullP)) return;

  const srcP = path.join(fullP, 'src');
  const targetDir = fs.existsSync(srcP) ? srcP : fullP;

  let patchedFiles = 0;

  function walk(d, depth = 0) {
    if (depth > 5) return;
    try {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const e of entries) {
        if (e.isSymbolicLink() || e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'dist' || e.name === 'build' || e.name === 'assets' || e.name === 'public') continue;
        const fp = path.join(d, e.name);
        if (e.isDirectory()) {
          walk(fp, depth + 1);
        } else if (e.isFile() && /\.(tsx?|jsx?|html)$/i.test(e.name) && !e.name.endsWith('.d.ts') && !e.name.includes('.config.')) {
          const original = fs.readFileSync(fp, 'utf8');
          const responsive = makeResponsiveJSX(original);
          if (responsive !== original) {
            fs.writeFileSync(fp, responsive, 'utf8');
            patchedFiles++;
          }
        }
      }
    } catch (err) {}
  }

  walk(targetDir);

  // Also patch index.html if present
  const idxP = path.join(fullP, 'index.html');
  if (fs.existsSync(idxP)) {
    let idxCode = fs.readFileSync(idxP, 'utf8');
    if (!idxCode.includes('viewport-fit=cover')) {
      idxCode = idxCode.replace('<meta name="viewport"', '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" data-replaced="true"');
      fs.writeFileSync(idxP, idxCode, 'utf8');
    }
  }

  console.log(`✓ Patched ${projFolder}: ${patchedFiles} files updated.`);
}

const PROJECTS_FOLDERS = [
  'Event Page',
  'Coming_soon',
  '1-Lanch Pad',
  '3-Techno clash/sample',
  '4-Mechanical design challenge',
  '6-Legacy code',
  '7-research_zero_to_hero',
  '11-E-sports Arcade',
  '12-Criminal Chronicals',
  '13-Milan 26',
  '14-Project_Presntation',
  '17-roborace',
  '18-Drone_Race',
  '19-Line follower',
  '21-marvel quiz',
  '22-Game genesis X',
  '23-Breaking the build',
  '26-Japanese_Street',
  '27-Auto show',
  'Structure X',
  'BMC',
  'Path_Pilot',
  'Hire_Code'
];

console.log('Running responsive patching for all 23 React/Vite projects...');
PROJECTS_FOLDERS.forEach(patchProject);
