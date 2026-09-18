import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_ROUNDS } from '../data/quizData';
import { Compass, Zap, Globe, Crown, Play, ChevronRight, Shield } from 'lucide-react';
import { sounds } from '../services/soundEffects';

const iconMap = {
  Compass: Compass,
  Zap: Zap,
  Globe: Globe,
  Crown: Crown,
};

export const TimelineRounds = ({ onSelectRound }) => {
  const [activeRoundId, setActiveRoundId] = useState(TIMELINE_ROUNDS[0].id);

  const activeRound = TIMELINE_ROUNDS.find((r) => r.id === activeRoundId) || TIMELINE_ROUNDS[0];

  return (
    <section id="rounds" className="relative py-28 bg-[#050706] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-timeline-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#35D98B]/30 mb-3"
          >
            <span className="font-mono text-xs text-[#35D98B] tracking-[0.3em]">CHALLENGE STAGES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F7F5]"
          >
            CHOOSE YOUR <span className="text-[#C8A951] font-mono">TIMELINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-xl mt-3 font-normal"
          >
            Each timeline presents distinct rules, complexity tiers, and point rewards. Hover over nodes to inspect protocols.
          </motion.p>
        </div>

        {/* Horizontal Timeline Connector Bar for Desktop */}
        <div className="relative mb-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#35D98B]/20 via-[#C8A951]/40 to-[#35D98B]/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {TIMELINE_ROUNDS.map((round) => {
              const IconComp = iconMap[round.icon] || Compass;
              const isActive = activeRoundId === round.id;

              return (
                <button
                  key={round.id}
                  onClick={() => {
                    sounds.playClick();
                    setActiveRoundId(round.id);
                  }}
                  onMouseEnter={() => {
                    sounds.playHover();
                    setActiveRoundId(round.id);
                  }}
                  className={`group flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'glass-panel bg-[#0A100D]/90 border-[#35D98B] scale-105 shadow-emerald-glow'
                      : 'glass-panel opacity-70 hover:opacity-100 hover:border-[#35D98B]/40'
                  }`}
                >
                  {/* Central Node Circle */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#16A36A] text-[#F4F7F5] shadow-[0_0_20px_#35D98B]'
                        : 'bg-[#0A100D] text-[#8E9A94] border border-[#35D98B]/20 group-hover:border-[#35D98B]'
                    }`}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-[11px] text-[#C8A951] tracking-widest font-bold mb-1">
                    STAGE {round.number}
                  </span>
                  <span className="font-display font-bold text-sm text-[#F4F7F5] group-hover:text-[#35D98B] transition-colors">
                    {round.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Round Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRound.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border-[#35D98B]/30 shadow-emerald-lg relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#35D98B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#16A36A]/20 border border-[#35D98B]/40 font-mono text-xs text-[#35D98B] font-bold">
                    ROUND {activeRound.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C8A951]/10 border border-[#C8A951]/40 font-mono text-xs text-[#E1C66A]">
                    DIFFICULTY: {activeRound.difficulty}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#F4F7F5]">
                  {activeRound.title}
                </h3>

                <p className="font-mono text-sm text-[#C8A951] font-semibold">
                  "{activeRound.tagline}"
                </p>

                <p className="text-[#8E9A94] text-base leading-relaxed">
                  {activeRound.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-[#8E9A94]">
                  <div>QUESTIONS: <strong className="text-[#F4F7F5]">{activeRound.questionCount} ANOMALIES</strong></div>
                  <div>MAX POINTS: <strong className="text-[#35D98B]">600 PTS</strong></div>
                  <div>TIME ALLOTMENT: <strong className="text-[#C8A951]">30S / QUESTION</strong></div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border-[#35D98B]/20 bg-[#0A100D]/80">
                <Shield className="w-12 h-12 text-[#35D98B] mb-3 animate-pulse" />
                <span className="font-mono text-xs text-[#8E9A94] text-center mb-4">
                  READY TO ENTER THIS TIMELINE?
                </span>

                <button
                  onClick={() => {
                    sounds.playPortalHum();
                    onSelectRound(activeRound.id);
                  }}
                  className="btn-timeline-glow w-full py-3.5 rounded-xl font-mono text-xs tracking-wider text-[#F4F7F5] font-bold shadow-emerald-glow flex items-center justify-center gap-2 group"
                >
                  <Play className="w-4 h-4 fill-[#35D98B] text-[#35D98B]" />
                  <span>START {activeRound.title}</span>
                  <ChevronRight className="w-4 h-4 text-[#C8A951] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
