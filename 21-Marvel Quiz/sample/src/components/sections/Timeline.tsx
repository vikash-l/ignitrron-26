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
    <section id="timeline" className="py-24 bg-[#020604]/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="SACRED TIMELINE"
          subtitle="Detailed agenda and milestone timings for the event."
          badge="TEMPORAL SCHEDULE"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-[#063D29] ml-4 md:mx-auto md:max-w-3xl space-y-12"
        >
          {/* Central Line on Desktop, Left Line on Mobile */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00E676] via-[#063D29] to-[#C9A227] -translate-x-[1px]" />

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
                <div className="absolute left-[calc(0px-9px)] md:left-1/2 top-7 h-4.5 w-4.5 rounded-full border-2 border-[#020604] bg-[#00E676] shadow-[0_0_12px_rgba(0,230,118,0.7)] md:-translate-x-[9px]" />

                {/* Content Box */}
                <div className={`w-full md:w-[45%] p-6 rounded-xl border border-[#063D29] bg-[#020604]/80 hover:bg-[#063D29]/30 hover:border-[#00E676]/50 transition-all duration-300 ${
                  isLeft ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  {/* Top Bar with Day and Time */}
                  <div className="flex items-center gap-3 mb-4">
                    {item.day && (
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#063D29]/50 border border-[#00E676]/30 text-[10px] font-bold tracking-wider text-[#00E676] uppercase">
                        {item.day}
                      </span>
                    )}
                    <span className="inline-flex items-center text-xs font-bold text-[#C9A227]">
                      <Clock className="h-3.5 w-3.5 mr-1 text-[#C9A227]" />
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
