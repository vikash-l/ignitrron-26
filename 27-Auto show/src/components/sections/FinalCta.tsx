import React from 'react';
import { ArrowRight, Flame, MapPin } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { Button } from '../ui/Button';

export interface FinalCtaProps {
  event: EventConfig;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ event }) => {
  return (
    <section id="final-cta" className="py-24 md:py-32 relative overflow-hidden bg-[#030303]">
      
      {/* Strong Atmospheric Background: Fire trails, burning tire mark curves, volumetric flame glow */}
      <div className="absolute inset-0 asphalt-texture opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#D72614]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FF6A00]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Burning Tire Path Graphic */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -50,300 Q 400,50 800,250 T 1700,200"
          fill="none"
          stroke="#FF6A00"
          strokeWidth="6"
          filter="drop-shadow(0 0 12px #D72614)"
          strokeDasharray="20 10"
        />
        <path
          d="M -50,320 Q 400,70 800,270 T 1700,220"
          fill="none"
          stroke="#FFB000"
          strokeWidth="3"
          filter="drop-shadow(0 0 8px #FF6A00)"
          strokeDasharray="30 15"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="scorched-card p-10 sm:p-16 rounded-2xl border border-[#FF6A00]/40 shadow-flame-glow relative overflow-hidden">
          {/* Flame Icon Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#17110D] border border-[#FF6A00]/50 text-[#FF6A00] text-xs font-mono-tech uppercase font-bold tracking-widest mb-6 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
            <Flame className="w-4 h-4 text-[#FFB000] animate-bounce" />
            <span>IGNITRRON '26 // AUTO SHOW</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-[#F5F2EC] uppercase leading-[0.95] mb-4">
            RIDE INTO THE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D72614] via-[#FF6A00] to-[#FFB000] text-glow-fire">
              FIRE.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl sm:text-2xl font-bold font-display text-[#858585] uppercase tracking-wider mb-8">
            {event.finalCta.subtitle}
          </p>

          {/* Info Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono-tech text-[#858585] mb-8 pb-6 border-b border-[#4A0A07]/50 max-w-xl mx-auto">
            <span className="text-[#F5F2EC]">{event.date}</span>
            <span>•</span>
            <span className="text-[#F5F2EC]">{event.time}</span>
            <span>•</span>
            <span className="text-[#FF6A00] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {event.venue}
            </span>
            <span>•</span>
            <span className="text-[#FFB000] font-bold">WALK-IN ENTRY</span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="fire"
              as="a"
              href="#venue"
              icon={<ArrowRight className="w-5 h-5 text-[#030303]" />}
              className="px-10 py-4 text-base font-black shadow-flame-glow"
            >
              {event.finalCta.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
