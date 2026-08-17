import React from 'react';
import { Cpu, Zap, Scan, Radio, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';

export const Highlights: React.FC = () => {
  if (!eventData.highlights || eventData.highlights.length === 0) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Scan': return <Scan className="w-6 h-6 text-violet-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="highlights" className="py-24 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" /> CORE PILLARS
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
            LAB <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">HIGHLIGHTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventData.highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-[#080d24]/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center mb-4">
                  {getIcon(highlight.icon)}
                </div>
                <h3 className="font-mono text-base font-bold text-white mb-2 tracking-wide">
                  {highlight.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
