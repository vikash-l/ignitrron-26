import React from 'react';
import { Phone, User, Shield, Flame } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';

export interface EventControlProps {
  event: EventConfig;
}

export const EventControl: React.FC<EventControlProps> = ({ event }) => {
  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="DIRECT CONTACT"
          title="EVENT CONTROL"
          subtitle="Official coordinators for Ignitrron Auto Show '26."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Faculty Coordinator Left */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D72614]" />
              FACULTY COORDINATOR
            </h3>

            {event.coordinators.faculty.map((c, index) => (
              <div
                key={index}
                className="scorched-card p-6 rounded-xl border border-[#4A0A07]"
              >
                <div className="w-10 h-10 rounded bg-[#101010] border border-[#4A0A07] flex items-center justify-center text-[#FF6A00] mb-4">
                  <User className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-[#F5F2EC] mb-1">
                  {c.name}
                </h4>
                <p className="text-xs font-mono-tech text-[#858585] uppercase">
                  {c.role}
                </p>
                <div className="mt-4 pt-3 border-t border-[#17110D] flex items-center gap-2 text-[11px] font-mono-tech text-[#858585]">
                  <Flame className="w-3 h-3 text-[#D72614]" />
                  <span>IGNITRRON '26 FACULTY DESK</span>
                </div>
              </div>
            ))}
          </div>

          {/* Student Coordinators Right */}
          <div className="md:col-span-8">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-[#FF6A00]" />
              STUDENT COORDINATORS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {event.coordinators.students.map((c, index) => (
                <div
                  key={index}
                  className="scorched-card p-6 rounded-xl flex flex-col justify-between border border-[#4A0A07] hover:border-[#FF6A00]/50 transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-bold font-display text-[#F5F2EC] mb-1">
                      {c.name}
                    </h4>
                    <p className="text-xs font-mono-tech text-[#858585] uppercase mb-4">
                      {c.role}
                    </p>
                  </div>

                  {c.phone && (
                    <div className="pt-4 border-t border-[#17110D]">
                      <span className="text-[10px] font-mono-tech text-[#858585] block mb-1">PHONE NUMBER:</span>
                      <a
                        href={`tel:${c.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 text-xs font-mono-tech font-bold text-[#FF6A00] hover:text-[#FFB000] transition-colors py-1.5 px-2 rounded bg-[#101010] border border-[#4A0A07] w-full justify-center"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{c.phone}</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
