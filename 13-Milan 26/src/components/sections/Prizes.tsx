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
        return <Trophy className="h-6 w-6 text-blue-500" />;
      case 'award':
        return <Award className="h-6 w-6 text-blue-500" />;
      case 'medal':
        return <Medal className="h-6 w-6 text-blue-500" />;
      case 'gift':
        return <Gift className="h-6 w-6 text-blue-500" />;
      default:
        return <Award className="h-6 w-6 text-blue-500" />;
    }
  };

  return (
    <section id="prizes" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="PRIZES & RECOGNITION"
          subtitle="Awards and rewards for winning teams and standout performances."
          badge="REWARDS"
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
                      ? 'border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.15)] ring-1 ring-blue-500/20'
                      : 'border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle Icon Container */}
                    <div className="h-14 w-14 rounded-full bg-blue-600/10 border border-blue-900/20 flex items-center justify-center mb-5">
                      {getPrizeIcon(prize.icon)}
                    </div>

                    {/* Sub-label Badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded bg-blue-600/10 border border-blue-900/20 text-[10px] font-bold tracking-widest text-blue-500 mb-3">
                      {prize.position}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide">
                      {prize.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-405 text-slate-400 font-normal leading-relaxed mb-6">
                      {prize.description}
                    </p>
                  </div>

                  {/* Cash Reward Amount at Bottom */}
                  {prize.amount && (
                    <div className="mt-auto border-t border-slate-900 pt-5">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-1">
                        REWARD VALUE
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-blue-500 font-mono">
                        {prize.amount}
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
