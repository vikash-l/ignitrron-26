import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Target } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';
import type { StudentOpportunity } from '../../data/milanData';

export const FutureReadyGeneration: React.FC = () => {
  return (
    <section id="future-ready" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs font-mono tracking-widest uppercase">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span>{MILAN_DATA.futureReady.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            {MILAN_DATA.futureReady.heading}
          </h2>

          <p className="text-lg sm:text-xl font-semibold font-space text-slate-300">
            {MILAN_DATA.futureReady.leadStatement}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 mx-auto rounded-full" />
        </div>

        {/* High-Tech Checklist Cards */}
        <div className="space-y-4">
          {MILAN_DATA.futureReady.checklist.map((item: StudentOpportunity, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-shield hover:glass-shield-elevated rounded-xl p-5 sm:p-6 flex items-center justify-between border border-slate-700/60 hover:border-blue-400/60 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center space-x-4 sm:space-x-5">
                {/* S.H.I.E.L.D. Checked Insignia */}
                <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-800 to-blue-600 border border-blue-400/50 flex items-center justify-center text-white shadow-[0_0_15px_rgba(29,78,216,0.4)] group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-base sm:text-lg font-medium text-slate-100 font-space group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Tactical Badge on Right */}
              <div className="hidden sm:flex items-center space-x-3 flex-shrink-0 pl-4">
                <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700 text-[10px] font-mono font-bold tracking-wider text-blue-300 uppercase">
                  {item.badge}
                </span>
                <span className="text-slate-600 font-mono text-xs">
                  [0{index + 1}]
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivational Command Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-blue-950/60 border border-blue-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center space-x-3">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400/30" />
            <span className="text-sm font-mono text-slate-200">
              EQUIPPING LEADERS FOR TOMORROW'S INDUSTRY LANDSCAPE
            </span>
          </div>
          <span className="text-xs font-mono text-blue-400 bg-blue-950 px-3 py-1 rounded border border-blue-500/30">
            STRATEGY // FORWARD-DEPLOYED
          </span>
        </motion.div>
      </div>
    </section>
  );
};
