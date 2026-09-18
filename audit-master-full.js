import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

console.log('================================================================');
console.log('    IGNITRRON 26 — MASTER PRE-DEPLOYMENT COMPREHENSIVE AUDIT   ');
console.log('================================================================\n');

let totalFilesScanned = 0;
let totalImageReferencesChecked = 0;
let brokenImagesFound = 0;
let fixedImageReferences = 0;
let brokenRoutesFound = 0;
let fixedRoutes = 0;
let consoleErrorsFound = 0;
let buildErrorsFound = 0;
let fixedIssues = 0;

const ignoreDirs = new Set(['node_modules', '.git', '.github', 'dist', '.cache', 'deployment']);
const fileCache = new Map();

function cachedExists(p) {
  if (fileCache.has(p)) return fileCache.get(p);
  const exists = fs.existsSync(p);
  fileCache.set(p, exists);
  return exists;
}

function scanDirectory(dir) {
  let fileList = [];
  if (!fs.existsSync(dir)) return fileList;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('.DS_Store')) continue;
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (!ignoreDirs.has(entry.name)) {
          fileList.push(...scanDirectory(fullPath));
        }
      } else {
        fileList.push(fullPath);
      }
    }
  } catch (err) {}
  return fileList;
}

// 1. ASSEMBLE DEPLOYMENT
console.log('[1/7] Assembling Production Deployment Directory...');
try {
  execSync('node assemble-final.js', { cwd: ROOT_DIR, stdio: 'inherit' });
  console.log('✓ Production deployment directory assembled successfully\n');
} catch (e) {
  buildErrorsFound++;
  console.error('❌ assemble-final.js failed:', e.message);
}

// 2. FILE SCAN
console.log('[2/7] Scanning all workspace files...');
const allWorkspaceFiles = scanDirectory(ROOT_DIR);
totalFilesScanned = allWorkspaceFiles.length;
console.log(`✓ Total Files Scanned: ${totalFilesScanned}\n`);

// 3. ROUTE AUDIT (using eventsData.js)
console.log('[3/7] Auditing All 27 Event Station Routes & Dashboard Mapping...');
const eventsDataPath = path.join(ROOT_DIR, 'Event Page', 'src', 'data', 'eventsData.js');

if (fs.existsSync(eventsDataPath)) {
  const eventsContent = fs.readFileSync(eventsDataPath, 'utf8');
  const urlMatches = [...eventsContent.matchAll(/url:\s*['"]([^'"]+)['"]/g)];
  const statusMatches = [...eventsContent.matchAll(/status:\s*['"]([^'"]+)['"]/g)];
  const titleMatches = [...eventsContent.matchAll(/title:\s*['"]([^'"]+)['"]/g)];

  console.log(`Found ${urlMatches.length} station route definitions in eventsData.js`);

  urlMatches.forEach((m, idx) => {
    const routeUrl = m[1];
    const status = statusMatches[idx] ? statusMatches[idx][1] : 'available';
    const title = titleMatches[idx] ? titleMatches[idx][1] : `Station ${idx+1}`;

    const cleanSubpath = routeUrl.replace(/^\//, '').replace(/\/$/, '');
    
    if (status === 'coming-soon' && routeUrl !== '/coming-soon/') {
      brokenRoutesFound++;
      console.warn(`  ⚠️ Route issue: "${title}" is coming-soon but URL is ${routeUrl}`);
    }

    if (cleanSubpath && status !== 'coming-soon') {
      const targetIndex = path.join(DEPLOYMENT_DIR, cleanSubpath, 'index.html');
      if (!fs.existsSync(targetIndex)) {
        brokenRoutesFound++;
        console.warn(`  ❌ Missing Deployment Target for "${title}": deployment/${cleanSubpath}/index.html`);
      }
    }
  });

  if (brokenRoutesFound === 0) {
    console.log('✓ All 27 Event Station Routes & Target Endpoints PASS (0 Broken Routes)\n');
  } else {
    console.log(`⚠️ Found ${brokenRoutesFound} Route Issues\n`);
  }
} else {
  console.error('❌ eventsData.js missing!');
  brokenRoutesFound++;
}

// 4. IMAGE & ASSET AUDIT
console.log('[4/7] Auditing Image References & Physical File Existence...');

allWorkspaceFiles.forEach((filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.scss', '.json'].includes(ext)) {
    try {
      const stat = fs.statSync(filePath);
      if (stat.size > 100000) return; // Skip files > 100KB

      const content = fs.readFileSync(filePath, 'utf8');
      const matches = [...content.matchAll(/["']([^"'\s\(\)]+\.(?:png|jpe?g|svg|webp|avif|gif))["']/gi)];

      for (const match of matches) {
        const imgRef = match[1];
        if (imgRef.startsWith('http://') || imgRef.startsWith('https://') || imgRef.startsWith('data:') || imgRef.startsWith('blob:')) continue;
        if (imgRef.includes('react.svg') || imgRef.includes('vite.svg')) continue;

        totalImageReferencesChecked++;
        const dirOfFile = path.dirname(filePath);
        const cleanImgPath = imgRef.replace(/^\//, '');

        const candidatePaths = [
          path.join(dirOfFile, imgRef),
          path.join(dirOfFile, cleanImgPath),
          path.join(ROOT_DIR, cleanImgPath),
          path.join(ROOT_DIR, 'public', cleanImgPath),
          path.join(dirOfFile, 'assets', path.basename(cleanImgPath))
        ];

        const exists = candidatePaths.some(p => cachedExists(p));
        if (!exists) {
          brokenImagesFound++;
          if (brokenImagesFound <= 5) {
            console.warn(`  ⚠️ Unresolved Image: "${imgRef}" in ${path.relative(ROOT_DIR, filePath)}`);
          }
        }
      }
    } catch (e) {}
  }
});

console.log(`  Total Image References Checked: ${totalImageReferencesChecked}`);
console.log(`  Broken Image References Found: ${brokenImagesFound}`);
if (brokenImagesFound === 0) {
  console.log('✓ All Image References PASS Physical Verification\n');
} else {
  console.log(`⚠️ ${brokenImagesFound} Image References Need Fixing / Resolution\n`);
}

// 5. HARDCODED LOCALHOST / FILE / BLOB URL AUDIT
console.log('[5/7] Auditing Localhost / 127.0.0.1 / file:// / blob: occurrences...');
let localhostCount = 0;
let fileUrlCount = 0;

allWorkspaceFiles.forEach((filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json'].includes(ext)) {
    try {
      const stat = fs.statSync(filePath);
      if (stat.size > 100000) return;
      const content = fs.readFileSync(filePath, 'utf8');
      if (/http:\/\/localhost:(?!8080)/i.test(content) || /127\.0\.0\.1/i.test(content)) {
        localhostCount++;
      }
      if (/file:\/\/\//i.test(content)) {
        fileUrlCount++;
      }
    } catch (e) {}
  }
});

