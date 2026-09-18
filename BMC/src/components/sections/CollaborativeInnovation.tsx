import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Users, GraduationCap, Briefcase, Zap } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const CollaborativeInnovation: React.FC = () => {
  return (
    <section
      id="collaborative-innovation"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#030712] via-[#0A2342]/60 to-[#030712] border-y border-slate-800/80 overflow-hidden"
    >
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>{MILAN_DATA.collaborativeInnovation.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            {MILAN_DATA.collaborativeInnovation.heading}
          </h2>

          <p className="text-2xl sm:text-3xl font-extrabold font-space text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400 leading-snug">
            "{MILAN_DATA.collaborativeInnovation.leadStatement}"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600 mx-auto rounded-full" />
        </div>

        {/* Content & Interactive Tri-Convergence Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative Blocks */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-shield-elevated rounded-2xl p-7 border border-blue-500/40 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-blue-400">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>PRINCIPLE // DIVERGENT KNOWLEDGE CONVERGENCE</span>
              </div>
              <p className="text-lg sm:text-xl text-slate-100 font-space font-medium leading-relaxed">
                {MILAN_DATA.collaborativeInnovation.paragraph1}
              </p>
            </div>

            <div className="metallic-card rounded-2xl p-7 border border-slate-700/60 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                TRI-FACTOR COLLABORATION
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {MILAN_DATA.collaborativeInnovation.paragraph2}
              </p>
            </div>

            <div className="glass-shield-red rounded-2xl p-7 border border-red-500/40 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-red-400 font-semibold tracking-wider">
                <Zap className="w-4 h-4 text-red-400" />
                <span>THE LEADERSHIP MINDSET</span>
              </div>
              <p className="text-slate-100 text-base sm:text-lg font-space leading-relaxed font-medium">
                {MILAN_DATA.collaborativeInnovation.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Tri-Pillar Convergence Nexus Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm aspect-square glass-shield rounded-3xl p-8 flex flex-col items-center justify-center border-2 border-blue-500/30 shadow-[0_0_40px_rgba(29,78,216,0.3)]">
              {/* Central Shield Core Hub */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-900 via-blue-700 to-red-600 p-[3px] shadow-[0_0_30px_rgba(29,78,216,0.6)] flex items-center justify-center animate-vibranium-pulse">
                <div className="w-full h-full rounded-full bg-[#040D1A] flex flex-col items-center justify-center text-center p-2">
                  <Shield className="w-7 h-7 text-white mb-0.5" />
                  <span className="font-orbitron text-[11px] font-extrabold text-white">MILAN '26</span>
                  <span className="text-[8px] font-mono text-blue-300">NEXUS</span>
                </div>
              </div>

              {/* Node 1: Industry (Top) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-950/90 border border-blue-400 flex items-center justify-center text-blue-400 shadow-md">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-white mt-1">INDUSTRY</span>
              </div>

              {/* Node 2: Academia (Bottom Left) */}
              <div className="absolute bottom-6 left-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-400 flex items-center justify-center text-slate-200 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-white mt-1">ACADEMIA</span>
              </div>

              {/* Node 3: Students / Talent (Bottom Right) */}
              <div className="absolute bottom-6 right-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-red-950/90 border border-red-400 flex items-center justify-center text-red-400 shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-white mt-1">TALENT</span>
              </div>

              {/* Connective Laser Arcs & Rings */}
              <div className="absolute inset-8 rounded-full border border-dashed border-blue-400/30 animate-shield-spin pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-dotted border-red-500/30 animate-shield-spin-reverse pointer-events-none" />
            </div>

            {/* Bottom S.H.I.E.L.D. status seal */}
            <div className="mt-4 text-[11px] font-mono text-slate-400 text-center">
              SYSTEM: SYNCHRONIZED COLLABORATION ARCHITECTURE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
