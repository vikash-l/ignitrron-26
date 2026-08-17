import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
  isPetal?: boolean;
  rotation?: number;
  rotSpeed?: number;
}

interface TravellingArrow {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  length: number;
  trailLength: number;
  color: string;
  glowColor: string;
  alpha: number;
  depth: number;
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

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
      initArrows();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Particles: Embers, Gold Dust, and Drifting Night Petals
    let particles: Particle[] = [];
    const colors = ['#C63C32', '#C9A45C', '#E28C48', '#F1E8D5', '#243B63'];

    const initParticles = () => {
      const count = Math.floor(Math.min(width, height) > 768 ? 60 : 30);
      particles = [];

      for (let i = 0; i < count; i++) {
        const isPetal = Math.random() < 0.28;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: isPetal ? (Math.random() - 0.3) * 0.45 : (Math.random() - 0.5) * 0.3,
          vy: isPetal ? Math.random() * 0.35 + 0.15 : -Math.random() * 0.35 - 0.1,
          radius: isPetal ? Math.random() * 3 + 2 : Math.random() * 2 + 0.8,
          baseAlpha: Math.random() * 0.4 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
          isPetal,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.03,
        });
      }
    };

    // Travelling Arrows System
    let arrows: TravellingArrow[] = [];

    const createArrow = (forceSpawnLeft = false): TravellingArrow => {
      const depth = Math.random() < 0.4 ? 0 : Math.random() < 0.75 ? 1 : 2;
      const speed = depth === 0 ? 0.7 + Math.random() * 0.4 : depth === 1 ? 1.1 + Math.random() * 0.5 : 1.5 + Math.random() * 0.6;
      
      const angleDeg = (Math.random() - 0.4) * 20;
      const angleRad = (angleDeg * Math.PI) / 180;

      const vx = Math.cos(angleRad) * speed;
      const vy = Math.sin(angleRad) * speed;

      const startX = forceSpawnLeft ? -150 - Math.random() * 300 : Math.random() * (width + 300) - 150;
      const startY = Math.random() * (height * 1.2) - 50;

      const arrowColors = [
        { main: '#C9A45C', glow: 'rgba(201, 164, 92, 0.4)' },
        { main: '#C63C32', glow: 'rgba(198, 60, 50, 0.4)' },
        { main: '#E28C48', glow: 'rgba(226, 140, 72, 0.4)' },
        { main: '#F1E8D5', glow: 'rgba(241, 232, 213, 0.35)' },
      ];
      const selectedColor = arrowColors[Math.floor(Math.random() * arrowColors.length)];

      return {
        x: startX,
        y: startY,
        vx,
        vy,
        angle: angleRad,
        length: depth === 0 ? 55 : depth === 1 ? 85 : 115,
        trailLength: depth === 0 ? 90 : depth === 1 ? 140 : 190,
        color: selectedColor.main,
        glowColor: selectedColor.glow,
        alpha: depth === 0 ? 0.22 : depth === 1 ? 0.42 : 0.65,
        depth,
      };
    };

    const initArrows = () => {
      const arrowCount = width > 768 ? 6 : 3;
      arrows = [];
      for (let i = 0; i < arrowCount; i++) {
        arrows.push(createArrow(false));
      }
    };

    initParticles();
    initArrows();

    // Ambient Environmental Lantern Glow Pools
    const glowOrbs = [
      { x: width * 0.85, y: height * 0.18, vx: 0.08, vy: -0.05, r: 420, color: 'rgba(198, 60, 50, 0.15)' },
      { x: width * 0.15, y: height * 0.45, vx: -0.06, vy: 0.06, r: 450, color: 'rgba(36, 59, 99, 0.22)' },
      { x: width * 0.75, y: height * 0.75, vx: 0.07, vy: 0.04, r: 390, color: 'rgba(201, 164, 92, 0.12)' },
      { x: width * 0.25, y: height * 0.88, vx: -0.07, vy: -0.04, r: 370, color: 'rgba(198, 60, 50, 0.12)' },
    ];

    let time = 0;

    // Main 60 FPS Canvas Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Environmental Ambient Glows
      glowOrbs.forEach((orb) => {
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

      // 2. Draw Moving Arrows with Luminous Streaks
      for (let i = 0; i < arrows.length; i++) {
        const arrow = arrows[i];

        if (!reducedMotion) {
          arrow.x += arrow.vx;
          arrow.y += arrow.vy;

          if (arrow.x > width + 300 || arrow.y > height + 200 || arrow.y < -200) {
            arrows[i] = createArrow(true);
            continue;
          }
        }

        const headX = arrow.x;
        const headY = arrow.y;
        const tailX = headX - Math.cos(arrow.angle) * arrow.length;
        const tailY = headY - Math.sin(arrow.angle) * arrow.length;
        const streakX = headX - Math.cos(arrow.angle) * (arrow.length + arrow.trailLength);
        const streakY = headY - Math.sin(arrow.angle) * (arrow.length + arrow.trailLength);

        // Motion Streak
        const trailGrad = ctx.createLinearGradient(streakX, streakY, tailX, tailY);
        trailGrad.addColorStop(0, 'transparent');
        trailGrad.addColorStop(0.6, arrow.glowColor);
        trailGrad.addColorStop(1, arrow.color);

        ctx.save();
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = arrow.depth === 0 ? 0.75 : arrow.depth === 1 ? 1.2 : 1.6;
        ctx.globalAlpha = arrow.alpha * 0.6;
        ctx.beginPath();
        ctx.moveTo(streakX, streakY);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.restore();

        // Arrow Shaft
        ctx.save();
        ctx.strokeStyle = arrow.color;
        ctx.lineWidth = arrow.depth === 0 ? 1 : arrow.depth === 1 ? 1.5 : 2;
        ctx.globalAlpha = arrow.alpha;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // Arrowhead
        const headSize = arrow.depth === 0 ? 6 : arrow.depth === 1 ? 9 : 12;
        const headAngle1 = arrow.angle + Math.PI - 0.45;
        const headAngle2 = arrow.angle + Math.PI + 0.45;

        ctx.fillStyle = arrow.color;
        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(headX + Math.cos(headAngle1) * headSize, headY + Math.sin(headAngle1) * headSize);
        ctx.lineTo(headX - Math.cos(arrow.angle) * (headSize * 0.45), headY - Math.sin(arrow.angle) * (headSize * 0.45));
        ctx.lineTo(headX + Math.cos(headAngle2) * headSize, headY + Math.sin(headAngle2) * headSize);
        ctx.closePath();
        ctx.fill();

        // Fletching / Feathers at Tail
        const fletchSize = arrow.depth === 0 ? 5 : arrow.depth === 1 ? 8 : 11;
        const fletchAngle1 = arrow.angle + Math.PI - 0.55;
        const fletchAngle2 = arrow.angle + Math.PI + 0.55;

        ctx.strokeStyle = arrow.color;
        ctx.lineWidth = arrow.depth === 0 ? 0.7 : 1;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(tailX + Math.cos(fletchAngle1) * fletchSize, tailY + Math.sin(fletchAngle1) * fletchSize);
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(tailX + Math.cos(fletchAngle2) * fletchSize, tailY + Math.sin(fletchAngle2) * fletchSize);
        ctx.stroke();

        ctx.restore();
      }

      // 3. Draw Particles (Embers & Night Petals)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx + Math.sin(time + p.pulsePhase) * 0.25;
          p.y += p.vy;

          if (p.rotation !== undefined && p.rotSpeed !== undefined) {
            p.rotation += p.rotSpeed;
          }

          if (p.isPetal) {
            if (p.y > height + 20) {
              p.y = -20;
              p.x = Math.random() * width;
            }
          } else {
            if (p.y < -20) {
              p.y = height + 20;
              p.x = Math.random() * width;
            }
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;

          // Interactive Cursor Breeze
          const dxMouse = mouse.x - p.x;
          const dyMouse = mouse.y - p.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            p.x -= (dxMouse / distMouse) * force * 1.5;
            p.y -= (dyMouse / distMouse) * force * 1.5;
          }
        }

        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.18;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.85, currentAlpha));

        if (p.isPetal && p.rotation !== undefined) {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.radius * 1.6, p.radius * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
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
      {/* Deep Sumi Black & Deep Indigo Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(130% 100% at 50% 0%, #101827 0%, #0C121E 45%, #08090C 100%)',
        }}
      />

      {/* 60 FPS HTML5 Canvas with Moving Arrows, Embers, Petals, and Glowing Trails */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* ========================================================= */}
      {/* HANGING JAPANESE LANTERNS ENVIRONMENT (TOP & SIDES)      */}
      {/* ========================================================= */}
      
      {/* Overhead Wire Lines */}
      <div className="absolute top-0 left-0 right-0 h-36 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
          <path d="M -50,15 Q 360,50 720,25 Q 1080,55 1490,20" stroke="rgba(201, 164, 92, 0.3)" strokeWidth="0.8" />
          <path d="M -50,35 Q 360,75 720,45 Q 1080,80 1490,40" stroke="rgba(198, 60, 50, 0.22)" strokeWidth="0.6" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* LANTERN CLUSTER 1: Top-Left Primary Foreground Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [-2, 2, -2],
          y: [0, 4, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-3 left-[4%] sm:left-[7%] w-10 sm:w-12 pointer-events-none z-10 origin-top"
      >
        <div className="w-0.5 h-6 bg-[#C9A45C]/40 mx-auto" />
        <div className="w-9 sm:w-11 h-14 sm:h-16 rounded-2xl bg-gradient-to-b from-[#A82B22] via-[#C63C32] to-[#8C1E17] border border-[#C9A45C]/60 mx-auto shadow-[0_0_28px_rgba(198,60,50,0.7)] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-x-0 top-1.5 h-1 bg-[#101827]/70" />
          <div className="absolute inset-x-0 bottom-1.5 h-1 bg-[#101827]/70" />
          <span className="font-editorial text-xs text-[#F1E8D5] font-bold opacity-90">祭</span>
        </div>
        <div className="w-1.5 h-4 bg-[#C9A45C]/50 mx-auto rounded-b" />
      </motion.div>

      {/* LANTERN CLUSTER 2: Top-Left Secondary Staggered Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [1.8, -1.8, 1.8],
          y: [0, -3, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-8 left-[11%] sm:left-[14%] w-8 sm:w-9 pointer-events-none z-10 origin-top hidden xs:block"
      >
        <div className="w-0.5 h-10 bg-[#C9A45C]/40 mx-auto" />
        <div className="w-7 sm:w-8 h-11 sm:h-13 rounded-xl bg-gradient-to-b from-[#C63C32] via-[#E28C48] to-[#9E2A20] border border-[#C9A45C]/50 mx-auto shadow-[0_0_20px_rgba(226,140,72,0.55)] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-x-0 top-1 h-0.5 bg-[#101827]/70" />
          <div className="absolute inset-x-0 bottom-1 h-0.5 bg-[#101827]/70" />
          <span className="font-editorial text-[10px] text-[#F1E8D5] font-bold opacity-85">灯</span>
        </div>
        <div className="w-1 h-3 bg-[#C9A45C]/50 mx-auto rounded-b" />
      </motion.div>

      {/* LANTERN CLUSTER 3: Top Center Ambient Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [-1.2, 1.2, -1.2],
          y: [0, 3, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-9 pointer-events-none z-10 origin-top hidden md:block opacity-75"
      >
        <div className="w-0.5 h-8 bg-[#C9A45C]/30 mx-auto" />
        <div className="w-7 sm:w-8 h-10 sm:h-12 rounded-xl bg-gradient-to-b from-[#9E2A20] via-[#C63C32] to-[#7A1812] border border-[#C9A45C]/40 mx-auto shadow-[0_0_18px_rgba(198,60,50,0.5)] relative overflow-hidden flex items-center justify-center">
          <span className="font-editorial text-[9px] text-[#F1E8D5] font-bold opacity-80">宴</span>
        </div>
        <div className="w-1 h-3 bg-[#C9A45C]/40 mx-auto rounded-b" />
      </motion.div>

      {/* LANTERN CLUSTER 4: Top-Right Secondary Staggered Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [-2.2, 2.2, -2.2],
          y: [0, 4, 0]
        }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute top-7 right-[12%] sm:right-[15%] w-8 sm:w-9 pointer-events-none z-10 origin-top hidden xs:block"
      >
        <div className="w-0.5 h-9 bg-[#C9A45C]/40 mx-auto" />
        <div className="w-7 sm:w-8 h-11 sm:h-13 rounded-xl bg-gradient-to-b from-[#A82B22] via-[#C63C32] to-[#8C1E17] border border-[#C9A45C]/50 mx-auto shadow-[0_0_22px_rgba(198,60,50,0.55)] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-x-0 top-1 h-0.5 bg-[#101827]/70" />
          <div className="absolute inset-x-0 bottom-1 h-0.5 bg-[#101827]/70" />
          <span className="font-editorial text-[10px] text-[#F1E8D5] font-bold opacity-85">武</span>
        </div>
        <div className="w-1 h-3 bg-[#C9A45C]/50 mx-auto rounded-b" />
      </motion.div>

      {/* LANTERN CLUSTER 5: Top-Right Primary Foreground Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [2.5, -2, 2.5],
          y: [0, -4, 0]
        }}
        transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="absolute top-4 right-[5%] sm:right-[8%] w-9 sm:w-11 pointer-events-none z-10 origin-top"
      >
        <div className="w-0.5 h-7 bg-[#C9A45C]/40 mx-auto" />
        <div className="w-8 sm:w-10 h-13 sm:h-15 rounded-2xl bg-gradient-to-b from-[#C63C32] via-[#E28C48]/95 to-[#A82B22] border border-[#C9A45C]/60 mx-auto shadow-[0_0_26px_rgba(226,140,72,0.65)] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-x-0 top-1.5 h-1 bg-[#101827]/70" />
          <div className="absolute inset-x-0 bottom-1.5 h-1 bg-[#101827]/70" />
          <span className="font-editorial text-xs text-[#F1E8D5] font-bold opacity-90">雅</span>
        </div>
        <div className="w-1.5 h-4 bg-[#C9A45C]/50 mx-auto rounded-b" />
      </motion.div>

      {/* LANTERN CLUSTER 6: Mid-Page Left Hanging Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [-1.8, 1.8, -1.8],
          y: [0, 5, 0]
        }}
        transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[48%] -left-2 sm:left-2 w-8 pointer-events-none z-10 origin-top opacity-60 hidden lg:block"
      >
        <div className="w-0.5 h-12 bg-[#C9A45C]/30 mx-auto" />
        <div className="w-7 h-11 rounded-xl bg-gradient-to-b from-[#A82B22] via-[#C63C32] to-[#7A1812] border border-[#C9A45C]/40 mx-auto shadow-[0_0_20px_rgba(198,60,50,0.45)] flex items-center justify-center">
          <span className="font-editorial text-[9px] text-[#F1E8D5] font-bold opacity-75">灯</span>
        </div>
      </motion.div>

      {/* LANTERN CLUSTER 7: Mid-Page Right Hanging Lantern */}
      <motion.div
        animate={reducedMotion ? {} : { 
          rotate: [1.6, -1.6, 1.6],
          y: [0, -5, 0]
        }}
        transition={{ duration: 8.8, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
        className="absolute top-[52%] -right-2 sm:right-2 w-8 pointer-events-none z-10 origin-top opacity-60 hidden lg:block"
      >
        <div className="w-0.5 h-14 bg-[#C9A45C]/30 mx-auto" />
        <div className="w-7 h-11 rounded-xl bg-gradient-to-b from-[#C63C32] via-[#E28C48] to-[#9E2A20] border border-[#C9A45C]/40 mx-auto shadow-[0_0_20px_rgba(226,140,72,0.45)] flex items-center justify-center">
          <span className="font-editorial text-[9px] text-[#F1E8D5] font-bold opacity-75">祭</span>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* THEME ELEMENTS: BOW ARCS & GEOMETRY                       */}
      {/* ========================================================= */}

      {/* Faint Bow Arcs (Yumi Longbow Silhouette Motifs) */}
      <div className="absolute top-0 left-0 right-0 h-full opacity-12 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          {/* Curved longbow arc top right */}
          <path d="M 1200,-50 Q 1420,300 1300,700" stroke="#C9A45C" strokeWidth="1.5" strokeDasharray="12 8" />
          <path d="M 1200,-50 L 1300,700" stroke="rgba(201, 164, 92, 0.4)" strokeWidth="0.6" />

          {/* Curved bow arc mid left */}
          <path d="M 150,200 Q -40,550 180,950" stroke="#C63C32" strokeWidth="1.2" strokeDasharray="16 10" />
          <path d="M 150,200 L 180,950" stroke="rgba(198, 60, 50, 0.35)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Subtle Japanese Shoji Grid Geometric Overlay */}
      <div 
        className="absolute inset-0 bg-shoji-grid opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 55% at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 55% at 50% 30%, black 20%, transparent 80%)',
        }}
      />

      {/* Traditional Japanese Wave (Seigaiha) Subtle Watermark */}
      <div 
        className="absolute inset-0 bg-seigaiha opacity-10"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 80%, black 15%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 80%, black 15%, transparent 85%)',
        }}
      />

      {/* Cinematic Edge Vignette Shadow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 45%, rgba(8, 9, 12, 0.92) 100%)',
        }}
      />
    </div>
  );
};


