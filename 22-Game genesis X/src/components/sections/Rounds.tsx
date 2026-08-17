import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, MessageSquare, ShieldAlert } from 'lucide-react';
import { EventConfig } from '../../types/event';

interface RoundsProps {
  event?: EventConfig;
}

export const Rounds: React.FC<RoundsProps> = () => {
  return (
    <section id="rounds" className="py-24 bg-transparent relative z-10 overflow-hidden border-t border-[#1F0A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono text-[#E626FF] uppercase tracking-widest block mb-2 font-bold">
            STAGE STRUCTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            PITCH FORMAT
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6B1FDB] to-[#FF3BE6] mt-4 rounded-full"></div>
        </div>

        {/* Premium Event-Poster-Like Composition: 10 MIN PITCH + 5 MIN Q&A */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* 10 MIN PITCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#160814] p-8 rounded-xl border border-[#8F26FF]/40 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded bg-[#8F26FF]/20 text-[#E626FF] font-mono text-xs font-bold uppercase">
                STAGE 01
              </span>
              <Presentation className="w-8 h-8 text-[#FF3BE6]" />
            </div>

            <div className="text-5xl font-extrabold font-mono text-white mb-2 tracking-tight">
              10 MIN
            </div>

            <h3 className="text-xl font-bold font-display text-white mb-2 uppercase">
              PITCH PRESENTATION
            </h3>

            <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
              Each team receives a maximum of 10 minutes to present their core gameplay mechanics, story/theme, target audience, and technical feasibility deck.
            </p>
          </motion.div>

          {/* 5 MIN Q&A */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#160814] p-8 rounded-xl border border-[#E626FF]/40 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded bg-[#E626FF]/20 text-[#FF3BE6] font-mono text-xs font-bold uppercase">
                STAGE 02
              </span>
              <MessageSquare className="w-8 h-8 text-[#E626FF]" />
            </div>

            <div className="text-5xl font-extrabold font-mono text-white mb-2 tracking-tight">
              5 MIN
            </div>

            <h3 className="text-xl font-bold font-display text-white mb-2 uppercase">
              IN.ZEROS PANEL Q&A
            </h3>

            <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
              Immediately following the pitch, teams engage in a 5-minute interactive Q&A session with the expert InZeros panel evaluating mechanics depth and technical vision.
            </p>
          </motion.div>

        </div>

        {/* REPORT 20 MINUTES BEFORE YOUR SLOT MANDATE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#160814] border border-[#FF3BE6]/50 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded bg-[#050408] border border-[#FF3BE6] flex items-center justify-center text-[#FF3BE6] flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#FF3BE6] font-bold uppercase tracking-wider block">
                QUEUE MANDATE:
              </span>
              <p className="text-lg md:text-xl font-bold font-display text-white">
                REPORT 20 MINUTES BEFORE YOUR SLOT
              </p>
              <p className="text-xs text-[#B8B0C4] font-mono">
                Venue: CS GALAXY • Skipping the designated pitch order without prior approval is prohibited.
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded bg-[#FF3BE6]/20 border border-[#FF3BE6]/50 text-[#FF3BE6] font-mono font-bold text-xs uppercase flex-shrink-0">
            CS GALAXY ARENA
          </div>
        </motion.div>

      </div>
    </section>
  );
};
