'use client';

import { EVENT_CONFIG } from '@/config/eventData';
import { assetPath } from '@/config/assetPath';
import { Calendar, MapPin, Clock, Ticket, Award, Car, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function EventInfoSection() {
  return (
    <section
      id="event"
      className="relative w-full bg-[#050505] text-white px-4 sm:px-8 lg:px-20 py-20 sm:py-32 z-20 select-none border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Event Overview & Date */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-panel border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest text-accent">
              <Calendar className="w-3.5 h-3.5" />
              <span>OFFICIAL EVENT DETAILS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-none">
              AUTO <span className="text-accent text-glow">SHOW</span> <br />
              IGNITRRON ’26.
            </h2>

            <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
              Auto Show is a walk-in automotive exhibition powered by RoadTribe — bringing together a dynamic showcase of 20+ cars and 10+ superbikes, celebrating performance, design, engineering, innovation, and automotive culture.
            </p>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-accent font-mono text-[10px] sm:text-xs font-bold uppercase">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>DAY & DATE</span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-white">
                  {EVENT_CONFIG.day} • {EVENT_CONFIG.dates}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400">TIME: {EVENT_CONFIG.time}</div>
              </div>

              <div className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-accent font-mono text-[10px] sm:text-xs font-bold uppercase">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>VENUE</span>
                </div>
                <div className="font-display text-sm sm:text-base font-bold text-white">
                  {EVENT_CONFIG.venue}
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] text-neutral-400">ENTRY: {EVENT_CONFIG.entry}</div>
              </div>

              <div className="p-4 sm:p-5 glass-panel rounded-2xl border border-white/10 space-y-2 sm:col-span-2">
                <div className="flex items-center gap-2 text-accent font-mono text-[10px] sm:text-xs font-bold uppercase">
                  <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>EXHIBITION LINEUP</span>
                </div>
                <div className="font-display text-base sm:text-lg font-bold text-white">
                  {EVENT_CONFIG.lineupCars} & {EVENT_CONFIG.lineupBikes}
                </div>
                <div className="font-sans text-[11px] text-neutral-400">
                  Featuring a curated lineup of automobiles and superbikes across performance platforms and engineering builds.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs font-mono text-neutral-400 pt-1 sm:pt-2">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>3:00 PM – 5:00 PM</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-600 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-accent" />
                <span>IGNITRRON ’26 PRESENTATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule Breakdown */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-10 glass-panel rounded-3xl border border-white/10 space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4 flex justify-between items-center">
              <span>EVENT TIMELINE</span>
              <Ticket className="w-5 h-5 text-accent" />
            </h3>

            <div className="space-y-5 sm:space-y-6 font-mono text-xs">
              {[
                {
                  day: 'DAY 01 • 18/09/2026',
                  title: 'WALK-IN EXHIBITION OPENING',
                  detail: 'Doors open at Triad & Car Parking. Walk-in access to 20+ cars and 10+ superbikes.',
                  time: '3:00 PM',
                },
                {
                  day: 'DAY 01 • 18/09/2026',
                  title: 'AUTOMOTIVE & SUPERBIKE SHOWCASE',
                  detail: 'Explore mechanical character, styling, craftsmanship, and modern automotive engineering up close.',
                  time: '3:30 PM',
                },
                {
                  day: 'DAY 01 • 18/09/2026',
                  title: 'COMMUNITY & STUDENT INTERACTION',
                  detail: 'Interactive walkthrough for automotive enthusiasts, students, and visitors.',
                  time: '4:15 PM',
                },
                {
                  day: 'DAY 01 • 18/09/2026',
                  title: 'EXHIBITION CONCLUDING SESSION',
                  detail: 'Wrap-up of the Day 01 Auto Show showcase as part of IGNITRRON ’26.',
                  time: '5:00 PM',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    {idx < 3 && <div className="w-[1px] h-full bg-neutral-800 my-1" />}
                  </div>

                  <div className="space-y-1 w-full">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-accent text-[9px] sm:text-[10px] tracking-widest uppercase font-bold">
                        {item.day}
                      </span>
                      <span className="text-neutral-400 text-[9px] sm:text-[10px]">{item.time}</span>
                    </div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-white uppercase group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-400 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANIZERS & SPONSORS SECTION */}
        <div id="sponsors" className="p-6 sm:p-10 glass-panel rounded-3xl border border-accent/30 space-y-8 bg-gradient-to-br from-black/90 via-black to-accent/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[10px] font-mono tracking-widest text-accent uppercase font-bold mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>OFFICIAL PARTNERS & SPONSORS</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                OFFICIAL SPONSORS
              </h3>
            </div>
            <div className="font-mono text-xs text-neutral-400 uppercase">
              IGNITRRON ’26
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: ROADTRIBE (PRIMARY STARTUP & BRAND) */}
            <div className="p-6 rounded-2xl bg-black/80 border border-accent/40 hover:border-accent transition-all space-y-4 flex flex-col justify-between group shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    PRIMARY STARTUP & BRAND
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-[9px] font-mono font-bold uppercase">
                    PRIMARY BRAND
                  </span>
                </div>

                <div className="relative w-full h-28 my-2 rounded-xl bg-black/90 flex items-center justify-center p-3 border border-white/10 overflow-hidden">
                  <Image
                    src={assetPath('/assets/sponsors/sponsor_flag.png')}
                    alt="ROADTRIBE Startup Logo"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-display text-lg font-bold text-white uppercase">
                  ROADTRIBE
                </h4>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Primary automotive startup & digital community platform — focused on cars, bikes, road trips, live convoy tracking, mapped trips, and driving experiences.
                </p>
              </div>
            </div>

            {/* Card 2: CAR EDITZ (SECONDARY ASSOCIATED PARTNER) */}
            <div className="p-6 rounded-2xl bg-black/80 border border-white/15 hover:border-accent/40 transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    ASSOCIATED PARTNER
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-neutral-300 text-[9px] font-mono font-bold uppercase">
                    SECONDARY PARTNER
                  </span>
                </div>

                <div className="relative w-full h-28 my-2 rounded-xl bg-black/90 flex items-center justify-center p-3 border border-white/10 overflow-hidden">
                  <Image
                    src={assetPath('/assets/sponsors/car_editz.png')}
                    alt="CAR EDITZ Partner Logo"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="font-display text-lg font-bold text-white uppercase">
                  CAR EDITZ
                </h4>
                <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                  Car washing & automotive paint detailing business located at Kalapatti Road, Coimbatore. Supporting partner associated with the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
