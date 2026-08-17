import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { comingSoonData } from '../../data/event';
import { MysticPortal } from '../portal/MysticPortal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll Progress for cinematic scroll transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const artworkScrollY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const artworkScrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const portalScrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const portalScrollOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  // Normalized mouse coordinates relative to container center [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spotlight coordinates
  const lightX = useMotionValue(200);
  const lightY = useMotionValue(200);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Spring physics for smooth restrained parallax
  const springConfig = { stiffness: 100, damping: 22, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax shifts for multi-layered depth
  // Character subtly shifts opposite to mouse
  const charX = useTransform(smoothMouseX, [-0.5, 0.5], [12, -12]);
  const charY = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);
  const charRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const charRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);
  const charCombinedY = useTransform(
    [charY, artworkScrollY],
    ([latestY, latestScrollY]) => (latestY as number) + (latestScrollY as number)
  );

  // Portal layers shift in different depth ratios
  const portalX = useTransform(smoothMouseX, [-0.5, 0.5], [-18, 18]);
  const portalY = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);

  // Background atmospheric glow
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

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

  const scrollToNext = () => {
    const element = document.getElementById('next-chapter');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Interactive Cursor-Responsive Mystic Light Haze */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #35E6A1 0%, #16A36A 40%, transparent 70%)',
          x: isHovered && !reducedMotion ? lightX : '50%',
          y: isHovered && !reducedMotion ? lightY : '30%',
          translateX: '-50%',
          translateY: '-50%',
          transition: isHovered ? 'none' : 'all 0.8s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* LEFT COLUMN: Cinematic Display Typography & Identity (7 Cols) */}
          <motion.div 
            style={{ 
              opacity: reducedMotion ? 1 : heroContentOpacity,
              y: reducedMotion ? 0 : heroContentY,
            }}
            className="lg:col-span-7 text-center lg:text-left z-20"
          >
            <div>
              {/* Step 1: Technical Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#08110E]/90 border border-[#16A36A]/40 text-[#7CFFCB] font-mono-tech text-[11px] uppercase tracking-[0.25em] mb-6 shadow-sm shadow-[#16A36A]/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#35E6A1] animate-ping" />
                <span>{comingSoonData.festName}</span>
                <span className="text-[#82958C]/50">|</span>
                <span className="text-[#D8E7DF]">{comingSoonData.status}</span>
              </motion.div>

              {/* Step 2: Main Coming Soon Heading */}
              <h1 
                className="uppercase text-[#F1F5F2] font-display leading-[0.88] tracking-tight mb-6"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 8.5rem)' }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#F1F5F2] tracking-wider"
                >
                  {comingSoonData.mainHeading.line1}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-transparent bg-clip-text tracking-wider glow-arcane"
                  style={{ backgroundImage: 'linear-gradient(to right, #7CFFCB 0%, #35E6A1 50%, #16A36A 100%)' }}
                >
                  {comingSoonData.mainHeading.line2}
                </motion.span>
              </h1>

              {/* Step 3: Supporting Statement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="h-px w-10 bg-[#35E6A1]/60 hidden sm:block" />
                <p className="text-[#7CFFCB] font-mono-tech text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                  "{comingSoonData.tagline}"
                </p>
              </motion.div>

              {/* Step 4: Descriptive Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#82958C] text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal mb-10"
              >
                {comingSoonData.supportingCopy}
              </motion.p>

              {/* Step 5: Understated CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={scrollToNext}
                  className="group px-7 py-3.5 rounded-lg bg-[#08110E] hover:bg-[#0A1512] border border-[#16A36A]/50 hover:border-[#35E6A1] text-[#F1F5F2] font-mono-tech text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg shadow-[#16A36A]/15 hover:shadow-[#16A36A]/35 cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-[#35E6A1] transition-transform group-hover:rotate-12" />
                  <span>EXPLORE IGNITRRON 26</span>
                  <ArrowUpRight className="h-4 w-4 text-[#7CFFCB] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Dimensional Character Artwork & Mystic Portal (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative [perspective:1200px] min-h-[480px] sm:min-h-[560px]">
            
            {/* ATMOSPHERIC GLOW LAYER */}
            <motion.div
              style={{
                x: glowX,
                y: glowY,
              }}
              className="absolute inset-0 w-[130%] h-[130%] -left-[15%] -top-[15%] rounded-full opacity-35 blur-[90px] pointer-events-none"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, #35E6A1 0%, #16A36A 45%, #050807 75%)' }}
              />
            </motion.div>

            {/* MYSTICAL PORTAL RINGS (Behind & Surrounding Character) */}
            <motion.div
              style={{
                x: portalX,
                y: portalY,
                scale: reducedMotion ? 1 : portalScrollScale,
                opacity: reducedMotion ? 1 : portalScrollOpacity,
              }}
              className="absolute -inset-16 sm:-inset-24 w-[135%] sm:w-[150%] h-[135%] sm:h-[150%] pointer-events-none z-0 flex items-center justify-center"
            >
              <MysticPortal reducedMotion={reducedMotion} className="w-full h-full" />
            </motion.div>

            {/* CHARACTER ARTWORK: Seamlessly integrated with rim lighting & soft edge blend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                x: charX,
                y: reducedMotion ? charY : charCombinedY,
                rotateX: reducedMotion ? 0 : charRotateX,
                rotateY: reducedMotion ? 0 : charRotateY,
                scale: reducedMotion ? 1 : artworkScrollScale,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] z-10 select-none pointer-events-none"
            >
              <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                
                {/* Emerald Rim Lighting Silhouette & Glow Filter */}
                <div 
                  className="absolute inset-0 rounded-full blur-[40px] opacity-60 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(53, 230, 161, 0.5) 0%, rgba(22, 163, 106, 0.2) 50%, transparent 80%)',
                  }}
                />

                {/* Character Image */}
                <img
                  src={comingSoonData.characterImage}
                  alt="IGNITRRON 26 Experience Reveal Artwork"
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-110"
                  style={{
                    filter: 'drop-shadow(0 0 45px rgba(22, 163, 106, 0.45)) drop-shadow(0 0 15px rgba(53, 230, 161, 0.3))',
                    maskImage: 'radial-gradient(ellipse 85% 90% at 50% 45%, black 45%, rgba(0,0,0,0.6) 70%, transparent 95%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 45%, black 45%, rgba(0,0,0,0.6) 70%, transparent 95%)',
                  }}
                />

                {/* Dimensional Environmental Fog Overlays */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #050807 0%, rgba(5, 8, 7, 0.4) 30%, transparent 60%, rgba(5, 8, 7, 0.3) 100%)',
                  }}
                />

                {/* Arcane Vignette Depth */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 50px 25px #050807',
                  }}
                />

                {/* Subtle Floating Mystic Rune Nodes */}
                <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CFFCB] animate-ping" />
                  <span className="font-mono-tech text-[10px] text-[#7CFFCB] tracking-[0.25em] font-bold uppercase drop-shadow-[0_0_8px_#35E6A1]">
                    {comingSoonData.festName}
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 pointer-events-none">
                  <span className="font-mono-tech text-[10px] text-[#82958C] tracking-[0.2em] uppercase">
                    MYSTIC NEXUS
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
