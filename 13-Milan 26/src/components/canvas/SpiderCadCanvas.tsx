import React, { useEffect, useRef } from 'react';

export const SpiderCadCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Particle nodes for Spider-Verse web / CAD wireframe lattice
    const particleCount = 45;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      glitchTimer: number;
    }[] = [];

    const colors = ['#ff0055', '#00f0ff', '#9d4edd', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        glitchTimer: Math.random() * 100,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle CAD Coordinate Blueprint Grid
      const gridSize = 60;
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
      ctx.lineWidth = 1;

      const offsetX = (mouseX * 0.02) % gridSize;
      const offsetY = (mouseY * 0.02) % gridSize;

      for (let x = offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Rotating Isometric Gears in Background
      const gearX1 = width * 0.85;
      const gearY1 = height * 0.3;
      const gearX2 = width * 0.12;
      const gearY2 = height * 0.75;

      const drawGear = (
        gx: number,
        gy: number,
        radius: number,
        teeth: number,
        angle: number,
        color: string
      ) => {
        ctx.save();
        ctx.translate(gx, gy);
        ctx.rotate(angle);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();

        const toothDepth = radius * 0.15;
        const step = (Math.PI * 2) / teeth;

        for (let i = 0; i < teeth; i++) {
          const a = i * step;
          const a1 = a + step * 0.25;
          const a2 = a + step * 0.5;
          const a3 = a + step * 0.75;

          const rOuter = radius + toothDepth;
          const rInner = radius;

          const x1 = Math.cos(a) * rInner;
          const y1 = Math.sin(a) * rInner;
          const x2 = Math.cos(a1) * rOuter;
          const y2 = Math.sin(a1) * rOuter;
          const x3 = Math.cos(a2) * rOuter;
          const y3 = Math.sin(a2) * rOuter;
          const x4 = Math.cos(a3) * rInner;
          const y4 = Math.sin(a3) * rInner;

          if (i === 0) ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.lineTo(x4, y4);
        }
        ctx.closePath();
        ctx.stroke();

        // Inner Circle & Spokes
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.4, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.15, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        for (let s = 0; s < 4; s++) {
          const spokeAngle = (s * Math.PI) / 2;
          ctx.beginPath();
          ctx.moveTo(Math.cos(spokeAngle) * radius * 0.15, Math.sin(spokeAngle) * radius * 0.15);
          ctx.lineTo(Math.cos(spokeAngle) * radius * 0.4, Math.sin(spokeAngle) * radius * 0.4);
          ctx.stroke();
        }

        ctx.restore();
      };

      // Draw mechanical gears
      drawGear(gearX1, gearY1, 140, 16, time * 0.3, 'rgba(255, 0, 85, 0.12)');
      drawGear(gearX1 + 180, gearY1 + 100, 90, 12, -time * 0.45, 'rgba(0, 240, 255, 0.12)');
      drawGear(gearX2, gearY2, 160, 18, -time * 0.25, 'rgba(157, 78, 221, 0.12)');

      // 3. Connect Particles with Spider-Verse Geometric Lines & Glitch Arcs
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        p1.glitchTimer += 1;
        let drawX = p1.x;
        let drawY = p1.y;

        // Subtle comic glitch jump
        if (p1.glitchTimer % 180 < 6) {
          drawX += (Math.random() - 0.5) * 8;
          drawY += (Math.random() - 0.5) * 8;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(drawX, drawY, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        // Connect nearby particles with blueprint lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 1 - dist / 130;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close (Spider-Sense interaction)
        const dmx = p1.x - mouseX;
        const dmy = p1.y - mouseY;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);

        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(mouseX, mouseY);
          const alpha = 1 - distMouse / 180;
          ctx.strokeStyle = `rgba(255, 0, 85, ${alpha * 0.35})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
