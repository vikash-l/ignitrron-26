import React, { useEffect, useRef } from 'react';

export const GrootCursorFollower = () => {
  const containerRef = useRef(null);
  const grootElementRef = useRef(null);
  const shadowElementRef = useRef(null);
  const characterBodyRef = useRef(null);
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    // Persistent physics variables across the entire lifecycle
    let posX = window.innerWidth > 1024 ? window.innerWidth * 0.65 : window.innerWidth * 0.5;
    let posY = window.innerHeight * 0.5;
    let velX = 0;
    let velY = 0;
    let facing = 1;
    let targetFacing = 1;
    let stridePhase = 0;
    let turnDelay = 0;
    const particles = [];

    const updatePhysics = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const container = containerRef.current;
      const containerWidth = container ? container.offsetWidth : window.innerWidth;
      const containerHeight = container ? container.offsetHeight : window.innerHeight;

      // Read real-time butterfly position (Mouse -> Butterfly -> Groot)
      const butterfly = window.__butterflyPosition || {
        x: containerWidth * 0.5,
        y: containerHeight * 0.5,
        vx: 0,
        vy: 0,
        speed: 0,
      };

      // Full Omnidirectional Target (Top to Bottom, Left to Right everywhere on screen!)
      const targetX = Math.max(30, Math.min(containerWidth - 60, butterfly.x));
      const targetY = Math.max(40, Math.min(containerHeight - 80, butterfly.y));

      const dx = targetX - posX;
      const dy = targetY - posY;
      const dist = Math.hypot(dx, dy);

      // Playful stopping radius (~50px from the butterfly in 2D space)
      const stopDistance = 55;
      let targetVelX = 0;
      let targetVelY = 0;

      if (dist > stopDistance) {
        // High 2D chase speed in all directions (X & Y)
        const chaseSpeed = dist > 260 ? 340 : dist > 130 ? 240 : 140;
        const angle = Math.atan2(dy, dx);
        targetVelX = Math.cos(angle) * chaseSpeed;
        targetVelY = Math.sin(angle) * chaseSpeed; // Full vertical speed

        if (Math.abs(dx) > 10) {
          targetFacing = dx > 0 ? 1 : -1;
        }
      }

      // Smooth turning with inertia
      if (targetFacing !== facing) {
        turnDelay += dt;
        velX *= 0.85;
        if (turnDelay > 0.08) {
          facing = targetFacing;
          turnDelay = 0;
        }
      } else {
        turnDelay = 0;
      }

      // Omnidirectional acceleration & momentum
      const accel = dist > 200 ? 7.5 : 5.5;
      velX += (targetVelX - velX) * Math.min(dt * accel, 1);
      velY += (targetVelY - velY) * Math.min(dt * accel, 1);

      posX += velX * dt;
      posY += velY * dt;

      // Keep within visible bounds
      posX = Math.max(20, Math.min(containerWidth - 60, posX));
      posY = Math.max(20, Math.min(containerHeight - 90, posY));

      const currentSpeed = Math.hypot(velX, velY);

      // Stride cadence strictly proportional to 2D velocity (prevents foot sliding)
      if (currentSpeed > 10) {
        stridePhase += dt * (currentSpeed * 0.08);
      } else {
        stridePhase += dt * 2.0;
      }

      const bounce = currentSpeed > 10 ? Math.abs(Math.sin(stridePhase)) * 5 : Math.sin(stridePhase * 0.8) * 0.8;
      const forwardTilt = Math.max(-14, Math.min(14, velX * 0.045));

      // Emit footstep dust sparks in reverse direction of 2D velocity
      if (currentSpeed > 40 && Math.random() < 0.35) {
        particles.push({
          x: posX + (Math.random() - 0.5) * 10,
          y: posY + 55 + (Math.random() - 0.5) * 6,
          vx: -velX * 0.15 + (Math.random() - 0.5) * 12,
          vy: -velY * 0.15 + (Math.random() - 0.5) * 12,
          size: Math.random() * 1.6 + 0.8,
          life: 1,
          decay: Math.random() * 1.8 + 1.0,
        });
      }

      // Update DOM elements directly for 60 FPS
      if (grootElementRef.current) {
        grootElementRef.current.style.transform = `translate3d(${posX}px, ${posY - bounce}px, 0)`;
      }

      if (characterBodyRef.current) {
        characterBodyRef.current.style.transform = `scaleX(${facing}) rotate(${forwardTilt}deg)`;
      }

      if (shadowElementRef.current) {
        shadowElementRef.current.style.top = `${92 + bounce}px`;
        shadowElementRef.current.style.transform = `translate(-50%, 0) scale(${1 - bounce * 0.04}, ${0.8 - bounce * 0.02})`;
      }

      // Update particles
      if (particlesContainerRef.current) {
        const svg = particlesContainerRef.current;
        while (svg.firstChild) {
          svg.removeChild(svg.firstChild);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= p.decay * dt;

          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', p.x);
          circle.setAttribute('cy', p.y);
          circle.setAttribute('r', p.size);
          circle.setAttribute('fill', 'rgba(192, 132, 252, 0.85)');
          circle.setAttribute('opacity', p.life * 0.8);
          circle.setAttribute('filter', 'drop-shadow(0 0 3px #a855f7)');
          svg.appendChild(circle);
        }
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Footstep Bioluminescent Dust Embers */}
      <svg ref={particlesContainerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 2. Scaled-Down Baby Groot (~130-150px Tall) Chasing the Butterfly Omnidirectionally */}
      <div
        ref={grootElementRef}
        className="absolute top-0 left-0 will-change-transform"
        style={{
          transform: 'translate3d(600px, 320px, 0)',
        }}
      >
        {/* Dynamic Ground Contact Shadow */}
        <div
          ref={shadowElementRef}
          className="absolute left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black/75 rounded-full blur-[2px]"
          style={{
            top: 92,
            transform: 'translate(-50%, 0)',
          }}
        />

        {/* Baby Groot Character Container with Orientation & Tilt */}
        <div
          ref={characterBodyRef}
          className="relative"
          style={{
            transform: 'scaleX(1) rotate(0deg)',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Ambient Purple Rim Glow */}
          <div className="absolute inset-0 -m-2 bg-purple-500/20 rounded-full blur-lg animate-pulse" />

          {/* Baby Groot in Red Ravager Suit (Scaled to ~130-150px height) */}
          <img
            src={`${import.meta.env.BASE_URL}baby-groot-suit.png`}
            alt="Baby Groot in Red Ravager Flight Suit chasing butterfly"
            className="w-14 sm:w-16 lg:w-20 h-auto object-contain drop-shadow-[0_8px_16px_rgba(168,85,247,0.35)] select-none"
            draggable="false"
          />
        </div>
      </div>

    </div>
  );
};
