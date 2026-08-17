import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    sound.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <HelpCircle className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
            GOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">QUESTIONS?</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 font-mono">
          {eventData.faq.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#080d24]/90 border border-cyan-500/30 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-white hover:text-cyan-300 transition"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-cyan-400 font-bold">Q{idx + 1}.</span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 font-sans leading-relaxed border-t border-cyan-900/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
