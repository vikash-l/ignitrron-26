import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
  wobbleSpeed: number;
  wobbleAmp: number;
}

interface RuneGlyph {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  alpha: number;
  pulsePhase: number;
  type: number; // 0: Arcane Ring, 1: Sacred Triangle, 2: Diamond Seal, 3: Rune Cross, 4: Hexagram fragment
  color: string;
}

interface CursorSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates relative to viewport
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, radius: 220 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn interactive magic sparks on mouse movement
      if (!reducedMotion && Math.random() < 0.65) {
        spawnMouseSpark(mouse.x, mouse.y);
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Floating Arcane Particles, Runes, and Cursor Sparks
    let particles: Particle[] = [];
    let runeGlyphs: RuneGlyph[] = [];
    let cursorSparks: CursorSpark[] = [];

    const emeraldColors = ['#16A36A', '#35E6A1', '#7CFFCB', '#2DD4BF', '#059669', '#A7F3D0'];

    const spawnMouseSpark = (x: number, y: number) => {
      if (cursorSparks.length > 50) return;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      cursorSparks.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.4,
        life: 1.0,
        maxLife: Math.random() * 30 + 25,
        size: Math.random() * 2.2 + 1.2,
        color: emeraldColors[Math.floor(Math.random() * emeraldColors.length)],
      });
    };

    const initElements = () => {
      const isMobile = Math.min(width, height) <= 768;
      const particleCount = Math.floor(isMobile ? 35 : 75);
      const runeCount = Math.floor(isMobile ? 6 : 14);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.4 + 0.12), // Upward mystic ember drift
          radius: Math.random() * 2.0 + 0.8,
          baseAlpha: Math.random() * 0.45 + 0.2,
          color: emeraldColors[Math.floor(Math.random() * emeraldColors.length)],
          pulseSpeed: Math.random() * 0.025 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.03 + 0.01,
          wobbleAmp: Math.random() * 0.6 + 0.2,
        });
      }

      runeGlyphs = [];
      for (let i = 0; i < runeCount; i++) {
        runeGlyphs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -(Math.random() * 0.2 + 0.06),
          size: Math.random() * 18 + 12,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.008,
          alpha: Math.random() * 0.25 + 0.12,
          pulsePhase: Math.random() * Math.PI * 2,
          type: Math.floor(Math.random() * 5),
          color: emeraldColors[Math.floor(Math.random() * 3)],
        });
      }
    };

    initElements();

    // Floating Ambient Volumetric Light Fields
    const lightOrbs = [
      { x: width * 0.85, y: height * 0.2, vx: 0.08, vy: -0.05, r: 460, color: 'rgba(22, 163, 106, 0.16)' },
      { x: width * 0.15, y: height * 0.65, vx: -0.06, vy: 0.07, r: 480, color: 'rgba(53, 230, 161, 0.11)' },
      { x: width * 0.55, y: height * 0.85, vx: 0.07, vy: 0.04, r: 420, color: 'rgba(10, 35, 26, 0.3)' },
      { x: width * 0.5, y: height * 0.35, vx: -0.04, vy: -0.03, r: 350, color: 'rgba(124, 255, 203, 0.06)' },
    ];

    // Helper: Draw Sacred Geometric Runes
    const drawRune = (r: RuneGlyph, currentAlpha: number) => {
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(r.rotation);
      ctx.strokeStyle = r.color;
      ctx.lineWidth = 1.0;
      ctx.globalAlpha = Math.max(0.04, Math.min(0.6, currentAlpha));

      const s = r.size;

      switch (r.type) {
        case 0: // Arcane Concentric Ring with Cardinal Ticks
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-s * 1.2, 0); ctx.lineTo(s * 1.2, 0);
          ctx.moveTo(0, -s * 1.2); ctx.lineTo(0, s * 1.2);
          ctx.stroke();
          break;

        case 1: // Inscribed Sacred Triangle
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.866, s * 0.5);
          ctx.lineTo(-s * 0.866, s * 0.5);
          ctx.closePath();
          ctx.stroke();
          break;

        case 2: // Mystic Diamond Seal
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case 3: // Rune Arc & Point
          ctx.beginPath();
          ctx.arc(0, 0, s, 0, Math.PI * 1.5);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = r.color;
          ctx.fill();
          break;

        case 4: // Hexagram Geometry Fragment
          ctx.beginPath();
          ctx.moveTo(0, -s); ctx.lineTo(s * 0.866, s * 0.5); ctx.lineTo(-s * 0.866, s * 0.5); ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(0, s); ctx.lineTo(s * 0.866, -s * 0.5); ctx.lineTo(-s * 0.866, -s * 0.5); ctx.closePath();
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    let tick = 0;

    // Main 60 FPS Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Broad Volumetric Light Orbs
      lightOrbs.forEach((orb) => {
        if (!reducedMotion) {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
          if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;
        }

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Floating Arcane Rune Glyphs
      for (let i = 0; i < runeGlyphs.length; i++) {
        const r = runeGlyphs[i];

        if (!reducedMotion) {
          r.x += r.vx;
          r.y += r.vy;
          r.rotation += r.rotSpeed;

          // Wrap boundaries
          if (r.y < -50) {
            r.y = height + 50;
            r.x = Math.random() * width;
          }
          if (r.x < -50) r.x = width + 50;
          if (r.x > width + 50) r.x = -50;

          // Cursor deflection
          const dx = mouse.x - r.x;
          const dy = mouse.y - r.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            r.x -= (dx / dist) * force * 1.0;
            r.y -= (dy / dist) * force * 1.0;
          }
        }

        r.pulsePhase += 0.015;
        const currentAlpha = r.alpha + Math.sin(r.pulsePhase) * 0.08;
        drawRune(r, currentAlpha);
      }

      // 3. Draw Moving Mystic Embers & Vector Energy Lines
      const connectionDist = width < 768 ? 90 : 130;

      for (let i = 0; i < particles.length; i++) {
        const pA = particles[i];

        if (!reducedMotion) {
          pA.x += pA.vx + Math.sin(tick + i) * pA.wobbleAmp * 0.3;
          pA.y += pA.vy;

          // Wrap boundaries smoothly for continuous floating dust
          if (pA.x < 0) pA.x = width;
          if (pA.x > width) pA.x = 0;
          if (pA.y < 0) pA.y = height;
          if (pA.y > height) pA.y = 0;

          // Interactive Cursor Proximity Shift
          const dxMouse = mouse.x - pA.x;
          const dyMouse = mouse.y - pA.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            pA.x -= (dxMouse / distMouse) * force * 1.4;
            pA.y -= (dyMouse / distMouse) * force * 1.4;
          }
        }

        // Draw Particle Ember
        pA.pulsePhase += pA.pulseSpeed;
        const currentAlpha = pA.baseAlpha + Math.sin(pA.pulsePhase) * 0.18;

        ctx.fillStyle = pA.color;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.95, currentAlpha));
        ctx.beginPath();
        ctx.arc(pA.x, pA.y, pA.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect Closest Particles with faint mystical energy threads
        for (let j = i + 1; j < particles.length; j++) {
          const pB = particles[j];
          const dx = pB.x - pA.x;
          const dy = pB.y - pA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.18;
            ctx.strokeStyle = pA.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }

      // 4. Draw Interactive Cursor Spark Trails
      for (let i = cursorSparks.length - 1; i >= 0; i--) {
        const sp = cursorSparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.life -= 1 / sp.maxLife;

        if (sp.life <= 0) {
          cursorSparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.life * 0.85;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Deep Obsidian-Black Gradient Base (#050807 -> #08110E -> #0A1512) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(130% 100% at 50% 0%, #0A1512 0%, #08110E 40%, #050807 90%)',
        }}
      />

      {/* Deep Cosmic Background Sacred Mandala Geometry (Dual Counter-Rotating Layers) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07] overflow-hidden">
        {/* Mandala Ring 1 (Slow CW) */}
        <div className="absolute w-full max-w-[950px] h-[950px] animate-portal-cw-slow">
          <svg viewBox="0 0 800 800" className="w-full h-full" fill="none">
            <circle cx="400" cy="400" r="380" stroke="#35E6A1" strokeWidth="1.5" strokeDasharray="12 16" />
            <circle cx="400" cy="400" r="320" stroke="#16A36A" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="400" cy="400" r="260" stroke="#7CFFCB" strokeWidth="1.5" strokeDasharray="30 20 10 20" />
            {/* 12-point Sacred Star Polygon */}
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <line
                key={`m1-line-${deg}`}
                x1={400 + 380 * Math.cos((deg * Math.PI) / 180)}
                y1={400 + 380 * Math.sin((deg * Math.PI) / 180)}
                x2={400 - 380 * Math.cos((deg * Math.PI) / 180)}
                y2={400 - 380 * Math.sin((deg * Math.PI) / 180)}
                stroke="#35E6A1"
                strokeWidth="0.8"
                strokeOpacity="0.6"
              />
            ))}
          </svg>
        </div>

        {/* Mandala Ring 2 (Slow CCW) */}
        <div className="absolute w-full max-w-[780px] h-[780px] animate-portal-ccw-slow">
          <svg viewBox="0 0 700 700" className="w-full h-full" fill="none">
            <rect x="150" y="150" width="400" height="400" stroke="#7CFFCB" strokeWidth="1" />
            <rect x="150" y="150" width="400" height="400" stroke="#35E6A1" strokeWidth="1" transform="rotate(45 350 350)" />
            <circle cx="350" cy="350" r="200" stroke="#16A36A" strokeWidth="1.2" strokeDasharray="16 12" />
          </svg>
        </div>
      </div>

      {/* Volumetric Arcane Light Beams (Ethereal Angled God Rays) */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          background: 'linear-gradient(125deg, rgba(53, 230, 161, 0.35) 0%, transparent 40%, rgba(22, 163, 106, 0.25) 70%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* 60 FPS HTML5 Canvas with Moving Runes, Sparks, and Interactive Magic Trail */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle Arcane Grid Overlay with Center Mask */}
      <div 
        className="absolute inset-0 bg-subtle-grid opacity-25"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 40%, black 20%, transparent 85%)',
        }}
      />

      {/* Cinematic Vignette Shadow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 45%, rgba(5, 8, 7, 0.92) 100%)',
        }}
      />
    </div>
  );
};
