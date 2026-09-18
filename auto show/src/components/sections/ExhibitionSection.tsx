'use client';

import { useState } from 'react';
import { EVENT_CONFIG } from '@/config/eventData';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function ExhibitionSection() {
  const [activeCategory, setActiveCategory] = useState(EVENT_CONFIG.categories[0].id);

  return (
    <section
      id="exhibition"
      className="relative w-full min-h-screen bg-[#050505] text-white px-4 sm:px-8 lg:px-20 py-20 sm:py-32 z-20 select-none border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Approved Auto Show Overview Description */}
        <div className="p-6 sm:p-10 lg:p-12 glass-panel rounded-3xl border border-white/15 mb-16 sm:mb-20 space-y-6">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-mega uppercase text-accent font-bold">
            <Compass className="w-4 h-4" />
            <span>AUTO SHOW • EXHIBITION OVERVIEW</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight">
            ABOUT THE <span className="text-accent text-glow">AUTO SHOW.</span>
          </h2>

          <div className="space-y-4 font-sans text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-5xl">
            <p>
              Auto Show is a walk-in automotive exhibition that brings together a dynamic showcase of automobiles and superbikes, celebrating performance, design, engineering, innovation, and automotive culture. The exhibition offers visitors an opportunity to experience a wide range of machines up close and discover the technology, craftsmanship, styling, and mechanical character behind modern automotive engineering.
            </p>
            <p>
              Featuring an extensive lineup of 20+ cars and 10+ superbikes, the event is designed as an immersive showcase for automobile enthusiasts, students, and visitors. From performance-focused machines to distinctive automotive builds, the exhibition brings together the energy of the automotive world in a single experience.
            </p>
            <p>
              The Auto Show is presented as part of IGNITRRON’26, creating a platform where automotive passion, engineering excellence, design, and community come together.
            </p>
          </div>
        </div>

        {/* Section Sub-Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-mega uppercase text-accent mb-2 sm:mb-3">
              <span>WALK-IN SHOWCASE ZONES</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
              EXHIBITION <span className="text-accent text-glow">LINEUP.</span>
            </h3>
          </div>

          <p className="font-mono text-[10px] sm:text-xs text-neutral-400 max-w-md tracking-widest uppercase leading-relaxed">
            CURATED EXHIBITION ZONES FEATURING 20+ CARS & 10+ SUPERBIKES AT TRIAD & CAR PARKING.
          </p>
        </div>

        {/* Categories List & Image Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Category Editorial List */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-3 sm:gap-4">
            {EVENT_CONFIG.categories.map((cat, index) => {
              const isSelected = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl cursor-pointer transition-all duration-500 border ${
                    isSelected
                      ? 'bg-white/5 border-accent/60 shadow-xl shadow-red-950/20'
                      : 'bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="font-mono text-[10px] sm:text-xs text-neutral-500 font-bold">
                        0{index + 1}
                      </span>
                      <h3
                        className={`font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase transition-colors ${
                          isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-white'
                        }`}
                      >
                        {cat.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        isSelected
                          ? 'bg-accent border-accent text-white rotate-45'
                          : 'border-white/10 text-neutral-500 group-hover:text-white group-hover:border-white/30'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <p className="font-mono text-[10px] sm:text-xs text-accent tracking-widest uppercase mb-1">
                    {cat.subtitle}
                  </p>

                  <p
                    className={`font-sans text-xs text-neutral-400 max-w-xl transition-all duration-300 ${
                      isSelected ? 'opacity-100 max-h-24 mt-2' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Large Magazine Category Image Showcase */}
          <div className="lg:col-span-5 relative min-h-[350px] sm:min-h-[450px] rounded-3xl overflow-hidden glass-panel border border-white/10">
            {EVENT_CONFIG.categories.map((cat) => {
              const isSelected = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isSelected ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-105 blur-sm pointer-events-none'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 glass-panel rounded-2xl border border-white/10">
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-mega text-accent font-bold uppercase block mb-1">
                      EXHIBITION FEATURE
                    </span>
                    <h4 className="font-display text-base sm:text-xl font-bold text-white uppercase mb-1 sm:mb-2">
                      {cat.title} — {cat.subtitle}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
