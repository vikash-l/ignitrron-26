import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Conduct: React.FC = () => {
  return (
    <section id="guidelines" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="SESSION PROTOCOLS"
          title="CODE OF CONDUCT"
          subtitle="Official principles ensuring a productive, respectful, and professional learning environment."
          align="center"
        />

        {/* Sequential 01 -> 03 Staggered Rule Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {eventData.conduct.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.52, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="tech-panel rounded-xl p-5 sm:p-6 border border-[#7F1D1D]/35 hover:border-[#F97316]/50 hover:bg-[#24100D]/95 hover:shadow-[0_16px_36px_-10px_rgba(7,5,6,0.95),0_0_20px_rgba(180,35,24,0.15)] flex items-start gap-4 sm:gap-6 transition-all duration-300 shadow-md relative overflow-hidden group"
            >
              {/* Top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/0 to-transparent group-hover:via-[#F97316]/50 transition-all duration-500" />

              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono-tech text-xs text-[#F97316] font-bold bg-[#24100D] border border-[#7F1D1D]/50 px-2.5 py-0.5 rounded group-hover:border-[#F97316]/70 transition-colors">
                  {rule.index}
                </span>
              </div>

              <div>
                <h3 className="text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1.5 group-hover:text-[#F97316] transition-colors">
                  {rule.title}
                </h3>
                <p className="text-[#A8A09A] text-xs sm:text-sm leading-relaxed font-normal">
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
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="tech-panel rounded-xl p-4 border border-[#7F1D1D]/40 flex items-center gap-3 bg-[#1C0D0B]/40 text-center sm:text-left flex-col sm:flex-row shadow-md">
            <ShieldCheck className="h-5 w-5 text-[#F97316] flex-shrink-0" />
            <p className="text-[#A8A09A] text-xs font-normal">
              Adherence to session protocols is strictly observed to maintain a constructive and respectful atmosphere for all participants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
