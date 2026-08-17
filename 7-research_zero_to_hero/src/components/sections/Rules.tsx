import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Rules: React.FC = () => {
  if (!eventData.rules || eventData.rules.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 95, damping: 14 } 
    },
  };

  return (
    <section id="rules" className="py-24 bg-slate-950 relative border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="RULES & REGULATIONS"
          subtitle="Essential policies and guidelines for all event participants."
          badge="GUIDELINES"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {eventData.rules.map((rule, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col p-6 bg-slate-900/30 backdrop-blur-sm border-slate-900 hover:border-emerald-500/20 transition-all duration-300 h-full">
                <div className="flex items-center gap-3.5 mb-3 border-b border-slate-905 pb-3">
                  <span className="flex-shrink-0 font-mono font-bold text-xs text-emerald-500 bg-emerald-600/10 border border-emerald-900/20 rounded-md px-2.5 py-1">
                    {rule.id}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {rule.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
