import React from 'react';
import { 
  Users, 
  Clock, 
  MessageSquare, 
  Hourglass, 
  Presentation, 
  FileText, 
  Zap
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const EventHighlights: React.FC = () => {
  const highlights = [
    {
      label: 'Team Size',
      stat: '2–4',
      unit: 'Members',
      subtext: 'Multidisciplinary cohort',
      icon: Users,
      color: '#00ff88',
    },
    {
      label: 'Presentation',
      stat: '5',
      unit: 'Minutes',
      subtext: 'High-density venture pitch',
      icon: Clock,
      color: '#00c96b',
    },
    {
      label: 'Q&A',
      stat: '3',
      unit: 'Minutes',
      subtext: 'Jury cross-examination',
      icon: MessageSquare,
      color: '#f59e0b',
    },
    {
      label: 'Total Duration',
      stat: '8',
      unit: 'Minutes',
      subtext: 'Total stage window',
      icon: Hourglass,
      color: '#00ff88',
    },
    {
      label: 'Maximum Slides',
      stat: '5–6',
      unit: 'Slides',
      subtext: 'High-impact pitch deck',
      icon: Presentation,
      color: '#cbd5e1',
    },
    {
      label: 'Format',
      stat: 'PPT + BMC',
      unit: 'Canvas',
      subtext: 'Dual strategic deliverable',
      icon: FileText,
      color: '#00ff88',
    },
  ];

  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Executive Snapshot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Event <span className="oscorp-gradient-text">Highlights</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-xl mx-auto">
            Key operational specifications and benchmarking metrics at a glance.
          </p>
        </div>

        {/* Animated Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                onMouseEnter={() => playUiSound('hover')}
                className="group relative rounded-2xl glass-oscorp-elevated p-6 sm:p-7 border border-[#cbd5e1]/15 hover:border-[#00ff88]/60 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00ff88]/15 oscorp-cut"
              >
                {/* Header icon and badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#cbd5e1]/60">
                    METRIC // 0{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 group-hover:border-[#00ff88]/50 flex items-center justify-center text-[#cbd5e1] group-hover:text-[#00ff88] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#cbd5e1]/70 mb-1">
                  {item.label}
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold font-space text-white tracking-tight group-hover:text-[#00ff88] transition-colors">
                    {item.stat}
                  </span>
                  <span className="text-sm font-mono text-[#00ff88] font-bold">
                    {item.unit}
                  </span>
                </div>

                <div className="text-xs text-[#cbd5e1]/70 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                  {item.subtext}
                </div>

                {/* Animated scanline bar */}
                <div className="mt-4 w-full h-1 bg-[#050816] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-transparent via-[#00ff88] to-transparent w-full transition-transform duration-1000 group-hover:translate-x-full"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
