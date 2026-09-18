import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Radio } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const CinematicManifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="relative py-28 sm:py-36 bg-[#020610] overflow-hidden border-y border-slate-800/80"
    >
      {/* Background Central Vibranium Starburst Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1D4ED8]/20 via-[#DC2626]/10 to-[#1D4ED8]/25 blur-[120px]" />
        <div className="w-full max-w-[850px] h-[850px] rounded-full border border-blue-500/10 animate-shield-spin-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest uppercase mb-8">
          <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span>{MILAN_DATA.manifesto.badge}</span>
        </div>

        {/* Cinematic Heading */}
        <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-black font-orbitron text-white tracking-tight leading-tight mb-16">
          ONE PLATFORM.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-blue-400">
            ENDLESS POSSIBILITIES.
          </span>
        </h2>

        {/* 4 Cinematic Statement Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
          {MILAN_DATA.manifesto.lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl glass-shield p-7 border border-slate-700/60 hover:border-blue-400/60 hover:glass-shield-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-500/40 flex items-center justify-center font-mono text-xs font-bold text-blue-400">
                  0{idx + 1}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-orbitron text-white group-hover:text-blue-200 transition-colors mb-2">
                {line.text}
              </h3>

              <p className="text-sm text-slate-300 font-space leading-relaxed">
                {line.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Central S.H.I.E.L.D. Emblem Accent */}
        <div className="mt-16 inline-flex items-center justify-center space-x-3 text-xs font-mono text-slate-400 bg-slate-900/60 px-6 py-2 rounded-full border border-slate-700">
          <Shield className="w-4 h-4 text-blue-400" />
          <span>MILAN '26 CONCLAVE MANIFESTO // SYNCHRONIZED ACROSS ALL CHANNELS</span>
        </div>
      </div>
    </section>
  );
};
