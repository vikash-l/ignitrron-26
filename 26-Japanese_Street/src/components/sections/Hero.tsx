import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin, Compass } from 'lucide-react';
import { eventData } from '../../data/event';
import mainHeroImg from '../../assets/Main.jpg';

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
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  // Layer 2: Geometry parallax
  const geomX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const geomY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

  // Layer 1: Glow translation
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
        className="absolute w-full max-w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #C63C32 0%, #243B63 50%, transparent 75%)',
          x: isHovered && !reducedMotion ? lightX : '50%',
          y: isHovered && !reducedMotion ? lightY : '20%',
          translateX: '-50%',
          translateY: '-50%',
          transition: isHovered ? 'none' : 'all 0.8s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Hero Editorial Narrative & Identity (7 Cols) */}
          <motion.div 
            style={{ 
              opacity: reducedMotion ? 1 : heroContentOpacity,
              y: reducedMotion ? 0 : heroContentY,
            }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div>
              {/* Step 1: Technical Eyebrow Badge (No //) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#101827]/90 border border-[#C9A45C]/35 text-[#F1E8D5] font-mono-tech text-[11px] uppercase tracking-widest mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C63C32] animate-pulse" />
                <span>{eventData.festName}</span>
                <span className="text-stone-600">|</span>
                <span className="text-[#C9A45C] font-semibold">JAPANESE STREET</span>
              </motion.div>

              {/* Step 2: Main Heading */}
              <h1 
                className="uppercase text-[#F1E8D5] font-display leading-[0.88] tracking-tight mb-5"
                style={{ fontSize: 'clamp(3.2rem, 8.5vw, 6.8rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#F1E8D5]"
                >
                  JAPANESE
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #C63C32 0%, #E28C48 50%, #C9A45C 100%)' }}
                >
                  STREET
                </motion.span>
              </h1>

              {/* Step 3: Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-px w-8 bg-[#C63C32]/60 hidden sm:block" />
                <p className="text-[#C9A45C] font-mono-tech text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                  "{eventData.tagline}"
                </p>
              </motion.div>

              {/* Step 4: Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#F1E8D5]/85 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal mb-8"
              >
                {eventData.description}
              </motion.p>

              {/* Step 5: Metadata Spec Chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0 mb-9"
              >
                <div className="ronin-panel px-3.5 py-2.5 rounded flex items-center gap-2.5">
                  <Sparkles className="h-4 w-4 text-[#C63C32] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#9B9A96] uppercase tracking-widest">EXPERIENCE</div>
                    <div className="text-xs font-mono-tech text-[#F1E8D5] font-medium">10 Stalls &amp; Activities</div>
                  </div>
                </div>

                <div className="ronin-panel px-3.5 py-2.5 rounded flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#C9A45C] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#9B9A96] uppercase tracking-widest">VENUES</div>
                    <div className="text-xs font-mono-tech text-[#F1E8D5] font-medium">CAC &amp; BME Walkway</div>
                  </div>
                </div>

                <div className="ronin-panel px-3.5 py-2.5 rounded flex items-center gap-2.5">
                  <Compass className="h-4 w-4 text-[#243B63] flex-shrink-0 text-[#C9A45C]" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#9B9A96] uppercase tracking-widest">FORMAT</div>
                    <div className="text-xs font-mono-tech text-[#F1E8D5] font-medium">Open Street &amp; Stalls</div>
                  </div>
                </div>
              </motion.div>

              {/* Step 6: Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href={eventData.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#C63C32]/30 hover:shadow-[#C63C32]/50 transition-all duration-200 cursor-pointer no-underline border border-[#C9A45C]/35"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="h-4 w-4 text-[#C9A45C]" />
                </a>

                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded ronin-panel hover:bg-[#1A253C] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer text-center border border-[#C9A45C]/30"
                >
                  EXPLORE STREET
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D Tilt Visual Container (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]">
            
            {/* LAYER 1: Background Atmospheric Lantern & Enso Glow */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute inset-0 w-[125%] h-[125%] -left-[12%] -top-[12%] rounded-full opacity-40 blur-[90px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, #C63C32 0%, #C9A45C 40%, transparent 70%)' }}
              />
            </motion.div>

            {/* LAYER 2: Japanese Enso & Geometric Motifs */}
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
                {/* Traditional Enso Circle Arc */}
                <circle 
                  cx="250" cy="250" r="210" 
                  stroke="rgba(201, 164, 92, 0.3)" 
                  strokeWidth="2" 
                  strokeDasharray="24 12 40 8 100 20"
                />
                <ellipse 
                  cx="250" cy="250" rx="230" ry="170" 
                  stroke="rgba(198, 60, 50, 0.35)" 
                  strokeWidth="1.2" 
                  transform="rotate(-25 250 250)"
                />
                <circle cx="250" cy="250" r="140" stroke="rgba(36, 59, 99, 0.5)" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* LAYER 3: Visual Container with 3D Tilt */}
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
              {/* Visual Frame with Gold Hairline & Soft Edge Glow */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-[#C9A45C]/35 bg-[#0E1524]">
                
                {/* Hero Artwork Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={mainHeroImg} 
                    alt="Japanese Street - IGNITRRON 26" 
                    className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>

                {/* Soft Edge Blending Gradients */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #08090C 0%, rgba(8, 9, 12, 0.25) 25%, transparent 55%, rgba(8, 9, 12, 0.35) 100%)',
                  }}
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 35px 10px #08090C',
                  }}
                />

                {/* Minimal Technical HUD Overlays (No //) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#C9A45C] font-semibold tracking-widest">
                    {eventData.festName}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#101827]/90 border border-[#C9A45C]/40 text-[#F1E8D5] uppercase font-medium">
                    JAPANESE STREET
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#9B9A96] uppercase tracking-wider">
                    STREET &amp; STALLS
                  </span>
                  <span className="font-mono-tech text-xs text-[#C9A45C] font-bold">
                    10 ACTIVITIES
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
