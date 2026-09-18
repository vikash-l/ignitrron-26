import fs from 'fs';
import path from 'path';

const ROOT_DIR = '/Users/vikash.l/Desktop/Ignitrron';
const DEPLOY_DIR = path.join(ROOT_DIR, 'deployment');

const projects = [
  { name: 'Launchpad', src: '1-Lanch Pad/dist', target: 'launchpad', isDist: true },
  { name: 'MUN Conference', src: '2-MUN Conference', target: 'mun-conference', isDist: false },
  { name: 'Techno Clash', src: '3-Techno clash/sample/dist', target: 'techno-clash', isDist: true },
  { name: 'Mechanical Design', src: '4-Mechanical design challenge/dist', target: 'mechanical-design-challenge', isDist: true },
  { name: 'Legacy Code', src: '6-Legacy code/dist', target: 'legacy-code', isDist: true },
  { name: 'Research Zero to Hero', src: '7-research_zero_to_hero/dist', target: 'research-zero-to-hero', isDist: true },
  { name: 'IPL Mega Auction', src: '10-ipl', target: 'ipl-mega-auction', isDist: false },
  { name: 'E-Sports Arcade', src: '11-E-sports Arcade/dist', target: 'e-sports-arcade', isDist: true },
  { name: 'Criminal Chronicles', src: '12-Criminal Chronicals/dist', target: 'criminal-chronicles', isDist: true },
  { name: 'Milan 26', src: '13-Milan 26/dist', target: 'milan-26', isDist: true },
  { name: 'Project Presentation', src: '14-Project_Presntation/dist', target: 'project-presentation', isDist: true },
  { name: 'Paper Presentation', src: '15-Paper presentation', target: 'paper-presentation', isDist: false },
  { name: 'Robo Race', src: '17-roborace/dist', target: 'robo-race', isDist: true },
  { name: 'Drone Race', src: '18-Drone_Race/dist', target: 'drone-race', isDist: true },
  { name: 'Line Follower', src: '19-Line follower/dist', target: 'line-follower', isDist: true },
  { name: 'Marvel Quiz', src: '21-marvel quiz/dist', target: 'marvel-quiz', isDist: true },
  { name: 'Game Genesis X', src: '22-Game genesis X/dist', target: 'game-genesis-x', isDist: true },
  { name: 'Breaking the Build', src: '23-Breaking the build/dist', target: 'breaking-the-build', isDist: true },
  { name: 'Japanese Street', src: '26-Japanese_Street/dist', target: 'japanese-street', isDist: true },
  { name: 'Auto Show', src: '27-Auto show/dist', target: 'auto-show', isDist: true },
  { name: 'Business Model Canvas', src: 'BMC/dist', target: 'business-model-canvas', isDist: true },
  { name: 'Coming Soon', src: 'Coming_soon/dist', target: 'coming-soon', isDist: true },
  { name: 'Path Pilot (Line Follower Contest)', src: 'Path_Pilot/dist', target: 'path-pilot', isDist: true },
  { name: 'Workshop 2', src: 'Hire_Code/dist', target: 'hire-code', isDist: true }
];

console.log('====================================================');
console.log('   IGNITRRON PRODUCTION DEPLOYMENT MASTER BUILD');
console.log('====================================================\n');

// 1. Clean and deploy main dashboard
console.log('1. Deploying Main Dashboard (Event Page/dist)...');
const eventDist = path.join(ROOT_DIR, 'Event Page', 'dist');
if (fs.existsSync(eventDist)) {
  fs.cpSync(eventDist, DEPLOY_DIR, { recursive: true });
  console.log('   ✓ Main Dashboard deployed to root');
} else {
  console.error('   ✗ ERROR: Event Page/dist missing!');
}

// 2. Deploy each sub-site
for (const p of projects) {
  const srcPath = path.join(ROOT_DIR, p.src);
  const destPath = path.join(DEPLOY_DIR, p.target);

  if (!fs.existsSync(srcPath)) {
    console.error('   ✗ Missing source for ' + p.name + ': ' + srcPath);
    continue;
  }

  // Clear target directory
  fs.rmSync(destPath, { recursive: true, force: true });
  fs.mkdirSync(destPath, { recursive: true });

  if (p.isDist) {
    // Copy compiled dist
    fs.cpSync(srcPath, destPath, { recursive: true });
    
    // Normalize asset paths in index.html to subpath-relative
    const indexPath = path.join(destPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf8');
      
      // Update absolute assets to subpath assets
      html = html.replace(/href="\/assets\//g, 'href="/' + p.target + '/assets/')
                 .replace(/src="\/assets\//g, 'src="/' + p.target + '/assets/')
                 .replace(/href='\/assets\//g, "href='/" + p.target + "/assets/")
                 .replace(/src='\/assets\//g, "src='/" + p.target + "/assets/")
                 .replace(/href="\/vite.svg"/g, 'href="/' + p.target + '/vite.svg"')
                 .replace(/href="\/favicon.svg"/g, 'href="/' + p.target + '/favicon.svg"');

      fs.writeFileSync(indexPath, html);
    }
    console.log('   ✓ Deployed [Compiled]: ' + p.name.padEnd(26) + ' -> /' + p.target + '/');
  } else {
    // Copy static files (excluding node_modules and sample directories)
    for (const item of fs.readdirSync(srcPath)) {
      if (item.startsWith('.') || item === 'node_modules' || item === 'sample' || item.endsWith('.ps1')) continue;
      fs.cpSync(path.join(srcPath, item), path.join(destPath, item), { recursive: true });
    }
    console.log('   ✓ Deployed [Static]:   ' + p.name.padEnd(26) + ' -> /' + p.target + '/');
  }
}

console.log('\n====================================================');
console.log('   DEPLOYMENT BUILD COMPLETE');
console.log('====================================================');
