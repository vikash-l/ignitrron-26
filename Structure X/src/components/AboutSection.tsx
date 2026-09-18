import React from 'react';
import { Compass, CheckCircle2, Cpu, Wrench, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const focusPoints = [
    { label: 'CONSTRUCTION PROCESS', icon: Layers },
    { label: 'CONSTRUCTION METHODS', icon: Wrench },
    { label: 'STRUCTURAL ELEMENTS', icon: Cpu },
    { label: 'MATERIALS SCIENCE', icon: CheckCircle2 },
    { label: 'ENGINEERING MACHINERY', icon: Wrench },
    { label: 'REAL-WORLD CHALLENGES', icon: Compass },
    { label: 'INNOVATIVE SOLUTIONS', icon: CheckCircle2 },
    { label: 'SITE SAFETY PRACTICES', icon: Cpu },
    { label: 'SUSTAINABILITY', icon: CheckCircle2 },
    { label: 'JUDGE DEFENSE', icon: Compass }
  ];

  return (
    <section id="about" className="py-24 bg-[#05080d] relative border-b border-[#1b2538]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>OFFICIAL EVENT CONCEPT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            EVENT <span className="text-[#00d9ff]">OVERVIEW</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "STRUCTURE X is a civil engineering-based technical competition where teams explore the construction process and engineering aspects of a famous building or structure from around the world."
          </p>
        </div>

        {/* 10 Core Focus Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {focusPoints.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#07111b] rounded-xl p-4 border border-[#1b2538] hover:border-[#00d9ff]/50 transition-all flex flex-col justify-between h-28 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 font-bold">
                    0{idx + 1}
                  </span>
                  <IconComp className="w-4 h-4 text-[#00d9ff] group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-xs font-mono font-bold text-gray-200 group-hover:text-[#00d9ff] transition-colors">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
