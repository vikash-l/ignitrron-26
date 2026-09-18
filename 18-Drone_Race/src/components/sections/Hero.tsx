import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { eventData } from '../../data/event';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll Progress for smooth cinematic scroll transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const artworkScrollY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const artworkScrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Raw mouse coordinates relative to card center [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Normalized cursor coordinates in pixels for ambient spotlight
  const lightX = useMotionValue(200);
  const lightY = useMotionValue(200);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Spring physics for smooth tilt and parallax
  const springConfig = { stiffness: 140, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3-Layer Depth Transforms (Restrained 3D Tilt)
  // Layer 3 (Artwork): Max ±6 deg rotation
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  // Layer 2 (Orbital Geometry): Medium translation & counter parallax
  const geomX = useTransform(smoothMouseX, [-0.5, 0.5], [-22, 22]);
  const geomY = useTransform(smoothMouseY, [-0.5, 0.5], [-22, 22]);

  // Layer 1 (Atmospheric Glow): Subtle slow translation
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    lightX.set(e.clientX - rect.left);
    lightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    if (!reducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Interactive Cursor-Responsive Ambient Environmental Lighting */}
      <motion.div
        className="absolute w-full max-w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #e8a63a 0%, #d6a84f 40%, transparent 70%)',
          x: isHovered && !reducedMotion ? lightX : '50%',
          y: isHovered && !reducedMotion ? lightY : '20%',
          translateX: '-50%',
          translateY: '-50%',
          transition: isHovered ? 'none' : 'all 0.8s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Editorial Event Identity & Sequential Reveal (7 Cols) */}
          <motion.div 
            style={{ 
              opacity: reducedMotion ? 1 : heroContentOpacity,
              y: reducedMotion ? 0 : heroContentY,
            }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div>
              {/* Step 1: Technical Eyebrow Badge (Strictly No //) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0b1012]/90 border border-[#d6a84f]/35 text-[#d6a84f] font-mono-tech text-[11px] uppercase tracking-widest mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2d58a] animate-pulse" />
                <span>{eventData.festName}</span>
                <span className="text-[#65757a]">|</span>
                <span>AEROSPACE ARENA</span>
              </motion.div>

              {/* Step 2 & 3: Main Heading */}
              <h1 
                className="uppercase text-[#f3f3ef] font-display leading-[0.88] tracking-tight mb-5"
                style={{ fontSize: 'clamp(3.4rem, 9vw, 7.2rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#f3f3ef]"
                >
                  DRONE
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #f2d58a 0%, #d6a84f 50%, #e8a63a 100%)' }}
                >
                  RACE
                </motion.span>
              </h1>

              {/* Step 4: Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-px w-8 bg-[#d6a84f]/50 hidden sm:block" />
                <p className="text-[#f2d58a] font-mono-tech text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
                  "{eventData.tagline}"
                </p>
              </motion.div>

              {/* Step 5: Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#879296] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal mb-8"
              >
                {eventData.description}
              </motion.p>

              {/* Step 6: Metadata Spec Chips (4 Metadata Cards) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl mx-auto lg:mx-0 mb-9"
              >
                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2 border-[#d6a84f]/25 bg-[#0b1012]/80 min-w-0">
                  <Calendar className="h-4 w-4 text-[#d6a84f] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono-tech text-[#65757a] uppercase tracking-widest leading-tight">DATE</div>
                    <div className="text-xs font-mono-tech text-[#f3f3ef] font-medium whitespace-nowrap">{eventData.dateShort}</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2 border-[#d6a84f]/25 bg-[#0b1012]/80 min-w-0">
                  <Clock className="h-4 w-4 text-[#d6a84f] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono-tech text-[#65757a] uppercase tracking-widest leading-tight">TIME</div>
                    <div className="text-[11px] lg:text-xs font-mono-tech text-[#f3f3ef] font-medium whitespace-nowrap">{eventData.time}</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2 border-[#d6a84f]/25 bg-[#0b1012]/80 min-w-0">
                  <MapPin className="h-4 w-4 text-[#e8a63a] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono-tech text-[#65757a] uppercase tracking-widest leading-tight">VENUE</div>
                    <div className="text-xs font-mono-tech text-[#f3f3ef] font-medium whitespace-nowrap">{eventData.venue}</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2 border-[#d6a84f]/25 bg-[#0b1012]/80 min-w-0">
                  <Users className="h-4 w-4 text-[#d6a84f] flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[9px] font-mono-tech text-[#65757a] uppercase tracking-widest leading-tight">TEAM</div>
                    <div className="text-xs font-mono-tech text-[#f3f3ef] font-medium whitespace-nowrap">{eventData.teamSize}</div>
                  </div>
                </div>
              </motion.div>

              {/* Step 7: Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href={eventData.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#d6a84f]/25 hover:shadow-[#d6a84f]/45 transition-all duration-200 cursor-pointer no-underline"
                >
                  <span>REGISTER NOW ↗</span>
                </a>

                <button
                  onClick={() => scrollToSection('format')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded tech-panel hover:bg-[#121b1e] border-[#d6a84f]/30 hover:border-[#d6a84f]/60 text-[#879296] hover:text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer text-center"
                >
                  VIEW RACE FORMAT
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D Tilt Character Artwork with 3-Layer Depth (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]">
            
            {/* LAYER 1: Background Atmospheric Amber/Gold Glow */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute inset-0 w-[125%] h-[125%] -left-[12%] -top-[12%] rounded-full opacity-35 blur-[100px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, #e8a63a 0%, #d6a84f 45%, transparent 75%)' }}
              />
            </motion.div>

            {/* LAYER 2: Radar & Flight Trajectory Geometry (Medium Parallax) */}
            <motion.div
              style={{
                x: geomX,
                y: geomY,
              }}
              className="absolute -inset-10 w-[125%] h-[125%] pointer-events-none z-0"
            >
              <svg 
                className="w-full h-full"
                viewBox="0 0 500 500"
                fill="none"
              >
                <circle 
                  cx="250" cy="250" r="210" 
                  stroke="rgba(214, 168, 79, 0.3)" 
                  strokeWidth="1.2" 
                  strokeDasharray="6 8"
                  className="animate-radar-slow origin-center"
                />
                <ellipse 
                  cx="250" cy="250" rx="235" ry="170" 
                  stroke="rgba(232, 166, 58, 0.35)" 
                  strokeWidth="1" 
                  transform="rotate(-25 250 250)"
                  className="animate-radar-reverse origin-center"
                />
                <circle cx="250" cy="250" r="140" stroke="rgba(214, 168, 79, 0.2)" strokeWidth="0.8" />
              </svg>
            </motion.div>

            {/* LAYER 3: Artwork Container with 3D Tilt & Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                rotateX: reducedMotion ? 0 : rotateX,
                rotateY: reducedMotion ? 0 : rotateY,
                x: cardX,
                y: reducedMotion ? cardY : useTransform(() => cardY.get() + artworkScrollY.get()),
                scale: reducedMotion ? 1 : artworkScrollScale,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-full max-w-[380px] sm:max-w-full max-w-[440px] z-10"
            >
              {/* Integrated Artwork Container with Soft Edge Fading */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-[#d6a84f]/35 bg-[#0b1012]">
                {/* Visual Artwork */}
                <img
                  src={eventData.characterImage}
                  alt="Drone Race Arena Showcase Artwork"
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-105"
                  style={{
                    filter: 'drop-shadow(0 0 35px rgba(214, 168, 79, 0.35))',
                  }}
                />

                {/* Soft Edge Blending Gradients */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #050607 0%, rgba(5, 6, 7, 0.35) 30%, transparent 60%, rgba(5, 6, 7, 0.25) 100%)',
                  }}
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 45px 15px #050607',
                  }}
                />

                {/* Technical HUD Overlays (Strictly No //) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#f2d58a] font-semibold tracking-widest bg-[#050607]/80 px-2 py-0.5 rounded border border-[#d6a84f]/30">
                    {eventData.festName}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#0d1416]/90 border border-[#d6a84f]/40 text-[#d6a84f] uppercase font-medium">
                    AEROSPACE ARENA
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#879296] uppercase tracking-wider bg-[#050607]/80 px-2 py-0.5 rounded">
                    {eventData.venue}
                  </span>
                  <span className="font-mono-tech text-xs text-[#f2d58a] font-bold bg-[#050607]/80 px-2 py-0.5 rounded border border-[#d6a84f]/30">
                    OBSTACLE RACE
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
