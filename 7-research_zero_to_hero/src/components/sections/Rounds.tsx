import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ClipboardCheck, FolderSearch, Atom, Dumbbell } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  if (!eventData.rounds || eventData.rounds.length === 0) return null;

  const getRoundIcon = (iconName?: string) => {
    const iconClass = "h-5 w-5 text-emerald-500";
    switch (iconName?.toLowerCase()) {
      case 'foldersearch':
        return <FolderSearch className={iconClass} />;
      case 'atom':
        return <Atom className={iconClass} />;
      case 'dumbbell':
        return <Dumbbell className={iconClass} />;
      default:
        return <FolderSearch className={iconClass} />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 95, damping: 14 } 
    },
  };

  return (
    <section id="rounds" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="ROUNDS & PHASES"
          subtitle="A two-stage research challenge mapping the progress of your scientific proposal."
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
                className="p-6 sm:p-8 bg-slate-900/30 backdrop-blur-sm border-slate-900 hover:border-emerald-500/20 transition-all duration-300 relative overflow-hidden"
              >
                
                {/* Hulk Image (Only for final round / index 1) - Positioned Prominently ABOVE the existing content */}
                {index === 1 && (
                  <div className="w-full mb-6 rounded-xl overflow-hidden border border-emerald-550 border-emerald-900/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNV_wRdciH39qA1XnRrH5AfP-AJlrPI29ByUnCZP38YCkqKixbEmC1Rw&s=10" 
                      alt="The Hulk Climax Challenge" 
                      className="w-full h-[200px] sm:h-[260px] object-cover"
                    />
                  </div>
                )}

                {/* Round Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-900 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 rounded bg-emerald-600/10 border border-emerald-900/20 text-xs font-bold font-mono uppercase text-emerald-500">
                      {round.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
                      {round.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {round.marks && (
                      <span className="inline-flex items-center text-xs font-bold text-emerald-450 bg-emerald-950/40 border border-emerald-900/40 rounded-lg px-2.5 py-1.5">
                        {round.marks}
                      </span>
                    )}
                    {round.duration && (
                      <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-950 border border-slate-900 rounded-lg px-2.5 py-1.5 w-fit">
                        <Clock className="h-3.5 w-3.5 mr-1.5" />
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
                {round.visualTheme && (
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-900 max-w-2xl mb-6 relative overflow-hidden">
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 text-emerald-500 pointer-events-none">
                      {getRoundIcon(round.visualIcon)}
                    </div>
                    
                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                      {getRoundIcon(round.visualIcon)}
                      <span className="ml-2 font-mono">Theme visual: {round.visualTheme}</span>
                    </div>

                    {index === 0 && (
                      <div className="font-mono text-[10px] text-slate-400 space-y-1">
                        <p className="text-emerald-500">// CLUE_ANALYSIS: ENVELOPE OPENED</p>
                        <p>&gt; inspecting clues and reference markers... [OK]</p>
                        <p>&gt; problem statement deduction... [ACTIVE]</p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="font-mono text-[10px] text-green-400 space-y-1">
                        <p className="text-emerald-400">// JURY_DEFENSE: RESEARCH PROPOSAL ACTIVE</p>
                        <p>&gt; presentation &amp; innovation scoring: [READY]</p>
                        <p>&gt; jury Q&amp;A resolution factor: 100%</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Evaluation Criteria */}
                {round.evaluation && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-900/20 max-w-2xl">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-emerald-550 mb-2">
                      <ClipboardCheck className="h-4 w-4 mr-2 text-emerald-550" />
                      Evaluation Criteria
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
