import React from 'react';
import { motion } from 'framer-motion';
import { EventConfig } from '../../types/event';
import { Card } from '../ui/Card';
import { IconRenderer } from '../ui/IconRenderer';

interface StatsProps {
  event: EventConfig;
}

export const Stats: React.FC<StatsProps> = ({ event }) => {
  if (!event.stats || event.stats.length === 0) return null;

  return (
    <section id="stats" className="py-16 bg-[#06080e] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(event.stats.length, 4)} gap-4 md:gap-6`}>
          {event.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                variant="glass"
                className="text-center p-6 border-slate-800/80 hover:border-cyan-500/40 transition-all group"
              >
                {stat.icon && (
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconRenderer name={stat.icon} className="w-5 h-5" />
                  </div>
                )}

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>

                <div className="text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-slate-300">
                  {stat.label}
                </div>

                {stat.subtext && (
                  <div className="text-[11px] text-slate-400 font-sans mt-1">
                    {stat.subtext}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
