import React from 'react';
import { 
  Rocket, 
  Lightbulb, 
  Target, 
  Presentation, 
  Globe, 
  Sparkles, 
  Award
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const WhyParticipate: React.FC = () => {
  const benefits = [
    {
      title: 'Startup Thinking',
      category: 'Founder Mindset',
      desc: 'Cultivate rapid iterative problem-solving, customer discovery, and lean venture validation methodologies.',
      icon: Rocket,
      accent: 'text-[#00ff88]',
      border: 'hover:border-[#00ff88]',
      kpi: 'Hypothesis Velocity',
    },
    {
      title: 'Innovation Skills',
      category: 'Disruptive R&D',
      desc: 'Master product-market fit discovery, breakthrough ideation, and defensible IP architecture formulation.',
      icon: Lightbulb,
      accent: 'text-[#00c96b]',
      border: 'hover:border-[#00c96b]',
      kpi: 'Creative Moat',
    },
    {
      title: 'Business Strategy',
      category: 'Unit Economics',
      desc: 'Formulate robust financial roadmaps, scalable margin modeling, and sustainable competitive advantages.',
      icon: Target,
      accent: 'text-[#f59e0b]',
      border: 'hover:border-[#f59e0b]',
      kpi: 'Enterprise LTV/CAC',
    },
    {
      title: 'Presentation Skills',
      category: 'Executive Delivery',
      desc: 'Command the boardroom with high-impact 5-minute precision pitch decks and sharp defensive Q&A answers.',
      icon: Presentation,
      accent: 'text-[#00ff88]',
      border: 'hover:border-[#00ff88]',
      kpi: 'Boardroom Gravitas',
    },
    {
      title: 'Industry Exposure',
      category: 'Ecosystem Connect',
      desc: 'Present your venture hypotheses directly before seasoned corporate innovators and venture evaluation panels.',
      icon: Globe,
      accent: 'text-[#00c96b]',
      border: 'hover:border-[#00c96b]',
      kpi: 'Network Density',
    },
    {
      title: 'Real-World Impact',
      category: 'Venture Viability',
      desc: 'Bridge academic theory with tangible commercial execution, converting student ideas into market-ready ventures.',
      icon: Sparkles,
      accent: 'text-[#f59e0b]',
      border: 'hover:border-[#f59e0b]',
      kpi: 'Market Scalability',
    },
  ];

  return (
    <section id="why-participate" className="py-24 relative overflow-hidden bg-[#0b0f14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            Executive Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Why <span className="oscorp-gradient-text">Participate</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-2xl mx-auto">
            Acquire high-leverage venture creation capabilities through competitive corporate boardroom simulations.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                onMouseEnter={() => playUiSound('hover')}
                className={`group relative rounded-2xl glass-oscorp p-6 sm:p-7 border border-[#cbd5e1]/15 ${b.border} transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00ff88]/10 oscorp-cut`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 group-hover:border-[#00ff88]/50 flex items-center justify-center text-[#cbd5e1] group-hover:text-[#00ff88] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#cbd5e1]/60 px-2 py-0.5 rounded bg-[#050816] border border-[#cbd5e1]/15">
                    {b.kpi}
                  </span>
                </div>

                <div className={`text-[10px] font-mono uppercase tracking-widest ${b.accent} mb-1`}>
                  {b.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#00ff88] transition-colors">
                  {b.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#cbd5e1]/75 leading-relaxed">
                  {b.desc}
                </p>

                {/* Subtle corner detail */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg className="w-full h-full text-[#00ff88]" viewBox="0 0 100 100" fill="none">
                    <path d="M100 0 L100 100 L0 100 Z" fill="currentColor" opacity="0.1" />
                    <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
