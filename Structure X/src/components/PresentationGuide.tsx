import React, { useState } from 'react';
import { Presentation, Layout } from 'lucide-react';
import { PRESENTATION_SLIDES } from '../data/eventData';

export const PresentationGuide: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slide = PRESENTATION_SLIDES[activeSlide];

  return (
    <section id="presentation-guide" className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Presentation className="w-3.5 h-3.5" />
            <span>POWERPOINT CASE STUDY FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            BUILD THE <span className="text-[#00d9ff]">STORY</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "Recommended presentation structure covering the 12 core dimensions of structural analysis."
          </p>
          <p className="mt-2 text-xs font-mono text-gray-400">
            [NOTE: RECOMMENDED TECHNICAL STRUCTURE — TEAMS ARE NOT RESTRICTED TO A FIXED SLIDE COUNT]
          </p>
        </div>

        {/* 12 Recommended Slide Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {PRESENTATION_SLIDES.map((s, idx) => (
            <button
              key={s.slideNumber}
              onClick={() => setActiveSlide(idx)}
              className={`p-3 rounded-lg font-mono text-xs transition-all border text-left cursor-pointer h-16 flex flex-col justify-between ${
                activeSlide === idx
                  ? 'bg-[#00d9ff] text-[#05080d] font-bold border-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                  : 'bg-[#07111b] text-gray-400 border-[#1b2538] hover:border-gray-500 hover:text-white'
              }`}
            >
              <span className="text-[9px] block">TOPIC {s.slideNumber < 10 ? `0${s.slideNumber}` : s.slideNumber}</span>
              <span className="font-bold truncate text-[11px]">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Slide Preview Inspector */}
        <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#00d9ff]/30 hud-corner shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex justify-between items-start border-b border-[#1b2538] pb-4">
            <div>
              <span className="text-xs font-mono text-[#00d9ff] font-bold">
                SLIDE TOPIC {slide.slideNumber} • {slide.focus}
              </span>
              <h3 className="text-2xl font-mono font-bold text-white mt-1">
                {slide.title}
              </h3>
            </div>
            <div className="w-8 h-8 rounded bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff]">
              <Layout className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#07111b] p-4 rounded-xl border border-[#1b2538] space-y-2">
              <span className="text-[10px] font-mono text-gray-400 block">TECHNICAL CONTENT REQUIRED</span>
              <p className="text-xs text-gray-200 font-sans leading-relaxed">{slide.keyTechnicalContent}</p>
            </div>

            <div className="bg-[#07111b] p-4 rounded-xl border border-[#00d9ff]/30 space-y-2">
              <span className="text-[10px] font-mono text-[#00d9ff] font-bold block">RECOMMENDED VISUALS</span>
              <div className="space-y-1 text-xs font-mono text-gray-300">
                {slide.recommendedVisuals.map((vis, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#00d9ff]">•</span>
                    <span>{vis}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
