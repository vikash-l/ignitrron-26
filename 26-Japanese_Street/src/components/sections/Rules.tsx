import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Guidelines: React.FC = () => {
  return (
    <section id="guidelines" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="VISITOR GUIDE"
          title="VISITOR GUIDELINES"
          subtitle="General visitor guidance to help you navigate and enjoy the Japanese Street experience."
          align="center"
        />

        {/* Sequential 01 -> 04 Guidance Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {eventData.guidelines.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="ronin-panel rounded-xl p-5 sm:p-6 border border-[#C9A45C]/25 hover:border-[#C9A45C]/50 hover:bg-[#121B2C] flex items-start gap-4 sm:gap-6 transition-all duration-300 shadow-md relative overflow-hidden group"
            >
              {/* Top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45C]/0 to-transparent group-hover:via-[#C9A45C]/50 transition-all duration-500" />

              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono-tech text-xs text-[#C9A45C] font-bold bg-[#243B63]/40 border border-[#C9A45C]/40 px-2.5 py-0.5 rounded group-hover:border-[#C63C32]/60 group-hover:bg-[#C63C32]/20 transition-colors">
                  {item.index}
                </span>
              </div>

              <div>
                <h3 className="text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1.5 group-hover:text-[#C9A45C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#9B9A96] text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Welcome Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="ronin-panel rounded-xl p-4 border border-[#C9A45C]/30 flex items-center gap-3 bg-[#101827] text-center sm:text-left flex-col sm:flex-row shadow-md">
            <Info className="h-5 w-5 text-[#C9A45C] flex-shrink-0" />
            <p className="text-[#9B9A96] text-xs font-normal">
              For any queries or on-site directions during festival hours, feel free to reach out to the event coordinators at the help desk.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
