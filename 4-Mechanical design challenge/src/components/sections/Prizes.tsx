import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Prizes: React.FC = () => {
  const prizes = cadForgeData.prizes || [
    {
      position: '1ST PRIZE',
      title: 'CHAMPION',
      amount: '₹5,000',
      description: 'First place cash award + Certificate of Excellence',
      accent: 'red',
      icon: 'Trophy'
    },
    {
      position: '2ND PRIZE',
      title: 'RUNNER-UP',
      amount: '₹3,000',
      description: 'Second place cash award + Certificate of Merit',
      accent: 'cyan',
      icon: 'Award'
    },
    {
      position: '3RD PRIZE',
      title: 'SECOND RUNNER-UP',
      amount: '₹2,000',
      description: 'Third place cash award + Certificate of Merit',
      accent: 'purple',
      icon: 'Medal'
    }
  ];

  return (
    <section id="prizes" className="relative py-24 bg-[#05060b] border-t border-white/5 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#ff0055]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono-tech text-xs uppercase tracking-widest mb-4 backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5" />
            <span>Prize Pool Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            PRIZES & RECOGNITION
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Compete for official cash prizes, certificates, and recognition at CAD Forge 2026.
          </p>
          
          {/* Total Prize Pool Badge */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#ff0055]/20 via-purple-500/20 to-[#00f0ff]/20 border border-white/20 backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,85,0.25)]">
            <span className="text-xs font-mono-tech text-slate-300 uppercase tracking-wider font-bold">TOTAL PRIZE POOL:</span>
            <span className="text-xl sm:text-2xl font-extrabold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-purple-300 to-[#00f0ff]">
              ₹10,000
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-6" />
        </div>

        {/* 3 Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, idx) => {
            const isRed = prize.accent === 'red' || idx === 0;
            const isCyan = prize.accent === 'cyan' || idx === 1;
            
            return (
              <div
                key={prize.position}
                className={`relative rounded-3xl p-8 bg-slate-900/75 border backdrop-blur-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] ${
                  isRed
                    ? 'border-[#ff0055]/40 hover:border-[#ff0055] hover:shadow-[0_0_35px_rgba(255,0,85,0.4)]'
                    : isCyan
                    ? 'border-[#00f0ff]/40 hover:border-[#00f0ff] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]'
                    : 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(157,78,221,0.4)]'
                }`}
              >
                {/* Decorative corner glow */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40 ${
                    isRed ? 'bg-[#ff0055]' : isCyan ? 'bg-[#00f0ff]' : 'bg-purple-500'
                  }`}
                />

                <div>
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 rounded-xl font-mono-tech text-xs font-bold uppercase tracking-wider border ${
                        isRed
                          ? 'bg-[#ff0055]/15 text-[#ff0055] border-[#ff0055]/30'
                          : isCyan
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {prize.position}
                    </span>

                    <div
                      className={`w-12 h-12 rounded-2xl bg-black/60 border flex items-center justify-center transition-all group-hover:scale-110 ${
                        isRed
                          ? 'border-[#ff0055]/50 text-[#ff0055]'
                          : isCyan
                          ? 'border-cyan-500/50 text-cyan-400'
                          : 'border-purple-500/50 text-purple-400'
                      }`}
                    >
                      {idx === 0 ? (
                        <Trophy className="w-6 h-6" />
                      ) : idx === 1 ? (
                        <Award className="w-6 h-6" />
                      ) : (
                        <Medal className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {prize.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                {/* Prize Amount Display Box */}
                <div
                  className={`pt-5 border-t border-white/10 flex items-center justify-between p-4 rounded-2xl bg-black/60 border ${
                    isRed
                      ? 'border-[#ff0055]/30 group-hover:border-[#ff0055]'
                      : isCyan
                      ? 'border-[#00f0ff]/30 group-hover:border-[#00f0ff]'
                      : 'border-purple-500/30 group-hover:border-purple-400'
                  }`}
                >
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest font-bold">
                    CASH PRIZE
                  </span>
                  <span
                    className={`font-orbitron text-2xl font-black ${
                      isRed ? 'text-[#ff0055]' : isCyan ? 'text-[#00f0ff]' : 'text-purple-400'
                    }`}
                  >
                    {prize.amount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
