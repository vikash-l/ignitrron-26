import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Compass, Presentation, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Highlights: React.FC = () => {
  const getHighlightIcon = (icon: string) => {
    switch (icon) {
      case 'Layers':
        return <Layers className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Compass':
        return <Compass className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'Presentation':
        return <Presentation className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Layers className="h-5 w-5 text-blue-400" />;
    }
  };

  const row1 = eventData.highlights.slice(0, 3);
  const row2 = eventData.highlights.slice(3, 5);

  return (
    <section id="highlights" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="CORE PILLARS"
          title="EVENT HIGHLIGHTS"
          subtitle="Five foundational pillars that define the Project Presentation evaluation standard."
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
                className="tech-panel rounded-xl p-6 sm:p-7 border border-blue-900/35 hover:border-cyan-400/55 hover:bg-[#061226]/95 hover:shadow-[0_20px_40px_-12px_rgba(2,6,23,0.9),0_0_24px_rgba(6,182,212,0.18)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                {/* Top hairline highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:bg-blue-900/40 transition-colors">
                      {getHighlightIcon(item.icon)}
                    </div>
                    <span className="font-mono-tech text-[10px] text-blue-400 group-hover:text-cyan-300 uppercase tracking-widest font-semibold transition-colors">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <h3 className="text-white font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-blue-900/25 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] text-slate-500 uppercase tracking-widest">
                    {item.meta}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors" />
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
                className="tech-panel rounded-xl p-6 sm:p-7 border border-blue-900/35 hover:border-cyan-400/55 hover:bg-[#061226]/95 hover:shadow-[0_20px_40px_-12px_rgba(2,6,23,0.9),0_0_24px_rgba(6,182,212,0.18)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                {/* Top hairline highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:bg-blue-900/40 transition-colors">
                      {getHighlightIcon(item.icon)}
                    </div>
                    <span className="font-mono-tech text-[10px] text-blue-400 group-hover:text-cyan-300 uppercase tracking-widest font-semibold transition-colors">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <h3 className="text-white font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-blue-900/25 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] text-slate-500 uppercase tracking-widest">
                    {item.meta}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
