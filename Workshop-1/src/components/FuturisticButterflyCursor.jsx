import React, { useEffect, useRef, useState } from 'react';

export const FuturisticButterflyCursor = () => {
  const [visible, setVisible] = useState(false);
  const butterflyRef = useRef(null);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;
    let lastTime = performance.now();
    let animId;
    let angle = 0;
    let speed = 0;
    let hoverTime = 0;

    // Initialize global position
    window.__butterflyPosition = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      vx: 0,
      vy: 0,
      speed: 0,
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      const dt = Math.max((now - lastTime) / 1000, 0.001);
      lastTime = now;

      const currentX = e.clientX;
      const currentY = e.clientY;

      const vx = (currentX - lastX) / dt;
      const vy = (currentY - lastY) / dt;
      speed = Math.hypot(vx, vy);

      if (Math.hypot(currentX - lastX, currentY - lastY) > 2) {
        const targetAngle = Math.atan2(vy, vx) * (180 / Math.PI);
        angle = targetAngle;
      }

      lastX = currentX;
      lastY = currentY;

      // Update global butterfly position instantly (0 latency)
      window.__butterflyPosition = {
        x: currentX,
        y: currentY,
        vx,
        vy,
        speed,
      };

      if (!visible) setVisible(true);

      // Direct instant transform on cursor element (centered at 14px offset for ~28px cursor)
      if (butterflyRef.current) {
        butterflyRef.current.style.transform = `translate3d(${currentX - 14}px, ${currentY - 14}px, 0) rotate(${angle + 90}deg)`;
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Continuous particle trail & hover flutter loop
    const particles = [];
    const trailLoop = (now) => {
      hoverTime += 0.05;

      // Micro hover flutter when cursor is stationary
      if (speed < 15 && butterflyRef.current && lastX > 0) {
        const hoverX = Math.cos(hoverTime * 3) * 1.8;
        const hoverY = Math.sin(hoverTime * 4.5) * 2.2;
        butterflyRef.current.style.transform = `translate3d(${lastX - 14 + hoverX}px, ${lastY - 14 + hoverY}px, 0) rotate(${angle + 90}deg)`;
      }

      // Decay speed
      speed *= 0.92;
      if (window.__butterflyPosition) {
        window.__butterflyPosition.speed = speed;
      }

      // Spawn trail particles
      if (visible && lastX > 0 && Math.random() < (speed > 50 ? 0.6 : 0.25)) {
        particles.push({
          x: lastX + (Math.random() - 0.5) * 8,
          y: lastY + (Math.random() - 0.5) * 8,
          size: Math.random() * 2.2 + 1.0,
          life: 1,
          decay: Math.random() * 2.2 + 1.2,
          color: Math.random() > 0.4 ? '#c084fc' : '#38bdf8',
        });
      }

      // Draw particles
      if (particlesContainerRef.current) {
        const svg = particlesContainerRef.current;
        while (svg.firstChild) {
          svg.removeChild(svg.firstChild);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.life -= p.decay * 0.016;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', p.x);
          circle.setAttribute('cy', p.y);
          circle.setAttribute('r', p.size);
          circle.setAttribute('fill', p.color);
          circle.setAttribute('opacity', p.life * 0.85);
          svg.appendChild(circle);
        }
      }

      animId = requestAnimationFrame(trailLoop);
    };

    animId = requestAnimationFrame(trailLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      
      {/* 1. Butterfly Trail Particles */}
      <svg ref={particlesContainerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 2. Scaled-Up Sci-Fi Holographic Butterfly (~28px Size) */}
      <div
        ref={butterflyRef}
        className={`absolute top-0 left-0 will-change-transform ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          transformOrigin: 'center center',
          transition: 'opacity 0.15s ease',
        }}
      >
        {/* Soft Purple Glow Bloom */}
        <div className="absolute inset-0 -m-2 rounded-full bg-purple-500/35 blur-[4px] animate-pulse" />

        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(168,85,247,0.95)]"
        >
          {/* Left Wings */}
          <g
            style={{
              animation: 'butterflyWingFlap 0.15s ease-in-out infinite alternate',
              transformOrigin: '16px 16px',
            }}
          >
            <path
              d="M16 14 C12 6, 4 4, 3 10 C2 15, 10 18, 16 16 Z"
              fill="url(#wingGradPurple4)"
              stroke="#e9d5ff"
              strokeWidth="0.9"
              opacity="0.95"
            />
            <path
              d="M16 17 C11 20, 6 24, 7 28 C9 30, 14 24, 16 19 Z"
              fill="url(#wingGradCyan4)"
              stroke="#38bdf8"
              strokeWidth="0.7"
              opacity="0.85"
            />
          </g>

          {/* Right Wings */}
          <g
            style={{
              animation: 'butterflyWingFlapRight 0.15s ease-in-out infinite alternate',
              transformOrigin: '16px 16px',
            }}
          >
            <path
              d="M16 14 C20 6, 28 4, 29 10 C30 15, 22 18, 16 16 Z"
              fill="url(#wingGradPurple4)"
              stroke="#e9d5ff"
              strokeWidth="0.9"
              opacity="0.95"
            />
            <path
              d="M16 17 C21 20, 26 24, 25 28 C23 30, 18 24, 16 19 Z"
              fill="url(#wingGradCyan4)"
              stroke="#38bdf8"
              strokeWidth="0.7"
              opacity="0.85"
            />
          </g>

          {/* Glowing Thorax & Head */}
          <ellipse cx="16" cy="16" rx="1.6" ry="5.2" fill="#f8fafc" />
          <circle cx="16" cy="11" r="1.8" fill="#38bdf8" />
          <path d="M15 10 Q12 6 10 5" stroke="#c084fc" strokeWidth="0.7" />
          <path d="M17 10 Q20 6 22 5" stroke="#c084fc" strokeWidth="0.7" />
          <circle cx="10" cy="5" r="0.6" fill="#e9d5ff" />
          <circle cx="22" cy="5" r="0.6" fill="#e9d5ff" />

          {/* Gradients */}
          <defs>
            <linearGradient id="wingGradPurple4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="wingGradCyan4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
};
