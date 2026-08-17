import React from 'react';
import { ArrowRight, Radio, Sparkles } from 'lucide-react';
import { EVENT_DATA, REGISTRATION_URL } from '../config/eventData';

export const FinalCTA: React.FC = () => {
  const handleScrollToRounds = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const roundsEl = document.querySelector('#rounds');
    if (roundsEl) {
      roundsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Laser Scanline & Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-30 pointer-events-none" />
      
      {/* Red Radial Radar Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#8b0000]/20 via-[#c1121f]/15 to-[#e31b23]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative glass-panel-red rounded-3xl p-8 sm:p-14 border border-red-900/40 overflow-hidden shadow-2xl text-center space-y-6">
          
          {/* Laser scanning line overlay */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e31b23] to-transparent animate-scanline-red opacity-80 pointer-events-none shadow-[0_0_20px_#e31b23]" />

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/90 border border-red-600/40 text-xs font-mono text-white shadow-[0_0_15px_rgba(227,27,35,0.4)]">
            <Radio className="w-3.5 h-3.5 text-[#e31b23] animate-pulse" />
            <span>CASE STATUS: OPEN</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-5xl sm:text-7xl tracking-tight text-white leading-tight uppercase">
            READY TO CRACK <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#e31b23] bg-clip-text text-transparent">
              THE CASE?
            </span>
          </h2>

          {/* Tagline text */}
          <p className="text-slate-300 text-base sm:text-xl font-mono max-w-2xl mx-auto italic leading-relaxed">
            "Step into the investigation. Follow the evidence. Trust your reasoning."
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={REGISTRATION_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-base font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] hover:from-[#c1121f] hover:to-[#e31b23] transition-all duration-300 shadow-[0_0_30px_rgba(227,27,35,0.6)] hover:shadow-[0_0_45px_rgba(227,27,35,0.9)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#rounds"
              onClick={handleScrollToRounds}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-mono tracking-wider text-slate-300 bg-black border border-red-900/30 hover:border-[#e31b23]/50 hover:text-white hover:bg-slate-950 transition-all duration-200"
            >
              <span>EXPLORE THE ROUNDS</span>
            </a>
          </div>

          {/* Bottom event metadata string */}
          <div className="pt-4 font-mono text-xs text-slate-500 flex items-center justify-center gap-4 flex-wrap">
            <span>{EVENT_DATA.organizer}</span>
            <span>•</span>
            <span>{EVENT_DATA.day}</span>
            <span>•</span>
            <span>{EVENT_DATA.venue}</span>
            <span>•</span>
            <span>TOTAL POOL: {EVENT_DATA.totalPrizePool}</span>
          </div>

        </div>
      </div>
    </section>
  );
};
