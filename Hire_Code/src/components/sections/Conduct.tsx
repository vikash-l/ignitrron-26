import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Conduct: React.FC = () => {
  return (
    <section id="guidelines" className="py-24 relative overflow-hidden border-t border-[#00BFA6]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="SESSION PROTOCOLS"
          title="ATTENDEE GUIDELINES"
          subtitle="Simple guidelines ensuring an engaging, constructive, and productive workshop experience for all participants."
          align="center"
        />

        {/* Sequential Guidelines Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {eventData.guidelines.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.52, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="tech-panel rounded-xl p-5 sm:p-6 border border-[#00BFA6]/25 hover:border-[#22D3EE]/60 hover:bg-[#0B1720]/95 hover:shadow-[0_16px_36px_-10px_rgba(5,7,10,0.95),0_0_20px_rgba(0,191,166,0.15)] flex items-start gap-4 sm:gap-6 transition-all duration-300 shadow-md relative overflow-hidden group"
            >
              {/* Top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00BFA6]/0 to-transparent group-hover:via-[#22D3EE]/50 transition-all duration-500" />

              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono-tech text-xs text-[#00BFA6] font-bold bg-[#08131C] border border-[#00BFA6]/40 px-2.5 py-0.5 rounded group-hover:border-[#22D3EE]/70 group-hover:text-[#22D3EE] transition-colors">
                  {guide.index}
                </span>
              </div>

              <div>
                <h3 className="text-[#E8EEF2] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1.5 group-hover:text-[#22D3EE] transition-colors flex items-center gap-2">
                  <span>{guide.title}</span>
                </h3>
                <p className="text-[#8997A3] text-xs sm:text-sm leading-relaxed font-normal">
                  {guide.description}
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
          <div className="tech-panel rounded-xl p-4 border border-[#00BFA6]/30 flex items-center gap-3 bg-[#08131C]/60 text-center sm:text-left flex-col sm:flex-row shadow-md">
            <ShieldCheck className="h-5 w-5 text-[#00BFA6] flex-shrink-0" />
            <p className="text-[#8997A3] text-xs font-normal">
              Active engagement and positive collaboration create an impactful environment for everyone during The Hire Code workshop.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

