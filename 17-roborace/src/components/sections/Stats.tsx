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

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 14 } 
    },
  };

  return (
    <section id="stats" className="py-20 bg-transparent relative border-t border-b border-zinc-900/40">
      <div className="absolute inset-0 bg-grid-racing opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {eventData.stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                glow={true}
                glowColor="chrome"
                hoverEffect={true}
                className="p-6 bg-zinc-900/10 border-zinc-850 hover:border-slate-300/40 flex flex-col justify-between items-center text-center relative overflow-hidden group min-h-[140px]"
              >
                {/* Subtle telemetry line inside the card */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-slate-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                {/* Stat value */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-chrome font-display tracking-tight uppercase">
                    {stat.value}
                  </span>
                </div>

                {/* Divider bar */}
                <div className="w-8 h-[2px] bg-zinc-800 my-2 group-hover:w-16 group-hover:bg-sky-400 transition-all duration-150" />

                {/* Stat label */}
                <div className="w-full">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 font-mono tracking-widest uppercase block group-hover:text-slate-350 transition-colors duration-120">
                    {stat.label}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
