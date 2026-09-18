import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Gift } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Prizes: React.FC = () => {
  if (!eventData.prizes || eventData.prizes.length === 0) return null;

  const getPrizeIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'trophy':
        return <Trophy className="h-6 w-6 text-emerald-500" />;
      case 'award':
        return <Award className="h-6 w-6 text-emerald-500" />;
      case 'medal':
        return <Medal className="h-6 w-6 text-emerald-500" />;
      case 'gift':
        return <Gift className="h-6 w-6 text-emerald-500" />;
      default:
        return <Award className="h-6 w-6 text-emerald-500" />;
    }
  };

  return (
    <section id="prizes" className="py-24 bg-slate-950/40 relative">
      {/* Subtle Gamma-Energy glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="PRIZES & RECOGNITION"
          subtitle="Awards and rewards for winning teams and standout research performances."
          badge="REWARDS"
        />

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {eventData.prizes.map((prize, index) => {
            const isWinner = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex"
              >
                <Card
                  hoverEffect={true}
                  className={`flex flex-col justify-between p-6 bg-slate-900/30 backdrop-blur-sm border transition-all duration-300 w-full rounded-2xl text-center ${
                    isWinner
                      ? 'border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20 md:scale-105'
                      : 'border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle Icon Container */}
                    <div className="h-14 w-14 rounded-full bg-emerald-600/10 border border-emerald-900/25 flex items-center justify-center mb-5">
                      {getPrizeIcon(prize.icon)}
                    </div>

                    {/* Sub-label Badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-600/10 border border-emerald-900/20 text-[10px] font-bold tracking-widest text-emerald-500 mb-3">
                      {prize.position}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide uppercase">
                      {prize.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-6">
                      {prize.description}
                    </p>
                  </div>

                  {/* Cash Reward Amount at Bottom */}
                  {prize.amount && (
                    <div className="mt-auto border-t border-slate-900 pt-5">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">
                        REWARD VALUE
                      </span>
                      <span className="text-xl font-extrabold text-emerald-500 font-mono">
                        {prize.amount}
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Total Prize Pool Banner */}
        <div className="mt-12 text-center">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block mb-1.5">
            TOTAL PRIZE POOL
          </span>
          <span className="inline-block px-6 py-2.5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-wide shadow-md shadow-emerald-500/5">
            ₹10,000
          </span>
        </div>

      </div>
    </section>
  );
};
