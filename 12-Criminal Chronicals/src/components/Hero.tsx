import React from 'react';
import { ArrowRight, ChevronDown, Calendar, Clock, MapPin, Radio } from 'lucide-react';
import { EVENT_DATA, REGISTRATION_URL } from '../config/eventData';
import { HeroCharacterImage } from './HeroCharacterImage';

export const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-radial-red-glow overflow-hidden">
      {/* Background Decorative Cyber Grid */}
      <div className="absolute inset-0 bg-forensic-grid opacity-25 pointer-events-none" />

      {/* Red Atmospheric Fog */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#e31b23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN — Main Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-20">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-600/40 backdrop-blur-md shadow-[0_0_15px_rgba(227,27,35,0.3)]">
              <Radio className="w-3.5 h-3.5 text-[#e31b23] animate-pulse" />
              <span className="text-xs font-mono font-semibold text-white tracking-wider">
                {EVENT_DATA.organizer} • DAY 01 EVENT
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-wider text-white leading-none">
                CRIMINAL
              </h1>
              <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-wider leading-none bg-gradient-to-r from-white via-slate-200 to-[#e31b23] bg-clip-text text-transparent">
                CHRONICLES <span className="text-[#e31b23]">2.0</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="font-mono text-sm sm:text-base font-bold tracking-widest text-[#e31b23] uppercase">
              {EVENT_DATA.primaryTagline}
            </p>

            {/* Paragraph Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              A forensic investigation challenge where observation, reasoning and deduction come together to uncover the truth behind complex criminal cases.
            </p>

            {/* Event Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black border border-red-900/30">
                <Calendar className="w-4 h-4 text-[#e31b23]" />
                <span>{EVENT_DATA.day}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black border border-red-900/30">
                <Clock className="w-4 h-4 text-[#e31b23]" />
                <span>{EVENT_DATA.timing}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black border border-red-900/30">
                <MapPin className="w-4 h-4 text-[#e31b23]" />
                <span>{EVENT_DATA.venue}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href={REGISTRATION_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-bold tracking-wider text-white bg-gradient-to-r from-[#8b0000] via-[#c1121f] to-[#e31b23] hover:from-[#c1121f] hover:to-[#e31b23] transition-all duration-300 shadow-[0_0_30px_rgba(227,27,35,0.5)] hover:shadow-[0_0_40px_rgba(227,27,35,0.8)] hover:scale-102 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, '#about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-mono tracking-wider text-slate-300 bg-black border border-red-900/30 hover:border-[#e31b23]/50 hover:text-white hover:bg-slate-950 transition-all duration-200"
              >
                <span>EXPLORE THE CASE</span>
                <ChevronDown className="w-4 h-4 text-[#e31b23]" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN — Uploaded Cinematic Vigilante Character Hero Image */}
          <div className="lg:col-span-5 w-full mt-6 lg:mt-0 z-10">
            <HeroCharacterImage />
          </div>

        </div>
      </div>
    </section>
  );
};
