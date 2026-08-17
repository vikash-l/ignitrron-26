import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface ConductProps {
  event: EventConfig;
}

export const Conduct: React.FC<ConductProps> = ({ event }) => {
  if (!event.conduct || event.conduct.length === 0) return null;

  const icons = [HeartHandshake, ShieldCheck, Award];

  return (
    <section id="conduct" className="py-20 bg-[#050408] relative border-t border-[#1F0A1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="06 // PLAY FAIR"
          title="FAIR PLAY"
          subtitle="Code of conduct standards for all participating developers and attendees."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.conduct.map((item, index) => {
            const IconComponent = icons[index % icons.length];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  variant="glass"
                  className="h-full p-6 border-[#1F0A1C] hover:border-[#E626FF]/40 bg-[#160814] flex flex-col justify-between playing-card-shape"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#050408] border border-[#8F26FF]/50 flex items-center justify-center text-[#FF3BE6] mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mb-2 uppercase">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#B8B0C4] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1F0A1C] flex items-center justify-between text-[11px] font-mono text-[#E626FF]">
                    <span>CONDUCT STANDARD</span>
                    <span>✓</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
