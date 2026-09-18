import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const filesToUpdate = [
  'deployment/assets/index-Ys2sIAua.js',
  'deployment/dashboard/assets/index-Ys2sIAua.js',
  'Event Page/dist/assets/index-Ys2sIAua.js'
];

let updated = 0;

for (const relPath of filesToUpdate) {
  const fullPath = path.join(ROOT_DIR, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('Black Widow')) {
      content = content.replace(/heroCharacter:`Black Widow`,quote:`I've got red in my ledger\. I'd like to wipe it out\.`/g, `heroCharacter:\`Deadpool\`,quote:\`Maximum effort!\``);
      content = content.replace(/heroCharacter:"Black Widow",quote:"I've got red in my ledger\. I'd like to wipe it out\."/g, `heroCharacter:"Deadpool",quote:"Maximum effort!"`);
      content = content.replace(/Black Widow/g, 'Deadpool');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✓ Updated: ${relPath}`);
      updated++;
    }
  }
}

console.log(`Updated ${updated} bundle files.`);
