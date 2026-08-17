import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Rules: React.FC = () => {
  return (
    <section id="rules" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="OFFICIAL PROTOCOLS"
          title="RULES & REGULATIONS"
          subtitle="Official technical compliance guidelines and presentation protocols for all participating teams."
          align="center"
        />

        {/* Sequential 01 -> 05 Staggered Rule Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {eventData.rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.52, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="tech-panel rounded-xl p-5 sm:p-6 border border-blue-900/35 hover:border-cyan-400/50 hover:bg-[#061226]/95 hover:shadow-[0_16px_36px_-10px_rgba(2,6,23,0.9),0_0_20px_rgba(6,182,212,0.12)] flex items-start gap-4 sm:gap-6 transition-all duration-300 shadow-md relative overflow-hidden group"
            >
              {/* Top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />

              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono-tech text-xs text-cyan-400 font-bold bg-cyan-950/50 border border-cyan-800/40 px-2.5 py-0.5 rounded group-hover:border-cyan-500/70 group-hover:bg-cyan-900/40 transition-colors">
                  {rule.index}
                </span>
              </div>

              <div>
                <h3 className="text-white font-mono-tech text-xs uppercase tracking-widest font-bold mb-1.5 group-hover:text-blue-200 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {rule.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Adherence Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-4 border border-blue-900/40 flex items-center gap-3 bg-blue-950/20 text-center sm:text-left flex-col sm:flex-row shadow-md">
            <ShieldCheck className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <p className="text-slate-400 text-xs font-normal">
              Compliance with presentation guidelines and allotted time constraints is strictly evaluated by the session panel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
