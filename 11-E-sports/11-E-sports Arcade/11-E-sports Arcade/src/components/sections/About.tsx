import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  if (!eventData.about) return null;

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              title={eventData.about.title}
              subtitle={eventData.name}
              badge="OVERVIEW"
              align="left"
              className="mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg text-slate-450 leading-relaxed mb-8 text-slate-400 font-normal"
            >
              {eventData.about.description}
            </motion.p>

            {/* Checkmark Bullets List */}
            {eventData.about.bullets && eventData.about.bullets.length > 0 && (
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 text-left inline-block"
              >
                {eventData.about.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-blue-600/10 border border-blue-900/30 flex items-center justify-center text-blue-500">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Dotted media container placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[480px] aspect-[16/9] sm:aspect-[4/3] border-2 border-dashed border-slate-800 rounded-2xl flex flex-col justify-center items-center p-8 bg-slate-900/10 relative text-center"
            >
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-500 uppercase block">
                  IMAGE / CONCEPT ARTWORK AREA
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal max-w-[280px] mx-auto">
                  Configurable media container for event illustration or poster.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
