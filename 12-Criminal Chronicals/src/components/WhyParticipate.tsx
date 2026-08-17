import React from 'react';
import { Eye, BrainCircuit, KeyRound, Users, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const WhyParticipate: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Eye,
    BrainCircuit,
    KeyRound,
    Users
  };

  return (
    <section className="relative py-20 bg-[#0b0b0b] border-y border-red-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INVESTIGATION HIGHLIGHTS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            WHY ENTER THE <span className="text-[#e31b23]">INVESTIGATION?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Develop practical analytical competencies modeled after real forensic research and civil service aptitude frameworks.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_DATA.whyParticipate.map((item, idx) => {
            const Icon = iconMap[item.icon] || Eye;
            return (
              <div
                key={item.id}
                className="glass-panel-red rounded-xl p-6 border border-red-900/30 hover:border-[#e31b23]/50 glass-panel-red-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-lg bg-black border border-red-900/40 text-[#e31b23] w-fit mb-5 group-hover:scale-110 group-hover:border-[#e31b23] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-red-900/20 font-mono text-[10px] text-red-400/80 flex items-center justify-between">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">VERIFIED ✓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
