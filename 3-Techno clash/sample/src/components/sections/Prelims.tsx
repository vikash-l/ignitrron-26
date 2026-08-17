import React from 'react';
import { Laptop, CheckCircle2, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { eventData } from '../../data/event';

export const Prelims: React.FC = () => {
  const p = eventData.prelims;

  return (
    <section id="prelims" className="py-24 relative overflow-hidden bg-slate-950 border-t border-cyan-900/30">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Laptop className="w-3.5 h-3.5" /> QUALIFICATION STAGE
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
            {p.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">— {p.subtitle}</span>
          </h2>
          <p className="text-slate-300 text-sm font-mono mt-3 leading-relaxed max-w-2xl mx-auto">
            "{p.description}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#080d24]/90 border border-cyan-500/30 p-6 rounded-3xl backdrop-blur-md shadow-lg font-mono">
              <div className="text-xs text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> EVALUATION METHOD
              </div>
              <div className="flex items-center gap-4 text-2xl font-black text-white">
                <span className="text-cyan-400">{p.evaluationMethod.primary}</span>
                <span className="text-violet-400">+</span>
                <span className="text-cyan-400">{p.evaluationMethod.secondary}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-sans">
                Rankings determined strictly by highest score and submission accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/80 via-slate-900 to-violet-950/80 border-2 border-cyan-400 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.3)] text-center font-mono relative overflow-hidden group">
              <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

              <span className="text-xs font-bold text-cyan-400 tracking-widest block mb-1">QUALIFICATION CUTOFF</span>
              <h3 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-400 tracking-tight my-2">
                {p.qualificationBadge}
              </h3>
              <div className="inline-block bg-cyan-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-full shadow-[0_0_15px_#00F0FF] mt-1">
                {p.qualificationSub}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl font-mono text-xs text-slate-300">
              <div className="text-[10px] text-slate-400 font-bold mb-2">QUALIFICATION PATHWAY:</div>
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-slate-400">REGISTERED</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400">ONLINE PRELIMS</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40">TOP 25</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-violet-400">ROUND 1</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-[#070c20]/95 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,240,255,0.2)] backdrop-blur-xl font-mono">
              
              <div className="flex items-center justify-between border-b border-cyan-900/50 pb-4 mb-6 text-xs text-cyan-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold">PRELIMS ASSESSMENT UI // V4.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[10px] text-slate-400">GRID ONLINE</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/90 border border-cyan-500/30 p-4 rounded-xl">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>SECTION: ALGORITHMIC APTITUDE</span>
                    <span className="text-cyan-400 font-bold">ACCURACY: 94.8%</span>
                  </div>
                  <div className="text-xs text-white font-bold mb-2">
                    Q: Calculate worst-case time complexity of balancing a binary search tree.
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="bg-cyan-950/60 border border-cyan-500/40 text-cyan-200 p-2 rounded flex items-center justify-between">
                      <span>A) O(log N)</span>
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div className="bg-slate-950/40 border border-slate-800 text-slate-500 p-2 rounded">
                      <span>B) O(N²)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900/80 border border-cyan-500/20 p-3 rounded-xl">
                    <span className="text-slate-500 text-[10px] block">LIVE SCORE</span>
                    <span className="text-cyan-400 font-bold text-lg">285 PTS</span>
                  </div>
                  <div className="bg-slate-900/80 border border-violet-500/20 p-3 rounded-xl">
                    <span className="text-slate-500 text-[10px] block">COUNTDOWN</span>
                    <span className="text-violet-400 font-bold text-lg">ONLINE CLOCK</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
