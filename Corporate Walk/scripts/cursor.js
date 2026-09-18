/* ==========================================================================
   CORPORATE WALK — CUSTOM BLACK WIDOW CURSOR
   ========================================================================== */

(function () {
  'use strict';

  // Check if touch device
  if (window.matchMedia('(pointer: coarse)').matches) {
    return;
  }

  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('custom-cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;
  let isHovering = false;

  // Track mouse
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Smooth lerp follower
  function renderCursor() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover detection on interactive elements
  const interactiveSelector = 'a, button, input, .mindset-row, .podium-rank-row, .runway-step-item, .detail-block';

  function attachHoverListeners() {
    const elements = document.querySelectorAll(interactiveSelector);
    elements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        follower.classList.add('hovering');
        isHovering = true;
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        follower.classList.remove('hovering');
        isHovering = false;
      });
    });
  }

  attachHoverListeners();

  // Click shockwave
  window.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.6)';
    follower.style.transform = 'translate(-50%, -50%) scale(0.8)';
    follower.style.borderColor = '#ffffff';
  });

  window.addEventListener('mouseup', () => {
    cursor.style.transform = isHovering ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)';
    follower.style.transform = isHovering ? 'translate(-50%, -50%) scale(1.2)' : 'translate(-50%, -50%) scale(1)';
    follower.style.borderColor = 'rgba(217, 4, 41, 0.5)';
  });
})();
