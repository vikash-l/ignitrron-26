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
    <section id="rounds" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="ROUNDS & PHASES"
          subtitle="A step-by-step roadmap of the competition workflow."
          badge="STRUCTURE"
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
              <Card className="p-6 sm:p-8 bg-slate-900/30 backdrop-blur-sm border-slate-900 hover:border-slate-850 transition-all duration-300">
                
                {/* Round Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-900 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 rounded bg-blue-600/10 border border-blue-900/20 text-xs font-bold font-mono uppercase text-blue-500">
                      {round.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
                      {round.title}
                    </h3>
                  </div>

                  {round.duration && (
                    <div className="inline-flex items-center text-xs font-bold text-blue-500 bg-blue-600/5 border border-blue-900/10 rounded-lg px-2.5 py-1.5 w-fit">
                      <Clock className="h-3.5 w-3.5 mr-1.5" />
                      {round.duration}
                    </div>
                  )}
                </div>

                {/* Round Content */}
                <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
                  {round.description}
                </p>

                {/* Evaluation Criteria Sub-Card */}
                {round.evaluation && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-blue-900/20 max-w-2xl">
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                      <ClipboardCheck className="h-4 w-4 mr-2" />
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
