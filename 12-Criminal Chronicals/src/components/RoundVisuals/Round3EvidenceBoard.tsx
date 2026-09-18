import React, { useState } from 'react';
import { Search, MapPin, Fingerprint, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Round3EvidenceBoard: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('node-1');

  const nodes = [
    { id: 'node-1', label: 'EVIDENCE #01', type: 'Fingerprint Scan', detail: 'High-clarity whorl pattern found on door handle' },
    { id: 'node-2', label: 'STATEMENT #04', type: 'Witness Testimony', detail: 'Inconsistency noted in 14:15 timeline window' },
    { id: 'node-3', label: 'ANOMALY #09', type: 'Digital Artifact', detail: 'Timestamp mismatch on security logs' }
  ];

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#000000] rounded-xl overflow-hidden border border-red-900/50 p-4 flex flex-col justify-between group shadow-[0_0_20px_rgba(193,18,31,0.2)]">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-red-400 border-b border-red-900/30 pb-2 z-10">
        <div className="flex items-center gap-2 max-w-full overflow-hidden">
          <Search className="w-4 h-4 shrink-0 text-[#e31b23] animate-pulse" />
          <span className="truncate">DIGITAL_CRIME_SCENE_BOARD_V2.0</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#e31b23] animate-ping" />
          <span className="text-[#e31b23] font-mono text-[10px] font-bold whitespace-nowrap">CASE VERDICT READY</span>
        </div>
      </div>

      {/* Main Evidence Board Canvas */}
      <div className="relative my-3 flex-1 rounded-lg overflow-hidden border border-red-900/40 bg-black p-4 flex flex-col justify-between">
        {/* Background SVG Crimson Connected Threads */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
          <line x1="20%" y1="35%" x2="50%" y2="60%" stroke="#e31b23" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="50%" y1="60%" x2="80%" y2="35%" stroke="#c1121f" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="50%" cy="60%" r="4" fill="#e31b23" />
        </svg>

        {/* Evidence Pins Row */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-2">
          {nodes.map((n) => (
            <button
              key={n.id}
              onClick={() => setSelectedNode(n.id)}
              className={`p-2.5 rounded-lg border text-left transition-all duration-300 flex flex-col justify-between ${
                selectedNode === n.id
                  ? 'bg-red-950/80 border-[#e31b23] text-white shadow-[0_0_15px_rgba(227,27,35,0.4)] scale-102'
                  : 'bg-black border-red-900/40 text-slate-400 hover:border-red-600/50 hover:bg-slate-950'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black text-[#e31b23] border border-red-600/40 font-bold">
                  {n.label}
                </span>
                <MapPin className={`w-3 h-3 ${selectedNode === n.id ? 'text-[#e31b23]' : 'text-slate-600'}`} />
              </div>
              <span className="text-xs font-semibold text-slate-200 truncate">{n.type}</span>
            </button>
          ))}
        </div>

        {/* Selected Evidence Detail Box */}
        <div className="relative z-10 my-2 p-3 rounded-lg bg-black border border-red-900/30 flex items-start gap-3">
          <div className="p-2 rounded bg-red-950 border border-red-600/40 text-[#e31b23] shrink-0">
            {selectedNode === 'node-1' ? (
              <Fingerprint className="w-5 h-5" />
            ) : selectedNode === 'node-2' ? (
              <FileText className="w-5 h-5" />
            ) : (
              <ShieldAlert className="w-5 h-5" />
            )}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-mono text-[#e31b23] uppercase font-bold">
              {nodes.find(n => n.id === selectedNode)?.label} — {nodes.find(n => n.id === selectedNode)?.type}
            </h4>
            <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
              {nodes.find(n => n.id === selectedNode)?.detail}
            </p>
          </div>
        </div>

        {/* Master Deduction Progress Bar */}
        <div className="relative z-10 bg-black p-2 rounded border border-red-900/30 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300 text-[11px]">CASE RECONSTRUCTION COMPLETE</span>
          </div>
          <span className="text-[#e31b23] text-[10px] font-bold">SOLVE ACCURACY: 98.4%</span>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 bg-black p-2.5 rounded-lg border border-red-900/40 flex items-center justify-between text-xs">
        <span className="font-mono text-slate-300 text-[11px]">
          Round 03: Analyze evidence, synthesize facts & submit final deduction
        </span>
        <span className="text-[#e31b23] font-mono text-[10px] uppercase font-bold">VERDICT READY →</span>
      </div>
    </div>
  );
};
