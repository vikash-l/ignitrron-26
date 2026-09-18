import React from 'react';
import { Ruler, Activity } from 'lucide-react';


interface BlueprintCanvasOverlayProps {
  active: boolean;
  onClose: () => void;
}

export const BlueprintCanvasOverlay: React.FC<BlueprintCanvasOverlayProps> = ({ active, onClose }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none transition-all duration-500 animate-in fade-in">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[#040914]/40 bg-blueprint-grid-dense opacity-80" />

      {/* Floating Blueprint HUD Markers */}
      <div className="absolute top-24 left-6 flex items-center gap-3 bg-[#081326]/90 border border-[#06b6d4]/60 px-4 py-2 rounded font-mono text-xs text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
        <Activity className="w-4 h-4 animate-spin text-[#06b6d4]" />
        <span>STRUCTURAL BLUEPRINT MODE: ACTIVE</span>
        <span className="text-gray-400">| SCALE 1:500</span>
      </div>

      {/* Coordinate & Measurement Callouts */}
      <div className="absolute top-24 right-6 hidden lg:flex items-center gap-4 text-[10px] font-mono text-cyan-400/80 bg-[#0a182d]/90 px-3 py-1.5 border border-cyan-500/30 rounded">
        <span>X: 27.1751° N</span>
        <span>Y: 78.0422° E</span>
        <span>LOAD PATH: SYMMETRIC</span>
      </div>

      {/* Blueprint Border Rulers */}
      <div className="absolute top-0 left-0 right-0 h-4 border-b border-cyan-500/30 flex justify-between px-8 text-[8px] font-mono text-cyan-500/50">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>| {i * 10}M</span>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-4 border-r border-cyan-500/30 flex flex-col justify-between py-12 text-[8px] font-mono text-cyan-500/50">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>— {i * 10}M</span>
        ))}
      </div>

      {/* Interactive Exit Callout */}
      <div className="fixed bottom-6 right-6 pointer-events-auto z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#06b6d4] hover:bg-[#0891b2] text-[#070e1b] font-mono font-bold text-xs shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all transform hover:scale-105"
        >
          <Ruler className="w-4 h-4" />
          <span>EXIT BLUEPRINT MODE</span>
        </button>
      </div>
    </div>
  );
};
