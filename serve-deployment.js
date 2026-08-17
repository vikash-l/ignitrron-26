import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(__dirname, 'deployment');
const PORT = 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // 1. Direct file check on disk
    let filePath = path.join(DEPLOYMENT_DIR, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(res, filePath);
      return;
    }

    // 2. Directory index check (e.g. /launchpad/ -> /launchpad/index.html)
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      const indexFile = path.join(filePath, 'index.html');
      if (fs.existsSync(indexFile)) {
        serveFile(res, indexFile);
        return;
      }
    }

    // 3. Subpath fallback (e.g. /launchpad/subroute -> /launchpad/index.html)
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      const firstSegment = segments[0];
      const subpathDir = path.join(DEPLOYMENT_DIR, firstSegment);
      const subpathIndex = path.join(subpathDir, 'index.html');
      if (fs.existsSync(subpathIndex)) {
        serveFile(res, subpathIndex);
        return;
      }
    }

    // 4. Root fallback
    const rootIndex = path.join(DEPLOYMENT_DIR, 'index.html');
    if (fs.existsSync(rootIndex)) {
      serveFile(res, rootIndex);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error');
  }
});

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache'
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`  IGNITRRON '26 UNIFIED MULTI-PROJECT SERVER ACTIVE `);
  console.log(`====================================================`);
  console.log(`  Local URL:   http://localhost:${PORT}/`);
  console.log(`  Network URL: http://127.0.0.1:${PORT}/`);
  console.log(`  Serving:     ${DEPLOYMENT_DIR}`);
  console.log(`====================================================`);
});
