import React from 'react';
import { Trophy } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const PrizeSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-6">
          <Trophy className="w-3.5 h-3.5" />
          <span>COMPETITION REWARDS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase mb-4">
          PRIZE <span className="text-[#00d9ff]">POOL</span>
        </h2>

        <div className="inline-block px-6 py-2 rounded-full bg-[#07111b] border border-[#00d9ff]/50 text-[#00d9ff] font-mono text-xs font-bold tracking-widest uppercase mb-12 shadow-[0_0_20px_rgba(0,217,255,0.25)]">
          TOTAL PRIZE POOL: {EVENT_DETAILS.prizePool}
        </div>

        {/* 3 Prize Cards Grid - 1st Prize Visually Dominant */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {/* 2nd Prize Card */}
          <div className="glass-panel rounded-2xl p-6 border border-[#1b2538] hover:border-[#7c5cff]/50 transition-all space-y-3 order-2 md:order-1">
            <div className="w-12 h-12 rounded-full bg-[#7c5cff]/10 border border-[#7c5cff]/40 flex items-center justify-center text-[#7c5cff] mx-auto font-mono font-bold text-lg">
              2nd
            </div>
            <h4 className="text-sm font-mono font-bold text-gray-300 uppercase">RUNNER UP</h4>
            <div className="text-3xl font-mono font-black text-white">
              {EVENT_DETAILS.secondPrize}
            </div>
            <span className="text-[10px] font-mono text-gray-500 block">PLUS TROPHY & CERTIFICATE</span>
          </div>

          {/* 1st Prize Card - VISUALLY DOMINANT */}
          <div className="glass-panel-accent rounded-3xl p-8 border-2 border-[#00d9ff] shadow-[0_0_50px_rgba(0,217,255,0.4)] transform md:-translate-y-4 space-y-4 order-1 md:order-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00d9ff] text-[#05080d] text-[9px] font-mono font-bold px-3 py-1 rounded-bl">
              CHAMPION
            </div>
            <div className="w-16 h-16 rounded-full bg-[#00d9ff]/20 border-2 border-[#00d9ff] flex items-center justify-center text-[#00d9ff] mx-auto shadow-[0_0_30px_#00d9ff]">
              <Trophy className="w-8 h-8" />
            </div>
            <h4 className="text-base font-mono font-bold text-[#00d9ff] uppercase tracking-wider">
              1st PRIZE WINNER
            </h4>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-mono font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {EVENT_DETAILS.firstPrize}
            </div>
            <span className="text-xs font-mono text-cyan-300 block font-bold">CHAMPIONSHIP TROPHY & CERTIFICATE</span>
          </div>

          {/* 3rd Prize Card */}
          <div className="glass-panel rounded-2xl p-6 border border-[#1b2538] hover:border-[#ff3158]/50 transition-all space-y-3 order-3">
            <div className="w-12 h-12 rounded-full bg-[#ff3158]/10 border border-[#ff3158]/40 flex items-center justify-center text-[#ff3158] mx-auto font-mono font-bold text-lg">
              3rd
            </div>
            <h4 className="text-sm font-mono font-bold text-gray-300 uppercase">2nd RUNNER UP</h4>
            <div className="text-3xl font-mono font-black text-white">
              {EVENT_DETAILS.thirdPrize}
            </div>
            <span className="text-[10px] font-mono text-gray-500 block">PLUS TROPHY & CERTIFICATE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
