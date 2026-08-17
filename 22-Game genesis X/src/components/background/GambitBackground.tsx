import React from 'react';
import { motion } from 'framer-motion';

export const GambitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040207] select-none">
      
      {/* ========================================================================= */}
      {/* LAYER 01 — ATMOSPHERIC GRADIENTS (20% VISUAL ATMOSPHERE) */}
      {/* ========================================================================= */}
      
      {/* Hero Atmosphere (Soft Violet & Magenta Glow connecting toward Gambit's hand) */}
      <motion.div
        className="absolute top-[-5%] right-[-5%] w-[850px] h-[850px] bg-radial from-[#6B1FDB]/35 via-[#E626FF]/20 to-transparent rounded-full blur-[140px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Mid Page Atmosphere (Deep Violet & Burgundy) */}
      <motion.div
        className="absolute top-[32%] left-[-8%] w-[800px] h-[800px] bg-radial from-[#8F26FF]/30 via-[#1A071C]/35 to-transparent rounded-full blur-[150px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Prizes & CTA Atmosphere (Strong Magenta Energy Glow) */}
      <motion.div
        className="absolute top-[68%] right-[-6%] w-[850px] h-[850px] bg-radial from-[#FF3BE6]/25 via-[#6B1FDB]/30 to-transparent rounded-full blur-[160px]"
        animate={{
          x: [0, 40, -35, 0],
          y: [0, -35, 25, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* ========================================================================= */}
      {/* LAYER 02 — COMIC HALFTONE & DIAGNOAL PRINT TEXTURE (4-7% VISIBLE OPACITY) */}
      {/* ========================================================================= */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.055] mix-blend-screen">
        <pattern id="rich-halftone" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.8" fill="#FF3BE6" />
          <circle cx="19" cy="19" r="1.8" fill="#8F26FF" />
          <line x1="0" y1="32" x2="32" y2="0" stroke="#E626FF" strokeWidth="0.5" strokeOpacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#rich-halftone)" />
      </svg>

      {/* ========================================================================= */}
      {/* LAYER 03 — LARGE PLAYING CARDS (8-15% OPACITY ARCHITECTURAL SHAPES) */}
      {/* ========================================================================= */}

      {/* CARD 1: Left Side Enormous Card (-12deg) */}
      <motion.div
        className="absolute top-[4%] -left-[140px] w-[380px] h-[580px] border-2 border-[#8F26FF]/40 bg-[#130922]/20 rounded-2xl p-7 opacity-[0.12] rotate-[-12deg] shadow-[0_0_50px_rgba(143,38,255,0.25)] hidden md:block"
        animate={{ y: [0, -18, 0], rotate: [-12, -9, -12] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full border-2 border-[#E626FF]/30 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center font-mono text-4xl text-[#FF3BE6] font-bold">
            <span>A</span>
            <span>♠</span>
          </div>
          <span className="font-mono text-9xl text-[#FF3BE6] self-center">♠</span>
          <div className="flex justify-between items-center font-mono text-4xl text-[#FF3BE6] font-bold rotate-180">
            <span>A</span>
            <span>♠</span>
          </div>
        </div>
      </motion.div>

      {/* CARD 2: Upper Left Medium Card (8deg) */}
      <motion.div
        className="absolute top-[18%] left-[22%] w-[280px] h-[430px] border-2 border-[#E626FF]/35 bg-[#140A15]/20 rounded-2xl p-5 opacity-[0.09] rotate-[8deg] hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [8, 5, 8] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-full h-full border border-[#8F26FF]/25 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-3xl text-[#E626FF] font-bold">Q</span>
          <span className="font-mono text-7xl text-[#E626FF] self-center">♥</span>
          <span className="font-mono text-3xl text-[#E626FF] font-bold self-end rotate-180">Q</span>
        </div>
      </motion.div>

      {/* CARD 3: Right Side Enormous Card (12deg) */}
      <motion.div
        className="absolute top-[8%] -right-[130px] w-[400px] h-[600px] border-2 border-[#FF3BE6]/40 bg-[#160822]/20 rounded-2xl p-7 opacity-[0.14] rotate-[12deg] shadow-[0_0_50px_rgba(255,59,230,0.25)] hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [12, 9, 12] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-full h-full border-2 border-[#8F26FF]/30 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center font-mono text-4xl text-[#E626FF] font-bold">
            <span>K</span>
            <span>♦</span>
          </div>
          <span className="font-mono text-9xl text-[#E626FF] self-center">♦</span>
          <div className="flex justify-between items-center font-mono text-4xl text-[#E626FF] font-bold rotate-180">
            <span>K</span>
            <span>♦</span>
          </div>
        </div>
      </motion.div>

      {/* CARD 4: Upper Right Smaller Card (-6deg) */}
      <motion.div
        className="absolute top-[32%] right-[18%] w-[260px] h-[400px] border border-[#8F26FF]/35 rounded-2xl p-4 opacity-[0.08] rotate-[-6deg] hidden lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <div className="w-full h-full border border-[#FF3BE6]/20 rounded-xl p-3 flex flex-col justify-between">
          <span className="font-mono text-2xl text-[#FF3BE6] font-bold">J</span>
          <span className="font-mono text-6xl text-[#FF3BE6] self-center">♣</span>
          <span className="font-mono text-2xl text-[#FF3BE6] font-bold self-end rotate-180">J</span>
        </div>
      </motion.div>

      {/* CARD 5: Lower Left Large Card (-10deg) */}
      <motion.div
        className="absolute top-[62%] -left-[120px] w-[370px] h-[560px] border-2 border-[#8F26FF]/40 bg-[#130922]/20 rounded-2xl p-6 opacity-[0.11] rotate-[-10deg] hidden md:block"
        animate={{ y: [0, -16, 0], rotate: [-10, -7, -10] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      >
        <div className="w-full h-full border-2 border-[#E626FF]/25 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-4xl text-[#E626FF] font-bold">10</span>
          <span className="font-mono text-9xl text-[#E626FF] self-center">♠</span>
          <span className="font-mono text-4xl text-[#E626FF] font-bold self-end rotate-180">10</span>
        </div>
      </motion.div>

      {/* CARD 6: Lower Right Large Card (14deg) */}
      <motion.div
        className="absolute top-[76%] -right-[120px] w-[380px] h-[570px] border-2 border-[#FF3BE6]/40 bg-[#160822]/20 rounded-2xl p-6 opacity-[0.13] rotate-[14deg] hidden md:block"
        animate={{ y: [0, 18, 0], rotate: [14, 11, 14] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-full h-full border-2 border-[#8F26FF]/25 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-4xl text-[#FF3BE6] font-bold">A</span>
          <span className="font-mono text-9xl text-[#FF3BE6] self-center">♦</span>
          <span className="font-mono text-4xl text-[#FF3BE6] font-bold self-end rotate-180">A</span>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* LAYER 04 — LONG EXPLOSIVE KINETIC ENERGY TRAILS (10-20% OPACITY) */}
      {/* ========================================================================= */}
      <svg className="absolute inset-0 w-full h-full opacity-35 filter drop-shadow-[0_0_12px_rgba(230,38,255,0.4)]">
        <defs>
          <linearGradient id="richKineticGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8F26FF" stopOpacity="0" />
            <stop offset="30%" stopColor="#E626FF" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#FF3BE6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#6B1FDB" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="richKineticGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3BE6" stopOpacity="0" />
            <stop offset="40%" stopColor="#8F26FF" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#E626FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8F26FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Hero Kinetic Energy Trail (Connecting toward Gambit's pose) */}
        <motion.path
          d="M -150 180 C 450 -20, 850 420, 1950 150"
          stroke="url(#richKineticGrad1)"
          strokeWidth="2.5"
          fill="none"
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary Hero Energy Arc */}
        <motion.path
          d="M 200 450 C 650 180, 1150 550, 1800 280"
          stroke="url(#richKineticGrad2)"
          strokeWidth="2"
          fill="none"
          animate={{ opacity: [0.25, 0.65, 0.25] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Mid-Page Sweeping Energy Trail */}
        <motion.path
          d="M -200 1050 C 550 820, 1250 1350, 2050 950"
          stroke="url(#richKineticGrad1)"
          strokeWidth="2.5"
          fill="none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Prizes & CTA Explosive Energy Trail */}
        <motion.path
          d="M -150 1950 C 650 1750, 1350 2250, 2150 1850"
          stroke="url(#richKineticGrad2)"
          strokeWidth="2.5"
          fill="none"
          animate={{ opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </svg>

      {/* ========================================================================= */}
      {/* LAYER 05 — CARD CORNERS & SUIT SYMBOLS (5-10% OPACITY) */}
      {/* ========================================================================= */}
      <div className="absolute top-[8%] left-[2%] text-[#FF3BE6]/12 font-mono text-5xl font-extrabold hidden sm:block">A ♠</div>
      <div className="absolute top-[14%] right-[3%] text-[#E626FF]/12 font-mono text-5xl font-extrabold hidden sm:block">K ♦</div>
      <div className="absolute top-[48%] left-[2%] text-[#8F26FF]/12 font-mono text-5xl font-extrabold hidden sm:block">Q ♥</div>
      <div className="absolute top-[82%] right-[2%] text-[#FF3BE6]/12 font-mono text-5xl font-extrabold hidden sm:block">J ♣</div>

      {/* Scattered Oversized Suits */}
      <div className="absolute top-[26%] right-[8%] text-[#E626FF]/08 font-mono text-8xl select-none">♦</div>
      <div className="absolute top-[58%] left-[6%] text-[#8F26FF]/08 font-mono text-8xl select-none">♠</div>
      <div className="absolute top-[88%] left-[8%] text-[#FF3BE6]/08 font-mono text-8xl select-none">♣</div>

      {/* ========================================================================= */}
      {/* LAYER 06 — 35-45 CONCENTRATED KINETIC ENERGY PARTICLES (20-50% OPACITY) */}
      {/* ========================================================================= */}
      {[
        { top: '8%', left: '15%', size: 'w-2 h-2', color: 'bg-[#FF3BE6]/50', delay: 0 },
        { top: '12%', left: '78%', size: 'w-2 h-2', color: 'bg-[#E626FF]/50', delay: 0.5 },
        { top: '16%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-[#8F26FF]/40', delay: 1 },
        { top: '22%', left: '25%', size: 'w-2 h-2', color: 'bg-[#FF3BE6]/45', delay: 1.5 },
        { top: '28%', left: '72%', size: 'w-1.5 h-1.5', color: 'bg-[#E626FF]/40', delay: 2 },
        { top: '35%', left: '12%', size: 'w-2 h-2', color: 'bg-[#8F26FF]/50', delay: 0.8 },
        { top: '42%', left: '85%', size: 'w-2 h-2', color: 'bg-[#FF3BE6]/45', delay: 2.2 },
        { top: '49%', left: '18%', size: 'w-1.5 h-1.5', color: 'bg-[#E626FF]/40', delay: 1.2 },
        { top: '55%', left: '82%', size: 'w-2 h-2', color: 'bg-[#8F26FF]/50', delay: 2.8 },
        { top: '64%', left: '22%', size: 'w-2 h-2', color: 'bg-[#FF3BE6]/45', delay: 0.4 },
        { top: '72%', left: '76%', size: 'w-2 h-2', color: 'bg-[#E626FF]/50', delay: 1.8 },
        { top: '80%', left: '16%', size: 'w-1.5 h-1.5', color: 'bg-[#8F26FF]/40', delay: 3.2 },
        { top: '86%', left: '84%', size: 'w-2 h-2', color: 'bg-[#FF3BE6]/50', delay: 2.4 },
        { top: '94%', left: '30%', size: 'w-1.5 h-1.5', color: 'bg-[#E626FF]/40', delay: 1.1 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full shadow-[0_0_8px_rgba(255,59,230,0.6)] ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -25, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{ duration: 9 + (i % 6), repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

    </div>
  );
};
