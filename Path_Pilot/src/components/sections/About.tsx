import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Navigation, Trophy, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const About: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Bot className="h-5 w-5 text-[#A30F18]" />;
      case 1:
        return <Navigation className="h-5 w-5 text-[#777D83]" />;
      case 2:
        return <Cpu className="h-5 w-5 text-[#A30F18]" />;
      case 3:
        return <Trophy className="h-5 w-5 text-[#777D83]" />;
      default:
        return <Bot className="h-5 w-5 text-[#A30F18]" />;
    }
  };

  return (
    <section id="overview" className="py-24 relative overflow-hidden border-t border-[#25292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="01"
          badge="EVENT OVERVIEW"
          title={eventData.overview.title}
          subtitle="Precision engineering meets autonomous control in an official IGNITRRON 26 robotics showdown."
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
            <div className="tech-panel rounded-2xl p-8 sm:p-10 border border-[#25292E] h-full flex flex-col justify-between shadow-xl bg-gradient-to-b from-[#191C20]/95 via-[#111316]/95 to-[#050505]/98">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#A30F18] animate-pulse" />
                  <span className="font-mono-tech text-[10px] text-[#A30F18] uppercase tracking-widest font-semibold">
                    ORGANIZED BY {eventData.organizer} | {eventData.festName}
                  </span>
                </div>

                <h3 className="text-[#E8E8E8] font-display text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                  PRECISION TRAJECTORY &amp; AUTONOMOUS SPEED
                </h3>

                <div className="space-y-4 text-[#9A9DA1] text-sm leading-relaxed font-normal">
                  {eventData.overview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Stylized Autonomous Path Simulation Graphic */}
              <div className="mt-8 pt-6 border-t border-[#25292E]">
                <div className="text-[10px] font-mono-tech text-[#777D83] uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>AUTONOMOUS TRAJECTORY SIMULATION</span>
                  <span className="text-[#A30F18] font-bold">SENSOR FEEDBACK ACTIVE</span>
                </div>

                <div className="w-full bg-[#050505] border border-[#25292E] rounded-xl p-4 relative overflow-hidden">
                  <svg className="w-full h-24 sm:h-28" viewBox="0 0 500 100" fill="none">
                    {/* Faint Grid Lines */}
                    <line x1="0" y1="25" x2="500" y2="25" stroke="rgba(74, 80, 86, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(74, 80, 86, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(74, 80, 86, 0.15)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Base Black Line Track Representation */}
                    <path
                      d="M 10 50 C 80 15, 130 85, 200 50 C 260 20, 310 80, 380 40 L 490 60"
                      stroke="#191C20"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />

                    {/* Active Track Glow Vector */}
                    <path
                      d="M 10 50 C 80 15, 130 85, 200 50 C 260 20, 310 80, 380 40 L 490 60"
                      stroke="#A30F18"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="animate-trajectory"
                    />

                    {/* Sensor Array Checkpoints */}
                    <circle cx="10" cy="50" r="4" fill="#4A5056" />
                    <circle cx="200" cy="50" r="4" fill="#4A5056" />
                    <circle cx="380" cy="40" r="4" fill="#4A5056" />
                    <circle cx="490" cy="60" r="4" fill="#A30F18" />

                    {/* Moving Autonomous Robot Marker */}
                    <motion.circle
                      r="6"
                      fill="#A30F18"
                      stroke="#E8E8E8"
                      strokeWidth="2"
                      animate={{
                        cx: [10, 80, 200, 310, 380, 490],
                        cy: [50, 25, 50, 70, 40, 60],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </svg>

                  <div className="flex items-center justify-between text-[9px] font-mono-tech text-[#9A9DA1] mt-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30F18]" />
                      TRACK: 2.0–2.5 CM BLACK LINE
                    </span>
                    <span className="flex items-center gap-1 text-[#E8E8E8]">
                      <CheckCircle2 className="h-3 w-3 text-[#A30F18]" />
                      CLOSED-LOOP SENSING
                    </span>
                    <span className="text-[#A30F18] font-bold">START ➔ FINISH</span>
                  </div>
                </div>
              </div>

              {/* Event Metadata Stamp */}
              <div className="border-t border-[#25292E] pt-5 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#777D83] uppercase tracking-widest">OPERATION:</span>
                  <span className="text-xs font-mono-tech text-[#E8E8E8] font-semibold">{eventData.operationMode}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono-tech text-[#777D83] uppercase tracking-widest">QUALIFICATION:</span>
                  <span className="text-xs font-mono-tech text-[#A30F18] font-semibold">ROUND 1 ➔ TOP 10 FINAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {eventData.overview.pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.12 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="tech-panel rounded-xl p-5 border border-[#25292E] hover:border-[#A30F18]/50 hover:bg-[#191C20]/90 flex items-start gap-4 transition-all duration-300 shadow-md group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#111316] border border-[#25292E] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#A30F18]/50 transition-colors">
                  {getPillarIcon(idx)}
                </div>
                <div>
                  <h4 className="text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-[#A30F18] transition-colors flex items-center gap-1.5">
                    <span className="text-[#A30F18]">0{idx + 1}</span> {pillar.title}
                  </h4>
                  <p className="text-[#9A9DA1] text-xs leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Strict Autonomous Rule Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="tech-panel rounded-xl p-4 border border-[#A30F18]/40 bg-[#191C20]/60 flex items-center gap-3 shadow-md"
            >
              <ShieldAlert className="h-5 w-5 text-[#A30F18] flex-shrink-0" />
              <p className="text-xs font-mono-tech text-[#E8E8E8]/90 leading-relaxed">
                <span className="font-bold text-[#A30F18]">NOTE:</span> Ready-made fully assembled kits &amp; remote controls are strictly prohibited.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};




