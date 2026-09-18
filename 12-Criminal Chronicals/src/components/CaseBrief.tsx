import React from 'react';
import { Eye, BrainCircuit, CheckCircle2, Radio } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const CaseBrief: React.FC = () => {
  const cardIcons = [Eye, BrainCircuit, CheckCircle2];

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Radio className="w-3.5 h-3.5" />
            <span>CASE BRIEFING</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            EVERY DETAIL <span className="text-[#e31b23]">MATTERS.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {EVENT_DATA.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-black border border-red-900/30 text-slate-300">• CRIME SCENES</span>
            <span className="px-2.5 py-1 rounded bg-black border border-red-900/30 text-slate-300">• EVIDENCE ANALYSIS</span>
            <span className="px-2.5 py-1 rounded bg-black border border-red-900/30 text-slate-300">• WITNESS STATEMENTS</span>
            <span className="px-2.5 py-1 rounded bg-black border border-red-900/30 text-slate-300">• LOGICAL CLUES</span>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_DATA.caseBriefPillars.map((pillar, idx) => {
            const Icon = cardIcons[idx] || Eye;
            return (
              <div
                key={pillar.title}
                className="relative glass-panel-red rounded-2xl p-8 border border-red-900/30 hover:border-[#e31b23]/60 glass-panel-red-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-4xl font-black text-red-900/60 group-hover:text-[#e31b23] transition-colors">
                      {pillar.step}
                    </span>
                    <div className="p-3 rounded-xl bg-black border border-red-900/40 text-[#e31b23] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(227,27,35,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-3xl text-white mb-2 tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="text-[#e31b23] font-mono text-xs italic mb-4">
                    "{pillar.quote}"
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-red-900/20 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>STAGE {pillar.step}</span>
                  <span className="text-[#e31b23] group-hover:translate-x-1 transition-transform">EXPLORE →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
