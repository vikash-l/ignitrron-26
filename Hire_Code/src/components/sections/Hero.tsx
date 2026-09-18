import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowUpRight, Timer } from 'lucide-react';
import { eventData } from '../../data/event';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll Progress for smooth cinematic scroll transition into Workshop section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const artworkScrollY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const artworkScrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  // Mouse coordinates relative to card center [-0.5, 0.5]
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

  // Spring physics for smooth tilt and parallax (3-5 deg max)
  const springConfig = { stiffness: 140, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3-Layer Depth Transforms (Restrained 3D Tilt: ~3-5 degrees)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4.5, -4.5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-4.5, 4.5]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-7, 7]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-7, 7]);

  // Layer 2 (Holographic Geometry): Medium translation & counter parallax
  const geomX = useTransform(smoothMouseX, [-0.5, 0.5], [-18, 18]);
  const geomY = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);

  // Layer 1 (Atmospheric Glow): Subtle slow translation
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

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
      id="overview" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Interactive Cursor-Responsive Emerald & Cyan Environmental Spotlight */}
      <motion.div
        className="absolute w-full max-w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #00BFA6 0%, #22D3EE 40%, transparent 70%)',
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
              {/* Step 1: Technical Eyebrow Badge (No //) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#08131C]/90 border border-[#00BFA6]/40 text-[#22D3EE] font-mono-tech text-[11px] uppercase tracking-widest mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6] animate-pulse" />
                <span>{eventData.festName}</span>
                <span className="text-[#526371]">|</span>
                <span>INTERACTIVE WORKSHOP</span>
              </motion.div>

              {/* Step 2 & 3: Main Heading */}
              <h1 
                className="uppercase text-[#E8EEF2] font-display leading-[0.88] tracking-tight mb-5"
                style={{ fontSize: 'clamp(3.4rem, 8.5vw, 7rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#E8EEF2]"
                >
                  THE HIRE
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #00BFA6 0%, #22D3EE 65%, #D6B86A 100%)' }}
                >
                  CODE
                </motion.span>
              </h1>

              {/* Step 4: Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-px w-8 bg-[#00BFA6]/60 hidden sm:block" />
                <p className="text-[#22D3EE] font-mono-tech text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
                  "{eventData.tagline}"
                </p>
              </motion.div>

              {/* Step 5: Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#8997A3] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal mb-8"
              >
                {eventData.description}
              </motion.p>

              {/* Step 6: Metadata Spec Cards (Spacious, High-Visibility 2x2 Grid) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto lg:mx-0 mb-9"
              >
                {/* DATE CARD */}
                <div className="tech-panel p-4 rounded-xl flex items-center gap-3.5 border border-[#00BFA6]/40 bg-[#08131C]/95 shadow-lg hover:border-[#22D3EE]/60 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-[#05070A] border border-[#00BFA6]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#22D3EE]/70 group-hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] transition-all shadow-inner">
                    <Calendar className="h-5 w-5 text-[#00BFA6] group-hover:text-[#22D3EE] transition-colors" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1.5 font-bold">
                      EVENT DATE
                    </div>
                    <div className="text-sm font-mono-tech text-[#E8EEF2] font-bold tracking-wide leading-tight">
                      19 SEPTEMBER 2026
                    </div>
                  </div>
                </div>

                {/* TIME CARD */}
                <div className="tech-panel p-4 rounded-xl flex items-center gap-3.5 border border-[#00BFA6]/40 bg-[#08131C]/95 shadow-lg hover:border-[#22D3EE]/60 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-[#05070A] border border-[#22D3EE]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#22D3EE]/70 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all shadow-inner">
                    <Clock className="h-5 w-5 text-[#22D3EE] group-hover:text-[#00BFA6] transition-colors" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1.5 font-bold">
                      SESSION TIME
                    </div>
                    <div className="text-sm font-mono-tech text-[#E8EEF2] font-bold tracking-wide leading-tight">
                      10:00 AM – 1:00 PM
                    </div>
                  </div>
                </div>

                {/* VENUE CARD */}
                <div className="tech-panel p-4 rounded-xl flex items-center gap-3.5 border border-[#00BFA6]/40 bg-[#08131C]/95 shadow-lg hover:border-[#00BFA6]/60 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-[#05070A] border border-[#00BFA6]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#22D3EE]/70 group-hover:shadow-[0_0_15px_rgba(0,191,166,0.3)] transition-all shadow-inner">
                    <MapPin className="h-5 w-5 text-[#00BFA6] group-hover:text-[#22D3EE] transition-colors" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1.5 font-bold">
                      EVENT VENUE
                    </div>
                    <div className="text-sm font-mono-tech text-[#E8EEF2] font-bold tracking-wide leading-tight">
                      NEW 360 HALL
                    </div>
                  </div>
                </div>

                {/* DURATION CARD */}
                <div className="tech-panel p-4 rounded-xl flex items-center gap-3.5 border border-[#00BFA6]/40 bg-[#08131C]/95 shadow-lg hover:border-[#D6B86A]/60 transition-colors group">
                  <div className="w-11 h-11 rounded-lg bg-[#05070A] border border-[#D6B86A]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#D6B86A]/70 group-hover:shadow-[0_0_15px_rgba(214,184,106,0.3)] transition-all shadow-inner">
                    <Timer className="h-5 w-5 text-[#D6B86A] group-hover:text-[#22D3EE] transition-colors" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1.5 font-bold">
                      WORKSHOP DURATION
                    </div>
                    <div className="text-sm font-mono-tech text-[#E8EEF2] font-bold tracking-wide leading-tight">
                      3 HOURS
                    </div>
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
                  className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#00BFA6] hover:bg-[#22D3EE] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#00BFA6]/30 hover:shadow-[#22D3EE]/50 transition-all duration-200 cursor-pointer no-underline"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="h-4 w-4 text-[#05070A]" />
                </a>

                <button
                  onClick={() => scrollToSection('workshop')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded tech-panel hover:bg-[#0B1720]/80 text-[#8997A3] hover:text-[#E8EEF2] border border-[#00BFA6]/30 hover:border-[#22D3EE]/50 font-mono-tech text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer text-center"
                >
                  EXPLORE WORKSHOP
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D Tilt Character Artwork with 3-Layer Depth (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]">
            
            {/* LAYER 1: Background Emerald Rim Glow (Subtle Parallax) */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute inset-0 w-[125%] h-[125%] -left-[12%] -top-[12%] rounded-full opacity-35 blur-[100px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, #00BFA6 0%, #08131C 50%, transparent 75%)' }}
              />
            </motion.div>

            {/* LAYER 2: Holographic Scanning Geometry & Concentric Rings (Medium Parallax) */}
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
                  stroke="rgba(0, 191, 166, 0.22)" 
                  strokeWidth="1.2" 
                  strokeDasharray="6 8"
                />
                <ellipse 
                  cx="250" cy="250" rx="235" ry="170" 
                  stroke="rgba(34, 211, 238, 0.25)" 
                  strokeWidth="1" 
                  transform="rotate(-25 250 250)"
                />
                <circle cx="250" cy="250" r="140" stroke="rgba(214, 184, 106, 0.18)" strokeWidth="0.8" />
              </svg>
            </motion.div>

            {/* LAYER 3: Character Artwork with Emerald Rim Glow, Cyan Edge Lighting & 3D Tilt */}
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
              {/* Integrated Artwork Container with Controlled Atmospheric Edge Fading */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-[#00BFA6]/40">
                {/* Character Artwork */}
                <img
                  src={eventData.characterImage}
                  alt="The Hire Code Official Artwork"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  style={{
                    filter: 'drop-shadow(0 0 35px rgba(0, 191, 166, 0.35))',
                  }}
                />

                {/* Soft Edge Blending Gradients */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #05070A 0%, rgba(8, 19, 28, 0.35) 30%, transparent 60%, rgba(8, 19, 28, 0.25) 100%)',
                  }}
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 45px 15px #05070A',
                  }}
                />

                {/* Minimal Technical HUD Overlays (No //, No theme mentions) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#22D3EE] font-semibold tracking-widest">
                    {eventData.festName}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#08131C]/90 border border-[#00BFA6]/50 text-[#E8EEF2] uppercase font-medium">
                    INTERACTIVE WORKSHOP
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#8997A3] uppercase tracking-wider">
                    {eventData.venue}
                  </span>
                  <span className="font-mono-tech text-xs text-[#00BFA6] font-bold">
                    {eventData.dateShort}
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

