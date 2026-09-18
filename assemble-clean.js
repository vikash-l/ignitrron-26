import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT_DIR = path.dirname(__filename);
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

// ==============================================================
//  DEPLOYMENT HYGIENE: files/dirs that must NEVER be in deployment/
// ==============================================================
const DEV_DIRS = new Set([
  'node_modules', '.git', '.github', 'src', 'GrootsArcade',
  'sample', 'ps5_data', 'build'
]);

const DEV_FILES = new Set([
  'vite.config.ts', 'vite.config.js', 'vite.config.mjs',
  'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json',
  'package.json', 'package-lock.json', '.oxlintrc.json',
  'README.md', '.gitignore', 'doc.txt', 'ps5.txt',
  'ps5_utf8.txt', 'fetchGroot.cjs', 'build-export.js',
  '.DS_Store', 'serve.ps1'
]);

function shouldExclude(name, isDirectory) {
  if (isDirectory) {
    if (DEV_DIRS.has(name) || name.includes('GrootsArcade') || name.includes('sample')) {
      return true;
    }
    return false;
  }

  // 1. Exclude macOS duplicate files (e.g. "index 2.html", "favicon 3.svg", "vite.config 3.ts")
  if (/ (2|3|4|5|6|7|8|9)(\..*)?$/.test(name)) {
    return true;
  }

  // 2. Exclude source code extensions (.ts, .tsx, .mts, .cts, .py, .ps1, .zip, .log, .env)
  if (/\.(tsx?|mts|cts|py|ps1|zip|log|env)$/i.test(name)) {
    return true;
  }

  // 3. Exclude config/dev files (vite.config*, tsconfig*, package*.json, etc.)
  if (DEV_FILES.has(name) || /vite\.config/i.test(name) || /tsconfig/i.test(name)) {
    return true;
  }

  return false;
}

function safeCopy(srcFile, destFile) {
  try {
    const data = fs.readFileSync(srcFile);
    fs.writeFileSync(destFile, data);
  } catch (e) {
    console.warn(`  [WARN] Failed to copy ${path.basename(srcFile)}: ${e.message}`);
  }
}

function copyClean(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (shouldExclude(entry.name, entry.isDirectory())) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyClean(s, d);
    } else {
      safeCopy(s, d);
    }
  }
}

console.log('====================================================');
console.log('  IGNITRRON \'26 CLEAN OPTIMISED DEPLOYMENT ASSEMBLY');
console.log('====================================================\n');

// Clean and recreate deployment dir
fs.rmSync(DEPLOYMENT_DIR, { recursive: true, force: true });
fs.mkdirSync(DEPLOYMENT_DIR, { recursive: true });

// === 1. Dashboard root ===
const dashDist = path.join(ROOT_DIR, 'Event Page', 'dist');
if (fs.existsSync(dashDist)) {
  copyClean(dashDist, DEPLOYMENT_DIR);
  console.log('✓ Main Dashboard deployed to /');
} else {
  console.error('✗ Event Page/dist missing — run npm run build first!');
}

