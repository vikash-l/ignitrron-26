import React from 'react';
import { Flame, MapPin, Calendar, Clock } from 'lucide-react';
import { EventConfig } from '../../types/event';

export interface FooterProps {
  event: EventConfig;
}

export const Footer: React.FC<FooterProps> = ({ event }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] border-t border-[#4A0A07]/60 pt-16 pb-12 relative z-10 overflow-hidden">
      
      {/* Subtle bottom flame glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#D72614]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#17110D]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-[#101010] border border-[#4A0A07] flex items-center justify-center">
                <Flame className="w-4 h-4 text-[#FF6A00]" />
              </div>
              <span className="font-black font-display text-2xl tracking-tight text-[#F5F2EC]">
                {event.name}
              </span>
            </div>

            <div className="flex flex-col gap-1 text-xs font-mono-tech uppercase text-[#858585]">
              <span className="text-[#F5F2EC] font-bold tracking-widest">{event.edition}</span>
              <span className="text-[#FF6A00] font-semibold">{event.day} // {event.venue}</span>
              <span>10:00 AM – 1:00 PM • WALK-IN ENTRY</span>
            </div>

            <p className="text-[#858585] text-xs leading-relaxed max-w-sm pt-2">
              {event.description}
            </p>
          </div>

          {/* Logistics Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold">
              EVENT METADATA
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech text-[#858585]">
              <li className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#D72614]" />
                <span className="text-[#F5F2EC]">{event.date} ({event.day})</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span className="text-[#F5F2EC]">{event.time}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFB000]" />
                <span className="text-[#F5F2EC]">{event.venue}</span>
              </li>
              <li className="pt-1">
                <span className="px-2 py-0.5 rounded bg-[#101010] border border-[#4A0A07] text-[#FF6A00] font-bold text-[10px]">
                  WALK-IN SHOWCASE
                </span>
              </li>
            </ul>
          </div>

          {/* Coordinators Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold">
              COORDINATORS
            </h4>
            <div className="space-y-2 text-xs font-mono-tech">
              <div className="text-[#858585]">
                <span className="block text-[10px] text-[#D72614] font-bold">FACULTY:</span>
                <span className="text-[#F5F2EC]">{event.coordinators.faculty[0]?.name}</span>
              </div>
              <div className="pt-2 border-t border-[#17110D]">
                <span className="block text-[10px] text-[#FF6A00] font-bold mb-1">STUDENTS:</span>
                <div className="space-y-1 text-[#858585]">
                  {event.coordinators.students.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-[#F5F2EC]">{s.name}</span>
                      {s.phone && (
                        <a href={`tel:${s.phone.replace(/\s+/g, '')}`} className="text-[#FF6A00] hover:underline">
                          {s.phone}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#858585]">
          <p>© {currentYear} {event.name} • {event.edition}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6A00]">DAY 01 // PHOENIX CIRCLE</span>
            <span>•</span>
            <span>WALK-IN EVENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
