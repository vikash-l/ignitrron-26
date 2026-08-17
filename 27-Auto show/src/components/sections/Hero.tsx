import React from 'react';
import { Flame, ArrowRight, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export interface HeroProps {
  event: EventConfig;
}

export const Hero: React.FC<HeroProps> = ({ event }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Volumetric Fire Glow behind motorcycle */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#D72614]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#4A0A07]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Metadata */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Top Label */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#FF6A00] animate-ping" />
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[#FF6A00] font-bold">
                {event.subTitle}
              </span>
              <span className="text-[#858585] text-xs font-mono-tech">•</span>
              <Badge variant="walkin" size="sm">
                ENTRY // WALK-IN
              </Badge>
            </div>

            {/* Main Title: AUTO / SHOW */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#F5F2EC] uppercase leading-[0.88] mb-4">
              AUTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D72614] via-[#FF6A00] to-[#FFB000] drop-shadow-[0_0_25px_rgba(255,106,0,0.4)]">
                SHOW
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-xl sm:text-2xl font-bold font-display text-[#FF6A00] tracking-wide mb-4 uppercase">
              {event.tagline}
            </p>

            {/* Description */}
            <p className="text-[#858585] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {event.description}
            </p>

            {/* Event Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl mb-8 p-3 rounded bg-[#101010]/90 border border-[#4A0A07]/80 backdrop-blur-md">
              <div className="p-2 border-r border-[#17110D] last:border-r-0">
                <span className="text-[10px] font-mono-tech uppercase text-[#858585] block flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#D72614]" /> DATE
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#F5F2EC] font-mono-tech mt-0.5 block">
                  {event.date}
                </span>
              </div>

              <div className="p-2 border-r border-[#17110D] last:border-r-0">
                <span className="text-[10px] font-mono-tech uppercase text-[#858585] block flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FF6A00]" /> TIME
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#F5F2EC] font-mono-tech mt-0.5 block">
                  {event.time}
                </span>
              </div>

              <div className="p-2 border-r border-[#17110D] last:border-r-0">
                <span className="text-[10px] font-mono-tech uppercase text-[#858585] block flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FFB000]" /> VENUE
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#F5F2EC] font-mono-tech mt-0.5 block truncate" title={event.venue}>
                  {event.venue}
                </span>
              </div>

              <div className="p-2">
                <span className="text-[10px] font-mono-tech uppercase text-[#FF6A00] block flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> ENTRY
                </span>
                <span className="text-xs sm:text-sm font-black text-[#FFB000] font-mono-tech mt-0.5 block">
                  {event.entry}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                variant="fire"
                as="a"
                href="#venue"
                icon={<ArrowRight className="w-4 h-4 text-[#030303]" />}
                className="w-full sm:w-auto"
              >
                ENTER THE SHOW →
              </Button>

              <Button
                size="lg"
                variant="outline"
                as="a"
                href="#about"
                className="w-full sm:w-auto"
              >
                VIEW DETAILS
              </Button>
            </div>

          </div>

          {/* Right Column: Dramatic Ghost Rider Motorcycle Scene */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#4A0A07] shadow-scorched-card group">
              
              {/* Image with subtle hover zoom */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101010]">
                <img
                  src="/assets/ghost_rider_hero.jpg"
                  alt="Ghost Rider inspired supernatural motorcycle on burning asphalt at night"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                  loading="eager"
                />

                {/* Dark Vignette and Fiery Rim Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-[#030303]/60" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#FF6A00]/20 pointer-events-none" />
              </div>

              {/* Bottom Image Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded bg-[#030303]/85 backdrop-blur-md border border-[#4A0A07]/80">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FF6A00] animate-bounce" />
                  <span className="text-xs font-mono-tech text-[#F5F2EC] uppercase tracking-wider font-bold">
                    HELLISH MECHANICAL ENERGY
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-[#858585] uppercase">
                  NIGHT AUTO SHOW
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
