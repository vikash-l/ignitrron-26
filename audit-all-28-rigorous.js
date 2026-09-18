import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

const PACKAGES = [
  { name: 'Main Dashboard (Hub)',          subpath: '' },
  { name: 'Dashboard',                      subpath: 'dashboard' },
  { name: 'Coming Soon Portal',            subpath: 'coming-soon' },
  { name: 'Launchpad',                      subpath: 'launchpad' },
  { name: 'MUN Conference',                 subpath: 'mun-conference' },
  { name: 'Techno Clash – Quiz',           subpath: 'techno-clash' },
  { name: 'Mechanical Design Challenge',   subpath: 'mechanical-design-challenge' },
  { name: 'Legacy Code Rescue Challenge',  subpath: 'legacy-code' },
  { name: 'Research Zero to Hero',         subpath: 'research-zero-to-hero' },
  { name: 'IPL Mega Auction',               subpath: 'ipl-mega-auction' },
  { name: 'E-Sports Arcade',               subpath: 'e-sports-arcade' },
  { name: 'Criminal Chronicles 2.0',       subpath: 'criminal-chronicles' },
  { name: 'MILAN 26',                       subpath: 'milan-26' },
  { name: 'Project Presentation',          subpath: 'project-presentation' },
  { name: 'Paper Presentation',            subpath: 'paper-presentation' },
  { name: 'Robo Race',                      subpath: 'robo-race' },
  { name: 'Drone Race',                     subpath: 'drone-race' },
  { name: 'Line Follower Hackathon',       subpath: 'line-follower' },
  { name: 'Marvel Quiz',                    subpath: 'marvel-quiz' },
  { name: 'Game Genesis X',                 subpath: 'game-genesis-x' },
  { name: 'Breaking the Build',             subpath: 'breaking-the-build' },
  { name: 'Japanese Street',                subpath: 'japanese-street' },
  { name: 'Auto Show',                      subpath: 'auto-show' },
  { name: 'Corporate Walk',                 subpath: 'corporate-walk' },
  { name: 'StructureX',                     subpath: 'structure-x' },
  { name: 'Business Model Canvas',          subpath: 'business-model-canvas' },
  { name: 'Project J.A.R.V.I.S.',          subpath: 'project-jarvis' },
  { name: 'Path Pilot',                     subpath: 'path-pilot' },
  { name: 'Workshop 2 (Hire Code)',        subpath: 'hire-code' }
];

const subpathSet = new Set(PACKAGES.map(p => p.subpath).filter(s => s !== ''));

console.log('================================================================');
console.log('       IGNITRRON 26 — MASTER 28-WEBSITE DEPLOYMENT AUDIT       ');
console.log('================================================================\n');

let totalErrors = 0;

function getAllPackageFiles(dirPath, isRootHub = false, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const full = path.join(dirPath, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        if (isRootHub && subpathSet.has(file)) {
          return;
        }
        getAllPackageFiles(full, isRootHub, arrayOfFiles);
      }
    } else {
      // Ignore macOS duplicate files
      if (!/\s\d+(\.[^.]+)?$/i.test(file) && !/ (2|3|4|5|6|7|8|9)(\..*)?$/i.test(file)) {
        arrayOfFiles.push(full);
      }
    }
  });
  return arrayOfFiles;
}

for (const pkg of PACKAGES) {
  const targetDir = pkg.subpath === '' ? DEPLOYMENT_DIR : path.join(DEPLOYMENT_DIR, pkg.subpath);
  const isRootHub = pkg.subpath === '';

  if (!fs.existsSync(targetDir)) {
    console.error(`❌ [${pkg.name}]: Directory missing ${targetDir}`);
    totalErrors++;
    continue;
  }

  const indexHtml = path.join(targetDir, 'index.html');
  if (!fs.existsSync(indexHtml)) {
    console.error(`❌ [${pkg.name}]: index.html missing in ${targetDir}`);
    totalErrors++;
    continue;
  }

  // 1. Check for image hide CSS rules
  const htmlContent = fs.readFileSync(indexHtml, 'utf8');
  let imgHideErr = false;
  if (htmlContent.includes('ignitrron-mobile-img-hide') || htmlContent.includes('img { display: none !important; }')) {
    console.error(`   ❌ FAIL: Found image-hiding CSS tag in ${pkg.name} index.html!`);
    totalErrors++;
    imgHideErr = true;
  }

  // 2. Scan package files for image references
  const allFiles = getAllPackageFiles(targetDir, isRootHub);
  let totalImagesFound = 0;
  let brokenImagesCount = 0;
  let leadingSlashIssues = 0;

  const imageRegex = /["']([^"'\s]+\.(?:png|jpe?g|svg|webp|avif|gif))["']/gi;

  for (const filePath of allFiles) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.html', '.js', '.css', '.json'].includes(ext)) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const imgPath = match[1];

      if (imgPath.startsWith('http://') || imgPath.startsWith('https://') || imgPath.startsWith('data:')) {
        continue;
      }

      // Ignore standard unused Vite boilerplate string templates in JS bundles
      if (imgPath.includes('react.svg') || imgPath.includes('vite.svg')) {
        continue;
      }

      if (pkg.subpath !== '' && imgPath.startsWith('/assets/')) {
        leadingSlashIssues++;
      }

      totalImagesFound++;

      const cleanImgPath = imgPath.replace(/^\//, '');
      const fullImgPath = path.join(targetDir, cleanImgPath);

      if (!fs.existsSync(fullImgPath)) {
        const altAssetPath = path.join(targetDir, 'assets', path.basename(cleanImgPath));
        if (!fs.existsSync(altAssetPath)) {
          brokenImagesCount++;
          console.error(`   ⚠️ Missing Image Reference: ${imgPath} in ${path.relative(targetDir, filePath)}`);
        }
      }
    }
  }

  // 3. HTTP status check
  const url = `http://localhost:5173${pkg.subpath ? '/' + pkg.subpath + '/' : '/'}`;
  let httpOk = false;
  try {
    const statusStr = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`, { timeout: 3000 }).toString().trim();
    if (statusStr === '200') {
      httpOk = true;
    } else {
      console.error(`   ❌ HTTP Error: ${statusStr} for ${url}`);
      totalErrors++;
    }
  } catch (err) {
    console.error(`   ❌ HTTP Fetch Failed for ${url}`);
    totalErrors++;
  }

  if (brokenImagesCount > 0) totalErrors += brokenImagesCount;
  if (leadingSlashIssues > 0) totalErrors += leadingSlashIssues;

  const statusSymbol = (brokenImagesCount === 0 && leadingSlashIssues === 0 && !imgHideErr && httpOk) ? '✓' : '❌';
  console.log(`${statusSymbol} [${pkg.name.padEnd(28)}]: HTTP 200: ${httpOk ? 'OK' : 'FAIL'} | ImgHideClean: ${!imgHideErr ? 'YES' : 'NO'} | Images Checked: ${totalImagesFound} | Missing: ${brokenImagesCount} | SlashIssues: ${leadingSlashIssues}`);
}

console.log('\n================================================================');
if (totalErrors === 0) {
  console.log('  🎉 AUDIT COMPLETE: ALL 28 WEBSITES PASSED 100% WITH ZERO ERRORS');
} else {
  console.log(`  ⚠️ AUDIT COMPLETE: FOUND ${totalErrors} ISSUES ACROSS WEBSITES`);
}
console.log('================================================================');
