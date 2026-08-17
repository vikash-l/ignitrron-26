import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';
import { EventConfig, EventRuleCategory } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface RulesProps {
  event: EventConfig;
}

export const Rules: React.FC<RulesProps> = ({ event }) => {
  if (!event.rules) return null;

  // Check if rules are categorized or flat string array
  const isCategorized = Array.isArray(event.rules) && typeof event.rules[0] === 'object';

  return (
    <section id="rules" className="py-24 bg-[#06080e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="RULES & GUIDELINES"
          badgeIcon={<Shield className="w-3.5 h-3.5" />}
          title="OFFICIAL EVENT RULES"
          subtitle="Please read all competition regulations carefully before submitting your pitch."
        />

        {isCategorized ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(event.rules as EventRuleCategory[]).map((cat, idx) => (
              <motion.div
                key={cat.category || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card variant="glass" className="h-full p-6 border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                      <div className="w-7 h-7 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {cat.category}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {(event.rules as string[]).map((rule, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card variant="glass" className="p-4 flex items-start gap-4 border-slate-800">
                  <span className="w-7 h-7 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed pt-0.5">
                    {rule}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
