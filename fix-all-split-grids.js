import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// 1. MUN Conference responsive rules
const munResponsivePath = path.join(ROOT_DIR, '2-MUN Conference', 'styles', 'responsive.css');
if (fs.existsSync(munResponsivePath)) {
  let css = fs.readFileSync(munResponsivePath, 'utf8');
  const addCss = `
/* Additional split layout mobile resets */
@media (max-width: 992px) {
  .hero-grid-layout,
  .briefing-split-layout,
  .strategy-header-split,
  .round-two-split-layout,
  .storyline-grid,
  .journey-timeline-grid,
  .rounds-grid,
  .podium-grid,
  .coordinators-grid,
  .intel-stats-grid,
  .hero-status-dashboard,
  .footer-top-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}
`;
  if (!css.includes('Additional split layout mobile resets')) {
    css += addCss;
    fs.writeFileSync(munResponsivePath, css, 'utf8');
    console.log('✓ Updated 2-MUN Conference/styles/responsive.css');
  }
}

// 2. 10-ipl responsive rules
const iplCssPath = path.join(ROOT_DIR, '10-ipl', 'style.css');
if (fs.existsSync(iplCssPath)) {
  let css = fs.readFileSync(iplCssPath, 'utf8');
  const addCss = `
/* Additional split layout mobile resets for IPL */
@media (max-width: 992px) {
  .hero-container,
  .power-editorial-layout,
  .details-editorial-layout,
  .coordinators-grid-2x2,
  .journey-steps-grid,
  .player-stats-row {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}
`;
  if (!css.includes('Additional split layout mobile resets for IPL')) {
    css += addCss;
    fs.writeFileSync(iplCssPath, css, 'utf8');
    console.log('✓ Updated 10-ipl/style.css');
  }
}

// 3. Corporate Walk responsive rules
const corpRespPath = path.join(ROOT_DIR, 'Corporate Walk', 'styles', 'components.css');
if (fs.existsSync(corpRespPath)) {
  let css = fs.readFileSync(corpRespPath, 'utf8');
  const addCss = `
/* Additional split layout mobile resets for Corporate Walk */
@media (max-width: 992px) {
  .hero-grid,
  .experience-grid,
  .runway-steps-grid,
  .look-editorial-spread,
  .details-grid,
  .podium-composition {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}
`;
  if (!css.includes('Additional split layout mobile resets for Corporate Walk')) {
    css += addCss;
    fs.writeFileSync(corpRespPath, css, 'utf8');
    console.log('✓ Updated Corporate Walk/styles/components.css');
  }
}

// 4. Project JARVIS responsive rules
const jarvisCssPath = path.join(ROOT_DIR, 'Project JARVIS', 'style.css');
if (fs.existsSync(jarvisCssPath)) {
  let css = fs.readFileSync(jarvisCssPath, 'utf8');
  const addCss = `
/* Additional split layout mobile resets for Project JARVIS */
@media (max-width: 992px) {
  .finale-dual-boxes-grid,
  .bpc-grid,
  .hero-hud-modules,
  .dossier-pillars-grid,
  .ssc-telemetry-strip,
  .bounty-tiers-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}
`;
  if (!css.includes('Additional split layout mobile resets for Project JARVIS')) {
    css += addCss;
    fs.writeFileSync(jarvisCssPath, css, 'utf8');
    console.log('✓ Updated Project JARVIS/style.css');
  }
}
