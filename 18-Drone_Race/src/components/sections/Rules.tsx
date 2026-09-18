import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rules: React.FC = () => {
  return (
    <section id="rules" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="OFFICIAL PROTOCOLS"
          title="THE RULEBOOK"
          subtitle="Official technical compliance guidelines, safety protocols, and operational regulations for all competing pilots."
          align="center"
        />

        {/* 8 Clean Technical Rulebook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {eventData.rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="tech-panel rounded-xl p-5 sm:p-6 border border-[#d6a84f]/25 hover:border-[#d6a84f]/60 hover:bg-[#121b1e] hover:shadow-[0_16px_36px_-10px_rgba(5,6,7,0.95),0_0_20px_rgba(214,168,79,0.15)] flex items-start gap-4 sm:gap-5 transition-all duration-300 shadow-md relative overflow-hidden group bg-[#0b1012]/90"
            >
              {/* Top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d6a84f]/0 to-transparent group-hover:via-[#d6a84f]/55 transition-all duration-500" />

              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono-tech text-xs text-[#f2d58a] font-bold bg-[#141c20] border border-[#d6a84f]/35 px-2.5 py-0.5 rounded group-hover:border-[#d6a84f]/70 transition-colors">
                  {rule.index}
                </span>
              </div>

              <div>
                <h3 className="text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1.5 group-hover:text-[#f2d58a] transition-colors">
                  {rule.title}
                </h3>
                <p className="text-[#879296] text-xs sm:text-sm leading-relaxed font-normal">
                  {rule.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Official Safety Authority Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-4 sm:p-5 border border-[#d6a84f]/35 flex items-center gap-3 bg-[#0e1518]/90 text-center sm:text-left flex-col sm:flex-row shadow-md">
            <ShieldCheck className="h-5 w-5 text-[#d6a84f] flex-shrink-0" />
            <p className="text-[#879296] text-xs font-normal">
              Event organizers reserve the right to stop the match at any point if they determine that the match is becoming dangerous. The verdict of the judges is final.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
