export function initCursor() {
  const cursor = document.getElementById('pathfinder-cursor');
  const glow = document.getElementById('pathfinder-glow');

  if (!cursor) return;

  // Touch device check: keep native behavior and hide custom reticle on touch screens
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768) {
    cursor.style.display = 'none';
    if (glow) glow.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let cursorX = mouseX;
  let cursorY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // Smooth interpolation (subtle lag for organic precision targeting feel)
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    if (glow) {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;
      glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
    }

    requestAnimationFrame(animateCursor);
  }

  requestAnimationFrame(animateCursor);

  // Hover effect over interactive elements
  const interactiveSelector = 'a, button, input, select, textarea, label, [role="button"], .nav-link, .btn-primary-glow, .btn-secondary-glass, .btn-header-register, .btn-reg-submit, .round-panel, .build-kit-category-btn, .accordion-trigger';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      cursor.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      cursor.classList.remove('hovering');
    }
  });
}
