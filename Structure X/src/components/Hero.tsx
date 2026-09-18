import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Layers, Users, Calendar, Clock, MapPin, UserCheck, Building2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  blueprintMode: boolean;
  setBlueprintMode: (active: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({
  blueprintMode,
  setBlueprintMode
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const infoCards = [
    {
      label: 'TEAM SIZE',
      value: EVENT_DETAILS.teamSize,
      icon: Users,
      color: '#00d9ff'
    },
    {
      label: 'EXPECTED',
      value: EVENT_DETAILS.expectedParticipants,
      icon: Building2,
      color: '#7c5cff'
    },
    {
      label: 'DAY',
      value: EVENT_DETAILS.day,
      icon: Calendar,
      color: '#00d9ff'
    },
    {
      label: 'TIME',
      value: EVENT_DETAILS.timing,
      icon: Clock,
      color: '#00d9ff'
    },
    {
      label: 'VENUE',
      value: EVENT_DETAILS.venue,
      icon: MapPin,
      color: '#ff3158'
    },
    {
      label: 'FACULTY',
      value: EVENT_DETAILS.faculty,
      icon: UserCheck,
      color: '#00d9ff'
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-8 bg-[#05080d]">
      {/* Directional Gradient Overlay (Left 82% -> Center 55% -> Right 25%) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(3,7,12,0.82) 0%, rgba(3,7,12,0.55) 42%, rgba(3,7,12,0.25) 72%, rgba(3,7,12,0.35) 100%)'
        }}
      />
      
      {/* Subtle Bottom Blend to Next Section */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 75%, rgba(5,8,13,0.95) 100%)'
        }}
      />

      {/* Hero Background Image: High-Visibility Avengers Tower Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full z-0 overflow-hidden select-none">
        <img
          src={EVENT_DETAILS.heroImage}
          alt="Avengers Tower Architectural Visual"
          className={`w-full h-full object-cover object-right-center transition-all duration-700 ${
            blueprintMode
              ? 'blueprint-image-dark brightness-90 contrast-125'
              : 'brightness-[1.18] contrast-[1.08] saturate-100'
          }`}
        />

        {/* Blueprint Grid Overlay when Blueprint Mode is active */}
        {blueprintMode && (
          <div className="absolute inset-0 bg-blueprint-grid opacity-60 z-10 pointer-events-none" />
        )}

        {/* Conceptual HUD Overlay Box */}
        <div className="absolute top-28 right-8 z-20 hidden xl:flex flex-col gap-2 font-mono text-[10px] text-[#00d9ff] bg-[#07111b]/90 p-3 rounded-lg border border-[#00d9ff]/30 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#00d9ff]/20 pb-1 mb-1">
            <span className="font-bold tracking-wider text-white">CONCEPTUAL MODEL</span>
            <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-ping" />
          </div>
          <span className="text-gray-300">SYSTEM: REINFORCED CORE</span>
          <span className="text-gray-300">LOAD PATH: OUTRIGGER TRUSS</span>
          <span className="text-gray-300">FOUNDATION: BEDROCK RAFT</span>
          <span className="text-[9px] text-gray-500 pt-1 border-t border-gray-800">
            [CONCEPTUAL VISUALIZATION]
          </span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 site-container w-full my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Event Label Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07111b]/95 backdrop-blur-md border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(0,217,255,0.15)]"
              style={{
                transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 4}px)`
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse" />
              <span>{EVENT_DETAILS.fest} • {EVENT_DETAILS.category}</span>
            </div>

            {/* Main Event Title: STRUCTURE X (One Strong Horizontal Line) */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-mono leading-none transition-transform duration-300 whitespace-nowrap drop-shadow-md"
              style={{
                transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
                STRUCTURE
              </span>{' '}
              <span className="text-[#00d9ff] cyan-glow inline-block">
                X
              </span>
            </h1>

            {/* Primary Tagline */}
            <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-mono font-bold tracking-widest text-[#00d9ff]">
              <span>ANALYZE</span>
              <span className="text-[#ff3158]">•</span>
              <span>ENGINEER</span>
              <span className="text-[#7c5cff]">•</span>
              <span>PRESENT</span>
            </div>

            {/* Secondary Tagline & Magneto Theme Quote */}
            <div className="space-y-1">
              <p className="max-w-xl text-sm sm:text-base text-gray-300 italic font-sans leading-relaxed">
                "{EVENT_DETAILS.secondaryTagline}"
              </p>
              <p className="text-[11px] font-mono text-[#e11d48] tracking-wider uppercase font-bold">
                “CONTROL THE FORCE. COMMAND THE STRUCTURE.”
              </p>
            </div>

            {/* Event Information Cards Grid */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {infoCards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#07111b]/95 backdrop-blur-md rounded-lg p-3 border border-[#00d9ff]/25 hover:border-[#00d9ff]/60 transition-all flex flex-col justify-between h-20 shadow-md group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider">
                          {card.label}
                        </span>
                        <IconComponent className="w-3.5 h-3.5 text-[#00d9ff] opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-[#00d9ff] transition-colors leading-tight break-words">
                        {card.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Primary Hero CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider text-white bg-gradient-to-r from-[#00d9ff] to-[#3b82f6] hover:from-[#00b3d6] hover:to-[#2563eb] border border-cyan-400/40 shadow-[0_0_25px_rgba(0,217,255,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer h-12 no-underline"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator Bar */}
      <div className="relative z-20 site-container flex justify-between items-center text-xs font-mono text-gray-400 border-t border-gray-800/60 pt-3">
        <div className="flex items-center gap-2 text-[10px] tracking-wider">
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className="flex items-center gap-1.5 text-[#00d9ff] hover:underline cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{blueprintMode ? 'DISABLE BLUEPRINT OVERLAY' : 'ACTIVATE BLUEPRINT OVERLAY'}</span>
          </button>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <span>SCROLL TO DISCOVER THE ENGINEERING BEHIND EVERY STRUCTURE</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00d9ff] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
