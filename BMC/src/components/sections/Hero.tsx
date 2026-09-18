import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Users, 
  Briefcase,
  Shield,
  Activity
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const Hero: React.FC = () => {
  const badges = [
    { label: 'Team Event', icon: Users },
    { label: 'Startup Strategy', icon: Briefcase },
    { label: 'Innovation', icon: Zap },
    { label: 'Business Pitch', icon: TrendingUp },
  ];

  const handleScrollTo = (id: string) => {
    playUiSound('click');
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Corporate Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b0f14]/80 border border-[#00ff88]/40 shadow-lg shadow-[#00ff88]/10 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#00ff88] uppercase">
                IGNITRRON'26 Corporate Innovation Arena
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-1 mb-4">
              <div className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_35px_rgba(0,255,136,0.3)]">
                BMC
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-space tracking-tight oscorp-gradient-text">
                Business Model Canvas
              </h1>
            </div>

            {/* Tagline */}
            <div className="text-xl sm:text-2xl font-bold text-white/95 mb-4 tracking-wide font-tech flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
              Transform Ideas into Sustainable Businesses
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-2xl leading-relaxed mb-8">
              Pitch innovative ideas, validate market opportunities, and build scalable business ventures.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b0f14] border border-[#00ff88]/25 text-xs font-mono font-medium text-[#cbd5e1] hover:border-[#00ff88]/60 hover:text-[#00ff88] transition-all cursor-default"
                    onMouseEnter={() => playUiSound('hover')}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>{b.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playUiSound('hover')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00ff88] text-[#050816] font-bold text-sm uppercase tracking-wider hover:bg-[#00c96b] transition-all shadow-xl shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transform hover:-translate-y-0.5 no-underline"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleScrollTo('#about')}
                onMouseEnter={() => playUiSound('hover')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0b0f14] border border-[#cbd5e1]/30 text-white font-semibold text-sm hover:border-[#00ff88] hover:text-[#00ff88] transition-all hover:bg-white/[0.02]"
              >
                <span>View Event Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Framed Image with Premium Oscorp Border */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Multi-Layered Glows */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-[360px] sm:w-full max-w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-br from-[#00ff88]/25 via-[#00c96b]/20 to-[#f59e0b]/10 blur-[100px] animate-pulse" />
              <div className="absolute w-[280px] h-[280px] rounded-full bg-[#00ff88]/20 blur-[80px]" />
            </div>

            {/* High-Tech Framed Container with Oscorp Border */}
            <div className="relative w-full max-w-full max-w-[480px] rounded-3xl glass-oscorp-elevated border-2 border-[#00ff88]/50 hover:border-[#00ff88] p-4 sm:p-5 shadow-2xl shadow-[#00ff88]/25 transition-all duration-500 oscorp-cut-lg group">
              {/* Top Telemetry Header Strip */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#cbd5e1]/15 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
                  <span className="font-mono text-[11px] font-bold text-white tracking-wider">
                    OSCORP INNOVATION // MK-26
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded border border-[#00ff88]/30">
                  <Activity className="w-3 h-3 animate-spin" />
                  <span>ACTIVE MATRIX</span>
                </div>
              </div>

              {/* Inner Image Frame Container with Border & Grid */}
              <div className="relative rounded-2xl overflow-hidden bg-[#050816]/95 border border-[#00ff88]/30 flex items-center justify-center p-2 min-h-[380px] sm:min-h-[420px]">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-oscorp-grid opacity-30 pointer-events-none" />

                {/* Radar Sweep Rings inside border */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 sm:w-72 h-64 sm:h-72 rounded-full border border-dashed border-[#00ff88]/20 animate-radar-sweep pointer-events-none" />
                  <div className="w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-dotted border-[#00c96b]/15 pointer-events-none" />
                </div>

                {/* The Photo Entity */}
                <img
                  src="/business-model-canvas/oscorp_goblin.png"
                  alt="Norman Osborn Oscorp Flight Armor"
                  className="relative z-10 w-full max-w-full max-w-[380px] sm:max-w-full max-w-[420px] h-auto max-h-[440px] object-contain drop-shadow-[0_15px_35px_rgba(0,255,136,0.35)] transition-transform duration-700 group-hover:scale-105 select-none"
                />

                {/* Seamless Edge Gradient Vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />

                {/* Corner Bracket Accents on the Inner Image Frame */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff88] pointer-events-none z-20" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00ff88] pointer-events-none z-20" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00ff88] pointer-events-none z-20" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff88] pointer-events-none z-20" />

                {/* Floating Tech Telemetry Callouts */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-[#00ff88]/40 shadow-lg">
                  <div className="text-[9px] font-mono text-[#cbd5e1]/60 uppercase">Venture Moat</div>
                  <div className="text-xs font-mono font-bold text-[#00ff88]">Proprietary IP 10x</div>
                </div>

                <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-[#f59e0b]/40 shadow-lg">
                  <div className="text-[9px] font-mono text-[#cbd5e1]/60 uppercase">Market Velocity</div>
                  <div className="text-xs font-mono font-bold text-[#f59e0b]">High Scale Tier-1</div>
                </div>
              </div>

              {/* Bottom Frame Status Bar */}
              <div className="mt-3 pt-2 border-t border-[#cbd5e1]/10 flex items-center justify-between text-[10px] font-mono text-[#cbd5e1]/60 px-1">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#00ff88]" />
                  Executive Boardroom Class
                </span>
                <span className="text-white font-semibold">Total: 8 Mins / Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
