import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Gamepad2, ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Guest: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt for Guest Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

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
    <section id="guest" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="02"
          badge="INDUSTRY PERSPECTIVE"
          title="MEET THE GUEST"
          subtitle="Engage in direct interaction with a Game Director during Breaking the Build."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Editorial Guest Card with 3D Tilt (5 Cols) */}
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
              className="relative w-full max-w-full max-w-[370px] tech-panel rounded-2xl p-5 border border-[#7F1D1D]/50 shadow-2xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(180,35,24,0.3)] bg-gradient-to-b from-[#1C0D0B] to-[#070506] group"
            >
              {/* Crimson Rim Glow on hover */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(249, 115, 22, 0.25), 0 0 35px rgba(180, 35, 24, 0.35)',
                }}
              />

              {/* Guest Card Visual Frame & Prepared Photo */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#120A08] border border-[#7F1D1D]/40 mb-5 shadow-inner">
                {/* Photo */}
                <img
                  src={eventData.guest.image}
                  alt={eventData.guest.name}
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-105 group-hover:scale-103 transition-transform duration-500"
                />

                {/* Soft Edge Blending Gradients */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, #070506 0%, rgba(7, 5, 6, 0.5) 35%, transparent 70%, rgba(7, 5, 6, 0.15) 100%)',
                  }}
                />

                {/* Bottom Card Identity Stamp - Horizontally Center Aligned */}
                <div className="absolute bottom-4 left-3 right-3 pointer-events-none text-center">
                  <div className="text-[#F5F1ED] font-display text-2xl uppercase tracking-wider leading-none drop-shadow-md">
                    {eventData.guest.name}
                  </div>
                  <div className="text-[#F97316] font-mono-tech text-[10px] tracking-widest uppercase font-semibold mt-1">
                    {eventData.guest.title} / {eventData.guest.secondaryTitle}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#F97316]/70" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#F97316]/70" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#F97316]/70" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#F97316]/70" />
              </div>

              {/* Guest Card Footer Meta & Quick Socials */}
              <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#A8A09A] pt-1">
                <span>IGNITRRON 26</span>
                <div className="flex items-center gap-2">
                  <a
                    href={eventData.guest.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8A09A] hover:text-[#F97316] transition-colors p-1"
                    title="Instagram"
                    aria-label="Pradeep Baskaran Instagram"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href={eventData.guest.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8A09A] hover:text-[#EF4444] transition-colors p-1"
                    title="YouTube"
                    aria-label="Pradeep Baskaran YouTube"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <polygon points="10 15 15 12 10 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Guest Editorial Content (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-center lg:text-left"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#120A08] border border-[#7F1D1D]/50 text-[#F97316] font-mono-tech text-[11px] uppercase tracking-widest mb-3">
                  <Gamepad2 className="h-3.5 w-3.5 text-[#EF4444]" />
                  <span>THE GUEST</span>
                </div>

                <h3 
                  className="text-[#F5F1ED] font-display uppercase tracking-tight leading-none mb-1.5"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}
                >
                  {eventData.guest.name}
                </h3>
                <div className="text-[#F97316] font-mono-tech text-xs sm:text-sm tracking-widest uppercase font-semibold flex items-center justify-center lg:justify-start gap-2">
                  <span>{eventData.guest.title}</span>
                  <span className="text-[#6E6762]">•</span>
                  <span className="text-[#A8A09A]">{eventData.guest.secondaryTitle}</span>
                </div>
              </div>

              {/* Bio & Vision Statements */}
              <div className="space-y-3 font-normal text-xs sm:text-sm text-[#A8A09A] leading-relaxed">
                <p className="text-[#F5F1ED] font-medium text-sm sm:text-base">
                  {eventData.guest.bio}
                </p>
                <p>
                  {eventData.guest.vision}
                </p>
              </div>

              {/* Session Specification Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                <div className="tech-panel p-2.5 rounded-lg flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">DATE</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-semibold">{eventData.guest.date}</div>
                  </div>
                </div>

                <div className="tech-panel p-2.5 rounded-lg flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#EF4444] flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">TIME</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-semibold">{eventData.guest.time}</div>
                  </div>
                </div>

                <div className="tech-panel p-2.5 rounded-lg flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#F97316] flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[9px] font-mono-tech text-[#6E6762] uppercase tracking-widest">VENUE</div>
                    <div className="text-xs font-mono-tech text-[#F5F1ED] font-semibold">{eventData.guest.venue}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Links */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={eventData.registration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold shadow-md shadow-[#B42318]/30 transition-all cursor-pointer no-underline"
                >
                  <span>REGISTER FOR SESSION</span>
                  <ArrowUpRight className="h-4 w-4 text-[#F59E0B]" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={eventData.guest.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded tech-panel border border-[#7F1D1D]/40 text-[#A8A09A] hover:text-[#F97316] hover:border-[#B42318]/50 font-mono-tech text-xs uppercase tracking-wider transition-colors no-underline"
                  >
                    <svg className="h-3.5 w-3.5 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="hidden sm:inline">Instagram</span>
                  </a>
                  <a
                    href={eventData.guest.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded tech-panel border border-[#7F1D1D]/40 text-[#A8A09A] hover:text-[#EF4444] hover:border-[#B42318]/50 font-mono-tech text-xs uppercase tracking-wider transition-colors no-underline"
                  >
                    <svg className="h-3.5 w-3.5 text-[#EF4444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <polygon points="10 15 15 12 10 9" />
                    </svg>
                    <span className="hidden sm:inline">YouTube</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
