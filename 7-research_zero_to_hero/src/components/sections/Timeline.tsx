import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Timeline: React.FC = () => {
  if (!eventData.timeline || eventData.timeline.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="timeline" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="EVENT TIMELINE"
          subtitle="Detailed agenda and milestone timings for the event."
          badge="SCHEDULE"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-slate-900 ml-4 md:mx-auto md:max-w-3xl space-y-12"
        >
          {/* Central Line on Desktop, Left Line on Mobile */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-900 -translate-x-[1px]" />

          {eventData.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                } pl-8 md:pl-0`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-[calc(0px-9px)] md:left-1/2 top-7 h-4.5 w-4.5 rounded-full border-2 border-slate-950 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] md:-translate-x-[9px]" />

                {/* Content Box */}
                <div className={`w-full md:w-[45%] p-6 rounded-xl border border-slate-900 bg-slate-900/30 hover:bg-slate-900/50 hover:border-slate-800 transition-all duration-300 ${
                  isLeft ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  {/* Top Bar with Day and Time */}
                  <div className="flex items-center gap-3 mb-4">
                    {item.day && (
                      <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-600/10 border border-emerald-900/20 text-[10px] font-bold tracking-wider text-emerald-500 uppercase">
                        {item.day}
                      </span>
                    )}
                    <span className="inline-flex items-center text-xs font-bold text-emerald-500">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {item.time}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-wide leading-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
