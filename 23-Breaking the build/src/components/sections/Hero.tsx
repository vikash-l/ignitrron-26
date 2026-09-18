import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowUpRight, User } from 'lucide-react';
import { eventData } from '../../data/event';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll Progress for smooth cinematic scroll transition into Session
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

  // Spring physics for smooth tilt and parallax (3-5 deg max)
  const springConfig = { stiffness: 140, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3-Layer Depth Transforms (Restrained 3D Tilt: ~3-5 degrees)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4.5, -4.5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-4.5, 4.5]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-7, 7]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-7, 7]);

  // Layer 2 (Orbital Geometry): Medium translation & counter parallax
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
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Interactive Cursor-Responsive Crimson & Ember Environmental Spotlight */}
      <motion.div
        className="absolute w-full max-w-[650px] h-[650px] rounded-full pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, #B42318 0%, #F97316 40%, transparent 70%)',
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
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#120A08]/90 border border-[#7F1D1D]/50 text-[#F97316] font-mono-tech text-[11px] uppercase tracking-widest mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                <span>{eventData.festName}</span>
                <span className="text-[#6E6762]">|</span>
                <span>GAME DEV INTERACTION</span>
              </motion.div>

              {/* Step 2 & 3: Main Heading */}
              <h1 
                className="uppercase text-[#F5F1ED] font-display leading-[0.88] tracking-tight mb-5"
                style={{ fontSize: 'clamp(3.2rem, 8.5vw, 6.8rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#F5F1ED]"
                >
                  BREAKING
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #EF4444 0%, #F97316 60%, #F59E0B 100%)' }}
                >
                  THE BUILD
                </motion.span>
              </h1>

              {/* Step 4: Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-px w-8 bg-[#F97316]/60 hidden sm:block" />
                <p className="text-[#F97316] font-mono-tech text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold">
                  "{eventData.tagline}"
                </p>
              </motion.div>

              {/* Step 5: Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#A8A09A] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal mb-8"
              >
                {eventData.description}
              </motion.p>

              {/* Step 6: Metadata Spec Chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0 mb-9"
              >
                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">DATE</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-medium whitespace-nowrap">{eventData.dateShort}</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#EF4444] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">TIME</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-medium">9 AM – 1 PM</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">VENUE</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-medium truncate">CSE GALAXY</div>
                  </div>
                </div>

                <div className="tech-panel px-3 py-2.5 rounded flex items-center gap-2">
                  <User className="h-4 w-4 text-[#F59E0B] flex-shrink-0" />
                  <div>
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">SLOT</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-medium">INDIVIDUAL</div>
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
                  className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#B42318]/30 hover:shadow-[#EF4444]/50 transition-all duration-200 cursor-pointer no-underline"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="h-4 w-4 text-[#F59E0B]" />
                </a>

                <button
                  onClick={() => scrollToSection('session')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded tech-panel hover:bg-[#24100D]/50 text-[#A8A09A] hover:text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer text-center"
                >
                  VIEW DETAILS
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D Tilt Character Artwork with 3-Layer Depth (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]">
            
            {/* LAYER 1: Background Atmospheric Glow (Subtle Parallax) */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute inset-0 w-[125%] h-[125%] -left-[12%] -top-[12%] rounded-full opacity-40 blur-[100px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, #B42318 0%, #7F1D1D 45%, transparent 75%)' }}
              />
            </motion.div>

            {/* LAYER 2: Cosmic Orbital Geometry (Medium Parallax) */}
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
                  stroke="rgba(249, 115, 22, 0.25)" 
                  strokeWidth="1.2" 
                  strokeDasharray="6 8"
                />
                <ellipse 
                  cx="250" cy="250" rx="235" ry="170" 
                  stroke="rgba(180, 35, 24, 0.3)" 
                  strokeWidth="1" 
                  transform="rotate(-25 250 250)"
                />
                <circle cx="250" cy="250" r="140" stroke="rgba(245, 158, 11, 0.18)" strokeWidth="0.8" />
              </svg>
            </motion.div>

            {/* LAYER 3: Character Artwork with 3D Tilt & Scroll Parallax */}
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
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/90 border border-[#7F1D1D]/40">
                {/* Character Artwork */}
                <img
                  src={eventData.characterImage}
                  alt="Breaking the Build Artwork"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  style={{
                    filter: 'drop-shadow(0 0 35px rgba(180, 35, 24, 0.35))',
                  }}
                />

                {/* Soft Edge Blending Gradients */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #030304 0%, rgba(7, 5, 6, 0.35) 30%, transparent 60%, rgba(7, 5, 6, 0.25) 100%)',
                  }}
                />
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 45px 15px #030304',
                  }}
                />

                {/* Minimal Technical HUD Overlays (No //, No Theme mentions) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#F97316] font-semibold tracking-widest">
                    {eventData.festName}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-[#120A08]/90 border border-[#7F1D1D]/60 text-[#F5F1ED] uppercase font-medium">
                    GAME DEV SESSION
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#A8A09A] uppercase tracking-wider">
                    {eventData.venue}
                  </span>
                  <span className="font-mono-tech text-xs text-[#F97316] font-bold">
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
