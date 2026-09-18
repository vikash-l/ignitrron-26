import React, { useState } from 'react';
import { Globe2, ExternalLink, ShieldAlert, BookOpen } from 'lucide-react';

import { WORLD_STRUCTURES } from '../data/eventData';
import type { StructureItem } from '../types';

export const WorldOfStructures: React.FC = () => {
  const [selectedStructure, setSelectedStructure] = useState<StructureItem | null>(WORLD_STRUCTURES[0]);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'CORE & CANTILEVER', 'MASONRY', 'STEEL', 'HIGH-RISE', 'TWIN TOWER'];

  const filteredStructures = WORLD_STRUCTURES.filter((s) => {
    if (filterCategory === 'ALL') return true;
    return s.category.toUpperCase().includes(filterCategory);
  });

  return (
    <section id="world-of-structures" className="py-24 bg-[#05080d] relative border-b border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>BENCHMARK LANDMARK EXAMPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            ICONIC <span className="text-[#00d9ff]">STRUCTURES</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "These are benchmark examples of structures that can be analyzed. Participants may choose any iconic landmark worldwide."
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border cursor-pointer h-9 ${
                filterCategory === cat
                  ? 'bg-[#00d9ff] text-[#05080d] font-bold border-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                  : 'bg-[#07111b] text-gray-400 border-[#1b2538] hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStructures.map((struct, idx) => (
            <div
              key={struct.id}
              onClick={() => setSelectedStructure(struct)}
              className={`glass-panel rounded-xl overflow-hidden border transition-all cursor-pointer group relative ${
                selectedStructure?.id === struct.id
                  ? 'border-[#00d9ff] shadow-[0_0_25px_rgba(0,217,255,0.3)]'
                  : 'border-[#1b2538] hover:border-[#00d9ff]/50'
              }`}
            >
              {/* Image Box (Controlled Dark Exposure) */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#05080d]">
                <img
                  src={struct.image}
                  alt={struct.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 brightness-75 contrast-110 saturate-90"
                />
                <div className="absolute inset-0 bg-blueprint-grid opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none" />

                <div className="absolute top-3 left-3 bg-[#05080d]/90 border border-[#00d9ff]/40 px-2.5 py-1 rounded text-[10px] font-mono text-[#00d9ff] font-bold">
                  {struct.id === 'avengers-tower' ? '01 — NEW YORK, USA • MARVEL UNIVERSE' : `0${idx + 1} — ${struct.location}`}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-base font-mono font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                  {struct.name}
                </h3>
                <p className="text-xs font-mono text-[#7c5cff] font-semibold">
                  {struct.category}
                </p>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-sans">
                  {struct.engineeringSignificance}
                </p>

                <div className="pt-3 border-t border-[#1b2538] flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span className="text-gray-400">
                    {struct.id === 'avengers-tower' ? 'STATUS: FICTIONAL' : `HEIGHT: ${struct.blueprintSpecs.height}`}
                  </span>
                  <span className="text-[#00d9ff] group-hover:underline flex items-center gap-1 font-bold">
                    VIEW CASE STUDY <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Landmark Modal / Conceptual Case Study Board */}
        {selectedStructure && (
          <div className="mt-12 glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl animate-in fade-in">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Image Box */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-[#1b2538] relative">
                <img
                  src={selectedStructure.image}
                  alt={selectedStructure.name}
                  className="w-full h-full object-cover brightness-80 contrast-110 saturate-90"
                />
                <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
                <div className="absolute top-4 left-4 bg-[#05080d]/95 border border-[#00d9ff] px-3 py-1 rounded text-xs font-mono text-[#00d9ff] font-bold">
                  {selectedStructure.id === 'avengers-tower' ? 'FICTIONAL MARVEL HEADQUARTERS' : `CASE STUDY: ${selectedStructure.name}`}
                </div>
              </div>

              {/* Right Conceptual Details Column */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#ff3158] font-bold">
                    {selectedStructure.location}
                  </span>
                  <h3 className="text-2xl font-mono font-bold text-white mt-1">
                    {selectedStructure.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed font-sans">
                  {selectedStructure.engineeringSignificance}
                </p>

                {/* Marvel Specific Conceptual Disclaimer & Context */}
                {selectedStructure.id === 'avengers-tower' ? (
                  <div className="space-y-4">
                    {/* Engineering Note Box */}
                    <div className="bg-[#07111b] p-4 rounded-xl border border-[#ff3158]/40 space-y-1.5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-[#ff3158] font-bold">
                        <ShieldAlert className="w-4 h-4" />
                        <span>FICTIONAL / CONCEPTUAL ANALYSIS</span>
                      </div>
                      <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                        This Structure X case study treats Avengers Tower as a conceptual engineering exercise based on its fictional architectural appearance. Dimensions, structural systems, materials, and construction methods are NOT official real-world engineering specifications.
                      </p>
                    </div>

                    {/* Marvel Metadata Table */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                      <div className="bg-[#07111b] p-2.5 rounded border border-[#1b2538]">
                        <span className="text-gray-500 block text-[9px]">UNIVERSE</span>
                        <span className="text-[#00d9ff] font-bold">MARVEL</span>
                      </div>
                      <div className="bg-[#07111b] p-2.5 rounded border border-[#1b2538]">
                        <span className="text-gray-500 block text-[9px]">STRUCTURE TYPE</span>
                        <span className="text-[#7c5cff] font-bold">FICTIONAL HEADQUARTERS</span>
                      </div>
                      <div className="bg-[#07111b] p-2.5 rounded border border-[#1b2538]">
                        <span className="text-gray-500 block text-[9px]">ASSOCIATED WITH</span>
                        <span className="text-white font-bold">THE AVENGERS</span>
                      </div>
                      <div className="bg-[#07111b] p-2.5 rounded border border-[#1b2538]">
                        <span className="text-gray-500 block text-[9px]">STATUS</span>
                        <span className="text-[#ff3158] font-bold">FICTIONAL / CONCEPTUAL</span>
                      </div>
                    </div>

                    {/* Why Study Fictional Structure Box */}
                    <div className="bg-[#07111b] p-4 rounded-xl border border-[#00d9ff]/30 space-y-1.5">
                      <div className="flex items-center gap-2 text-[#00d9ff] font-mono text-xs font-bold">
                        <BookOpen className="w-4 h-4" />
                        <span>WHY STUDY A FICTIONAL STRUCTURE?</span>
                      </div>
                      <p className="text-xs text-gray-300 font-sans leading-relaxed italic">
                        "Structure X uses iconic fictional architecture as a conceptual engineering challenge. Participants can examine how such a structure could theoretically be designed, constructed, stabilized and operated using real-world engineering principles."
                      </p>
                    </div>

                    {/* Hypothetical Engineering Interpretation */}
                    <div className="bg-[#07111b] p-4 rounded-xl border border-gray-800 space-y-2">
                      <span className="text-[10px] font-mono text-[#7c5cff] font-bold uppercase tracking-wider block">
                        HYPOTHETICAL ENGINEERING INTERPRETATION
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-gray-300">
                        <span>• Structural Form & Stability</span>
                        <span>• Central Core Concept</span>
                        <span>• Cantilever Helipad Deck</span>
                        <span>• Wind-Load & Aerodynamics</span>
                        <span>• Deep Bedrock Foundation</span>
                        <span>• Facade Curtain Wall</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
                      <span className="text-gray-500 block text-[10px]">FOUNDATION SYSTEM</span>
                      <span className="text-[#00d9ff] font-bold">{selectedStructure.blueprintSpecs.foundationType}</span>
                    </div>
                    <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
                      <span className="text-gray-500 block text-[10px]">LOAD TYPE</span>
                      <span className="text-[#7c5cff] font-bold">{selectedStructure.blueprintSpecs.loadType}</span>
                    </div>
                    <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
                      <span className="text-gray-500 block text-[10px]">PRIMARY CHALLENGE</span>
                      <span className="text-[#ff3158] font-bold">{selectedStructure.primaryChallenge}</span>
                    </div>
                    <div className="bg-[#07111b] p-3 rounded border border-[#1b2538]">
                      <span className="text-gray-500 block text-[10px]">KEY FEATURE</span>
                      <span className="text-white font-bold">{selectedStructure.blueprintSpecs.keyFeature}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
