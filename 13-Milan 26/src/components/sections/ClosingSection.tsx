import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const ClosingSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-gradient-to-b from-[#030712] via-[#0A2342]/70 to-[#030712]">
      {/* Background Radiance & Concentric Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#1D4ED8]/25 via-[#DC2626]/20 to-[#1D4ED8]/25 blur-[100px] animate-pulse" />
        <div className="w-[500px] h-[500px] rounded-full border border-blue-400/15 animate-shield-spin" />
        <div className="w-[700px] h-[700px] rounded-full border border-red-500/15 animate-shield-spin-reverse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* S.H.I.E.L.D. Emblem Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 via-slate-300 to-blue-600 p-[2px] shadow-[0_0_30px_rgba(29,78,216,0.6)]"
        >
          <div className="w-full h-full rounded-full bg-[#0A2342] flex items-center justify-center">
            <Star className="w-8 h-8 text-white fill-white/40" />
          </div>
        </motion.div>

        {/* Monumental Typography: MILAN '26 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black font-orbitron tracking-tight text-white">
            MILAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-slate-200 to-blue-500">'26</span>
          </h2>

          <div className="space-y-2 pt-2">
            <h3 className="text-2xl sm:text-4xl font-bold font-space text-slate-100 tracking-tight">
              {MILAN_DATA.closing.tagline1}
            </h3>
            <h3 className="text-2xl sm:text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-red-400 tracking-tight">
              {MILAN_DATA.closing.tagline2}
            </h3>
          </div>
        </motion.div>

        {/* Theme Pill Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-block pt-4"
        >
          <div className="px-6 sm:px-8 py-3.5 rounded-full bg-slate-900/90 border border-blue-500/40 shadow-[0_0_25px_rgba(29,78,216,0.35)] backdrop-blur-md">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">
              Theme:
            </span>
            <span className="text-sm sm:text-base font-bold font-orbitron text-blue-300">
              {MILAN_DATA.closing.theme}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
