import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Cpu, Zap, RotateCw, Scale, Timer, Eye, Radio, AlertCircle, Ban, CheckCircle } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Categories: React.FC = () => {
  const getTelemetryIcon = (category: string) => {
    switch (category) {
      case 'AIRFRAME':
        return <Maximize2 className="h-5 w-5 text-[#f2d58a]" />;
      case 'STRUCTURE':
        return <Cpu className="h-5 w-5 text-[#d6a84f]" />;
      case 'POWER SYSTEM':
        return <Zap className="h-5 w-5 text-[#e8a63a]" />;
      case 'PROPULSION':
        return <RotateCw className="h-5 w-5 text-[#f2d58a]" />;
      case 'PAYLOAD':
        return <Scale className="h-5 w-5 text-[#d6a84f]" />;
      case 'BATTERY LIFE':
        return <Timer className="h-5 w-5 text-[#e8a63a]" />;
      case 'NAVIGATION':
        return <Eye className="h-5 w-5 text-[#f2d58a]" />;
      case 'RF LINK':
        return <Radio className="h-5 w-5 text-[#d6a84f]" />;
      default:
        return <Cpu className="h-5 w-5 text-[#d6a84f]" />;
    }
  };

  return (
    <section id="specs" className="py-24 relative overflow-hidden border-t border-[#d6a84f]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="TELEMETRY MATRIX"
          title="DRONE SPECIFICATIONS"
          subtitle="Official technical parameters, dimensional envelopes, power constraints, and telemetry requirements."
          align="center"
        />

        {/* 8 Aerospace Telemetry Spec Modules in Responsive Grid (Large Numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-10">
          {eventData.specs.telemetry.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.52, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              className="tech-panel rounded-2xl p-6 sm:p-7 border border-[#d6a84f]/30 hover:border-[#d6a84f]/65 hover:bg-[#121b1e] hover:shadow-[0_16px_36px_-10px_rgba(5,6,7,0.95),0_0_24px_rgba(214,168,79,0.2)] flex flex-col justify-between transition-all duration-300 shadow-xl bg-[#0b1012]/90 relative overflow-hidden group"
            >
              {/* Subtle top hairline highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d6a84f]/0 to-transparent group-hover:via-[#d6a84f]/60 transition-all duration-500" />

              <div>
                {/* Header Category & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tech text-[10px] text-[#65757a] group-hover:text-[#d6a84f] uppercase tracking-widest font-semibold transition-colors">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#141c20] border border-[#d6a84f]/30 flex items-center justify-center group-hover:border-[#d6a84f]/60 transition-colors">
                    {getTelemetryIcon(item.category)}
                  </div>
                </div>

                {/* Large Technical Telemetry Metric Display */}
                <div className="text-white font-display text-3xl sm:text-4xl uppercase tracking-wide leading-none mb-2 group-hover:text-[#f2d58a] transition-colors">
                  {item.value}
                </div>

                {/* Label */}
                <div className="text-[#d6a84f] font-mono-tech text-xs uppercase tracking-wider font-semibold mb-3">
                  {item.label}
                </div>

                {/* Technical Description */}
                <p className="text-[#879296] text-xs leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Module Telemetry Index Footer */}
              <div className="border-t border-[#d6a84f]/20 pt-3 mt-5 flex items-center justify-between text-[9px] font-mono-tech text-[#65757a]">
                <span>SPEC MODULE</span>
                <span className="text-[#f2d58a] font-bold">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Guidelines & Prohibitions (Participant Marking & Ready-made Drones) */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* Card 1: Participant Marking */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="tech-panel rounded-2xl p-6 sm:p-7 border border-[#d6a84f]/40 bg-[#0d1416]/95 flex items-start gap-4 sm:gap-5 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#141c20] border border-[#d6a84f]/50 flex items-center justify-center text-[#f2d58a] flex-shrink-0">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-[#f3f3ef] font-mono-tech text-sm uppercase font-bold tracking-wider">
                  PARTICIPANT MARKING
                </h4>
                <span className="px-2 py-0.5 rounded bg-[#1a150a] border border-[#d6a84f]/40 text-[#f2d58a] font-mono-tech text-[9px] font-bold uppercase tracking-widest">
                  MANDATORY
                </span>
              </div>
              <p className="text-[#879296] text-xs leading-relaxed">
                Head markings must be done by the participant prior to flight inspection. Clear visual identification markers are required on every competing drone.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ready-Made Drones */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="tech-panel rounded-2xl p-6 sm:p-7 border border-[#e8a63a]/40 bg-[#0d1416]/95 flex items-start gap-4 sm:gap-5 shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1a140a] border border-[#e8a63a]/50 flex items-center justify-center text-[#e8a63a] flex-shrink-0">
              <Ban className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-[#f3f3ef] font-mono-tech text-sm uppercase font-bold tracking-wider">
                  READY-MADE DRONES
                </h4>
                <span className="px-2 py-0.5 rounded bg-[#1a140a] border border-[#e8a63a]/40 text-[#e8a63a] font-mono-tech text-[9px] font-bold uppercase tracking-widest">
                  PROHIBITED
                </span>
              </div>
              <p className="text-[#879296] text-xs leading-relaxed">
                Ready-made off-the-shelf commercial drones are not allowed. Only custom built or participant assembled rotary-wing platforms meeting official parameters may enter.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Registration CTA Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-6 tech-panel rounded-xl p-5 sm:p-6 border border-[#d6a84f]/35 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl bg-[#0b1012]/95"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-full bg-[#141c20] border border-[#d6a84f]/40 flex items-center justify-center flex-shrink-0 text-[#f2d58a]">
              <CheckCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-wider font-bold">
                TELEMETRY COMPLIANCE REQUIRED AT REGISTRATION
              </div>
              <div className="text-[#879296] text-xs mt-0.5">
                Online registration and on-spot registrations are available on Race Day.
              </div>
            </div>
          </div>

          <a
            href={eventData.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#d6a84f]/25 transition-all cursor-pointer flex-shrink-0 no-underline"
          >
            <span>REGISTER NOW ↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export const Specs = Categories;
