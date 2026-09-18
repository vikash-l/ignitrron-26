import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const RaceJourney: React.FC = () => {
  if (!eventData.researchJourney || eventData.researchJourney.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 15 } 
    },
  };

  return (
    <section id="raceJourney" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Racing HUD Grids */}
      <div className="absolute inset-0 bg-grid-racing opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] rounded-full bg-slate-500/5 blur-[120px] pointer-events-none" />

      {/* Speed lines */}
      <div className="speed-streak top-1/4 left-5" />
      <div className="speed-streak-fast top-3/4 right-5" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="RACE JOURNEY"
          subtitle="Push through the operational milestones from machine assembly to crossing the finish line first."
          badge="PROGRESSION"
        />

        {/* Central Vertical Pathway */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-2xl mx-auto pl-10 sm:pl-0 sm:mx-auto space-y-12"
        >
          {/* Glowing Silver track centerline */}
          <div className="absolute left-[19px] sm:left-1/2 top-4 bottom-4 w-1.5 bg-gradient-to-b from-slate-600 via-white to-slate-600 -translate-x-[3px] shadow-[0_0_15px_rgba(255,255,255,0.7)] rounded-full" />
          
          {/* Track Dash Overlay */}
          <div className="absolute left-[19px] sm:left-1/2 top-4 bottom-4 w-0.5 border-l border-dashed border-zinc-900 -translate-x-[0.5px] z-10" />

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
                {/* Node with silver icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-0 sm:left-1/2 top-1.5 h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center sm:-translate-x-5 cursor-pointer z-20 shadow-[0_0_15px_rgba(255,255,255,0.15)] border-slate-500 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-150"
                >
                  <span className="text-sm font-bold font-mono text-white">
                    {step.icon || step.step}
                  </span>
                </motion.div>

                {/* Card detailing each journey node */}
                <div className={`w-full sm:w-[44%] pl-6 sm:pl-0 ${
                  isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                }`}>
                  <Card 
                    hoverEffect={true}
                    glowColor="chrome"
                    className="p-5 bg-zinc-900/40 backdrop-blur-md border-zinc-800/80 hover:border-slate-400/40 transition-all duration-150 relative group"
                  >
                    <span className="text-[10px] font-bold text-sky-400 font-mono tracking-widest block mb-1">
                      STAGE {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide uppercase group-hover:text-sky-400 transition-colors duration-120">
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
