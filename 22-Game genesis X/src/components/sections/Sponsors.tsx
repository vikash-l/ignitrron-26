import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ExternalLink } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface SponsorsProps {
  event: EventConfig;
}

export const Sponsors: React.FC<SponsorsProps> = ({ event }) => {
  if (!event.sponsors || event.sponsors.length === 0) return null;

  return (
    <section id="sponsors" className="py-24 bg-[#06080e] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="STUDIO PARTNERS"
          badgeIcon={<Building2 className="w-3.5 h-3.5" />}
          title="SPONSORS & ECOSYSTEM PARTNERS"
          subtitle="Backed by leading game dev engines, hardware makers, and indie incubators."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {event.sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card
                variant="glass"
                className="h-full p-6 text-center border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between items-center group"
              >
                {/* Logo Image or Fallback Header */}
                <div className="w-full h-24 mb-4 rounded-lg bg-slate-900/90 border border-slate-800 p-4 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="font-display font-bold text-slate-300 text-lg">
                      {sponsor.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {sponsor.category && (
                    <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">
                      {sponsor.category}
                    </span>
                  )}
                  <h4 className="font-display font-semibold text-white text-base">
                    {sponsor.name}
                  </h4>
                </div>

                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
