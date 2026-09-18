import React, { useState } from 'react';
import { Crosshair } from 'lucide-react';
import { AVENGERS_TOWER_CUTAWAY, EVENT_DETAILS } from '../data/eventData';
import type { TowerCutawayComponent } from '../types';

export const TowerStructuralCutaway: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<TowerCutawayComponent>(AVENGERS_TOWER_CUTAWAY[0]);

  return (
    <section id="tower-cutaway" className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Crosshair className="w-3.5 h-3.5" />
            <span>CONCEPTUAL HIGH-RISE CUTAWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            STRUCTURAL <span className="text-[#00d9ff]">ANALYSIS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "Hover or select any hotspot on the tower cutaway to inspect structural elements."
          </p>
          <p className="mt-2 text-xs font-mono text-gray-400">
            [LABEL: CONCEPTUAL EDUCATIONAL VISUALIZATION]
          </p>
        </div>

        {/* Cutaway Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Blueprint Cutaway Image with Realistic Dark Blueprint Visual */}
          <div className="lg:col-span-7 aspect-[4/3] glass-panel rounded-2xl overflow-hidden border-2 border-[#00d9ff]/30 relative shadow-2xl group select-none bg-[#05080d]">
            <img
              src={EVENT_DETAILS.blueprintImage}
              alt="Tower Structural Cutaway"
              className="w-full h-full object-cover brightness-70 contrast-125 saturate-110 opacity-90"
            />
            <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

            {/* Interactive Hotspot Buttons */}
            {AVENGERS_TOWER_CUTAWAY.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComp(comp)}
                onMouseEnter={() => setSelectedComp(comp)}
                style={{ top: `${comp.yPercent}%`, left: `${comp.xPercent}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all z-30 cursor-pointer ${
                  selectedComp.id === comp.id
                    ? 'bg-[#00d9ff] text-[#05080d] ring-4 ring-[#00d9ff]/50 scale-125 shadow-[0_0_25px_#00d9ff]'
                    : 'bg-[#ff3158]/80 text-white hover:scale-110 hover:bg-[#00d9ff]'
                }`}
                title={comp.name}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d9ff] opacity-40"></span>
                <Crosshair className="w-4 h-4" />
              </button>
            ))}

            <div className="absolute bottom-4 left-4 bg-[#07111b]/90 px-3.5 py-1.5 rounded-md text-[10px] font-mono text-[#00d9ff] border border-[#00d9ff]/30">
              ACTIVE COMPONENT: {selectedComp.name}
            </div>
          </div>

          {/* Right Inspection Detail Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#1b2538] pb-3">
                <span className="text-xs font-mono text-[#00d9ff] font-bold">
                  {selectedComp.category}
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  SYSTEM BREAKDOWN
                </span>
              </div>

              <h3 className="text-2xl font-mono font-bold text-white">
                {selectedComp.name}
              </h3>

              <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-1">
                <span className="text-[10px] font-mono text-gray-400 block">STRUCTURAL ROLE</span>
                <p className="text-xs text-gray-200 font-sans leading-relaxed">{selectedComp.structuralRole}</p>
              </div>

              <div className="bg-[#07111b] p-4 rounded-xl border border-[#00d9ff]/30 space-y-1">
                <span className="text-[10px] font-mono text-[#00d9ff] font-bold block">ENGINEERING PURPOSE</span>
                <p className="text-xs text-gray-200 font-sans leading-relaxed">{selectedComp.engineeringPurpose}</p>
              </div>

              <div className="bg-[#07111b] p-4 rounded-xl border border-[#7c5cff]/30 space-y-1">
                <span className="text-[10px] font-mono text-[#7c5cff] font-bold block">KEY CONSIDERATION</span>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">{selectedComp.keyConsideration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
