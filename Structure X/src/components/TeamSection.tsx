import React from 'react';
import { Users, User, Zap } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#7c5cff]/30 text-[#7c5cff] text-xs font-mono mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>TEAM FORMAT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            TWO ENGINEERS. <span className="text-[#7c5cff]">ONE STRUCTURE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "2 Members per Team • Joint Research, Structural Analysis & Defense"
          </p>
        </div>

        {/* Two Engineer Nodes Connecting to Shared Landmark Case Study */}
        <div className="glass-panel-accent rounded-2xl p-8 sm:p-12 border border-[#7c5cff]/30 hud-corner shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            {/* Engineer Node 1 */}
            <div className="bg-[#07111b] rounded-xl p-6 border border-[#00d9ff]/40 space-y-3 relative group">
              <div className="w-14 h-14 rounded-full bg-[#00d9ff]/20 border-2 border-[#00d9ff] flex items-center justify-center text-[#00d9ff] mx-auto shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                <User className="w-7 h-7" />
              </div>
              <h4 className="text-base font-mono font-bold text-white">
                ENGINEER 01
              </h4>
              <p className="text-xs text-gray-400 font-sans">
                Lead Researcher & Construction Logistics Analyst
              </p>
            </div>

            {/* Central Landmark Node */}
            <div className="relative py-6 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-[#07111b] border-2 border-[#7c5cff] flex items-center justify-center text-[#7c5cff] shadow-[0_0_30px_rgba(124,92,255,0.6)] animate-pulse">
                <Zap className="w-10 h-10" />
              </div>
              <span className="mt-3 text-xs font-mono font-bold text-white uppercase tracking-wider">
                CHOSEN LANDMARK
              </span>
              <span className="text-[10px] font-mono text-[#7c5cff]">
                SHARED CASE STUDY
              </span>
            </div>

            {/* Engineer Node 2 */}
            <div className="bg-[#07111b] rounded-xl p-6 border border-[#ff3158]/40 space-y-3 relative group">
              <div className="w-14 h-14 rounded-full bg-[#ff3158]/20 border-2 border-[#ff3158] flex items-center justify-center text-[#ff3158] mx-auto shadow-[0_0_20px_rgba(255,49,88,0.4)]">
                <User className="w-7 h-7" />
              </div>
              <h4 className="text-base font-mono font-bold text-white">
                ENGINEER 02
              </h4>
              <p className="text-xs text-gray-400 font-sans">
                Structural Mechanics & Defense Specialist
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-400 font-mono border-t border-[#1b2538] pt-6 max-w-2xl mx-auto">
            Both team members contribute equally to researching the structural dimensions, assembling the slide deck, and defending technical choices during the judge defense round.
          </p>
        </div>
      </div>
    </section>
  );
};
