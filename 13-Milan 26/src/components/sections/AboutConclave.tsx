import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Terminal, Layers, CheckCircle2 } from 'lucide-react';
import { MILAN_DATA } from '../../data/milanData';

export const AboutConclave: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>{MILAN_DATA.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-orbitron text-white tracking-tight">
            {MILAN_DATA.about.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Command Center Glass Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-shield-elevated rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-blue-500/30 relative overflow-hidden"
          >
            {/* Top HUD Corner Bracket */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-400" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-3 text-xs font-mono text-blue-300">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>CONCLAVE_BRIEFING_DOC // SYS-2026</span>
              </div>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-space font-medium">
                {MILAN_DATA.about.paragraph1}
              </p>

              <div className="p-5 rounded-xl bg-[#040D1A]/80 border-l-4 border-blue-500 border-y border-r border-slate-700/50 shadow-inner">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {MILAN_DATA.about.paragraph2}
                </p>
              </div>
            </div>

            {/* Strategic Pillars Footer */}
            <div className="pt-8 border-t border-slate-700/50 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Core Focus</div>
                <div className="text-sm font-semibold text-white font-space mt-1">
                  Collaborative Innovation
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase">Participants</div>
                <div className="text-sm font-semibold text-white font-space mt-1">
                  Industry & Academia
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Mission</div>
                <div className="text-sm font-semibold text-white font-space mt-1">
                  Real-World Impact
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Holographic Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Telemetry Card 1 */}
            <div className="metallic-card rounded-2xl p-6 flex-1 flex flex-col justify-center border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-blue-900/50 border border-blue-400/40 flex items-center justify-center text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-400 tracking-wider">
                    PARADIGM SHIFT
                  </div>
                  <div className="text-base font-bold text-white font-space">
                    Transforming Ideas to Impact
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Empowering aspiring talent through deep immersion with visionary industry pioneers,
                curated roundtables, and future-forward curriculum synthesis.
              </p>
            </div>

            {/* Telemetry Card 2 */}
            <div className="metallic-card rounded-2xl p-6 flex-1 flex flex-col justify-center border border-slate-700/60 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-red-950/50 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-red-400 tracking-wider">
                    LEADERSHIP CULTURE
                  </div>
                  <div className="text-base font-bold text-white font-space">
                    Shaping Future-Ready Talent
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">
                Instilling resilience, cross-functional vision, and technological readiness to lead in
                the rapidly shifting global landscape.
              </p>
            </div>

            {/* Security clearance tag */}
            <div className="px-4 py-3 rounded-xl bg-[#06101E] border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>SUMMIT ACCREDITATION VERIFIED</span>
              </div>
              <span className="text-blue-400 font-semibold">{MILAN_DATA.event.shieldClearance}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
