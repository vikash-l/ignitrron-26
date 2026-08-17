import React from 'react';
import { Trophy, Crown, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';

export const Winners: React.FC = () => {
  const w = eventData.winner;

  return (
    <section id="winners" className="py-24 relative overflow-hidden bg-slate-950 border-t border-cyan-900/30">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center font-mono">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs mb-4 shadow-[0_0_15px_rgba(255,184,0,0.2)]">
          <Crown className="w-4 h-4 text-amber-400" /> ULTIMATE HONOR
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          {w.title}
        </h2>
        <p className="text-xs text-amber-400 font-bold tracking-widest mt-2">
          {w.subtitle}
        </p>

        <div className="mt-12 bg-[#080d24]/90 border-2 border-amber-400/70 rounded-3xl p-8 sm:p-12 shadow-[0_0_60px_rgba(255,184,0,0.25)] backdrop-blur-xl max-w-2xl mx-auto relative overflow-hidden">
          
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 border-2 border-amber-300 flex items-center justify-center mx-auto shadow-[0_0_40px_#FFB800] mb-6 animate-pulse">
            <Trophy className="w-12 h-12 text-slate-950" />
          </div>

          <h3 className="text-2xl font-black text-white mb-2">
            {w.status}
          </h3>

          <p className="text-xs text-slate-400 font-sans max-w-md mx-auto leading-relaxed">
            The grand trophy and champion honors will be awarded live on stage immediately following the verification of the Final Boss Challenge submissions.
          </p>

          <div className="mt-6 pt-4 border-t border-amber-900/40 text-[10px] text-amber-300 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>OFFICIAL EVALUATION IN PROGRESS BY NEURAL JURY</span>
          </div>

        </div>

      </div>
    </section>
  );
};
