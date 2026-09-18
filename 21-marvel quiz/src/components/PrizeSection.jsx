import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Award, Sparkles } from 'lucide-react';
import { OFFICIAL_EVENT_DETAILS } from '../data/quizData';

export const PrizeSection = () => {
  return (
    <section id="prizes" className="relative py-24 bg-[#07100B]/60 border-y border-[#38E39A]/15 overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#B99A45]/40 mb-3"
          >
            <Gift className="w-3.5 h-3.5 text-[#B99A45]" />
            <span className="font-mono text-xs text-[#E1C66A] tracking-[0.25em]">EVENT REWARDS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            THE <span className="text-[#38E39A] font-mono">REWARD</span>
          </motion.h2>

          {/* Prominent NO CASH PRIZES Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="my-6 inline-flex flex-col items-center p-6 rounded-2xl glass-panel border-[#B99A45]/50 bg-[#07100B]/90 shadow-gold-glow max-w-md"
          >
            <span className="px-3 py-1 rounded-full bg-[#B99A45]/20 border border-[#B99A45]/50 font-mono text-xs font-extrabold text-[#E1C66A] uppercase tracking-widest mb-2">
              NO CASH PRIZES
            </span>
            <p className="font-display font-bold text-lg text-[#F4F5F3]">
              Fun event with goodies.
            </p>
            <p className="text-xs text-[#8E9A94] mt-2 font-normal text-center">
              Designed as an engaging crowd-attraction activity offering exciting Marvel goodies as prizes to encourage participation.
            </p>
          </motion.div>
        </div>

        {/* 3 Reward Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border-[#38E39A]/20 flex flex-col items-center text-center glass-panel-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] mb-6">
              <Gift className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#B99A45] font-bold tracking-widest uppercase mb-2">
              EXCLUSIVE MARVEL GOODIES
            </span>

            <h3 className="font-display font-bold text-xl text-[#F4F5F3] mb-3">
              MARVEL MERCHANDISE & REWARDS
            </h3>

            <p className="text-xs text-[#8E9A94] leading-relaxed mb-6 font-normal">
              Claim exciting Marvel-themed goodies and souvenirs distributed during the Day 1 fest experience.
            </p>

            <span className="px-4 py-1.5 rounded-full bg-[#16A66A]/10 border border-[#38E39A]/30 font-mono text-[10px] text-[#38E39A] font-bold">
              ✓ INCLUDED FOR PARTICIPANTS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-3xl border-[#B99A45]/40 bg-[#07100B]/90 shadow-gold-glow flex flex-col items-center text-center scale-105 border-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#B99A45]/20 border border-[#B99A45] flex items-center justify-center text-[#E1C66A] mb-6">
              <Award className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#E1C66A] font-bold tracking-widest uppercase mb-2">
              FESTIVAL HIGHLIGHT
            </span>

            <h3 className="font-display font-bold text-xl text-[#F4F5F3] mb-3">
              CROWD ATTRACTION REWARDS
            </h3>

            <p className="text-xs text-[#8E9A94] leading-relaxed mb-6 font-normal">
              High-energy crowd participation with rewards celebrating true Marvel fans.
            </p>

            <span className="px-4 py-1.5 rounded-full bg-[#B99A45]/10 border border-[#B99A45]/50 font-mono text-[10px] text-[#E1C66A] font-bold">
              OFFICIAL IGNITRRON'26 EVENT
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border-[#38E39A]/20 flex flex-col items-center text-center glass-panel-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#16A66A]/20 border border-[#38E39A]/40 flex items-center justify-center text-[#38E39A] mb-6">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#B99A45] font-bold tracking-widest uppercase mb-2">
              LIVELY FEST ATMOSPHERE
            </span>

            <h3 className="font-display font-bold text-xl text-[#F4F5F3] mb-3">
              OPEN TO ALL PARTICIPANTS
            </h3>

            <p className="text-xs text-[#8E9A94] leading-relaxed mb-6 font-normal">
              Enjoy a lively techno-management fest atmosphere with casual and hardcore fans alike.
            </p>

            <span className="px-4 py-1.5 rounded-full bg-[#16A66A]/10 border border-[#38E39A]/30 font-mono text-[10px] text-[#38E39A] font-bold">
              ✓ DAY 01 ATTRACTION
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
