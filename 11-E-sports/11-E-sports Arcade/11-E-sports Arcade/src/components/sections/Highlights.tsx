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
      return <IconComponent className="h-5 w-5 text-blue-500" />;
    }
    return <LucideIcons.HelpCircle className="h-5 w-5 text-blue-500" />;
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
    <section id="highlights" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="EVENT HIGHLIGHTS"
          subtitle="Core opportunities and takeaways from participating in this event."
          badge="KEY FEATURES"
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
                glow={false}
                hoverEffect={true}
                className="flex flex-col items-start p-6 bg-slate-900/30 backdrop-blur-sm border-slate-900 hover:border-slate-800 transition-all duration-300 h-full"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 border border-blue-900/20 flex items-center justify-center mb-5 flex-shrink-0">
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
