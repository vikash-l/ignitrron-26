import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = __dirname;
const PORT = 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Root -> Event Page Dashboard
    if (pathname === '/' || pathname === '/index.html') {
      const dashboardPath = path.join(ROOT_DIR, 'Event Page', 'dist', 'index.html');
      serveFile(res, dashboardPath);
      return;
    }

    // Check if path directly matches a file on disk
    let candidatePath = path.join(ROOT_DIR, pathname);
    if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isFile()) {
      serveFile(res, candidatePath);
      return;
    }

    // If accessing directory, check for index.html or dist/index.html
    if (fs.existsSync(candidatePath) && fs.statSync(candidatePath).isDirectory()) {
      const dirIndex = path.join(candidatePath, 'index.html');
      const distIndex = path.join(candidatePath, 'dist', 'index.html');
      if (fs.existsSync(dirIndex)) {
        serveFile(res, dirIndex);
        return;
      } else if (fs.existsSync(distIndex)) {
        serveFile(res, distIndex);
        return;
      }
    }

    // If accessing an un-prefixed asset like /assets/... resolve via Referer
    if (pathname.startsWith('/assets/')) {
      const referer = req.headers.referer || '';
      let targetDir = null;

      // Extract project subfolder from Referer URL
      try {
        const refUrl = new URL(referer);
        const refPath = decodeURIComponent(refUrl.pathname);
        const segments = refPath.split('/').filter(Boolean);
        if (segments.length > 0) {
          const firstSeg = segments[0];
          // Check potential project directory
          if (firstSeg === '3-Techno clash' || firstSeg === '21-Marvel Quiz') {
            targetDir = path.join(ROOT_DIR, firstSeg, 'sample', 'dist');
          } else {
            const potentialDist = path.join(ROOT_DIR, firstSeg, 'dist');
            const potentialRoot = path.join(ROOT_DIR, firstSeg);
            if (fs.existsSync(potentialDist)) {
              targetDir = potentialDist;
            } else if (fs.existsSync(potentialRoot)) {
              targetDir = potentialRoot;
            }
          }
        }
      } catch (e) {}

      // Try referer directory first
      if (targetDir) {
        const assetInTarget = path.join(targetDir, pathname);
        if (fs.existsSync(assetInTarget) && fs.statSync(assetInTarget).isFile()) {
          serveFile(res, assetInTarget);
          return;
        }
      }

      // Try Event Page dist assets
      const dashboardAsset = path.join(ROOT_DIR, 'Event Page', 'dist', pathname);
      if (fs.existsSync(dashboardAsset) && fs.statSync(dashboardAsset).isFile()) {
        serveFile(res, dashboardAsset);
        return;
      }

      // Search all dist/assets folders for matching asset file
      const foundPath = searchAssetAcrossProjects(pathname.replace('/assets/', ''));
      if (foundPath) {
        serveFile(res, foundPath);
        return;
      }
    }

    // Check project subpaths (e.g. /1-Lanch Pad/index.html -> check dist/index.html)
    const normalizedPath = tryResolveProjectDist(pathname);
    if (normalizedPath && fs.existsSync(normalizedPath) && fs.statSync(normalizedPath).isFile()) {
      serveFile(res, normalizedPath);
      return;
    }

    // Not found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not Found: ${pathname}`);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(`500 Server Error: ${err.message}`);
  }
});

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Error reading file: ${err.message}`);
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
}

function tryResolveProjectDist(pathname) {
  // e.g. /1-Lanch Pad/index.html -> 1-Lanch Pad/dist/index.html
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const projectFolder = segments[0];
  const restPath = segments.slice(1).join('/');

  const candidates = [
    path.join(ROOT_DIR, projectFolder, 'dist', restPath),
    path.join(ROOT_DIR, projectFolder, 'sample', 'dist', restPath),
    path.join(ROOT_DIR, projectFolder, restPath),
    path.join(ROOT_DIR, pathname)
  ];

  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      return c;
    }
  }
  return null;
}

function searchAssetAcrossProjects(filename) {
  const dirs = fs.readdirSync(ROOT_DIR);
  for (const dir of dirs) {
    if (dir.startsWith('.')) continue;
    const distAssets = path.join(ROOT_DIR, dir, 'dist', 'assets', filename);
    if (fs.existsSync(distAssets)) return distAssets;

    const sampleDistAssets = path.join(ROOT_DIR, dir, 'sample', 'dist', 'assets', filename);
    if (fs.existsSync(sampleDistAssets)) return sampleDistAssets;
  }
  return null;
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`  IGNITRRON '26 UNIFIED MULTI-APP DEVELOPMENT GATEWAY`);
  console.log(`  Local:   http://localhost:${PORT}/`);
  console.log(`  Serving: Dashboard + All 19 Event Sites + Coming Soon`);
  console.log(`======================================================\n`);
});
