import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Gift } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Prizes: React.FC = () => {
  if (!eventData.prizes || eventData.prizes.length === 0) return null;

  const getPrizeIcon = (iconName: string, isWinner: boolean) => {
    const iconColor = isWinner ? 'text-[#C9A227]' : 'text-[#00E676]';
    switch (iconName.toLowerCase()) {
      case 'trophy':
        return <Trophy className={`h-6 w-6 ${iconColor}`} />;
      case 'award':
        return <Award className={`h-6 w-6 ${iconColor}`} />;
      case 'medal':
        return <Medal className={`h-6 w-6 ${iconColor}`} />;
      case 'gift':
        return <Gift className={`h-6 w-6 ${iconColor}`} />;
      default:
        return <Award className={`h-6 w-6 ${iconColor}`} />;
    }
  };

  return (
    <section id="prizes" className="py-24 bg-[#020604]/40 relative border-t border-[#063D29]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="PRIZES & RECOGNITION"
          subtitle="Awards and rewards for winning teams and standout variant performances."
          badge="GLORIOUS REWARDS"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
                  className={`flex flex-col justify-between p-6 bg-[#020604]/80 backdrop-blur-sm border transition-all duration-300 w-full rounded-2xl text-center ${
                    isWinner
                      ? 'border-[#C9A227] shadow-[0_0_25px_rgba(201,162,39,0.25)] ring-1 ring-[#C9A227]/40'
                      : 'border-[#063D29] hover:border-[#00E676]/40'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle Icon Container */}
                    <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-5 ${
                      isWinner 
                        ? 'bg-[#C9A227]/15 border border-[#C9A227]/40 shadow-[0_0_12px_rgba(201,162,39,0.2)]'
                        : 'bg-[#063D29]/40 border border-[#00E676]/30 shadow-[0_0_12px_rgba(0,230,118,0.15)]'
                    }`}>
                      {getPrizeIcon(prize.icon, isWinner)}
                    </div>

                    {/* Sub-label Badge */}
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase mb-3 ${
                      isWinner 
                        ? 'bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227]'
                        : 'bg-[#063D29]/50 border border-[#00E676]/30 text-[#00E676]'
                    }`}>
                      {prize.position}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide">
                      {prize.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                      {prize.description}
                    </p>
                  </div>

                  {/* Cash Reward Amount at Bottom */}
                  {prize.amount && (
                    <div className="mt-auto border-t border-[#063D29] pt-5">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                        REWARD VALUE
                      </span>
                      <span className={`text-sm sm:text-base font-extrabold font-mono ${
                        isWinner ? 'text-[#C9A227]' : 'text-[#00E676]'
                      }`}>
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
