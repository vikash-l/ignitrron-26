import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Lock, Unlock, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { soundFx } from '../utils/soundFx';
import confetti from 'canvas-confetti';
import pointingHandsImg from '../assets/pointing_hands.jpg';

interface MysteryBoxSectionProps {
  onUnlocked: () => void;
}

export const MysteryBoxSection: React.FC<MysteryBoxSectionProps> = ({ onUnlocked }) => {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isHoveringBox, setIsHoveringBox] = useState(false);
  const [revealedDomain, setRevealedDomain] = useState<string | null>(null);

  const sampleDomains = [
    'CYBER-NEO RESTAURANT',
    'BIO-HACKING HEALTHCARE',
    'METAVERSE FASHION',
    'QUANTUM AI TECH',
    'ESPORTS ACADEMY',
    'INDIE MEDIA STUDIO',
    'URBAN MOBILITY GEAR'
  ];

  const handleUnlock = () => {
    if (isUnlocking || isUnlocked) return;

    soundFx.playClick();
    setIsUnlocking(true);

    // 1. Shake & sound effect after 300ms
    setTimeout(() => {
      soundFx.playBoxUnlock();
    }, 400);

    // 2. Confetti burst & reveal after 1200ms
    setTimeout(() => {
      const randomDom = sampleDomains[Math.floor(Math.random() * sampleDomains.length)];
      setRevealedDomain(randomDom);
      setIsUnlocking(false);
      setIsUnlocked(true);

      // Trigger comic red/cyan confetti explosion
      confetti({
        particleCount: 90,
        spread: 110,
        origin: { y: 0.6 },
        colors: ['#ff003c', '#00f0ff', '#ffffff']
      });

      onUnlocked();
    }, 1400);
  };

  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden bg-[#0a0a0c]">
      {/* Background Halftone & Red/Blue Glows */}
      <div className="absolute inset-0 bg-halftone-red opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#ff003c]/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/15 blur-3xl pointer-events-none rounded-full" />

      {/* SUBTLE, SMALL SIDE POINTING-HANDS VISUAL FRAMES (LEFT & RIGHT - MAX 20-25% SECTION WIDTH) */}
      <div className="max-w-7xl mx-auto absolute inset-0 flex items-center justify-between pointer-events-none px-2 sm:px-6 z-0">
        
        {/* Left Side Pointing Hand (Small Crisp Cameo) */}
        <motion.div
          animate={isHoveringBox ? { x: 10, scale: 1.02 } : { x: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:block w-[180px] xl:w-[220px] pointer-events-none select-none"
        >
          <div className="relative p-1 bg-[#121216]/60 border border-[#ff003c]/30 rounded-xl overflow-hidden shadow-spider-red">
            <img
              src={pointingHandsImg}
              alt="Left pointing hand visual frame"
              className="w-full h-auto object-contain filter contrast-110 brightness-85 saturate-110 [mask-image:radial-gradient(circle_at_left_center,black_50%,transparent_95%)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />
            <div className="absolute bottom-2 left-3 font-bebas text-xs text-[#ff003c] tracking-wider">
              YOU DECIDE →
            </div>
          </div>
        </motion.div>

        {/* Right Side Pointing Hand (Small Crisp Cameo) */}
        <motion.div
          animate={isHoveringBox ? { x: -10, scale: 1.02 } : { x: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:block w-[180px] xl:w-[220px] pointer-events-none select-none"
        >
          <div className="relative p-1 bg-[#121216]/60 border border-[#00f0ff]/30 rounded-xl overflow-hidden shadow-spider-blue">
            <img
              src={pointingHandsImg}
              alt="Right pointing hand visual frame"
              className="w-full h-auto object-contain filter contrast-110 brightness-85 saturate-110 scale-x-[-1] [mask-image:radial-gradient(circle_at_right_center,black_50%,transparent_95%)]"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]" />
            <div className="absolute bottom-2 right-3 font-bebas text-xs text-[#00f0ff] tracking-wider">
              ← ONE IDEA
            </div>
          </div>
        </motion.div>

      </div>

      {/* Central Mystery Box UI (HIGHEST PRIORITY Z-INDEX 10) */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Header Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#121216]/90 border border-[#00f0ff] text-[#00f0ff] font-space text-xs tracking-widest font-semibold uppercase mb-4 backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.3)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TWO CHOICES • YOU DECIDE</span>
        </div>

        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase mb-3 drop-shadow-[5px_5px_0px_#ff003c]">
          MYSTERY BOX
        </h2>

        <p className="font-space text-xl sm:text-2xl text-[#00f0ff] font-bold tracking-wide uppercase mb-12">
          YOUR CONCEPT IS WAITING.
        </p>

        {/* The 3D Interactive Mystery Box Artifact */}
        <div className="relative w-full max-w-md my-4">
          <motion.div
            onMouseEnter={() => setIsHoveringBox(true)}
            onMouseLeave={() => setIsHoveringBox(false)}
            animate={
              isUnlocking
                ? {
                    rotate: [-3, 3, -4, 4, -2, 2, 0],
                    scale: [1, 1.05, 0.98, 1.07, 1],
                  }
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={
              isUnlocking
                ? { duration: 1.2 }
                : { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }
            onClick={handleUnlock}
            className={`relative cursor-pointer group p-8 sm:p-12 bg-[#121216]/95 rounded-xl border-4 backdrop-blur-md transition-all duration-300 ${
              isUnlocked
                ? 'border-[#00f0ff] shadow-glow-blue'
                : isHoveringBox
                ? 'border-[#00f0ff] shadow-glow-red scale-[1.02]'
                : 'border-[#ff003c] shadow-spider-red hover:shadow-glow-red'
            }`}
          >
            {/* Red & Cyan Web Line Wrapping SVGs over Box */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none stroke-[#ff003c]/70"
              viewBox="0 0 400 300"
            >
              <line x1="0" y1="0" x2="400" y2="300" strokeWidth="2" strokeDasharray="8 4" />
              <line x1="400" y1="0" x2="0" y2="300" strokeWidth="2" strokeDasharray="8 4" />
              <rect x="20" y="20" width="360" height="260" fill="none" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>

            {/* Glowing Light Leaks during Unlocking */}
            <AnimatePresence>
              {isUnlocking && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.6 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-radial from-[#ff003c] via-[#00f0ff] to-transparent blur-2xl pointer-events-none opacity-90"
                />
              )}
            </AnimatePresence>

            {/* Comic Impact Graphic Burst overlay */}
            {isUnlocking && (
              <div className="absolute -top-10 -right-10 bg-[#ff003c] text-white font-anton text-4xl px-5 py-2 rotate-12 shadow-comic border-2 border-white animate-bounce">
                BOOM!
              </div>
            )}

            {/* Box Content Icon & Text */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center bg-black border-2 border-[#ff003c] rounded-full group-hover:scale-110 transition-transform shadow-[0_0_25px_#ff003c]">
                {isUnlocked ? (
                  <Unlock className="w-12 h-12 text-[#00f0ff] animate-pulse" />
                ) : isUnlocking ? (
                  <Zap className="w-12 h-12 text-[#ff003c] animate-spin" />
                ) : (
                  <Lock className="w-12 h-12 text-[#ff003c] group-hover:rotate-12 transition-transform" />
                )}
              </div>

              {!isUnlocked ? (
                <>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wider mb-2">
                    CLASSIFIED BRAND ARTIFACT
                  </h3>
                  <p className="font-inter text-sm text-gray-300 max-w-xs">
                    Click to trigger the web-line release mechanism and reveal your brand domain prompt.
                  </p>
                </>
              ) : (
                <div className="animate-fadeIn text-center">
                  <span className="font-space text-xs tracking-widest text-[#ff003c] uppercase font-bold">
                    DOMAIN REVEALED
                  </span>
                  <h3 className="font-anton text-2xl sm:text-3xl text-[#00f0ff] tracking-wider my-2">
                    {revealedDomain}
                  </h3>
                  <p className="font-inter text-xs text-gray-300">
                    Your team is tasked to transform this surprise domain into a complete brand identity.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA Unlock Button */}
        {!isUnlocked && (
          <button
            onClick={handleUnlock}
            disabled={isUnlocking}
            className="mt-6 group inline-flex items-center gap-3 px-8 py-3.5 bg-[#ff003c] text-white font-bebas text-2xl tracking-wider rounded border border-white shadow-spider-red hover:bg-[#ff003c]/90 transition-all"
          >
            <span>{isUnlocking ? 'UNLOCKING ARTIFACT...' : 'UNLOCK THE MYSTERY'}</span>
            <Box className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </button>
        )}

        {isUnlocked && (
          <a
            href="#discover"
            onClick={() => soundFx.playClick()}
            className="mt-6 inline-flex items-center gap-2 text-[#00f0ff] font-bebas text-xl hover:underline tracking-wider"
          >
            <span>PROCEED TO PHASE 01 — DISCOVER</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </section>
  );
};
