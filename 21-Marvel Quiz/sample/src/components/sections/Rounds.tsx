import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ClipboardCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Rounds: React.FC = () => {
  if (!eventData.rounds || eventData.rounds.length === 0) return null;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="rounds" className="py-24 bg-[#020604] relative border-t border-[#063D29]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="ROUNDS & PHASES"
          subtitle="A step-by-step roadmap of the competition workflow."
          badge="TEMPORAL PHASES"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {eventData.rounds.map((round, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 sm:p-8 bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/50 transition-all duration-300">
                
                {/* Round Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#063D29] pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 rounded bg-[#063D29]/50 border border-[#00E676]/30 text-xs font-bold font-mono uppercase text-[#00E676] shadow-[0_0_8px_rgba(0,230,118,0.15)]">
                      {round.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
                      {round.title}
                    </h3>
                  </div>

                  {round.duration && (
                    <div className="inline-flex items-center text-xs font-bold text-[#C9A227] bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg px-2.5 py-1.5 w-fit">
                      <Clock className="h-3.5 w-3.5 mr-1.5 text-[#C9A227]" />
                      {round.duration}
                    </div>
                  )}
                </div>

                {/* Round Content */}
                <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                  {round.description}
                </p>

                {/* Evaluation Criteria Sub-Card */}
                {round.evaluation && (
                  <div className="p-4 rounded-xl bg-[#020604] border border-[#063D29] max-w-2xl">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-[#00E676] mb-2">
                      <ClipboardCheck className="h-4 w-4 mr-2 text-[#00E676]" />
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
