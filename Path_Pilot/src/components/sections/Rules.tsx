import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ChevronDown, 
  Users, 
  Cpu, 
  Bot, 
  Flag, 
  AlertTriangle, 
  Ban, 
  ShieldAlert, 
  Activity, 
  Timer, 
  Clock, 
  Award 
} from 'lucide-react';
import { eventData, type RuleCategory } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rules: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('team');

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'team':
        return <Users className="h-5 w-5 text-[#A30F18]" />;
      case 'robot':
        return <Cpu className="h-5 w-5 text-[#777D83]" />;
      case 'autonomous':
        return <Bot className="h-5 w-5 text-[#A30F18]" />;
      case 'track-rules':
        return <Flag className="h-5 w-5 text-[#777D83]" />;
      case 'penalties':
        return <AlertTriangle className="h-5 w-5 text-[#A30F18]" />;
      case 'disqualification':
        return <Ban className="h-5 w-5 text-[#A30F18]" />;
      case 'safety':
        return <ShieldAlert className="h-5 w-5 text-[#777D83]" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-[#A30F18]" />;
    }
  };

  return (
    <section id="rules" className="py-24 relative overflow-hidden border-t border-[#25292E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="OFFICIAL RULEBOOK"
          title="RULES &amp; PROTOCOLS"
          subtitle="Official technical compliance guidelines, scoring telemetry, penalty structures, and safety standards."
          align="center"
        />

        {/* Futuristic Timing & Telemetry Scoring Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 tech-panel rounded-3xl p-6 sm:p-9 border border-[#25292E] relative overflow-hidden shadow-2xl bg-gradient-to-b from-[#191C20]/95 via-[#111316]/95 to-[#050505]/98"
        >
          {/* HUD Corner Reticles */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#A30F18]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#4A5056]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#4A5056]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#A30F18]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#25292E]">
            <div className="flex items-center gap-2.5">
              <Activity className="h-5 w-5 text-[#A30F18] animate-pulse" />
              <span className="font-mono-tech text-xs text-[#E8E8E8] font-bold uppercase tracking-widest">
                OFFICIAL TIMING &amp; SCORING TELEMETRY PANEL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A30F18] animate-ping" />
              <span className="font-mono-tech text-[10px] text-[#A30F18] uppercase tracking-widest font-bold">
                OPTICAL SENSING ACTIVE
              </span>
            </div>
          </div>

          {/* 4 Telemetry Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* TIMER START */}
            <div className="tech-panel p-4 rounded-xl border border-[#25292E] bg-[#111316]/70">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[9px] text-[#777D83] uppercase tracking-widest">GATE 01</span>
                <Timer className="h-4 w-4 text-[#A30F18]" />
              </div>
              <div className="text-[10px] font-mono-tech text-[#E8E8E8] uppercase tracking-widest font-bold">
                TIMER START
              </div>
              <p className="text-xs text-[#9A9DA1] mt-1 font-mono-tech">
                {eventData.scoring.startCondition}
              </p>
            </div>

            {/* TIMER STOP */}
            <div className="tech-panel p-4 rounded-xl border border-[#25292E] bg-[#111316]/70">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[9px] text-[#777D83] uppercase tracking-widest">GATE 02</span>
                <Clock className="h-4 w-4 text-[#777D83]" />
              </div>
              <div className="text-[10px] font-mono-tech text-[#E8E8E8] uppercase tracking-widest font-bold">
                TIMER STOP
              </div>
              <p className="text-xs text-[#9A9DA1] mt-1 font-mono-tech">
                {eventData.scoring.stopCondition}
              </p>
            </div>

            {/* RANKING METHOD */}
            <div className="tech-panel p-4 rounded-xl border border-[#25292E] bg-[#111316]/70">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[9px] text-[#777D83] uppercase tracking-widest">LEADERBOARD</span>
                <Activity className="h-4 w-4 text-[#A30F18]" />
              </div>
              <div className="text-[10px] font-mono-tech text-[#E8E8E8] uppercase tracking-widest font-bold">
                RANKING METHOD
              </div>
              <p className="text-xs text-[#9A9DA1] mt-1 font-mono-tech">
                {eventData.scoring.rankingMethod}
              </p>
            </div>

            {/* WINNER CRITERIA */}
            <div className="tech-panel p-4 rounded-xl border border-[#A30F18]/40 bg-[#191C20]/80">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[9px] text-[#A30F18] uppercase tracking-widest">CHAMPIONSHIP</span>
                <Award className="h-4 w-4 text-[#A30F18]" />
              </div>
              <div className="text-[10px] font-mono-tech text-[#A30F18] uppercase tracking-widest font-bold">
                CHAMPION RECOGNITION
              </div>
              <p className="text-xs text-[#E8E8E8] mt-1 font-mono-tech font-medium">
                {eventData.scoring.winnerCondition}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Clean Expandable Rule Categories Accordions */}
        <div className="space-y-4 max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <span className="font-mono-tech text-xs text-[#E8E8E8] uppercase tracking-widest font-bold bg-[#111316]/90 border border-[#25292E] px-3 py-1 rounded shadow-sm">
              OFFICIAL COMPLIANCE CATEGORIES
            </span>
          </div>

          {eventData.ruleCategories.map((cat: RuleCategory, idx: number) => {
            const isOpen = openCategory === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`tech-panel rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? 'border-[#A30F18]/60 bg-[#191C20]/95 shadow-xl shadow-black/80' 
                    : 'border-[#25292E] hover:border-[#A30F18]/40 bg-[#111316]/80'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-5 pr-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#191C20] border border-[#A30F18]/60' : 'bg-[#111316] border border-[#25292E]'
                    }`}>
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono-tech text-[10px] text-[#A30F18] font-bold">
                          CATEGORY 0{idx + 1}
                        </span>
                        <span className="text-[#4A5056]">•</span>
                        <span className="font-mono-tech text-[9px] text-[#E8E8E8] uppercase tracking-wider bg-[#191C20]/90 border border-[#25292E] px-2 py-0.5 rounded">
                          {cat.badge}
                        </span>
                      </div>
                      <h3 className="text-[#E8E8E8] font-display text-2xl uppercase tracking-wide">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${
                      isOpen ? 'bg-[#A30F18] text-[#FFFFFF] border-[#A30F18]' : 'text-[#9A9DA1] border-[#25292E]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Expanded Rule Items Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#25292E] space-y-3">
                        {cat.items.map((item, itemIdx) => {
                          const isSpecialNote = item.includes('IMPORTANT:');

                          return (
                            <div
                              key={itemIdx}
                              className={`p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed flex items-start gap-3 ${
                                isSpecialNote 
                                  ? 'bg-[#191C20]/90 border border-[#A30F18]/50 text-[#E8E8E8] font-medium' 
                                  : 'bg-[#050505]/70 border border-[#25292E] text-[#9A9DA1]'
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A30F18] flex-shrink-0 mt-2" />
                              <span>{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Adherence Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-4 border border-[#25292E] flex items-center gap-3 bg-[#111316]/60 text-center sm:text-left flex-col sm:flex-row shadow-md">
            <ShieldCheck className="h-5 w-5 text-[#A30F18] flex-shrink-0" />
            <p className="text-[#9A9DA1] text-xs font-normal">
              Compliance with autonomous constraints, dimensional limits (250×250 mm), and battery voltage (&lt; 16.8 V) is strictly enforced by session marshals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




