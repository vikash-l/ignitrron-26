import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { sound } from '../../utils/audio';

export const QualificationFunnel: React.FC = () => {
  const funnelStages = [
    { title: "REGISTERED TEAMS", count: "ALL TEAMS", desc: "Every registered team enters the Online Prelims assessment.", color: "from-cyan-500 to-blue-600", border: "border-cyan-400" },
    { title: "ONLINE PRELIMS", count: "ACCURACY + SCORE", desc: "Online assessment testing technical aptitude, logical reasoning & code.", color: "from-blue-600 to-indigo-600", border: "border-blue-400" },
    { title: "TOP 25 TEAMS", count: "TOP 25", desc: "Top 25 scoring teams qualify for Round 1: Puzzle & Code Challenge.", color: "from-indigo-600 to-violet-600", border: "border-violet-400", highlight: true },
    { title: "ROUND 1: PUZZLE & CODE", count: "6 CHALLENGE MODULES", desc: "Solving 6 puzzle & code modules to determine the Top 10 finalists.", color: "from-violet-600 to-fuchsia-600", border: "border-fuchsia-400" },
    { title: "TOP 10 TEAMS", count: "TOP 10", desc: "Top 10 finalist teams unlock the Final Boss Challenge.", color: "from-fuchsia-600 to-amber-500", border: "border-amber-400", highlight: true },
    { title: "FINAL BOSS CHALLENGE 👑", count: "ONE FINAL CHALLENGE", desc: "Ultimate multi-step challenge under pressure. Ranked by correctness & time.", color: "from-amber-500 to-yellow-400", border: "border-amber-300", climax: true },
    { title: "TECHNO CLASH CHAMPION", count: "1 WINNER", desc: "Fastest correct solution team crowned as Grand Champion!", color: "from-yellow-400 to-emerald-400", border: "border-emerald-400" }
  ];

  return (
    <section id="funnel" className="py-24 relative overflow-hidden bg-slate-950/95 border-t border-cyan-900/30">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Filter className="w-3.5 h-3.5" /> QUALIFICATION FUNNEL
          </div>
          <h2 className="font-mono text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            STAGE-BY-STAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400">ELIMINATION</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            Watch how teams funnel down from open Prelims to the Top 25, Top 10, and 1 Champion.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto font-mono">
          {funnelStages.map((stage, idx) => {
            const widthPercentage = Math.max(30, 100 - idx * 11);

            return (
              <div
                key={idx}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div
                  style={{ width: `${widthPercentage}%` }}
                  className={`relative p-4 sm:p-5 rounded-2xl border ${stage.border} bg-gradient-to-r ${stage.color} text-slate-950 font-black shadow-lg transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-black/30 text-white text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm text-white font-black tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="text-[10px] text-slate-200 font-normal font-sans hidden sm:block">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/40 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-400/40 shrink-0">
                    {stage.count}
                  </div>
                </div>

                {idx + 1 < funnelStages.length && (
                  <div className="my-1 text-cyan-400/60 animate-bounce">
                    <ChevronDown className="w-5 h-5" />
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
