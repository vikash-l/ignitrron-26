import React, { useEffect, useRef, useState } from 'react';

interface RacingDrone {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  rotorSpeed: number;
  rotorPhase: number;
  trail: { x: number; y: number; alpha: number }[];
  type: 'racer' | 'redwing';
  angle: number;
  speed: number;
  bankAngle: number;
}

interface RacingGate {
  x: number;
  y: number;
  radius: number;
  angle: number;
  rotSpeed: number;
  pulseAlpha: number;
  label: string;
  active: boolean;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

interface SonicPulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
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
    const mouse = {
      x: width * 0.5,
      y: height * 0.35,
      prevX: width * 0.5,
      prevY: height * 0.35,
      vx: 0,
      vy: 0,
      active: false,
      lastMoveTime: Date.now(),
    };

    // Smooth trailing HUD cursor position
    const hudPos = { x: width * 0.5, y: height * 0.35 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGates();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.vx = (e.clientX - mouse.x) * 0.35;
      mouse.vy = (e.clientY - mouse.y) * 0.35;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouse.lastMoveTime = Date.now();

      // Spawn aerodynamic thrust / vortex sparks on fast movement
      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
      if (speed > 6) {
        for (let i = 0; i < Math.min(2, Math.floor(speed / 5)); i++) {
          sparks.push({
            x: mouse.x + (Math.random() - 0.5) * 10,
            y: mouse.y + (Math.random() - 0.5) * 10,
            vx: -mouse.vx * 0.15 + (Math.random() - 0.5) * 1.5,
            vy: -mouse.vy * 0.15 + (Math.random() - 0.5) * 1.5,
            size: Math.random() * 1.5 + 0.8,
            alpha: 0.6,
            color: Math.random() > 0.4 ? '#f2d58a' : '#e8a63a',
            life: 0,
            maxLife: 20 + Math.random() * 15,
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      // Create tactical Sonic Boom / Propulsion Pulse (dimmed)
      pulses.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.4,
        alpha: 0.5,
        color: '#f2d58a',
      });

      // Scatter sparks
      for (let i = 0; i < 14; i++) {
        const ang = Math.random() * Math.PI * 2;
        const spd = Math.random() * 4.5 + 1.5;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: Math.random() * 1.8 + 0.8,
          alpha: 0.65,
          color: Math.random() > 0.5 ? '#f2d58a' : '#d6a84f',
          life: 0,
          maxLife: 25 + Math.random() * 20,
        });
      }

      // Trigger all gates in proximity
      gates.forEach(g => {
        const dx = g.x - e.clientX;
        const dy = g.y - e.clientY;
        if (Math.sqrt(dx * dx + dy * dy) < 280) {
          g.pulseAlpha = 0.55;
          g.active = true;
        }
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // 1. Initialize Racing Drones
    const drones: RacingDrone[] = [
      {
        x: width * 0.2,
        y: height * 0.3,
        vx: 2.0,
        vy: 1.2,
        targetX: width * 0.7,
        targetY: height * 0.4,
        size: 14,
        color: '#f2d58a',
        rotorSpeed: 0.35,
        rotorPhase: 0,
        trail: [],
        type: 'redwing',
        angle: 0.3,
        speed: 2.8,
        bankAngle: 0.08,
      },
      {
        x: width * 0.85,
        y: height * 0.65,
        vx: -2.4,
        vy: -1.0,
        targetX: width * 0.3,
        targetY: height * 0.7,
        size: 11,
        color: '#e8a63a',
        rotorSpeed: 0.4,
        rotorPhase: 0.5,
        trail: [],
        type: 'racer',
        angle: -2.2,
        speed: 3.2,
        bankAngle: -0.15,
      },
      {
        x: width * 0.4,
        y: height * 0.8,
        vx: 2.2,
        vy: -1.8,
        targetX: width * 0.6,
        targetY: height * 0.2,
        size: 12,
        color: '#d6a84f',
        rotorSpeed: 0.45,
        rotorPhase: 1.2,
        trail: [],
        type: 'racer',
        angle: -0.9,
        speed: 3.0,
        bankAngle: 0.12,
      },
      {
        x: width * 0.1,
        y: height * 0.55,
        vx: 1.6,
        vy: 0.7,
        targetX: width * 0.8,
        targetY: height * 0.5,
        size: 16,
        color: '#f2d58a',
        rotorSpeed: 0.3,
        rotorPhase: 0.8,
        trail: [],
        type: 'redwing',
        angle: 0.4,
        speed: 2.5,
        bankAngle: 0.05,
      },
    ];

    // 2. Initialize Drone Racing Obstacle Gates
    let gates: RacingGate[] = [];
    const initGates = () => {
      gates = [
        { x: width * 0.22, y: height * 0.28, radius: 44, angle: 0, rotSpeed: 0.004, pulseAlpha: 0.18, label: 'GATE 01', active: false },
        { x: width * 0.78, y: height * 0.35, radius: 50, angle: Math.PI / 3, rotSpeed: -0.0035, pulseAlpha: 0.22, label: 'GATE 02', active: false },
        { x: width * 0.65, y: height * 0.75, radius: 46, angle: Math.PI / 6, rotSpeed: 0.005, pulseAlpha: 0.2, label: 'GATE 03', active: false },
        { x: width * 0.28, y: height * 0.78, radius: 42, angle: Math.PI / 4, rotSpeed: -0.004, pulseAlpha: 0.18, label: 'FINISH GATE', active: false },
      ];
    };
    initGates();

    // 3. Sparks & Pulses lists
    const sparks: SparkParticle[] = [];
    const pulses: SonicPulse[] = [];

    // Ambient floating light fields (subtly dimmed)
    const lightOrbs = [
      { x: width * 0.78, y: height * 0.22, vx: 0.06, vy: -0.04, r: 420, color: 'rgba(232, 166, 58, 0.06)' },
      { x: width * 0.18, y: height * 0.48, vx: -0.05, vy: 0.05, r: 440, color: 'rgba(214, 168, 79, 0.05)' },
      { x: width * 0.72, y: height * 0.78, vx: 0.05, vy: 0.04, r: 400, color: 'rgba(140, 106, 45, 0.05)' },
    ];

    let frameCount = 0;

    // Main 60 FPS Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frameCount++;

      ctx.clearRect(0, 0, width, height);

      // Trailing HUD Position towards mouse
      hudPos.x += (mouse.x - hudPos.x) * 0.08;
      hudPos.y += (mouse.y - hudPos.y) * 0.08;

      // 1. Broad Ambient Light Orbs
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

      // 2. Interactive Drone Racing Gates (Dimmed & Non-intrusive)
      gates.forEach((gate, gIdx) => {
        gate.angle += gate.rotSpeed;
        if (gate.pulseAlpha > 0.15) {
          gate.pulseAlpha -= 0.005;
        }

        // Distance to cursor
        const dxMouse = mouse.x - gate.x;
        const dyMouse = mouse.y - gate.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < gate.radius + 60 && mouse.active) {
          gate.pulseAlpha = Math.min(0.5, gate.pulseAlpha + 0.03);
          gate.active = true;
        }

        // Outer Hexagonal Racing Gate Frame
        ctx.save();
        ctx.translate(gate.x, gate.y);
        ctx.rotate(gate.angle);

        // Hexagon Path
        ctx.beginPath();
        const sides = 6;
        for (let i = 0; i < sides; i++) {
          const a = (i * 2 * Math.PI) / sides;
          const x = Math.cos(a) * gate.radius;
          const y = Math.sin(a) * gate.radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // Dimmed Gate Border Style
        ctx.strokeStyle = `rgba(214, 168, 79, ${gate.pulseAlpha * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Gate Corner Tick Markers
        for (let i = 0; i < sides; i++) {
          const a = (i * 2 * Math.PI) / sides;
          const x1 = Math.cos(a) * (gate.radius - 5);
          const y1 = Math.sin(a) * (gate.radius - 5);
          const x2 = Math.cos(a) * (gate.radius + 5);
          const y2 = Math.sin(a) * (gate.radius + 5);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(232, 166, 58, ${gate.pulseAlpha * 0.8})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Inner Pulsing Telemetry Ring
        ctx.beginPath();
        ctx.arc(0, 0, gate.radius * 0.7, 0, Math.PI * 2);
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = `rgba(214, 168, 79, ${gate.pulseAlpha * 0.35})`;
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.restore();

        // Gate Label & HUD Tag
        ctx.font = '8px "Share Tech Mono", monospace';
        ctx.fillStyle = `rgba(214, 168, 79, ${Math.max(0.2, gate.pulseAlpha * 0.8)})`;
        ctx.textAlign = 'center';
        ctx.fillText(gate.label, gate.x, gate.y + gate.radius + 16);

        // Next Gate Flight Trajectory Connector
        const nextGate = gates[(gIdx + 1) % gates.length];
        ctx.beginPath();
        ctx.moveTo(gate.x, gate.y);
        ctx.quadraticCurveTo(
          (gate.x + nextGate.x) * 0.5 + (gIdx % 2 === 0 ? 50 : -50),
          (gate.y + nextGate.y) * 0.5 + (gIdx % 2 === 0 ? -30 : 30),
          nextGate.x,
          nextGate.y
        );
        ctx.strokeStyle = 'rgba(214, 168, 79, 0.06)';
        ctx.setLineDash([2, 6]);
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 3. Update and Draw Racing Drones & Marvel Redwing Units
      drones.forEach((drone, dIdx) => {
        if (!reducedMotion) {
          const currentTarget = gates[dIdx % gates.length];
          let targetX = currentTarget.x;
          let targetY = currentTarget.y;

          const dxMouse = mouse.x - drone.x;
          const dyMouse = mouse.y - drone.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (mouse.active && distMouse < 240) {
            if (drone.type === 'redwing') {
              targetX = mouse.x + Math.sin(frameCount * 0.04 + dIdx) * 110;
              targetY = mouse.y + Math.cos(frameCount * 0.04 + dIdx) * 70;
            } else {
              targetX = mouse.x + (dxMouse > 0 ? -160 : 160);
              targetY = mouse.y + (dyMouse > 0 ? -120 : 120);
            }
          } else {
            targetX = currentTarget.x + Math.sin(frameCount * 0.02 + dIdx) * 35;
            targetY = currentTarget.y + Math.cos(frameCount * 0.02 + dIdx) * 25;
          }

          const dx = targetX - drone.x;
          const dy = targetY - drone.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const desiredVx = (dx / (dist || 1)) * drone.speed;
          const desiredVy = (dy / (dist || 1)) * drone.speed;

          drone.vx += (desiredVx - drone.vx) * 0.035;
          drone.vy += (desiredVy - drone.vy) * 0.035;

          drone.x += drone.vx;
          drone.y += drone.vy;

          const newAngle = Math.atan2(drone.vy, drone.vx);
          drone.angle = newAngle;
          drone.bankAngle = Math.max(-0.35, Math.min(0.35, (drone.vx * drone.vy) * 0.04));

          if (dist < 40) {
            gates[dIdx % gates.length].pulseAlpha = 0.5;
            for (let i = 0; i < 4; i++) {
              sparks.push({
                x: drone.x,
                y: drone.y,
                vx: -drone.vx * 0.4 + (Math.random() - 0.5) * 2,
                vy: -drone.vy * 0.4 + (Math.random() - 0.5) * 2,
                size: Math.random() * 1.5 + 0.8,
                alpha: 0.6,
                color: drone.color,
                life: 0,
                maxLife: 18 + Math.random() * 12,
              });
            }
          }

          drone.trail.push({ x: drone.x, y: drone.y, alpha: 0.4 });
          if (drone.trail.length > 18) drone.trail.shift();
        }

        // Draw Drone Light Trail (dimmed)
        if (drone.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(drone.trail[0].x, drone.trail[0].y);
          for (let i = 1; i < drone.trail.length; i++) {
            const p = drone.trail[i];
            ctx.lineTo(p.x, p.y);
          }
          const trailGrad = ctx.createLinearGradient(
            drone.trail[0].x,
            drone.trail[0].y,
            drone.x,
            drone.y
          );
          trailGrad.addColorStop(0, 'transparent');
          trailGrad.addColorStop(1, drone.type === 'redwing' ? 'rgba(242, 213, 138, 0.25)' : 'rgba(232, 166, 58, 0.22)');

          ctx.strokeStyle = trailGrad;
          ctx.lineWidth = drone.type === 'redwing' ? 1.4 : 1.1;
          ctx.stroke();
        }

        // Draw Drone Body
        ctx.save();
        ctx.translate(drone.x, drone.y);
        ctx.rotate(drone.angle);

        if (drone.type === 'redwing') {
          // Dimmed Marvel Falcon Redwing Drone
          ctx.beginPath();
          ctx.moveTo(drone.size, 0);
          ctx.lineTo(-drone.size * 0.7, -drone.size * 0.85);
          ctx.lineTo(-drone.size * 0.3, 0);
          ctx.lineTo(-drone.size * 0.7, drone.size * 0.85);
          ctx.closePath();

          ctx.fillStyle = 'rgba(14, 21, 24, 0.8)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(214, 168, 79, 0.55)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Feather struts
          ctx.beginPath();
          ctx.moveTo(0, -drone.size * 0.45);
          ctx.lineTo(-drone.size * 0.5, -drone.size * 0.7);
          ctx.moveTo(0, drone.size * 0.45);
          ctx.lineTo(-drone.size * 0.5, drone.size * 0.7);
          ctx.strokeStyle = 'rgba(214, 168, 79, 0.4)';
          ctx.stroke();

          // Core pip
          ctx.beginPath();
          ctx.arc(drone.size * 0.2, 0, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = '#f2d58a';
          ctx.fill();
        } else {
          // Dimmed Quadcopter Racer
          const s = drone.size * 0.55;
          ctx.strokeStyle = 'rgba(214, 168, 79, 0.45)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-s, -s);
          ctx.lineTo(s, s);
          ctx.moveTo(s, -s);
          ctx.lineTo(-s, s);
          ctx.stroke();

          // Central Pod
          ctx.fillStyle = '#0b1012';
          ctx.fillRect(-2.5, -2.5, 5, 5);
          ctx.strokeStyle = 'rgba(214, 168, 79, 0.6)';
          ctx.strokeRect(-2.5, -2.5, 5, 5);

          // Rotor Disks
          drone.rotorPhase += drone.rotorSpeed;
          const rotorRadius = 3.8;
          const corners = [
            { x: -s, y: -s },
            { x: s, y: -s },
            { x: -s, y: s },
            { x: s, y: s },
          ];

          corners.forEach((c) => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, rotorRadius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(242, 213, 138, 0.3)';
            ctx.lineWidth = 0.6;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(
              c.x + Math.cos(drone.rotorPhase) * rotorRadius,
              c.y + Math.sin(drone.rotorPhase) * rotorRadius
            );
            ctx.lineTo(
              c.x - Math.cos(drone.rotorPhase) * rotorRadius,
              c.y - Math.sin(drone.rotorPhase) * rotorRadius
            );
            ctx.strokeStyle = 'rgba(242, 213, 138, 0.5)';
            ctx.stroke();
          });
        }

        ctx.restore();
      });

      // 4. Interactive Sparks (dimmed)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.96;
        sp.vy *= 0.96;
        sp.life++;
        sp.alpha = Math.max(0, 0.6 - (sp.life / sp.maxLife) * 0.6);

        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.alpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();

        if (sp.life >= sp.maxLife) {
          sparks.splice(i, 1);
        }
      }
      ctx.globalAlpha = 1;

      // 5. Sonic Pulses (dimmed)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.radius += 6;
        pulse.alpha = Math.max(0, 0.45 - (pulse.radius / pulse.maxRadius) * 0.45);

        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(242, 213, 138, ${pulse.alpha * 0.5})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (pulse.radius >= pulse.maxRadius) {
          pulses.splice(i, 1);
        }
      }

      // 6. Interactive Falcon Tactical Telemetry HUD (Subtle and non-distracting)
      if (mouse.active) {
        ctx.save();
        ctx.translate(hudPos.x, hudPos.y);

        // Reticle Ring
        ctx.beginPath();
        ctx.arc(0, 0, 32, 0, Math.PI * 2);
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = 'rgba(214, 168, 79, 0.22)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.setLineDash([]);

        // Crosshairs
        ctx.strokeStyle = 'rgba(242, 213, 138, 0.35)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -36);
        ctx.lineTo(0, -24);
        ctx.moveTo(0, 24);
        ctx.lineTo(0, 36);
        ctx.moveTo(-36, 0);
        ctx.lineTo(-24, 0);
        ctx.moveTo(24, 0);
        ctx.lineTo(36, 0);
        ctx.stroke();

        // Center Pip
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(242, 213, 138, 0.6)';
        ctx.fill();

        // Telemetry Data Readout
        ctx.font = '8px "Share Tech Mono", monospace';
        ctx.fillStyle = 'rgba(242, 213, 138, 0.55)';
        ctx.textAlign = 'left';
        ctx.fillText('TARGET LOCK: ACTIVE', 40, -8);
        ctx.fillStyle = 'rgba(135, 146, 150, 0.45)';
        ctx.fillText(`X:${Math.round(mouse.x)} Y:${Math.round(mouse.y)}`, 40, 2);
        ctx.fillText('SPD: 164 KM/H  ALT: 45M', 40, 12);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Near-Black Base Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(140% 110% at 50% 0%, #090e10 0%, #070a0c 45%, #050607 85%, #030405 100%)',
        }}
      />

      {/* 2. Soft Dimmed Amber/Gold Atmospheric Emitter */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[550px] rounded-full opacity-10 blur-[180px]"
        style={{
          background: 'radial-gradient(ellipse, #e8a63a 0%, #d6a84f 40%, #8c6a2d 70%, transparent 85%)',
        }}
      />

      {/* 3. High-Performance Canvas with Dimmed Opacity */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65"
      />

      {/* 4. Marvel Falcon Tactical Wing Silhouette (Subtly Dimmed to 8% Opacity) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large Articulated Falcon Wingspan Silhouette */}
        <g stroke="rgba(214, 168, 79, 0.45)" strokeWidth="0.8">
          <path d="M 720 200 C 500 120, 240 80, 40 280 C 260 320, 480 340, 720 200 Z" />
          <path d="M 680 230 C 480 180, 260 160, 90 320" strokeDasharray="4 6" />
          <path d="M 640 260 C 460 240, 300 230, 160 360" strokeDasharray="2 4" />

          <path d="M 720 200 C 940 120, 1200 80, 1400 280 C 1180 320, 960 340, 720 200 Z" />
          <path d="M 760 230 C 960 180, 1180 160, 1350 320" strokeDasharray="4 6" />
          <path d="M 800 260 C 980 240, 1140 230, 1280 360" strokeDasharray="2 4" />
        </g>

        {/* Global Radar Sweep Circles */}
        <circle cx="720" cy="450" r="320" stroke="rgba(214, 168, 79, 0.18)" strokeWidth="0.75" strokeDasharray="3 6" className="animate-radar-slow origin-center" />
        <circle cx="720" cy="450" r="540" stroke="rgba(101, 117, 122, 0.14)" strokeWidth="0.5" />
        <circle cx="720" cy="450" r="160" stroke="rgba(232, 166, 58, 0.22)" strokeWidth="0.8" strokeDasharray="6 8" className="animate-radar-reverse origin-center" />
        
        {/* Tactical Crosshairs */}
        <line x1="720" y1="40" x2="720" y2="860" stroke="rgba(214, 168, 79, 0.08)" strokeWidth="0.5" strokeDasharray="2 4" />
        <line x1="100" y1="450" x2="1340" y2="450" stroke="rgba(214, 168, 79, 0.08)" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>

      {/* 5. Subdued Hairline Grid Overlay */}
      <div 
        className="absolute inset-0 bg-subtle-grid opacity-15"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 60% at 50% 35%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 35%, black 20%, transparent 80%)',
        }}
      />

      {/* 6. Cinematic Vignette Shadow for High Foreground Legibility */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 95% at 50% 50%, transparent 35%, rgba(5, 6, 7, 0.94) 100%)',
        }}
      />
    </div>
  );
};
