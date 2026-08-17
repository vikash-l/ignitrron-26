import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface RulesProps {
  event: EventConfig;
}

export const Rules: React.FC<RulesProps> = ({ event }) => {
  const rules = event.rules;

  if (!rules || rules.length === 0) return null;

  return (
    <section id="rules" className="py-20 bg-[#0D0F11]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="05"
          badge="RULES"
          title="RULES & REGULATIONS"
          subtitle="Mandatory operational protocols and competition guidelines."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
            >
              <div className="bg-[#121418] border border-[#262A33] hover:border-[#3A404E] p-5 clip-corner-sm h-full flex items-start gap-4 transition-colors">
                <div className="w-8 h-8 bg-red-950/30 border border-red-900/50 text-[#F04444] flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E8EAED] uppercase tracking-wider">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#F04444] inline shrink-0" />
                    <span>RULE PROTOCOL #{idx + 1}</span>
                  </div>
                  <p className="text-xs text-[#9CA3AA] leading-relaxed font-sans">
                    {rule}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
