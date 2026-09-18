import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const SpaceCommandWarRoom = ({ butterflyData, scrollY = 0 }) => {
  // Generate a rich dense cosmic starfield
  const stars = useMemo(() => {
    return Array.from({ length: 110 }, (_, i) => ({
      id: i,
      x: (i * 1.37 * 19) % 100,
      y: (i * 2.11 * 23) % 100,
      size: (i % 4 === 0 ? 2.2 : i % 2 === 0 ? 1.4 : 0.9) + Math.random() * 0.6,
      opacity: 0.25 + (i % 5) * 0.16,
      delay: (i * 0.25) % 4.5,
      color: i % 4 === 0 ? '#c084fc' : i % 3 === 0 ? '#38bdf8' : i % 7 === 0 ? '#f472b6' : '#ffffff',
    }));
  }, []);

  const bX = butterflyData ? butterflyData.x : 600;
  const bY = butterflyData ? butterflyData.y : 300;

  // Normalized butterfly coordinates for smooth parallax
  const normX = (bX / (typeof window !== 'undefined' ? window.innerWidth : 1200) - 0.5) * 2;
  const normY = (bY / (typeof window !== 'undefined' ? window.innerHeight : 800) - 0.5) * 2;

  // Proximity check for holographic radar activation
  const radarDistance = Math.hypot(bX - (typeof window !== 'undefined' ? window.innerWidth * 0.85 : 900), bY - 140);
  const isRadarActive = radarDistance < 220;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* ZONE B: DEEP COSMIC SPACE, NEBULA & GAS GIANT PLANET (0.04x Scroll, -2px Parallax) */}
      {/* ========================================================================= */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translate3d(${normX * -2}px, ${normY * -2 + scrollY * 0.04}px, 0)`
        }}
      >
        {/* Deep Space Background Tint */}
        <div className="absolute inset-0 bg-[#050509]" />

        {/* Vibrant Galactic Nebula Clouds (Electric Purple, Violet & Cyan) */}
        <div className="absolute -top-28 right-8 w-[720px] h-[580px] bg-purple-600/22 rounded-full blur-[150px] animate-subtle-pulse" />
        <div className="absolute top-1/4 -left-24 w-[600px] h-[480px] bg-indigo-600/18 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[540px] h-[420px] bg-cyan-600/14 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[350px] bg-fuchsia-600/10 rounded-full blur-[120px]" />

        {/* Distant Gas Giant Planet with Luminous Planetary Rings (Top Right) */}
        <div className="absolute top-6 right-14 w-40 h-40 rounded-full bg-gradient-to-br from-purple-800/70 via-indigo-950/85 to-[#06060a] border border-purple-400/25 shadow-[0_0_60px_rgba(168,85,247,0.25)] hidden sm:block">
          {/* Volumetric Atmosphere & Crater Details */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-purple-400/20 to-cyan-300/30" />
          <div className="absolute top-6 left-8 w-10 h-6 bg-purple-900/40 rounded-full blur-[2px]" />
          {/* Luminous Orbital Ring System */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-14 border-t-2 border-b border-purple-400/40 rounded-[100%] -rotate-25 shadow-[0_0_15px_rgba(192,132,252,0.4)]" />
        </div>

        {/* Dense Starfield */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-flicker"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              boxShadow: star.size > 2 ? `0 0 6px ${star.color}` : 'none',
            }}
          />
        ))}
      </motion.div>

      {/* ========================================================================= */}
      {/* ZONE A: FUTURISTIC MEGACITY SKYLINE & SUSPENDED ENERGY STRUCTURES */}
      {/* ========================================================================= */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{
          transform: `translate3d(${normX * -3}px, ${normY * -3 + scrollY * 0.08}px, 0)`
        }}
      >
        {/* Distant Futuristic Skyline Silhouettes (Far Lower Background) */}
        <svg className="absolute bottom-0 inset-x-0 w-full h-44 fill-zinc-950/80 stroke-purple-500/20" preserveAspectRatio="none" viewBox="0 0 1200 180">
          {/* Towers & Spire Architecture */}
          <path d="M 0 180 L 0 140 L 40 140 L 60 90 L 80 90 L 90 140 L 140 140 L 160 60 L 170 30 L 180 60 L 210 140 L 280 140 L 300 80 L 340 80 L 360 140 L 420 140 L 460 110 L 500 110 L 520 140 L 600 140 L 630 50 L 650 50 L 680 140 L 760 140 L 780 70 L 820 70 L 840 140 L 920 140 L 940 40 L 950 20 L 960 40 L 990 140 L 1050 140 L 1080 85 L 1120 85 L 1140 140 L 1200 140 L 1200 180 Z" />
          {/* Glowing Cyber Windows on City Spires */}
          <circle cx="170" cy="40" r="1.5" className="fill-cyan-400 animate-pulse" />
          <circle cx="640" cy="60" r="1.5" className="fill-purple-400 animate-pulse" />
          <circle cx="950" cy="30" r="2" className="fill-cyan-300 animate-pulse" />
          {/* Suspended Energy Bridge Line */}
          <line x1="210" y1="120" x2="600" y2="120" stroke="#a855f7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="680" y1="110" x2="990" y2="110" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
        </svg>

        {/* Giant Orbital Defense Platform Ring in Space (Right Background) */}
        <svg className="absolute top-12 right-2 w-96 h-80 stroke-purple-400/25 fill-none hidden lg:block" viewBox="0 0 400 300">
          <polygon points="200 20, 380 90, 380 230, 200 290, 20 230, 20 90" strokeWidth="1.2" strokeDasharray="6 4" />
          <polygon points="200 50, 340 105, 340 210, 200 260, 60 210, 60 105" strokeWidth="0.8" />
          <circle cx="200" cy="155" r="6" className="fill-purple-400/80 animate-pulse" />
          <circle cx="200" cy="155" r="18" strokeWidth="1" className="animate-ping" style={{ animationDuration: '4s' }} />
        </svg>
      </motion.div>

      {/* ========================================================================= */}
      {/* ZONE C: CRUISING SPACECRAFTS & FLEET DRONES WITH PLASMA TRAILS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Interceptor Ship 1 (Darting Across with Cyan Plasma Exhaust) */}
        <div className="absolute top-0 left-0 animate-interceptor hidden sm:block">
          <div className="relative flex items-center">
            <div className="w-28 h-1.5 bg-gradient-to-l from-cyan-400 via-purple-500/80 to-transparent rounded-full blur-[1px]" />
            <svg className="w-10 h-5 fill-zinc-200 stroke-purple-400" viewBox="0 0 50 25">
              <polygon points="45 12, 10 2, 2 8, 15 12, 2 16, 10 22" strokeWidth="1" />
              <circle cx="28" cy="12" r="2.2" className="fill-cyan-300" />
            </svg>
          </div>
        </div>

        {/* Heavy Carrier Battleship (Cruising in Distant Deep Space) */}
        <div className="absolute top-28 left-0 animate-heavy-cruiser hidden md:block">
          <div className="relative flex items-center">
            <svg className="w-24 h-9 fill-zinc-900 stroke-purple-500/50" viewBox="0 0 120 45">
              <polygon points="110 22, 90 8, 40 10, 15 2, 0 15, 20 22, 0 30, 15 42, 40 35, 90 36" strokeWidth="1.5" />
              <circle cx="65" cy="12" r="2.2" className="fill-purple-400 animate-pulse" />
              <circle cx="45" cy="32" r="2.2" className="fill-cyan-400 animate-pulse" />
            </svg>
            <div className="w-20 h-2 bg-gradient-to-r from-purple-500/80 to-transparent blur-[2px] -ml-2" />
          </div>
        </div>

        {/* Autonomous Recon Patrol Drone */}
        <div className="absolute top-16 left-1/3 animate-drone hidden lg:block">
          <div className="relative flex items-center space-x-1 bg-zinc-900/80 border border-purple-400/40 px-1.5 py-0.5 rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[8px] text-purple-300 tracking-widest">DRONE_ALPHA</span>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE HOLOGRAPHIC DEFENSE RADARS & PROXIMITY TRACKING */}
      {/* ========================================================================= */}
      <motion.div 
        className="absolute inset-0"
        style={{
          transform: `translate3d(${normX * -4}px, ${normY * -4 + scrollY * 0.12}px, 0)`
        }}
      >
        {/* 360° Tactical Radar (Reacts when butterfly is near) */}
        <div 
          className={`absolute top-10 right-10 w-64 h-64 border rounded-full hidden md:block transition-all duration-500 ${
            isRadarActive ? 'border-purple-400/60 shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-105' : 'border-purple-500/25'
          } animate-spin-slow`}
        >
          <div className="absolute inset-3 border border-purple-400/20 rounded-full border-dashed animate-spin-reverse-slow" />
          <div className="absolute inset-10 border border-indigo-500/25 rounded-full" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-500/30" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-purple-500/30" />
          {/* Sweeping Cone */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/25 via-purple-500/08 to-transparent rounded-tl-full origin-bottom-right" />
          <span className="absolute -top-5 right-0 font-mono text-[9px] text-purple-300/80 tracking-wider">
            {isRadarActive ? 'RADAR // TARGET DETECTED' : 'TACTICAL_RADAR // 360°'}
          </span>
        </div>

        {/* Interactive Holographic Weapon Lock Reticle (Top Left) */}
        <div className="absolute top-10 left-8 hidden lg:block animate-target-lock">
          <div className="flex items-center space-x-2 font-mono text-[10px] text-purple-300">
            <span className="inline-block w-3 h-3 border-l-2 border-t-2 border-purple-400" />
            <span className="tracking-wider">DEFENSE_MATRIX // ACTIVE</span>
          </div>
          <p className="text-[8px] font-mono text-zinc-400 pl-5">ORBITAL_ARRAY: ONLINE // READY</p>
        </div>

        {/* Animated Circuit Conduits */}
        <svg className="absolute inset-0 w-full h-full stroke-purple-400/30 fill-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
          <path d="M 70% 16 L 85% 16 L 90% 42 L 98% 42" strokeWidth="1.2" className="animate-circuit-flow" />
          <circle cx="98%" cy="42" r="2.5" className="fill-purple-400" />
          <path d="M 15 84% L 75 84% L 115 92% L 160 92%" strokeWidth="1.2" className="animate-circuit-flow" style={{ animationDelay: '2s' }} />
          <circle cx="160" cy="92%" r="2" className="fill-cyan-400" />
        </svg>

        {/* Signal Strength Status Bars */}
        <div className="absolute bottom-16 left-12 hidden lg:flex items-end space-x-1.5 h-6 opacity-40">
          <span className="w-1 rounded-xs bg-purple-400 animate-[signalBar_3s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
          <span className="w-1 rounded-xs bg-purple-400 animate-[signalBar_3s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
          <span className="w-1 rounded-xs bg-purple-400 animate-[signalBar_3s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }} />
          <span className="w-1 rounded-xs bg-purple-400 animate-[signalBar_3s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }} />
          <span className="w-1 rounded-xs bg-purple-400 animate-[signalBar_3s_ease-in-out_infinite]" style={{ animationDelay: '1.6s' }} />
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* BUTTERFLY LIGHT BLOOM & SCANNING SWEEP BEAMS */}
      {/* ========================================================================= */}
      <div 
        className="absolute w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[110px] transition-all duration-200 pointer-events-none"
        style={{
          top: `${bY}px`,
          left: `${bX}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Vertical Laser Scanline */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-purple-500/15 via-purple-500/05 to-transparent animate-scanline-slow" />

      {/* Diagonal Laser Data Streak */}
      <div className="absolute -top-32 -left-32 w-[700px] h-36 bg-gradient-to-r from-transparent via-purple-500/12 to-transparent blur-md animate-data-streak hidden sm:block" />

      {/* ========================================================================= */}
      {/* CONTROLLED CONTRAST MASKS FOR 100% TEXT READABILITY */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090d]/90 via-[#09090d]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090d]/80 via-transparent to-[#09090d]/95" />

    </div>
  );
};
