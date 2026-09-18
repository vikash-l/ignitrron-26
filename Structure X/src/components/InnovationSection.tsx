import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { INNOVATION_ITEMS } from '../data/eventData';

export const InnovationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#07080c] relative border-t border-[#1e2538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-mono mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>CREATIVE CIVIL ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            ENGINEERING THE <span className="text-[#06b6d4]">UNEXPECTED</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic">
            "When conventional methods fail, structural innovation rewrites the rules."
          </p>
        </div>

        {/* 3 Innovation Comparison Flow Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {INNOVATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-xl p-6 border border-[#262c40] hover:border-[#06b6d4]/40 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center font-mono text-xs">
                {/* Challenge */}
                <div className="md:col-span-4 bg-[#0b0e17] p-4 rounded border border-[#1e2538]">
                  <span className="text-[10px] text-[#e11d48] font-bold block mb-1">SEVERE CHALLENGE</span>
                  <span className="text-gray-200 font-sans">{item.challenge}</span>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-center text-[#06b6d4]">
                  <ArrowRight className="w-5 h-5 hidden md:block" />
                </div>

                {/* Idea */}
                <div className="md:col-span-3 bg-[#0b0e17] p-4 rounded border border-[#1e2538]">
                  <span className="text-[10px] text-[#8b5cf6] font-bold block mb-1">RADICAL IDEA</span>
                  <span className="text-gray-200 font-sans">{item.idea}</span>
                </div>

                {/* Solution */}
                <div className="md:col-span-4 bg-[#0b0e17] p-4 rounded border border-[#06b6d4]/40">
                  <span className="text-[10px] text-[#06b6d4] font-bold block mb-1">ENGINEERING SOLUTION</span>
                  <span className="text-[#06b6d4] font-sans font-bold">{item.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
