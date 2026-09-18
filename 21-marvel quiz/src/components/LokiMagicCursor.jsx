import React, { useEffect, useState, useRef } from 'react';

export const LokiMagicCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState([]);
  
  const particlesRef = useRef([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    // Apply custom cursor class to body
    document.body.classList.add('loki-custom-cursor');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer, .btn-timeline-glow');
      setIsHovered(!!isInteractive);

      // Add a trailing magic particle on mouse move
      if (Math.random() < 0.45 && canvasRef.current) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.3,
          radius: Math.random() * 2 + 0.8,
          alpha: 0.8,
          life: 30,
        });
      }
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      // Spawn a click ripple ring
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev.slice(-3), newClick]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
      }, 400);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('loki-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Particle trailing canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        if (p.alpha <= 0) {
          particlesRef.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 227, 154, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#38E39A';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      {/* Canvas for trailing magic particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Primary Emerald Core Point */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#FFFFFF] rounded-full shadow-[0_0_12px_#38E39A] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.6 : isHovered ? 1.4 : 1})`,
        }}
      />

      {/* Primary Emerald Outer Aura / Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isHovered
            ? 'w-10 h-10 border-[#B99A45] bg-[#38E39A]/15 shadow-[0_0_24px_rgba(56,227,154,0.6)] animate-spin'
            : 'w-7 h-7 border-[#38E39A]/60 bg-[#16A66A]/10 shadow-[0_0_14px_rgba(56,227,154,0.3)]'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* Click Magic Pulse Ripples */}
      {clicks.map((c) => (
        <div
          key={c.id}
          className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-[#38E39A] bg-[#38E39A]/20 shadow-[0_0_30px_#38E39A] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: `${c.x}px`,
            top: `${c.y}px`,
          }}
        />
      ))}
    </div>
  );
};
