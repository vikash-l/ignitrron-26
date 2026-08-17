import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, CheckCircle2, MessageSquare } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layers className="h-4 w-4 text-cyan-400" />,
      title: "PROJECT SHOWCASE",
      desc: "Present your authentic build and communicate the core innovation behind your work."
    },
    {
      icon: <Cpu className="h-4 w-4 text-blue-400" />,
      title: "TECHNICAL APPROACH",
      desc: "Detail the architecture, frameworks, and engineering methodologies employed."
    },
    {
      icon: <MessageSquare className="h-4 w-4 text-cyan-400" />,
      title: "PROBLEM SOLVING",
      desc: "Articulate the problem identified and defend how your solution addresses it."
    },
    {
      icon: <CheckCircle2 className="h-4 w-4 text-blue-400" />,
      title: "PANEL EVALUATION",
      desc: "Defend your engineering decisions directly before expert judges during Q&A."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="EVENT OVERVIEW"
          title={eventData.about.title}
          subtitle="A competitive technical arena where creators defend their engineering innovations."
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
            <div className="tech-panel rounded-2xl p-8 sm:p-10 border border-blue-900/35 h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono-tech text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">
                    COMPETITION BRIEF | {eventData.festName}
                  </span>
                </div>

                <h3 className="text-white font-display text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                  BRING YOUR IDEAS TO THE STAGE
                </h3>

                <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-normal">
                  {eventData.about.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Event Metadata Stamp */}
              <div className="border-t border-blue-900/30 pt-6 mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest">FORMAT:</span>
                  <span className="text-xs font-mono-tech text-cyan-400 font-semibold">{eventData.presentationFormat}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest">TEAMS:</span>
                  <span className="text-xs font-mono-tech text-blue-400 font-semibold">{eventData.teamSize}</span>
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
                className="tech-panel rounded-xl p-5 border border-blue-900/35 hover:border-cyan-400/50 hover:bg-[#060f24]/90 flex items-start gap-4 transition-all duration-300 shadow-md group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-cyan-500/50 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-white font-mono-tech text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-blue-300 transition-colors">
                    <span className="text-cyan-400 mr-1.5">0{idx + 1}</span> {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
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
