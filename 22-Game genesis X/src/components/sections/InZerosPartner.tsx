import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2 } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface InZerosPartnerProps {
  event: EventConfig;
}

export const InZerosPartner: React.FC<InZerosPartnerProps> = ({ event }) => {
  if (!event.inZerosInfo) return null;

  const { title, name, description, website, members } = event.inZerosInfo;

  return (
    <section id="inzeros" className="py-20 bg-transparent relative z-10 border-t border-[#1A0C1C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading: COLLABORATION PARTNER / IN.COLLABORATION WITH / INZEROS */}
        <SectionHeader
          badge="COLLABORATION PARTNER"
          title={title || 'IN.COLLABORATION WITH'}
          subtitle={name || 'INZEROS'}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            variant="cyber"
            className="p-8 border-[#8F26FF]/40 bg-[#140A15] text-center space-y-6 max-w-3xl mx-auto shadow-[0_0_30px_rgba(143,38,255,0.15)]"
          >
            {/* INZEROS Icon & Title */}
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#050506] border border-[#E626FF]/60 flex items-center justify-center text-[#FF3BE6]">
              <Building2 className="w-7 h-7" />
            </div>

            {/* INZEROS Name & Existing Description Sentence */}
            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold font-display text-white tracking-wider uppercase">
                {name}
              </h3>
              <p className="text-base text-[#F8F5FC] max-w-xl mx-auto leading-relaxed font-sans">
                {description}
              </p>
            </div>

            {/* WEBSITE Subsection */}
            <div className="pt-4 border-t border-[#1A0C1C] space-y-1.5">
              <span className="text-xs font-mono text-[#E626FF] font-bold uppercase tracking-widest block">
                WEBSITE
              </span>
              <div>
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-[#E626FF] hover:text-[#FF3BE6] hover:underline transition-all tracking-wide group"
                >
                  <span>{website}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* MEMBERS Subsection (Side-by-side on desktop, stacked on mobile) */}
            <div className="pt-6 border-t border-[#1A0C1C] space-y-4">
              <span className="text-xs font-mono text-[#E626FF] font-bold uppercase tracking-widest block">
                MEMBERS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {members.map((member, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#050506] border border-[#1A0C1C] flex flex-col items-center justify-center space-y-1 shadow-sm"
                  >
                    <span className="text-base font-bold font-display text-white">
                      {member.name}
                    </span>
                    <span className="text-xs font-mono text-[#B8B0C4]">
                      {member.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </Card>
        </motion.div>

      </div>
    </section>
  );
};
