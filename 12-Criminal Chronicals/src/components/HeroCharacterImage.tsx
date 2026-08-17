import React, { useState, useEffect, useRef } from 'react';

export const HeroCharacterImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activationStep, setActivationStep] = useState<number>(0); 
  // 0: Black, 1: Glow Build, 2: Ring Load, 3: Vertical Scan, 4: Detected Burst, 5: Fully Activated
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hudSignal, setHudSignal] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Activation sequence timeline on initial mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setActivationStep(5); // Skip directly to fully activated for reduced motion
      setHudSignal('CASE ACTIVE');
      return;
    }

    const t1 = setTimeout(() => setActivationStep(1), 400);  // Glow build
    const t2 = setTimeout(() => setActivationStep(2), 900);  // Ring load
    const t3 = setTimeout(() => setActivationStep(3), 1500); // Vertical scan
    const t4 = setTimeout(() => setActivationStep(4), 2400); // Detected burst
    const t5 = setTimeout(() => {
      setActivationStep(5); // Character fully visible & stabilized
      setHudSignal('SUBJECT DETECTED');
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  // HUD text cycle sequence post-activation
  useEffect(() => {
    if (activationStep < 5) return;
    const hudSignals = ['CASE FILE: CC-02.0', 'VISUAL ANALYSIS', 'SIGNAL DETECTED', 'IGNITRRON\'26', 'CASE STATUS: ACTIVE'];
    let idx = 0;

    const hudInterval = setInterval(() => {
      idx = (idx + 1) % hudSignals.length;
      setHudSignal(null);
      setTimeout(() => {
        setHudSignal(hudSignals[idx]);
      }, 400);
    }, 5500);

    return () => clearInterval(hudInterval);
  }, [activationStep]);

  // Parallax & reduced motion detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (mediaQuery.matches || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
      
      // Strict constraints: X max ±8px, Y max ±6px
      setMousePos({
        x: Math.max(-8, Math.min(8, relativeX * 16)),
        y: Math.max(-6, Math.min(6, relativeY * 12))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Rain Canvas Particle System (Foreground depth layer with light interaction)
  useEffect(() => {
    if (reducedMotion || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || 500);
    let height = (canvas.height = canvas.offsetHeight || 650);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 500;
      height = canvas.height = canvas.offsetHeight || 650;
    };
    window.addEventListener('resize', handleResize);

    // 22 subtle rain particles with depth, speed, and crimson light interaction
    const particles = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 12 + Math.random() * 22,
      speed: 5 + Math.random() * 7,
      opacity: 0.15 + Math.random() * 0.35,
      thickness: 0.8 + Math.random() * 0.9,
      isLightCatching: Math.random() > 0.45
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.length * 0.2, p.y + p.length);
        
        // Light catching interaction
        ctx.strokeStyle = p.isLightCatching && p.y > height * 0.2 && p.y < height * 0.7
          ? 'rgba(227, 27, 35, 0.45)' 
          : 'rgba(245, 245, 245, 0.25)';
        
        ctx.lineWidth = p.thickness;
        ctx.stroke();

        p.y += p.speed;
        p.x -= p.speed * 0.2;

        if (p.y > height) {
          p.y = -p.length;
          p.x = Math.random() * (width + 50);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reducedMotion]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[620px] mx-auto lg:ml-auto lg:mr-0 flex justify-center items-center group"
    >
      
      {/* LAYER 1: Background Atmospheric Activation System (Parallax: 2px) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: reducedMotion ? 'none' : `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)`
        }}
      >
        {/* Volumetric Crimson Light Bloom behind character */}
        <div 
          className={`absolute top-1/4 left-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-[#8b0000]/40 via-[#c1121f]/25 to-[#e31b23]/15 blur-3xl transition-all duration-1000 ${
            activationStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          } ${activationStep >= 5 ? 'animate-pulse-red' : ''}`} 
        />

        {/* Technical Loading HUD Arcs (Ring 1 & 2) */}
        <div 
          className={`absolute inset-10 rounded-full border border-dashed border-[#e31b23]/30 transition-all duration-1000 ${
            activationStep >= 2 ? 'opacity-60 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ animation: 'spin 25s linear infinite' }}
        />

        <div 
          className={`absolute inset-20 rounded-full border border-red-700/20 transition-all duration-1000 ${
            activationStep >= 2 ? 'opacity-50 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ animation: 'spin 18s linear infinite reverse' }}
        />

        {/* Vertical Scanning Light Beam (sweeping up during step 3) */}
        <div 
          className={`absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#e31b23]/40 to-transparent blur-md transition-all duration-1000 pointer-events-none ${
            activationStep === 3 ? 'top-1/4 opacity-90' : activationStep > 3 ? 'top-full opacity-0' : 'top-0 opacity-0'
          }`}
        />

        {/* Subject Detection Light Burst (Step 4) */}
        <div 
          className={`absolute top-1/3 left-1/3 w-1/2 h-1/2 rounded-full bg-[#e31b23]/30 blur-2xl transition-all duration-500 pointer-events-none ${
            activationStep === 4 ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
          }`}
        />

        {/* Distant Rainy City Bokeh Lights */}
        <div className="absolute top-10 right-14 w-14 h-14 rounded-full bg-[#e31b23]/15 blur-xl opacity-70" />
        <div className="absolute bottom-28 left-6 w-20 h-20 rounded-full bg-[#8b0000]/20 blur-2xl opacity-60" />
      </div>

      {/* LAYER 2: Character Image (Parallax: 5px, Max 0.5deg Tilt) */}
      <div 
        className="relative w-full h-[450px] sm:h-[550px] md:h-[620px] lg:h-[680px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out z-10"
        style={{
          transform: reducedMotion 
            ? 'none' 
            : `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px) rotate(${mousePos.x * 0.04}deg)`
        }}
      >
        {/* Slow Camera Push Container (1.00 <-> 1.025 zoom oscillation) */}
        <div className={`relative w-full h-full transition-all duration-1000 ${
          reducedMotion || activationStep < 5 ? '' : 'animate-slow-push'
        }`}>
          
          {/* Uploaded Character Image with Feathered Mask & Activation Fade */}
          <img
            src="/assets/hero-character.jpg"
            alt="Dark cinematic vigilante figure representing the Criminal Chronicles 2.0 investigation theme"
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover object-[center_15%] filter contrast-110 saturate-105 transition-all duration-1200 ${
              activationStep >= 5 && isLoaded 
                ? 'opacity-100 scale-100 brightness-95' 
                : activationStep >= 3 
                ? 'opacity-60 scale-103 brightness-75' 
                : 'opacity-0 scale-105 brightness-50'
            }`}
          />

          {/* Silhouette Rim Light Glow (Step 4 & 5) */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              activationStep >= 4 ? 'opacity-80' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle at 50% 30%, transparent 40%, rgba(227, 27, 35, 0.15) 80%, rgba(5, 5, 5, 0.8) 100%)'
            }}
          />

          {/* Light Sweep Reflection across suit */}
          {!reducedMotion && activationStep >= 5 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e31b23]/15 to-transparent animate-light-sweep pointer-events-none" />
          )}

          {/* Mouse Cursor Radial Reflection */}
          {!reducedMotion && activationStep >= 5 && (
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-90"
              style={{
                background: `radial-gradient(circle 300px at ${50 + mousePos.x * 2}% ${40 + mousePos.y * 2}%, rgba(227, 27, 35, 0.18), transparent 70%)`
              }}
            />
          )}

          {/* Feathered Edge Gradient Masks (Seamless integration into #050505 black background) */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-[#050505]/80 to-transparent pointer-events-none" />

          {/* Bottom Wet Pavement Reflection Effect */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#8b0000]/20 to-transparent opacity-40 pointer-events-none blur-sm" />

          {/* Dark Vignette Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 45% 35%, transparent 35%, rgba(5, 5, 5, 0.78) 100%)'
            }}
          />

          {/* 2-4% Film Grain Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* LAYER 3: Foreground Rain Canvas & Micro-HUD (Parallax: 8px) */}
        {!reducedMotion && activationStep >= 4 && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            style={{
              transform: `translate(${mousePos.x * 1.0}px, ${mousePos.y * 1.0}px)`
            }}
          />
        )}

        {/* Micro Forensic HUD Signals */}
        <div className="absolute bottom-6 left-8 z-30 font-mono text-[10px] space-y-0.5 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e31b23] animate-pulse" />
            <span className={`font-bold transition-opacity duration-500 ${hudSignal ? 'opacity-90 text-white' : 'opacity-0'}`}>
              {hudSignal || 'CASE CC-02.0'}
            </span>
          </div>
          <p className="text-[9px] text-red-400/60 uppercase tracking-widest">
            IGNITRRON'26 • FORENSIC DOSSIER
          </p>
        </div>

        {/* Signal Pulse Ring near bottom right */}
        <div className="absolute bottom-7 right-8 z-30 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#e31b23]" />
            <span className="absolute w-6 h-6 rounded-full border border-red-500/40 animate-ping" />
          </div>
        </div>

      </div>
    </div>
  );
};
