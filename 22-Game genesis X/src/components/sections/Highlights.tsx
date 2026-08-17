import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gamepad2, Scroll, Target, Cpu } from 'lucide-react';
import { EventConfig } from '../../types/event';

interface HighlightsProps {
  event: EventConfig;
}

export const Highlights: React.FC<HighlightsProps> = ({ event }) => {
  if (!event.highlights || event.highlights.length === 0) return null;

  const cardsData = [
    { title: 'GAMEPLAY', desc: 'Core gameplay mechanics, controls, player actions, and interactive systems.', icon: Gamepad2, suit: '♠' },
    { title: 'STORY', desc: 'Narrative worldbuilding, theme, visual direction, and character concepts.', icon: Scroll, suit: '♥' },
    { title: 'AUDIENCE', desc: 'Target player demographics, platforms, market placement, and engagement appeal.', icon: Target, suit: '♦' },
    { title: 'FEASIBILITY', desc: 'Technical feasibility, engine choices, dev stack realism, and execution scope.', icon: Cpu, suit: '♣' },
  ];

  return (
    <section id="highlights" className="py-24 bg-transparent relative z-10 border-t border-[#1F0A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono text-[#E626FF] uppercase tracking-widest block mb-2 font-bold">
            PRESENTATION COMPONENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            BUILD THE IDEA
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6B1FDB] to-[#FF3BE6] mt-4 rounded-full"></div>
        </div>

        {/* 4 Clean Content Blocks (Not full casino cards, clean UI with suit icon accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#160814] p-6 rounded-lg border border-[#1F0A1C] hover:border-[#E626FF]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-[#050408] border border-[#8F26FF]/40 flex items-center justify-center text-[#E626FF] group-hover:text-[#FF3BE6] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="font-mono text-lg font-bold text-[#8F26FF]/60 group-hover:text-[#FF3BE6] transition-colors">
                      {item.suit}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2 uppercase tracking-wide group-hover:text-[#E626FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1F0A1C] flex items-center justify-between text-xs font-mono text-[#E626FF]">
                  <span>COMPONENT 0{index + 1}</span>
                  <span>{item.suit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prototype Recommendation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-[#160814] border border-[#8F26FF]/40 p-5 rounded-lg text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8F26FF]/20 text-[#FF3BE6] font-mono text-xs uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECOMMENDED</span>
          </div>
          <p className="text-base font-bold font-display text-white">
            PROTOTYPES & CONCEPT ART ARE HIGHLY RECOMMENDED
          </p>
        </motion.div>

      </div>
    </section>
  );
};
