import { soundEngine } from './sound.js';

export function initTelemetrySystem() {
  
  // ============================================================
  // HERO STAGGERED ENTRANCE ANIMATION SEQUENCE (0ms -> 1.5s)
  // ============================================================
  const heroItems = [
    { id: 'hero-eyebrow', delay: 150 },
    { id: 'hero-title-1', delay: 300 },
    { id: 'hero-title-2', delay: 450 },
    { id: 'hero-title-3', delay: 600 },
    { id: 'hero-tagline', delay: 750 },
    { id: 'hero-desc', delay: 900 },
    { id: 'hero-details', delay: 1050 },
    { id: 'hero-buttons', delay: 1200 },
    { id: 'hero-floating-pill', delay: 1350 }
  ];

  window.triggerHawkeyeHeroReveal = function() {
    heroItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        setTimeout(() => {
          el.classList.add('appeared');
        }, item.delay);
      }
    });

    // Sound effect trigger at 600ms when HAWKEYE reveals
    setTimeout(() => {
      soundEngine.playBeep(980, 'sine', 0.05);
    }, 600);
  };

  // Trigger on DOM ready / load
  setTimeout(() => {
    if (window.triggerHawkeyeHeroReveal) window.triggerHawkeyeHeroReveal();
  }, 50);

  // ============================================================
  // DESKTOP MOUSE PARALLAX (SMOOTH requestAnimationFrame)
  // ============================================================
  function initHeroMouseParallax() {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroSection = document.getElementById('hero');
    const heroImg = document.getElementById('hawkeye-hero-img');
    const heroBgBloom = document.getElementById('hero-bg-bloom');
    const heroReticle = document.getElementById('hero-reticle');
    const heroLeftText = document.getElementById('hero-left-text');

    if (!heroSection) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth) - 0.5;
      targetY = (e.clientY / window.innerHeight) - 0.5;
    });

    function updateParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (heroImg) {
        heroImg.style.transform = `scale(1.03) translate(${currentX * 7}px, ${currentY * 7}px)`;
      }
      if (heroBgBloom) {
        heroBgBloom.style.transform = `translate(${currentX * 12}px, ${currentY * 12}px)`;
      }
      if (heroReticle) {
        heroReticle.style.transform = `translate(${-currentX * 12}px, ${-currentY * 12}px)`;
      }
      if (heroLeftText) {
        heroLeftText.style.transform = `translate(${currentX * 2}px, ${currentY * 2}px)`;
      }

      requestAnimationFrame(updateParallax);
    }

    requestAnimationFrame(updateParallax);
  }

  initHeroMouseParallax();

  // ============================================================
  // BUILD KIT CATEGORIES ACCORDION
  // ============================================================
  const buildKitCategories = document.querySelectorAll('.build-kit-category');
  buildKitCategories.forEach(cat => {
    const btn = cat.querySelector('.build-kit-category-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        buildKitCategories.forEach(other => {
          if (other !== cat) other.classList.remove('active');
        });
        cat.classList.toggle('active');
        soundEngine.playBeep(520, 'sine', 0.04);
      });
    }
  });

  // ============================================================
  // ROUND 3 RACE TRACK CANVAS SIMULATION
  // ============================================================
  const trackCanvas = document.getElementById('round-3-track-canvas');
  if (trackCanvas) {
    const ctx = trackCanvas.getContext('2d');
    let t = 0;

    function resizeCanvas() {
      trackCanvas.width = trackCanvas.offsetWidth;
      trackCanvas.height = trackCanvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function drawRaceSimulation() {
      if (!ctx) return;
      const width = trackCanvas.width;
      const height = trackCanvas.height;

      ctx.clearRect(0, 0, width, height);

      // Clean glowing track line
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#4D8DFF';
      ctx.shadowColor = '#6EA8FF';
      ctx.shadowBlur = 8;

      const pathPoints = [];
      const steps = 120;
      for (let i = 0; i <= steps; i++) {
        const progress = i / steps;
        const x = width * 0.08 + progress * (width * 0.84);
        const y = height / 2 + Math.sin(progress * Math.PI * 2) * (height * 0.28);
        pathPoints.push({ x, y });

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Robot progress along line
      t += 0.0045;
      if (t > 1) t = 0;

      const currIdx = Math.floor(t * steps);
      const robotPos = pathPoints[currIdx] || pathPoints[0];

      // Draw Robot Marker
      ctx.save();
      ctx.translate(robotPos.x, robotPos.y);

      ctx.fillStyle = '#080A14';
      ctx.strokeStyle = '#6EA8FF';
      ctx.lineWidth = 1.5;
      ctx.fillRect(-9, -5, 18, 10);
      ctx.strokeRect(-9, -5, 18, 10);

      ctx.fillStyle = '#6EA8FF';
      ctx.beginPath();
      ctx.arc(5, 0, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(drawRaceSimulation);
    }

    drawRaceSimulation();
  }
}
