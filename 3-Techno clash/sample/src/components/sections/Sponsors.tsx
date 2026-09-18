import React from 'react';
import { Building2 } from 'lucide-react';
import { eventData } from '../../data/event';

export const Sponsors: React.FC = () => {
  if (!eventData.sponsors || eventData.sponsors.length === 0) return null;

  return (
    <section id="sponsors" className="py-20 bg-slate-950/80 border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-mono text-3xl font-black text-white tracking-tight">
            NETWORK <span className="text-cyan-400">PARTNERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {eventData.sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 text-center bg-[#080d24]/90 border border-cyan-500/30 rounded-2xl shadow-md font-mono"
            >
              <Building2 className="w-6 h-6 text-cyan-400 mb-2" />
              <h3 className="text-xs font-bold text-white mb-1 tracking-wider uppercase">
                {sponsor.name}
              </h3>
              <span className="text-[9px] text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                {sponsor.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
