import React from 'react';
import { motion } from 'framer-motion';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';

export interface StatsProps {
  event: EventConfig;
}

export const Stats: React.FC<StatsProps> = ({ event }) => {
  const stats = event.stats;

  if (!stats || stats.length === 0) return null;

  return (
    <section id="stats" className="py-12 bg-[#0D0F11] border-y border-[#262A33]">
      <Container size="lg">
        {/* Diagnostic Panel Header */}
        <div className="flex items-center justify-between mb-6 text-[10px] font-mono tracking-widest text-[#9CA3AA] uppercase">
          <div className="flex items-center gap-2">
            <span className="ultron-core-dot" />
            <span>SYSTEM DIAGNOSTIC // READOUTS</span>
          </div>
          <span>STATUS: ALL UNITS SYNCHRONIZED</span>
        </div>

        {/* Machine Readouts Grid with Thin Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#262A33] border border-[#262A33] bg-[#121418] machined-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-6 text-center space-y-2 flex flex-col justify-center items-center"
            >
              <div className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-industrial tracking-wider text-[#E8EAED]">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#F04444]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
