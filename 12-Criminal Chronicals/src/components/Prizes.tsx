import React from 'react';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="relative py-24 bg-[#0b0b0b] border-y border-red-900/20 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />

      {/* Red Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Trophy className="w-3.5 h-3.5" />
            <span>REWARDS & RECOGNITION</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl tracking-tight text-white uppercase">
            CRACK THE CASE. <span className="text-[#e31b23]">CLAIM THE PRIZE.</span>
          </h2>

          <p className="text-slate-300 text-base">
            Total Prize Pool of <span className="text-emerald-400 font-mono font-bold text-lg">₹6,000</span> awarded to top detective teams.
          </p>
        </div>

        {/* 3 Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {EVENT_DATA.prizes.map((prize, idx) => {
            const isFirst = prize.colorTheme === 'gold';
            return (
              <div
                key={prize.place}
                className={`relative glass-panel-red rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between group ${
                  isFirst
                    ? 'border-red-600/60 bg-[#0e0e0e] shadow-[0_0_35px_rgba(227,27,35,0.25)] md:-translate-y-4'
                    : 'border-red-900/30 hover:border-[#e31b23]/40'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      isFirst
                        ? 'bg-red-950 text-[#e31b23] border-red-600/60'
                        : 'bg-black text-slate-300 border-red-900/30'
                    }`}>
                      {prize.badge}
                    </span>

                    <div className={`p-3 rounded-xl border ${
                      isFirst
                        ? 'bg-red-950 text-[#e31b23] border-red-600/40'
                        : 'bg-black text-slate-300 border-red-900/30'
                    }`}>
                      {isFirst ? <Trophy className="w-6 h-6" /> : prize.colorTheme === 'silver' ? <Medal className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-slate-400 block tracking-widest uppercase">
                    {prize.place}
                  </span>

                  <h3 className="font-heading font-black text-3xl text-white mt-1 mb-3">
                    {prize.title}
                  </h3>

                  <div className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl text-white my-4 tracking-tight">
                    <span className={isFirst ? 'text-[#e31b23]' : 'text-white'}>
                      {prize.amount}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {prize.highlight}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-red-900/20 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                  <span>AWARD RATIO</span>
                  <span className="text-[#e31b23] font-bold">OFFICIAL CASH PRIZE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Summary Banner */}
        <div className="glass-panel-red rounded-xl p-6 border border-red-900/30 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#e31b23] shrink-0" />
            <div className="text-left">
              <span className="text-xs text-slate-400 block">TOTAL EVENT PRIZE POOL</span>
              <span className="text-sm font-bold text-white">OFFICIAL IGNITRRON'26 ALLOCATION</span>
            </div>
          </div>
          <span className="text-2xl font-black text-emerald-400 px-4 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            {EVENT_DATA.totalPrizePool}
          </span>
        </div>

      </div>
    </section>
  );
};
