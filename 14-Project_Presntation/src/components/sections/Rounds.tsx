import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Timer, Plus } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  return (
    <section id="rounds" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="TIMED FORMAT"
          title="PRESENTATION FORMAT"
          subtitle="A structured 8-minute stage format designed for concise delivery and rigorous technical inquiry."
          align="center"
        />

        {/* Dynamic Mathematical Format Progression (05 MIN + 03 MIN = 08 MIN) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center max-w-5xl mx-auto">
          
          {/* Phase 01: 05 Min Presentation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-5 tech-panel rounded-2xl p-7 sm:p-8 border border-blue-800/40 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 rounded bg-blue-900/40 border border-blue-700/40 text-blue-300 font-mono-tech text-[10px] uppercase tracking-widest font-semibold">
                  PHASE 01 | STAGE
                </span>
                <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-cyan-400" />
                </div>
              </div>

              <div className="mb-4">
                <div className="text-white font-display text-5xl sm:text-6xl uppercase tracking-tight leading-none">
                  {eventData.presentationTime}
                </div>
                <div className="text-cyan-400 font-mono-tech text-[11px] uppercase tracking-widest mt-1 font-semibold">
                  PROJECT PRESENTATION
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                Teams present their project, explain the core problem statement, demonstrate system architecture, and showcase their technical execution.
              </p>
            </div>

            <div className="border-t border-blue-900/30 pt-4 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
              <span>UNINTERRUPTED PITCH</span>
              <span className="text-blue-400 font-bold">05:00 MAX</span>
            </div>
          </motion.div>

          {/* Plus Sign Divider (2 cols on md) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 flex justify-center items-center py-2 md:py-0"
          >
            <div className="w-11 h-11 rounded-full tech-panel border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20">
              <Plus className="h-5 w-5" />
            </div>
          </motion.div>

          {/* Phase 02: 03 Min Q&A (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="md:col-span-5 tech-panel rounded-2xl p-7 sm:p-8 border border-blue-800/40 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-700/40 text-cyan-300 font-mono-tech text-[10px] uppercase tracking-widest font-semibold">
                  PHASE 02 | DEFENCE
                </span>
                <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </div>
              </div>

              <div className="mb-4">
                <div className="text-white font-display text-5xl sm:text-6xl uppercase tracking-tight leading-none">
                  {eventData.qaTime}
                </div>
                <div className="text-blue-400 font-mono-tech text-[11px] uppercase tracking-widest mt-1 font-semibold">
                  JUDGES Q&amp;A DEFENCE
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                The expert evaluation panel questions the team directly on architectural choices, real-world feasibility, code dependencies, and methodology.
              </p>
            </div>

            <div className="border-t border-blue-900/30 pt-4 flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
              <span>PANEL INTERROGATION</span>
              <span className="text-cyan-400 font-bold">03:00 MAX</span>
            </div>
          </motion.div>

        </div>

        {/* Equals & Total Time Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 tech-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/40 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl bg-gradient-to-r from-[#040817] via-[#061128] to-[#040817]"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Clock className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <div className="font-display text-white text-3xl sm:text-4xl tracking-wide uppercase leading-tight">
                TOTAL: 08 MINUTES PER TEAM
              </div>
              <div className="font-mono-tech text-xs text-slate-300 mt-1">
                Venue: {eventData.venue} | Strictly timed and moderated by stage session coordinators.
              </div>
            </div>
          </div>

          <div className="font-mono-tech text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 px-4 py-2 rounded-lg flex-shrink-0 uppercase font-bold shadow-md">
            STRICT STAGE LIMIT
          </div>
        </motion.div>
      </div>
    </section>
  );
};
