import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Cpu, Activity } from 'lucide-react';
import type { EventConfig } from '../../data/event.types';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export interface HeroProps {
  event: EventConfig;
}

export const Hero: React.FC<HeroProps> = ({ event }) => {
  const heroData = event.hero;
  const info = event.eventInfo;

  const title = heroData?.title || event.name;
  const tagline = heroData?.subtitle || event.tagline;
  const description = heroData?.description || event.description;
  const primaryText = heroData?.primaryButtonText || 'REGISTER NOW';
  const primaryUrl = heroData?.primaryButtonUrl || event.registration?.url || '#registration';
  const secondaryText = heroData?.secondaryButtonText || 'VIEW CHALLENGE';
  const secondaryUrl = heroData?.secondaryButtonUrl || '#about';

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden ultron-blueprint-bg">
      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* System Status Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14161A] border border-[#262A33] text-[11px] font-mono tracking-widest text-[#9CA3AA] uppercase">
              <span className="ultron-core-dot" />
              <span>ULTRON PROTOCOL // ACTIVE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider leading-none text-[#E8EAED] uppercase font-industrial">
              {title}
            </h1>

            {/* Tagline */}
            {tagline && (
              <div className="text-base sm:text-lg font-mono font-bold text-[#F04444] tracking-widest uppercase">
                {tagline}
              </div>
            )}

            {/* Description */}
            {description && (
              <p className="text-sm sm:text-base text-[#9CA3AA] max-w-2xl leading-relaxed">
                {description}
              </p>
            )}

            {/* Event Metadata Readout Pills */}
            {info && (info.date || info.venue) && (
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#9CA3AA] pt-2">
                {info.date && (
                  <div className="flex items-center gap-2 bg-[#121418] px-3.5 py-2 border border-[#262A33]">
                    <Calendar className="w-3.5 h-3.5 text-[#F04444]" />
                    <span>{info.date}</span>
                  </div>
                )}
                {info.venue && (
                  <div className="flex items-center gap-2 bg-[#121418] px-3.5 py-2 border border-[#262A33]">
                    <MapPin className="w-3.5 h-3.5 text-[#F04444]" />
                    <span>{info.venue}</span>
                  </div>
                )}
                {info.teamSize && (
                  <div className="flex items-center gap-2 bg-[#121418] px-3.5 py-2 border border-[#262A33]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F04444]" />
                    <span>{info.teamSize}</span>
                  </div>
                )}
              </div>
            )}

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href={primaryUrl} size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                {primaryText}
              </Button>
              {secondaryText && (
                <Button href={secondaryUrl} variant="secondary" size="lg">
                  {secondaryText}
                </Button>
              )}
            </div>
          </motion.div>

          {/* Hero Right Column: Abstract ULTRON AI Core / Robotic Head Containment Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#121418] border border-[#262A33] p-6 sm:p-8 shadow-2xl aspect-square flex flex-col justify-between clip-corner-tl-br machined-border">
              {/* Containment Panel Top Status Header */}
              <div className="flex items-center justify-between border-b border-[#262A33] pb-3 text-[10px] font-mono tracking-widest text-[#9CA3AA]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#F04444]" />
                  <span>CORE-01 // AI HEAD SYSTEM</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#F04444]">
                  <Activity className="w-3 h-3" />
                  <span>INTEGRITY 98.4%</span>
                </div>
              </div>

              {/* Symmetrical Abstract Ultron Machine Intelligence Structure */}
              <div className="relative w-full flex-1 flex items-center justify-center my-4">
                {/* Outer Machined Hexagonal Plate */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 bg-[#171A21] border border-[#3A404E] flex items-center justify-center clip-corner-md shadow-inner">
                  
                  {/* Layered Symmetrical Metallic Brow / Face Plates */}
                  <div className="absolute top-4 w-40 h-8 border-b-2 border-[#3A404E] bg-[#22252C] clip-corner-sm" />
                  <div className="absolute bottom-4 w-32 h-6 border-t-2 border-[#3A404E] bg-[#22252C] clip-corner-sm" />

                  {/* Symmetrical Cheeks & Mandible Lines */}
                  <div className="absolute left-4 top-12 bottom-12 w-2 bg-[#2B2F38]" />
                  <div className="absolute right-4 top-12 bottom-12 w-2 bg-[#2B2F38]" />

                  {/* Central Ultron Red Machine Eye Slit / Core */}
                  <div className="relative z-10 w-32 h-10 bg-[#0A0C0E] border border-[#C62828] flex items-center justify-center overflow-hidden clip-corner-sm shadow-md shadow-red-950/50">
                    <div className="w-16 h-2 bg-[#F04444] rounded-full shadow-[0_0_12px_#F04444] animate-pulse" />
                  </div>

                  {/* Internal Technical Grid Seams */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                    <div className="w-full h-px bg-[#3A404E]" />
                    <div className="h-full w-px bg-[#3A404E]" />
                  </div>
                </div>
              </div>

              {/* Containment Panel Bottom Decorative Labels */}
              <div className="flex items-center justify-between border-t border-[#262A33] pt-3 text-[10px] font-mono tracking-widest text-[#626870]">
                <span>NEURAL PROCESSING</span>
                <span className="text-[#F04444]">PROTOCOL ACTIVE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
