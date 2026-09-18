/**
 * Universal Asset Loader for Path Pilot
 * Supports all image formats: .jpg, .jpeg, .png, .webp, .svg, .gif, .avif, .bmp, etc.
 * Dynamically resolves any image placed inside `src/assets/`.
 */

// Dynamically import all images in src/assets with any supported extension
const assetModules = import.meta.glob<{ default: string }>(
  '../assets/*.{png,jpg,jpeg,webp,svg,gif,avif,bmp,ico,tiff,PNG,JPG,JPEG,WEBP,SVG,GIF,AVIF,BMP,ICO,TIFF}',
  { eager: true }
);

// Map of all discovered assets keyed by both filename (with ext) and base name (without ext)
export const assetMap: Record<string, string> = {};
export const allAssetUrls: string[] = [];

for (const path in assetModules) {
  const mod = assetModules[path];
  const url = typeof mod === 'string' ? mod : mod?.default || '';
  if (url) {
    const filename = path.split('/').pop() || '';
    const nameWithoutExt = filename.substring(0, filename.lastIndexOf('.')) || filename;

    assetMap[filename.toLowerCase()] = url;
    assetMap[nameWithoutExt.toLowerCase()] = url;
    allAssetUrls.push(url);
  }
}

/**
 * Fallback futuristic War Machine armor & robotics SVG in case no custom image is found in assets
 */
const DEFAULT_PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#191C20" />
      <stop offset="100%" stop-color="#050505" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A30F18" />
      <stop offset="50%" stop-color="#4A5056" />
      <stop offset="100%" stop-color="#25292E" />
    </linearGradient>
    <radialGradient id="emitter" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#A30F18" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#050505" stop-opacity="0" />
    </radialGradient>
  </defs>
  
  <rect width="100%" height="100%" fill="url(#bg)" />
  <circle cx="400" cy="500" r="350" fill="url(#emitter)" />
  
  <!-- Radar circles -->
  <circle cx="400" cy="500" r="280" stroke="#4A5056" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.4" />
  <circle cx="400" cy="500" r="180" stroke="#A30F18" stroke-width="1.5" opacity="0.4" />
  <circle cx="400" cy="500" r="80" stroke="#A30F18" stroke-width="2" opacity="0.7" />
  
  <!-- Circuit Grid lines -->
  <line x1="100" y1="500" x2="700" y2="500" stroke="#4A5056" stroke-width="1" opacity="0.3" stroke-dasharray="4 4" />
  <line x1="400" y1="200" x2="400" y2="800" stroke="#4A5056" stroke-width="1" opacity="0.3" stroke-dasharray="4 4" />
  
  <!-- Stylized Autonomous Robot Core -->
  <polygon points="400,320 520,440 520,600 400,700 280,600 280,440" fill="#111316" stroke="url(#glow)" stroke-width="4" />
  <polygon points="400,360 480,450 480,570 400,640 320,570 320,450" fill="#191C20" stroke="#4A5056" stroke-width="2" opacity="0.8" />
  
  <!-- Optical Sensor Eye -->
  <circle cx="400" cy="490" r="32" fill="#A30F18" />
  <circle cx="400" cy="490" r="20" fill="#D51F2A" />
  <circle cx="400" cy="490" r="8" fill="#E8E8E8" />
  
  <!-- HUD Text -->
  <text x="400" y="760" fill="#A30F18" font-family="monospace" font-size="20" font-weight="bold" text-anchor="middle" letter-spacing="4">PATH PILOT AUTONOMOUS SYSTEM</text>
  <text x="400" y="795" fill="#9A9DA1" font-family="monospace" font-size="13" text-anchor="middle" letter-spacing="2">OPTICAL SENSING &bull; CLOSED-LOOP CONTROL</text>
</svg>
`)}`;

/**
 * Resolves an image by name, pattern, or automatically detects the hero/robot image
 * Accepts any image format: jpg, jpeg, png, webp, svg, gif, avif, etc.
 */
export function resolveAsset(nameOrPattern?: string): string {
  if (nameOrPattern) {
    const key = nameOrPattern.toLowerCase();
    
    // Direct or base match
    if (assetMap[key]) {
      return assetMap[key];
    }
    
    // Search with extension stripped or match prefix
    const baseKey = key.substring(0, key.lastIndexOf('.')) || key;
    if (assetMap[baseKey]) {
      return assetMap[baseKey];
    }

    // Partial key match
    for (const k in assetMap) {
      if (k.includes(baseKey) || baseKey.includes(k)) {
        return assetMap[k];
      }
    }
  }

  // Priority detection for Hero / Robot visualization images
  const priorityKeywords = [
    'jwwbb',
    'hero',
    'robot',
    'character',
    'pathpilot',
    'path_pilot',
    'main',
    'banner'
  ];

  for (const keyword of priorityKeywords) {
    for (const k in assetMap) {
      if (k.includes(keyword)) {
        return assetMap[k];
      }
    }
  }

  // Pick first available image that is not a framework logo
  for (const k in assetMap) {
    if (!k.includes('react') && !k.includes('vite')) {
      return assetMap[k];
    }
  }

  // If any image at all exists, use it
  if (allAssetUrls.length > 0) {
    return allAssetUrls[0];
  }

  return DEFAULT_PLACEHOLDER;
}

/**
 * Primary Hero Image asset, automatically resolved across all supported formats
 */
export const heroImage: string = resolveAsset();
