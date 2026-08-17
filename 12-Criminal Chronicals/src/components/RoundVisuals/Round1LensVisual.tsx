import React, { useState } from 'react';
import { Camera, ZoomIn, Eye, Layers } from 'lucide-react';

export const Round1LensVisual: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1.2);
  const [activeMarker, setActiveMarker] = useState<number | null>(1);

  const markers = [
    { id: 1, x: '32%', y: '28%', label: 'EVIDENCE #01', detail: 'Optical reflection anomaly detected' },
    { id: 2, x: '68%', y: '45%', label: 'PERSPECTIVE #02', detail: 'Shadow angle misalignment' },
    { id: 3, x: '45%', y: '72%', label: 'ANOMALY #03', detail: 'Displaced focal distance marker' }
  ];

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#000000] rounded-xl overflow-hidden border border-red-900/40 p-4 flex flex-col justify-between group">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs font-mono text-red-400 border-b border-red-900/30 pb-2 z-10">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-[#e31b23] animate-pulse" />
          <span>OPTICAL_ANALYSIS_RED_GRID_V2.0</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">RES: 4K UHD</span>
          <span className="px-1.5 py-0.5 rounded bg-red-950 text-[#e31b23] text-[10px] border border-red-600/40 font-bold">
            {zoomLevel.toFixed(1)}X MAG
          </span>
        </div>
      </div>

      {/* Main interactive lens frame */}
      <div className="relative my-3 flex-1 rounded-lg overflow-hidden border border-red-900/40 bg-black flex items-center justify-center">
        {/* Background perspective grid lines */}
        <div 
          className="absolute inset-0 bg-forensic-grid opacity-40 transition-transform duration-500"
          style={{ transform: `scale(${zoomLevel})` }}
        />

        {/* Central camera lens reticle */}
        <div className="relative w-48 h-48 rounded-full border border-red-600/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#e31b23]">
          <div className="absolute inset-2 rounded-full border border-dashed border-red-500/30 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-8 rounded-full border border-red-900/80" />
          
          {/* Target crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[1px] bg-red-600/30" />
            <div className="h-full w-[1px] bg-red-600/30" />
            <div className="w-12 h-12 rounded-full border border-[#e31b23]/50" />
          </div>

          {/* Central status */}
          <div className="text-center z-10 bg-black/95 px-3 py-1.5 rounded border border-red-600/40 backdrop-blur-md">
            <p className="text-[10px] font-mono text-[#e31b23] uppercase tracking-wider font-bold">Target Locked</p>
            <p className="text-xs font-mono text-slate-200">FOV: 84.2°</p>
          </div>
        </div>

        {/* Dynamic evidence markers */}
        {markers.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMarker(m.id)}
            style={{ left: m.x, top: m.y }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all duration-300 z-20 ${
              activeMarker === m.id 
                ? 'bg-[#e31b23] text-white scale-110 shadow-[0_0_15px_rgba(227,27,35,0.9)]' 
                : 'bg-black text-[#e31b23] border border-red-600/60 hover:scale-105'
            }`}
          >
            <span className="block text-[10px] font-mono font-bold w-4 h-4 flex items-center justify-center">
              0{m.id}
            </span>
          </button>
        ))}

        {/* Laser scanner line animation */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#e31b23] to-transparent animate-scanline-red shadow-[0_0_10px_#e31b23] opacity-80 pointer-events-none" />
      </div>

      {/* Interactive controls & active details */}
      <div className="z-10 bg-black p-2.5 rounded-lg border border-red-900/40 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#e31b23]" />
          <span className="font-mono text-slate-300 text-[11px]">
            {activeMarker !== null 
              ? `${markers.find(m => m.id === activeMarker)?.label}: ${markers.find(m => m.id === activeMarker)?.detail}`
              : 'Select marker for optical analysis'}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.3, 2.5))}
            className="p-1 rounded bg-red-950 text-slate-200 hover:text-white hover:bg-red-900 transition"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(1.2)}
            className="px-2 py-0.5 rounded bg-red-950 text-[10px] font-mono text-slate-400 hover:text-slate-200 transition"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
