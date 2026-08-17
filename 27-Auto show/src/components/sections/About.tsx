import React from 'react';
import { Flame } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';

export interface AboutProps {
  event: EventConfig;
}

export const About: React.FC<AboutProps> = ({ event }) => {
  if (!event.about) return null;

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          category="THE EVENT"
          title={event.about.title}
        />

        <div className="scorched-card p-8 sm:p-12 rounded-xl text-center relative overflow-hidden">
          {/* Subtle fire glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#D72614]/10 blur-3xl pointer-events-none" />

          <div className="w-10 h-10 rounded bg-[#101010] border border-[#4A0A07] flex items-center justify-center mx-auto mb-6">
            <Flame className="w-5 h-5 text-[#FF6A00]" />
          </div>

          <p className="text-lg sm:text-2xl font-display font-medium text-[#F5F2EC] leading-relaxed max-w-3xl mx-auto">
            {event.about.description}
          </p>

          <div className="mt-8 pt-6 border-t border-[#4A0A07]/50 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech text-[#858585] uppercase tracking-wider">
            <span>WALK-IN ENTRY</span>
            <span>•</span>
            <span>PHOENIX CIRCLE</span>
            <span>•</span>
            <span className="text-[#FF6A00]">DAY 01 // 10:00 AM – 1:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
};
