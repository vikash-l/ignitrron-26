import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, ChevronRight, Sparkles } from 'lucide-react';
import { BATTLEFIELD_ROUNDS } from '../data/quizData';

export const BattlefieldRounds = () => {
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
              MISSION STAGES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            THE <span className="text-[#38E39A] font-mono">BATTLEFIELD</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-lg mt-3 font-normal"
          >
            Tactical venue progression across the two official rounds of Marvel Quiz.
          </motion.p>
        </div>

        {/* 2 Round Cards Grid with Mission Transition Arrow */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Round 1 Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel p-8 rounded-3xl border-[#38E39A]/30 glass-panel-hover relative"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#38E39A] font-bold tracking-widest uppercase">
                {BATTLEFIELD_ROUNDS[0].title}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#38E39A]/20 text-[#38E39A] font-mono text-[10px] font-bold border border-[#38E39A]/40">
                FIRST STAGE
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#38E39A]" />
              {BATTLEFIELD_ROUNDS[0].venue}
            </h3>

            <p className="text-xs text-[#8E9A94] leading-relaxed font-normal mb-6">
              {BATTLEFIELD_ROUNDS[0].description}
            </p>

            <div className="pt-4 border-t border-[#38E39A]/10 flex items-center justify-between font-mono text-[10px] text-[#B99A45]">
              <span>STATUS: INITIAL ENTRY</span>
              <span className="text-[#38E39A]">VERIFIED VENUE</span>
            </div>
          </motion.div>

          {/* Center Tactical Transition Indicator */}
          <div className="md:col-span-2 flex flex-col items-center justify-center text-center my-2 md:my-0">
            <div className="w-12 h-12 rounded-full bg-[#07100B] border border-[#B99A45] flex items-center justify-center text-[#E1C66A] shadow-[0_0_15px_#B99A45] animate-pulse">
              <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
            </div>
            <span className="font-mono text-[9px] text-[#B99A45] tracking-widest font-bold mt-2">
              MISSION TRANSITION
            </span>
          </div>

          {/* Round 2 Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel p-8 rounded-3xl border-[#B99A45]/40 bg-[#07100B]/90 shadow-gold-glow relative"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#E1C66A] font-bold tracking-widest uppercase">
                {BATTLEFIELD_ROUNDS[1].title}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#B99A45]/20 text-[#E1C66A] font-mono text-[10px] font-bold border border-[#B99A45]/40">
                FINAL SHOWDOWN
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-3 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#E1C66A]" />
              {BATTLEFIELD_ROUNDS[1].venue}
            </h3>

            <p className="text-xs text-[#8E9A94] leading-relaxed font-normal mb-6">
              {BATTLEFIELD_ROUNDS[1].description}
            </p>

            <div className="pt-4 border-t border-[#B99A45]/20 flex items-center justify-between font-mono text-[10px] text-[#E1C66A]">
              <span>STATUS: FINAL ARENA</span>
              <span className="text-[#38E39A]">VERIFIED VENUE</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
