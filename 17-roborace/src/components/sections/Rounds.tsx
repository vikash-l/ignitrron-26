import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ClipboardCheck, Zap, Flame } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  if (!eventData.rounds || eventData.rounds.length === 0) return null;

  const getRoundIcon = (iconName?: string) => {
    const iconClass = "h-5 w-5 text-sky-400";
    switch (iconName?.toLowerCase()) {
      case 'zap':
        return <Zap className={iconClass} />;
      case 'flame':
        return <Flame className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 120, damping: 15 } 
    },
  };

  return (
    <section id="rounds" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="CHAMPIONSHIP ROUNDS"
          subtitle="Two stages of cumulative timing to test speed, stability, and extreme tactical precision."
          badge="STRUCTURE"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {eventData.rounds.map((round, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                hoverEffect={true}
                glowColor="chrome"
                className="p-6 sm:p-8 bg-zinc-900/30 backdrop-blur-md border-zinc-800/80 hover:border-slate-400/30 transition-all duration-150 relative overflow-hidden"
              >
                
                {/* Round Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-zinc-850 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 rounded-sm bg-sky-950/40 border border-sky-900/40 text-xs font-bold font-mono uppercase text-sky-400">
                      {round.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight font-display uppercase">
                      {round.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-xs font-bold text-sky-450 bg-sky-950/20 border border-sky-900/35 rounded px-2.5 py-1 font-mono">
                      CUMULATIVE SCORING
                    </span>
                    {round.duration && (
                      <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-transparent border border-zinc-850 rounded px-2.5 py-1 w-fit font-mono">
                        <Clock className="h-3.5 w-3.5 mr-1.5 text-sky-400" />
                        {round.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Round Content Description */}
                <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed font-normal">
                  {round.description}
                </p>

                {/* Theme Visual Block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 p-5 rounded border border-zinc-800 bg-transparent/80 relative overflow-hidden">
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.03] text-sky-400 pointer-events-none scale-[3]">
                      {getRoundIcon(round.visualIcon)}
                    </div>
                    
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-550 mb-3 font-mono">
                      {getRoundIcon(round.visualIcon)}
                      <span className="ml-2">TELEMETRY PREVIEW</span>
                    </div>

                    {index === 0 && (
                      <div className="font-mono text-[10px] text-slate-400 space-y-1.5">
                        <p className="text-sky-400 font-bold">// R1: STRAIGHT LINE SPEED</p>
                        <p>&gt; engine speed: 100% ... [STABLE]</p>
                        <p>&gt; steering offset: 0.05% ... [OK]</p>
                        <p>&gt; obstacle hazard factor: 15% (minimal)</p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="font-mono text-[10px] text-slate-400 space-y-1.5">
                        <p className="text-amber-500 font-bold">// R2: TACTICAL MAZE WARNING</p>
                        <p>&gt; terrain: mud + gravel grids ... [SLIP DETECTED]</p>
                        <p>&gt; steering correction: 42% ... [STRESS]</p>
                        <p>&gt; obstacle hazards: 17 hazards loaded [HIGH]</p>
                      </div>
                    )}
                  </div>

                  {/* SVG Schematic graphics */}
                  <div className="md:col-span-6 flex justify-center">
                    <div className="w-full h-32 border border-zinc-850 rounded bg-zinc-900/10 flex items-center justify-center p-3 relative overflow-hidden">
                      {index === 0 ? (
                        /* Straight Track Acceleration Animation */
                        <svg className="w-full h-full" viewBox="0 0 200 80">
                          {/* Speed Lines */}
                          <line x1="10" y1="20" x2="190" y2="20" stroke="#1d1e22" strokeWidth="4" />
                          <line x1="10" y1="60" x2="190" y2="60" stroke="#1d1e22" strokeWidth="4" />
                          
                          <line x1="10" y1="40" x2="190" y2="40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 8" />
                          
                          {/* Speed blur streaks */}
                          <line x1="30" y1="30" x2="70" y2="30" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                          <line x1="90" y1="50" x2="150" y2="50" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
                          
                          {/* Accelerated RC Car */}
                          <g transform="translate(130, 40) scale(0.7)">
                            <rect x="-18" y="-10" width="36" height="20" rx="3" fill="#ffffff" stroke="#38bdf8" strokeWidth="1" />
                            <rect x="-8" y="-12" width="16" height="2" fill="#000000" />
                            <rect x="-8" y="10" width="16" height="2" fill="#000000" />
                          </g>
                          
                          <text x="15" y="72" fill="#64748b" fontSize="8" fontFamily="monospace">ACCEL RATE: MAX</text>
                        </svg>
                      ) : (
                        /* Curved Maze Track with Hazards Animation */
                        <svg className="w-full h-full" viewBox="0 0 200 80">
                          {/* Curvy circuit path */}
                          <path d="M 20 40 Q 60 10 100 40 T 180 40" fill="none" stroke="#2d2f36" strokeWidth="6" />
                          <path d="M 20 40 Q 60 10 100 40 T 180 40" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                          
                          {/* Hazards circles */}
                          <circle cx="60" cy="25" r="4" fill="#ef4444" opacity="0.7" />
                          <circle cx="100" cy="40" r="4" fill="#ef4444" opacity="0.7" />
                          <circle cx="140" cy="55" r="4" fill="#ef4444" opacity="0.7" />
                          
                          {/* Hazards labels */}
                          <text x="60" y="18" fill="#ef4444" fontSize="6" fontFamily="monospace" textAnchor="middle">LOOP</text>
                          <text x="100" y="32" fill="#ef4444" fontSize="6" fontFamily="monospace" textAnchor="middle">RAMP</text>
                          <text x="140" y="48" fill="#ef4444" fontSize="6" fontFamily="monospace" textAnchor="middle">PIT</text>
                          
                          {/* Drifting Car */}
                          <g transform="translate(80, 25) rotate(-22) scale(0.6)">
                            <rect x="-15" y="-9" width="30" height="18" rx="2" fill="#ffffff" stroke="#ef4444" strokeWidth="1" />
                          </g>
                          
                          <text x="15" y="72" fill="#ef4444" fontSize="8" fontFamily="monospace">HAZARD LVL: CRITICAL</text>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Evaluation Criteria */}
                {round.evaluation && (
                  <div className="mt-6 p-4 rounded bg-transparent/60 border border-sky-950 max-w-2xl">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 font-mono">
                      <ClipboardCheck className="h-4 w-4 mr-2 text-sky-400" />
                      DRIVING COMPETENCY
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      {round.evaluation}
                    </p>
                  </div>
                )}

              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
