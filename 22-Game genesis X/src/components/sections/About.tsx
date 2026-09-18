import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { Card } from '../ui/Card';

interface AboutProps {
  event: EventConfig;
}

export const About: React.FC<AboutProps> = ({ event }) => {
  if (!event.about) return null;

  return (
    <section id="about" className="py-24 bg-transparent relative z-10 overflow-hidden">
      {/* Subtle Playing-Card Graphic at Section Edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <div className="w-64 h-96 border-2 border-[#8F26FF] rounded-2xl rotate-12 flex items-center justify-center text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-8xl font-mono text-[#E626FF]">
          ♠
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono text-[#E626FF] uppercase tracking-widest block mb-2 font-bold">
            ABOUT THE ARENA
          </span>
          <h2 className="text-3xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            THE GAME BEGINS HERE
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6B1FDB] to-[#FF3BE6] mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            {event.about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[#B8B0C4] text-base md:text-lg leading-relaxed font-sans"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Editorial Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card variant="cyber" className="h-full flex flex-col justify-between p-8 border-[#8F26FF]/40 bg-[#160814] playing-card-shape">
                
                <div className="flex justify-between items-center border-b border-[#1F0A1C] pb-4 font-mono text-xs text-[#E626FF]">
                  <span>PITCH ARENA</span>
                  <span className="text-[#FF3BE6]">IN.ZEROS × GDC</span>
                </div>

                <div className="space-y-4 my-4">
                  <h3 className="text-lg font-bold font-display text-white tracking-wide uppercase">
                    PITCH COVERAGE:
                  </h3>

                  <div className="space-y-3">
                    {[
                      'Core Gameplay Mechanics',
                      'Story / Theme & Narrative',
                      'Target Audience Definition',
                      'Technical Feasibility'
                    ].map((pillar, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded bg-[#050408] border border-[#1F0A1C]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF3BE6] flex-shrink-0" />
                        <span className="text-sm font-semibold text-[#F8F5FC]">{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1F0A1C] text-xs font-mono text-[#B8B0C4] flex items-center justify-between">
                  <span>VENUE: CS GALAXY</span>
                  <span className="text-[#FF3BE6]">18/09/2026</span>
                </div>

              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
