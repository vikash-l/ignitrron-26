import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Trophy, Award, CheckCircle2, ChevronRight, Target } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  const round1 = eventData.rounds[0];
  const round2 = eventData.rounds[1];

  return (
    <section id="rounds" className="py-24 relative overflow-hidden border-t border-[#25292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="COMPETITION STAGES"
          title="ROUNDS &amp; TIMELINE"
          subtitle="A high-stakes progression from Round 1 open qualification to the Top 10 championship shootout."
          align="center"
        />

        {/* Central Animated Tournament Progression Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-5xl mx-auto tech-panel rounded-2xl p-6 sm:p-8 border border-[#25292E] shadow-xl bg-gradient-to-r from-[#050505] via-[#191C20] to-[#050505]"
        >
          <div className="text-center mb-6">
            <span className="font-mono-tech text-[11px] text-[#A30F18] uppercase tracking-widest font-bold">
              TOURNAMENT ADVANCEMENT PIPELINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
            {eventData.progression.map((step, idx) => {
              const isLast = idx === eventData.progression.length - 1;
              const isFinal = idx === 3;
              const isTop10 = idx === 2;

              return (
                <React.Fragment key={idx}>
                  <div className={`tech-panel p-4 rounded-xl text-center border transition-all duration-300 ${
                    isLast 
                      ? 'border-[#A30F18]/60 bg-[#191C20]/90 shadow-[0_0_20px_rgba(163,15,24,0.2)]' 
                      : isTop10
                      ? 'border-[#A30F18]/40 bg-[#191C20]/80'
                      : isFinal
                      ? 'border-[#4A5056]/50 bg-[#111316]/80'
                      : 'border-[#25292E] bg-[#111316]/50'
                  }`}>
                    <div className="text-[10px] font-mono-tech text-[#777D83] mb-1">
                      STAGE {step.step}
                    </div>
                    <div className={`font-display text-2xl tracking-wide uppercase leading-none ${
                      isLast ? 'text-[#A30F18] font-bold' : isTop10 ? 'text-[#E8E8E8]' : 'text-[#E8E8E8]'
                    }`}>
                      {step.count}
                    </div>
                    <div className="text-[9px] font-mono-tech text-[#9A9DA1] uppercase tracking-wider mt-1.5 truncate">
                      {step.label}
                    </div>
                  </div>

                  {!isLast && (
                    <div className="hidden sm:flex justify-center text-[#A30F18]/60">
                      <ChevronRight className="h-4 w-4 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* Two-Stage Timeline (Round 1 vs Final Round) */}
        <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* DAY 1: ROUND 1 — QUALIFICATION */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="tech-panel rounded-2xl p-7 sm:p-9 border border-[#25292E] relative overflow-hidden flex flex-col justify-between shadow-xl bg-gradient-to-b from-[#191C20]/95 to-[#050505]/95 group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#4A5056] to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-[#111316]/90 border border-[#25292E] text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold">
                  {round1.day} | {round1.roundNumber}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#111316] border border-[#25292E] flex items-center justify-center">
                  <Timer className="h-5 w-5 text-[#A30F18]" />
                </div>
              </div>

              <h3 className="text-[#E8E8E8] font-display text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-2 group-hover:text-[#A30F18] transition-colors">
                {round1.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#A30F18] font-mono-tech text-xs font-bold uppercase tracking-wider">
                  MAX TIME: {round1.maxTime}
                </span>
                <span className="text-[#4A5056]">•</span>
                <span className="text-[#9A9DA1] font-mono-tech text-xs">
                  {round1.participants}
                </span>
              </div>

              <p className="text-[#9A9DA1] text-sm leading-relaxed mb-6 font-normal">
                {round1.description}
              </p>

              {/* Day 1 Protocols */}
              <div className="space-y-2.5 pt-4 border-t border-[#25292E]">
                {round1.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9A9DA1]">
                    <CheckCircle2 className="h-4 w-4 text-[#A30F18] flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#25292E] pt-5 mt-8 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#9A9DA1]">OUTCOME</span>
              <span className="text-[#E8E8E8] font-bold bg-[#111316]/90 border border-[#25292E] px-2.5 py-1 rounded">
                TOP 10 ADVANCE TO FINAL ROUND
              </span>
            </div>
          </motion.div>

          {/* DAY 1: ROUND 2 — FINAL ROUND */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="tech-panel rounded-2xl p-7 sm:p-9 border border-[#A30F18]/40 relative overflow-hidden flex flex-col justify-between shadow-2xl bg-gradient-to-b from-[#191C20]/95 via-[#111316]/95 to-[#050505]/98 group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A30F18] to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded bg-[#A30F18] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold">
                  {round2.day} | {round2.roundNumber}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#111316] border border-[#A30F18]/50 flex items-center justify-center shadow-[0_0_15px_rgba(163,15,24,0.2)]">
                  <Trophy className="h-5 w-5 text-[#A30F18]" />
                </div>
              </div>

              <h3 className="text-[#E8E8E8] font-display text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-2 group-hover:text-[#A30F18] transition-colors">
                {round2.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#A30F18] font-mono-tech text-xs font-bold uppercase tracking-wider">
                  MAX TIME: {round2.maxTime}
                </span>
                <span className="text-[#4A5056]">•</span>
                <span className="text-[#E8E8E8] font-mono-tech text-xs font-semibold">
                  {round2.participants}
                </span>
              </div>

              <p className="text-[#9A9DA1] text-sm leading-relaxed mb-6 font-normal">
                {round2.description}
              </p>

              {/* Final Round Protocols */}
              <div className="space-y-2.5 pt-4 border-t border-[#25292E]">
                {round2.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9A9DA1]">
                    <Target className="h-4 w-4 text-[#A30F18] flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#25292E] pt-5 mt-8 flex items-center justify-between text-xs font-mono-tech">
              <span className="text-[#9A9DA1]">WINNING CRITERIA</span>
              <span className="text-[#A30F18] font-bold bg-[#111316]/90 border border-[#A30F18]/40 px-2.5 py-1 rounded">
                FASTEST ADJUSTED TIME WINS
              </span>
            </div>
          </motion.div>

        </div>

        {/* Official Prizes Showcase */}
        <div id="prizes" className="pt-8">
          <div className="text-center mb-10">
            <span className="font-mono-tech text-xs text-[#A30F18] uppercase tracking-widest font-bold bg-[#111316]/90 border border-[#A30F18]/40 px-3 py-1 rounded shadow-sm">
              AWARDS &amp; RECOGNITION
            </span>
            <h3 className="text-[#E8E8E8] font-display text-3xl sm:text-4xl uppercase tracking-wide mt-3">
              OFFICIAL CASH PRIZES
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {eventData.prizes.map((prize, idx) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;

              return (
                <motion.div
                  key={prize.position}
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`tech-panel rounded-2xl p-7 border flex flex-col justify-between text-center relative overflow-hidden transition-all duration-300 shadow-xl ${
                    isFirst
                      ? 'border-[#A30F18]/60 bg-gradient-to-b from-[#191C20]/98 via-[#111316]/98 to-[#050505]/98 shadow-[0_24px_60px_-15px_rgba(5,5,5,0.95),0_0_30px_rgba(163,15,24,0.2)] md:-translate-y-3'
                      : isSecond
                      ? 'border-[#4A5056] bg-[#111316]/90'
                      : 'border-[#25292E] bg-[#111316]/80'
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent ${
                    isFirst ? 'via-[#A30F18]' : isSecond ? 'via-[#4A5056]' : 'via-[#25292E]'
                  } to-transparent`} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-tech text-[10px] text-[#777D83] uppercase tracking-widest">
                        POSITION
                      </span>
                      <span className={`px-2 py-0.5 rounded font-mono-tech text-[10px] uppercase tracking-wider font-bold ${
                        isFirst 
                          ? 'bg-[#191C20] border border-[#A30F18]/60 text-[#A30F18]' 
                          : isSecond
                          ? 'bg-[#191C20] border border-[#4A5056] text-[#E8E8E8]'
                          : 'bg-[#191C20] border border-[#25292E] text-[#9A9DA1]'
                      }`}>
                        {prize.position}
                      </span>
                    </div>

                    <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      isFirst 
                        ? 'bg-[#050505] border border-[#A30F18]/60 shadow-[0_0_20px_rgba(163,15,24,0.25)]' 
                        : 'bg-[#050505] border border-[#25292E]'
                    }`}>
                      {isFirst ? (
                        <Trophy className="h-7 w-7 text-[#A30F18]" />
                      ) : (
                        <Award className={`h-7 w-7 ${isSecond ? 'text-[#E8E8E8]' : 'text-[#777D83]'}`} />
                      )}
                    </div>

                    <div className={`font-display text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-1 leading-none ${
                      isFirst ? 'text-[#A30F18] glow-red' : 'text-[#E8E8E8]'
                    }`}>
                      {prize.amount}
                    </div>

                    <h4 className="text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold mb-2">
                      {prize.title}
                    </h4>

                    <p className="text-[#9A9DA1] text-xs leading-relaxed font-normal">
                      {prize.description}
                    </p>
                  </div>

                  <div className="border-t border-[#25292E] pt-3 mt-4 text-[10px] font-mono-tech text-[#777D83]">
                    OFFICIAL IGNITRRON 26 CASH PRIZE
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};




