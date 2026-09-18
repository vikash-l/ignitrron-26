import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldAlert, Clock, Sparkles } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const CinematicHero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLokiHovered, setIsLokiHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [showIllusions, setShowIllusions] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const canvasRef = useRef(null);

  // 1. Hero Entrance Sequence
  useEffect(() => {
    const t1 = setTimeout(() => setIntroStep(1), 350);   // Green spark at palm
    const t2 = setTimeout(() => setIntroStep(2), 850);   // Energy aura grows at palm
    const t3 = setTimeout(() => setIntroStep(3), 1400);  // Loki image fades in
    const t4 = setTimeout(() => setIntroStep(4), 2000);  // Illusion copies split & collapse
    const t5 = setTimeout(() => setIntroStep(5), 2600);  // Titles & copy reveal
    const t6 = setTimeout(() => setIntroStep(6), 3200);  // CTAs fully active

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  // 2. Reality Glitch Effect (Subtle 180ms text separation every 8s)
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.6) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 180);
      }
    }, 8000);
    return () => clearInterval(glitchInterval);
  }, []);

  // 3. Multi-Layer 3D Mouse Parallax Movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 4. Soft Organic Emerald Magic Engine Anchored RELATIVE to Loki's Raised Palm (left: 28%, top: 42%)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let tick = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const palmRatioX = 0.28;
    const palmRatioY = 0.42;

    const particles = Array.from({ length: 30 }, () => ({
      x: 0,
      y: 0,
      radius: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.85) * 1.6,
      vy: (Math.random() - 0.5) * 1.2,
      alpha: Math.random() * 0.7 + 0.3,
      life: Math.random() * 100,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      const palmX = canvas.width * palmRatioX;
      const palmY = canvas.height * palmRatioY;

      // Bright Emerald Core Directly at Palm Center
      const coreRadius = 12 + Math.sin(tick * 0.1) * 3 + (isCtaHovered || isLokiHovered ? 8 : 0);
      const coreGrad = ctx.createRadialGradient(palmX, palmY, 1, palmX, palmY, coreRadius);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, '#38E39A');
      coreGrad.addColorStop(0.7, 'rgba(22, 166, 106, 0.6)');
      coreGrad.addColorStop(1, 'rgba(3, 5, 4, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(palmX, palmY, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // Outer Soft Magic Aura around Palm
      const auraRadius = 45 + Math.sin(tick * 0.07) * 12 + (isCtaHovered || isLokiHovered ? 20 : 0);
      const auraGrad = ctx.createRadialGradient(palmX, palmY, 4, palmX, palmY, auraRadius);
      auraGrad.addColorStop(0, 'rgba(56, 227, 154, 0.75)');
      auraGrad.addColorStop(0.5, 'rgba(22, 166, 106, 0.3)');
      auraGrad.addColorStop(1, 'rgba(3, 5, 4, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(palmX, palmY, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // Organic Curved Emerald Magic Tendrils
      ctx.strokeStyle = isCtaHovered ? 'rgba(56, 227, 154, 0.85)' : 'rgba(56, 227, 154, 0.5)';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#38E39A';

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1.6;
        ctx.moveTo(palmX, palmY);

        const ctrlX = palmX - 60 - i * 25;
        const ctrlY = palmY + Math.sin(tick * 0.05 + i) * 25;
        const endX = palmX - 140 - i * 35;
        const endY = palmY + (i === 0 ? -50 : i === 1 ? 30 : 80);

        ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      // Particles Emitting Leftward from Palm
      particles.forEach((p) => {
        if (p.x === 0 && p.y === 0) {
          p.x = palmX + (Math.random() - 0.5) * 20;
          p.y = palmY + (Math.random() - 0.5) * 20;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.9;

        if (p.life <= 0) {
          p.x = palmX + (Math.random() - 0.5) * 20;
          p.y = palmY + (Math.random() - 0.5) * 20;
          p.life = 100;
          p.alpha = Math.random() * 0.7 + 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 227, 154, ${p.alpha * (p.life / 100)})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#38E39A';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLokiHovered, isCtaHovered]);

  const handleLokiHover = () => {
    sounds.playHover();
    setIsLokiHovered(true);
    setShowIllusions(true);
    setTimeout(() => setShowIllusions(false), 450);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden bg-[#030504] select-none z-0"
    >
      {/* Layer 1: Background Grids */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-0" />
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none z-0" />

      {/* Layer 2: Atmospheric Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-[#030504]/80 opacity-90 pointer-events-none z-[1]" />

      {/* Atmospheric TVA Decorative Status Panel */}
      <div className="absolute top-24 left-8 hidden lg:block font-mono text-[10px] text-[#8E9A94] border-l border-[#38E39A]/30 pl-3 z-[10] pointer-events-none space-y-1">
        <div className="text-[#38E39A] font-bold mb-1 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#38E39A] animate-ping" />
          TIMELINE STATUS // ACTIVE
        </div>
        <div>VARIANT // <span className="text-[#F4F5F3] font-bold">LOKI</span></div>
        <div>REALITY // <span className="text-[#E1C66A] font-bold">616</span></div>
        <div>EVENT STATUS // <span className="text-[#38E39A] font-bold">CLASSIFIED</span></div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-[10]">
        
        {/* LEFT COLUMN: Cinematic Titles & Informational CTAs */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-[30] pt-4">
          
          {/* Status Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introStep >= 5 ? 1 : 0, y: introStep >= 5 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/50 mb-4"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] font-bold tracking-[0.25em]">
              IGNITRRON'26 • DAY 01 EVENT
            </span>
          </motion.div>

          {/* IGNITRRON'26 Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introStep >= 5 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1 mb-2"
          >
            <span className="font-mono text-sm tracking-[0.45em] text-[#38E39A] font-bold block">
              IGNITRRON'26
            </span>

            {/* AVENGERS: THE AUCTION WAR Headline */}
            <h1 className={`font-display font-extrabold text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl tracking-tight text-[#F4F5F3] leading-[1.08] ${isGlitching ? 'animate-glitch text-[#38E39A]' : ''}`}>
              AVENGERS: <br />
              <span className="text-[#38E39A] font-mono glow-text text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl">THE AUCTION WAR</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introStep >= 5 ? 1 : 0, y: introStep >= 5 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-lg sm:text-2xl font-bold tracking-wide text-[#B99A45] my-4"
          >
            "THE GOD OF MISCHIEF HAS ALTERED THE TIMELINE."
          </motion.div>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introStep >= 5 ? 1 : 0, y: introStep >= 5 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2 max-w-md mb-8"
          >
            <p className="text-base text-[#8E9A94] font-normal leading-relaxed">
              Prove your Marvel knowledge. The top 15 teams enter the auction.
            </p>
          </motion.div>

          {/* Informational Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: introStep >= 6 ? 1 : 0, y: introStep >= 6 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-[40]"
          >
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => {
                sounds.playHover();
                setIsCtaHovered(true);
              }}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="btn-timeline-glow w-full sm:w-auto px-8 py-4 rounded-2xl font-mono text-sm tracking-wider text-[#F4F5F3] font-bold shadow-emerald-lg flex items-center justify-center gap-3 group relative overflow-hidden cursor-pointer pointer-events-auto z-[40]"
            >
              <Sparkles className="w-5 h-5 text-[#38E39A] animate-pulse" />
              <span>REGISTER NOW →</span>
            </a>

            <a
              href="#timeline"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel glass-panel-hover font-mono text-sm tracking-wider text-[#8E9A94] hover:text-[#38E39A] flex items-center justify-center gap-2 cursor-pointer pointer-events-auto relative z-[40]"
            >
              <Clock className="w-4 h-4 text-[#16A66A]" />
              <span>VIEW TIMELINE →</span>
            </a>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Cinematic Integrated Loki Image Container */}
        <div className="lg:col-span-7 flex items-center justify-center relative my-4 lg:my-0 z-[10]">
          
          {/* Layer 2: REAL Temporal Portal Rings behind Loki */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
            <div className="w-96 h-96 sm:w-[32rem] sm:h-[32rem] rounded-full border border-dashed border-[#38E39A]/40 animate-portal-spin" />
            <div className="w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full border border-dotted border-[#B99A45]/40 animate-portal-spin-reverse" />
            <div className="w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] rounded-full border border-[#16A66A]/20" />
          </div>

          {/* Hero Visual Container */}
          <motion.div
            ref={imageContainerRef}
            onMouseEnter={handleLokiHover}
            onMouseLeave={() => setIsLokiHovered(false)}
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * -0.5}deg) rotateX(${mousePos.y * 0.5}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
            className="hero-visual relative w-full max-w-2xl group z-[10]"
          >
            {/* Dynamic Magic Origin Anchor at Loki's Raised Palm */}
            <div className="magic-origin absolute left-[28%] top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[25] w-6 h-6 rounded-full bg-[#38E39A] shadow-[0_0_20px_#38E39A] opacity-80 animate-ping" />

            {/* Canvas Energy Overlay */}
            <div className="absolute inset-0 z-[20] pointer-events-none">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            {/* Translucent Illusion Duplicates */}
            <AnimatePresence>
              {(showIllusions || introStep === 4) && (
                <>
                  <motion.img
                    initial={{ opacity: 0.6, x: 0 }}
                    animate={{ opacity: 0, x: -45, filter: 'hue-rotate(50deg) blur(2px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="/marvel-quiz/loki_hero.jpg"
                    alt="Loki Illusion Duplicate Left"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen z-[15]"
                  />
                  <motion.img
                    initial={{ opacity: 0.6, x: 0 }}
                    animate={{ opacity: 0, x: 45, filter: 'hue-rotate(-40deg) blur(2px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="/marvel-quiz/loki_hero.jpg"
                    alt="Loki Illusion Duplicate Right"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen z-[15]"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Official Provided Loki Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: introStep >= 3 ? 1 : 0, scale: introStep >= 3 ? 1 : 0.95 }}
              transition={{ duration: 0.8 }}
              className={`relative transition-all duration-500 z-[10] ${
                isLokiHovered ? 'brightness-110' : ''
              }`}
            >
              <img
                src="/marvel-quiz/loki_hero.jpg"
                alt="Loki - God of Mischief (Ignitrron'26)"
                className="w-full h-auto object-cover rounded-3xl"
              />

              {/* Feathering overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030504] via-transparent to-transparent opacity-95 w-2/5 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent opacity-90 h-2/5 bottom-0 top-auto pointer-events-none" />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
