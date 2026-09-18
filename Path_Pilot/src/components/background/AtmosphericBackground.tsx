import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

interface HudNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  color: string;
  size: number;
  pulsePhase: number;
  isRed?: boolean;
}

interface DataPacket {
  pathIndex: number;
  progress: number;
  speed: number;
  length: number;
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
    const mouse = { x: -1000, y: -1000, radius: 220 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
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

    // War Machine Industrial Palette
    let hudNodes: HudNode[] = [];
    let particles: Particle[] = [];
    let dataPackets: DataPacket[] = [];

    const steelPalette = ['#4A5056', '#777D83', '#3A4047', '#25292E'];
    const redPalette = ['#A30F18', '#D51F2A', '#65090F'];

    // Circuit Waypoint Track Paths (Static geometric traces)
    const getCircuitPaths = () => [
      // Top-left to Mid circuit track
      [
        { x: width * 0.04, y: height * 0.12 },
        { x: width * 0.18, y: height * 0.12 },
        { x: width * 0.24, y: height * 0.22 },
        { x: width * 0.24, y: height * 0.48 },
        { x: width * 0.15, y: height * 0.62 },
        { x: width * 0.15, y: height * 0.88 },
      ],
      // Top-right to Center-right circuit track
      [
        { x: width * 0.96, y: height * 0.18 },
        { x: width * 0.82, y: height * 0.18 },
        { x: width * 0.76, y: height * 0.28 },
        { x: width * 0.76, y: height * 0.58 },
        { x: width * 0.86, y: height * 0.72 },
        { x: width * 0.86, y: height * 0.92 },
      ],
      // Bottom crossover track
      [
        { x: width * 0.32, y: height * 0.85 },
        { x: width * 0.48, y: height * 0.85 },
        { x: width * 0.55, y: height * 0.94 },
        { x: width * 0.72, y: height * 0.94 },
      ],
    ];

    const initNetwork = () => {
      const isMobile = width < 768;
      const nodeCount = isMobile ? 22 : 45;
      const particleCount = isMobile ? 20 : 50;

      hudNodes = [];
      particles = [];
      dataPackets = [];

      // Create Tactical HUD Nodes & Armor Grid Intersections
      for (let i = 0; i < nodeCount; i++) {
        const isRed = Math.random() > 0.75; // ~25% red status nodes
        const color = isRed 
          ? redPalette[Math.floor(Math.random() * redPalette.length)]
          : steelPalette[Math.floor(Math.random() * steelPalette.length)];

        hudNodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          connections: [],
          color,
          size: isRed ? Math.random() * 2.2 + 1.2 : Math.random() * 1.6 + 0.8,
          pulsePhase: Math.random() * Math.PI * 2,
          isRed,
        });
      }

