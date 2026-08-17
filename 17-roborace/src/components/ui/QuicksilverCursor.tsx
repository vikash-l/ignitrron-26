import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

interface TrailPoint {
  x: number;
  y: number;
}

export const QuicksilverCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, active: false, speed: 0 });

  useEffect(() => {
    // Check if device supports hover/pointer interactions (desktop mouse)
    const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                     !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                     
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const trailHistory: TrailPoint[] = [];
    const maxTrailLength = 15;
    let isHoveringInteractive = false;
    let prevHoveringState = false;

    // Metallic silver, chrome, and icy blue shades
    const colors = [
      'rgba(226, 232, 240, ', // Slate 200 (Silver)
      'rgba(255, 255, 255, ', // White (Chrome light)
      'rgba(203, 213, 225, ', // Slate 300 (Steel)
      'rgba(148, 163, 184, ', // Slate 400 (Graphite)
      'rgba(56, 189, 248, ',  // Sky 400 (Icy Blue)
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Trigger explosive speed burst particles
    const triggerSpeedBurst = (x: number, y: number, count = 12) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          decay: Math.random() * 0.03 + 0.02
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Calculate instantaneous velocity
      const dx = mouse.x - mouse.prevX;
      const dy = mouse.y - mouse.prevY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      // Detect interactive hovers
      const target = e.target as HTMLElement | null;
      if (target) {
        isHoveringInteractive = window.getComputedStyle(target).cursor === 'pointer' ||
                                 target.closest('a, button, [role="button"], .quicksilver-card') !== null;
      } else {
        isHoveringInteractive = false;
      }

      // Check if hover just entered interactive zone -> speed burst!
      if (isHoveringInteractive && !prevHoveringState) {
        triggerSpeedBurst(mouse.x, mouse.y, 16);
      }
      prevHoveringState = isHoveringInteractive;

      // Add to trail history
      trailHistory.push({ x: mouse.x, y: mouse.y });
      if (trailHistory.length > maxTrailLength) {
        trailHistory.shift();
      }

      // Spawn trail particles (more particles if moving fast or hovering)
      const particleCount = Math.min(Math.floor(mouse.speed / 8) + (isHoveringInteractive ? 2 : 1), 5);
      for (let i = 0; i < particleCount; i++) {
        // Spew opposite to movement direction with some dispersion
        const dirAngle = Math.atan2(dy, dx) + Math.PI;
        const dispersion = (Math.random() - 0.5) * 1.5;
        const pSpeed = Math.random() * (mouse.speed * 0.15) + 0.5;

        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: Math.cos(dirAngle + dispersion) * pSpeed + (Math.random() - 0.5) * 0.5,
          vy: Math.sin(dirAngle + dispersion) * pSpeed + (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 0.5,
          alpha: Math.random() * 0.6 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          decay: Math.random() * 0.02 + 0.015
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // 1. Draw Metallic Speed Trail (history line)
      if (trailHistory.length > 1 && mouse.active) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(trailHistory[0].x, trailHistory[0].y);
        
        for (let i = 1; i < trailHistory.length; i++) {
          // Quad curves for smoother lines
          const xc = (trailHistory[i].x + trailHistory[i - 1].x) / 2;
          const yc = (trailHistory[i].y + trailHistory[i - 1].y) / 2;
          ctx.quadraticCurveTo(trailHistory[i - 1].x, trailHistory[i - 1].y, xc, yc);
        }

        // Make line thickness scale with speed (wider when fast)
        const thickness = Math.max(1, Math.min(mouse.speed * 0.15, 6));
        ctx.lineWidth = thickness;
        
        // Chrome/Silver/Icy gradient along the trail
        const grad = ctx.createLinearGradient(
          trailHistory[0].x, trailHistory[0].y,
          mouse.x, mouse.y
        );
        grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        grad.addColorStop(0.5, 'rgba(226, 232, 240, 0.4)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.85)');
        
        ctx.strokeStyle = grad;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.restore();
      }

      // 2. Draw Speed Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      // 3. Draw Subtle Chrome Glow Halo
      if (mouse.active) {
        ctx.save();
        const radius = isHoveringInteractive ? 80 : 40;
        const opacity = isHoveringInteractive ? 0.15 : 0.08;

        const grad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, radius
        );
        
        // Icy blue center, transparent edge
        grad.addColorStop(0, `rgba(56, 189, 248, ${opacity})`);
        grad.addColorStop(0.4, `rgba(255, 255, 255, ${opacity * 0.4})`);
        grad.addColorStop(1, 'rgba(6, 6, 8, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw tiny chrome dot in center of cursor
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        
        ctx.restore();
      }

      // Simulate friction on mouse speed decay
      mouse.speed *= 0.95;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{ display: 'block' }}
    />
  );
};
