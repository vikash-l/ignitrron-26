import React, { useState, useEffect } from 'react';
import { RotateCw, Crosshair, Zap } from 'lucide-react';
import { MilesMoralesPoster } from './MilesMoralesPoster';

export const IsometricModelViewer: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 15, y: -20 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeView, setActiveView] = useState<'iso' | 'front' | 'side' | 'top'>('iso');

  useEffect(() => {
    if (!isAutoRotate || activeView !== 'iso') return;
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: 15 + Math.sin(Date.now() * 0.0015) * 6,
        y: prev.y + 0.4,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotate, activeView]);

  const setPresetView = (view: 'iso' | 'front' | 'side' | 'top') => {
    setActiveView(view);
    setIsAutoRotate(false);
    if (view === 'iso') {
      setRotation({ x: 15, y: -20 });
    } else if (view === 'front') {
      setRotation({ x: 0, y: 0 });
    } else if (view === 'side') {
      setRotation({ x: 0, y: 45 });
    } else if (view === 'top') {
      setRotation({ x: 30, y: 0 });
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-[#0a0d18]/90 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.15)] group overflow-hidden">
      {/* Top Bar / CAD Viewport Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff0055] animate-pulse" />
          <span className="font-mono-tech text-xs text-cyan-400 tracking-wider font-semibold">
            VIEWPORT://ISO_BRACKET_V26.CAD
          </span>
        </div>
        <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded border border-white/10 text-[11px] font-mono-tech text-slate-300">
          <span className="text-[#ff0055]">X:{Math.round(rotation.x)}°</span>
          <span className="text-[#00f0ff]">Y:{Math.round(rotation.y % 360)}°</span>
        </div>
      </div>

      {/* Center Viewport Area: High-Quality Miles Morales Inspired Visual */}
      <div
        className="relative h-64 sm:h-72 flex items-center justify-center select-none overflow-hidden rounded-xl bg-black/40 border border-cyan-500/15"
        style={{ perspective: '1000px' }}
      >
        {/* Holographic HUD Grid & Scanline */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-scanline pointer-events-none" />

        {/* Rotating Circular CAD HUD Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 rounded-full border border-dashed border-[#ff0055]/30 animate-spin-gear" />
          <div className="w-64 h-64 rounded-full border border-dashed border-[#00f0ff]/20 animate-spin-gear-reverse" />
          <div className="w-40 h-40 rounded-full border border-dotted border-[#9d4edd]/30" />
        </div>

        {/* Target HUD Reticle Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00f0ff]/70 pointer-events-none z-10" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00f0ff]/70 pointer-events-none z-10" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#ff0055]/70 pointer-events-none z-10" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#ff0055]/70 pointer-events-none z-10" />

        {/* Miles Morales Poster Visual */}
        <MilesMoralesPoster rotation={rotation} activeView={activeView} />

        {/* Dimension & Telemetry Callout Badges */}
        <div className="absolute top-2 left-2 bg-black/70 border border-cyan-500/40 px-2.5 py-1 rounded-md text-[10px] font-mono-tech text-cyan-300 flex items-center gap-1.5 backdrop-blur-md z-10">
          <Crosshair className="w-3 h-3 text-cyan-400 animate-spin" />
          <span>DIM: 120 x 85 x 45 mm</span>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 border border-[#ff0055]/40 px-2.5 py-1 rounded-md text-[10px] font-mono-tech text-[#ff0055] flex items-center gap-1.5 backdrop-blur-md z-10">
          <Zap className="w-3 h-3 text-[#ff0055]" />
          <span>TOL: ±0.02 mm</span>
        </div>

        {/* View Mode Tag */}
        <div className="absolute top-2 right-2 bg-black/70 border border-purple-500/40 px-2 py-0.5 rounded text-[9px] font-mono-tech text-purple-300 uppercase z-10">
          MODE: {activeView.toUpperCase()}
        </div>
      </div>

      {/* Projection View Controls */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPresetView('iso')}
            className={`px-2.5 py-1 rounded text-xs font-mono-tech transition-all cursor-pointer ${
              activeView === 'iso'
                ? 'bg-[#ff0055] text-white font-bold shadow-[0_0_10px_rgba(255,0,85,0.6)]'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Isometric
          </button>
          <button
            onClick={() => setPresetView('front')}
            className={`px-2.5 py-1 rounded text-xs font-mono-tech transition-all cursor-pointer ${
              activeView === 'front'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Front
          </button>
          <button
            onClick={() => setPresetView('side')}
            className={`px-2.5 py-1 rounded text-xs font-mono-tech transition-all cursor-pointer ${
              activeView === 'side'
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Side
          </button>
          <button
            onClick={() => setPresetView('top')}
            className={`px-2.5 py-1 rounded text-xs font-mono-tech transition-all cursor-pointer ${
              activeView === 'top'
                ? 'bg-purple-600 text-white font-bold shadow-[0_0_10px_rgba(157,78,221,0.6)]'
                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Top
          </button>
        </div>

        <button
          onClick={() => setIsAutoRotate(prev => !prev)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono-tech transition-all cursor-pointer ${
            isAutoRotate
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/5 text-slate-400 hover:text-white'
          }`}
          title="Toggle Auto Rotation"
        >
          <RotateCw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} />
          <span>{isAutoRotate ? 'Rotating' : 'Paused'}</span>
        </button>
      </div>
    </div>
  );
};
