import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface TimelineProps {
  event: EventConfig;
}

export const Timeline: React.FC<TimelineProps> = ({ event }) => {
  const timeline = event.timeline;

  if (!timeline || timeline.length === 0) return null;

  return (
    <section id="timeline" className="py-20 bg-[#070809]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="04"
          badge="TIMELINE"
          title="SYSTEM EXECUTION LOG"
          subtitle="Sequential operational schedule and deployment checkpoints."
        />

        <div className="max-w-3xl mx-auto space-y-3 font-mono">
          <div className="flex items-center justify-between p-3 bg-[#121418] border border-[#262A33] text-[10px] tracking-widest text-[#9CA3AA] uppercase">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#F04444]" />
              <span>LOG STREAM // TIMELINE_SERIES_01</span>
            </div>
            <span>LOG FORMAT: SYS_TIME</span>
          </div>

          <div className="space-y-3">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#121418] border border-[#262A33] hover:border-[#3A404E] p-5 clip-corner-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="bg-[#1B1E24] text-[#F04444] border border-[#3A404E] px-3 py-1.5 text-xs font-bold shrink-0 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E8EAED] uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AA] leading-relaxed mt-1 font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.date && (
                  <span className="text-[10px] text-[#626870] uppercase tracking-widest bg-[#0D0F11] px-2 py-1 border border-[#262A33] shrink-0">
                    {item.date}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
