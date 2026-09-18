import React from 'react';
import { Trophy, Award, Medal, Sparkles, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const Prizes: React.FC = () => {
  const getPrizeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-10 h-10 text-amber-400" />;
      case 'Award': return <Award className="w-10 h-10 text-slate-300" />;
      case 'Medal': return <Medal className="w-10 h-10 text-amber-600" />;
      default: return <Sparkles className="w-10 h-10 text-cyan-400" />;
    }
  };

  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background FX */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(255,184,0,0.2)]">
            <Trophy className="w-3.5 h-3.5" /> CASH PRIZES
          </div>
          <h2 className="font-mono text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            CASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-violet-500">PRIZES</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            ₹6,000 Total Cash Prize pool awarded to the top 3 finalists.
          </p>
        </div>

        {/* Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {eventData.prizes.map((prize, idx) => {
            const isChampion = idx === 0;

            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 font-mono ${
                  isChampion
                    ? 'bg-[#0a0f2e] border-2 border-amber-400/80 shadow-[0_0_50px_rgba(255,184,0,0.3)] md:scale-105 z-20'
                    : 'bg-[#080d24]/90 border border-cyan-500/30 hover:border-cyan-400 shadow-xl'
                }`}
              >
                {isChampion && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-bold px-3 py-0.5 rounded-full shadow-lg">
                    1ST PRIZE
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    {getPrizeIcon(prize.icon)}
                  </div>

                  <span className="text-xs font-bold text-cyan-400 block mb-1">{prize.position}</span>
                  <h3 className="text-xl font-black text-white mb-2">{prize.title}</h3>
                  <p className="text-xs text-slate-400 font-sans mb-4">{prize.description}</p>

                  <div className="bg-slate-950/80 border border-cyan-500/20 p-4 rounded-xl mb-4">
                    <span className="text-[10px] text-slate-500 block mb-1 font-bold">CASH AWARD</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">
                      {prize.amount}
                    </span>
                  </div>

                  {/* Perks Bullet List */}
                  <div className="space-y-2">
                    <span className="text-[10px] text-cyan-400 font-bold block">INCLUDED BENEFITS:</span>
                    {prize.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
