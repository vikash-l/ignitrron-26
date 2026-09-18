import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Radio } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="06"
          badge="COMMAND DESK"
          title="RACE CONTROL"
          subtitle="Official event coordinators available for flight queries, telemetry checks, and arena assistance."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {eventData.contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="tech-panel rounded-2xl p-7 flex flex-col items-center text-center group border border-[#d6a84f]/30 hover:border-[#d6a84f]/70 hover:bg-[#121b1e] no-underline transition-all duration-300 shadow-xl bg-[#0b1012]/90 relative overflow-hidden"
            >
              {/* Top hairline highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d6a84f]/0 to-transparent group-hover:via-[#d6a84f]/60 transition-all duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-[#141c20] border border-[#d6a84f]/40 flex items-center justify-center mb-5 group-hover:border-[#d6a84f]/70 group-hover:scale-105 transition-all text-[#f2d58a] shadow-md">
                <Phone className="h-6 w-6" />
              </div>

              <h3 className="text-[#f3f3ef] font-mono-tech text-base font-bold uppercase tracking-wider mb-1 group-hover:text-[#f2d58a] transition-colors">
                {contact.name}
              </h3>

              <div className="text-[#f2d58a] font-mono-tech text-sm tracking-widest font-semibold group-hover:text-white transition-colors mb-4">
                {contact.phone}
              </div>

              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono-tech text-[#879296] uppercase tracking-widest bg-[#141c20] border border-[#d6a84f]/25 px-3 py-1 rounded">
                <Radio className="h-3 w-3 text-[#d6a84f]" />
                {contact.role}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
