import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="08"
          badge="AWARDS &amp; RECOGNITION"
          title="WINNER RECOGNITION"
          subtitle="2 winners recognized per category across all 5 official presentation domains."
          align="center"
        />

        {/* Total Prize Pool Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto mb-10 text-center"
        >
          <div className="tech-panel rounded-2xl p-6 border-2 border-cyan-500/40 bg-gradient-to-b from-[#06122c]/95 to-[#020714]/95 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <span className="font-mono-tech text-xs text-cyan-400 font-bold uppercase tracking-widest block mb-1">
              TOTAL PRIZE POOL
            </span>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400">
              {eventData.prizes.totalPool}
            </div>
            <div className="mt-2 text-xs font-mono-tech text-slate-400">
              5 Categories × 2 Winners • 5 × ₹5,000 (₹25,000) + 5 × ₹4,000 (₹20,000)
            </div>
          </div>
        </motion.div>

        {/* 2 Prize Tier Modules (Winner 01 and Winner 02) */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {eventData.prizes.tiers.map((prize, idx) => {
            const isFirst = idx === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 38, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`tech-panel rounded-2xl p-8 border flex flex-col justify-between text-center relative overflow-hidden group transition-all duration-300 shadow-xl ${
                  isFirst
                    ? 'border-blue-500/50 bg-[#061028]/95 hover:border-cyan-400/70 shadow-blue-950/80 hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.4)]'
                    : 'border-cyan-500/35 bg-[#030918]/85 hover:border-blue-400/60 shadow-blue-950/50 hover:shadow-[0_20px_45px_-10px_rgba(6,182,212,0.3)]'
                }`}
              >
                {/* Top hairline highlight */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${
                  isFirst ? 'via-cyan-400/60' : 'via-blue-400/50'
                } to-transparent`} />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-tech text-[10px] text-slate-500 uppercase tracking-widest">
                      CATEGORY TIER
                    </span>
                    <span className={`px-2.5 py-0.5 rounded font-mono-tech text-[10px] uppercase tracking-wider font-bold ${
                      isFirst 
                        ? 'bg-blue-900/50 border border-blue-700/50 text-blue-300' 
                        : 'bg-cyan-950/40 border border-cyan-800/40 text-cyan-300'
                    }`}>
                      {prize.position}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-blue-950/80 border border-blue-800/50 flex items-center justify-center mx-auto mb-5 group-hover:scale-108 transition-transform duration-300">
                    {isFirst ? (
                      <Trophy className="h-8 w-8 text-cyan-400" />
                    ) : (
                      <Award className="h-8 w-8 text-blue-400" />
                    )}
                  </div>

                  {/* Title & Position */}
                  <h3 className="text-white font-display text-2xl sm:text-3xl uppercase tracking-wide mb-1 group-hover:text-blue-200 transition-colors">
                    {prize.title}
                  </h3>

                  {/* Monetary Amount */}
                  <div className="font-display text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 my-3">
                    {prize.amount}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-6 max-w-xs mx-auto">
                    {prize.description}
                  </p>
                </div>

                <div className="border-t border-blue-900/30 pt-4 mt-4 flex items-center justify-center gap-1.5 font-mono-tech text-xs text-cyan-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{prize.scope}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Summary Note */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center max-w-xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-4 border border-blue-900/40 text-slate-300 font-mono-tech text-xs shadow-md">
            <span className="text-cyan-400 font-bold">TOTAL POOL:</span> 5 × ₹5,000 (₹25,000) + 5 × ₹4,000 (₹20,000) = ₹45,000 Total Across 5 Domains
          </div>
        </motion.div>
      </div>
    </section>
  );
};
