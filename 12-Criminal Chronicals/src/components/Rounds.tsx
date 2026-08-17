import React, { useState } from 'react';
import { Camera, Lock, Search, ArrowRight, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';
import { Round1LensVisual } from './RoundVisuals/Round1LensVisual';
import { Round2CipherVisual } from './RoundVisuals/Round2CipherVisual';
import { Round3EvidenceBoard } from './RoundVisuals/Round3EvidenceBoard';

export const Rounds: React.FC = () => {
  const [activeRoundId, setActiveRoundId] = useState<string>('round-1');

  return (
    <section id="rounds" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Grid & Red Glow */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Radio className="w-3.5 h-3.5" />
            <span>INVESTIGATION PROGRESSION</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase">
            THREE ROUNDS. <span className="text-[#e31b23]">ONE CASE.</span>
          </h2>

          <p className="text-[#e31b23] font-mono text-sm sm:text-base italic">
            "Observe carefully. Think differently. Solve decisively."
          </p>
        </div>

        {/* Investigation Trail Connector Line (Desktop) */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-900 -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] -translate-y-1/2 z-0 shadow-[0_0_15px_#e31b23]" />
          
          <div className="relative z-10 flex justify-between items-center max-w-5xl mx-auto">
            {EVENT_DATA.rounds.map((round) => {
              const isActive = activeRoundId === round.id;
              return (
                <button
                  key={round.id}
                  onClick={() => setActiveRoundId(round.id)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#e31b23] text-white shadow-[0_0_20px_rgba(227,27,35,0.6)] scale-105'
                      : 'bg-black border border-red-900/40 text-slate-300 hover:border-[#e31b23] hover:text-white'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-black text-[#e31b23] text-[10px] flex items-center justify-center font-bold">
                    {round.number}
                  </span>
                  <span>{round.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rounds Cards Grid */}
        <div className="space-y-12">
          {EVENT_DATA.rounds.map((round, index) => {
            const isActive = activeRoundId === round.id;
            return (
              <div
                key={round.id}
                onMouseEnter={() => setActiveRoundId(round.id)}
                className={`glass-panel-red rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
                  isActive
                    ? 'border-[#e31b23]/70 shadow-[0_0_35px_rgba(227,27,35,0.25)] bg-[#0b0b0b]/95'
                    : 'border-red-900/30 hover:border-red-800 opacity-90'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-6 space-y-5">
                    
                    {/* Category Label */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded bg-red-950 border border-red-600/40 text-[#e31b23] text-xs font-mono font-bold">
                        {round.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">STAGE 0{index + 1} OF 03</span>
                    </div>

                    {/* Round Title */}
                    <div>
                      <h3 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
                        # {round.title}
                      </h3>
                      <p className="text-[#e31b23] font-mono text-xs italic mt-1">
                        "{round.tagline}"
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {round.description}
                    </p>

                    {/* Key Skills Tags */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono text-slate-400 block">KEY COMPETENCIES:</span>
                      <div className="flex flex-wrap gap-2">
                        {round.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded bg-black border border-red-900/30 text-[11px] font-mono text-slate-300"
                          >
                            • {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Round Objective */}
                    <div className="p-4 rounded-xl bg-black border border-red-900/30 font-mono text-xs text-slate-300">
                      <span className="text-[#e31b23] font-bold block mb-1">OBJECTIVE:</span>
                      {round.details.objective}
                    </div>

                  </div>

                  {/* Right Interactive Visual Simulation Column */}
                  <div className="lg:col-span-6 w-full h-full">
                    {round.visualType === 'lens' && <Round1LensVisual />}
                    {round.visualType === 'cipher' && <Round2CipherVisual />}
                    {round.visualType === 'evidenceBoard' && <Round3EvidenceBoard />}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
