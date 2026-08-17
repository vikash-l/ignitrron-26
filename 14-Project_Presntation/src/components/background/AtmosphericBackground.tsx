import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
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
    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
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

    // Floating Nodes Initialization
    let nodes: Node[] = [];
    const colors = ['#2563eb', '#38bdf8', '#06b6d4', '#60a5fa'];

    const initNodes = () => {
      const count = Math.floor(Math.min(width, height) > 768 ? 48 : 22);
      nodes = [];

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    // Floating Ambient Light Field Orbs
    const lightOrbs = [
      { x: width * 0.8, y: height * 0.2, vx: 0.15, vy: -0.1, r: 380, color: 'rgba(37, 99, 235, 0.18)' },
      { x: width * 0.15, y: height * 0.45, vx: -0.1, vy: 0.12, r: 420, color: 'rgba(6, 182, 212, 0.14)' },
      { x: width * 0.75, y: height * 0.75, vx: 0.12, vy: 0.08, r: 400, color: 'rgba(29, 78, 216, 0.16)' },
      { x: width * 0.3, y: height * 0.9, vx: -0.14, vy: -0.08, r: 350, color: 'rgba(56, 189, 248, 0.15)' },
    ];

    let time = 0;

    // Main 60 FPS Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Broad Ambient Light Orbs (Smooth Floating Light Fields)
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

      // 2. Draw Vector Connections & Moving Energy Nodes
      const connectionDist = width < 768 ? 100 : 140;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (!reducedMotion) {
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          // Bounce off canvas boundaries
          if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
          if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

          // Interactive Cursor Interaction
          const dxMouse = mouse.x - nodeA.x;
          const dyMouse = mouse.y - nodeA.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius;
            nodeA.x -= (dxMouse / distMouse) * force * 1.5;
            nodeA.y -= (dyMouse / distMouse) * force * 1.5;
          }
        }

        // Draw Node
        nodeA.pulsePhase += nodeA.pulseSpeed;
        const currentAlpha = nodeA.baseAlpha + Math.sin(nodeA.pulsePhase) * 0.15;

        ctx.fillStyle = nodeA.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect Nearby Nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.25;
            ctx.strokeStyle = nodeA.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
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
      {/* Deep Atmospheric Base Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(140% 110% at 50% 0%, #040918 0%, #02050b 60%, #010307 100%)',
        }}
      />

      {/* 60 FPS HTML5 Canvas with Moving Particles & Floating Energy Vector Grid */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subdued Hairline Grid Overlay */}
      <div 
        className="absolute inset-0 bg-subtle-grid opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 35%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 35%, black 20%, transparent 80%)',
        }}
      />

      {/* Cinematic Edge Vignette Shadow (Corners fall into near-black) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 40%, rgba(1, 3, 7, 0.88) 100%)',
        }}
      />
    </div>
  );
};
