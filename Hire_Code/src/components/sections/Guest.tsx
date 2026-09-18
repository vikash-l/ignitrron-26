import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Award, ArrowUpRight, Sparkles, UserCheck } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Guest: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt for Resource Person Portrait Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="resource-person" className="py-24 relative overflow-hidden border-t border-[#00BFA6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="03"
          badge="FACILITATOR PROFILE"
          title="RESOURCE PERSON"
          subtitle="Expert leadership for The Hire Code: The Employability Edge at IGNITRRON 26."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Premium Futuristic Portrait Card with Emerald Rim Glow & Cyan Ring (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center [perspective:1000px]">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-full max-w-[390px] tech-panel rounded-2xl p-6 border border-[#00BFA6]/40 shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,191,166,0.25)] bg-gradient-to-b from-[#08131C] via-[#0B1720] to-[#05070A] group"
            >
              {/* Emerald Rim Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0.2), 0 0 35px rgba(0, 191, 166, 0.25)',
                }}
              />

              {/* Holographic Frame & Technical Measurement Marks */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#05070A] border border-[#00BFA6]/30 mb-5 shadow-inner">
                {/* Supplied Photo (Unobscured) */}
                <img
                  src={eventData.resourcePerson.image}
                  alt={eventData.resourcePerson.name}
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-105 group-hover:scale-102 transition-transform duration-500"
                />

                {/* Soft Bottom Shadow for Seamless Integration */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #05070A 0%, rgba(5, 7, 10, 0.3) 25%, transparent 60%, rgba(5, 7, 10, 0.15) 100%)',
                  }}
                />

                {/* Technical Holographic Corner Brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00BFA6]/80" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00BFA6]/80" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00BFA6]/80" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00BFA6]/80" />

                {/* Technical Measurement Coordinate Overlay */}
                <div className="absolute top-3 right-8 font-mono-tech text-[9px] text-[#22D3EE]/80 pointer-events-none">
                  REC 03.19.26
                </div>
              </div>

              {/* Portrait Card Sub-Footer */}
              <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#8997A3] pt-1">
                <span className="text-[#00BFA6] font-semibold">IGNITRRON 26</span>
                <span className="text-[#D6B86A]">{eventData.venue}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Expert Credentials & Workshop Relevance (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-center lg:text-left"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#08131C] border border-[#00BFA6]/40 text-[#22D3EE] font-mono-tech text-[11px] uppercase tracking-widest mb-3">
                  <UserCheck className="h-3.5 w-3.5 text-[#00BFA6]" />
                  <span>WORKSHOP FACILITATOR</span>
                </div>

                <h3 
                  className="text-[#E8EEF2] font-display uppercase tracking-tight leading-none mb-2"
                  style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}
                >
                  {eventData.resourcePerson.name}
                </h3>
                <div className="text-[#00BFA6] font-mono-tech text-xs sm:text-sm tracking-widest uppercase font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <span>{eventData.resourcePerson.title}</span>
                  <span className="text-[#526371]">•</span>
                  <span className="text-[#D6B86A] font-bold">{eventData.resourcePerson.organization}</span>
                </div>
              </div>

              {/* Bio Statement */}
              <div className="space-y-3 font-normal text-xs sm:text-sm text-[#8997A3] leading-relaxed">
                <p className="text-[#E8EEF2] font-medium text-sm sm:text-base">
                  {eventData.resourcePerson.bio}
                </p>
                <div className="tech-panel rounded-xl p-4 border border-[#00BFA6]/20 bg-[#08131C]/60 flex items-start gap-3">
                  <Sparkles className="h-4 w-4 text-[#D6B86A] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#8997A3] leading-relaxed">
                    {eventData.resourcePerson.relevance}
                  </p>
                </div>
              </div>

              {/* Session Specification Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                <div className="tech-panel p-2.5 rounded-xl flex items-center gap-2.5 min-w-0 border border-[#00BFA6]/25 bg-[#08131C]/90">
                  <div className="w-8 h-8 rounded-lg bg-[#05070A] border border-[#00BFA6]/40 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-[#00BFA6]" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-[9px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1">DATE</div>
                    <div className="text-xs font-mono-tech text-[#E8EEF2] font-semibold leading-none truncate" title="19 September 2026">
                      19 SEPT 2026
                    </div>
                  </div>
                </div>

                <div className="tech-panel p-2.5 rounded-xl flex items-center gap-2.5 min-w-0 border border-[#00BFA6]/25 bg-[#08131C]/90">
                  <div className="w-8 h-8 rounded-lg bg-[#05070A] border border-[#22D3EE]/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-[#22D3EE]" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-[9px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1">TIME</div>
                    <div className="text-xs font-mono-tech text-[#E8EEF2] font-semibold leading-none truncate">
                      {eventData.resourcePerson.time}
                    </div>
                  </div>
                </div>

                <div className="tech-panel p-2.5 rounded-xl flex items-center gap-2.5 min-w-0 border border-[#00BFA6]/25 bg-[#08131C]/90">
                  <div className="w-8 h-8 rounded-lg bg-[#05070A] border border-[#D6B86A]/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-[#D6B86A]" />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <div className="text-[9px] font-mono-tech text-[#526371] uppercase tracking-widest leading-none mb-1">VENUE</div>
                    <div className="text-xs font-mono-tech text-[#E8EEF2] font-semibold leading-none truncate" title={eventData.resourcePerson.venue}>
                      {eventData.resourcePerson.venue}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={eventData.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded bg-[#00BFA6] hover:bg-[#22D3EE] text-[#05070A] font-mono-tech text-xs uppercase tracking-widest font-bold shadow-md shadow-[#00BFA6]/30 transition-all cursor-pointer no-underline"
                >
                  <span>REGISTER FOR WORKSHOP</span>
                  <ArrowUpRight className="h-4 w-4 text-[#05070A]" />
                </a>

                <div className="inline-flex items-center gap-2 px-4 py-3 rounded tech-panel border border-[#00BFA6]/30 text-[#8997A3] font-mono-tech text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-[#D6B86A]" />
                  <span>EXPERIENTIAL WORKSHOP</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
