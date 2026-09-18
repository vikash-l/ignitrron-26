import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_ROUNDS } from '../data/quizData';
import { Compass, Zap, Globe, Crown, Sparkles, BookOpen } from 'lucide-react';
import { sounds } from '../services/soundEffects';

const iconMap = {
  Compass: Compass,
  Zap: Zap,
  Globe: Globe,
  Crown: Crown,
};

export const TimelineBranching = () => {
  const [selectedRoundId, setSelectedRoundId] = useState(TIMELINE_ROUNDS[0].id);
  const [isDeceiving, setIsDeceiving] = useState(false);
  const [deceptionNodeId, setDeceptionNodeId] = useState(null);

  const activeRound = TIMELINE_ROUNDS.find((r) => r.id === selectedRoundId) || TIMELINE_ROUNDS[0];

  const handleNodeClick = (roundId) => {
    sounds.playClick();
    setDeceptionNodeId(roundId);
    setIsDeceiving(true);

    setTimeout(() => {
      setSelectedRoundId(roundId);
      setIsDeceiving(false);
    }, 400);
  };

  return (
    <section id="rounds" className="relative py-28 bg-[#050706] overflow-hidden">
      <div className="absolute inset-0 bg-timeline-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#38E39A]/30 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38E39A]" />
            <span className="font-mono text-xs text-[#38E39A] tracking-[0.3em]">
              TEMPORAL BRANCHING DOSSIER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F3]"
          >
            CHOOSE YOUR <span className="text-[#B99A45] font-mono">TIMELINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#8E9A94] text-base max-w-xl mt-3 font-normal"
          >
            Explore the four distinct event stages designed to test Marvel fans across characters, movies, storylines, and iconic multiverse moments.
          </motion.p>
        </div>

        {/* SVG Animated Timeline Branching Container */}
        <div className="relative mb-12 hidden md:block">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: '140px' }}>
            <path
              d="M 100 70 Q 300 20, 500 70 T 900 70"
              fill="none"
              stroke="rgba(56, 227, 154, 0.2)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {isDeceiving && (
              <>
                <motion.path
                  d="M 100 70 Q 300 120, 500 70 T 900 70"
                  fill="none"
                  stroke="#38E39A"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.path
                  d="M 100 70 Q 300 -30, 500 70 T 900 70"
                  fill="none"
                  stroke="#B99A45"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </>
            )}
          </svg>

          {/* 4 Portal Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-4">
            {TIMELINE_ROUNDS.map((round) => {
              const IconComp = iconMap[round.icon] || Compass;
              const isSelected = selectedRoundId === round.id;
              const isDeceivingThis = isDeceiving && deceptionNodeId === round.id;

              return (
                <div key={round.id} className="relative flex flex-col items-center">
                  
                  {isDeceivingThis && (
                    <motion.div
                      animate={{ y: [-15, 15, 0], opacity: [0.8, 0] }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-16 h-16 rounded-full border-2 border-[#B99A45] bg-[#B99A45]/20 pointer-events-none"
                    />
                  )}

                  <button
                    onClick={() => handleNodeClick(round.id)}
                    onMouseEnter={() => sounds.playHover()}
                    className={`group relative p-6 rounded-3xl transition-all duration-300 w-full flex flex-col items-center text-center cursor-pointer pointer-events-auto ${
                      isSelected
                        ? 'glass-panel bg-[#07100B]/95 border-[#38E39A] shadow-emerald-glow scale-105'
                        : 'glass-panel opacity-70 hover:opacity-100 hover:border-[#38E39A]/40'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all duration-300 relative ${
                        isSelected
                          ? 'bg-[#16A66A] text-[#F4F5F3] shadow-[0_0_30px_#38E39A] border-2 border-[#38E39A]'
                          : 'bg-[#07100B] text-[#8E9A94] border border-[#38E39A]/30 group-hover:border-[#38E39A]'
                      }`}
                    >
                      <IconComp className="w-7 h-7" />
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#38E39A]/40 animate-portal-spin pointer-events-none" />
                    </div>

                    <span className="font-mono text-[10px] text-[#B99A45] tracking-widest font-bold mb-1">
                      STAGE {round.number}
                    </span>
                    <span className="font-display font-bold text-sm text-[#F4F5F3] group-hover:text-[#38E39A] transition-colors">
                      {round.title}
                    </span>
                  </button>

                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Timeline Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRound.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border-[#38E39A]/30 shadow-emerald-lg relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#16A66A]/20 border border-[#38E39A]/40 font-mono text-xs text-[#38E39A] font-bold">
                    STAGE {activeRound.number} DOSSIER
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#B99A45]/10 border border-[#B99A45]/40 font-mono text-xs text-[#E1C66A]">
                    FOCUS: {activeRound.difficulty}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#F4F5F3]">
                  {activeRound.title}
                </h3>

                <p className="font-mono text-sm text-[#B99A45] font-semibold">
                  "{activeRound.tagline}"
                </p>

                <p className="text-[#8E9A94] text-base leading-relaxed font-normal">
                  {activeRound.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border-[#38E39A]/20 bg-[#07100B]/80 text-center">
                <span className="font-mono text-xs text-[#8E9A94] mb-4">
                  EVENT RULES & REGULATIONS
                </span>

                <a
                  href="#rules"
                  onClick={() => sounds.playClick()}
                  className="btn-timeline-glow w-full py-3.5 rounded-xl font-mono text-xs tracking-wider text-[#F4F5F3] font-bold shadow-emerald-glow flex items-center justify-center gap-2 group cursor-pointer pointer-events-auto"
                >
                  <BookOpen className="w-4 h-4 text-[#38E39A]" />
                  <span>VIEW RULES & GUIDE</span>
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
