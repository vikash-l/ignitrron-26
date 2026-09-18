import React, { useState } from 'react';
import { Activity, ArrowRight } from 'lucide-react';

import { FORCE_CONCEPTS } from '../data/eventData';
import type { ForceConcept } from '../types';

export const ForceVisualization: React.FC = () => {
  const [selectedForce, setSelectedForce] = useState<ForceConcept>(FORCE_CONCEPTS[0]);

  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>STRUCTURAL MECHANICS & VECTOR ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            WHAT HOLDS IT <span className="text-[#00d9ff]">TOGETHER?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "Understand how gravity, wind, tension, compression, and shear travel through a skyscraper."
          </p>
        </div>

        {/* Force Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FORCE_CONCEPTS.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedForce(f)}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs transition-all border cursor-pointer h-10 ${
                selectedForce.id === f.id
                  ? 'bg-[#00d9ff] text-[#05080d] font-bold border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.4)]'
                  : 'bg-[#07111b] text-gray-300 border-[#1b2538] hover:border-gray-500'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Force Inspector Board & Animated Vector Diagram */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-start border-b border-[#1b2538] pb-4">
            <div>
              <span className="text-xs font-mono text-[#00d9ff] font-bold">
                FORCE MECHANICS • {selectedForce.symbol}
              </span>
              <h3 className="text-2xl font-mono font-bold text-white mt-1">
                {selectedForce.name}
              </h3>
            </div>
            <div className="px-3 py-1 rounded bg-[#07111b] border border-gray-700 text-xs font-mono text-gray-300">
              VECTOR: {selectedForce.vectorDirection}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                {selectedForce.description}
              </p>

              <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-2 font-mono text-xs">
                <div>
                  <span className="text-gray-500 block text-[10px]">BEHAVIOR IN SKYSCRAPERS</span>
                  <span className="text-gray-200">{selectedForce.loadBehavior}</span>
                </div>
                <div className="pt-2 border-t border-[#1b2538]">
                  <span className="text-gray-500 block text-[10px]">STRUCTURAL APPLICATION</span>
                  <span className="text-[#00d9ff] font-bold">{selectedForce.towerExample}</span>
                </div>
              </div>
            </div>

            {/* Conceptual Animated Load Path Diagram */}
            <div className="bg-[#07111b] rounded-xl p-6 border border-[#00d9ff]/30 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden">
              <span className="text-[10px] font-mono text-[#00d9ff] font-bold uppercase tracking-wider">
                CONCEPTUAL LOAD PATH VECTOR
              </span>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-300 py-4">
                <span className="px-2.5 py-1 rounded bg-[#05080d] border border-gray-700">WIND / LOAD</span>
                <ArrowRight className="w-4 h-4 text-[#00d9ff] animate-pulse" />
                <span className="px-2.5 py-1 rounded bg-[#05080d] border border-[#00d9ff]">CORE / FRAME</span>
                <ArrowRight className="w-4 h-4 text-[#00d9ff] animate-pulse" />
                <span className="px-2.5 py-1 rounded bg-[#05080d] border border-[#7c5cff]">FOUNDATION</span>
              </div>

              <span className="text-[10px] font-mono text-gray-500 italic">
                Dynamic load distribution through central core and bedrock piles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
