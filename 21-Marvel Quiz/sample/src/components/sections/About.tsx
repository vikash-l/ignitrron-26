import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  if (!eventData.about) return null;

  return (
    <section id="about" className="py-24 bg-[#020604]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              title={eventData.about.title}
              subtitle="IGNITRRON '26 MARVEL QUIZ"
              badge="SACRED OVERVIEW"
              align="left"
              className="mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg leading-relaxed mb-8 text-slate-300 font-normal"
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
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-[#063D29]/50 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shadow-[0_0_8px_rgba(0,230,118,0.2)]">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-200">
                      {bullet}
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* Loki Concept Art Container */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[480px] aspect-[16/9] sm:aspect-[4/3] border-2 border-dashed border-[#063D29] hover:border-[#00E676]/40 rounded-2xl flex flex-col justify-center items-center p-8 bg-[#063D29]/10 relative text-center group transition-colors duration-300"
            >
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-mono tracking-widest text-[#00E676] uppercase block font-bold">
                  TVA VARIANT ARCHIVE #L1130
                </span>
                <p className="text-xs sm:text-sm text-slate-400 leading-normal max-w-[280px] mx-auto font-medium">
                  "For all time. Always. Master the timeline to claim your victory."
                </p>
                <div className="inline-block px-3 py-1 rounded bg-[#C9A227]/10 border border-[#C9A227]/30 text-[10px] font-mono text-[#C9A227] uppercase font-bold">
                  CLEARANCE: LEVEL 5
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
