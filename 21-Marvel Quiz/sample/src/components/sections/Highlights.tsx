import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';

export const Highlights: React.FC = () => {
  if (!eventData.highlights || eventData.highlights.length === 0) return null;

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-5 w-5 text-[#00E676]" />;
    }
    return <LucideIcons.HelpCircle className="h-5 w-5 text-[#00E676]" />;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="highlights" className="py-24 bg-[#020604]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="TIMELINE HIGHLIGHTS"
          subtitle="Core opportunities and takeaways from participating in this event."
          badge="GLORIOUS FEATURES"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {eventData.highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                glow={true}
                glowColor="emerald"
                hoverEffect={true}
                className="flex flex-col items-start p-6 bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/40 transition-all duration-300 h-full"
              >
                <div className="h-10 w-10 rounded-xl bg-[#063D29]/40 border border-[#00E676]/30 flex items-center justify-center mb-5 flex-shrink-0 shadow-[0_0_12px_rgba(0,230,118,0.15)]">
                  {getIcon(highlight.icon)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 tracking-wide uppercase">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
