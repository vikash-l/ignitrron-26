import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gamepad2, Feather, Camera } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-4 w-4 text-[#C63C32]" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-4 w-4 text-[#C9A45C]" />;
      case 'Feather':
        return <Feather className="h-4 w-4 text-[#C63C32]" />;
      case 'Camera':
        return <Camera className="h-4 w-4 text-[#C9A45C]" />;
      default:
        return <Sparkles className="h-4 w-4 text-[#C63C32]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="EXPERIENCE OVERVIEW"
          title={eventData.about.title}
          subtitle="A Japanese-themed night street celebrating pop culture, interactive activities, and creative stalls."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Context & Experience Narrative (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="ronin-panel rounded-2xl p-8 sm:p-10 border border-[#C9A45C]/30 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#C63C32] animate-pulse" />
                  <span className="font-mono-tech text-[10px] text-[#C9A45C] uppercase tracking-widest font-semibold">
                    {eventData.name} | {eventData.festName}
                  </span>
                </div>

                <h3 className="text-[#F1E8D5] font-display text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                  STEP INTO THE NIGHT STREET
                </h3>

                <div className="space-y-4 text-[#F1E8D5]/80 text-sm leading-relaxed font-normal">
                  {eventData.about.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Event Experience Stamp */}
              <div className="border-t border-[#C9A45C]/20 pt-6 mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#9B9A96] uppercase tracking-widest">FORMAT:</span>
                  <span className="text-xs font-mono-tech text-[#C9A45C] font-semibold">Open Street &amp; Stalls</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#9B9A96] uppercase tracking-widest">ACTIVITIES:</span>
                  <span className="text-xs font-mono-tech text-[#C63C32] font-semibold">10 Unique Destinations</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cultural Experience Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {eventData.about.pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.12 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="ronin-panel rounded-xl p-5 border border-[#C9A45C]/25 hover:border-[#C63C32]/60 hover:bg-[#141D30] flex items-start gap-4 transition-all duration-300 shadow-md group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0E1524] border border-[#C9A45C]/35 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#C63C32]/60 transition-colors shadow-sm">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <h4 className="text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-[#C9A45C] transition-colors">
                    <span className="text-[#C63C32] mr-1.5">0{idx + 1}</span> {pillar.title}
                  </h4>
                  <p className="text-[#9B9A96] text-xs leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
