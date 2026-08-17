import React from 'react';
import { Clock, Calendar, Flame, Compass } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export interface VenueProps {
  event: EventConfig;
}

export const Venue: React.FC<VenueProps> = ({ event }) => {
  return (
    <section id="venue" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="EVENT LOCATION"
          title={event.venueDetails.title}
          subtitle="The epic central arena where machines assemble and the energy ignites."
        />

        <div className="scorched-card p-8 sm:p-12 rounded-2xl relative overflow-hidden border border-[#4A0A07]">
          {/* Subtle fiery glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D72614]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Venue Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="walkin" size="md">
                  {event.venueDetails.entryNote}
                </Badge>
                <span className="text-xs font-mono-tech text-[#858585] uppercase">
                  OPEN ARENA PADDOCK
                </span>
              </div>

              <div>
                <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] block mb-1">
                  ARENA VENUE
                </span>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-[#F5F2EC] uppercase tracking-tight">
                  {event.venueDetails.name}
                </h3>
              </div>

              <p className="text-[#858585] text-base leading-relaxed">
                {event.venueDetails.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#17110D]">
                <div className="p-4 rounded bg-[#101010] border border-[#4A0A07]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#030303] border border-[#4A0A07] flex items-center justify-center text-[#D72614] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#858585] block">DATE & DAY</span>
                    <span className="text-sm font-bold text-[#F5F2EC] font-mono-tech">{event.date} • {event.day}</span>
                  </div>
                </div>

                <div className="p-4 rounded bg-[#101010] border border-[#4A0A07]/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#030303] border border-[#4A0A07] flex items-center justify-center text-[#FF6A00] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase text-[#858585] block">EVENT WINDOW</span>
                    <span className="text-sm font-bold text-[#F5F2EC] font-mono-tech">{event.venueDetails.timing}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Location Graphic HUD */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 rounded-xl bg-[#030303] border border-[#4A0A07]">
              <div className="w-20 h-20 rounded-full bg-[#101010] border-2 border-[#FF6A00] flex items-center justify-center shadow-[0_0_25px_rgba(255,106,0,0.4)] mb-4">
                <Compass className="w-10 h-10 text-[#FF6A00] animate-spin-slow" />
              </div>
              
              <h4 className="text-xl font-bold font-display text-[#F5F2EC] uppercase tracking-wide mb-1">
                PHOENIX CIRCLE
              </h4>
              <p className="text-xs font-mono-tech text-[#858585] uppercase tracking-wider mb-4">
                MAIN CENTRAL GROUND
              </p>

              <div className="w-full p-3 rounded bg-[#101010] border border-[#17110D] text-[11px] font-mono-tech text-[#FFB000] flex items-center justify-center gap-2">
                <Flame className="w-3.5 h-3.5" />
                <span>WALK-IN ENTRY DURING 10 AM – 1 PM</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
