import React from 'react';
import { ShieldCheck, Leaf, CheckCircle2, RefreshCw } from 'lucide-react';

export const SafetySustainabilitySection: React.FC = () => {
  const safetyPoints = [
    'Worker Safety & Site PPE Protocols',
    'Structural Safety Factors & Redundancy',
    'Construction Risk Management Staging',
    'Temporary Falsework & Scaffolding Integrity',
    'Emergency Load Shedding & Dynamic Defense'
  ];

  const sustainabilityPoints = [
    'Material Efficiency & Local Stone Sourcing',
    'Construction Waste Reduction Techniques',
    'Passive Energy & Thermal Mass Cooling',
    'Environmental Impact & Site Preservation',
    'Multi-Centennial Lifecycle Durability'
  ];

  return (
    <section className="py-24 bg-[#0a0d16] relative border-t border-[#1e2538]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left: Safety Framework */}
          <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#06b6d4]/40 hud-corner shadow-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-[#262c40] pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/40 flex items-center justify-center text-[#06b6d4]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white uppercase">
                  SITE & STRUCTURAL SAFETY
                </h3>
                <span className="text-xs font-mono text-gray-400">RISK MANAGEMENT & STAGING</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Participants must demonstrate how their selected structure accounted for active site safety during high-elevation erection as well as long-term structural safety factors against collapse.
            </p>

            <div className="space-y-2.5">
              {safetyPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0b0e17] p-3 rounded border border-[#1e2538] text-xs font-mono text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sustainability */}
          <div className="glass-panel-accent rounded-2xl p-6 sm:p-8 border border-[#10b981]/40 hud-corner shadow-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-[#262c40] pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/40 flex items-center justify-center text-[#10b981]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white uppercase">
                  ENVIRONMENTAL SUSTAINABILITY
                </h3>
                <span className="text-xs font-mono text-gray-400">LIFECYCLE & MATERIAL EFFICIENCY</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Analyze how materials were sourced locally, how thermal efficiency reduces operational energy, and how long-term durability prevents premature demolition waste.
            </p>

            <div className="space-y-2.5">
              {sustainabilityPoints.map((pt, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#0b0e17] p-3 rounded border border-[#1e2538] text-xs font-mono text-gray-200">
                  <RefreshCw className="w-4 h-4 text-[#10b981] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
