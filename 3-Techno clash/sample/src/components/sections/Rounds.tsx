import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Binary, Terminal, Bug, Key, BrainCircuit, Zap, Clock, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const Rounds: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const r1 = eventData.round1;

  const getChallengeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return <Binary className="w-6 h-6 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-blue-400" />;
      case 'Bug': return <Bug className="w-6 h-6 text-violet-400" />;
      case 'Key': return <Key className="w-6 h-6 text-amber-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-fuchsia-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleCardClick = (id: string) => {
    sound.playClick();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="round1" className="py-24 relative overflow-hidden bg-slate-950 border-t border-cyan-900/30">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(112,0,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" /> STAGE 01
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
            {r1.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500">— {r1.mainTitle}</span>
          </h2>
          <p className="text-slate-300 text-sm font-mono mt-3 leading-relaxed max-w-2xl mx-auto">
            "{r1.description}"
          </p>
        </div>

        {/* VISUAL QUALIFICATION GATE (25 TEAMS → TOP 10 TEAMS) */}
        <div className="mb-16 bg-[#080d24]/90 border-2 border-violet-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(112,0,255,0.25)] backdrop-blur-xl text-center font-mono">
          <div className="text-xs font-bold text-violet-400 tracking-widest mb-4">
            ROUND 1 QUALIFICATION GATE
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-black">
            <div className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-cyan-300">
              {r1.qualificationGate.start}
            </div>
            <ArrowRight className="w-4 h-4 text-violet-400 hidden sm:block" />
            <div className="bg-violet-950/80 border border-violet-400 px-5 py-2.5 rounded-xl text-white shadow-[0_0_20px_#7000FF]">
              {r1.qualificationGate.roundName}
            </div>
            <ArrowRight className="w-4 h-4 text-violet-400 hidden sm:block" />
            <div className="bg-amber-950/80 border border-amber-400 px-5 py-2.5 rounded-xl text-amber-300 font-extrabold shadow-[0_0_20px_rgba(255,184,0,0.3)]">
              {r1.qualificationGate.target}
            </div>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:block" />
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 px-4 py-2 rounded-xl font-black">
              {r1.qualificationGate.nextStage} 👑
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-violet-900/40 text-[11px] text-slate-400 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>TIME LIMIT: <strong className="text-cyan-300">{r1.timeLimitNotice}</strong></span>
          </div>
        </div>

        {/* 6 INTERACTIVE CHALLENGE MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {r1.challenges.map((challenge) => {
            const isExpanded = expandedId === challenge.id;

            return (
              <motion.div
                key={challenge.id}
                layout
                onClick={() => handleCardClick(challenge.id)}
                onMouseEnter={() => sound.playHover()}
                className={`group relative bg-[#080d24]/90 border rounded-3xl p-6 shadow-xl transition-all duration-300 cursor-pointer font-mono overflow-hidden ${
                  isExpanded
                    ? 'border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.3)] bg-slate-900'
                    : 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition">
                    {getChallengeIcon(challenge.iconName)}
                  </div>
                  <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    {challenge.codeNumber}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition">
                  {challenge.title}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold mb-3">
                  "{challenge.summary}"
                </p>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 border-t border-cyan-900/40 space-y-3"
                    >
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        {challenge.description}
                      </p>
                      {challenge.exampleSnippet && (
                        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/20 text-[11px] text-cyan-300 font-mono">
                          <span className="text-[9px] text-slate-500 block mb-1">SAMPLE MODULE PARADIGM:</span>
                          <code>{challenge.exampleSnippet}</code>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Toggle Cue */}
                <div className="mt-4 pt-3 border-t border-cyan-900/40 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-cyan-300">
                  <span>{isExpanded ? 'CLICK TO COLLAPSE' : 'CLICK TO EXPAND CHALLENGE'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
