import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="06"
          badge="EVENT SCHEDULE"
          title="EVENT TIMELINE"
          subtitle="Official schedule for the Project Presentation competition on September 18, 2026."
          align="center"
        />

        <div className="relative mt-12">
          {/* Central Vertical Trajectory Line with Progressive Height Reveal */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/20 via-cyan-400/70 to-blue-500/20 sm:-translate-x-1/2 origin-top" 
          />

          {/* Timeline Node Cards */}
          <div className="space-y-8 sm:space-y-12">
            {eventData.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:justify-start' : 'sm:justify-end'
                  } pl-10 sm:pl-0`}
                >
                  {/* Glowing Node Dot with Ambient Ping */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-4 sm:left-1/2 top-6 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#02050b] shadow-[0_0_16px_rgba(6,182,212,0.9)] -translate-x-1/2 z-10" 
                  >
                    <span className="absolute -inset-1.5 rounded-full bg-cyan-400/35 animate-ping" />
                  </motion.div>

                  {/* Content Box with Directional Alternating Entrance */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -36 : 36, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    className={`w-full sm:w-[45%] tech-panel rounded-xl p-6 border border-blue-900/35 hover:border-cyan-400/55 hover:bg-[#061226]/95 hover:shadow-[0_16px_36px_-10px_rgba(2,6,23,0.9),0_0_22px_rgba(6,182,212,0.15)] transition-all duration-300 shadow-md relative overflow-hidden ${
                      isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                    }`}
                  >
                    {/* Timestamp Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-mono-tech text-xs text-cyan-400 font-bold uppercase tracking-wider">
                        {item.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-display text-2xl uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Date & Venue Footer Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full tech-panel border border-blue-900/40 text-slate-400 font-mono-tech text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              {eventData.date}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">
              {eventData.venue}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
