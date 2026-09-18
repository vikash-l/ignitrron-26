import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

const STATIONS = [
  { id: 'dashboard', name: 'Main Dashboard (Hub)', route: '/' },
  { id: 'coming-soon', name: 'Coming Soon Portal', route: '/coming-soon/' },
  { id: 'launchpad', name: 'Launchpad', route: '/launchpad/' },
  { id: 'mun-conference', name: 'MUN Conference', route: '/mun-conference/' },
  { id: 'techno-clash', name: 'Techno Clash – Quiz', route: '/techno-clash/' },
  { id: 'mechanical-design-challenge', name: 'Mechanical Design Challenge', route: '/mechanical-design-challenge/' },
  { id: 'legacy-code', name: 'Legacy Code Rescue Challenge', route: '/legacy-code/' },
  { id: 'research-zero-to-hero', name: 'Research Zero to Hero', route: '/research-zero-to-hero/' },
  { id: 'ipl-mega-auction', name: 'IPL Mega Auction', route: '/ipl-mega-auction/' },
  { id: 'e-sports-arcade', name: 'E-Sports Arcade', route: '/e-sports-arcade/' },
  { id: 'criminal-chronicles', name: 'Criminal Chronicles 2.0', route: '/criminal-chronicles/' },
  { id: 'milan-26', name: 'MILAN 26', route: '/milan-26/' },
  { id: 'project-presentation', name: 'Project Presentation', route: '/project-presentation/' },
  { id: 'paper-presentation', name: 'Paper Presentation', route: '/paper-presentation/' },
  { id: 'robo-race', name: 'Robo Race', route: '/robo-race/' },
  { id: 'drone-race', name: 'Drone Race', route: '/drone-race/' },
  { id: 'line-follower', name: 'Line Follower Hackathon', route: '/line-follower/' },
  { id: 'marvel-quiz', name: 'Marvel Quiz', route: '/marvel-quiz/' },
  { id: 'game-genesis-x', name: 'Game Genesis X', route: '/game-genesis-x/' },
  { id: 'breaking-the-build', name: 'Breaking the Build', route: '/breaking-the-build/' },
  { id: 'japanese-street', name: 'Japanese Street', route: '/japanese-street/' },
  { id: 'auto-show', name: 'Auto Show', route: '/auto-show/' },
  { id: 'corporate-walk', name: 'Corporate Walk', route: '/corporate-walk/' },
  { id: 'structure-x', name: 'StructureX', route: '/structure-x/' },
  { id: 'business-model-canvas', name: 'Business Model Canvas', route: '/business-model-canvas/' },
  { id: 'project-jarvis', name: 'Project J.A.R.V.I.S.', route: '/project-jarvis/' },
  { id: 'path-pilot', name: 'Path Pilot', route: '/path-pilot/' },
  { id: 'hire-code', name: 'Workshop 2 (Hire Code)', route: '/hire-code/' }
];

async function runRigorousVerification() {
  console.log('================================================================');
  console.log('       IGNITRRON 26 — RIGOROUS 28-WEBSITE VERIFICATION');
  console.log('================================================================\n');

  const report = [];

  for (const station of STATIONS) {
    const folderName = station.id === 'dashboard' ? '' : station.id;
    const stationDir = path.join(DEPLOYMENT_DIR, folderName);
    const indexHtmlPath = path.join(stationDir, 'index.html');

    const result = {
      name: station.name,
      route: station.route,
      htmlExists: fs.existsSync(indexHtmlPath),
      imageHideClean: true,
      viewportValid: false,
      imagesCount: 0,
      brokenImages: 0,
      httpStatus: 0
    };

    if (result.htmlExists) {
      const html = fs.readFileSync(indexHtmlPath, 'utf8');

      // 1. Check image hide style tag is NOT present
      result.imageHideClean = !html.includes('ignitrron-mobile-img-hide');

      // 2. Check viewport meta tag
      result.viewportValid = html.includes('viewport');

      // 3. Scan <img> tags in html
      const imgMatches = [...html.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/gi)];
      result.imagesCount = imgMatches.length;

      for (const m of imgMatches) {
        const src = m[1];
        if (src.startsWith('data:') || src.startsWith('http')) continue;
        const cleanSrc = src.split('?')[0].split('#')[0];
        const imgPath = path.join(stationDir, cleanSrc);
        if (!fs.existsSync(imgPath) || fs.statSync(imgPath).size === 0) {
          // Check assets subfolder fallback
          const fallbackPath = path.join(stationDir, 'assets', path.basename(cleanSrc));
          if (!fs.existsSync(fallbackPath) || fs.statSync(fallbackPath).size === 0) {
            result.brokenImages++;
          }
        }
      }
    }

    // 4. Test live HTTP endpoint
    try {
      const url = `http://localhost:5173${station.route}`;
      const resp = await fetch(url, { method: 'HEAD' });
      result.httpStatus = resp.status;
    } catch (err) {
      result.httpStatus = 0;
    }

    report.push(result);
  }

  // Print Summary Table
  console.log('WEBSITE VERIFICATION RESULTS:\n');
  console.log(
    'Station'.padEnd(30) +
    'Index.html'.padEnd(12) +
    'ImgHideClean'.padEnd(15) +
    'Viewport'.padEnd(10) +
    'Images'.padEnd(10) +
    'BrokenImg'.padEnd(12) +
    'HTTP Code'
  );
  console.log('-'.repeat(98));

  let allPassed = true;

  report.forEach(r => {
    const htmlStr = r.htmlExists ? '✓ YES' : '✗ NO';
    const hideStr = r.imageHideClean ? '✓ CLEAN' : '✗ FAILED';
    const vpStr = r.viewportValid ? '✓ YES' : '✗ NO';
    const httpStr = r.httpStatus === 200 ? '200 OK ✓' : `${r.httpStatus} ✗`;

    if (!r.htmlExists || !r.imageHideClean || !r.viewportValid || r.brokenImages > 0 || r.httpStatus !== 200) {
      allPassed = false;
    }

    console.log(
      r.name.padEnd(30) +
      htmlStr.padEnd(12) +
      hideStr.padEnd(15) +
      vpStr.padEnd(10) +
      String(r.imagesCount).padEnd(10) +
      String(r.brokenImages).padEnd(12) +
      httpStr
    );
  });

  console.log('\n================================================================');
  if (allPassed) {
    console.log('  FINAL VERDICT: ALL 28 WEBSITES PASSED 100% WITH ZERO ERRORS ✓');
  } else {
    console.log('  FINAL VERDICT: SOME WEBSITES REQUIRED ATTENTION ✗');
  }
  console.log('================================================================');
}

runRigorousVerification();