// === 2. Sub-sites ===
const subSites = [
  { folder: '1-Lanch Pad/dist',                        subpath: 'launchpad',                   type: 'dist',   srcBase: '1-Lanch Pad'                  },
  { folder: '2-MUN Conference',                         subpath: 'mun-conference',              type: 'static'                                          },
  { folder: '3-Techno clash/sample/dist',               subpath: 'techno-clash',                type: 'dist',   srcBase: '3-Techno clash/sample'        },
  { folder: '4-Mechanical design challenge/dist',       subpath: 'mechanical-design-challenge', type: 'dist',   srcBase: '4-Mechanical design challenge' },
  { folder: '6-Legacy code/dist',                       subpath: 'legacy-code',                 type: 'dist',   srcBase: '6-Legacy code'                },
  { folder: '7-research_zero_to_hero/dist',             subpath: 'research-zero-to-hero',       type: 'dist',   srcBase: '7-research_zero_to_hero'      },
  { folder: '10-ipl',                                   subpath: 'ipl-mega-auction',            type: 'static'                                          },
  { folder: '11-E-sports Arcade/dist',                  subpath: 'e-sports-arcade',             type: 'dist',   srcBase: '11-E-sports Arcade'           },
  { folder: '12-Criminal Chronicals/dist',              subpath: 'criminal-chronicles',         type: 'dist',   srcBase: '12-Criminal Chronicals'       },
  { folder: '13-Milan 26/dist',                         subpath: 'milan-26',                    type: 'dist',   srcBase: '13-Milan 26'                  },
  { folder: '14-Project_Presntation/dist',              subpath: 'project-presentation',        type: 'dist',   srcBase: '14-Project_Presntation'       },
  { folder: '15-Paper presentation',                    subpath: 'paper-presentation',          type: 'static'                                          },
  { folder: '17-roborace/dist',                         subpath: 'robo-race',                   type: 'dist',   srcBase: '17-roborace'                  },
  { folder: '18-Drone_Race/dist',                       subpath: 'drone-race',                  type: 'dist',   srcBase: '18-Drone_Race'                },
  { folder: '19-Line follower/dist',                    subpath: 'line-follower',               type: 'dist',   srcBase: '19-Line follower'             },
  { folder: '21-marvel quiz/dist',                      subpath: 'marvel-quiz',                 type: 'dist',   srcBase: '21-marvel quiz'               },
  { folder: '22-Game genesis X/dist',                   subpath: 'game-genesis-x',              type: 'dist',   srcBase: '22-Game genesis X'            },
  { folder: '23-Breaking the build/dist',               subpath: 'breaking-the-build',          type: 'dist',   srcBase: '23-Breaking the build'        },
  { folder: '26-Japanese_Street/dist',                  subpath: 'japanese-street',             type: 'dist',   srcBase: '26-Japanese_Street'           },
  { folder: '27-Auto show/dist',                        subpath: 'auto-show',                   type: 'dist',   srcBase: '27-Auto show'                 },
  { folder: 'BMC/dist',                                 subpath: 'business-model-canvas',       type: 'dist',   srcBase: 'BMC'                          },
  { folder: 'Coming_soon/dist',                         subpath: 'coming-soon',                 type: 'dist',   srcBase: 'Coming_soon'                  },
  { folder: 'Path_Pilot/dist',                          subpath: 'path-pilot',                  type: 'dist',   srcBase: 'Path_Pilot'                   },
  { folder: 'Hire_Code/dist',                           subpath: 'hire-code',                   type: 'dist',   srcBase: 'Hire_Code'                    },
  { folder: 'Corporate Walk',                           subpath: 'corporate-walk',              type: 'static'                                          },
  { folder: 'Project JARVIS',                           subpath: 'project-jarvis',              type: 'static'                                          },
  { folder: 'Structure X/dist',                         subpath: 'structure-x',                 type: 'dist',   srcBase: 'Structure X'                  },
];

let ok = 0, fail = 0;

for (const site of subSites) {
  const src = path.join(ROOT_DIR, site.folder);
  const dest = path.join(DEPLOYMENT_DIR, site.subpath);
  fs.mkdirSync(dest, { recursive: true });

  if (!fs.existsSync(src)) {
    console.error(`✗ [/${site.subpath}/] Source missing: ${site.folder}`);
    fail++;
    continue;
  }

  // Copy dist (or static files)
  copyClean(src, dest);

  const hasIndex = fs.existsSync(path.join(dest, 'index.html'));
  if (hasIndex) {
    ok++;
    console.log(`✓ [/${site.subpath}/]`);
  } else {
    fail++;
    console.error(`✗ [/${site.subpath}/] index.html MISSING`);
  }
}

console.log(`\n====================================================`);
console.log(`  ASSEMBLY COMPLETE: ${ok} OK, ${fail} FAILED`);
console.log(`====================================================`);
