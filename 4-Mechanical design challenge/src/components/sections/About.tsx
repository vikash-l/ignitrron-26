import React from 'react';
import { PenTool, Box, ArrowRight, Compass } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#070912]/90 border-t border-b border-cyan-500/10 overflow-hidden">
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Spider-Verse accent spray */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff0055]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Event Briefing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            {cadForgeData.event.aboutTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Main Description Card */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-lg bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40 font-mono-tech text-xs font-bold uppercase">
                  Core Objective
                </span>
                <span className="font-mono-tech text-xs text-slate-400">
                  {cadForgeData.event.department}
                </span>
              </div>

              <div className="space-y-6 text-slate-200 font-sans text-base sm:text-lg leading-relaxed">
                <p className="border-l-4 border-[#ff0055] pl-4 italic text-slate-100 font-medium">
                  CAD Forge is a mechanical engineering design challenge that tests participants&apos; visualization, engineering drawing, and CAD modeling skills.
                </p>
                <p className="border-l-4 border-cyan-400 pl-4 text-slate-300">
                  Participants will convert a given 3D isometric model into engineering projections and then recreate the same model using professional CAD software.
                </p>
              </div>
            </div>

            {/* Quick Highlights Summary */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono-tech uppercase font-bold text-white">Manual Projections</h4>
                  <p className="text-xs text-slate-400">Orthographic view drawing on A3 Sheet</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff0055]/10 border border-[#ff0055]/30 flex items-center justify-center text-[#ff0055] shrink-0">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono-tech uppercase font-bold text-white">3D CAD Modeling</h4>
                  <p className="text-xs text-slate-400">Parametric reconstruction in modern software</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Blueprint & Workflow Diagram */}
          <div className="lg:col-span-5 bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-center relative">
            <div className="font-mono-tech text-xs text-cyan-400 uppercase tracking-widest mb-6 flex items-center justify-between border-b border-white/10 pb-3">
              <span>WORKFLOW PIPELINE</span>
              <span className="text-[#ff0055] font-bold">2 PHASES</span>
            </div>

            {/* Phase 1 Schematic */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-[#ff0055]/30 mb-4 hover:border-[#ff0055] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-[#ff0055]/20 text-[#ff0055] font-bold">
                  PHASE 1
                </span>
                <span className="text-xs font-mono-tech text-slate-400">Manual Drafting</span>
              </div>
              <h4 className="font-orbitron text-sm font-bold text-white">
                3D Isometric Model → Projections
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Convert the 3D model into Front, Side, and Top views accurately on paper.
              </p>
            </div>

            {/* Transition Arrow */}
            <div className="flex justify-center my-1">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Phase 2 Schematic */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                  PHASE 2
                </span>
                <span className="text-xs font-mono-tech text-slate-400">CAD Workstation</span>
              </div>
              <h4 className="font-orbitron text-sm font-bold text-white">
                CAD 3D Model Recreation
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Recreate the same model using Fusion 360, SolidWorks, or CATIA.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
