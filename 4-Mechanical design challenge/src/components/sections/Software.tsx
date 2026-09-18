import React from 'react';
import { Box, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const Software: React.FC = () => {
  const softwareDetails: {
    [key: string]: {
      icon: React.ReactNode;
      developer: string;
      tagline: string;
      color: string;
      accentBg: string;
      features: string[];
    };
  } = {
    'Fusion 360': {
      icon: <Box className="w-10 h-10 text-[#ff0055]" />,
      developer: 'Autodesk',
      tagline: 'Parametric 3D & CAM Engine',
      color: 'border-[#ff0055]/50 shadow-[0_0_30px_rgba(255,0,85,0.2)] hover:border-[#ff0055] hover:shadow-[0_0_40px_rgba(255,0,85,0.4)]',
      accentBg: 'bg-[#ff0055]/10 text-[#ff0055] border-[#ff0055]/30',
      features: ['Parametric Modeling', 'Generative Design Toolset', 'Direct & Freeform Editing'],
    },
    'SolidWorks': {
      icon: <Cpu className="w-10 h-10 text-[#00f0ff]" />,
      developer: 'Dassault Systèmes',
      tagline: 'Precision Solid & Assembly Modeler',
      color: 'border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]',
      accentBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      features: ['Solid Feature Modeling', 'Mechanical Mating & Constraints', 'Technical Dimensioning'],
    },
    'CATIA': {
      icon: <Layers className="w-10 h-10 text-[#9d4edd]" />,
      developer: 'Dassault Systèmes',
      tagline: 'High-End Surface & Engineering Suite',
      color: 'border-purple-500/50 shadow-[0_0_30px_rgba(157,78,221,0.2)] hover:border-purple-400 hover:shadow-[0_0_40px_rgba(157,78,221,0.4)]',
      accentBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      features: ['Complex Generative Surfaces', 'Automotive / Aerospace Precision', 'Part Body Reconstruction'],
    },
  };

  return (
    <section id="software" className="relative py-24 bg-[#05060b] overflow-hidden">
      {/* Spider-Verse Venom background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Approved Modeling Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            OFFICIAL CAD SOFTWARE
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Participants in Round 2 must recreate the isometric model using any one of these 3 authorized tools.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* 3 Animated Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8">
          {cadForgeData.software.map((sw) => {
            const detail = softwareDetails[sw.name];
            return (
              <div
                key={sw.name}
                className={`relative rounded-3xl p-8 bg-slate-900/80 border backdrop-blur-xl transition-all duration-300 group ${detail.color} flex flex-col justify-between overflow-hidden hover:-translate-y-2`}
              >
                {/* Background Halftone & Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none" />

                <div>
                  {/* Top Bar with Developer Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`px-3 py-1 rounded-lg border font-mono-tech text-xs font-bold uppercase ${detail.accentBg}`}>
                      {detail.developer}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono-tech text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>APPROVED</span>
                    </div>
                  </div>

                  {/* Software Icon & Title */}
                  <div className="mb-6">
                    <div className="mb-4 inline-block p-4 rounded-2xl bg-black/60 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {detail.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {sw.name}
                    </h3>
                    <p className="text-xs font-mono-tech text-slate-400">
                      {detail.tagline}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {detail.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs font-sans text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-[11px] text-slate-400">
                  <span>ROUND 2 AUTHORIZED</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform">
                    READY →
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
