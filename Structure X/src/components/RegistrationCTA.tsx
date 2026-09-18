import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const RegistrationCTA: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538] overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="site-container text-center relative z-10 space-y-12">
        {/* Final Event Summary Matrix */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#1b2538] hud-corner max-w-5xl mx-auto">
          <h3 className="text-xs font-mono font-bold text-[#00d9ff] tracking-widest uppercase mb-6">
            OFFICIAL EVENT LOGISTICS & VENUE METRICS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">EVENT</span>
              <span className="text-white font-bold">{EVENT_DETAILS.name}</span>
            </div>
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">TEAM SIZE</span>
              <span className="text-white font-bold">{EVENT_DETAILS.teamSize}</span>
            </div>
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">EXPECTED</span>
              <span className="text-[#00d9ff] font-bold">{EVENT_DETAILS.expectedParticipants}</span>
            </div>
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">SCHEDULE</span>
              <span className="text-white font-bold">{EVENT_DETAILS.day}</span>
            </div>
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">TIMING</span>
              <span className="text-[#7c5cff] font-bold">{EVENT_DETAILS.timing}</span>
            </div>
            <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
              <span className="text-gray-500 block text-[9px]">VENUE</span>
              <span className="text-[#ff3158] font-bold">{EVENT_DETAILS.venue}</span>
            </div>
          </div>
        </div>

        {/* Final Call To Action Card (NO REGISTRATION BUTTON) */}
        <div className="glass-panel-accent rounded-3xl p-8 sm:p-14 border-2 border-[#00d9ff]/40 hud-corner shadow-[0_0_80px_rgba(0,217,255,0.25)] space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07111b] border border-[#00d9ff]/40 text-[#00d9ff] text-xs font-mono">
            <Sparkles className="w-4 h-4" />
            <span>IGNITRRON 2026 • CIVIL ENGINEERING</span>
          </div>

          <h2 className="text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-black font-mono text-white tracking-tight uppercase">
            READY TO DECODE A <span className="text-[#00d9ff]">STRUCTURE?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 italic font-sans leading-relaxed">
            "Choose a landmark. Uncover its engineering. Present what makes it extraordinary."
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs font-bold tracking-wider text-white bg-gradient-to-r from-[#00d9ff] to-[#3b82f6] hover:from-[#00b3d6] hover:to-[#2563eb] border border-cyan-400/40 shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer h-12 no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
