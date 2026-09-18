import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Cpu, ArrowUpRight, Navigation, ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { resolveAsset } from '../../utils/assetLoader';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>(eventData.characterImage);

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

  // 3-Layer Depth Transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-6, 6]);

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
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Interactive Cursor-Responsive Ambient Environmental Lighting */}
      <motion.div
        className="absolute w-full max-w-[700px] h-[700px] rounded-full pointer-events-none opacity-15 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, #A30F18 0%, #191C20 40%, transparent 70%)',
          x: isHovered && !reducedMotion ? lightX : '50%',
          y: isHovered && !reducedMotion ? lightY : '30%',
          translateX: '-50%',
          translateY: '-50%',
          transition: isHovered ? 'none' : 'all 0.8s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* LEFT COLUMN: Reference Composition & Hierarchy (~54% width) */}
          <motion.div 
            style={{ 
              opacity: reducedMotion ? 1 : heroContentOpacity,
              y: reducedMotion ? 0 : heroContentY,
            }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div>
              {/* Supporting Label Badge with Dark Red Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111316]/90 border border-[#25292E] text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#A30F18] animate-pulse" />
                <span className="text-[#9A9DA1]">{eventData.festName}</span>
                <span className="text-[#4A5056]">|</span>
                <span className="text-[#E8E8E8] font-medium">{eventData.categoryLabel}</span>
              </motion.div>

              {/* Main Heading: PATH PILOT (Industrial Military Identification Lettering) */}
              <h1 
                className="uppercase font-display leading-[0.84] tracking-tight mb-4 select-none"
                style={{ fontSize: 'clamp(4.5rem, 11vw, 8.5rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#E8E8E8]"
                >
                  {eventData.titleLine1}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #E8E8E8 0%, #E8E8E8 60%, #9A9DA1 100%)' }}
                >
                  {eventData.titleLine2}
                </motion.span>
              </h1>

              {/* Tagline: Dark Red with subtle glow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mb-5 flex items-center justify-center lg:justify-start gap-2.5"
              >
                <div className="h-[2px] w-6 bg-[#A30F18]" />
                <p className="text-[#A30F18] font-mono-tech text-xs sm:text-sm tracking-[0.18em] uppercase font-bold glow-red">
                  "{eventData.tagline}"
                </p>
              </motion.div>

              {/* Supporting Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#9A9DA1] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal mb-8"
              >
                {eventData.description}
              </motion.p>

              {/* Event Information Cards: Armored HUD Modules */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl mx-auto lg:mx-0 mb-8 space-y-3"
              >
                {/* Row 1: DATE, TIME, TEAMS */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                  {/* DATE */}
                  <div className="tech-card-meta px-3.5 py-2.5 rounded-xl flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-[#A30F18] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono-tech text-[#777D83] uppercase font-bold tracking-wider">DATE</div>
                      <div className="text-xs font-mono-tech text-[#E8E8E8] font-bold tracking-wide mt-0.5">{eventData.date}</div>
                    </div>
                  </div>

                  {/* TIME */}
                  <div className="tech-card-meta px-3.5 py-2.5 rounded-xl flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#A30F18] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono-tech text-[#777D83] uppercase font-bold tracking-wider">TIME</div>
                      <div className="text-xs font-mono-tech text-[#E8E8E8] font-bold tracking-wide mt-0.5">{eventData.time}</div>
                    </div>
                  </div>

                  {/* TEAMS */}
                  <div className="tech-card-meta px-3.5 py-2.5 rounded-xl flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#A30F18] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono-tech text-[#777D83] uppercase font-bold tracking-wider">TEAMS</div>
                      <div className="text-xs font-mono-tech text-[#E8E8E8] font-bold tracking-wide mt-0.5">{eventData.maxTeams}</div>
                    </div>
                  </div>
                </div>

                {/* Row 2: TEAM SIZE & VENUE */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  {/* TEAM SIZE */}
                  <div className="sm:col-span-4 tech-card-meta px-3.5 py-2.5 rounded-xl flex items-center gap-3">
                    <Cpu className="h-4 w-4 text-[#A30F18] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono-tech text-[#777D83] uppercase font-bold tracking-wider">TEAM SIZE</div>
                      <div className="text-xs font-mono-tech text-[#E8E8E8] font-bold tracking-wide mt-0.5">{eventData.teamSize}</div>
                    </div>
                  </div>

                  {/* VENUE */}
                  <div className="sm:col-span-8 tech-card-meta px-3.5 py-2.5 rounded-xl flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#A30F18] flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono-tech text-[#777D83] uppercase font-bold tracking-wider">VENUE</div>
                      <div className="text-xs font-mono-tech text-[#E8E8E8] font-bold mt-0.5 leading-snug whitespace-normal break-words">{eventData.venue}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons: Primary REGISTER NOW & Secondary VIEW TRACK */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href={eventData.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#A30F18] hover:bg-[#D51F2A] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 glow-btn-red transition-all duration-200 cursor-pointer no-underline"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="h-4 w-4 text-[#FFFFFF]" />
                </a>

                <button
                  onClick={() => scrollToSection('track')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#111316] hover:bg-[#191C20] text-[#9A9DA1] hover:text-[#E8E8E8] border border-[#4A5056] hover:border-[#A30F18] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#777D83]" />
                  <span>VIEW TRACK</span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Futuristic Armored Weapons/Robotics Interface Frame (~46% width) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1000px]">
            
            {/* Ambient Dark Red Glow Emitter Behind Image */}
            <motion.div
              className="absolute inset-0 w-[130%] h-[130%] -left-[15%] -top-[15%] rounded-full opacity-25 blur-[100px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle at 65% 55%, #A30F18 0%, #191C20 50%, transparent 75%)' }}
              />
            </motion.div>

            {/* Robotic System Visual Container with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                rotateX: reducedMotion ? 0 : rotateX,
                rotateY: reducedMotion ? 0 : rotateY,
                x: cardX,
                y: reducedMotion ? cardY : useTransform(() => cardY.get() + artworkScrollY.get()),
                scale: reducedMotion ? 1 : artworkScrollScale,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-full max-w-[390px] sm:max-w-full max-w-[440px] z-10"
            >
              {/* Integrated Artwork Container with Robotics Tactical HUD Styling */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black border border-[#25292E] robot-card">
                
                {/* Robot / System Visualization Image */}
                <img
                  src={imgSrc}
                  onError={() => setImgSrc(resolveAsset())}
                  alt="Path Pilot Autonomous Robotic System"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
                  style={{
                    filter: 'drop-shadow(0 0 35px rgba(163, 15, 24, 0.2))',
                  }}
                />

                {/* Soft Bottom Edge Blending Gradient */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(5, 5, 5, 0.96) 0%, rgba(5, 5, 5, 0.45) 30%, transparent 60%, rgba(5, 5, 5, 0.2) 100%)',
                  }}
                />

                {/* Corner Reticle Brackets in Dark Red */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#A30F18] pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#A30F18] pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#A30F18] pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#A30F18] pointer-events-none" />

                {/* Laser Scanline */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A30F18] to-transparent pointer-events-none animate-scanline" />

                {/* Top HUD Micro-Overlays */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-mono-tech text-[11px] text-[#A30F18] font-bold tracking-wider">
                    [ AUTONOMOUS SYSTEM ]
                  </span>
                  <span className="font-mono-tech text-[10px] px-2.5 py-0.5 rounded border border-[#25292E] bg-[#111316]/90 text-[#E8E8E8] font-bold tracking-wide">
                    250×250 MM MAX
                  </span>
                </div>

                {/* Bottom HUD Micro-Overlays */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="font-mono-tech text-[9px] text-[#777D83] uppercase tracking-wider block">
                      ORGANIZED BY
                    </span>
                    <span className="font-mono-tech text-xs text-[#E8E8E8] font-bold tracking-wider">
                      {eventData.organizer}
                    </span>
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#E8E8E8] bg-[#191C20]/90 border border-[#A30F18]/50 px-2.5 py-1 rounded-md font-bold flex items-center gap-1.5 shadow-sm shadow-[#A30F18]/20">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#A30F18]" />
                    BATTERY &lt; 16.8V
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



