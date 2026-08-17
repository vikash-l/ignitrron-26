import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { EventConfig, EventRuleCategory } from '../../types/event';

interface RulesProps {
  event: EventConfig;
}

export const Rules: React.FC<RulesProps> = ({ event }) => {
  if (!event.rules) return null;

  const ruleCategories = event.rules as EventRuleCategory[];

  return (
    <section id="rules" className="py-24 bg-transparent relative z-10 border-t border-[#1F0A1C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-[#E626FF] uppercase tracking-widest block mb-2 font-bold">
            COMPETITION REGULATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            THE RULEBOOK
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6B1FDB] to-[#FF3BE6] mt-4 rounded-full"></div>
        </div>

        {/* Clean Vertical Numbered Rules Format */}
        <div className="space-y-6">
          {ruleCategories.map((cat, idx) => (
            <motion.div
              key={cat.category || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#160814] p-6 rounded-xl border border-[#1F0A1C] hover:border-[#8F26FF]/50 transition-all flex flex-col md:flex-row items-start gap-6"
            >
              <div className="w-10 h-10 rounded bg-[#050408] border border-[#8F26FF]/50 flex items-center justify-center font-mono font-bold text-sm text-[#FF3BE6] flex-shrink-0">
                0{idx + 1}
              </div>

              <div className="space-y-3 flex-grow">
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">
                  {cat.category}
                </h3>

                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-[#B8B0C4] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#E626FF] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
