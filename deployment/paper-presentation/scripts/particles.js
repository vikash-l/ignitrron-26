/**
 * PYMVERSE - Quantum Particle Simulation Engine
 * Particle Physics, Proximity Bonds, Mouse Force-Field & Pym Scale Modulation
 */

class QuantumParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    // Scale mode: 'quantum' (sub-atomic), 'standard', 'giga'
    this.scaleMode = 'standard';
    
    this.particles = [];
    this.numParticles = 75;
    this.maxDistance = 120;
    this.speedMultiplier = 1;
    this.radiusMultiplier = 1;
    
    this.mouse = {
      x: null,
      y: null,
      radius: 150,
      isActive: false
    };

    this.ripples = [];

    this.colors = [
      { r: 0, g: 240, b: 255 },    // Electric Cyan
      { r: 168, g: 85, b: 247 },   // Quantum Violet
      { r: 59, g: 130, b: 246 },   // Laser Blue
      { r: 245, g: 158, b: 11 }    // Amber Gold Spark
    ];

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    this.dpr = window.devicePixelRatio || 1;
    this.width = this.canvas.parentElement ? this.canvas.parentElement.clientWidth : window.innerWidth;
    this.height = this.canvas.parentElement ? this.canvas.parentElement.clientHeight : window.innerHeight;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);

    // Dynamic density based on screen size
    if (this.width < 768) {
      this.numParticles = 35;
      this.maxDistance = 80;
    } else {
      this.numParticles = 75;
      this.maxDistance = 130;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        baseRadius: Math.random() * 2 + 1.2,
        radius: (Math.random() * 2 + 1.2) * this.radiusMultiplier,
        vx: (Math.random() - 0.5) * 0.8 * this.speedMultiplier,
        vy: (Math.random() - 0.5) * 0.8 * this.speedMultiplier,
        color: color,
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI * 2,
        spinAngle: Math.random() * Math.PI * 2,
        orbitDist: Math.random() * 8 + 4
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.isActive = true;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.isActive = false;
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      this.ripples.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.8,
        color: this.colors[0]
      });

      // Quantum impulse on nearby particles
      this.particles.forEach(p => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 20;
          p.vx += (dx / dist) * force * 0.4;
          p.vy += (dy / dist) * force * 0.4;
        }
      });
    });
  }

  setScaleMode(mode) {
    this.scaleMode = mode;
    if (mode === 'quantum') {
      // Sub-atomic mode: Tiny, ultra-fast particles
      this.speedMultiplier = 2.4;
      this.radiusMultiplier = 0.55;
      this.maxDistance = 90;
    } else if (mode === 'giga') {
      // Giga-scale: Large, slow, massive orbs
      this.speedMultiplier = 0.45;
      this.radiusMultiplier = 2.4;
      this.maxDistance = 180;
    } else {
      // Standard mode
      this.speedMultiplier = 1;
      this.radiusMultiplier = 1;
      this.maxDistance = 130;
    }

    // Smoothly adapt existing particles
    this.particles.forEach(p => {
      p.radius = p.baseRadius * this.radiusMultiplier;
      p.vx = (Math.random() - 0.5) * 0.8 * this.speedMultiplier;
      p.vy = (Math.random() - 0.5) * 0.8 * this.speedMultiplier;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update & draw ripples
    for (let r = this.ripples.length - 1; r >= 0; r--) {
      const rip = this.ripples[r];
      rip.radius += 4;
      rip.alpha -= 0.018;

      if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
        this.ripples.splice(r, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(${rip.color.r}, ${rip.color.g}, ${rip.color.b}, ${rip.alpha})`;
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Connect particles within proximity
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const lineAlpha = (1 - dist / this.maxDistance) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // Update & Draw individual particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Mouse field reaction
      if (this.mouse.isActive && this.mouse.x !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius && dist > 1) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          // Hank Pym attraction field
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 1.5;
          p.y += Math.sin(angle) * force * 1.5;
        }
      }

      // Physics integration
      p.x += p.vx;
      p.y += p.vy;

      // Pulse alpha & radius oscillation
      p.pulseVal += p.pulseSpeed;
      const currentRadius = p.radius + Math.sin(p.pulseVal) * 0.4;

      // Screen wrap / bounce
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;

      // Draw particle glowing core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // reset
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Global hook
window.initQuantumParticles = (canvasId = 'quantum-canvas') => {
  return new QuantumParticleCanvas(canvasId);
};
