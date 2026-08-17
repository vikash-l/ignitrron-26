import React from 'react';
import { EventConfig } from '../../types/event';

export interface EventInfoProps {
  event: EventConfig;
}

export const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  return (
    <section id="event-info" className="py-4 bg-[#101010] border-y border-[#4A0A07]/60 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 text-xs sm:text-sm font-mono-tech tracking-widest text-[#858585] uppercase">
          
          <span className="text-[#F5F2EC] font-semibold">{event.date}</span>
          
          <span className="text-[#D72614] font-bold">|</span>
          
          <span className="text-[#F5F2EC] font-semibold">{event.day}</span>
          
          <span className="text-[#D72614] font-bold">|</span>
          
          <span className="text-[#F5F2EC] font-semibold">{event.time}</span>
          
          <span className="text-[#D72614] font-bold">|</span>
          
          <span className="text-[#F5F2EC] font-semibold">{event.venue}</span>
          
          <span className="text-[#D72614] font-bold">|</span>
          
          <span className="text-[#FF6A00] font-black tracking-widest">
            ENTRY // {event.entry}
          </span>

        </div>
      </div>
    </section>
  );
};
