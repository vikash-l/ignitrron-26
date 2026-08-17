import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const RoadToClash: React.FC = () => {
  return (
    <section id="road-to-clash" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-cyan-900/30">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" /> COMPETITION ROADMAP
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
            THE ROAD TO THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">CLASH</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            The official journey from registration to the ultimate Final Boss victory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {eventData.roadToClash.map((item, idx) => {
            const isFinalBoss = idx === 4;

            return (
              <div
                key={item.step}
                onMouseEnter={() => sound.playHover()}
                className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 font-mono ${
                  isFinalBoss
                    ? 'bg-[#0a0f2e] border-2 border-amber-400/80 shadow-[0_0_40px_rgba(255,184,0,0.3)] scale-105 z-20'
                    : 'bg-[#080d24]/90 border border-cyan-500/30 hover:border-cyan-400 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isFinalBoss 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      STEP {item.step}
                    </span>
                    {isFinalBoss && <Trophy className="w-5 h-5 text-amber-400" />}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-cyan-400 font-semibold mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-cyan-900/40 text-[10px] font-bold text-cyan-300">
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
