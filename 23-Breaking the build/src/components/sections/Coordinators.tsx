import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, Phone, Shield } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Coordinators: React.FC = () => {
  const { faculty, students } = eventData.coordinators;

  return (
    <section id="coordinators" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="EVENT LEADERSHIP"
          title="EVENT COORDINATORS"
          subtitle="Get in touch with the official faculty and student organizing team for Breaking the Build."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Faculty / Staff Coordinator Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 tech-panel rounded-2xl p-6 sm:p-8 border border-[#B42318]/50 bg-gradient-to-b from-[#1C0D0B]/95 to-[#120A08]/95 flex flex-col justify-between shadow-xl shadow-black/60 relative overflow-hidden group hover:border-[#F97316]/60 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B42318]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#24100D] border border-[#B42318]/60 flex items-center justify-center text-[#F97316]">
                  <Shield className="h-6 w-6 text-[#F97316]" />
                </div>
                <span className="font-mono-tech text-[10px] text-[#F97316] bg-[#24100D] px-3 py-1 rounded-full border border-[#B42318]/40 uppercase tracking-widest font-bold">
                  STAFF COORDINATOR
                </span>
              </div>

              <span className="font-mono-tech text-xs text-[#EF4444] uppercase tracking-widest block mb-1 font-bold">
                {faculty.role}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase text-[#F5F1ED] tracking-wide mb-2">
                {faculty.name}
              </h3>
              <p className="text-xs text-[#A8A09A] leading-relaxed">
                Faculty Coordinator overseeing the Breaking the Build game development interaction session at IGNITRRON 26.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#7F1D1D]/30 flex items-center gap-2 text-xs font-mono-tech text-[#6E6762]">
              <UserCheck className="w-4 h-4 text-[#F97316]" />
              <span>IGNITRRON KPRIET • CSE</span>
            </div>
          </motion.div>

          {/* Student Coordinators Grid (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {students.map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="tech-panel rounded-xl p-5 border border-[#7F1D1D]/35 bg-[#120A08]/90 hover:border-[#B42318]/60 hover:bg-[#1C0D0B]/90 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#24100D] border border-[#7F1D1D]/50 flex items-center justify-center text-[#F97316] flex-shrink-0 group-hover:border-[#F97316]/50 transition-colors">
                    <Users className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech text-[#B42318] uppercase tracking-widest block font-semibold">
                      {student.role} 0{idx + 1}
                    </span>
                    <h4 className="text-lg font-display uppercase text-[#F5F1ED] tracking-wider group-hover:text-[#F97316] transition-colors">
                      {student.name}
                    </h4>
                  </div>
                </div>

                <a
                  href={`tel:${student.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#24100D] border border-[#B42318]/50 hover:border-[#EF4444] hover:bg-[#B42318] text-[#F5F1ED] font-mono-tech text-xs tracking-wider transition-all duration-200 shadow-sm no-underline flex-shrink-0 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>+91 {student.phone}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
