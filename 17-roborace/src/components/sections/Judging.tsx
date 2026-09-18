import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Scale, HelpCircle, Activity } from 'lucide-react';

export const Judging: React.FC = () => {
  return (
    <section id="judging" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-racing opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-full max-w-[350px] h-[350px] rounded-full bg-slate-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="RACE. TIME. PENALTY. WIN."
          subtitle="Scoreboard calculations and tie-breaker parameters regulating the podium placements."
          badge="SCORING METHODOLOGY"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Scoring Formula Box (Leaderboard Style) */}
          <div className="md:col-span-8">
            <Card
              glow={true}
              glowColor="chrome"
              className="h-full p-6 sm:p-8 bg-zinc-900/35 border-zinc-800/80 hover:border-slate-400/30 flex flex-col justify-between"
            >
              <div>
                {/* Scoring Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-sky-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-sky-400 font-mono tracking-widest uppercase">
                      // FORMULA MATRIX
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">
                    UNIT: SECONDS (S)
                  </span>
                </div>

                {/* Scoreboard formula display */}
                <div className="py-8 px-4 rounded border border-zinc-850 bg-transparent/80 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Grid lines inside formula */}
                  <div className="absolute inset-0 bg-speed-lines opacity-5 pointer-events-none" />
                  
                  {/* Formula */}
                  <div className="font-display font-black text-xl sm:text-2xl tracking-widest text-center text-white select-none flex flex-wrap items-center justify-center gap-2">
                    <span>(</span>
                    <span className="text-sky-400 border-b border-sky-400/40 pb-0.5" title="Round 1 Drive Time">R1</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-sky-400 border-b border-sky-400/40 pb-0.5" title="Round 2 Drive Time">R2</span>
                    <span>)</span>
                    <span className="text-slate-500">+</span>
                    <span className="text-red-400 border-b border-red-500/40 pb-0.5" title="Cumulative Obstacle Penalties">PENALTIES</span>
                    <div className="w-full h-[1px] bg-zinc-800 my-2 sm:hidden" />
                    <span className="text-slate-500 sm:mx-1">/</span>
                    <span className="font-mono text-slate-200">2</span>
                  </div>

                  <div className="mt-6 font-mono text-[9px] text-slate-500 flex gap-4 uppercase">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      R1 = Round 1 Time
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      R2 = Round 2 Time
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanatory subtitle */}
              <p className="text-xs sm:text-sm text-slate-450 leading-relaxed font-normal mt-6">
                Your final score is the mathematical mean of both runs, including any accumulated penalty seconds from hitting obstacles, cutting boundaries, or manually resetting the vehicle.
              </p>
            </Card>
          </div>

          {/* Tie Breaker and Briefing Panel */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Tie-breaker Card */}
            <Card
              glow={true}
              glowColor="silver"
              className="flex-1 p-5 bg-zinc-900/35 border-zinc-800/80 hover:border-slate-400/30 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-3">
                <Scale className="h-4 w-4 text-sky-400" />
                <h4 className="text-xs font-bold text-white font-display uppercase tracking-widest">
                  TIE BREAKING
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-normal">
                In the event of a total time tie, the driver with the **least penalty points** across both rounds is crowned the winner.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-850 font-mono text-[9px] text-slate-550 uppercase">
                STATUS: TIE_CHECK_ENABLED
              </div>
            </Card>

            {/* Penalties Briefing Card */}
            <Card
              glow={true}
              glowColor="blue"
              className="flex-1 p-5 bg-zinc-900/35 border-zinc-800/80 hover:border-slate-400/30 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="h-4 w-4 text-sky-400" />
                <h4 className="text-xs font-bold text-white font-display uppercase tracking-widest">
                  RACE BRIEFING
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-normal">
                Specific penalty values (in seconds) for each obstacle contact or track reset will be disclosed during the **Event Briefing on Race Day**.
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-850 font-mono text-[9px] text-sky-450 uppercase font-black">
                DAY 1 BRIEFING: 09:45 AM
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
};
