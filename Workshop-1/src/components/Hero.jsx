import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HudBackgroundAtmosphere } from './HudBackgroundAtmosphere';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] flex flex-col justify-center py-6 lg:py-8 bg-[#09090d] bg-gradient-to-b from-[#0b0a12] via-[#09090d] to-[#0a0a10] overflow-hidden transition-colors duration-300">
      
      {/* ========================================================================= */}
      {/* CINEMATIC LAYERED HUD BACKGROUND ATMOSPHERE (STRICTLY Z-0) */}
      {/* ========================================================================= */}
      <HudBackgroundAtmosphere scrollY={scrollY} />

      {/* ========================================================================= */}
      {/* MAIN HERO CONTENT (PRESERVED EXACTLY ABOVE BACKGROUND WITH Z-10) */}
      {/* ========================================================================= */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* HERO CONTENT GRID: LEFT 54%, RIGHT 46%, SHARED VERTICAL CENTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: ONE UNIFIED CONTENT BLOCK ALIGNED TO EXACT LEFT GRID LINE */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-4">
            
            {/* 1. FEATURED EVENT BADGE */}
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="self-start inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-mono font-bold tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span>FEATURED EVENT</span>
            </motion.div>

            {/* 2. EXACT EVENT TITLE: PROMPT://OVERDRIVE (SINGLE LINE, SAME BASELINE & FONT SIZE, NO CLIPPING) */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="w-full overflow-visible"
            >
              <h1 
                className="font-sans text-white leading-none whitespace-nowrap overflow-visible tracking-tight"
                style={{
                  fontSize: 'clamp(34px, 4.3vw, 70px)',
                  letterSpacing: '-0.035em'
                }}
              >
                <span className="text-purple-400 font-bold">PROMPT://</span>
                <span className="font-black">OVER<span className="text-purple-400">DRIVE</span></span>
              </h1>
            </motion.div>

            {/* 3. TAGLINE (SECONDARY HEADLINE) */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl font-bold font-mono tracking-wide text-zinc-200"
            >
              MASTER AI. BUILD SMARTER. MOVE FASTER.
            </motion.h2>

            {/* 4. DESCRIPTION (MAX WIDTH ~520PX) */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-zinc-400 text-sm sm:text-base max-w-[520px] font-sans leading-relaxed"
            >
              Most users treat AI as a glorified search engine. Firing blind queries, receiving noisy hallucinations, and getting trapped in infinite copy-paste loops.
            </motion.p>

            {/* 5. REGISTER NOW BUTTON (LINKED TO THE TICKET9 EVENT URL) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs sm:text-sm font-bold tracking-wider inline-flex items-center space-x-2 shadow-md shadow-purple-600/20 transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 6. COMPACT INFORMATION STRIP (ALIGNED TO EXACT SAME LEFT EDGE) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono max-w-[540px]"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] text-zinc-500 block font-semibold">DATE</span>
                <span className="font-bold text-zinc-200 block text-xs">20–21 SEPT 2026</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-zinc-500 block font-semibold">DURATION</span>
                <span className="font-bold text-zinc-200 block text-xs">24 HOURS</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-zinc-500 block font-semibold">TEAM SIZE</span>
                <span className="font-bold text-zinc-200 block text-xs">2–4 MEMBERS</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-zinc-500 block font-semibold">VENUE</span>
                <span className="font-bold text-purple-400 block text-xs">ADC LAB</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: ROCKET ENGINEER ILLUSTRATION (PRESERVED ORIGINAL ASPECT RATIO) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-4 lg:mt-0 lg:-ml-6">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[600px] lg:max-w-[640px] flex justify-center lg:justify-end"
            >
              {/* Rocket Image: Original Aspect Ratio strictly preserved with object-contain */}
              <img 
                src={`${import.meta.env.BASE_URL}rocket-engineer.png`} 
                alt="Rocket-inspired Engineer working at computer - PROMPT://OVERDRIVE"
                className="w-full h-auto max-h-[520px] lg:max-h-[580px] object-contain drop-shadow-[0_25px_50px_rgba(139,92,246,0.15)]"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
