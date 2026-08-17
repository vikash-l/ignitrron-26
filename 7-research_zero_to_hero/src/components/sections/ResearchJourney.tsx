import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const ResearchJourney: React.FC = () => {
  if (!eventData.researchJourney || eventData.researchJourney.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="researchJourney" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gamma-Energy Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="RESEARCH JOURNEY"
          subtitle="Walk through the researcher's molecular transformation from questioning problems to pitching final proposals."
          badge="Story Transformation"
        />

        {/* Central Vertical Pathway */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="relative max-w-2xl mx-auto pl-10 sm:pl-0 sm:mx-auto space-y-16"
        >
          {/* Glowing Green energy connecting line */}
          <div className="absolute left-[19px] sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-emerald-550 via-green-600 to-emerald-550 -translate-x-[2px] shadow-[0_0_12px_rgba(16,185,129,0.65)] rounded-full" />

          {eventData.researchJourney.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                {/* Node with custom transformation icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute left-0 sm:left-1/2 top-1 h-10 w-10 rounded-full border-2 border-slate-950 bg-slate-900 flex items-center justify-center sm:-translate-x-5 cursor-pointer z-10 shadow-[0_0_15px_rgba(16,185,129,0.25)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.65)] transition-all duration-300"
                >
                  <span className="text-sm font-bold font-mono">
                    {step.icon || step.step}
                  </span>
                </motion.div>

                {/* Card describing each journey milestone */}
                <div className={`w-full sm:w-[44%] pl-6 sm:pl-0 ${
                  isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                }`}>
                  <Card 
                    hoverEffect={true}
                    className="p-6 bg-slate-900/35 backdrop-blur-md border-slate-900 hover:border-emerald-500/30 transition-all duration-300 relative group"
                  >
                    <span className="text-[10px] font-bold text-emerald-550 text-emerald-400 font-mono tracking-widest block mb-1">
                      STAGE {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide uppercase group-hover:text-emerald-400 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
