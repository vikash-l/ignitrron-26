import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const DIRS = [
  'Event Page',
  '0-Coming Soon Portal',
  'Coming_soon',
  '1-Lanch Pad',
  '2-MUN Conference',
  '3-Techno clash',
  '4-Mechanical design challenge',
  '6-Legacy code',
  '7-research_zero_to_hero',
  '10-ipl',
  '11-E-sports',
  '12-Criminal Chronicals',
  '13-Milan 26',
  '14-Project_Presntation',
  '15-Paper presentation',
  '17-roborace',
  '18-Drone_Race',
  '19-Line follower',
  '21-marvel quiz',
  '22-Game genesis X',
  '23-Breaking the build',
  '26-Japanese_Street',
  '27-Auto show',
  'Corporate Walk',
  'Structure X',
  'BMC',
  'Project JARVIS',
  'Path_Pilot',
  'Hire_Code'
];

const REPLACEMENTS = [
  [/9:00\s*AM\s*–\s*5:00\s*PM/gi, '9:00 AM – 4:00 PM'],
  [/9:00\s*AM\s*-\s*5:00\s*PM/gi, '9:00 AM - 4:00 PM'],
  [/9:00\s*AM\s*to\s*5:00\s*PM/gi, '9:00 AM to 4:00 PM'],
  [/9\s*AM\s*–\s*5\s*PM/gi, '9 AM – 4 PM'],
  [/9\s*AM\s*-\s*5\s*PM/gi, '9 AM - 4 PM'],
  [/9\s*AM\s*to\s*5\s*PM/gi, '9 AM to 4 PM'],
  [/9:00\s*–\s*5:00/gi, '9:00 – 4:00'],
  [/9:00\s*-\s*5:00/gi, '9:00 - 4:00'],

  [/10:00\s*AM\s*–\s*5:00\s*PM/gi, '10:00 AM – 4:00 PM'],
  [/10:00\s*AM\s*-\s*5:00\s*PM/gi, '10:00 AM - 4:00 PM'],
  [/10:00\s*AM\s*to\s*5:00\s*PM/gi, '10:00 AM to 4:00 PM'],
  [/10\s*AM\s*–\s*5\s*PM/gi, '10 AM – 4 PM'],
  [/10\s*AM\s*-\s*5\s*PM/gi, '10 AM - 4 PM'],
  [/10\s*AM\s*to\s*5\s*PM/gi, '10 AM to 4 PM'],
  [/10:00\s*–\s*5:00/gi, '10:00 – 4:00'],
  [/10:00\s*-\s*5:00/gi, '10:00 - 4:00'],

  [/8:30\s*AM\s*–\s*5:00\s*PM/gi, '8:30 AM – 4:00 PM'],
  [/8:30\s*AM\s*-\s*5:00\s*PM/gi, '8:30 AM - 4:00 PM'],

  [/5:00\s*PM/g, '4:00 PM'],
  [/5:00\s*pm/g, '4:00 pm'],
  [/5:00PM/g, '4:00PM'],
  [/5:00pm/g, '4:00pm'],
  [/05:00\s*PM/g, '04:00 PM'],
  [/05:00\s*pm/g, '04:00 pm'],
  [/5\s*PM\b/g, '4 PM'],
  [/5\s*pm\b/g, '4 pm'],
  [/\b5PM\b/g, '4PM'],
  [/\b5pm\b/g, '4pm'],
  [/17:00/g, '16:00'],
];

let totalFiles = 0;
let totalChanges = 0;

function checkFile(fp) {
  if (!fs.existsSync(fp)) return;
  if (fp.includes('/node_modules/') || fp.includes('/dist/') || fp.includes('/.git/') || fp.includes('/build/') || fp.includes('/.next/')) return;

  try {
    const stat = fs.statSync(fp);
    if (stat.isDirectory()) {
      for (const f of fs.readdirSync(fp)) {
        checkFile(path.join(fp, f));
      }
      return;
    }
    const ext = path.extname(fp).toLowerCase();
    if (!['.html', '.ts', '.tsx', '.js', '.json'].includes(ext)) return;
    if (fp.endsWith('.map') || fp.endsWith('.min.js')) return;
    if (stat.size > 150000) return;

    let text = fs.readFileSync(fp, 'utf8');
    if (!text.includes('5') && !text.includes('17')) return;

    let original = text;
    let count = 0;

    for (const [regex, rep] of REPLACEMENTS) {
      const matches = text.match(regex);
      if (matches) {
        count += matches.length;
        text = text.replace(regex, rep);
      }
    }

    if (text !== original) {
      fs.writeFileSync(fp, text, 'utf8');
      totalFiles++;
      totalChanges += count;
      console.log(`✓ [${count} changes]: ${path.relative(ROOT_DIR, fp)}`);
    }
  } catch (e) {}
}

console.log('Targeting event source data files...');

for (const d of DIRS) {
  const base = path.join(ROOT_DIR, d);
  checkFile(base);
}

console.log(`\n====================================================`);
console.log(`DONE: Modified ${totalFiles} files with ${totalChanges} time changes to 4:00 PM.`);
console.log(`====================================================\n`);
