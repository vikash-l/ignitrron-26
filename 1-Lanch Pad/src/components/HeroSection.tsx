import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/soundFx';
import spidermanImg from '../assets/spiderman.png';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onScrollToMystery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
  onScrollToMystery,
}) => {
  // Subtle mouse position tracking for parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle scroll parallax
  const { scrollY } = useScroll();
  const spidermanScrollY = useTransform(scrollY, [0, 600], [0, 80]);
  const spidermanOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const webPathLength = useTransform(scrollY, [0, 600], [1, 1.4]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-speed-lines">
      {/* Background Subtle Halftone Grid Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none z-0" />

      {/* Spider-web intersecting lines SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Red Web Line travelling diagonally across screen */}
        <motion.path
          d="M -100 200 L 1100 800"
          stroke="#ff003c"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          style={{
            transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6}px, 0)`,
          }}
        />
        {/* Blue Intersecting Web Line */}
        <motion.path
          d="M 1100 150 L -100 850"
          stroke="#00f0ff"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, delay: 0.8, ease: 'easeInOut' }}
          style={{
            transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`,
          }}
        />

        {/* Dedicated Web Strand connecting from Spider-Man's direction down toward Mystery Box section */}
        <motion.path
          d="M 800 300 Q 650 550 500 1000"
          stroke="#00f0ff"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
          style={{ pathLength: webPathLength, opacity: 0.7 }}
        />

        {/* Intersection Graphic Node */}
        <motion.circle
          cx="500"
          cy="500"
          r="6"
          fill="#ffffff"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.8, 1] }}
          transition={{ delay: 2.5, duration: 0.5 }}
        />
      </svg>

      {/* Dynamic Radial Spotlight Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#ff003c]/20 via-[#00f0ff]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* CRISP, SMALL SPIDER-MAN CAMEO (UPPER-RIGHT / RIGHT SIDE - 20-25% VW TARGET) */}
      <motion.div
        style={{
          y: spidermanScrollY,
          opacity: spidermanOpacity,
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0)`,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 0.95, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-24 sm:top-28 md:top-32 right-3 sm:right-8 md:right-14 lg:right-20 z-10 w-[160px] sm:w-[220px] md:w-[270px] lg:w-[320px] max-w-[28vw] pointer-events-none select-none transition-transform duration-100 ease-out"
      >
        <div className="relative w-full h-auto p-2 bg-[#121216]/40 rounded-2xl border border-white/10 shadow-lg backdrop-blur-xs overflow-hidden">
          {/* Crisp, Unstretched Image container */}
          <img
            src={spidermanImg}
            alt="Spider-Man swinging visual cameo"
            className="w-full h-auto object-contain filter contrast-110 brightness-95 drop-shadow-[0_0_20px_rgba(255,0,60,0.3)]"
          />

          {/* Dark Edge Vignette Masking */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/80 via-transparent to-transparent pointer-events-none" />

          {/* Subtle Red & Cyan Rim Lighting Overlays */}
          <div className="absolute inset-0 border border-[#ff003c]/30 rounded-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-full h-full bg-radial from-[#00f0ff]/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Hero Typography & Content Container (Left / Center Dominant - Z-INDEX 20 HIGHEST PRIORITY) */}
      <div
        className="relative z-20 max-w-5xl mx-auto text-center md:text-left flex flex-col items-center md:items-start"
        style={{
          transform: `translate3d(${mousePos.x * 4}px, ${mousePos.y * 4}px, 0)`,
        }}
      >
        {/* EVENT 01 Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#121216]/90 border border-[#ff003c] rounded text-[#ff003c] font-space text-xs sm:text-sm tracking-widest font-bold uppercase mb-6 shadow-[0_0_15px_rgba(255,0,60,0.3)] clip-comic-badge backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-[#00f0ff] animate-spin" />
          <span>IGNITRRON • EVENT 01</span>
        </motion.div>

        {/* Huge Display Title: LAUNCHPAD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="relative mb-2 w-full"
        >
          {/* Comic Shadow Duplication */}
          <h1 className="font-anton text-7xl sm:text-9xl md:text-[11rem] leading-none tracking-tight text-white uppercase select-none drop-shadow-[6px_6px_0px_#ff003c]">
            LAUNCHPAD
          </h1>

          {/* Floating Speed Line Accents around Title */}
          <div className="absolute -top-6 left-0 text-[#00f0ff] font-bebas text-2xl tracking-widest hidden sm:block animate-pulse">
            // OFFICIAL ISSUE #01
          </div>
        </motion.div>

        {/* NEW BRAND. YOUR BRAND. */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="font-bebas text-3xl sm:text-5xl md:text-6xl text-[#00f0ff] tracking-wider mb-4 uppercase drop-shadow-[3px_3px_0px_#0a0a0c]"
        >
          NEW BRAND. YOUR BRAND.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="font-space text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl font-medium mb-6 backdrop-blur-xs"
        >
          A hands-on branding challenge by the <span className="text-white font-bold underline decoration-[#ff003c] decoration-2">Design Club</span>
        </motion.p>

        {/* Comic Line: EVERY BRAND HAS AN ORIGIN STORY. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          className="relative inline-block px-6 py-2 bg-[#ff003c]/15 border-y-2 border-[#ff003c] mb-10 transform -rotate-1 backdrop-blur-sm shadow-spider-red"
        >
          <p className="font-bebas text-xl sm:text-3xl text-[#ff003c] tracking-widest uppercase">
            EVERY BRAND HAS AN ORIGIN STORY.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => {
              soundFx.playWebShoot();
              onOpenRegister();
            }}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff003c] text-white font-bebas text-2xl tracking-wider rounded border-2 border-white shadow-spider-red hover:bg-[#ff003c]/90 hover:shadow-glow-red transition-all duration-200 active:translate-y-1"
          >
            <span>ENTER THE CHALLENGE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              soundFx.playClick();
              onScrollToMystery();
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#121216] text-gray-200 font-bebas text-2xl tracking-wider rounded border-2 border-[#00f0ff]/50 hover:border-[#00f0ff] hover:text-white hover:shadow-spider-blue transition-all duration-200"
          >
            SCROLL TO DISCOVER
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          onClick={onScrollToMystery}
          className="mt-14 flex flex-col items-center md:items-start cursor-pointer text-gray-400 hover:text-[#00f0ff] transition-colors group"
        >
          <span className="font-space text-xs tracking-widest uppercase mb-2 group-hover:tracking-wider transition-all">
            SCROLL DOWN TO UNLOCK
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce text-[#ff003c]" />
        </motion.div>
      </div>
    </section>
  );
};
