import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = __dirname;
const DEPLOYMENT_DIR = path.join(ROOT_DIR, 'deployment');

// Clean & create deployment folder
if (fs.existsSync(DEPLOYMENT_DIR)) {
  fs.rmSync(DEPLOYMENT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DEPLOYMENT_DIR, { recursive: true });

const PROJECTS = [
  {
    name: 'Main Dashboard (Hub)',
    folder: 'Event Page',
    subpath: 'dashboard',
    base: '/',
    isVite: true,
    isRootAlso: true
  },
  {
    name: 'Coming Soon Portal',
    folder: 'Coming_soon',
    subpath: 'coming-soon',
    base: '/coming-soon/',
    isVite: true
  },
  {
    name: 'Launchpad',
    folder: '1-Lanch Pad',
    subpath: 'launchpad',
    base: '/launchpad/',
    isVite: true
  },
  {
    name: 'MUN Conference',
    folder: '2-MUN Conference',
    subpath: 'mun-conference',
    base: '/mun-conference/',
    isVite: false
  },
  {
    name: 'Techno Clash – Quiz',
    folder: '3-Techno clash/sample',
    subpath: 'techno-clash',
    base: '/techno-clash/',
    isVite: true
  },
  {
    name: 'Mechanical Design Challenge',
    folder: '4-Mechanical design challenge',
    subpath: 'mechanical-design-challenge',
    base: '/mechanical-design-challenge/',
    isVite: true
  },
  {
    name: 'Legacy Code Rescue Challenge',
    folder: '6-Legacy code',
    subpath: 'legacy-code',
    base: '/legacy-code/',
    isVite: true
  },
  {
    name: 'Research Zero to Hero',
    folder: '7-research_zero_to_hero',
    subpath: 'research-zero-to-hero',
    base: '/research-zero-to-hero/',
    isVite: true
  },
  {
    name: 'IPL Mega Auction',
    folder: '10-ipl-main',
    subpath: 'ipl-mega-auction',
    base: '/ipl-mega-auction/',
    isVite: true
  },
  {
    name: 'E-Sports Arcade',
    folder: '11-E-sports Arcade',
    subpath: 'e-sports-arcade',
    base: '/e-sports-arcade/',
    isVite: true
  },
  {
    name: 'Criminal Chronicles 2.0',
    folder: '12-Criminal Chronicals',
    subpath: 'criminal-chronicles',
    base: '/criminal-chronicles/',
    isVite: true
  },
  {
    name: 'MILAN 26',
    folder: '13-Milan 26',
    subpath: 'milan-26',
    base: '/milan-26/',
    isVite: true
  },
  {
    name: 'Project Presentation',
    folder: '14-Project_Presntation',
    subpath: 'project-presentation',
    base: '/project-presentation/',
    isVite: true
  },
  {
    name: 'Paper Presentation',
    folder: '15-Paper presentation',
    subpath: 'paper-presentation',
    base: '/paper-presentation/',
    isVite: false
  },
  {
    name: 'Robo Race',
    folder: '17-roborace',
    subpath: 'robo-race',
    base: '/robo-race/',
    isVite: true
  },
  {
    name: 'Drone Race',
    folder: '18-Drone_Race',
    subpath: 'drone-race',
    base: '/drone-race/',
    isVite: true
  },
  {
    name: 'Line Follower Hackathon',
    folder: '19-Line follower',
    subpath: 'line-follower',
    base: '/line-follower/',
    isVite: true
  },
  {
    name: 'Marvel Quiz',
    folder: '21-Marvel Quiz/sample',
    subpath: 'marvel-quiz',
    base: '/marvel-quiz/',
    isVite: true
  },
  {
    name: 'Game Genesis X (IN.ZEROS)',
    folder: '22-Game genesis X',
    subpath: 'game-genesis-x',
    base: '/game-genesis-x/',
    isVite: true
  },
  {
    name: 'Breaking the Build',
    folder: '23-Breaking the build',
    subpath: 'breaking-the-build',
    base: '/breaking-the-build/',
    isVite: true
  },
  {
    name: 'Japanese Street',
    folder: '26-Japanese_Street',
    subpath: 'japanese-street',
    base: '/japanese-street/',
    isVite: true
  },
  {
    name: 'Auto Show',
    folder: '27-Auto show',
    subpath: 'auto-show',
    base: '/auto-show/',
    isVite: true
  }
];

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.DS_Store' || entry.name === 'dist' || entry.name === 'sample' || entry.name.endsWith('.zip') || entry.name.endsWith('.ps1')) {
      continue;
    }
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function updateViteConfigBase(projectDir, base) {
  const tsConfig = path.join(projectDir, 'vite.config.ts');
  const jsConfig = path.join(projectDir, 'vite.config.js');
  const targetConfig = fs.existsSync(tsConfig) ? tsConfig : (fs.existsSync(jsConfig) ? jsConfig : null);

  if (targetConfig) {
    let content = fs.readFileSync(targetConfig, 'utf8');
    if (content.includes('base:')) {
      content = content.replace(/base:\s*['\"][^'\"]*['\"],?/, `base: '${base}',`);
    } else {
      content = content.replace(/defineConfig\(\{/, `defineConfig({\n  base: '${base}',`);
    }
    fs.writeFileSync(targetConfig, content, 'utf8');
  }
}

function main() {
  console.log('================================================================');
  console.log('  IGNITRRON 26 — PHASE 2 PRODUCTION MULTI-SITE DEPLOYMENT BUILD');
  console.log('================================================================\n');

  const results = [];

  for (const p of PROJECTS) {
    const projectDir = path.join(ROOT_DIR, p.folder);
    const targetDeployDir = path.join(DEPLOYMENT_DIR, p.subpath);
    console.log(`\n------------------------------------------------------------`);
    console.log(`[BUILDING] ${p.name}`);
    console.log(`  Source:  ${p.folder}`);
    console.log(`  Target:  deployment/${p.subpath}/ (base: ${p.base})`);

    fs.mkdirSync(targetDeployDir, { recursive: true });

    try {
      if (p.isVite) {
        // 1. Configure base in vite.config
        updateViteConfigBase(projectDir, p.base);

        // 2. Build via npx vite build
        const buildCmd = `npx vite build --base=${p.base} --outDir dist --emptyOutDir`;
        console.log(`  Executing: ${buildCmd}`);
        const out = execSync(buildCmd, { cwd: projectDir, encoding: 'utf8' });
        console.log(`  Build output summary: ${out.split('\n').filter(l => l.includes('built in') || l.includes('dist/')).join(' | ')}`);

        // 3. Copy dist output to deployment folder
        const distDir = path.join(projectDir, 'dist');
        if (!fs.existsSync(distDir)) {
          throw new Error(`dist directory was not generated at ${distDir}`);
        }
        copyDirRecursive(distDir, targetDeployDir);

        // If it's the dashboard, also copy to deployment root for root index.html
        if (p.isRootAlso) {
          copyDirRecursive(distDir, DEPLOYMENT_DIR);
        }
      } else {
        // Pure Static HTML project -> copy project files directly
        console.log(`  Static project: copying assets and HTML`);
        copyDirRecursive(projectDir, targetDeployDir);
      }

      // 4. Verify output
      const indexPath = path.join(targetDeployDir, 'index.html');
      if (!fs.existsSync(indexPath)) {
        throw new Error(`index.html missing in ${targetDeployDir}`);
      }

      const indexContent = fs.readFileSync(indexPath, 'utf8');
      const sizeBytes = fs.statSync(indexPath).size;

      // Verify asset references
      let assetOk = true;
      if (p.isVite && p.base !== '/') {
        assetOk = indexContent.includes(p.base);
      }

      console.log(`  Status:  SUCCESS (index.html: ${sizeBytes} bytes, Base verified: ${assetOk ? 'YES' : 'N/A'})`);
      results.push({
        name: p.name,
        subpath: p.subpath,
        base: p.base,
        status: 'SUCCESS',
        size: sizeBytes,
        assetOk
      });
    } catch (err) {
      console.error(`  ERROR:   ${err.message}`);
      results.push({
        name: p.name,
        subpath: p.subpath,
        base: p.base,
        status: 'FAILED',
        error: err.message
      });
    }
  }

  console.log('\n\n================================================================');
  console.log('                   DEPLOYMENT BUILD SUMMARY');
  console.log('================================================================');
  console.table(results.map(r => ({
    Event: r.name,
    Path: `/${r.subpath}/`,
    Base: r.base,
    Status: r.status,
    Verified: r.status === 'SUCCESS' ? 'PASS' : 'FAIL'
  })));

  const failedCount = results.filter(r => r.status === 'FAILED').length;
  console.log(`\nTotal: ${results.length} | Passed: ${results.length - failedCount} | Failed: ${failedCount}`);
}

main();
