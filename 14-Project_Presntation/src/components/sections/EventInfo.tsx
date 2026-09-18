import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Layers, Timer, CheckCircle, ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const EventInfo: React.FC = () => {
  const specs = [
    {
      icon: <Calendar className="h-5 w-5 text-cyan-400" />,
      label: "DATE",
      value: eventData.date,
      subValue: eventData.dateShort,
      highlight: true,
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-400" />,
      label: "TIME",
      value: eventData.time,
      subValue: "Full-day presentation schedule",
      highlight: false,
    },
    {
      icon: <MapPin className="h-5 w-5 text-cyan-400" />,
      label: "VENUE",
      value: eventData.venue,
      subValue: "KPRIET Campus, Coimbatore",
      highlight: false,
    },
    {
      icon: <Users className="h-5 w-5 text-blue-400" />,
      label: "TEAM SIZE",
      value: eventData.teamSize,
      subValue: "Multidisciplinary teams allowed",
      highlight: false,
    },
    {
      icon: <Layers className="h-5 w-5 text-cyan-400" />,
      label: "DOMAINS",
      value: "5 OFFICIAL CATEGORIES",
      subValue: "Software / Circuits / Hardware / Bio / Business",
      highlight: false,
    },
    {
      icon: <Timer className="h-5 w-5 text-blue-400" />,
      label: "PRESENTATION FORMAT",
      value: "8 MINUTES / TEAM",
      subValue: "5 Min Presentation + 3 Min Q&A",
      highlight: true,
    },
  ];

  return (
    <section id="eventInfo" className="py-24 relative overflow-hidden border-t border-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="SPECIFICATION MATRIX"
          title="EVENT SPECIFICATIONS"
          subtitle="Official parameters and requirements for participating in Project Presentation."
          align="center"
        />

        {/* Technical Specification Matrix with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`tech-panel rounded-xl p-6 border flex flex-col justify-between transition-all duration-300 shadow-md ${
                spec.highlight 
                  ? 'border-blue-600/50 bg-[#060e24]/95 hover:border-cyan-400/60' 
                  : 'border-blue-900/35 hover:border-blue-600/50 hover:bg-[#060f24]/85'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-800/40 flex items-center justify-center">
                    {spec.icon}
                  </div>
                  <span className="font-mono-tech text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                    SPEC 0{idx + 1}
                  </span>
                </div>

                <div className="text-[10px] font-mono-tech text-blue-400 uppercase tracking-widest mb-1">
                  {spec.label}
                </div>
                <div className="text-white font-mono-tech text-base font-bold uppercase tracking-wide mb-2">
                  {spec.value}
                </div>
              </div>

              <div className="border-t border-blue-900/25 pt-3 mt-4">
                <span className="text-xs text-slate-400 font-normal">
                  {spec.subValue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Registration Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 tech-panel rounded-xl p-5 sm:p-6 border border-blue-800/40 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-full bg-cyan-950/60 border border-cyan-700/50 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-mono-tech text-xs uppercase tracking-wider font-bold">
                REGISTRATION PORTAL IS ACTIVE
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                Register your team under your designated domain category.
              </div>
            </div>
          </div>

          <a
            href={eventData.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all cursor-pointer flex-shrink-0 no-underline"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
