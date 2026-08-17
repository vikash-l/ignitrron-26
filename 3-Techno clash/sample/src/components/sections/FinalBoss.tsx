import React from 'react';
import { Crown, Cpu, Brain, Users, Gauge, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const FinalBoss: React.FC = () => {
  const fb = eventData.finalBoss;

  const getIndicatorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-violet-400" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="final-boss" className="py-28 relative overflow-hidden bg-[#03060f] border-y-2 border-amber-500/50">
      {/* Darkened Climax Ambient Environment */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-mono text-xs mb-4 shadow-[0_0_25px_rgba(255,184,0,0.3)] animate-pulse">
            <Crown className="w-4 h-4 text-amber-400" /> {fb.badge}
          </div>
          
          <h2 className="font-mono text-5xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight">
            {fb.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-glow-gold">
              {fb.mainTitle}
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base font-mono mt-4 leading-relaxed max-w-3xl mx-auto">
            "{fb.description}"
          </p>

          <div className="mt-4 inline-block bg-amber-950/60 border border-amber-500/50 px-6 py-2 rounded-full font-mono text-xs text-amber-300 font-black shadow-[0_0_20px_rgba(255,184,0,0.2)]">
            {fb.teamsCount}
          </div>
        </div>

        {/* CENTRAL FUTURISTIC FINAL BOSS CHALLENGE CORE */}
        <div className="relative bg-[#070b1a]/95 border-2 border-amber-400/80 rounded-3xl p-8 sm:p-12 shadow-[0_0_80px_rgba(255,184,0,0.25)] backdrop-blur-2xl mb-16 overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg className="w-[600px] h-[600px] animate-spin-slow" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="230" stroke="#FFB800" strokeWidth="2" fill="none" strokeDasharray="30 15" />
              <circle cx="250" cy="250" r="170" stroke="#00F0FF" strokeWidth="1.5" fill="none" strokeDasharray="10 5" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative z-10 font-mono text-xs">
            {fb.teamworkIndicators.map((ind, i) => (
              <div
                key={i}
                onMouseEnter={() => sound.playHover()}
                className="bg-slate-900/90 border border-amber-500/40 p-4 rounded-2xl flex items-center gap-3 shadow-md backdrop-blur-md hover:border-amber-400 transition"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  {getIndicatorIcon(ind.icon)}
                </div>
                <span className="font-bold text-white text-[11px] leading-snug">{ind.title}</span>
              </div>
            ))}
          </div>

          {/* 8-Stage Animated Sequence Roadmap */}
          <div className="pt-6 border-t border-amber-900/40 relative z-10 font-mono">
            <div className="text-xs text-amber-400 font-bold mb-4 text-center tracking-widest">
              FINAL BOSS EXECUTION FLOW SEQUENCE
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-[10px]">
              {fb.flowSteps.map((s) => (
                <div 
                  key={s.step} 
                  className="bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 p-2.5 rounded-xl flex flex-col items-center justify-between gap-1 shadow-md transition"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-[9px]">
                    {s.step}
                  </span>
                  <span className="text-slate-200 font-bold leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DEDICATED SCORING SECTION: HOW THE FINAL BOSS IS RANKED */}
        <div className="bg-[#080d24]/90 border border-cyan-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl font-mono">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-cyan-400 tracking-widest block mb-1">EVALUATION METRICS</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              HOW THE FINAL BOSS IS RANKED
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {fb.rankingFactors.map((factor) => (
              <div
                key={factor.number}
                className={`p-6 rounded-2xl border transition-all ${
                  factor.highlight
                    ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_20px_rgba(255,184,0,0.2)]'
                    : 'bg-slate-900/80 border-slate-700'
                }`}
              >
                <span className="text-2xl font-black text-amber-400 block mb-2">{factor.number}</span>
                <h4 className="text-sm font-bold text-white leading-snug">{factor.title}</h4>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-6 rounded-2xl text-slate-950 font-black text-center shadow-[0_0_40px_rgba(255,184,0,0.4)]">
            <div className="text-xs tracking-widest uppercase mb-1 opacity-90">GOLDEN RULE OF THE FINAL BOSS</div>
            <div className="text-lg sm:text-xl font-black tracking-tight">
              "{fb.rankingNote}"
            </div>
            <div className="mt-2 inline-block bg-slate-950 text-amber-400 text-xs px-4 py-1 rounded-full font-bold">
              FASTEST CORRECT SOLUTION WINS 👑
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
