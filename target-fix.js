import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const TARGET_FILENAMES = new Set([
  'event.ts',
  'eventsData.js',
  'eventData.ts',
  'data.js',
  'event.json',
  'index.html',
  'placeholder-event.ts'
]);

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

let fileCount = 0;
let changeCount = 0;

function walk(dir) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }

  for (const entry of entries) {
    const name = entry.name;
    if (name === 'node_modules' || name === '.git' || name === '.github' || name === '.next' || name === 'dist' || name === 'build' || name === 'deployment') continue;
    const fp = path.join(dir, name);
    if (entry.isDirectory()) {
      walk(fp);
    } else if (entry.isFile()) {
      if (TARGET_FILENAMES.has(name)) {
        try {
          let text = fs.readFileSync(fp, 'utf8');
          if (!text.includes('5') && !text.includes('17')) continue;

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
            fileCount++;
            changeCount += count;
            console.log(`✓ [${count} fixes]: ${path.relative(ROOT_DIR, fp)}`);
          }
        } catch (e) {}
      }
    }
  }
}

console.log('Targeting event configuration & HTML files strictly...');
walk(ROOT_DIR);
console.log(`\n====================================================`);
console.log(`DONE: Modified ${fileCount} files with ${changeCount} time changes.`);
console.log(`====================================================\n`);
