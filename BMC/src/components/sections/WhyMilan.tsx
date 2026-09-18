import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, Compass, Network } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const WhyMilan: React.FC = () => {
  return (
    <section id="why-milan" className="relative py-24 sm:py-32 bg-[#040D1A]/50 border-y border-slate-800/80">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>{MILAN_DATA.whyMilan.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            {MILAN_DATA.whyMilan.heading}
          </h2>

          <p className="text-xl sm:text-2xl font-semibold font-space text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-red-400">
            "{MILAN_DATA.whyMilan.leadStatement}"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-slate-300 to-red-600 mx-auto rounded-full" />
        </div>

        {/* 3 Premium Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Fast-evolving World */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl glass-shield p-8 flex flex-col justify-between hover:glass-shield-elevated transition-all duration-300 hover:-translate-y-2 border border-slate-700/60 hover:border-blue-500/50"
          >
            {/* Corner Bracket */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-600 group-hover:border-blue-400 transition-colors" />

            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(29,78,216,0.3)] group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>

              <div className="inline-block text-[11px] font-mono tracking-wider text-blue-400 uppercase font-semibold">
                TACTICAL MANDATE 01
              </div>

              <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-blue-200 transition-colors">
                Rapid Evolution & Adaptation
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Emerging technologies, changing industry demands, and new career pathways require
                students to continuously learn, adapt, and innovate.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-slate-300 font-semibold">CONTINUOUS UPSKILLING</span>
              <span className="text-blue-400">[01 // EXP]</span>
            </div>
          </motion.div>

          {/* Card 2: Experience Meets Ambition (Highlighted Lead Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-2xl glass-shield-elevated p-8 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(29,78,216,0.4)] transition-all duration-300 hover:-translate-y-2 border-2 border-blue-500/40 relative overflow-hidden"
          >
            {/* Vibranium highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-blue-500 to-white" />

            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-red-400" />

            <div className="space-y-5 relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-900 border border-blue-400 flex items-center justify-center text-white shadow-[0_0_25px_rgba(29,78,216,0.6)] group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7" />
              </div>

              <div className="inline-block text-[11px] font-mono tracking-wider text-red-400 uppercase font-semibold">
                TACTICAL MANDATE 02 // CORE
              </div>

              <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-blue-200 transition-colors">
                Experience Meets Ambition
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                MILAN ’26 creates a space where experience meets ambition. The conclave brings
                together distinguished industry professionals and academic leaders to share
                insights, experiences, and perspectives on the future of skills, careers, technology,
                and innovation.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-red-400 font-semibold">STRATEGIC DIALOGUE</span>
              <span className="text-blue-400">[02 // CORE]</span>
            </div>
          </motion.div>

          {/* Card 3: Charting Opportunities & Avenues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-2xl glass-shield p-8 flex flex-col justify-between hover:glass-shield-elevated transition-all duration-300 hover:-translate-y-2 border border-slate-700/60 hover:border-blue-500/50"
          >
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-600 group-hover:border-blue-400 transition-colors" />

            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-slate-900/80 border border-slate-600/50 flex items-center justify-center text-slate-200 shadow-md group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7 text-blue-400" />
              </div>

              <div className="inline-block text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                TACTICAL MANDATE 03
              </div>

              <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-blue-200 transition-colors">
                Actionable Foresight
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Through meaningful conversations and collaborative engagement, participants will gain
                a clearer understanding of the opportunities and avenues that lie ahead.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-slate-300 font-semibold">FUTURE ROADMAP</span>
              <span className="text-blue-400">[03 // NAV]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
