import React from 'react';
import { Mic, Users, Trophy, Sparkles } from 'lucide-react';


export const PitchSection: React.FC = () => {
  return (
    <section className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-b border-white/10">
      {/* Dynamic Stage Spotlights */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-64 h-[600px] bg-gradient-to-b from-[#ff003c]/30 via-[#ff003c]/5 to-transparent blur-2xl transform -rotate-12 pointer-events-none" />
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-64 h-[600px] bg-gradient-to-b from-[#00f0ff]/30 via-[#00f0ff]/5 to-transparent blur-2xl transform rotate-12 pointer-events-none" />

      {/* Halftone Texture Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6 border-b-2 border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-anton text-6xl md:text-8xl text-[#ff003c] leading-none drop-shadow-[4px_4px_0px_#00f0ff]">
                03
              </span>
              <div className="flex flex-col">
                <span className="font-space text-xs tracking-widest text-[#00f0ff] uppercase font-bold">
                  PHASE 03 — THE FINAL ARENA
                </span>
                <h2 className="font-anton text-4xl sm:text-6xl text-white tracking-wider uppercase">
                  PITCH
                </h2>
              </div>
            </div>
            <h3 className="font-bebas text-3xl sm:text-5xl text-[#00f0ff] tracking-wider mt-2 uppercase">
              PRESENT. PERSUADE. WIN.
            </h3>
          </div>

          <p className="font-space text-sm sm:text-base text-gray-300 max-w-md">
            Take your brand to the stage and pitch your concept to the judges. Explain your creative decisions, demonstrate your brand's potential, and convince them that your brand deserves to stand out.
          </p>
        </div>

        {/* The Comic-Book Stage Arena Container */}
        <div className="relative p-8 sm:p-12 bg-[#121216] border-4 border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Stage Beam Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-white/5">
            <line x1="50%" y1="0" x2="20%" y2="100%" strokeWidth="2" />
            <line x1="50%" y1="0" x2="80%" y2="100%" strokeWidth="2" />
          </svg>

          {/* Central Presentation Stage Podium */}
          <div className="relative z-10 flex flex-col items-center text-center my-6">
            
            {/* Spotlight Beam Base */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-t from-[#ff003c]/20 via-[#00f0ff]/20 to-transparent flex items-center justify-center border-2 border-dashed border-[#00f0ff] animate-pulse mb-6">
              <div className="w-28 h-28 sm:w-36 sm:h-36 bg-black rounded-full border-2 border-[#ff003c] shadow-glow-red flex items-center justify-center">
                <Mic className="w-14 h-14 text-[#00f0ff]" />
              </div>
            </div>

            <span className="font-space text-xs tracking-widest text-[#ff003c] uppercase font-bold">
              THE JUDGING ARENA
            </span>
            
            <h3 className="font-anton text-4xl sm:text-5xl text-white tracking-wide uppercase my-2">
              YOUR BRAND ON STAGE
            </h3>

            <p className="font-inter text-base text-gray-300 max-w-xl mb-8">
              3 to 5 minutes to captivate the judges. Show off your brand guidelines, key promotional visuals, tagline, and strategic launch vision.
            </p>
          </div>

          {/* Judge Silhouettes / Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-4 bg-black/60 border border-white/10 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#ff003c]/20 border border-[#ff003c] flex items-center justify-center text-[#ff003c]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bebas text-xl text-white">PANEL JUDGE 01</h4>
                <p className="font-inter text-xs text-gray-400">Brand Strategy & Position</p>
              </div>
            </div>

            <div className="p-4 bg-black/60 border border-white/10 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#00f0ff]/20 border border-[#00f0ff] flex items-center justify-center text-[#00f0ff]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bebas text-xl text-white">PANEL JUDGE 02</h4>
                <p className="font-inter text-xs text-gray-400">Visual Identity & Craft</p>
              </div>
            </div>

            <div className="p-4 bg-black/60 border border-white/10 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#bf00ff]/20 border border-[#bf00ff] flex items-center justify-center text-[#bf00ff]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bebas text-xl text-white">PANEL JUDGE 03</h4>
                <p className="font-inter text-xs text-gray-400">Storytelling & Presentation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
