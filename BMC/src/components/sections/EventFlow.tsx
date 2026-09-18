import React, { useState } from 'react';
import { PenTool, Monitor, FileText, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

export const EventFlow: React.FC = () => {
  const [activeRound, setActiveRound] = useState<number>(0);

  return (
    <section id="event-flow" className="relative py-24 bg-[#05060b] overflow-hidden">
      {/* Spider-Verse background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ff0055]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono-tech text-xs uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-orbitron tracking-tight text-white mb-4">
            EVENT FLOW
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base">
            Two rigorous competitive stages designed to test manual precision and CAD modeling dexterity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] mx-auto rounded-full mt-4" />
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setActiveRound(0)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-orbitron text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeRound === 0
                  ? 'bg-[#ff0055] text-white shadow-[0_0_20px_rgba(255,0,85,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>ROUND 1</span>
            </button>

            <button
              onClick={() => setActiveRound(1)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-orbitron text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeRound === 1
                  ? 'bg-[#00f0ff] text-black shadow-[0_0_20px_rgba(0,240,255,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>ROUND 2</span>
            </button>
          </div>
        </div>

        {/* Timeline Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
          
          {/* ROUND 1 CARD */}
          <div
            onClick={() => setActiveRound(0)}
            className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
              activeRound === 0
                ? 'bg-slate-900/90 border-2 border-[#ff0055] shadow-[0_0_40px_rgba(255,0,85,0.25)] scale-[1.01]'
                : 'bg-slate-950/60 border border-white/10 opacity-70 hover:opacity-100 hover:border-white/20'
            }`}
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-lg bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/40 font-mono-tech text-xs font-bold tracking-wider">
                  ROUND 1
                </span>
                <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1">
                  <PenTool className="w-3.5 h-3.5 text-[#ff0055]" /> Manual Drafting
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white mb-6">
                Engineering Drawing Challenge
              </h3>

              {/* What participants will receive */}
              <div className="mb-6 p-5 rounded-2xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Participants will receive:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-[#ff0055]" />
                    <span>An A3 Sheet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
                    <span>A 3D Isometric View</span>
                  </div>
                </div>
              </div>

              {/* Task Requirements */}
              <div className="mb-6">
                <h4 className="text-xs font-mono-tech uppercase text-slate-300 font-bold mb-3">
                  Task: Draw the following views accurately:
                </h4>
                <div className="space-y-2">
                  {['Front View', 'Side View', 'Top View'].map((view, idx) => (
                    <div
                      key={view}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-cyan-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-[#ff0055]/20 text-[#ff0055] font-mono-tech text-xs flex items-center justify-center font-bold">
                          0{idx + 1}
                        </span>
                        <span className="font-orbitron text-sm font-semibold text-white">{view}</span>
                      </div>
                      <span className="text-xs font-mono-tech text-cyan-400">Orthographic</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Qualification Notice Banner */}
            <div className="mt-4 p-4 rounded-xl bg-[#ff0055]/15 border border-[#ff0055]/40 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#ff0055] shrink-0" />
              <span className="text-xs sm:text-sm font-sans font-medium text-pink-100">
                Only selected teams will qualify for Round 2.
              </span>
            </div>
          </div>

          {/* ROUND 2 CARD */}
          <div
            onClick={() => setActiveRound(1)}
            className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
              activeRound === 1
                ? 'bg-slate-900/90 border-2 border-[#00f0ff] shadow-[0_0_40px_rgba(0,240,255,0.25)] scale-[1.01]'
                : 'bg-slate-950/60 border border-white/10 opacity-70 hover:opacity-100 hover:border-white/20'
            }`}
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono-tech text-xs font-bold tracking-wider">
                  ROUND 2
                </span>
                <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1">
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" /> CAD Workstation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-orbitron text-white mb-6">
                CAD Modeling Challenge
              </h3>

              {/* Task Requirements */}
              <div className="mb-6 p-5 rounded-2xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono-tech uppercase text-cyan-400 font-bold mb-3">
                  Task Specification:
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  The same model given in Round 1 must be recreated using any one of the following software:
                </p>
              </div>

              {/* Allowed Software Cards (strictly 3) */}
              <div className="space-y-3 mb-6">
                {[
                  { name: 'Fusion 360', color: 'border-[#ff0055]/50 bg-[#ff0055]/10 text-white' },
                  { name: 'SolidWorks', color: 'border-cyan-500/50 bg-cyan-500/10 text-white' },
                  { name: 'CATIA', color: 'border-purple-500/50 bg-purple-500/10 text-white' },
                ].map((sw) => (
                  <div
                    key={sw.name}
                    className={`flex items-center justify-between p-3.5 rounded-xl border ${sw.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-orbitron text-base font-bold">{sw.name}</span>
                    </div>
                    <span className="text-[11px] font-mono-tech uppercase px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/10">
                      Approved CAD
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusive Notice Banner */}
            <div className="mt-4 p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/40 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-xs sm:text-sm font-sans font-medium text-cyan-100">
                No other software should be displayed.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
