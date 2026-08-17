import React from 'react';
import { Users, Laptop, CheckCircle2, Layers, Shield } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Rules: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    '01': <Users className="w-7 h-7 text-[#ff0055]" />,
    '02': <Laptop className="w-7 h-7 text-[#00f0ff]" />,
    '03': <CheckCircle2 className="w-7 h-7 text-[#9d4edd]" />,
    '04': <Layers className="w-7 h-7 text-[#ff0055]" />,
  };

  const glowMap: { [key: string]: string } = {
    '01': 'hover:border-[#ff0055] hover:shadow-[0_0_30px_rgba(255,0,85,0.3)]',
    '02': 'hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
    '03': 'hover:border-[#9d4edd] hover:shadow-[0_0_30px_rgba(157,78,221,0.3)]',
    '04': 'hover:border-[#ff0055] hover:shadow-[0_0_30px_rgba(255,0,85,0.3)]',
  };

  const badgeBgMap: { [key: string]: string } = {
    '01': 'bg-[#ff0055]/15 border-[#ff0055]/30 text-[#ff0055]',
    '02': 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    '03': 'bg-purple-500/15 border-purple-500/30 text-purple-300',
    '04': 'bg-[#ff0055]/15 border-[#ff0055]/30 text-[#ff0055]',
  };

  return (
    <section id="rules" className="relative py-24 bg-[#070912] border-t border-b border-white/5 overflow-hidden">
      {/* Spider-Verse Venom background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#ff0055]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Guidelines & Directives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            RULES & REGULATIONS
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Official guidelines for all participating CAD Forge 2026 engineering teams.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Stylish Futuristic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cadForgeData.rules.map((rule) => (
            <div
              key={rule.id}
              className={`relative rounded-3xl p-8 bg-slate-900/80 border border-white/10 backdrop-blur-xl transition-all duration-300 group ${glowMap[rule.id]} flex flex-col justify-between overflow-hidden`}
            >
              {/* Comic decorative corner cuts & halftone overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full pointer-events-none" />
              
              <div>
                {/* Header with index badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-xl border font-mono-tech text-xs font-bold ${badgeBgMap[rule.id]}`}>
                    RULE #{rule.id}
                  </div>
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform">
                    {iconMap[rule.id]}
                  </div>
                </div>

                {/* Main Rule Title */}
                <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {rule.title}
                </h3>
              </div>

              {/* Bottom Decorative Technical Line */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-[11px] text-slate-500">
                <span>VERIFIED DIRECTIVE</span>
                <span className="text-cyan-400 font-bold">STATUS: MANDATORY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
