import React from 'react';
import { Target, Search, FileText, Presentation, Cpu, MessageSquare } from 'lucide-react';

export const ChallengeSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SELECT',
      description: 'Select a famous building or iconic structure from around the world.',
      icon: Target
    },
    {
      num: '02',
      title: 'RESEARCH',
      description: 'Collect detailed technical information, drawings, and engineering specs.',
      icon: Search
    },
    {
      num: '03',
      title: 'ANALYZE',
      description: 'Study the construction process, materials, structural elements, and load paths.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'PREPARE',
      description: 'Develop a PowerPoint presentation covering all 12 recommended technical topics.',
      icon: FileText
    },
    {
      num: '05',
      title: 'PRESENT',
      description: 'Present the structure and construction process clearly to the panel of judges.',
      icon: Presentation
    },
    {
      num: '06',
      title: 'INTERACT',
      description: 'Engage in a rigorous technical interaction and defense Q&A with judges.',
      icon: MessageSquare
    }
  ];

  return (
    <section id="challenge" className="py-24 bg-[#05080d] relative border-b border-[#1b2538]">
      <div className="site-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>COMPETITION WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            EVENT <span className="text-[#00d9ff]">FLOW</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "A structured 6-step journey from landmark selection to judge defense."
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#07111b] rounded-xl p-6 border border-[#1b2538] hover:border-[#00d9ff]/50 transition-all space-y-4 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-[#00d9ff]">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
