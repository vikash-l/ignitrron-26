import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, MessageSquare, Layers, Compass } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Experience: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-[#F97316] group-hover:scale-110 transition-transform duration-300" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-[#EF4444] group-hover:scale-110 transition-transform duration-300" />;
      case 'MessageSquare':
        return <MessageSquare className="h-5 w-5 text-[#F59E0B] group-hover:scale-110 transition-transform duration-300" />;
      case 'Layers':
        return <Layers className="h-5 w-5 text-[#EF4444] group-hover:scale-110 transition-transform duration-300" />;
      case 'Compass':
        return <Compass className="h-5 w-5 text-[#F97316] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Sparkles className="h-5 w-5 text-[#F97316]" />;
    }
  };

  const row1 = eventData.experience.slice(0, 3);
  const row2 = eventData.experience.slice(3, 5);

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="SESSION PILLARS"
          title="WHAT TO EXPECT"
          subtitle="Five foundational pillars that define the Breaking the Build interaction experience."
          align="center"
        />

        {/* Intentional 3 + 2 Card Grid Composition */}
        <div className="max-w-6xl mx-auto">
          
          {/* ROW 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6">
            {row1.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="tech-panel rounded-xl p-6 sm:p-7 border border-[#7F1D1D]/35 hover:border-[#F97316]/55 hover:bg-[#24100D]/95 hover:shadow-[0_20px_40px_-12px_rgba(7,5,6,0.95),0_0_24px_rgba(180,35,24,0.2)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                {/* Top hairline highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/0 to-transparent group-hover:via-[#F97316]/60 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#120A08] border border-[#7F1D1D]/50 flex items-center justify-center group-hover:border-[#F97316]/60 group-hover:bg-[#24100D]/60 transition-colors">
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#B42318] group-hover:text-[#F97316] uppercase tracking-widest font-semibold transition-colors">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <h3 className="text-[#F5F1ED] font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#A8A09A] text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#7F1D1D]/25 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] text-[#6E6762] uppercase tracking-widest">
                    {item.meta}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] group-hover:bg-[#F97316] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROW 2: 2 Cards Centered Under the Row 1 Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {row2.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (idx + 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="tech-panel rounded-xl p-6 sm:p-7 border border-[#7F1D1D]/35 hover:border-[#F97316]/55 hover:bg-[#24100D]/95 hover:shadow-[0_20px_40px_-12px_rgba(7,5,6,0.95),0_0_24px_rgba(180,35,24,0.2)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                {/* Top hairline highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/0 to-transparent group-hover:via-[#F97316]/60 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#120A08] border border-[#7F1D1D]/50 flex items-center justify-center group-hover:border-[#F97316]/60 group-hover:bg-[#24100D]/60 transition-colors">
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-mono-tech text-[10px] text-[#B42318] group-hover:text-[#F97316] uppercase tracking-widest font-semibold transition-colors">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <h3 className="text-[#F5F1ED] font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#A8A09A] text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-[#7F1D1D]/25 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] text-[#6E6762] uppercase tracking-widest">
                    {item.meta}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] group-hover:bg-[#F97316] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
