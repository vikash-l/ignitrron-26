import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Box, Dna, Briefcase, Award } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Categories: React.FC = () => {
  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'software':
        return <Terminal className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'circuits':
        return <Cpu className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'hardware':
        return <Box className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'bio':
        return <Dna className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'business':
        return <Briefcase className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Terminal className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="categories" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="DOMAIN SPECIFICATION"
          title="05 DOMAINS. ONE ARENA."
          subtitle="Five official presentation categories spanning computational, hardware, biological, and enterprise disciplines."
          align="center"
        />

        {/* 5 Domain Rows / Cards with Staggered Scroll Entrance and Elevated Hover Interaction */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {eventData.categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.25, ease: 'easeOut' } 
              }}
              className="tech-panel rounded-xl p-5 sm:p-6 border border-blue-900/35 hover:border-cyan-400/60 hover:bg-[#061226]/95 hover:shadow-[0_16px_36px_-10px_rgba(2,6,23,0.9),0_0_24px_rgba(6,182,212,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-all duration-300 shadow-md relative overflow-hidden"
            >
              {/* Subtle top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

              {/* Left: Number + Icon + Name & Tagline */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 relative z-10">
                <span className="font-mono-tech text-xs text-blue-400 group-hover:text-cyan-300 font-bold w-6 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors">
                  {cat.number}
                </span>

                <div className="w-11 h-11 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/60 group-hover:bg-blue-900/40 transition-all duration-300">
                  {getDomainIcon(cat.id)}
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-white font-display text-2xl sm:text-3xl uppercase tracking-wide leading-none group-hover:text-blue-200 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs mt-1 font-normal">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Right: Eligible Departments Badge */}
              <div className="sm:text-right flex-shrink-0 border-t sm:border-t-0 border-blue-900/30 pt-3 sm:pt-0 relative z-10">
                <div className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1">
                  ELIGIBLE DEPARTMENTS
                </div>
                <div className="font-mono-tech text-[10px] text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded inline-block group-hover:border-cyan-500/60 transition-colors">
                  {cat.departments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Domain Recognition Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-panel border border-blue-900/40 text-slate-400 font-mono-tech text-xs">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>2 winners per category / 10 winning positions across 5 domains</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
