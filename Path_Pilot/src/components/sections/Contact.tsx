import React from 'react';
import { motion } from 'framer-motion';
import { Phone, UserCheck, GraduationCap, Building2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-[#25292E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="05"
          badge="ORGANIZATION &amp; DESK"
          title="FACULTY &amp; COORDINATORS"
          subtitle="Official organizers, faculty, and student coordinators for PATH PILOT at IGNITRRON 26."
          align="center"
        />

        {/* Organizer & Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-10">
          {/* Organized By */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="tech-panel rounded-2xl p-6 border border-[#25292E] flex items-center gap-4 bg-[#111316]/90 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#191C20] border border-[#25292E] flex items-center justify-center flex-shrink-0">
              <Building2 className="h-6 w-6 text-[#A30F18]" />
            </div>
            <div>
              <div className="text-[10px] font-mono-tech text-[#777D83] uppercase tracking-widest font-bold">
                ORGANIZED BY
              </div>
              <div className="text-[#E8E8E8] font-display text-2xl uppercase tracking-wide">
                {eventData.organizer}
              </div>
              <div className="text-[11px] font-mono-tech text-[#9A9DA1] mt-0.5">
                {eventData.host.institution}
              </div>
            </div>
          </motion.div>

          {/* Faculty */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="tech-panel rounded-2xl p-6 border border-[#25292E] flex items-center gap-4 bg-[#111316]/90 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#191C20] border border-[#25292E] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-6 w-6 text-[#777D83]" />
            </div>
            <div>
              <div className="text-[10px] font-mono-tech text-[#777D83] uppercase tracking-widest font-bold">
                FACULTY
              </div>
              <div className="text-[#E8E8E8] font-display text-2xl uppercase tracking-wide">
                {eventData.faculty}
              </div>
              <div className="text-[11px] font-mono-tech text-[#9A9DA1] mt-0.5">
                {eventData.organizer}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Student Coordinators */}
        <div className="text-center mb-6">
          <span className="font-mono-tech text-xs text-[#777D83] uppercase tracking-widest font-semibold">
            STUDENT COORDINATORS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {eventData.contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="tech-panel rounded-xl p-6 flex flex-col items-center text-center group border border-[#25292E] hover:border-[#A30F18]/50 hover:bg-[#191C20]/90 no-underline transition-all duration-300 shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#25292E] flex items-center justify-center mb-4 group-hover:border-[#A30F18]/60 group-hover:scale-105 transition-all">
                <Phone className="h-5 w-5 text-[#A30F18]" />
              </div>

              <h3 className="text-[#E8E8E8] font-mono-tech text-sm font-bold uppercase tracking-wider mb-1 group-hover:text-[#A30F18] transition-colors">
                {contact.name}
              </h3>

              <div className="text-[#E8E8E8] font-mono-tech text-sm tracking-widest font-semibold group-hover:text-[#A30F18] transition-colors mb-3">
                {contact.phone}
              </div>

              <span className="inline-flex items-center gap-1 text-[9px] font-mono-tech text-[#9A9DA1] uppercase tracking-widest bg-[#111316] border border-[#25292E] px-2 py-0.5 rounded">
                <UserCheck className="h-2.5 w-2.5 text-[#A30F18]" />
                {contact.role}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};



