import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Radio, Activity } from 'lucide-react';
import capImage from '../../assets/captain_america.png';

export const ShieldHeroGraphic: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 140 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex items-center justify-center p-2 sm:p-4 select-none perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Vibranium & Arc Reactor Glow Behind Character */}
      <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#1D4ED8]/30 via-[#DC2626]/20 to-[#1D4ED8]/35 blur-[80px] pointer-events-none animate-pulse" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] flex items-center justify-center"
      >
        {/* Outer S.H.I.E.L.D. Tactical HUD Ring Behind Character */}
        <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] rounded-full border border-blue-500/25 animate-shield-spin pointer-events-none">
          {/* Compass / Azimuth marks */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[9px] font-mono text-blue-400/80 tracking-widest bg-[#030712]/90 px-1 rounded border border-blue-500/30">
            000° N
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-[9px] font-mono text-blue-400/80 tracking-widest bg-[#030712]/90 px-1 rounded border border-blue-500/30">
            180° S
          </div>
          <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 text-[9px] font-mono text-blue-400/80 tracking-widest bg-[#030712]/90 px-1 rounded border border-blue-500/30">
            270° W
          </div>
          <div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 text-[9px] font-mono text-blue-400/80 tracking-widest bg-[#030712]/90 px-1 rounded border border-blue-500/30">
            090° E
          </div>
          {/* Circular hashmarks */}
          <div className="absolute inset-3 rounded-full border border-dashed border-slate-400/20" />
        </div>

        {/* Counter-Rotating Segmented Telemetry Ring */}
        <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] rounded-full border border-blue-400/30 animate-shield-spin-reverse pointer-events-none">
          <div className="absolute top-2 left-6 w-3 h-3 border-t-2 border-l-2 border-red-500" />
          <div className="absolute bottom-2 right-6 w-3 h-3 border-b-2 border-r-2 border-red-500" />
          <div className="absolute top-1/2 right-1 w-2 h-8 -translate-y-1/2 border-r border-blue-400/60" />
          <div className="absolute top-1/2 left-1 w-2 h-8 -translate-y-1/2 border-l border-blue-400/60" />
        </div>

        {/* Tactical Radar Sweep Arc */}
        <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[410px] md:h-[410px] rounded-full overflow-hidden pointer-events-none opacity-40">
          <div
            className="w-full h-full rounded-full animate-radar"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(29,78,216,0.35) 360deg)',
            }}
          />
        </div>

        {/* ========================================================================= */}
        {/* CAPTAIN AMERICA CHARACTER DISPLAY WITH METALLIC BACKPLATE */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex items-center justify-center py-4">
          <div className="relative group">
            {/* Holographic Pedestal / Shield Backdrop Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-blue-500/10 via-transparent to-red-500/15 blur-xl pointer-events-none" />

            {/* Captain America Image with Filter / Drop Shadows */}
            <img
              src={capImage}
              alt="Captain America - Leadership & Resilience"
              className="relative z-10 max-h-[440px] sm:max-h-[520px] md:max-h-[580px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(29,78,216,0.45)] transition-transform duration-500 group-hover:scale-[1.03]"
            />

            {/* Subtle Specular Sheen on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay"
              style={{
                transform: isHovered ? 'translateY(10%) rotate(15deg)' : 'translateY(-20%) rotate(15deg)',
                transition: 'transform 0.8s ease-out',
              }}
            />
          </div>
        </div>

        {/* Floating S.H.I.E.L.D. Tactical HUD Data Tags */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -top-2 -left-2 sm:left-2 font-mono text-[10px] text-slate-200 bg-[#040D1A]/90 px-3 py-1.5 rounded-lg border border-blue-500/40 backdrop-blur-md shadow-lg flex items-center space-x-2 z-30"
        >
          <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
          <div>
            <div className="text-blue-400 font-bold tracking-wider">COMMAND INITIATIVE</div>
            <div className="text-[9px] text-slate-400">LEADERSHIP // LEVEL 8</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-6 -right-2 sm:right-2 font-mono text-[10px] text-slate-200 bg-[#040D1A]/90 px-3 py-1.5 rounded-lg border border-red-500/40 backdrop-blur-md shadow-lg flex items-center space-x-2 z-30"
        >
          <Radio className="w-3 h-3 text-red-400 animate-pulse" />
          <div>
            <div className="text-red-400 font-bold tracking-wider">MILAN '26 CONCLAVE</div>
            <div className="text-[9px] text-slate-400">VIBRANIUM PROTOCOL</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
