import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, ChevronRight, Sparkles, Trophy, Users } from 'lucide-react';
import { TIMELINE_ROUNDS } from '../data/quizData';

export const RoundsSection = () => {
  return (
    <section id="rounds" className="relative py-24 bg-[#030504] border-t border-[#38E39A]/15 overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/40 mb-3"
          >
            <Shield className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">
              EVENT ROUND STRUCTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            EVENT <span className="text-[#38E39A] font-mono">ROUNDS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-lg mt-3 font-normal"
          >
            Two-stage tournament structure for Marvel Quiz at IGNITRRON'26.
          </motion.p>
        </div>

        {/* 2 Round Cards Grid with Center Transition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Round 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel p-8 rounded-3xl border-[#38E39A]/30 glass-panel-hover relative"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#38E39A] font-bold tracking-widest uppercase">
                01 // QUIZ
              </span>
              <span className="px-3 py-1 rounded-full bg-[#38E39A]/20 text-[#38E39A] font-mono text-[10px] font-bold border border-[#38E39A]/40">
                ROUND 01
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-1">
              MARVEL QUIZ
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#B99A45] font-mono mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#38E39A]" />
              <span>VENUE: {TIMELINE_ROUNDS[0].venue}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#8E9A94] leading-relaxed font-normal mb-6">
              {TIMELINE_ROUNDS[0].description}
            </p>

            {/* Strong Visual Qualification Highlight */}
            <div className="p-3.5 rounded-2xl bg-[#16A66A]/20 border border-[#38E39A]/50 flex items-center justify-between shadow-[0_0_15px_rgba(56,227,154,0.2)]">
              <div className="flex items-center gap-2 text-[#38E39A] font-mono text-xs font-bold">
                <Users className="w-4 h-4" />
                <span>TOP 15 TEAMS QUALIFY</span>
              </div>
              <Sparkles className="w-4 h-4 text-[#38E39A] animate-pulse" />
            </div>
          </motion.div>

          {/* Center Transition Indicator */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center my-2 md:my-0">
            <div className="w-12 h-12 rounded-full bg-[#07100B] border border-[#B99A45] flex items-center justify-center text-[#E1C66A] shadow-[0_0_15px_#B99A45] animate-pulse">
              <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
            </div>
            <span className="font-mono text-[9px] text-[#B99A45] tracking-widest font-bold mt-2 uppercase">
              TOP 15 QUALIFY
            </span>
          </div>

          {/* Round 2 Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel p-8 rounded-3xl border-[#B99A45]/40 bg-[#07100B]/90 shadow-gold-glow relative"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#E1C66A] font-bold tracking-widest uppercase">
                02 // AUCTION
              </span>
              <span className="px-3 py-1 rounded-full bg-[#B99A45]/20 text-[#E1C66A] font-mono text-[10px] font-bold border border-[#B99A45]/40">
                ROUND 02
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-1">
              MARVEL AUCTION
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#E1C66A] font-mono mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#B99A45]" />
              <span>VENUE: {TIMELINE_ROUNDS[1].venue}</span>
            </div>

            <p className="text-xs sm:text-sm text-[#8E9A94] leading-relaxed font-normal mb-6">
              {TIMELINE_ROUNDS[1].description}
            </p>

            {/* Final Stage Indicator */}
            <div className="p-3.5 rounded-2xl bg-[#B99A45]/20 border border-[#B99A45]/50 flex items-center justify-between shadow-[0_0_15px_rgba(185,154,69,0.2)]">
              <div className="flex items-center gap-2 text-[#E1C66A] font-mono text-xs font-bold">
                <Trophy className="w-4 h-4 text-[#E1C66A]" />
                <span>TOP 15 TEAMS ONLY</span>
              </div>
              <Sparkles className="w-4 h-4 text-[#E1C66A] animate-pulse" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
