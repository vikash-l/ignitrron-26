import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, AlertCircle } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const Rules: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('eligibility');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="rules" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OFFICIAL GUIDELINES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl tracking-tight text-white uppercase">
            RULES & <span className="text-[#e31b23]">GUIDELINES</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Adhere to official competition standards to maintain integrity across all investigation phases.
          </p>
        </div>

        {/* Interactive Accordion Cards */}
        <div className="space-y-4">
          {EVENT_DATA.rules.map((rule, idx) => {
            const isOpen = openId === rule.id;
            return (
              <div
                key={rule.id}
                className="glass-panel-red rounded-xl border border-red-900/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(rule.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-950 border border-red-600/40 text-[#e31b23] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-black text-xl text-white">
                        {rule.title}
                      </h3>
                      <p className="text-slate-400 text-xs font-mono mt-0.5">
                        {rule.summary}
                      </p>
                    </div>
                  </div>

                  <div className={`p-2 rounded-lg bg-black text-[#e31b23] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-red-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-red-900/20 text-sm text-slate-300 leading-relaxed font-sans animate-in fade-in duration-200">
                    <div className="p-4 rounded-lg bg-black border border-red-900/30 font-mono text-xs flex items-start gap-2 text-slate-300">
                      <AlertCircle className="w-4 h-4 text-[#e31b23] shrink-0 mt-0.5" />
                      <span>{rule.details}</span>
                    </div>
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
