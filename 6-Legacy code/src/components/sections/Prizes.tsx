import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface PrizesProps {
  event: EventConfig;
}

export const Prizes: React.FC<PrizesProps> = ({ event }) => {
  const prizes = event.prizes;

  if (!prizes || prizes.length === 0) return null;

  return (
    <section id="prizes" className="py-20 bg-[#070809]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="06"
          badge="REWARDS"
          title="REWARDS & RECOGNITION"
          subtitle="Financial awards and honors for top-performing code rescue units."
        />

        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {prizes.map((prize, idx) => {
            const isFirst = idx === 0 || prize.highlight;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
              >
                <div
                  className={`bg-[#121418] p-7 text-center h-full flex flex-col justify-between space-y-6 clip-corner-sm transition-all duration-200 ${
                    isFirst
                      ? 'machined-border-red bg-[#161922] shadow-xl shadow-red-950/20'
                      : 'machined-border hover:border-[#3A404E]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#262A33] pb-3 text-xs font-mono text-[#9CA3AA]">
                      <span className={isFirst ? 'text-[#F04444] font-bold' : 'text-[#626870]'}>
                        RANK 0{idx + 1}
                      </span>
                      {isFirst ? (
                        <Trophy className="w-4 h-4 text-[#F04444]" />
                      ) : (
                        <Award className="w-4 h-4 text-[#9CA3AA]" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-mono tracking-widest text-[#9CA3AA] uppercase">
                        {prize.position}
                      </div>
                      <h3 className="text-xl font-industrial font-black text-[#E8EAED] tracking-wider uppercase">
                        {prize.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#9CA3AA] leading-relaxed">
                      {prize.description}
                    </p>
                  </div>

                  {prize.reward && (
                    <div className="pt-4 border-t border-[#262A33]">
                      <div className="text-[10px] font-mono tracking-widest text-[#626870] uppercase mb-1">
                        AWARD VALUE
                      </div>
                      <div className={`text-2xl font-black font-industrial tracking-wider ${isFirst ? 'text-[#F04444]' : 'text-[#E8EAED]'}`}>
                        {prize.reward}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
