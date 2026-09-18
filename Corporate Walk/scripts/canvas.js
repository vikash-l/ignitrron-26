/* ==========================================================================
   CORPORATE WALK — HIGH-ENERGY AMBIENT BACKGROUND CANVAS
   Crimson embers, glowing sparks, geometric tactical threads & mouse reaction
   ========================================================================== */

(function () {
  'use strict';

  const canvas = document.getElementById('canvas-backdrop');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 75;
  let mouse = { x: null, y: null, radius: 160 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
  resize();

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 15;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.7 + 0.25);
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.opacity = Math.random() * 0.65 + 0.25;
      this.glow = Math.random() > 0.3;
      const rand = Math.random();
      if (rand < 0.65) {
        this.color = `rgba(227, 27, 35, ${this.opacity})`;
        this.glowColor = 'rgba(227, 27, 35, 0.4)';
      } else if (rand < 0.85) {
        this.color = `rgba(255, 77, 90, ${this.opacity * 0.9})`;
        this.glowColor = 'rgba(255, 77, 90, 0.5)';
      } else {
        this.color = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        this.glowColor = 'rgba(255, 255, 255, 0.2)';
      }
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseAngle = Math.random() * Math.PI * 2;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.pulseAngle += this.pulseSpeed;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          this.x += (dx / dist) * force;
          this.y += (dy / dist) * force;
        }
      }

      if (this.y < -15 || this.x < -15 || this.x > width + 15) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      const currentOpacity = this.opacity * (0.8 + 0.2 * Math.sin(this.pulseAngle));
      ctx.globalAlpha = currentOpacity;

      if (this.glow) {
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = this.glowColor;
      }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw tactical connecting constellation grid
  function drawConstellations() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(227, 27, 35, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    drawConstellations();

    requestAnimationFrame(animate);
  }

  animate();
})();
