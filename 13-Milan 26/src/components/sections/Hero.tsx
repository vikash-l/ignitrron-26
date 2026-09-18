import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  GraduationCap,
  Lightbulb,
  Users,
  Zap,
  ChevronRight,
  ArrowDownRight,
  Radio,
} from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';
import { ShieldHeroGraphic } from '../ui/ShieldHeroGraphic';

export const Hero: React.FC = () => {
  const badgeIcons: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-4 h-4 text-blue-400" />,
    GraduationCap: <GraduationCap className="w-4 h-4 text-slate-300" />,
    Lightbulb: <Lightbulb className="w-4 h-4 text-amber-400" />,
    Users: <Users className="w-4 h-4 text-red-400" />,
    Zap: <Zap className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#030712] via-[#0A2342]/40 to-[#030712]"
    >
      {/* Background Decorative Rings & Tactical Radar Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-[800px] h-[800px] rounded-full border border-blue-500/10 animate-shield-spin-slow" />
        <div className="w-full max-w-[1100px] h-[1100px] rounded-full border border-slate-700/15" />
        <div className="absolute inset-0 bg-tactical-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Badges & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* S.H.I.E.L.D. Strategic Status Bar */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 shadow-[0_0_15px_rgba(29,78,216,0.3)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-200 uppercase">
                {MILAN_DATA.event.statusBadge}
              </span>
              <span className="text-slate-500 text-xs">|</span>
              <span className="text-[11px] font-mono text-slate-300 font-medium">
                {MILAN_DATA.event.host}
              </span>
            </div>

            {/* Large Animated Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl md:text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-8xl font-black font-orbitron tracking-tight text-white leading-none"
              >
                MILAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-slate-200 to-blue-500">'26</span>
              </motion.h1>

              {/* Subheading: Merging Industry Leaders and Academicians for New Horizons */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold font-space tracking-tight text-slate-100 max-w-2xl leading-snug"
              >
                {MILAN_DATA.hero.subtitle}
              </motion.h2>

              {/* Tagline: Skilling Through Collaborative Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex items-center justify-center lg:justify-start space-x-2 pt-2"
              >
                <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-red-500 hidden sm:block" />
                <p className="text-sm sm:text-base md:text-lg font-medium font-mono text-blue-300 tracking-wide">
                  {MILAN_DATA.hero.tagline}
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3"
            >
              {/* Primary Button: Explore Conclave */}
              <a
                href="#about"
                className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase font-orbitron text-white rounded-lg overflow-hidden group bg-gradient-to-r from-[#1D4ED8] via-[#0A2342] to-[#1D4ED8] border border-blue-400/50 shadow-[0_0_25px_rgba(29,78,216,0.5)] hover:shadow-[0_0_40px_rgba(29,78,216,0.8)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  {MILAN_DATA.hero.primaryCta}
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* Secondary Button: Learn More */}
              <a
                href="#why-milan"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold tracking-wider uppercase font-space text-slate-200 rounded-lg bg-slate-900/80 border border-slate-600/50 hover:border-slate-300 hover:text-white hover:bg-slate-800/80 shadow-md transition-all duration-300 backdrop-blur-sm"
              >
                {MILAN_DATA.hero.secondaryCta}
                <ArrowDownRight className="w-4 h-4 ml-2 text-slate-400 group-hover:text-white" />
              </a>
            </motion.div>

            {/* Premium Badges: Industry Leaders | Academic Experts | Innovation | Collaboration | Future Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="pt-6 space-y-3"
            >
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase flex items-center justify-center lg:justify-start space-x-2">
                <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Strategic Conclave Pillars</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {MILAN_DATA.hero.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-md bg-slate-900/70 border border-slate-700/60 hover:border-blue-400/60 transition-all duration-200 backdrop-blur-md shadow-sm hover:shadow-[0_0_15px_rgba(29,78,216,0.25)] group"
                  >
                    <span className="p-1 rounded bg-slate-800/80 group-hover:scale-110 transition-transform">
                      {badgeIcons[badge.icon]}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 font-space tracking-tight">
                      {badge.name}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 border-l border-slate-700 pl-1.5">
                      {badge.code}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual - Futuristic Circular Shield Inspired Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <ShieldHeroGraphic />
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
          Scroll To Engage
        </span>
        <div className="w-4 h-7 rounded-full border border-slate-500 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
