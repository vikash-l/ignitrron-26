import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Compass, Wand2, ShieldAlert } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const HeroLokiSection = ({ onStartQuiz, onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLokiHovered, setIsLokiHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [showIllusions, setShowIllusions] = useState(false);
  const [animStep, setAnimStep] = useState(0);

  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // Hero Entry Animation Sequence (Steps 1 to 11)
  useEffect(() => {
    const t1 = setTimeout(() => setAnimStep(1), 300);   // Green spark near hand
    const t2 = setTimeout(() => setAnimStep(2), 700);   // Green energy travels
    const t3 = setTimeout(() => setAnimStep(3), 1100);  // Image fades into view
    const t4 = setTimeout(() => setAnimStep(4), 1600);  // Lightning animated
    const t5 = setTimeout(() => setAnimStep(5), 2100);  // Illusion copies appear
    const t6 = setTimeout(() => setAnimStep(6), 2600);  // Copies collapse
    const t7 = setTimeout(() => setAnimStep(7), 3100);  // Titles & CTAs materialize

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, []);

  // Multi-layer 3D Parallax Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas Particle & Lightning Rays System from Loki's Raised Hand
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let tick = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Hand Position inside container (Approximate relative coordinates for raised hand)
    const handPoint = { x: 0.32, y: 0.42 };

    const particles = Array.from({ length: 30 }, () => ({
      x: canvas.width * handPoint.x + (Math.random() - 0.5) * 60,
      y: canvas.height * handPoint.y + (Math.random() - 0.5) * 60,
      radius: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2 - 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      life: Math.random() * 100,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      const originX = canvas.width * handPoint.x;
      const originY = canvas.height * handPoint.y;

      // 1. Pulsing Hand Magic Aura
      const auraRadius = 35 + Math.sin(tick * 0.08) * 10 + (isCtaHovered || isLokiHovered ? 20 : 0);
      const auraGrad = ctx.createRadialGradient(originX, originY, 2, originX, originY, auraRadius);
      auraGrad.addColorStop(0, 'rgba(56, 227, 154, 0.9)');
      auraGrad.addColorStop(0.5, 'rgba(22, 166, 106, 0.4)');
      auraGrad.addColorStop(1, 'rgba(3, 5, 4, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(originX, originY, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Animated SVG-Style Green Lightning Rays emanating from Loki's raised hand
      ctx.strokeStyle = isCtaHovered ? 'rgba(56, 227, 154, 0.9)' : 'rgba(56, 227, 154, 0.6)';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#38E39A';

      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        let currX = originX;
        let currY = originY;
        ctx.moveTo(currX, currY);

        const angle = (i * Math.PI / 2) + Math.sin(tick * 0.05 + i) * 0.4;
        const length = 120 + Math.sin(tick * 0.1 + i) * 30;
        const steps = 6;

        for (let s = 0; s < steps; s++) {
          currX += Math.cos(angle) * (length / steps) + (Math.random() - 0.5) * 15;
          currY += Math.sin(angle) * (length / steps) + (Math.random() - 0.5) * 15;
          ctx.lineTo(currX, currY);
        }
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      // 3. Particles traveling outward from hand
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.8;

        if (p.life <= 0) {
          p.x = originX + (Math.random() - 0.5) * 40;
          p.y = originY + (Math.random() - 0.5) * 40;
          p.life = 100;
          p.alpha = Math.random() * 0.8 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 227, 154, ${p.alpha * (p.life / 100)})`;
        ctx.fill();
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
    setTimeout(() => setShowIllusions(false), 500);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#030504]"
    >
      {/* Radial Environmental Atmospheric Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      {/* Floating Status Widgets */}
      <div className="absolute top-24 left-8 hidden lg:block font-mono text-[10px] text-[#8E9A94] border-l border-[#38E39A]/30 pl-3 z-20">
        <div className="text-[#38E39A] font-semibold mb-1">TVA_REALITY // STREAM 616</div>
        <div>STATUS: <span className="text-[#F4F5F3]">LOKI_CONTROLLED</span></div>
        <div>ILLUSION_PHASE: <span className="text-[#B99A45]">ACTIVE</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: IGNITRRON'26 Typography & CTAs (approx 50% width on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20 pt-4">
          
          {/* Day 01 Identification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animStep >= 7 ? 1 : 0, y: animStep >= 7 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/50 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#38E39A] animate-ping" />
            <span className="font-mono text-xs text-[#E1C66A] font-bold tracking-[0.25em]">
              IGNITRRON'26 • DAY 01 EVENT
            </span>
          </motion.div>

          {/* Main Titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animStep >= 7 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1 mb-4"
          >
            <span className="font-mono text-sm tracking-[0.4em] text-[#38E39A] font-bold block">
              IGNITRRON'26
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl tracking-tight text-[#F4F5F3] leading-none">
              MARVEL <span className="text-[#38E39A] font-mono glow-text">QUIZ</span>
            </h1>
          </motion.div>

          {/* Subtitle Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animStep >= 7 ? 1 : 0, y: animStep >= 7 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-lg sm:text-2xl font-bold tracking-wide text-[#B99A45] mb-6"
          >
            THE GOD OF MISCHIEF HAS ALTERED THE TIMELINE.
          </motion.div>

          {/* Official Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animStep >= 7 ? 1 : 0, y: animStep >= 7 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-[#8E9A94] max-w-lg mb-10 font-normal leading-relaxed"
          >
            "Test your knowledge of Marvel characters, movies, storylines, and iconic moments."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animStep >= 7 ? 1 : 0, y: animStep >= 7 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                sounds.playPortalHum();
                onStartQuiz();
              }}
              onMouseEnter={() => {
                sounds.playHover();
                setIsCtaHovered(true);
              }}
              onMouseLeave={() => setIsCtaHovered(false)}
              className="btn-timeline-glow w-full sm:w-auto px-8 py-4 rounded-2xl font-mono text-sm tracking-wider text-[#F4F5F3] font-bold shadow-emerald-lg flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <Play className="w-5 h-5 fill-[#38E39A] text-[#38E39A] group-hover:scale-125 transition-transform" />
              <span>ENTER THE TIMELINE</span>
              <Sparkles className="w-4 h-4 text-[#B99A45] opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>

            <a
              href="#about"
              onClick={() => {
                sounds.playClick();
                if (onExplore) onExplore();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-panel glass-panel-hover font-mono text-sm tracking-wider text-[#8E9A94] hover:text-[#38E39A] flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#16A66A]" />
              <span>EXPLORE THE EVENT</span>
            </a>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Provided Official Loki Hero Image Composition (45-55% width desktop) */}
        <div className="lg:col-span-6 flex items-center justify-center relative my-4 lg:my-0">
          
          {/* Subtle Rotating Temporal Portal behind Loki */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-dashed border-[#38E39A]/30 animate-portal-spin" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dotted border-[#B99A45]/30 animate-portal-spin-reverse" />
          </div>

          {/* Parallax Container */}
          <motion.div
            onMouseEnter={handleLokiHover}
            onMouseLeave={() => setIsLokiHovered(false)}
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * -0.5}deg) rotateX(${mousePos.y * 0.5}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
            className="relative w-full max-w-lg cursor-pointer group"
          >
            {/* Canvas Particle & Lightning Overlay (anchored near Loki's raised hand) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            {/* Translucent Illusion Duplicates of Provided Loki Image */}
            <AnimatePresence>
              {(showIllusions || animStep === 5) && (
                <>
                  <motion.img
                    initial={{ opacity: 0.6, x: 0 }}
                    animate={{ opacity: 0, x: -35, filter: 'hue-rotate(60deg) blur(2px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src="/marvel-quiz/loki_hero.jpg"
                    alt="Loki Illusion Duplicate Left"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen"
                  />
                  <motion.img
                    initial={{ opacity: 0.6, x: 0 }}
                    animate={{ opacity: 0, x: 35, filter: 'hue-rotate(-40deg) blur(2px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src="/marvel-quiz/loki_hero.jpg"
                    alt="Loki Illusion Duplicate Right"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-screen"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Primary Provided Loki Image Container with Seamless Soft Gradients & Masking */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: animStep >= 3 ? 1 : 0, scale: animStep >= 3 ? 1 : 0.95 }}
              transition={{ duration: 0.8 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                isLokiHovered ? 'brightness-110 shadow-[0_0_50px_rgba(56,227,154,0.4)]' : ''
              }`}
            >
              {/* The Provided Official Loki Hero Image */}
              <img
                src="/marvel-quiz/loki_hero.jpg"
                alt="Loki - God of Mischief (Ignitrron'26)"
                className="w-full h-auto object-cover rounded-3xl"
              />

              {/* Seamless Blending Overlays: Soft Black Gradient on Left Edge, Vignette on Bottom & Fog */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030504] via-transparent to-transparent opacity-90 w-1/3 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent opacity-80 h-1/3 bottom-0 top-auto pointer-events-none" />
              <div className="absolute inset-0 bg-[#16A66A]/10 mix-blend-color-dodge pointer-events-none" />
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
