import React, { useState } from 'react';
import { Layers, Sliders } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const SignatureScrollTransformation: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  const stages = [
    { id: 'photo', label: '1. ARCHITECTURAL VIEW', pos: 0 },
    { id: 'outline', label: '2. WIREFRAME', pos: 25 },
    { id: 'blueprint', label: '3. BLUEPRINT', pos: 50 },
    { id: 'grid', label: '4. STRUCTURAL COMPONENTS', pos: 75 },
    { id: 'analysis', label: '5. ENGINEERING ANALYSIS', pos: 100 },
  ];

  return (
    <section className="py-24 bg-[#05080d] relative overflow-hidden border-t border-b border-[#1b2538]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>SIGNATURE SKYSCRAPER DECONSTRUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            BEYOND THE <span className="text-[#00d9ff]">BLUEPRINT</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "We all know the landmark. Now discover how it was engineered."
          </p>
        </div>

        {/* 5 Equal Stage Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-8">
          {stages.map((st) => (
            <button
              key={st.id}
              onClick={() => setSliderPos(st.pos)}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border cursor-pointer h-10 ${
                sliderPos === st.pos
                  ? 'bg-[#00d9ff] text-[#05080d] font-bold border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.5)]'
                  : 'bg-[#07111b] text-gray-400 border-[#1b2538] hover:border-gray-500 hover:text-white'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        {/* Interactive Visual Comparison Container (Realistic Dark Blueprint Interface) */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-[#00d9ff]/30 glass-panel shadow-[0_0_50px_rgba(0,0,0,0.9)] aspect-[16/9] select-none">
          {/* Base Layer: Right Side Architectural Visualization */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={EVENT_DETAILS.blueprintImage}
              alt="Architectural View Visual"
              className="w-full h-full object-cover object-center brightness-85 contrast-115 saturate-95"
            />
            <div className="absolute top-4 right-4 bg-[#05080d]/90 px-3 py-1.5 rounded-md text-[10px] font-mono text-gray-300 border border-gray-700">
              ARCHITECTURAL VIEW
            </div>
          </div>

          {/* Top Layer: Left Side Engineering Blueprint (Clipped by slider position) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full min-w-[100%] bg-[#05080d]">
              {/* Realistic Dark Engineering Blueprint Visual (NO INVERT, Deep Shadows & Controlled Contrast) */}
              <img
                src={EVENT_DETAILS.blueprintImage}
                alt="Engineering Blueprint Technical Visualization"
                className="w-full h-full object-cover object-center brightness-70 contrast-125 saturate-110 opacity-90"
              />

              {/* Cyan Blueprint Grid Overlay */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

              {/* Vector Construction Line Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#00d9ff" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="0%" y1="65%" x2="100%" y2="65%" stroke="#00d9ff" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="40%" y1="20%" x2="40%" y2="85%" stroke="#7c5cff" strokeWidth="2" />
                <line x1="60%" y1="20%" x2="60%" y2="85%" stroke="#7c5cff" strokeWidth="2" />
                <circle cx="50%" cy="30%" r="15%" fill="none" stroke="#ff3158" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Header Badges on Blueprint View */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <div className="bg-[#00d9ff] px-3 py-1 rounded-md text-[10px] font-mono text-[#05080d] font-bold">
                  ENGINEERING BLUEPRINT
                </div>
                <div className="bg-[#07111b]/90 border border-[#00d9ff]/40 px-2 py-0.5 rounded text-[9px] font-mono text-cyan-300">
                  CONCEPTUAL MARVEL STRUCTURE
                </div>
              </div>

              {/* Updated Technical Panel (Hypothetical & Conceptual Labels) */}
              <div className="absolute bottom-6 left-6 hidden sm:block bg-[#07111b]/95 border border-[#00d9ff]/40 p-3.5 rounded-lg font-mono text-[10px] text-[#00d9ff] space-y-1 shadow-2xl">
                <div className="font-bold text-white mb-1">CONCEPTUAL STRUCTURAL MODEL</div>
                <div>STRUCTURAL CONCEPT: CENTRAL CORE + PERIMETER FRAME</div>
                <div>LATERAL SYSTEM: HYPOTHETICAL OUTRIGGER SYSTEM</div>
                <div>FOUNDATION CONCEPT: DEEP FOUNDATION — HYPOTHETICAL</div>
                <div className="text-[9px] text-[#ff3158] font-bold pt-1 border-t border-gray-800">
                  STATUS: FICTIONAL / CONCEPTUAL ANALYSIS
                </div>
              </div>
            </div>
          </div>

          {/* Smooth Cyan Center Split Divider with Soft Glow */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#00d9ff] shadow-[0_0_20px_#00d9ff] z-30 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-[#00d9ff] text-[#05080d] flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
              ↔
            </div>
          </div>

          {/* Interactive Range Input Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
          />
        </div>

        {/* Footer Instructions */}
        <div className="mt-6 flex justify-between items-center max-w-5xl mx-auto text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#00d9ff]" />
            <span>SLIDE TO DECONSTRUCT ARCHITECTURE INTO BLUEPRINT</span>
          </div>
          <div className="text-[#00d9ff] font-bold">
            {sliderPos}% DECONSTRUCTION LEVEL
          </div>
        </div>
      </div>
    </section>
  );
};
