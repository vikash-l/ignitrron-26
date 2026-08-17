import React from 'react';
import { motion } from 'framer-motion';
import { Phone, UserCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="10"
          badge="COORDINATION DESK"
          title="EVENT COORDINATORS"
          subtitle="Official student coordinators available for technical queries and venue assistance."
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
              className="tech-panel rounded-xl p-6 flex flex-col items-center text-center group border border-blue-900/35 hover:border-cyan-500/50 hover:bg-[#060f22]/90 no-underline transition-all duration-300 shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-blue-950/70 border border-blue-800/40 flex items-center justify-center mb-4 group-hover:border-cyan-500/60 group-hover:scale-105 transition-all">
                <Phone className="h-5 w-5 text-cyan-400" />
              </div>

              <h3 className="text-white font-mono-tech text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-blue-300 transition-colors">
                {contact.name}
              </h3>

              <div className="text-cyan-300 font-mono-tech text-sm tracking-widest font-semibold group-hover:text-white transition-colors mb-3">
                {contact.phone}
              </div>

              <span className="inline-flex items-center gap-1 text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest bg-blue-950/40 border border-blue-900/30 px-2 py-0.5 rounded">
                <UserCheck className="h-2.5 w-2.5 text-blue-400" />
                {contact.role}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
