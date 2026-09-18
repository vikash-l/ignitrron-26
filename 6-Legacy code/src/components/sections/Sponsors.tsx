import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export interface SponsorsProps {
  event: EventConfig;
}

export const Sponsors: React.FC<SponsorsProps> = ({ event }) => {
  const sponsors = event.sponsors;

  if (!sponsors || sponsors.length === 0) return null;

  return (
    <section id="sponsors" className="py-20 bg-[var(--bg-surface)]">
      <Container size="lg">
        <SectionHeader
          badge="PARTNERS"
          title="SPONSORS & PARTNERS"
          subtitle="Organizations supporting this event initiative."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Card hoverEffect={true} className="p-6 text-center h-40 flex flex-col items-center justify-center space-y-2 border-[var(--border-color)]">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-[var(--accent-primary-light)] text-[var(--badge-text)] flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-bold text-[var(--text-main)]">
                      {sponsor.name}
                    </div>
                    {sponsor.tier && (
                      <div className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                        {sponsor.tier}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
