import React, { useState } from 'react';
import { Boxes, CheckCircle2 } from 'lucide-react';
import { MATERIAL_ITEMS } from '../data/eventData';
import type { MaterialItem } from '../types';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIAL_ITEMS[0]);

  return (
    <section className="py-24 bg-[#07080c] relative border-t border-[#1e2538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-mono mb-4">
            <Boxes className="w-3.5 h-3.5" />
            <span>MATERIALS SCIENCE & STRUCTURAL PHYSICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            BUILT FROM <span className="text-[#06b6d4]">MATTER</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic">
            "Material selection determines compressive limits, tensile ductility, and structural lifespan."
          </p>
        </div>

        {/* Material Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {MATERIAL_ITEMS.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs transition-all border cursor-pointer ${
                selectedMaterial.id === mat.id
                  ? 'bg-[#06b6d4] text-[#070e1b] font-bold border-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'bg-[#0e111a] text-gray-300 border-[#262c40] hover:border-gray-500'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>

        {/* Selected Material Inspector Panel */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#06b6d4]/40 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-start border-b border-[#262c40] pb-4">
            <div>
              <span className="text-xs font-mono text-[#06b6d4] font-bold">
                MATERIAL SPECIFICATION
              </span>
              <h3 className="text-2xl font-mono font-bold text-white mt-1">
                {selectedMaterial.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-[#0b0e17] p-4 rounded-xl border border-[#1e2538]">
                <span className="text-xs font-mono text-gray-400 block mb-1">STRUCTURAL ROLE</span>
                <p className="text-sm text-gray-200 font-sans">{selectedMaterial.structuralRole}</p>
              </div>

              <div className="bg-[#0b0e17] p-4 rounded-xl border border-[#1e2538]">
                <span className="text-xs font-mono text-[#06b6d4] block mb-1 font-bold">ENGINEERING PURPOSE</span>
                <p className="text-sm text-gray-200 font-sans">{selectedMaterial.engineeringPurpose}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-[#0b0e17] p-4 rounded-xl border border-[#1e2538]">
                <span className="text-xs font-mono text-[#8b5cf6] block mb-2 font-bold">KEY MECHANICAL PROPERTIES</span>
                <div className="space-y-1.5 font-mono text-xs text-gray-300">
                  {selectedMaterial.keyProperties.map((prop, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span>{prop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
