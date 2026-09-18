import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Gamepad2, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Experience: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Zap':
        return <Zap className="h-6 w-6 text-[#00BFA6]" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-6 w-6 text-[#22D3EE]" />;
      case 'MessageCircle':
        return <MessageCircle className="h-6 w-6 text-[#D6B86A]" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-[#00BFA6]" />;
      default:
        return <Zap className="h-6 w-6 text-[#00BFA6]" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden border-t border-[#00BFA6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="LEARNING FLOW"
          title="WORKSHOP EXPERIENCE"
          subtitle="Four experiential learning stages structured to progressively build communication fluency and interview presence."
          align="center"
        />

        {/* Connected Progression Flowing Interface */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-12 h-0.5 pointer-events-none z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full bg-gradient-to-r from-[#00BFA6]/40 via-[#22D3EE]/50 to-[#D6B86A]/40 origin-left"
            />
          </div>

          {/* 4 Connected Progression Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {eventData.stages.map((stage, idx) => (
              <motion.div
                key={stage.index}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="tech-panel rounded-2xl p-6 border border-[#00BFA6]/25 hover:border-[#22D3EE]/60 hover:bg-[#0B1720]/95 hover:shadow-[0_20px_40px_-10px_rgba(5,7,10,0.95),0_0_25px_rgba(0,191,166,0.2)] flex flex-col justify-between transition-all duration-300 group shadow-lg relative overflow-hidden"
              >
                {/* Top hairline highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22D3EE]/0 to-transparent group-hover:via-[#22D3EE]/70 transition-all duration-500" />

                <div>
                  {/* Stage Number & Icon Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#05070A] border border-[#00BFA6]/40 flex items-center justify-center group-hover:border-[#22D3EE]/60 group-hover:bg-[#08131C] transition-colors shadow-inner">
                      {getIcon(stage.icon)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono-tech text-xs text-[#00BFA6] group-hover:text-[#22D3EE] uppercase tracking-widest font-bold transition-colors">
                        STAGE {stage.index}
                      </span>
                      {idx < eventData.stages.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-[#526371] hidden lg:inline-block ml-1" />
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono-tech text-[#D6B86A] uppercase tracking-widest font-semibold mb-1">
                    {stage.tagline}
                  </div>

                  <h3 className="text-[#E8EEF2] font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-[#22D3EE] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-[#8997A3] text-xs leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </div>

                {/* Progress Dot Marker */}
                <div className="border-t border-[#00BFA6]/15 pt-4 mt-6 flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] text-[#526371] uppercase tracking-widest">
                    PROGRESSION {stage.index}/04
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00BFA6]/40 group-hover:bg-[#22D3EE] group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

