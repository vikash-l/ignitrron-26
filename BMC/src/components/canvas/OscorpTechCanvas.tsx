import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  pulseSpeed: number;
  phase: number;
  color: string;
}

export const OscorpTechCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle Setup
    let particles: Particle[] = [];
    const particleColors = [
      '#00ff88', // Oscorp Green
      '#00c96b', // Deep Emerald
      '#cbd5e1', // Silver
      '#f59e0b', // Gold Accent
    ];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 18000), 80);

      for (let i = 0; i < particleCount; i++) {
        const baseRadius = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          alpha: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
    };

    initParticles();

    // Render loop
    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw particle network links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.phase += p1.pulseSpeed;

        // Bounce on borders
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse interaction
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= (dxMouse / distMouse) * force * 3;
          p1.y -= (dyMouse / distMouse) * force * 3;
        }

        // Connecting lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 130;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Occasional glowing data packet travel
            if ((tick + i * 15) % 180 < 30 && dist < 100) {
              const progress = ((tick + i * 15) % 180) / 30;
              const packetX = p1.x + (p2.x - p1.x) * progress;
              const packetY = p1.y + (p2.y - p1.y) * progress;

              ctx.beginPath();
              ctx.arc(packetX, packetY, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = '#00ff88';
              ctx.shadowColor = '#00ff88';
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        // Draw particle
        const currentAlpha = p1.alpha + Math.sin(p1.phase) * 0.15;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[450px] bg-[#00ff88]/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-full max-w-[600px] h-[600px] bg-[#00c96b]/[0.04] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-full max-w-[550px] h-[550px] bg-[#f59e0b]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* Futuristic Grid Lines Overlay */}
      <div className="absolute inset-0 bg-oscorp-grid opacity-60 pointer-events-none" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
