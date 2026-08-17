import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';

export const Stats: React.FC = () => {
  if (!eventData.stats || eventData.stats.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="stats" className="py-16 bg-[#020604]/60 relative border-y border-[#063D29]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {eventData.stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-8 text-center bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/40 transition-all duration-300 h-full">
                <div className="text-4xl sm:text-5xl font-black text-[#00E676] text-glow-emerald font-mono tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
