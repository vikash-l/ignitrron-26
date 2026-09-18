'use client';

import { EVENT_CONFIG } from '@/config/eventData';
import { ArrowUp } from 'lucide-react';

export default function OutroSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col justify-between px-4 sm:px-8 lg:px-20 py-16 sm:py-20 z-20 select-none overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[200px] sm:h-[300px] bg-gradient-to-t from-red-600/10 via-accent/5 to-transparent blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Top Header Bar — Back to Top Button Only (No Duplicate Logo) */}
      <div className="flex justify-end items-center z-10">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-panel hover:border-white/30 text-neutral-300 hover:text-white transition-all duration-300 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase ml-auto"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent" />
        </button>
      </div>

      {/* Center Cinematic Typography */}
      <div className="my-auto z-10 text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 py-8">
        <h2 className="font-display text-4xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
          THE FUTURE <br />
          <span className="text-accent text-glow">IS MOVING.</span>
        </h2>

        <p className="font-mono text-[10px] sm:text-xs md:text-sm tracking-mega text-neutral-400 uppercase max-w-xl mx-auto">
          {EVENT_CONFIG.title} • {EVENT_CONFIG.subtitle}
        </p>

        <div className="pt-2 sm:pt-4">
          <a
            href={EVENT_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-mono text-xs tracking-mega font-bold uppercase transition-all duration-300 hover:bg-red-600 hover:scale-105 shadow-xl shadow-red-600/30"
          >
            GET WALK-IN PASS
          </a>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 z-10 font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-widest uppercase border-t border-white/5 pt-6 text-center sm:text-left">
        <div>© 2026 AUTO SHOW • IGNITRRON ’26. ALL RIGHTS RESERVED.</div>
        <div>TRIAD & CAR PARKING • WALK-IN EXHIBITION</div>
      </div>
    </footer>
  );
}
