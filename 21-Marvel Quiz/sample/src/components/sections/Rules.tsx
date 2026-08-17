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

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="rules" className="py-24 bg-[#020604] relative border-t border-[#063D29]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="TVA RULES & PROTOCOLS"
          subtitle="Essential policies and guidelines for all event participants."
          badge="VARIANT CODE"
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
              <Card className="flex flex-col p-6 bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/40 transition-all duration-300 h-full">
                <div className="flex items-center gap-3.5 mb-3 border-b border-[#063D29] pb-3">
                  <span className="flex-shrink-0 font-mono font-bold text-xs text-[#00E676] bg-[#063D29]/50 border border-[#00E676]/30 rounded-md px-2.5 py-1 shadow-[0_0_8px_rgba(0,230,118,0.15)]">
                    RULE #{rule.id}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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
