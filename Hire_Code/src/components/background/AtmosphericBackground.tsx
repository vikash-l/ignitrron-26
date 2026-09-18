import React, { useEffect, useRef, useState } from 'react';

interface HexPoint {
  x: number;
  y: number;
  baseRadius: number;
  color: string;
  phase: number;
  speed: number;
}

interface Photon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const mediaListener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', mediaListener);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle interactive energy ripple
    const mouse = { x: width * 0.5, y: height * 0.3, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // 1. Hexagonal Synapso-Lattice Nodes (Theme matching: Emerald, Cyan, Gold)
    let hexGrid: HexPoint[] = [];
    
    // 2. Ambient Micro-Photons (Theme matching)
    let photons: Photon[] = [];
    const themeColors = ['#00BFA6', '#22D3EE', '#D6B86A', '#E8EEF2'];

    const initElements = () => {
      const isMobile = width < 768;

      // Hexagonal Lattice Nodes
      hexGrid = [];
      const spacing = isMobile ? 85 : 110;
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / (spacing * 0.866)) + 2;

      for (let r = 0; r < rows; r++) {
        const offset = (r % 2) * (spacing * 0.5);
        for (let c = 0; c < cols; c++) {
          const x = c * spacing + offset - spacing;
          const y = r * (spacing * 0.866) - spacing;
          
          hexGrid.push({
            x,
            y,
            baseRadius: Math.random() * 1.2 + 1.0,
            color: Math.random() > 0.75 ? '#D6B86A' : (Math.random() > 0.45 ? '#22D3EE' : '#00BFA6'),
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.015 + 0.008,
          });
        }
      }

      // Micro-Photons
      photons = [];
      const photonCount = isMobile ? 24 : 45;
      for (let i = 0; i < photonCount; i++) {
        photons.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: Math.random() * 1.5 + 0.8,
          alpha: Math.random() * 0.4 + 0.2,
          color: themeColors[Math.floor(Math.random() * themeColors.length)],
        });
      }
    };

    initElements();

    let tick = 0;

    const render = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick++;
      ctx.clearRect(0, 0, width, height);

      // Solar Gem Core Coordinates (Upper Right Quad)
      const solarX = width * 0.8;
      const solarY = height * 0.22;

      // --- 1. Soft Thematic Ambient Glow Pools (Emerald & Solar Gold) ---
      // Primary Emerald Glow
      const emeraldGlow = ctx.createRadialGradient(width * 0.82, height * 0.25, 0, width * 0.82, height * 0.25, width > 768 ? 580 : 350);
      emeraldGlow.addColorStop(0, 'rgba(0, 191, 166, 0.12)');
      emeraldGlow.addColorStop(0.5, 'rgba(0, 191, 166, 0.03)');
      emeraldGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = emeraldGlow;
      ctx.fillRect(0, 0, width, height);

      // Secondary Cyan Pool (Lower Left)
      const cyanGlow = ctx.createRadialGradient(width * 0.15, height * 0.7, 0, width * 0.15, height * 0.7, width > 768 ? 520 : 320);
      cyanGlow.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
      cyanGlow.addColorStop(0.5, 'rgba(34, 211, 238, 0.02)');
      cyanGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      // --- 2. Solar Gem Emitter (Mind Stone Theme - Amber-Gold & Cyan Corona) ---
      const pulseScale = Math.sin(tick * 0.02) * 8;
      
      // Outer Solar Aura
      const solarAura = ctx.createRadialGradient(solarX, solarY, 0, solarX, solarY, 260 + pulseScale);
      solarAura.addColorStop(0, 'rgba(214, 184, 106, 0.18)');
      solarAura.addColorStop(0.35, 'rgba(0, 191, 166, 0.08)');
      solarAura.addColorStop(0.7, 'rgba(34, 211, 238, 0.02)');
      solarAura.addColorStop(1, 'transparent');
      ctx.fillStyle = solarAura;
      ctx.beginPath();
      ctx.arc(solarX, solarY, 260 + pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // Rotating Hexagonal Solar Gem Facet
      ctx.save();
      ctx.translate(solarX, solarY);
      ctx.rotate(tick * 0.003);
      
      // Inner Hex Facet (Gold)
      ctx.strokeStyle = 'rgba(214, 184, 106, 0.28)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const hx = Math.cos(angle) * 44;
        const hy = Math.sin(angle) * 44;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();

      // Middle Diamond Star Rays (Cyan & Gold)
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.2)';
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 6]);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + Math.PI / 6;
        const hx = Math.cos(angle) * 78;
        const hy = Math.sin(angle) * 78;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // --- 3. Synapso-Hexagonal Density Lattice Network ---
      const connectionDist = 100;
      for (let i = 0; i < hexGrid.length; i++) {
        const node = hexGrid[i];
        node.phase += node.speed;
        
        let alpha = 0.08 + Math.sin(node.phase) * 0.06;

        // Interactive Cursor Ripple
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            alpha += (1 - dist / 160) * 0.35;
          }
        }

        alpha = Math.max(0.02, Math.min(0.6, alpha));

        // Draw Node
        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
        ctx.fill();

        // Connect adjacent hex points with subtle synaptic filaments
        if (i % 2 === 0) {
          for (let j = i + 1; j < Math.min(i + 4, hexGrid.length); j++) {
            const node2 = hexGrid[j];
            const dx = node2.x - node.x;
            const dy = node2.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDist) {
              const linkAlpha = (1 - dist / connectionDist) * 0.07;
              ctx.strokeStyle = node.color === '#D6B86A' ? 'rgba(214, 184, 106, 0.07)' : 'rgba(0, 191, 166, 0.06)';
              ctx.lineWidth = 0.6;
              ctx.globalAlpha = linkAlpha;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.stroke();
            }
          }
        }
      }

      // --- 4. Floating Micro-Photons ---
      for (let i = 0; i < photons.length; i++) {
        const p = photons[i];

        if (!reducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- 5. Precision HUD Corner Telemetry Brackets ---
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 191, 166, 0.2)';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.8;
      
      // Top Left Corner Bracket
      ctx.beginPath();
      ctx.moveTo(35, 45);
      ctx.lineTo(35, 30);
      ctx.lineTo(50, 30);
      ctx.stroke();

      // Top Right Corner Bracket
      ctx.beginPath();
      ctx.moveTo(width - 50, 30);
      ctx.lineTo(width - 35, 30);
      ctx.lineTo(width - 35, 45);
      ctx.stroke();

      // Bottom Left Corner Bracket
      ctx.beginPath();
      ctx.moveTo(35, height - 45);
      ctx.lineTo(35, height - 30);
      ctx.lineTo(50, height - 30);
      ctx.stroke();

      // Bottom Right Corner Bracket
      ctx.beginPath();
      ctx.moveTo(width - 50, height - 30);
      ctx.lineTo(width - 35, height - 30);
      ctx.lineTo(width - 35, height - 45);
      ctx.stroke();
      ctx.restore();

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      media.removeEventListener('change', mediaListener);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Obsidian-to-Navy Solid Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(140% 110% at 50% 0%, #0B1720 0%, #08131C 45%, #05070A 100%)',
        }}
      />

      {/* 2. Canvas Layer with Solar Core, Hex Lattice & Micro-Photons */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 3. Subtle Hexagonal Lattice Matrix Overlay */}
      <div 
        className="absolute inset-0 bg-hex-grid opacity-30"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 35%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 35%, black 25%, transparent 80%)',
        }}
      />

      {/* 4. Cinematic Vignette Shadow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(5, 7, 10, 0.92) 100%)',
        }}
      />
    </div>
  );
};


