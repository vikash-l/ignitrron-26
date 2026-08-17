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

export const GammaCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    // Check if device supports hover/pointer interactions (mouse-based desktop)
    const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                     !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                     
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isHoveringInteractive = false;
    
    // Green hues for gamma-energy
    const colors = [
      'rgba(16, 185, 129, ', // Emerald 500
      'rgba(52, 211, 153, ', // Emerald 400
      'rgba(34, 197, 94, ',  // Green 500
      'rgba(74, 222, 128, ',  // Green 400
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;

      // Detect if hover target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        isHoveringInteractive = window.getComputedStyle(target).cursor === 'pointer' ||
                                 target.closest('a, button, [role="button"], .hulk-rage-card') !== null;
      } else {
        isHoveringInteractive = false;
      }

      // Spawn particles on cursor move (slightly larger near interactive items)
      const count = isHoveringInteractive ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.3,
          vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.3,
          size: (Math.random() * 3 + 1) * (isHoveringInteractive ? 1.4 : 1),
          alpha: Math.random() * 0.7 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          decay: Math.random() * 0.015 + 0.01
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

      // Draw active particles
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
        
        // Add gamma glow shadow to individual particles
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
        
        ctx.fill();
        ctx.restore();
      }

      // Draw cursor glow halo (stronger near interactive items)
      if (mouseRef.current.active) {
        ctx.save();
        const radius = isHoveringInteractive ? 75 : 45;
        const opacity = isHoveringInteractive ? 0.22 : 0.12;

        const grad = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, radius
        );
        grad.addColorStop(0, `rgba(16, 185, 129, ${opacity})`);
        grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

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
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      style={{ display: 'block' }}
    />
  );
};
