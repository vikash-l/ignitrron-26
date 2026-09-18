'use client';

import { ArrowRight } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventData';

export default function RegistrationCTA() {
  return (
    <section
      id="register"
      className="relative w-full bg-[#050505] text-white px-4 sm:px-8 lg:px-20 py-20 sm:py-32 z-20 select-none border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative p-6 sm:p-12 lg:p-20 glass-panel rounded-3xl border border-white/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <span className="inline-block font-mono text-[10px] sm:text-xs tracking-mega uppercase text-accent font-bold">
            BE PART OF IGNITRRON ’26
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
            EXPERIENCE THE <br />
            <span className="text-accent text-glow">AUTO SHOW.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Walk-in entry on Day 01 (18/09/2026) from 3:00 PM – 5:00 PM at Triad & Car Parking. Discover 20+ cars and 10+ superbikes up close.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href={EVENT_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-accent text-white font-mono text-[11px] sm:text-xs tracking-mega font-bold uppercase transition-all duration-300 hover:bg-red-600 hover:shadow-2xl hover:shadow-red-600/50 hover:scale-105"
            >
              <span>GET WALK-IN PASS</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
