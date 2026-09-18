import React from 'react';
import { 
  Building2, 
  Lightbulb, 
  Target, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const AboutEvent: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Idea Transformation',
      desc: 'Formulate an innovative concept into a structured, validated corporate strategy.',
      icon: Lightbulb,
    },
    {
      step: '02',
      title: 'BMC Presentation',
      desc: 'Deliver key customer segments, market assumptions, value proposition & unit economics.',
      icon: Target,
    },
    {
      step: '03',
      title: 'Evaluation Panel Defense',
      desc: 'Engage in a rigorous 3-minute executive Q&A justifying feasibility and scaling velocity.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00ff88]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Executive Briefing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            About <span className="oscorp-gradient-text">BMC</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent mx-auto" />
        </div>

        {/* Main Content Card with Oscorp Styling */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-oscorp-elevated p-8 sm:p-12 rounded-3xl border border-[#00ff88]/30 relative oscorp-cut-lg shadow-2xl shadow-black/80">
            {/* Top Accent Strip */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#cbd5e1]/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded bg-[#00ff88]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#cbd5e1]/70">
                  CONFIDENTIAL MEMORANDUM // IGNITRRON'26
                </span>
              </div>
              <span className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/10 px-2.5 py-1 rounded border border-[#00ff88]/30">
                VENTURE ACCELERATOR DIRECTIVE
              </span>
            </div>

            {/* Exact Content as requested */}
            <div className="space-y-6 text-base sm:text-lg text-[#cbd5e1]/90 leading-relaxed font-tech">
              <p className="border-l-2 border-[#00ff88] pl-4 italic text-white/95 bg-[#00ff88]/[0.02] py-2 rounded-r-lg">
                The BMC presentation provides teams an opportunity to demonstrate how their innovative idea can be transformed into a viable and sustainable business model.
              </p>

              <p>
                Teams will present their Business Model Canvas, explain their customer and market assumptions, demonstrate the value proposition, and justify the revenue model, feasibility, and scalability of their proposed venture.
              </p>

              <div className="p-4 rounded-xl bg-[#050816]/90 border border-[#f59e0b]/30 flex items-start gap-3">
                <div className="p-1 rounded bg-[#f59e0b]/10 text-[#f59e0b] mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-white/90 font-medium">
                  The presentation will be followed by an interaction with the evaluation panel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Stage Venture Acceleration Flow */}
        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group relative p-6 rounded-2xl glass-oscorp-subtle border border-[#cbd5e1]/15 hover:border-[#00ff88]/50 hover:bg-[#0b0f14]/90 transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => playUiSound('hover')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#00ff88]/40 group-hover:text-[#00ff88] transition-colors">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 group-hover:border-[#00ff88]/40 flex items-center justify-center text-[#cbd5e1] group-hover:text-[#00ff88] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1]/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
