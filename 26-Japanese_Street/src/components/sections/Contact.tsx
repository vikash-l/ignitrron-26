import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="07"
          badge="COORDINATION DESK"
          title="EVENT COORDINATORS"
          subtitle="Official event coordinators available for general inquiries and assistance."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {eventData.contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={`tel:${contact.phone}`}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="ronin-panel rounded-xl p-6 flex flex-col items-center text-center group border border-[#C9A45C]/25 hover:border-[#C63C32]/60 hover:bg-[#121B2C] no-underline transition-all duration-300 shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#0E1524] border border-[#C9A45C]/35 flex items-center justify-center mb-4 group-hover:border-[#C63C32]/60 group-hover:scale-105 transition-all shadow-sm">
                <Phone className="h-5 w-5 text-[#C63C32]" />
              </div>

              <h3 className="text-[#F1E8D5] font-mono-tech text-base font-bold uppercase tracking-wider mb-2 group-hover:text-[#C9A45C] transition-colors">
                {contact.name}
              </h3>

              <div className="text-[#C9A45C] font-mono-tech text-sm tracking-widest font-semibold group-hover:text-white transition-colors">
                {contact.displayPhone}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
