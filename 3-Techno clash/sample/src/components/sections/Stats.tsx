import React from 'react';
import { eventData } from '../../data/event';

export const Stats: React.FC = () => {
  if (!eventData.stats || eventData.stats.length === 0) return null;

  return (
    <section id="stats" className="py-16 bg-slate-950 relative border-y border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {eventData.stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center bg-[#080d24]/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 font-mono"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold tracking-widest text-cyan-300">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-[10px] text-slate-400 mt-1 font-sans">
                  {stat.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
