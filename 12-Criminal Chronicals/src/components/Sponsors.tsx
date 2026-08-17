import React from 'react';
import { Building2, Sparkles } from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#050505] border-b border-red-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-xs font-mono text-[#e31b23]">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMMUNITY & INDUSTRY PARTNERS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight text-white uppercase">
            SPONSORS & <span className="text-[#e31b23]">PARTNERS</span>
          </h2>
        </div>

        {/* Coming Soon Container */}
        <div className="glass-panel-red rounded-2xl p-10 border border-red-900/30 max-w-3xl mx-auto text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-950/80 border border-red-600/40 mx-auto flex items-center justify-center text-[#e31b23]">
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>

          <h3 className="font-heading font-black text-2xl text-white tracking-wide uppercase">
            PARTNER ANNOUNCEMENTS COMING SOON
          </h3>

          <p className="text-slate-400 text-xs font-mono max-w-md mx-auto leading-relaxed">
            Official sponsors and industry partners supporting Criminal Chronicles 2.0 will be announced closer to the event date.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black border border-red-900/30 border-dashed text-slate-500 font-mono text-xs flex flex-col items-center justify-center h-20"
              >
                <span>PARTNER #{i}</span>
                <span className="text-[9px] text-slate-600">RESERVED</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
