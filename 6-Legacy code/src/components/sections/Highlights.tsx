import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  Bug,
  GitFork,
  GitBranch,
  Zap,
  Sparkles,
  Target,
  Award,
  Users,
  Compass,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export interface HighlightsProps {
  event: EventConfig;
}

const iconMap: Record<string, LucideIcon> = {
  FileSearch,
  Bug,
  GitFork,
  GitBranch,
  Zap,
  Sparkles,
  Target,
  Award,
  Users,
  Compass,
  ShieldCheck,
};

export const Highlights: React.FC<HighlightsProps> = ({ event }) => {
  const highlights = event.highlights;

  if (!highlights || highlights.length === 0) return null;

  const renderIcon = (name?: string) => {
    const IconComponent = (name && iconMap[name]) || Zap;
    return <IconComponent className="w-5 h-5 text-[#F04444]" />;
  };

  return (
    <section id="highlights" className="py-20 bg-[#070809]">
      <Container size="lg">
        <SectionHeader
          moduleNumber="02"
          badge="OBJECTIVES"
          title="CORE COMPETENCY MODULES"
          subtitle="Key engineering domains evaluated during the rescue protocol."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              <div className="bg-[#121418] border border-[#262A33] hover:border-[#3A404E] p-6 space-y-4 h-full flex flex-col justify-between clip-corner-sm machined-border transition-colors group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#262A33] pb-3 text-xs font-mono text-[#9CA3AA]">
                    <span className="text-[#F04444] font-bold">MODULE 0{idx + 1}</span>
                    <div className="p-1.5 bg-[#1B1E24] border border-[#2B2F38]">
                      {renderIcon(highlight.iconName)}
                    </div>
                  </div>

                  <h3 className="text-base font-industrial font-extrabold text-[#E8EAED] tracking-wider uppercase group-hover:text-[#F04444] transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="text-xs text-[#9CA3AA] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono tracking-widest text-[#626870] uppercase">
                  STATUS // ACTIVE EVALUATION
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
