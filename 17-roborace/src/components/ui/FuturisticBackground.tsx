import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FuturisticBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax offsets for layers (Background moves slowest, Foreground moves fastest)
  const bgY = useTransform(scrollY, [0, 2000], [0, 80]);
  const midY = useTransform(scrollY, [0, 2000], [0, -120]);
  const fgY = useTransform(scrollY, [0, 2000], [0, -220]);

  // Atmospheric speed particles mapping
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 90 + 5}%`,
    width: `${Math.random() * 2 + 0.8}px`,
    height: `${Math.random() * 2 + 0.8}px`,
    delay: `${Math.random() * 6}s`,
    duration: `${Math.random() * 10 + 9}s`,
    opacity: Math.random() * 0.15 + 0.05,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#060608]">
      
      {/* --- LAYER 1: SOLID GRADIENT & ATMOSPHERIC GLOWS (BACKGROUND) --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0c0d10] to-[#14151a]" />
      
      {/* Soft radial glows behind Hero and key content spots */}
      <div className="absolute top-[10%] left-[20%] w-full max-w-[500px] h-[500px] rounded-full bg-slate-550/[0.03] blur-[140px]" />
      <div className="absolute top-[40%] right-[10%] w-full max-w-[600px] h-[600px] rounded-full bg-sky-500/[0.04] blur-[150px]" />
      <div className="absolute bottom-[10%] left-[10%] w-full max-w-[450px] h-[450px] rounded-full bg-zinc-400/[0.03] blur-[130px]" />
      <div className="absolute inset-0 bg-vignette opacity-80" />

      {/* --- LAYER 2: PARALLAX BACKGROUND LAYOUTS (RC CARS & RADIAL LIGHT) --- */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-1">
        {/* Fine Technical Grids */}
        <div className="absolute inset-0 bg-grid-racing opacity-[0.05]" />
        <div className="absolute inset-0 bg-grid-racing-fine opacity-[0.02]" />

        <svg className="w-full h-full opacity-[0.03] text-slate-100" fill="none">
          <defs>
            <filter id="car-blur">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* Far Background RC Car Silhouette 1 (Left Side, heading into distance) */}
          <g transform="translate(180, 260) scale(0.3) rotate(-15)" filter="url(#car-blur)">
            {/* Chassis outline */}
            <path d="M 0 -40 L 25 10 L 15 50 L -15 50 L -25 10 Z" fill="currentColor" />
            {/* Spoiler */}
            <rect x="-35" y="45" width="70" height="8" rx="2" fill="currentColor" />
            {/* Rear Wheels */}
            <rect x="-42" y="20" width="10" height="20" rx="3" fill="currentColor" />
            <rect x="32" y="20" width="10" height="20" rx="3" fill="currentColor" />
            {/* Front Wheels */}
            <rect x="-34" y="-30" width="8" height="16" rx="2" fill="currentColor" />
            <rect x="26" y="-30" width="8" height="16" rx="2" fill="currentColor" />
          </g>

          {/* Far Background RC Car Silhouette 2 (Right Side, heading forward) */}
          <g transform="translate(720, 390) scale(0.4) rotate(8)" filter="url(#car-blur)">
            <path d="M 0 -40 L 22 10 L 12 50 L -12 50 L -22 10 Z" fill="currentColor" />
            <rect x="-30" y="45" width="60" height="7" rx="2" fill="currentColor" />
            <rect x="-38" y="22" width="9" height="18" rx="3" fill="currentColor" />
            <rect x="29" y="22" width="9" height="18" rx="3" fill="currentColor" />
          </g>
        </svg>
      </motion.div>

      {/* --- LAYER 3: PARALLAX MIDGROUND LAYOUTS (RACETRACK, CIRCUIT LINES, OBSTACLES) --- */}
      <motion.div style={{ y: midY }} className="absolute inset-0 z-2">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="track-surface" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#121316" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#0d0e11" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#060608" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="silver-laser" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="icy-laser" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Perspective Racing Track Polygon */}
          <polygon points="120,600 460,200 540,200 880,600" fill="url(#track-surface)" />
          
          {/* Silver Lane Borders */}
          <line x1="120" y1="600" x2="460" y2="200" stroke="url(#silver-laser)" strokeWidth="2.5" />
          <line x1="880" y1="600" x2="540" y2="200" stroke="url(#silver-laser)" strokeWidth="2.5" />

          {/* Center dashes */}
          <line x1="500" y1="600" x2="500" y2="200" stroke="url(#silver-laser)" strokeWidth="1" strokeDasharray="10 18" />

          {/* Track Underglow */}
          <polygon points="120,600 460,200 540,200 880,600" fill="url(#icy-laser)" />

          {/* --- Obstacle Silhouettes along the Track --- */}
          
          {/* 1. Loop-the-Loop silhouette (Far distance) */}
          <g transform="translate(485, 230) scale(0.35)" opacity="0.15">
            <path d="M 0 40 C -30 40, -40 0, 0 0 C 40 0, 30 40, 0 40 Z" stroke="#ffffff" strokeWidth="3" />
            <line x1="-35" y1="40" x2="35" y2="40" stroke="#ffffff" strokeWidth="2" />
          </g>

          {/* 2. Launch Ramp silhouette (Mid distance) */}
          <g transform="translate(528, 300) scale(0.45)" opacity="0.2">
            <path d="M 0 25 L 30 5 L 30 25 Z" fill="#ffffff" />
            <line x1="-15" y1="25" x2="45" y2="25" stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* 3. See-Saw silhouette (Close distance) */}
          <g transform="translate(360, 480) scale(0.7)" opacity="0.25">
            {/* Pivot triangle */}
            <polygon points="0,20 -10,35 10,35" fill="#ffffff" />
            {/* Tilted plank */}
            <line x1="-50" y1="15" x2="50" y2="28" stroke="#ffffff" strokeWidth="4.5" />
          </g>

          {/* --- Robotics/Circuit-board Trace Lines --- */}
          <g stroke="rgba(226, 232, 240, 0.08)" strokeWidth="0.8">
            {/* Left traces connecting to road */}
            <path d="M 0 100 L 100 100 L 150 150 L 380 150 L 400 170" />
            <circle cx="400" cy="170" r="1.5" fill="rgba(255,255,255,0.2)" />
            <path d="M 0 450 L 80 450 L 120 490 L 260 490" />
            <circle cx="260" cy="490" r="1.5" fill="rgba(255,255,255,0.2)" />

            {/* Right traces connecting to road */}
            <path d="M 1000 180 L 850 180 L 800 230 L 620 230 M 620 230 L 580 230" />
            <circle cx="580" cy="230" r="1.5" fill="rgba(255,255,255,0.2)" />
            <path d="M 1000 520 L 900 520 L 820 440" />
            <circle cx="820" cy="440" r="1.5" fill="rgba(255,255,255,0.2)" />

            {/* Tiny robotics geometric patterns */}
            <rect x="50" y="80" width="8" height="8" rx="1" fill="none" />
            <line x1="58" y1="84" x2="70" y2="84" />
            <rect x="910" y="240" width="10" height="6" rx="1" fill="none" />
            <circle cx="915" cy="243" r="1" fill="rgba(255,255,255,0.2)" />
          </g>
        </svg>
      </motion.div>

      {/* --- LAYER 4: PARALLAX FOREGROUND LAYOUTS (HUD TELEMETRY & SPEED STREAKS) --- */}
      <motion.div style={{ y: fgY }} className="absolute inset-0 z-3">
        {/* HUD Telemetry Elements (Restrained & Elegant) */}
        <div className="absolute top-[12%] left-6 font-mono text-[8px] sm:text-[9px] text-slate-500/35 tracking-wider select-none space-y-1 hidden md:block">
          <p>// TRACK_MATRIX: ACTIVE</p>
          <p>SECTOR: 01 / 03</p>
          <p>LAP: 01 / 02</p>
        </div>

        <div className="absolute top-[28%] right-6 font-mono text-[8px] sm:text-[9px] text-slate-500/35 tracking-wider select-none space-y-1 text-right hidden md:block">
          <p>// TELEMETRY_SPEED</p>
          <p>VELOCITY: MACH 4.6</p>
          <p>VOLTAGE: 16.80 V [MAX]</p>
        </div>

        <div className="absolute bottom-[20%] left-6 font-mono text-[8px] sm:text-[9px] text-slate-500/35 tracking-wider select-none hidden lg:block">
          <div className="flex items-center gap-1.5 border border-zinc-800/30 p-1.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500/20 animate-ping" />
            <span>SYS_STATUS: COMPILING_CIRCUIT...</span>
          </div>
        </div>

        {/* Slow moving speed streaks */}
        <div className="speed-streak-subtle top-[12%] left-10" style={{ animationDelay: '0.1s', animationDuration: '4.8s' }} />
        <div className="speed-streak-subtle-fast top-[32%] right-10" style={{ animationDelay: '1.2s', animationDuration: '3s' }} />
        <div className="speed-streak-subtle top-[52%] left-5" style={{ animationDelay: '0.6s', animationDuration: '5.2s' }} />
        <div className="speed-streak-subtle-fast top-[72%] right-20" style={{ animationDelay: '2.2s', animationDuration: '3.4s' }} />
      </motion.div>

      {/* --- LAYER 5: AMBIENT SPEED PARTICLES (FOREGROUND LAYER OF BACKGROUND) --- */}
      <div className="absolute inset-0 z-4">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-slate-400 pointer-events-none animate-horizontal-particle"
            style={{
              top: p.top,
              width: p.width,
              height: p.height,
              opacity: p.opacity,
              animationDuration: p.duration,
              animationDelay: p.delay,
              left: '-10px',
              willChange: 'transform',
            }}
          />
        ))}
      </div>

    </div>
  );
};