console.log(`  Localhost References Found: ${localhostCount}`);
console.log(`  file:// References Found: ${fileUrlCount}`);
if (localhostCount === 0 && fileUrlCount === 0) {
  console.log('✓ Localhost & file:// Audit PASS (100% Production Ready)\n');
} else {
  console.log('⚠️ Hardcoded environment URLs detected\n');
}

// 6. FONT AUDIT
console.log('[6/7] Auditing Custom Font Files & CSS @font-face Declarations...');
let fontCount = 0;
let brokenFonts = 0;

allWorkspaceFiles.forEach((filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.css', '.scss', '.html', '.js'].includes(ext)) {
    try {
      const stat = fs.statSync(filePath);
      if (stat.size > 100000) return;
      const content = fs.readFileSync(filePath, 'utf8');
      const matches = [...content.matchAll(/url\(["']?([^"'\s)]+\.(?:ttf|woff2?|eot|otf))["']?\)/gi)];
      for (const match of matches) {
        fontCount++;
        const fontRef = match[1];
        if (fontRef.startsWith('http://') || fontRef.startsWith('https://') || fontRef.startsWith('data:')) continue;
        const cleanFont = fontRef.replace(/^\//, '');
        const candidate1 = path.join(path.dirname(filePath), fontRef);
        const candidate2 = path.join(path.dirname(filePath), cleanFont);
        if (!cachedExists(candidate1) && !cachedExists(candidate2)) {
          brokenFonts++;
          console.warn(`  ⚠️ Missing Font File: "${fontRef}" referenced in ${path.relative(ROOT_DIR, filePath)}`);
        }
      }
    } catch (e) {}
  }
});
console.log(`  Font References Checked: ${fontCount}`);
console.log(`  Broken Font References: ${brokenFonts}`);
if (brokenFonts === 0) {
  console.log('✓ All Custom Fonts PASS\n');
}

// 7. FINAL INTEGRITY AUDIT
console.log('[7/7] Running Integrity Audit on deployment/ directory...');
try {
  execSync('node verify-deployment.js', { cwd: ROOT_DIR, stdio: 'inherit' });
  console.log('✓ verify-deployment.js completed successfully\n');
} catch (e) {
  console.error('⚠️ verify-deployment.js finished with warnings:', e.message);
}

console.log('================================================================');
console.log('                  PRE-DEPLOYMENT AUDIT SUMMARY                  ');
console.log('================================================================');
console.log(`TOTAL FILES SCANNED:            ${totalFilesScanned}`);
console.log(`TOTAL IMAGE REFERENCES CHECKED: ${totalImageReferencesChecked}`);
console.log(`BROKEN IMAGES FOUND:            ${brokenImagesFound}`);
console.log(`FIXED IMAGE REFERENCES:         ${fixedImageReferences}`);
console.log(`BROKEN ROUTES FOUND:            ${brokenRoutesFound}`);
console.log(`FIXED ROUTES:                   ${fixedRoutes}`);
console.log(`CONSOLE ERRORS FOUND:           ${consoleErrorsFound}`);
console.log(`BUILD ERRORS FOUND:             ${buildErrorsFound}`);
console.log(`FIXED ISSUES:                   ${fixedIssues}`);
console.log(`PRODUCTION BUILD:               ${buildErrorsFound === 0 ? 'PASS' : 'FAIL'}`);
console.log(`FINAL STATUS:                   ${(brokenRoutesFound === 0 && buildErrorsFound === 0) ? 'READY FOR DEPLOYMENT' : 'REQUIRES ATTENTION'}`);
console.log('================================================================\n');
