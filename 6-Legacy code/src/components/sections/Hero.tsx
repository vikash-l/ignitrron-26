import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ShieldCheck, Cpu, Activity, Terminal, Zap, CheckCircle2 } from 'lucide-react';
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
  const primaryUrl = heroData?.primaryButtonUrl || event.registration?.url || 'https://www.theticket9.com/event/ignitrron-26';
  const secondaryText = heroData?.secondaryButtonText || 'VIEW CHALLENGE';
  const secondaryUrl = heroData?.secondaryButtonUrl || '#about';

  // Live Simulated Telemetry Stream for Advanced Ultron Interface
  const [telemetryIndex, setTelemetryIndex] = useState(0);
  const telemetryLogs = [
    'SYSTEM_RECOVERY_PROTOCOL // ACTIVE',
    'ANALYZING_LEGACY_MONOLITH // 0x7F4A',
    'MEMORY_LEAK_DETECTION // CLEAN',
    'AI_ASSIST_MODULES // SYNCHRONIZED',
    'HPC_LAB_STATION_04 // DEPLOYED',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetryIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [telemetryLogs.length]);

  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden ultron-blueprint-bg border-b border-[#262A33]">
      {/* Huge Background Watermark Outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black font-industrial text-[#14171F]/40 select-none pointer-events-none tracking-tighter whitespace-nowrap z-0">
        ULTRON // v4.0.1
      </div>

      <Container size="lg" className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Column: System Control & Event Specs */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Advanced System Status & Channel Header */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14161A] border border-[#3A404E] text-[11px] font-mono tracking-widest text-[#E8EAED] uppercase clip-corner-sm shadow-sm">
                <span className="ultron-core-dot" />
                <span>ULTRON CONTROL SYSTEM</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#171A21] border border-[#262A33] text-[10px] font-mono tracking-widest text-[#F04444] uppercase">
                <Zap className="w-3 h-3" />
                <span>RESCUE PROTOCOL // ACTIVE</span>
              </div>
            </div>

            {/* Main Title with Dual-Tone Machined Typography */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-black tracking-wider leading-none text-[#E8EAED] uppercase font-industrial drop-shadow-md">
                {title}
              </h1>
              {tagline && (
                <div className="text-base sm:text-lg font-mono font-bold text-[#F04444] tracking-widest uppercase pt-1">
                  {tagline}
                </div>
              )}
            </div>

            {/* Event Description Brief */}
            {description && (
              <p className="text-sm sm:text-base text-[#9CA3AA] max-w-2xl leading-relaxed font-sans">
                {description}
              </p>
            )}

            {/* Advanced Diagnostic Specification Cards */}
            {info && (info.date || info.venue) && (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {info.date && (
                  <div className="bg-[#121418] p-3 border border-[#262A33] hover:border-[#3A404E] transition-colors clip-corner-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F04444] font-bold uppercase">
                      <Calendar className="w-3 h-3" />
                      <span>DEPLOYMENT DATE</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#E8EAED]">
                      {info.date}
                    </div>
                  </div>
                )}
                {info.venue && (
                  <div className="bg-[#121418] p-3 border border-[#262A33] hover:border-[#3A404E] transition-colors clip-corner-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F04444] font-bold uppercase">
                      <MapPin className="w-3 h-3" />
                      <span>PRIMARY VENUE</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#E8EAED]">
                      {info.venue}
                    </div>
                  </div>
                )}
                {info.teamSize && (
                  <div className="bg-[#121418] p-3 border border-[#262A33] hover:border-[#3A404E] transition-colors clip-corner-sm space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#F04444] font-bold uppercase">
                      <ShieldCheck className="w-3 h-3" />
                      <span>UNIT CAPACITY</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#E8EAED]">
                      {info.teamSize}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href={primaryUrl} target="_blank" rel="noopener noreferrer" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                {primaryText}
              </Button>
              {secondaryText && (
                <Button href={secondaryUrl} variant="secondary" size="lg">
                  {secondaryText}
                </Button>
              )}
            </div>
          </motion.div>

          {/* Hero Right Column: Advanced Ultron Machine Interface & Containment HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#121418] border border-[#3A404E] p-5 sm:p-6 shadow-2xl flex flex-col justify-between clip-corner-tl-br machined-border group">
              {/* Containment Panel Top Status Header */}
              <div className="flex items-center justify-between border-b border-[#262A33] pb-3 text-[10px] font-mono tracking-widest text-[#9CA3AA]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#F04444]" />
                  <span className="font-bold text-[#E8EAED]">CORE-01 // AI HEAD CONTROL</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#F04444] font-bold bg-[#1B1E24] px-2 py-0.5 border border-[#3A404E]">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>INTEGRITY 98.4%</span>
                </div>
              </div>

              {/* Advanced Machine Image HUD Visual Frame */}
              <div className="relative w-full aspect-square my-4 overflow-hidden clip-corner-md border border-[#3A404E] bg-[#0A0C0E]">
                {/* Laser Diagnostic Scan Beam */}
                <div className="ultron-scan-line z-20" />

                {/* Corner Target HUD Crosshairs */}
                <div className="absolute top-2 left-2 z-20 text-[9px] font-mono text-[#F04444] bg-[#070809]/80 px-1.5 py-0.5 border border-[#C62828]">
                  [ + ] 0x7F4A
                </div>
                <div className="absolute top-2 right-2 z-20 text-[9px] font-mono text-[#E8EAED] bg-[#070809]/80 px-1.5 py-0.5 border border-[#3A404E]">
                  TEMP 42.8°C
                </div>
                <div className="absolute bottom-2 left-2 z-20 text-[9px] font-mono text-[#E8EAED] bg-[#070809]/80 px-1.5 py-0.5 border border-[#3A404E]">
                  SYNC: 99.1%
                </div>
                <div className="absolute bottom-2 right-2 z-20 text-[9px] font-mono text-[#F04444] bg-[#070809]/80 px-1.5 py-0.5 border border-[#C62828]">
                  SIGNAL: SECURE
                </div>

                {heroData?.visualImage ? (
                  <img
                    src={heroData.visualImage}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#171A21]">
                    <div className="text-center space-y-2">
                      <Cpu className="w-12 h-12 text-[#F04444] mx-auto animate-pulse" />
                      <div className="text-xs font-mono text-[#9CA3AA]">ULTRON CORE INITIALIZING</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Containment Panel Bottom Diagnostic Meters Bar */}
              <div className="space-y-2 border-t border-[#262A33] pt-3 text-[10px] font-mono text-[#9CA3AA]">
                <div className="flex items-center justify-between">
                  <span>NEURAL PROCESSING LOAD</span>
                  <span className="text-[#F04444] font-bold">84.2% GFLOPS</span>
                </div>
                {/* Meter Progress Bar */}
                <div className="w-full h-1.5 bg-[#171A21] border border-[#2B2F38] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#C62828] to-[#F04444] w-[84%]" />
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#626870] pt-1 uppercase">
                  <span>STATION // HPC LAB</span>
                  <span>PROTOCOL // ACTIVE EVALUATION</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Advanced Telemetry Live Console Ticker at Bottom of Hero */}
      <div className="relative z-10 bg-[#0E1014] border-t border-[#262A33] py-2.5 px-4 font-mono text-xs text-[#9CA3AA]">
        <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#F04444]" />
            <span className="text-[10px] text-[#F04444] font-bold uppercase tracking-widest">LIVE CONSOLE</span>
            <span className="text-[#626870]">|</span>
            <span className="text-xs text-[#E8EAED] truncate max-w-md sm:max-w-xl">
              &gt; {telemetryLogs[telemetryIndex]}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-[#626870] uppercase tracking-widest hidden md:flex">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#F04444]" />
              <span>40 TEAMS LOADED</span>
            </div>
            <span>•</span>
            <div>WINDOW: 05:00 HOURS</div>
          </div>
        </Container>
      </div>
    </section>
  );
};
