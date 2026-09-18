import React, { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle setup
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const particles = [];

    const colors = ['rgba(53, 217, 139, 0.4)', 'rgba(22, 163, 106, 0.3)', 'rgba(200, 169, 81, 0.25)'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Floating Timeline Coordinates
    const coordinates = [
      'EARTH-616 // SACRED',
      'VAR_INDEX: 0.0942',
      'REALITY_STABILITY: 98.4%',
      'TVA_BRANCH: #8492',
      'TIME_SLIP_ZONE: ACTIVE',
      'CHRONO_FREQ: 432.1Hz',
    ];
    const textNodes = Array.from({ length: 6 }, (_, i) => ({
      text: coordinates[i],
      x: Math.random() * (canvas.width - 200) + 50,
      y: Math.random() * (canvas.height - 100) + 50,
      speed: Math.random() * 0.15 + 0.05,
      alpha: Math.random() * 0.15 + 0.05,
    }));

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      // Subtle atmospheric fog gradient
      const fogGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.4, 10,
        canvas.width / 2, canvas.height * 0.4, canvas.width * 0.75
      );
      fogGradient.addColorStop(0, 'rgba(22, 163, 106, 0.07)');
      fogGradient.addColorStop(0.5, 'rgba(10, 16, 13, 0.03)');
      fogGradient.addColorStop(1, 'rgba(5, 7, 6, 0)');
      ctx.fillStyle = fogGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Floating Text Coordinates
      ctx.font = '10px Orbitron, monospace';
      textNodes.forEach((node) => {
        node.y -= node.speed;
        if (node.y < -20) {
          node.y = canvas.height + 20;
          node.x = Math.random() * (canvas.width - 200) + 50;
        }
        ctx.fillStyle = `rgba(53, 217, 139, ${node.alpha})`;
        ctx.fillText(node.text, node.x, node.y);
      });

      // Render Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(tick * p.pulseSpeed) * 0.01;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(53, 217, 139, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Subtle Timeline Laser Scan Beam
      const scanY = (tick * 1.5) % (canvas.height + 200) - 100;
      const scanGradient = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGradient.addColorStop(0, 'rgba(53, 217, 139, 0)');
      scanGradient.addColorStop(0.5, 'rgba(53, 217, 139, 0.03)');
      scanGradient.addColorStop(1, 'rgba(53, 217, 139, 0)');
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 20, canvas.width, 40);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
