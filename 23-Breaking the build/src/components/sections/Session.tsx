import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, MessageSquare, Layers } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Session: React.FC = () => {
  const pillars = [
    {
      icon: <Sparkles className="h-4 w-4 text-[#F97316]" />,
      title: "CREATIVITY",
      desc: "Explore and communicate your creative ideas in game design and worldbuilding."
    },
    {
      icon: <Cpu className="h-4 w-4 text-[#EF4444]" />,
      title: "TECHNICAL VISION",
      desc: "Showcase the technical thinking and architectural logic behind your builds."
    },
    {
      icon: <MessageSquare className="h-4 w-4 text-[#F59E0B]" />,
      title: "INTERACTION",
      desc: "Engage in open, professional dialogue during a focused interaction session."
    },
    {
      icon: <Layers className="h-4 w-4 text-[#EF4444]" />,
      title: "CONSTRUCTIVE FEEDBACK",
      desc: "Gain valuable feedback and actionable industry perspective from a practicing game developer."
    }
  ];

  return (
    <section id="session" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="SESSION BRIEF"
          title={eventData.session.title}
          subtitle="An interactive game development session where students showcase creativity and technical vision."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Context & Overview Narrative (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="tech-panel rounded-2xl p-8 sm:p-10 border border-[#7F1D1D]/35 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
                  <span className="font-mono-tech text-[10px] text-[#F97316] uppercase tracking-widest font-semibold">
                    SESSION OVERVIEW | {eventData.festName}
                  </span>
                </div>

                <h3 className="text-[#F5F1ED] font-display text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                  {eventData.session.heading}
                </h3>

                <div className="space-y-4 text-[#A8A09A] text-sm leading-relaxed font-normal">
                  {eventData.session.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Event Metadata Stamp */}
              <div className="border-t border-[#7F1D1D]/30 pt-6 mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#6E6762] uppercase tracking-widest">FORMAT:</span>
                  <span className="text-xs font-mono-tech text-[#F97316] font-semibold">{eventData.eventType}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#6E6762] uppercase tracking-widest">PARTICIPATION:</span>
                  <span className="text-xs font-mono-tech text-[#EF4444] font-semibold">{eventData.participation}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Areas & Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.12 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="tech-panel rounded-xl p-5 border border-[#7F1D1D]/35 hover:border-[#F97316]/50 hover:bg-[#24100D]/90 flex items-start gap-4 transition-all duration-300 shadow-md group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#120A08] border border-[#7F1D1D]/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#F97316]/60 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-[#F97316] transition-colors">
                    <span className="text-[#EF4444] mr-1.5">0{idx + 1}</span> {pillar.title}
                  </h4>
                  <p className="text-[#A8A09A] text-xs leading-relaxed font-normal">
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
