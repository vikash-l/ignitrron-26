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
              className="text-base sm:text-lg text-slate-450 leading-relaxed mb-6 text-slate-400 font-normal"
            >
              {eventData.about.description}
            </motion.p>

            {/* Disclaimer Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-amber-950/25 border border-amber-500/40 backdrop-blur-md shadow-[0_0_25px_rgba(245,158,11,0.12)] text-left mb-8 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">PRESENTATION REQUIREMENT & DISCLAIMER</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse"></span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-normal">
                    <strong className="font-semibold text-amber-300">Disclaimer:</strong> Idea-only presentations are not encouraged. Participants are expected to present a well-developed paper supported by proper research, technical analysis, methodology, implementation, experimental results, or relevant evidence. Simply presenting a concept or proposed idea without substantial technical/research content may not be considered favorably during evaluation.
                  </p>
                </div>
              </div>
            </motion.div>

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
