import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// Find all CSS grid classes that have multi-column definitions without mobile overrides
function auditCssGrids(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Match class definitions with grid-template-columns
  const classBlocks = code.split(/(?=\.[a-zA-Z0-9_-]+\s*\{)/);
  for (const block of classBlocks) {
    const classNameMatch = block.match(/\.([a-zA-Z0-9_-]+)\s*\{/);
    if (!classNameMatch) continue;
    const className = classNameMatch[1];
    
    if (block.includes('grid-template-columns:') && !block.includes('1fr;') && !block.includes('@media')) {
      const match = block.match(/grid-template-columns:\s*([^;}]+)/);
      if (match && !match[1].trim().startsWith('1fr') && !match[1].trim().startsWith('repeat(1,')) {
        issues.push({ className, rule: match[1].trim() });
      }
    }
  }

  return issues;
}

console.log('Auditing CSS Grid definitions across static projects...');
const cssFiles = [
  '2-MUN Conference/styles/components.css',
  '10-ipl/style.css',
  '15-Paper presentation/style.css',
  'Corporate Walk/styles/components.css',
  'Corporate Walk/styles/main.css',
  'Project JARVIS/style.css'
];

cssFiles.forEach(rel => {
  const full = path.join(ROOT_DIR, rel);
  if (fs.existsSync(full)) {
    const issues = auditCssGrids(full);
    console.log(`\nFile: ${rel} -> Found ${issues.length} multi-column grid rules`);
    issues.forEach(i => console.log(`  - .${i.className}: ${i.rule}`));
  }
});
