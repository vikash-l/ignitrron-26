import React from 'react';
import { Laptop, Users, Cog, Trophy, ArrowRight, FileText, Zap } from 'lucide-react';
import { cadForgeData } from '../../data/cadForgeData';
import { IsometricModelViewer } from '../canvas/IsometricModelViewer';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Spider-Verse Venom Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] sm:w-full max-w-[700px] h-[350px] bg-gradient-to-tr from-[#ff0055]/15 via-[#9d4edd]/10 to-[#00f0ff]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Event Origin / Department Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-cyan-300 font-bold">
                {cadForgeData.event.festName} • {cadForgeData.event.department}
              </span>
            </div>

            {/* Large Animated Title */}
            <h1 className="text-4xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl xl:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-extrabold font-orbitron tracking-tight text-white mb-4 leading-none glitch-hover select-none">
              CAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#ff2a6d] to-[#00f0ff] text-glow-red">
                FORGE
              </span> <span className="text-[#00f0ff] text-glow-blue">2026</span>
            </h1>

            {/* Subtitle / Tagline */}
            <div className="relative inline-block mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-syne font-bold text-slate-200 tracking-wide">
                &ldquo;{cadForgeData.event.tagline}&rdquo;
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-[#ff0055] via-[#9d4edd] to-[#00f0ff] rounded-full mt-2" />
            </div>

            {/* Prominent Badges Grid (4 badges) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Requirement</span>
                  <span className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wide">
                    💻 Laptop Compulsory
                  </span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-[#ff0055]/30 backdrop-blur-md hover:border-[#ff0055] hover:shadow-[0_0_20px_rgba(255,0,85,0.25)] transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#ff0055]/10 border border-[#ff0055]/30 flex items-center justify-center text-[#ff0055]">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Composition</span>
                  <span className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wide">
                    👥 Team of 2 Members
                  </span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-md hover:border-purple-400 hover:shadow-[0_0_20px_rgba(157,78,221,0.25)] transition-all">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Cog className="w-5 h-5 animate-spin-gear" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Category</span>
                  <span className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wide">
                    ⚙ Mechanical Engineering Event
                  </span>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-amber-500/30 backdrop-blur-md hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase">Format</span>
                  <span className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wide">
                    🏆 Multi-Round Competition
                  </span>
                </div>
              </div>
            </div>

            {/* Animated Glowing Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Register Now Button */}
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-8 py-4 rounded-xl bg-[#ff0055] text-white font-orbitron font-bold text-sm tracking-wider uppercase overflow-hidden shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:shadow-[0_0_45px_rgba(255,0,85,0.9)] hover:scale-105 transition-all flex items-center gap-3"
              >
                <Zap className="w-4 h-4 text-cyan-200 fill-cyan-200" />
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              </a>

              {/* View Event Details Button */}
              <a
                href="#about"
                className="relative group px-8 py-4 rounded-xl bg-slate-900/90 text-cyan-300 font-orbitron font-bold text-sm tracking-wider uppercase border border-cyan-500/40 hover:border-cyan-400 hover:text-white shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:scale-105 transition-all flex items-center gap-3"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Event Details</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D CAD Interactive Viewport */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <IsometricModelViewer />
          </div>

        </div>
      </div>
    </section>
  );
};
