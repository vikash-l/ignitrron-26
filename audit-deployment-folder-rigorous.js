import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

console.log('================================================================');
console.log('      IGNITRRON 26 — PRODUCTION DEPLOYMENT FOLDER AUDIT       ');
console.log('================================================================\n');

if (!fs.existsSync(DEPLOYMENT_DIR)) {
  console.error(`❌ DEPLOYMENT DIRECTORY MISSING: ${DEPLOYMENT_DIR}`);
  process.exit(1);
}

const subdirs = fs.readdirSync(DEPLOYMENT_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== 'node_modules' && d.name !== '.git' && d.name !== 'assets')
  .map(d => d.name);

console.log(`Found ${subdirs.length} deployed event routes in /deployment/\n`);

let totalErrors = 0;
let totalCheckedImages = 0;

function getAllFolderFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const full = path.join(dirPath, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getAllFolderFiles(full, arrayOfFiles);
      }
    } else {
      if (!/\s\d+(\.[^.]+)?$/i.test(file) && !/ (2|3|4|5|6|7|8|9)(\..*)?$/i.test(file)) {
        arrayOfFiles.push(full);
      }
    }
  });
  return arrayOfFiles;
}

// 1. Audit Root Dashboard / (in /deployment)
console.log(`🔍 Auditing [ROOT DASHBOARD] (/)`);
const rootIndex = path.join(DEPLOYMENT_DIR, 'index.html');
if (!fs.existsSync(rootIndex)) {
  console.error(`   ❌ index.html missing in root deployment directory`);
  totalErrors++;
} else {
  console.log(`   ✓ Root index.html exists`);
}

// 2. Audit each deployed subpath directory
for (const subpath of subdirs) {
  const folderPath = path.join(DEPLOYMENT_DIR, subpath);
  const indexHtml = path.join(folderPath, 'index.html');

  console.log(`\n🔍 Auditing [/${subpath}/]`);

  if (!fs.existsSync(indexHtml)) {
    console.error(`   ❌ MISSING index.html in /deployment/${subpath}/`);
    totalErrors++;
    continue;
  }

  // A. Check for image-hiding CSS rules
  const htmlContent = fs.readFileSync(indexHtml, 'utf8');
  let imgHideErr = false;
  if (htmlContent.includes('ignitrron-mobile-img-hide') || htmlContent.includes('img { display: none !important; }')) {
    console.error(`   ❌ FAIL: Found image-hiding CSS tag in index.html!`);
    imgHideErr = true;
    totalErrors++;
  } else {
    console.log(`   ✓ Image-Hiding CSS: CLEAN`);
  }

  // B. Check for leading slash /assets/ paths in subpath index.html
  let leadingSlashErr = false;
  if (htmlContent.includes('src="/assets/') || htmlContent.includes('href="/assets/')) {
    console.error(`   ❌ FAIL: Found hardcoded leading slash /assets/ in index.html!`);
    leadingSlashErr = true;
    totalErrors++;
  } else {
    console.log(`   ✓ Subpath Asset Resolution: CLEAN`);
  }

  // C. Scan all HTML, CSS, JS files for image references
  const allFiles = getAllFolderFiles(folderPath);
  let folderImagesCount = 0;
  let missingImagesCount = 0;

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
      if (imgPath.includes('react.svg') || imgPath.includes('vite.svg')) {
        continue;
      }

      folderImagesCount++;
      totalCheckedImages++;

      const cleanImgPath = imgPath.replace(/^\//, '');
      let fullImgPath = path.join(folderPath, cleanImgPath);

      if (!fs.existsSync(fullImgPath)) {
        const altAssetPath = path.join(folderPath, 'assets', path.basename(cleanImgPath));
        if (!fs.existsSync(altAssetPath)) {
          missingImagesCount++;
          totalErrors++;
          console.error(`   ⚠️ Missing Image Reference: ${imgPath} in ${path.relative(folderPath, filePath)}`);
        }
      }
    }
  }

  console.log(`   ✓ Image Assets Scanned: ${folderImagesCount} | Missing: ${missingImagesCount}`);

  // D. Live HTTP GET response test
  const url = `http://localhost:5173/${subpath}/`;
  try {
    const statusStr = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`, { timeout: 3000 }).toString().trim();
    if (statusStr === '200') {
      console.log(`   ✓ Live HTTP Response: 200 OK (${url})`);
    } else {
      console.error(`   ❌ Live HTTP Response: ${statusStr} (${url})`);
      totalErrors++;
    }
  } catch (err) {
    console.error(`   ❌ HTTP Request Failed for ${url}`);
    totalErrors++;
  }
}

console.log('\n================================================================');
console.log(`  AUDIT SUMMARY: Checked ${subdirs.length} deployed routes & ${totalCheckedImages} image references.`);
if (totalErrors === 0) {
  console.log('  🎉 DEPLOYMENT FOLDER AUDIT COMPLETE: 100% PERFECT WITH ZERO ISSUES');
} else {
  console.log(`  ⚠️ DEPLOYMENT FOLDER AUDIT COMPLETE: FOUND ${totalErrors} ISSUES`);
}
console.log('================================================================');
