import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';

export const Sponsors: React.FC = () => {
  if (!eventData.sponsors || eventData.sponsors.length === 0) return null;

  return (
    <section id="sponsors" className="py-24 bg-[#020604] border-t border-[#063D29]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="TVA SPONSORS & PARTNERS"
          subtitle="Organizations supporting this timeline initiative."
          badge="MULTIVERSAL ALLIES"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {eventData.sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex"
            >
              <Card className="flex flex-col items-center justify-center p-6 text-center bg-[#020604]/80 backdrop-blur-sm border-[#063D29] hover:border-[#00E676]/40 transition-all duration-300 h-full w-full group">
                <div className="h-10 w-10 rounded-xl bg-[#063D29]/40 border border-[#00E676]/30 flex items-center justify-center mb-5 flex-shrink-0 shadow-[0_0_10px_rgba(0,230,118,0.15)]">
                  <Building2 className="h-5 w-5 text-[#00E676]" />
                </div>
                
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 tracking-wide uppercase">
                  {sponsor.name}
                </h3>
                
                <Badge variant="emerald" className="text-[10px] tracking-wider py-0.5">
                  {sponsor.category}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
