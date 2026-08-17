import React from 'react';
import { motion } from 'framer-motion';

export const GambitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050308]">
      
      {/* 1. SECTION-BASED SUBTLE ATMOSPHERIC GRADIENTS (Fades naturally with 90% dark space) */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#130922]/40 rounded-full blur-[180px]" />
      <div className="absolute top-[25%] left-0 w-[600px] h-[600px] bg-[#190718]/30 rounded-full blur-[180px]" />
      <div className="absolute top-[50%] right-0 w-[650px] h-[650px] bg-[#160822]/30 rounded-full blur-[180px]" />
      <div className="absolute top-[75%] left-0 w-[600px] h-[600px] bg-[#110720]/40 rounded-full blur-[180px]" />

      {/* 2. SUBTLE COMIC HALFTONE TEXTURE OVERLAY (2.5% Opacity - noticeable only on close look) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay">
        <pattern id="halftone" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#E626FF" />
          <circle cx="14" cy="14" r="1.2" fill="#8F26FF" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>

      {/* 3. LARGE ABSTRACT PLAYING CARD SILHOUETTES (3-5 items, 3-6% opacity) */}
      {/* Card 1: Far Left Cropped */}
      <motion.div
        className="absolute top-[4%] -left-[100px] w-[320px] h-[480px] border border-[#8F26FF]/20 rounded-2xl p-6 opacity-[0.04] rotate-[-14deg]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full border border-[#E626FF]/15 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-3xl text-[#E626FF]">A</span>
          <span className="font-mono text-7xl text-[#E626FF] self-center">♠</span>
          <span className="font-mono text-3xl text-[#E626FF] self-end rotate-180">A</span>
        </div>
      </motion.div>

      {/* Card 2: Behind Hero / Upper Right Edge */}
      <motion.div
        className="absolute top-[8%] -right-[80px] w-[340px] h-[500px] border border-[#E626FF]/20 rounded-2xl p-6 opacity-[0.05] rotate-[12deg]"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full border border-[#8F26FF]/15 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-3xl text-[#FF3BE6]">K</span>
          <span className="font-mono text-7xl text-[#FF3BE6] self-center">♦</span>
          <span className="font-mono text-3xl text-[#FF3BE6] self-end rotate-180">K</span>
        </div>
      </motion.div>

      {/* Card 3: Mid Left near Rules / Rounds */}
      <motion.div
        className="absolute top-[42%] -left-[90px] w-[300px] h-[460px] border border-[#8F26FF]/20 rounded-2xl p-6 opacity-[0.04] rotate-[-8deg]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full border border-[#E626FF]/15 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-3xl text-[#E626FF]">Q</span>
          <span className="font-mono text-6xl text-[#E626FF] self-center">♥</span>
          <span className="font-mono text-3xl text-[#E626FF] self-end rotate-180">Q</span>
        </div>
      </motion.div>

      {/* Card 4: Lower Right near Prizes */}
      <motion.div
        className="absolute top-[72%] -right-[90px] w-[330px] h-[490px] border border-[#E626FF]/20 rounded-2xl p-6 opacity-[0.05] rotate-[10deg]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full border border-[#8F26FF]/15 rounded-xl p-4 flex flex-col justify-between">
          <span className="font-mono text-3xl text-[#FF3BE6]">J</span>
          <span className="font-mono text-7xl text-[#FF3BE6] self-center">♣</span>
          <span className="font-mono text-3xl text-[#FF3BE6] self-end rotate-180">J</span>
        </div>
      </motion.div>

      {/* 4. KINETIC ENERGY ARCS & CURVED TRAILS (Organic flowing SVG gradient lines) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="energyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8F26FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#E626FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF3BE6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="energyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B1FDB" stopOpacity="0" />
            <stop offset="50%" stopColor="#8F26FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E626FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Hero Kinetic Energy Arc */}
        <motion.path
          d="M M 100 200 Q 400 50 800 350 T 1500 200"
          stroke="url(#energyGrad1)"
          strokeWidth="1.5"
          fill="none"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Lower Section Energy Line */}
        <motion.path
          d="M -100 1200 Q 500 1000 1100 1400 T 1800 1100"
          stroke="url(#energyGrad2)"
          strokeWidth="1.5"
          fill="none"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </svg>

      {/* 5. CARD SUIT MOTIFS & FRAGMENTS SCATTERED AT EDGES */}
      <div className="absolute top-[15%] left-[6%] text-[#8F26FF]/10 font-mono text-4xl select-none">♠</div>
      <div className="absolute top-[35%] right-[8%] text-[#E626FF]/10 font-mono text-3xl select-none">♦</div>
      <div className="absolute top-[60%] left-[5%] text-[#FF3BE6]/10 font-mono text-4xl select-none">♣</div>
      <div className="absolute top-[85%] right-[6%] text-[#8F26FF]/10 font-mono text-3xl select-none">♥</div>

      {/* 6. SPARSE FLOATING KINETIC ENERGY PARTICLES (12 items, slow drift) */}
      {[
        { top: '12%', left: '18%', size: 'w-1 h-1', color: 'bg-[#E626FF]/30', delay: 0 },
        { top: '22%', left: '82%', size: 'w-1.5 h-1.5', color: 'bg-[#8F26FF]/30', delay: 1 },
        { top: '38%', left: '12%', size: 'w-1 h-1', color: 'bg-[#FF3BE6]/25', delay: 2 },
        { top: '48%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-[#E626FF]/30', delay: 0.5 },
        { top: '65%', left: '22%', size: 'w-1 h-1', color: 'bg-[#8F26FF]/25', delay: 1.5 },
        { top: '78%', left: '75%', size: 'w-1.5 h-1.5', color: 'bg-[#FF3BE6]/30', delay: 2.5 },
        { top: '88%', left: '15%', size: 'w-1 h-1', color: 'bg-[#E626FF]/20', delay: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

    </div>
  );
};
