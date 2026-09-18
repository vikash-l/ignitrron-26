import React from 'react';
import { 
  Users, 
  Clock, 
  MessageSquare, 
  Hourglass, 
  Presentation, 
  FileText,
  Timer,
  Briefcase
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const PresentationFormat: React.FC = () => {
  const cards = [
    {
      title: 'Team Size',
      value: '2–4 Members',
      subtitle: 'Collaborative Venture Cohort',
      desc: 'Multidisciplinary team composition representing strategic, technical, and financial roles.',
      icon: Users,
      highlight: false,
      accent: 'border-[#00ff88]/30',
      badge: 'Squad Scale',
    },
    {
      title: 'Presentation',
      value: '5 Minutes',
      subtitle: 'Executive Value Pitch',
      desc: 'Concise delivery of your business proposition, target segments, and market traction.',
      icon: Clock,
      highlight: true,
      accent: 'border-[#00ff88]/60 shadow-lg shadow-[#00ff88]/10',
      badge: 'Core Pitch',
    },
    {
      title: 'Jury Interaction / Q&A',
      value: '3 Minutes',
      subtitle: 'Boardroom Defense',
      desc: 'Direct cross-examination by evaluation panel on unit economics, risks, and execution roadmap.',
      icon: MessageSquare,
      highlight: false,
      accent: 'border-[#f59e0b]/40',
      badge: 'Executive Defense',
    },
    {
      title: 'Total Duration',
      value: '8 Minutes per Team',
      subtitle: 'Strict Stage Window',
      desc: 'Comprehensive pitch & Q&A cycle executed under strict boardroom protocol.',
      icon: Hourglass,
      highlight: true,
      accent: 'border-[#00ff88]/60 shadow-lg shadow-[#00ff88]/10',
      badge: 'Total Slot',
    },
    {
      title: 'Maximum Slides',
      value: '5–6 Slides',
      subtitle: 'Precision Pitch Deck',
      desc: 'High-density visual deck focusing solely on essential venture mechanics and data.',
      icon: Presentation,
      highlight: false,
      accent: 'border-[#cbd5e1]/20',
      badge: 'Slide Limit',
    },
    {
      title: 'Presentation Format',
      value: 'PPT + BMC Canvas',
      subtitle: 'Dual Artifact Delivery',
      desc: 'Standard executive presentation deck coupled with the complete 9-block Business Model Canvas.',
      icon: FileText,
      highlight: false,
      accent: 'border-[#00c96b]/40',
      badge: 'Deliverables',
    },
  ];

  return (
    <section id="format" className="py-24 relative overflow-hidden bg-[#0b0f14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Executive Briefing Protocol
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Presentation <span className="oscorp-gradient-text">Format</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-xl mx-auto">
            High-efficiency boardroom briefing guidelines and stage timing constraints for participating teams.
          </p>
        </div>

        {/* 6 Premium Oscorp Executive Briefing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`relative rounded-2xl glass-oscorp-elevated p-6 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00ff88]/15 ${card.accent} oscorp-cut`}
                onMouseEnter={() => playUiSound('hover')}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider rounded bg-[#050816] text-[#cbd5e1] border border-[#cbd5e1]/20">
                    {card.badge}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#050816] border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1]/60 mb-1">
                  {card.title}
                </div>
                <div className="text-2xl font-black font-space text-white tracking-tight mb-1">
                  {card.value}
                </div>
                <div className="text-xs font-semibold text-[#00ff88] mb-3">
                  {card.subtitle}
                </div>
                <p className="text-xs text-[#cbd5e1]/75 leading-relaxed">
                  {card.desc}
                </p>

                {/* Subtle corner indicator */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#00ff88]/40" />
              </div>
            );
          })}
        </div>

        {/* 8-Minute Stage Timeline Breakdown */}
        <div className="max-w-4xl mx-auto rounded-2xl glass-oscorp p-6 sm:p-8 border border-[#00ff88]/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white font-space flex items-center gap-2">
                <Timer className="w-5 h-5 text-[#00ff88]" />
                8-Minute Boardroom Schedule Allocation
              </h3>
              <p className="text-xs text-[#cbd5e1]/70 font-mono">
                Total slot: 480 seconds • Strict countdown protocol
              </p>
            </div>

            <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
              5 Min Pitch + 3 Min Q&A
            </span>
          </div>

          {/* Timeline Visual Bar */}
          <div className="space-y-2">
            <div className="relative h-6 bg-[#050816] rounded-xl overflow-hidden border border-[#cbd5e1]/20 flex">
              {/* 5 min (62.5%) */}
              <div
                className="h-full bg-gradient-to-r from-[#00ff88] to-[#00c96b] flex items-center justify-center text-[10px] font-mono font-bold text-[#050816]"
                style={{ width: '62.5%' }}
              >
                5 MIN PITCH (62.5%)
              </div>
              {/* 3 min (37.5%) */}
              <div
                className="h-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] flex items-center justify-center text-[10px] font-mono font-bold text-[#050816]"
                style={{ width: '37.5%' }}
              >
                3 MIN Q&A (37.5%)
              </div>
            </div>

            <div className="flex justify-between text-xs font-mono text-[#cbd5e1]/60 pt-1">
              <span>0:00 - Presentation Begins</span>
              <span className="text-[#00ff88]">5:00 - Slide Presentation Ends</span>
              <span className="text-[#f59e0b]">8:00 - Evaluation Concludes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
