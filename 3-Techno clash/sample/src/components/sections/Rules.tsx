import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const Rules: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'GENERAL', 'CONDUCT', 'SCORING', 'EQUIPMENT'];

  const filteredRules = filter === 'ALL'
    ? eventData.rules
    : eventData.rules.filter(r => r.category === filter);

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-slate-950/90">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" /> PROTOCOLS & GUIDELINES
          </div>
          <h2 className="font-mono text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            COMPETITION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">RULES</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            Enforced by the TECHNO CLASH Neural Evaluation Jury for absolute fairness.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-2 rounded-xl border transition-all ${
                filter === cat
                  ? 'bg-violet-600 text-white border-violet-400 font-bold shadow-[0_0_20px_#7000FF]'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredRules.map(rule => (
            <div
              key={rule.id}
              className="bg-[#080d24]/90 border border-cyan-500/30 p-6 rounded-2xl shadow-lg font-mono"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                  RULE {rule.id}
                </span>
                <span className="text-[10px] text-violet-400 font-bold">{rule.category}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
