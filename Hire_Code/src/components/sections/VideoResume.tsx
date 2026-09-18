import React from 'react';
import { motion } from 'framer-motion';
import { Play, Tv, Film, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';

export const VideoResume: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden border-t border-[#00BFA6]/15">
      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[350px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00BFA6 0%, #22D3EE 50%, transparent 75%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Distinctive Video Resume Feature Module */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="tech-panel rounded-3xl p-8 sm:p-12 border border-[#00BFA6]/40 bg-gradient-to-b from-[#0B1720]/95 via-[#08131C]/95 to-[#05070A]/98 shadow-2xl relative overflow-hidden group"
        >
          {/* Top Hairline Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22D3EE]/70 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Futuristic Video HUD Visual Frame (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-full max-w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#05070A] border border-[#00BFA6]/50 p-1 shadow-2xl">
                
                {/* Inner Screen Surface */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#08131C] to-[#05070A] flex flex-col justify-between p-5 border border-[#00BFA6]/20">
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-subtle-grid opacity-40 pointer-events-none" />

                  {/* Top HUD Telemetry */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse" />
                      <span className="font-mono-tech text-[10px] text-[#22D3EE] uppercase tracking-widest font-semibold">
                        DEMO INTERFACE
                      </span>
                    </div>
                    <span className="font-mono-tech text-[9px] text-[#8997A3] bg-[#05070A]/80 px-2 py-0.5 rounded border border-[#00BFA6]/30">
                      REC MODE
                    </span>
                  </div>

                  {/* Center Interface Graphic */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                    <div className="w-14 h-14 rounded-full bg-[#0B1720] border border-[#00BFA6]/60 flex items-center justify-center shadow-lg shadow-[#00BFA6]/20 group-hover:scale-105 transition-transform duration-300">
                      <Play className="h-6 w-6 text-[#00BFA6] ml-1 fill-[#00BFA6]/20" />
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-xs font-mono-tech text-[#E8EEF2] font-semibold tracking-wider uppercase">
                        PRACTICAL VIDEO RESUME
                      </div>
                      <div className="text-[10px] font-mono-tech text-[#D6B86A] uppercase tracking-widest mt-0.5">
                        CONCEPT & DEMONSTRATION
                      </div>
                    </div>
                  </div>

                  {/* Bottom Audio / Timeline Wave Graphic */}
                  <div className="relative z-10 flex items-center justify-between text-[9px] font-mono-tech text-[#8997A3] border-t border-[#00BFA6]/20 pt-2.5">
                    <span className="flex items-center gap-1">
                      <Film className="h-3 w-3 text-[#00BFA6]" />
                      <span>HD 1080P</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-[#00BFA6]/60 rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-[#22D3EE]/80 rounded-full animate-pulse" />
                      <span className="w-1 h-2 bg-[#00BFA6]/40 rounded-full animate-pulse" />
                      <span className="w-1 h-5 bg-[#22D3EE] rounded-full animate-pulse" />
                      <span className="w-1 h-3 bg-[#D6B86A]/70 rounded-full animate-pulse" />
                    </div>
                    <span className="text-[#22D3EE]">03:00 / 03:00</span>
                  </div>

                  {/* Corner Target Marks */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#00BFA6]" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#00BFA6]" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#00BFA6]" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#00BFA6]" />
                </div>
              </div>
            </div>

            {/* Right: Feature Description & Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08131C] border border-[#00BFA6]/40 text-[#22D3EE] font-mono-tech text-[11px] uppercase tracking-widest mb-3">
                  <Tv className="h-3.5 w-3.5 text-[#00BFA6]" />
                  <span>SPECIAL FEATURE</span>
                </div>

                <h3 className="text-[#E8EEF2] font-display text-3xl sm:text-4xl uppercase tracking-wide mb-3">
                  {eventData.videoResume.heading}
                </h3>

                {/* Highlighted Statement from Prompts */}
                <div className="p-4 rounded-xl tech-panel border border-[#00BFA6]/30 bg-[#0B1720]/80 mb-4">
                  <p className="text-[#E8EEF2] text-sm sm:text-base font-medium leading-relaxed">
                    "{eventData.videoResume.statement}"
                  </p>
                </div>

                <p className="text-[#8997A3] text-xs sm:text-sm leading-relaxed font-normal">
                  {eventData.videoResume.description}
                </p>
              </div>

              {/* 3 Core Practical Aspects */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {eventData.videoResume.aspects.map((asp, aIdx) => (
                  <div key={aIdx} className="tech-panel p-3.5 rounded-xl border border-[#00BFA6]/20 bg-[#08131C]/60 text-left">
                    <div className="flex items-center gap-1.5 text-[#00BFA6] font-mono-tech text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      <CheckCircle2 className="h-3 w-3 text-[#22D3EE] flex-shrink-0" />
                      <span>{asp.label}</span>
                    </div>
                    <p className="text-[11px] text-[#8997A3] leading-relaxed">
                      {asp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
