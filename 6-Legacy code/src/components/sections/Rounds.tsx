import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Award } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface RoundsProps {
  event: EventConfig;
}

export const Rounds: React.FC<RoundsProps> = ({ event }) => {
  const rounds = event.rounds;

  if (!rounds || rounds.length === 0) return null;

  return (
    <section id="rounds" className="py-20 bg-[#0D0F11]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="03"
          badge="RESCUE PROTOCOL"
          title="THE RESCUE PROTOCOL"
          subtitle="Sequential execution sequence for code analysis, refactoring, and feature deployment."
        />

        <div className="relative max-w-4xl mx-auto space-y-6">
          {/* Vertical Connecting Red Energy Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#C62828] via-[#F04444] to-[#C62828] hidden sm:block opacity-60" />

          {rounds.map((round, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative pl-0 sm:pl-12"
            >
              {/* Mechanical Node Marker */}
              <div className="absolute left-6 -translate-x-1/2 top-6 w-3 h-3 bg-[#F04444] border-2 border-[#0D0F11] hidden sm:block shadow-[0_0_8px_#F04444]" />

              {/* Machined Mechanical Phase Box */}
              <div className="bg-[#121418] border border-[#262A33] hover:border-[#3A404E] p-6 sm:p-7 clip-corner-sm machined-border transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#262A33] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#F04444] bg-red-950/30 px-2.5 py-1 border border-red-900/40">
                      {round.number || `PHASE 0${idx + 1}`}
                    </span>
                    <h3 className="text-lg sm:text-xl font-industrial font-extrabold text-[#E8EAED] tracking-wider uppercase">
                      {round.title}
                    </h3>
                  </div>

                  {round.duration && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#E8EAED] bg-[#1C1F26] px-3 py-1 border border-[#3A404E] w-fit">
                      <Clock className="w-3.5 h-3.5 text-[#F04444]" />
                      <span>{round.duration}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#9CA3AA] leading-relaxed">
                  {round.description}
                </p>

                {(round.scoring || (round.rules && round.rules.length > 0)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    {round.scoring && (
                      <div className="bg-[#171A21] p-3 border border-[#2B2F38] text-[#9CA3AA] space-y-1">
                        <div className="font-bold text-[#E8EAED] flex items-center gap-1.5 uppercase text-[11px]">
                          <Award className="w-3.5 h-3.5 text-[#F04444]" />
                          <span>EVALUATION FOCUS</span>
                        </div>
                        <div>{round.scoring}</div>
                      </div>
                    )}
                    {round.rules && round.rules.length > 0 && (
                      <div className="bg-[#171A21] p-3 border border-[#2B2F38] text-[#9CA3AA] space-y-1">
                        <div className="font-bold text-[#E8EAED] flex items-center gap-1.5 uppercase text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#F04444]" />
                          <span>REQUIREMENTS</span>
                        </div>
                        <div>{round.rules.join(' • ')}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
