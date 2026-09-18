import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, MessageSquareText, Video, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Session: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="h-5 w-5 text-[#00BFA6]" />;
      case 'Users':
        return <Users className="h-5 w-5 text-[#22D3EE]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="h-5 w-5 text-[#D6B86A]" />;
      case 'Video':
        return <Video className="h-5 w-5 text-[#22D3EE]" />;
      default:
        return <UserCheck className="h-5 w-5 text-[#00BFA6]" />;
    }
  };

  return (
    <section id="workshop" className="py-24 relative overflow-hidden border-t border-[#00BFA6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="02"
          badge="WORKSHOP BRIEF"
          title="THE EMPLOYABILITY EDGE"
          subtitle="COMMUNICATE, CONNECT, CONVINCE & GET HIRED — An interactive session focused on practical communication and employability skills through activity-based learning."
          align="center"
        />

        {/* 4 Major Content Modules in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {eventData.modules.map((module, idx) => (
            <motion.div
              key={module.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="tech-panel rounded-2xl p-7 sm:p-8 border border-[#00BFA6]/25 hover:border-[#22D3EE]/60 hover:bg-[#0B1720]/95 hover:shadow-[0_20px_45px_-10px_rgba(5,7,10,0.95),0_0_25px_rgba(0,191,166,0.15)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
            >
              {/* Subtle top gradient hairline */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00BFA6]/0 to-transparent group-hover:via-[#22D3EE]/70 transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#05070A] border border-[#00BFA6]/40 flex items-center justify-center group-hover:border-[#22D3EE]/60 group-hover:bg-[#08131C] transition-colors shadow-inner">
                    {getIcon(module.icon)}
                  </div>
                  <span className="font-mono-tech text-xs text-[#00BFA6] group-hover:text-[#22D3EE] uppercase tracking-widest font-bold transition-colors">
                    MODULE {module.index}
                  </span>
                </div>

                <div className="text-[10px] font-mono-tech text-[#D6B86A] uppercase tracking-widest font-semibold mb-1">
                  {module.subtitle}
                </div>

                <h3 className="text-[#E8EEF2] font-display text-2xl sm:text-3xl uppercase tracking-wide mb-3 group-hover:text-[#22D3EE] transition-colors">
                  {module.title}
                </h3>

                <p className="text-[#8997A3] text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  {module.description}
                </p>
              </div>

              {/* Module Focus Points */}
              <div className="border-t border-[#00BFA6]/15 pt-5 mt-auto space-y-2">
                {module.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs font-mono-tech text-[#E8EEF2]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00BFA6] flex-shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Format Summary Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 max-w-6xl mx-auto tech-panel rounded-xl p-5 border border-[#00BFA6]/20 bg-[#08131C]/60 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest">PEDAGOGY:</span>
            <span className="text-xs font-mono-tech text-[#00BFA6] font-semibold">EXPERIENTIAL & ACTIVITY-BASED LEARNING</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest">DURATION:</span>
            <span className="text-xs font-mono-tech text-[#22D3EE] font-semibold">{eventData.duration} (10:00 AM – 1:00 PM)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono-tech text-[#526371] uppercase tracking-widest">VENUE:</span>
            <span className="text-xs font-mono-tech text-[#D6B86A] font-semibold">{eventData.venue}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

