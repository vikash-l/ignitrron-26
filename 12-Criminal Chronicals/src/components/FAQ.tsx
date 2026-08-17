import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0b0b0b] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>HELP & INFORMATION</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            CASE FILE <span className="text-[#e31b23]">FAQ</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Everything you need to know about Criminal Chronicles 2.0 participation and event details.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {EVENT_DATA.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-panel-red rounded-xl border border-red-900/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-black text-xl text-white">
                    {item.question}
                  </span>

                  <div className={`p-2 rounded-lg bg-black text-[#e31b23] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-red-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-red-900/20 text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans animate-in fade-in duration-200">
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
