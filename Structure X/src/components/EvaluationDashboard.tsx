import React, { useState } from 'react';
import { Award, Zap } from 'lucide-react';
import { EVALUATION_CRITERIA } from '../data/eventData';

export const EvaluationDashboard: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const selected = EVALUATION_CRITERIA[activeIdx];

  return (
    <section id="evaluation" className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>OFFICIAL EVALUATION METRICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            WHAT <span className="text-[#00d9ff]">MATTERS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "Evaluation focuses strictly on technical accuracy, research depth, constructional understanding, presentation quality, and clarity."
          </p>
        </div>

        {/* 5 Official Evaluation Criteria Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {EVALUATION_CRITERIA.map((criterion, idx) => (
            <div
              key={criterion.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-[#07111b] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.3)] ring-1 ring-[#00d9ff]'
                  : 'bg-[#07111b]/60 border-[#1b2538] hover:border-gray-500'
              }`}
            >
              <div className="text-[10px] font-mono text-[#00d9ff] font-bold block mb-1">
                CRITERION 0{idx + 1}
              </div>
              <h4 className="text-xs font-mono font-bold text-white uppercase">
                {criterion.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Active Criterion Details Box */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-[#1b2538] pb-3">
            <span className="text-xs font-mono text-[#00d9ff] font-bold">
              EVALUATION AXIS: {selected.title}
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              JUDGING CRITERIA
            </span>
          </div>

          <p className="text-base text-gray-200 font-sans leading-relaxed">
            {selected.description}
          </p>

          <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-2">
            <span className="text-[10px] font-mono text-[#7c5cff] font-bold block">PRIMARY FOCUS AREAS</span>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs text-gray-300">
              {selected.focusAreas.map((fa, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#05080d] p-2.5 rounded border border-gray-800">
                  <Zap className="w-3.5 h-3.5 text-[#00d9ff]" />
                  <span>{fa}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
