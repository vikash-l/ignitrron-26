import React, { useState } from 'react';
import { Search, HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { RESEARCH_CATEGORIES } from '../data/eventData';

export const ResearchSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(RESEARCH_CATEGORIES[0].id);

  const selectedCat = RESEARCH_CATEGORIES.find((c) => c.id === activeCategory) || RESEARCH_CATEGORIES[0];

  return (
    <section className="py-24 bg-[#0a0d16] relative border-t border-[#1e2538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-mono mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>RESEARCH METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            INVESTIGATE THE <span className="text-[#06b6d4]">STRUCTURE</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic">
            "7 Core Dimensions Every Team Must Uncover & Present"
          </p>
        </div>

        {/* 7 Category Tabs & Interactive Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left List of 7 Cards */}
          <div className="lg:col-span-5 space-y-3">
            {RESEARCH_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeCategory === cat.id
                    ? 'bg-[#121829] border-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-[#06b6d4]'
                    : 'bg-[#080b12] border-[#262c40] hover:border-gray-600'
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                    <span>{cat.title}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-sans mt-0.5">
                    {cat.subtitle}
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeCategory === cat.id ? 'text-[#06b6d4] translate-x-1' : 'text-gray-600'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Active Category Detailed Blueprint Inspector */}
          <div className="lg:col-span-7">
            <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#06b6d4]/40 hud-corner shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#262c40] pb-4">
                <span className="text-xs font-mono text-[#06b6d4] tracking-wider uppercase font-bold">
                  {selectedCat.title}
                </span>
                <span className="text-[10px] font-mono text-gray-500">
                  RESEARCH FRAMEWORK
                </span>
              </div>

              <div>
                <h3 className="text-xl font-mono font-bold text-white mb-2">
                  {selectedCat.subtitle}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {selectedCat.description}
                </p>
              </div>

              <div className="bg-[#0b0e17] rounded-xl p-5 border border-[#1e2538] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8b5cf6] font-bold">
                  <HelpCircle className="w-4 h-4 text-[#8b5cf6]" />
                  <span>KEY QUESTIONS TEAMS MUST ANSWER:</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedCat.questionsToAnswer.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
