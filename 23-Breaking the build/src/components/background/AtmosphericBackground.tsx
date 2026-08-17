import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface CosmicLaser {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  width: number;
  color: string;
  coreColor: string;
  alpha: number;
  life: number;
  maxLife: number;
}

interface TargetingReticle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  rotation: number;
  rotSpeed: number;
  alpha: number;
  pulsePhase: number;
}

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const mediaListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', mediaListener);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates relative to viewport
    const mouse = { x: width * 0.5, y: height * 0.3, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // 1. Celestial Stars Initialization
    let stars: Star[] = [];
    const starColors = ['#F5F1ED', '#EF4444', '#F97316', '#F59E0B', '#B42318'];

    // 2. Cosmic Lasers Array
    let lasers: CosmicLaser[] = [];
    const laserColors = [
      { beam: '#EF4444', core: '#FFFFFF' },
      { beam: '#F97316', core: '#FFF7ED' },
      { beam: '#B42318', core: '#FEE2E2' },
      { beam: '#F59E0B', core: '#FFFBEB' },
    ];

    // 3. Faint Technical HUD Reticles
    let reticles: TargetingReticle[] = [];

    const initElements = () => {
      const isMobile = width < 768;

      // Stars
      const starCount = isMobile ? 36 : 70;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1.4 + 0.6,
          baseAlpha: Math.random() * 0.4 + 0.2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      // Initial Reticles
      reticles = [
        {
          x: width * 0.85,
          y: height * 0.25,
          targetX: width * 0.85,
          targetY: height * 0.25,
          radius: isMobile ? 28 : 45,
          rotation: 0,
          rotSpeed: 0.004,
          alpha: 0.25,
          pulsePhase: 0,
        },
        {
          x: width * 0.12,
          y: height * 0.65,
          targetX: width * 0.12,
          targetY: height * 0.65,
          radius: isMobile ? 22 : 36,
          rotation: Math.PI / 4,
          rotSpeed: -0.005,
          alpha: 0.2,
          pulsePhase: Math.PI,
        },
      ];
    };

    initElements();

    // Laser Spawner Function
    const spawnLaser = () => {
      if (lasers.length >= 7) return;

      const colorSet = laserColors[Math.floor(Math.random() * laserColors.length)];
      // Choose spawn quadrant and trajectory across viewport
      const startFromTop = Math.random() > 0.4;
      const startX = startFromTop ? Math.random() * width * 1.2 - width * 0.1 : -100;
      const startY = startFromTop ? -80 : Math.random() * height * 0.6;
      const angle = (Math.random() * 25 + 30) * (Math.PI / 180); // 30° to 55° diagonal sweep
      const speed = Math.random() * 7 + 9;
      const length = Math.random() * 220 + 160;

      lasers.push({
        x: startX,
        y: startY,
        length,
        angle,
        speed,
        width: Math.random() * 1.5 + 1.2,
        color: colorSet.beam,
        coreColor: colorSet.core,
        alpha: Math.random() * 0.35 + 0.45,
        life: 0,
        maxLife: Math.floor(Math.max(width, height) / speed) + 50,
      });
    };

    // Deep Atmospheric Nebula Light Orbs
    const nebulaFields = [
      { x: width * 0.82, y: height * 0.2, vx: 0.05, vy: -0.04, r: 520, color: 'rgba(180, 35, 24, 0.16)' },
      { x: width * 0.18, y: height * 0.45, vx: -0.04, vy: 0.06, r: 460, color: 'rgba(36, 16, 13, 0.38)' },
      { x: width * 0.7, y: height * 0.75, vx: 0.06, vy: 0.04, r: 480, color: 'rgba(127, 29, 29, 0.18)' },
      { x: width * 0.35, y: height * 0.85, vx: -0.05, vy: -0.03, r: 420, color: 'rgba(249, 115, 22, 0.12)' },
    ];

    let tick = 0;

    // 60 FPS Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick++;
      ctx.clearRect(0, 0, width, height);

      // --- 1. Broad Volumetric Cosmic Nebula Gas Layers ---
      nebulaFields.forEach((orb) => {
        if (!reducedMotion) {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -140 || orb.x > width + 140) orb.vx *= -1;
          if (orb.y < -140 || orb.y > height + 140) orb.vy *= -1;
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.55, orb.color.replace(/[\d.]+\)$/, '0.04)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- 2. Interactive Cursor Laser Flare (Gentle follow) ---
      if (mouse.active && !reducedMotion) {
        const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        cursorGlow.addColorStop(0, 'rgba(239, 68, 68, 0.14)');
        cursorGlow.addColorStop(0.4, 'rgba(249, 115, 22, 0.06)');
        cursorGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- 3. Ambient Faint Orbital Telemetry & Geometry Lines ---
      ctx.save();
      ctx.strokeStyle = 'rgba(180, 35, 24, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(width * 0.75, height * 0.35, width > 768 ? 320 : 180, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(249, 115, 22, 0.06)';
      ctx.beginPath();
      ctx.ellipse(width * 0.3, height * 0.7, 360, 220, -Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // --- 4. Celestial Stars with Twinkle and Constellation Traces ---
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reducedMotion) {
          star.x += star.vx;
          star.y += star.vy;

          if (star.x < 0 || star.x > width) star.vx *= -1;
          if (star.y < 0 || star.y > height) star.vy *= -1;
        }

        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.15;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.85, currentAlpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Very faint nearby star connection
        if (i % 3 === 0) {
          for (let j = i + 1; j < Math.min(i + 4, stars.length); j++) {
            const starB = stars[j];
            const dx = starB.x - star.x;
            const dy = starB.y - star.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110) {
              ctx.strokeStyle = 'rgba(249, 115, 22, 0.08)';
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(starB.x, starB.y);
              ctx.stroke();
            }
          }
        }
      }

      // --- 5. High-Energy Cosmic Laser Beams ---
      // Spawn new laser at deliberate intervals
      if (!reducedMotion && tick % 65 === 0 && Math.random() > 0.25) {
        spawnLaser();
      }

      for (let i = lasers.length - 1; i >= 0; i--) {
        const laser = lasers[i];

        if (!reducedMotion) {
          laser.x += Math.cos(laser.angle) * laser.speed;
          laser.y += Math.sin(laser.angle) * laser.speed;
          laser.life++;
        }

        const tailX = laser.x - Math.cos(laser.angle) * laser.length;
        const tailY = laser.y - Math.sin(laser.angle) * laser.length;

        // Draw Outer Laser Glow
        const laserGlow = ctx.createLinearGradient(tailX, tailY, laser.x, laser.y);
        laserGlow.addColorStop(0, 'transparent');
        laserGlow.addColorStop(0.7, laser.color);
        laserGlow.addColorStop(1, '#FFFFFF');

        ctx.save();
        ctx.strokeStyle = laserGlow;
        ctx.lineWidth = laser.width * 2.5;
        ctx.lineCap = 'round';
        ctx.globalAlpha = laser.alpha * 0.45;
        ctx.shadowColor = laser.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(laser.x, laser.y);
        ctx.stroke();

        // Draw High-Intensity Core Laser Beam
        ctx.strokeStyle = laserGlow;
        ctx.lineWidth = laser.width;
        ctx.globalAlpha = laser.alpha;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(laser.x, laser.y);
        ctx.stroke();

        // Leading Energy Pulse Point
        ctx.fillStyle = laser.coreColor;
        ctx.globalAlpha = Math.min(1, laser.alpha * 1.4);
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(laser.x, laser.y, laser.width * 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Remove laser when off screen or expired
        if (
          laser.life > laser.maxLife ||
          laser.x > width + 200 ||
          laser.y > height + 200 ||
          laser.x < -200 ||
          laser.y < -200
        ) {
          lasers.splice(i, 1);
        }
      }

      // --- 6. Technical HUD Reticles (Cosmic telemetry markers) ---
      reticles.forEach((reticle) => {
        if (!reducedMotion) {
          reticle.rotation += reticle.rotSpeed;
          reticle.pulsePhase += 0.02;
        }

        const alpha = reticle.alpha + Math.sin(reticle.pulsePhase) * 0.08;

        ctx.save();
        ctx.translate(reticle.x, reticle.y);
        ctx.rotate(reticle.rotation);
        ctx.strokeStyle = 'rgba(239, 68, 68, ' + Math.max(0.05, alpha) + ')';
        ctx.lineWidth = 1;

        // Circular bracket arcs
        ctx.beginPath();
        ctx.arc(0, 0, reticle.radius, 0, Math.PI * 0.4);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, reticle.radius, Math.PI * 0.6, Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, reticle.radius, Math.PI * 1.2, Math.PI * 1.6);
        ctx.stroke();

        // Crosshairs
        ctx.strokeStyle = 'rgba(249, 115, 22, ' + (alpha * 0.7) + ')';
        ctx.beginPath();
        ctx.moveTo(-reticle.radius * 0.4, 0);
        ctx.lineTo(reticle.radius * 0.4, 0);
        ctx.moveTo(0, -reticle.radius * 0.4);
        ctx.lineTo(0, reticle.radius * 0.4);
        ctx.stroke();

        ctx.restore();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      media.removeEventListener('change', mediaListener);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Cosmic Crimson Base Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(140% 110% at 50% 0%, #120A08 0%, #070506 50%, #030304 100%)',
        }}
      />

      {/* 2. Soft Dark Burgundy Cloud Layer */}
      <div 
        className="absolute inset-0 opacity-45"
        style={{
          background: 'radial-gradient(ellipse at 85% 15%, #24100D 0%, transparent 65%), radial-gradient(ellipse at 15% 75%, #1D0A08 0%, transparent 60%)',
        }}
      />

      {/* 3. 60 FPS HTML5 Canvas with Cosmic Lasers, Nebula Drifts & Sparse Stars */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 4. Subtle Game-Development Technical Grid Overlay */}
      <div 
        className="absolute inset-0 bg-subtle-grid opacity-25"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 55% at 50% 35%, black 15%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 35%, black 15%, transparent 75%)',
        }}
      />

      {/* 5. Deep Cinematic Edge Vignette Shadow (Deep falloff into near-black) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(3, 3, 4, 0.92) 100%)',
        }}
      />
    </div>
  );
};
