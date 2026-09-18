import React, { useState } from 'react';
import { 
  Lightbulb, 
  Users, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  Rocket, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const WhatTeamsShouldPresent: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const presentationPillars = [
    {
      id: 1,
      title: 'Business Idea',
      category: 'Strategic Vision',
      icon: Lightbulb,
      desc: 'The core problem you solve, market innovation, and unique thesis behind your proposed venture.',
      questions: [
        'What high-friction problem are you resolving?',
        'What makes your solution radically 10x better than existing alternatives?',
        'What is your origin thesis and unfair market advantage?',
      ],
      color: '#00ff88',
    },
    {
      id: 2,
      title: 'Customer Segments',
      category: 'Audience & Target',
      icon: Users,
      desc: 'Granular persona identification, TAM/SAM/SOM sizing, and primary beachhead market definition.',
      questions: [
        'Who is your exact ideal customer profile (ICP)?',
        'Are you targeting B2B enterprise, B2C consumer, or B2B2C marketplace?',
        'What is the verified size of your Total Addressable Market?',
      ],
      color: '#00c96b',
    },
    {
      id: 3,
      title: 'Value Proposition',
      category: 'Product-Market Fit',
      icon: Sparkles,
      desc: 'The quantitative & qualitative ROI, unique value differentiation, and user pain relief.',
      questions: [
        'Why should customers pay you rather than incumbents?',
        'What quantifiable metrics (cost reduction, speed, output) do you deliver?',
        'What is your defensible intellectual moat?',
      ],
      color: '#f59e0b',
    },
    {
      id: 4,
      title: 'Market Assumptions',
      category: 'Validation & Risks',
      icon: TrendingUp,
      desc: 'Core hypotheses regarding customer willingness to pay, adoption cycles, and regulatory trends.',
      questions: [
        'What key assumptions must hold true for this venture to succeed?',
        'What evidence or preliminary interviews validate these assumptions?',
        'How do you mitigate external macro/regulatory market shifts?',
      ],
      color: '#00ff88',
    },
    {
      id: 5,
      title: 'Revenue Model',
      category: 'Unit Economics',
      icon: DollarSign,
      desc: 'Pricing strategy, revenue streams (SaaS, usage, licensing, transaction fee), and margin structure.',
      questions: [
        'What is your primary monetization and pricing tier structure?',
        'What is your estimated Gross Margin and Customer Lifetime Value (LTV)?',
        'What is the projected Customer Acquisition Cost (CAC) payback period?',
      ],
      color: '#f59e0b',
    },
    {
      id: 6,
      title: 'Feasibility',
      category: 'Execution Architecture',
      icon: CheckCircle,
      desc: 'Technical readiness, operational workflows, core resource access, and regulatory compliance.',
      questions: [
        'Can this solution realistically be engineered and deployed with current technology?',
        'What are the key operational bottlenecks or supply chain dependencies?',
        'What key talent and infrastructure are required to launch MVP?',
      ],
      color: '#00c96b',
    },
    {
      id: 7,
      title: 'Scalability',
      category: 'Growth Multipliers',
      icon: Rocket,
      desc: 'Exponential expansion potential, network effects, geographic rollout, and marginal cost reduction.',
      questions: [
        'How does revenue scale non-linearly with costs as user count grows 100x?',
        'What built-in network effects or viral loops drive compounding adoption?',
        'What is your 1-year and 3-year phased market expansion roadmap?',
      ],
      color: '#00ff88',
    },
  ];

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            Evaluation Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            What Teams <span className="oscorp-gradient-text">Should Present</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-2xl mx-auto">
            7 core strategic pillars evaluated by the Oscorp executive panel. Click any card to inspect jury checkpoint criteria.
          </p>
        </div>

        {/* 7 Animated Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 xl:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {presentationPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isExpanded = selectedCard === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  playUiSound('select');
                  setSelectedCard(isExpanded ? null : pillar.id);
                }}
                onMouseEnter={() => playUiSound('hover')}
                className={`group relative rounded-2xl glass-oscorp p-6 border transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 ${
                  isExpanded
                    ? 'border-[#00ff88] bg-[#0b0f14]/95 shadow-2xl shadow-[#00ff88]/20 scale-[1.02]'
                    : 'border-[#cbd5e1]/15 hover:border-[#00ff88]/50 hover:shadow-lg hover:shadow-[#00ff88]/10'
                } oscorp-cut`}
              >
                {/* Top Telemetry */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#cbd5e1]/60 font-semibold">
                    PILLAR 0{pillar.id}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 group-hover:border-[#00ff88]/50 flex items-center justify-center text-[#cbd5e1] group-hover:text-[#00ff88] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-widest text-[#00ff88] mb-1">
                  {pillar.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors flex items-center justify-between">
                  <span>{pillar.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#cbd5e1]/40 group-hover:text-[#00ff88] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                <p className="text-xs text-[#cbd5e1]/70 leading-relaxed mb-4">
                  {pillar.desc}
                </p>

                {/* Inspect Checklist Badge */}
                <div className="pt-3 border-t border-[#cbd5e1]/10 flex items-center justify-between text-[11px] font-mono text-[#00ff88]">
                  <span>{isExpanded ? 'Hide Boardroom Criteria' : 'View Jury Checkpoints'}</span>
                  <span className="text-xs">{isExpanded ? '▲' : '▼'}</span>
                </div>

                {/* Expanded Jury Questions / Criteria */}
                {isExpanded && (
                  <div className="mt-4 pt-3 border-t border-[#00ff88]/20 space-y-2 animate-fadeIn">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#cbd5e1]/60">
                      Jury Defense Prompts:
                    </div>
                    {pillar.questions.map((q, qIdx) => (
                      <div key={qIdx} className="text-xs text-white/90 flex items-start gap-2 bg-[#050816]/70 p-2 rounded-lg border border-[#cbd5e1]/10">
                        <span className="text-[#00ff88] font-mono font-bold mt-0.5">›</span>
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
