import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

const PROJECTS = [
  'Event Page', 'Coming_soon', '1-Lanch Pad', '3-Techno clash/sample',
  '4-Mechanical design challenge', '6-Legacy code', '7-research_zero_to_hero',
  '11-E-sports Arcade', '12-Criminal Chronicals', '13-Milan 26',
  '14-Project_Presntation', '17-roborace', '18-Drone_Race',
  '19-Line follower', '21-marvel quiz', '22-Game genesis X',
  '23-Breaking the build', '26-Japanese_Street', '27-Auto show',
  'Structure X', 'BMC', 'Path_Pilot', 'Hire_Code'
];

console.log('================================================================');
console.log('        AUDITING VITE CONFIG BASE PATHS ACROSS PROJECTS');
console.log('================================================================\n');

PROJECTS.forEach(proj => {
  const fullP = path.join(ROOT_DIR, proj);
  const viteConfigTs = path.join(fullP, 'vite.config.ts');
  const viteConfigJs = path.join(fullP, 'vite.config.js');
  const configPath = fs.existsSync(viteConfigTs) ? viteConfigTs : (fs.existsSync(viteConfigJs) ? viteConfigJs : null);

  if (configPath) {
    const code = fs.readFileSync(configPath, 'utf8');
    const baseMatch = code.match(/base:\s*["']([^"']+)["']/);
    console.log(`[${proj}] -> base: ${baseMatch ? baseMatch[1] : 'NOT DEFINED (default /)'}`);
  } else {
    console.log(`[${proj}] -> NO VITE CONFIG FOUND`);
  }
});