      // Precalculate connections
      const maxConnectDist = isMobile ? 120 : 175;
      for (let i = 0; i < hudNodes.length; i++) {
        for (let j = i + 1; j < hudNodes.length; j++) {
          const dx = hudNodes[i].x - hudNodes[j].x;
          const dy = hudNodes[i].y - hudNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConnectDist) {
            hudNodes[i].connections.push(j);
          }
        }
      }

      // Create Sparks & Tactical Dust Particles
      for (let i = 0; i < particleCount; i++) {
        const isRedSpark = Math.random() > 0.8;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25 - 0.05,
          radius: Math.random() * 1.5 + 0.5,
          baseAlpha: isRedSpark ? 0.45 : Math.random() * 0.3 + 0.1,
          color: isRedSpark ? '#A30F18' : '#777D83',
        });
      }

      // Create Laser Data Packets along circuit tracks
      const paths = getCircuitPaths();
      for (let i = 0; i < paths.length * 2; i++) {
        dataPackets.push({
          pathIndex: i % paths.length,
          progress: Math.random(),
          speed: Math.random() * 0.002 + 0.0015,
          length: Math.random() * 35 + 25,
          color: Math.random() > 0.4 ? '#A30F18' : '#4A5056',
        });
      }
    };

    initNetwork();

    let time = 0;

    // Helper: interpolate point along multi-segment path
    const getPointOnPath = (path: { x: number; y: number }[], t: number) => {
      if (!path || path.length < 2) return { x: 0, y: 0 };
      const totalSegments = path.length - 1;
      const scaledT = Math.max(0, Math.min(1, t)) * totalSegments;
      const segIndex = Math.min(Math.floor(scaledT), totalSegments - 1);
      const segT = scaledT - segIndex;
      const p1 = path[segIndex];
      const p2 = path[segIndex + 1];
      return {
        x: p1.x + (p2.x - p1.x) * segT,
        y: p1.y + (p2.y - p1.y) * segT,
      };
    };

    // Main 60 FPS Render Loop
    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Layered Volumetric Atmospheric Radial Glows
      const heroGlowX = width * 0.72;
      const heroGlowY = height * 0.36;
      const heroGrad = ctx.createRadialGradient(heroGlowX, heroGlowY, 0, heroGlowX, heroGlowY, Math.max(width * 0.4, 400));
      heroGrad.addColorStop(0, 'rgba(163, 15, 24, 0.14)');
      heroGrad.addColorStop(0.35, 'rgba(101, 9, 15, 0.08)');
      heroGrad.addColorStop(0.7, 'rgba(25, 28, 32, 0.04)');
      heroGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = heroGrad;
      ctx.beginPath();
      ctx.arc(heroGlowX, heroGlowY, Math.max(width * 0.4, 400), 0, Math.PI * 2);
      ctx.fill();

      // Lower Left Steel Core Haze
      const steelGlowX = width * 0.25;
      const steelGlowY = height * 0.72;
      const steelGrad = ctx.createRadialGradient(steelGlowX, steelGlowY, 0, steelGlowX, steelGlowY, Math.max(width * 0.38, 380));
      steelGrad.addColorStop(0, 'rgba(37, 41, 46, 0.18)');
      steelGrad.addColorStop(0.45, 'rgba(17, 19, 22, 0.08)');
      steelGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = steelGrad;
      ctx.beginPath();
      ctx.arc(steelGlowX, steelGlowY, Math.max(width * 0.38, 380), 0, Math.PI * 2);
      ctx.fill();

      ctx.save();

      // 2. Tactical Side Telemetry HUD Rulers (Elevation/Pitch Scale)
      const rulerMargin = width > 768 ? 32 : 12;
      const stepY = 24;
      const numTicks = Math.floor(height / stepY);

      // Left Vertical Ruler
      ctx.strokeStyle = 'rgba(74, 80, 86, 0.25)';
      ctx.fillStyle = 'rgba(119, 125, 131, 0.4)';
      ctx.font = '8px monospace';
      ctx.lineWidth = 1;

      for (let i = 2; i < numTicks - 2; i++) {
        const y = i * stepY;
        const isMajor = i % 5 === 0;
        const tickLength = isMajor ? 14 : 7;
        
        ctx.beginPath();
        ctx.moveTo(rulerMargin, y);
        ctx.lineTo(rulerMargin + tickLength, y);
        ctx.stroke();

        if (isMajor && width > 768) {
          const val = (i * 10).toString().padStart(3, '0');
          ctx.fillText(`+${val}`, rulerMargin + 18, y + 3);
        }
      }

      // Right Vertical Ruler
      for (let i = 2; i < numTicks - 2; i++) {
        const y = i * stepY;
        const isMajor = i % 5 === 0;
        const tickLength = isMajor ? 14 : 7;
        
        ctx.beginPath();
        ctx.moveTo(width - rulerMargin, y);
        ctx.lineTo(width - rulerMargin - tickLength, y);
        ctx.stroke();

        if (isMajor && width > 768) {
          const val = (i * 10).toString().padStart(3, '0');
          ctx.fillText(`-${val}`, width - rulerMargin - 38, y + 3);
        }
      }

      // 3. Precision Tactical Radar Reticle with Active 360° Rotating Sweep
      const radarCenterX = width > 768 ? width * 0.88 : width * 0.82;
      const radarCenterY = height * 0.22;
      const radarR = width > 768 ? 140 : 90;

      // Outer Radar Ring with Degree Ticks
      ctx.strokeStyle = 'rgba(74, 80, 86, 0.22)';
      ctx.beginPath();
      ctx.arc(radarCenterX, radarCenterY, radarR, 0, Math.PI * 2);
      ctx.stroke();

      // Middle Tactical Ring (Dashed)
      ctx.strokeStyle = 'rgba(163, 15, 24, 0.25)';
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(radarCenterX, radarCenterY, radarR * 0.65, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Inner Core Ring
      ctx.strokeStyle = 'rgba(74, 80, 86, 0.3)';
      ctx.beginPath();
      ctx.arc(radarCenterX, radarCenterY, radarR * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      // Cardinal Coordinate Crosshair
      ctx.strokeStyle = 'rgba(74, 80, 86, 0.28)';
      ctx.beginPath();
      ctx.moveTo(radarCenterX - radarR - 10, radarCenterY);
      ctx.lineTo(radarCenterX + radarR + 10, radarCenterY);
      ctx.moveTo(radarCenterX, radarCenterY - radarR - 10);
      ctx.lineTo(radarCenterX, radarCenterY + radarR + 10);
      ctx.stroke();

      // 12 Degree Compass Notches
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        const x1 = radarCenterX + Math.cos(a) * (radarR - 6);
        const y1 = radarCenterY + Math.sin(a) * (radarR - 6);
        const x2 = radarCenterX + Math.cos(a) * radarR;
        const y2 = radarCenterY + Math.sin(a) * radarR;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Rotating Radar Beam Sweep (Dark Red & Steel gradient sector)
      if (!reducedMotion) {
        const sweepAngle = time * 0.8;
        const sweepGrad = ctx.createRadialGradient(radarCenterX, radarCenterY, 0, radarCenterX, radarCenterY, radarR);
        sweepGrad.addColorStop(0, 'rgba(163, 15, 24, 0.35)');
        sweepGrad.addColorStop(0.8, 'rgba(163, 15, 24, 0.08)');
        sweepGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = sweepGrad;
        ctx.beginPath();
        ctx.moveTo(radarCenterX, radarCenterY);
        ctx.arc(radarCenterX, radarCenterY, radarR, sweepAngle - 0.45, sweepAngle);
        ctx.closePath();
        ctx.fill();

        // Beam Leading Edge Line
        ctx.strokeStyle = 'rgba(213, 31, 42, 0.55)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(radarCenterX, radarCenterY);
        ctx.lineTo(radarCenterX + Math.cos(sweepAngle) * radarR, radarCenterY + Math.sin(sweepAngle) * radarR);
        ctx.stroke();
        ctx.lineWidth = 1;
      }

      // Radar Identification HUD Label
      ctx.fillStyle = 'rgba(163, 15, 24, 0.6)';
      ctx.font = '9px monospace';
      ctx.fillText('RADAR.SYS [ACTIVE]', radarCenterX - radarR, radarCenterY + radarR + 18);
      ctx.fillStyle = 'rgba(119, 125, 131, 0.5)';
      ctx.fillText(`BEARING: ${(Math.floor((time * 45) % 360)).toString().padStart(3, '0')}°`, radarCenterX - radarR, radarCenterY + radarR + 30);

      // 4. Circuit Trajectory Tracks & High-Speed Laser Data Packets
      const circuitPaths = getCircuitPaths();

      // Draw Static Track Base Lines & Corner Fillets
      ctx.lineWidth = 1;
      circuitPaths.forEach((path) => {
        ctx.strokeStyle = 'rgba(74, 80, 86, 0.16)';
        ctx.beginPath();
        path.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.stroke();

        // Track Node Terminals (Octagonal/Cross reticles)
        path.forEach((pt) => {
          ctx.strokeStyle = 'rgba(74, 80, 86, 0.3)';
          ctx.strokeRect(pt.x - 3, pt.y - 3, 6, 6);
          ctx.fillStyle = 'rgba(163, 15, 24, 0.4)';
          ctx.fillRect(pt.x - 1.5, pt.y - 1.5, 3, 3);
        });
      });

      // Animate Laser Data Packets along tracks
      if (!reducedMotion) {
        dataPackets.forEach((packet) => {
          packet.progress += packet.speed;
          if (packet.progress > 1) packet.progress = 0;

          const currentPath = circuitPaths[packet.pathIndex];
          if (!currentPath) return;

          const headPos = getPointOnPath(currentPath, packet.progress);
          const tailProgress = Math.max(0, packet.progress - 0.08);
          const tailPos = getPointOnPath(currentPath, tailProgress);

          // Glowing laser trace
          const packetGrad = ctx.createLinearGradient(tailPos.x, tailPos.y, headPos.x, headPos.y);
          packetGrad.addColorStop(0, 'transparent');
          packetGrad.addColorStop(1, packet.color === '#A30F18' ? 'rgba(213, 31, 42, 0.85)' : 'rgba(119, 125, 131, 0.7)');

          ctx.strokeStyle = packetGrad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(tailPos.x, tailPos.y);
          ctx.lineTo(headPos.x, headPos.y);
          ctx.stroke();

          // Packet Leading Spark Core
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(headPos.x, headPos.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 5. Hexagonal Tactical Armor Cluster in Top Left
      const hexOriginX = width * 0.12;
      const hexOriginY = height * 0.18;
      const hexSize = 22;
      const hexCols = 4;
      const hexRows = 3;

      const drawHex = (cx: number, cy: number, size: number) => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const x = cx + size * Math.cos(angle);
          const y = cy + size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      };

      ctx.lineWidth = 1;
      for (let r = 0; r < hexRows; r++) {
        for (let c = 0; c < hexCols; c++) {
          const xOffset = c * hexSize * Math.sqrt(3);
          const yOffset = r * hexSize * 1.5 + (c % 2 === 1 ? hexSize * 0.75 : 0);
          const hexX = hexOriginX + xOffset;
          const hexY = hexOriginY + yOffset;

          const isRedHex = (r + c) % 3 === 0;
          ctx.strokeStyle = isRedHex ? 'rgba(163, 15, 24, 0.25)' : 'rgba(74, 80, 86, 0.12)';
          drawHex(hexX, hexY, hexSize);

          if (isRedHex) {
            ctx.fillStyle = 'rgba(163, 15, 24, 0.4)';
            ctx.beginPath();
            ctx.arc(hexX, hexY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.fillStyle = 'rgba(119, 125, 131, 0.4)';
      ctx.font = '8px monospace';
      ctx.fillText('ARMOR.MATRIX // SEC-04', hexOriginX, hexOriginY - 14);

      // 6. Slow Vertical Lidar Scanner Sweep Line
      if (!reducedMotion) {
        const scanY = (time * 65) % (height + 100) - 50;
        const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 10);
        scanGrad.addColorStop(0, 'transparent');
        scanGrad.addColorStop(0.8, 'rgba(163, 15, 24, 0.08)');
        scanGrad.addColorStop(1, 'rgba(213, 31, 42, 0.18)');

        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 30, width, 40);

        ctx.strokeStyle = 'rgba(213, 31, 42, 0.35)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, scanY + 10);
        ctx.lineTo(width, scanY + 10);
        ctx.stroke();
      }

      ctx.restore();

      // 7. Tactical HUD Nodes Network
      const connectDist = width < 768 ? 120 : 175;

      for (let i = 0; i < hudNodes.length; i++) {
        const node = hudNodes[i];

        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Mouse proximity reaction
          const dxM = mouse.x - node.x;
          const dyM = mouse.y - node.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < mouse.radius) {
            const force = (mouse.radius - distM) / mouse.radius;
            node.x -= (dxM / distM) * force * 0.8;
            node.y -= (dyM / distM) * force * 0.8;
          }
        }

        // Connect nodes with technical grid lines
        for (let j = i + 1; j < hudNodes.length; j++) {
          const target = hudNodes[j];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const alpha = Math.pow(1 - dist / connectDist, 1.2) * (node.isRed || target.isRed ? 0.28 : 0.15);
            ctx.strokeStyle = node.isRed || target.isRed ? 'rgba(163, 15, 24, 0.5)' : 'rgba(74, 80, 86, 0.3)';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        }

        // Draw glowing tactical node
        const pulse = Math.sin(time * 2.5 + node.pulsePhase) * 0.3 + 0.7;
        ctx.globalAlpha = pulse * (node.isRed ? 0.85 : 0.55);
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Hot center node core
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = pulse * 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // 8. Floating Micro Sparks & Embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.globalAlpha = p.baseAlpha * (Math.sin(time * 2.5 + i) * 0.25 + 0.75);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
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
      {/* Deep Black & Charcoal Foundation */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #050505 0%, #090A0C 50%, #050505 100%)',
        }}
      />

      {/* 60 FPS HTML5 Canvas with Tactical HUD, Radar Sweep, Circuit Laser Packets & Armor Elements */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subdued Precision Steel Grid Pattern */}
      <div 
        className="absolute inset-0 bg-subtle-grid opacity-35"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 40%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 40%, black 30%, transparent 90%)',
        }}
      />

      {/* Industrial Tactical Vignette Shadow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 95% 90% at 50% 50%, transparent 45%, rgba(5, 5, 5, 0.94) 100%)',
        }}
      />
    </div>
  );
};





