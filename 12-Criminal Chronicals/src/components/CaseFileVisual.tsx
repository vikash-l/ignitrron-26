import React, { useState } from 'react';
import { Fingerprint, ShieldAlert, Cpu, Eye, FileSearch, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../config/eventData';

export const CaseFileVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'evidence' | 'analysis'>('dossier');

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse-subtle" />

      {/* Main Container Card */}
      <div className="relative bg-[#050b1c]/90 rounded-2xl border border-cyan-500/30 p-5 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top Case Header metadata line */}
        <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4 mb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-400 font-bold tracking-wider">CASE FILE: {EVENT_DATA.caseId}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-widest">
              STATUS: OPEN
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-slate-900/80 rounded-lg border border-slate-800 mb-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`py-1.5 rounded transition ${
              activeTab === 'dossier' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            DOSSIER
          </button>
          <button
            onClick={() => setActiveTab('evidence')}
            className={`py-1.5 rounded transition ${
              activeTab === 'evidence' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            EVIDENCE (03)
          </button>
          <button
            onClick={() => setActiveTab('analysis')}
            className={`py-1.5 rounded transition ${
              activeTab === 'analysis' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            ANALYSIS
          </button>
        </div>

        {/* Center Scanner Window */}
        <div className="relative rounded-xl border border-cyan-500/20 bg-[#020617] p-5 mb-4 overflow-hidden group">
          {/* Background grid */}
          <div className="absolute inset-0 bg-forensic-grid opacity-25" />

          {/* Laser scanning line */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline shadow-[0_0_15px_#06b6d4] opacity-80 pointer-events-none" />

          {/* Visual content based on tab */}
          {activeTab === 'dossier' && (
            <div className="relative z-10 flex flex-col items-center justify-center py-4 text-center">
              {/* Central Fingerprint Graphic */}
              <div className="relative w-28 h-28 rounded-full border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-500">
                <Fingerprint className="w-16 h-16 text-cyan-400/90 animate-pulse-subtle" />
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: '15s' }} />
              </div>

              <h4 className="font-heading font-bold text-lg text-white tracking-wide">
                FORENSIC INVESTIGATION
              </h4>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                CLASSIFICATION: IGNITRRON'26 DAY 01
              </p>

              {/* Dynamic Metadata grid inside dossier */}
              <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 text-left font-mono text-[11px]">
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">VENUE</span>
                  <span className="text-slate-200 font-semibold">{EVENT_DATA.venue}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">TIMING</span>
                  <span className="text-cyan-300 font-semibold">{EVENT_DATA.timing}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">TOTAL PRIZE POOL</span>
                  <span className="text-emerald-400 font-semibold">{EVENT_DATA.totalPrizePool}</span>
                </div>
                <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-500 block text-[9px]">EXPECTED PARTICIPANTS</span>
                  <span className="text-slate-200 font-semibold">70+ DETECTIVES</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'evidence' && (
            <div className="relative z-10 py-2 space-y-2 font-mono text-xs">
              {EVENT_DATA.rounds.map((r) => (
                <div key={r.id} className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold flex items-center justify-center">
                      {r.number}
                    </span>
                    <div>
                      <p className="text-slate-200 font-semibold text-[11px]">{r.title}</p>
                      <p className="text-[9px] text-cyan-400">{r.category.split('/')[1]?.trim()}</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    ACTIVE
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="relative z-10 py-3 space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-slate-900/80 border border-slate-800 text-left">
                <div className="flex items-center gap-2 text-cyan-400 text-[11px] font-semibold mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>DEDUCTIVE REASONING ENGINE</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Real-time pattern evaluation active. Cross-referencing visual cues, escape ciphers, and physical crime scene indicators.
                </p>
              </div>

              <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">ANALYSIS INTEGRITY</span>
                <span className="text-cyan-300 font-bold">100% VERIFIED</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer timestamp & coordinates */}
        <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800/80 pt-3">
          <div className="flex items-center gap-1.5">
            <Eye className="w-3 h-3 text-cyan-400" />
            <span>SCANNER_ID: SC-9940</span>
          </div>
          <span>GRID: 11.01° N / 76.95° E</span>
        </div>
      </div>
    </div>
  );
};
