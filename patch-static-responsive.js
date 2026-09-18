import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();

// Append mobile responsive CSS to 10-ipl/style.css
const iplCssPath = path.join(ROOT_DIR, '10-ipl', 'style.css');
if (fs.existsSync(iplCssPath)) {
  const iplMobileCss = `

/* ==========================================================================
   MOBILE & TABLET RESPONSIVE SYSTEM (320px - 768px)
   ========================================================================== */
@media screen and (max-width: 992px) {
  .nav-links {
    display: none !important;
  }
  .nav-mobile-toggle {
    display: block !important;
  }
  .hero-content, .hero-grid {
    grid-template-columns: 1fr !important;
    text-align: center !important;
  }
  .grid-2, .grid-3, .grid-4, .auction-cards-grid, .teams-grid, .prizes-grid, .rules-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media screen and (max-width: 640px) {
  html, body {
    overflow-x: hidden !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  
  .container, .wrapper, section, header, footer {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    box-sizing: border-box !important;
  }

  h1, .hero-title, .title-hero, .giant-heading {
    font-size: clamp(2rem, 8vw, 3.5rem) !important;
    line-height: 1.15 !important;
    word-break: break-word !important;
  }

  h2, .section-title {
    font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
  }

  .grid-2, .grid-3, .grid-4, .auction-cards-grid, .teams-grid, .prizes-grid, .rules-grid, .stats-grid {
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
  }

  .btn, .button, .cta-btn, .btn-primary, .btn-secondary {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0.85rem 1.25rem !important;
    box-sizing: border-box !important;
  }

  img, video, iframe, canvas {
    max-width: 100% !important;
    height: auto !important;
  }

  .modal-content, .popup-box {
    width: 92% !important;
    max-width: 100% !important;
    margin: 1rem auto !important;
    padding: 1.25rem !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
  }

  table, .table-container {
    display: block !important;
    width: 100% !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
  }
}
`;
  let cssContent = fs.readFileSync(iplCssPath, 'utf8');
  if (!cssContent.includes('MOBILE & TABLET RESPONSIVE SYSTEM')) {
    cssContent += iplMobileCss;
    fs.writeFileSync(iplCssPath, cssContent, 'utf8');
    console.log('✓ Added mobile responsive CSS to 10-ipl/style.css');
  }
}

// Add responsive viewport meta tag to all static index.html if missing
const staticProjects = ['2-MUN Conference', '10-ipl', '15-Paper presentation', 'Corporate Walk', 'Project JARVIS'];
staticProjects.forEach(folder => {
  const htmlPath = path.join(ROOT_DIR, folder, 'index.html');
  if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    if (!html.includes('viewport-fit=cover')) {
      html = html.replace(/<meta\s+name=["']viewport["'][^>]*>/i, '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover">');
      fs.writeFileSync(htmlPath, html, 'utf8');
      console.log(`✓ Updated viewport tag in ${folder}/index.html`);
    }
  }
});
