import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { JUDGE_QUESTIONS } from '../data/eventData';

export const TechnicalInteraction: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const selected = JUDGE_QUESTIONS[activeIdx];

  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#ff3158]/30 text-[#ff3158] text-xs font-mono mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>JUDGE DEFENSE Q&A</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            THEN COME THE <span className="text-[#ff3158]">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "A strong presentation explains the structure. A strong engineering team can defend it."
          </p>
        </div>

        {/* Question Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {JUDGE_QUESTIONS.map((q, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-[#07111b] border-[#ff3158] shadow-[0_0_20px_rgba(255,49,88,0.3)] ring-1 ring-[#ff3158]'
                  : 'bg-[#07111b]/60 border-[#1b2538] hover:border-gray-500'
              }`}
            >
              <span className="text-[10px] font-mono text-[#ff3158] font-bold block mb-1">
                QUESTION TYPE 0{idx + 1}
              </span>
              <h4 className="text-xs font-mono font-bold text-white line-clamp-2">
                {q.category}
              </h4>
            </div>
          ))}
        </div>

        {/* Question Simulator Card */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#ff3158]/30 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-[#1b2538] pb-3">
            <span className="text-xs font-mono text-[#ff3158] font-bold">
              JUDGE Q&A SIMULATOR • CATEGORY: {selected.category}
            </span>
          </div>

          <div className="space-y-4">
            <div className="bg-[#07111b] p-5 rounded-xl border border-[#1b2538] space-y-2">
              <span className="text-[10px] font-mono text-gray-500 block">TYPICAL JUDGE QUESTION</span>
              <h3 className="text-lg font-mono font-bold text-white">
                "{selected.question}"
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-1">
                <span className="text-[10px] font-mono text-[#7c5cff] font-bold block">WHAT JUDGES ARE EVALUATING</span>
                <p className="text-xs text-gray-300 font-sans">{selected.purpose}</p>
              </div>

              <div className="bg-[#07111b] p-4 rounded-xl border border-[#00d9ff]/30 space-y-1">
                <span className="text-[10px] font-mono text-[#00d9ff] font-bold block">ENGINEER DEFENSE STRATEGY</span>
                <p className="text-xs text-gray-200 font-sans">{selected.engineerDefenseHint}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
