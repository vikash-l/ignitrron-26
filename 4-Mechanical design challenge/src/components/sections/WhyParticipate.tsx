import React from 'react';
import { PencilRuler, Box, Eye, Flame, Target } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const WhyParticipate: React.FC = () => {
  const iconList = [
    <PencilRuler key="pencil" className="w-8 h-8 text-[#ff0055]" />,
    <Box key="box" className="w-8 h-8 text-[#00f0ff]" />,
    <Eye key="eye" className="w-8 h-8 text-[#9d4edd]" />,
    <Flame key="flame" className="w-8 h-8 text-[#f59e0b]" />,
  ];

  const glowStyles = [
    'hover:border-[#ff0055] hover:shadow-[0_0_35px_rgba(255,0,85,0.35)]',
    'hover:border-[#00f0ff] hover:shadow-[0_0_35px_rgba(0,240,255,0.35)]',
    'hover:border-[#9d4edd] hover:shadow-[0_0_35px_rgba(157,78,221,0.35)]',
    'hover:border-[#f59e0b] hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]',
  ];

  const numberColors = [
    'text-[#ff0055] bg-[#ff0055]/10 border-[#ff0055]/30',
    'text-[#00f0ff] bg-cyan-500/10 border-cyan-500/30',
    'text-[#9d4edd] bg-purple-500/10 border-purple-500/30',
    'text-[#f59e0b] bg-amber-500/10 border-amber-500/30',
  ];

  return (
    <section id="why-participate" className="relative py-24 bg-[#070912] border-t border-b border-white/5 overflow-hidden">
      {/* Spider-Verse Venom background glows */}
      <div className="absolute -top-20 right-1/4 w-80 h-80 bg-[#ff0055]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Value & Skill Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            WHY PARTICIPATE
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Sharpen your foundational engineering instincts and level up your parametric modeling capabilities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cadForgeData.whyParticipate.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-3xl p-8 bg-slate-900/80 border border-white/10 backdrop-blur-xl transition-all duration-300 group ${glowStyles[index]} flex flex-col justify-between hover:-translate-y-2 overflow-hidden`}
            >
              {/* Corner comic angle cut */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.02] rounded-bl-full pointer-events-none" />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-2.5 py-1 rounded-xl border font-mono-tech text-xs font-bold ${numberColors[index]}`}>
                    0{index + 1}
                  </span>
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform">
                    {iconList[index]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                <span>ENGINEERING PILLAR</span>
                <span className="text-cyan-400 font-bold">CORE SKILL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
