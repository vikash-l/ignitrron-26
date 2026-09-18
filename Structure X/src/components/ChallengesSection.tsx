import React from 'react';
import { AlertTriangle } from 'lucide-react';

import { CHALLENGE_ITEMS } from '../data/eventData';

export const ChallengesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#ff3158]/30 text-[#ff3158] text-xs font-mono mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>REAL-WORLD ENGINEERING OBSTACLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            WHEN ENGINEERING MEETS THE <span className="text-[#ff3158]">IMPOSSIBLE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "High wind drag, soil settlement, seismic acceleration, and vertical site logistics."
          </p>
        </div>

        {/* Challenge Flow Cards (CHALLENGE -> ANALYSIS -> SOLUTION) */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {CHALLENGE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel-accent rounded-xl p-6 border border-[#1b2538] hover:border-[#00d9ff]/40 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#1b2538] pb-3">
                <span className="text-xs font-mono text-[#ff3158] font-bold">
                  {item.category}
                </span>
                <span className="text-sm font-mono font-bold text-white">
                  {item.title}
                </span>
              </div>

              {/* 3-Step Flow: CHALLENGE -> ANALYSIS -> SOLUTION */}
              <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="bg-[#07111b] p-4 rounded-lg border border-[#1b2538] space-y-1">
                  <span className="text-[10px] text-[#ff3158] font-bold block">1. CHALLENGE</span>
                  <p className="text-gray-300 font-sans">{item.problem}</p>
                </div>

                <div className="bg-[#07111b] p-4 rounded-lg border border-[#1b2538] space-y-1 relative">
                  <span className="text-[10px] text-[#7c5cff] font-bold block">2. ANALYSIS</span>
                  <p className="text-gray-300 font-sans">{item.engineeringChallenge}</p>
                </div>

                <div className="bg-[#07111b] p-4 rounded-lg border border-[#00d9ff]/30 space-y-1">
                  <span className="text-[10px] text-[#00d9ff] font-bold block">3. ENGINEERING SOLUTION</span>
                  <p className="text-gray-200 font-sans">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
