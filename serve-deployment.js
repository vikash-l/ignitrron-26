import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(__dirname, 'deployment');
const PORT = 5173;

const ALIASES = {
  'bmc': 'business-model-canvas',
  '10-ipl': 'ipl-mega-auction',
  'ipl': 'ipl-mega-auction',
  '21-marvel-quiz': 'marvel-quiz',
  '21-marvel quiz': 'marvel-quiz'
};

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
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
  req.on('error', () => {});
  res.on('error', () => {});

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

    // Apply alias if first segment matches
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ALIASES[segments[0]]) {
      segments[0] = ALIASES[segments[0]];
      pathname = '/' + segments.join('/');
    }

    // 1. Direct path check
    let filePath = path.join(DEPLOYMENT_DIR, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(req, res, filePath);
      return;
    }

    // 2. Directory index check (e.g. /launchpad/ -> /launchpad/index.html)
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      if (!pathname.endsWith('/')) {
        res.writeHead(301, { 'Location': pathname + '/' + (parsedUrl.search || '') });
        res.end();
        return;
      }
      const indexFile = path.join(filePath, 'index.html');
      if (fs.existsSync(indexFile)) {
        serveFile(req, res, indexFile);
        return;
      }
    }

    // 3. Smart Asset Resolution for images, fonts, styles, scripts
    const ext = path.extname(pathname).toLowerCase();
    const isAsset = MIME_TYPES[ext] && ext !== '.html';
    
    if (isAsset) {
      const filename = path.basename(pathname);
      
      const candidates = [
        path.join(DEPLOYMENT_DIR, pathname),
        path.join(DEPLOYMENT_DIR, 'assets', filename),
        path.join(DEPLOYMENT_DIR, filename)
      ];

      if (segments.length > 1) {
        const sub = segments[0];
        candidates.unshift(path.join(DEPLOYMENT_DIR, sub, filename));
        candidates.unshift(path.join(DEPLOYMENT_DIR, sub, 'assets', filename));
        candidates.unshift(path.join(DEPLOYMENT_DIR, sub, 'images', filename));
      }

      for (const candidate of candidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          serveFile(req, res, candidate);
          return;
        }
      }

      const subdirs = fs.readdirSync(DEPLOYMENT_DIR).filter(d => 
        fs.statSync(path.join(DEPLOYMENT_DIR, d)).isDirectory()
      );
      for (const sub of subdirs) {
        const subCheck1 = path.join(DEPLOYMENT_DIR, sub, filename);
        if (fs.existsSync(subCheck1) && fs.statSync(subCheck1).isFile()) {
          serveFile(req, res, subCheck1);
          return;
        }
        const subCheck2 = path.join(DEPLOYMENT_DIR, sub, 'assets', filename);
        if (fs.existsSync(subCheck2) && fs.statSync(subCheck2).isFile()) {
          serveFile(req, res, subCheck2);
          return;
        }
      }

      // Asset not found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Asset not found');
      return;
    }

    // 4. Subpath SPA fallback (e.g. /launchpad/subroute -> /launchpad/index.html)
    if (segments.length > 0) {
      const firstSegment = segments[0];
      const subpathDir = path.join(DEPLOYMENT_DIR, firstSegment);
      const subpathIndex = path.join(subpathDir, 'index.html');
      if (fs.existsSync(subpathIndex)) {
        serveFile(req, res, subpathIndex);
        return;
      }
    }

    // 5. Root fallback
    const rootIndex = path.join(DEPLOYMENT_DIR, 'index.html');
    if (fs.existsSync(rootIndex)) {
      serveFile(req, res, rootIndex);
      return;
    }

    if (!res.headersSent) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  } catch (err) {
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Internal Server Error');
    }
  }
});

function serveFile(req, res, filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;

    // Fast Caching Headers
    const isHtml = ext === '.html';
    const cacheHeader = isHtml 
      ? 'max-age=0, must-revalidate' 
      : 'public, max-age=86400, immutable';

    // HTTP Byte-Range Request Support (for instant video/audio/large asset streaming)
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (start >= fileSize || end >= fileSize) {
        res.writeHead(416, {
          'Content-Range': `bytes */${fileSize}`
        });
        return res.end();
      }

      const chunksize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Cache-Control': cacheHeader
      });

      fileStream.pipe(res);
      return;
    }

    // Standard Full File Response with Accept-Ranges
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': fileSize,
      'Accept-Ranges': 'bytes',
      'Cache-Control': cacheHeader
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error streaming file');
      } else {
        res.destroy();
      }
    });

    res.on('close', () => {
      stream.destroy();
    });

    stream.pipe(res);
  } catch (err) {
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file');
    }
  }
}

process.on('uncaughtException', (err) => {
  console.warn('[SERVER WARNING] Caught unhandled exception:', err.message);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`  IGNITRRON '26 HIGH-PERFORMANCE STREAMING SERVER   `);
  console.log(`====================================================`);
  console.log(`  Local URL:   http://localhost:${PORT}/`);
  console.log(`  Network URL: http://127.0.0.1:${PORT}/`);
  console.log(`  Serving:     ${DEPLOYMENT_DIR}`);
  console.log(`====================================================`);
});
