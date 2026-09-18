import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  RotateCw, 
  Crosshair, 
  Zap, 
  Eye 
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const Oscorp3DModelViewer: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 12, y: -15, z: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeView, setActiveView] = useState<'iso' | 'front' | 'tactical' | 'top'>('iso');
  const [renderMode, setRenderMode] = useState<'hologram' | 'standard' | 'xray'>('hologram');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotation loop
  useEffect(() => {
    if (!isAutoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: activeView === 'iso' ? 12 + Math.sin(Date.now() * 0.0012) * 5 : prev.x,
        y: (prev.y + 0.35) % 360,
        z: prev.z,
      }));
    }, 25);
    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging, activeView]);

  // Interactive mouse move / 3D tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setRotation(prev => ({
        x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.35)),
        y: (prev.y + deltaX * 0.45) % 360,
        z: prev.z,
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const setPresetView = (view: 'iso' | 'front' | 'tactical' | 'top') => {
    playUiSound('select');
    setActiveView(view);
    setIsAutoRotate(false);
    if (view === 'iso') {
      setRotation({ x: 12, y: -18, z: 0 });
    } else if (view === 'front') {
      setRotation({ x: 0, y: 0, z: 0 });
    } else if (view === 'tactical') {
      setRotation({ x: -10, y: 35, z: 5 });
    } else if (view === 'top') {
      setRotation({ x: 38, y: 0, z: 0 });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-full max-w-[480px] mx-auto rounded-3xl glass-oscorp-elevated border border-[#00ff88]/40 p-4 sm:p-5 shadow-2xl shadow-[#00ff88]/20 group overflow-hidden oscorp-cut-lg"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 3D Viewport Header */}
      <div className="flex items-center justify-between border-b border-[#cbd5e1]/15 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
          <span className="font-mono text-[11px] font-bold text-white tracking-wider">
            3D CAD // OSCORP_GLIDER_MK26
          </span>
        </div>

        {/* Live Coordinate Telemetry */}
        <div className="flex items-center gap-2 font-mono text-[10px] bg-[#050816] px-2.5 py-1 rounded-lg border border-[#cbd5e1]/15 text-[#cbd5e1]">
          <span className="text-[#00ff88]">PITCH:{Math.round(rotation.x)}°</span>
          <span className="text-[#f59e0b]">YAW:{Math.round(((rotation.y % 360) + 360) % 360)}°</span>
        </div>
      </div>

      {/* 3D Model Stage Canvas with True CSS 3D Perspective */}
      <div
        className="relative h-[360px] sm:h-[400px] w-full flex items-center justify-center select-none overflow-hidden rounded-2xl bg-[#050816]/95 border border-[#00ff88]/20 cursor-grab active:cursor-grabbing"
        style={{ perspective: '1100px' }}
        onMouseDown={handleMouseDown}
      >
        {/* Holographic Background Depth Matrix */}
        <div className="absolute inset-0 bg-oscorp-grid opacity-30 pointer-events-none" />
        
        {/* Ambient Hologram Radial Aura */}
        <div className="absolute w-72 h-72 rounded-full bg-[#00ff88]/15 blur-3xl pointer-events-none" />

        {/* 3D Rotating Holographic Target Rings */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300"
          style={{
            transform: `rotateX(${rotation.x * 0.4}deg) rotateY(${rotation.y * 0.4}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="w-64 h-64 rounded-full border border-dashed border-[#00ff88]/30 animate-radar-sweep" />
          <div className="w-80 h-80 rounded-full border border-dotted border-[#00c96b]/20" />
          <div className="w-48 h-48 rounded-full border border-[#f59e0b]/20" />
        </div>

        {/* 3D Holographic Depth Layer Base: Grid Floor Plane (Z: -60px) */}
        <div 
          className="absolute bottom-6 w-72 h-44 rounded-full border border-[#00ff88]/30 bg-gradient-to-t from-[#00ff88]/10 to-transparent pointer-events-none transition-transform duration-200"
          style={{
            transform: `rotateX(75deg) rotateZ(${rotation.y}deg) translateZ(-60px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="w-full h-full rounded-full border border-dashed border-[#00ff88]/40 animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        {/* 3D Centered Model Entity with Dynamic Lighting & Slices */}
        <div
          className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-75"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Backside Shadow Plane */}
          <div 
            className="absolute w-60 h-60 rounded-full bg-black/60 blur-xl pointer-events-none"
            style={{ transform: 'translateZ(-40px)' }}
          />

          {/* Model Image Layer with dynamic X-Ray / Holographic filters */}
          <div
            className="relative transition-all duration-300 pointer-events-none"
            style={{
              transform: 'translateZ(10px)',
              filter:
                renderMode === 'hologram'
                  ? 'drop-shadow(0 0 25px rgba(0,255,136,0.65)) drop-shadow(0 15px 35px rgba(0,0,0,0.9))'
                  : renderMode === 'xray'
                  ? 'invert(0.9) hue-rotate(90deg) contrast(1.4) drop-shadow(0 0 20px rgba(0,255,136,0.8))'
                  : 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))',
            }}
          >
            <img
              src="/business-model-canvas/oscorp_goblin.png"
              alt="Oscorp Corporate Innovation 3D Model"
              className="max-h-[310px] sm:max-h-[340px] w-auto object-contain pointer-events-none select-none"
              draggable={false}
            />

            {/* Holographic Laser Scanline */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent animate-scanline pointer-events-none shadow-[0_0_15px_#00ff88]" />
          </div>

          {/* 3D Floating Flight HUD Reticles & Engine Thruster Particle Accents (Z: +45px) */}
          <div 
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{ transform: 'translateZ(45px)' }}
          >
            {/* Center Lock Reticle */}
            <div className="absolute top-[28%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#00ff88]/60 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping" />
            </div>

            {/* Glider Thruster Glow Indicator */}
            <div className="absolute bottom-[24%] right-[22%] flex items-center gap-1 bg-[#050816]/90 border border-[#f59e0b]/50 px-2 py-0.5 rounded text-[9px] font-mono text-[#f59e0b] backdrop-blur-md">
              <Zap className="w-2.5 h-2.5 animate-pulse" />
              <span>THRUST: 98.4%</span>
            </div>
          </div>
        </div>

        {/* Viewport Corner HUD Accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00ff88]/60 pointer-events-none z-20" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#00ff88]/60 pointer-events-none z-20" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#00ff88]/60 pointer-events-none z-20" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#00ff88]/60 pointer-events-none z-20" />

        {/* Telemetry Chips */}
        <div className="absolute top-3 left-3 bg-[#050816]/85 border border-[#00ff88]/30 px-2.5 py-1 rounded-lg text-[10px] font-mono text-[#00ff88] flex items-center gap-1.5 backdrop-blur-md z-20">
          <Crosshair className="w-3 h-3 text-[#00ff88] animate-spin" />
          <span>VELOCITY: MACH 2.4</span>
        </div>

        <div className="absolute top-3 right-3 bg-[#050816]/85 border border-[#f59e0b]/30 px-2 py-1 rounded-lg text-[9px] font-mono text-[#f59e0b] uppercase z-20">
          {renderMode.toUpperCase()} VIEW
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#050816]/80 px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono text-[#cbd5e1]/60 backdrop-blur-md pointer-events-none z-20">
          Drag to rotate in 3D • Double click to reset
        </div>
      </div>

      {/* Projection Angle & Render Mode Controls */}
      <div className="mt-3.5 pt-3 border-t border-[#cbd5e1]/10 flex flex-wrap items-center justify-between gap-2">
        {/* Preset Angle Buttons */}
        <div className="flex items-center gap-1">
          {[
            { id: 'iso', label: '3D Iso' },
            { id: 'front', label: 'Front' },
            { id: 'tactical', label: 'Tactical' },
            { id: 'top', label: 'Top CAD' },
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => setPresetView(preset.id as any)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                activeView === preset.id
                  ? 'bg-[#00ff88] text-[#050816] font-bold shadow-md shadow-[#00ff88]/30'
                  : 'bg-[#050816] text-[#cbd5e1]/70 hover:text-white border border-[#cbd5e1]/15'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Visual Mode Controls */}
        <div className="flex items-center gap-1.5">
          {/* Mode Switcher */}
          <button
            onClick={() => {
              playUiSound('click');
              setRenderMode(prev => prev === 'hologram' ? 'xray' : prev === 'xray' ? 'standard' : 'hologram');
            }}
            className="p-1.5 rounded-lg bg-[#050816] border border-[#cbd5e1]/15 text-[#cbd5e1] hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-colors text-xs font-mono flex items-center gap-1"
            title="Switch 3D Shader Filter"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          {/* Auto Rotation Toggle */}
          <button
            onClick={() => {
              playUiSound('click');
              setIsAutoRotate(prev => !prev);
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
              isAutoRotate
                ? 'bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/40'
                : 'bg-[#050816] text-[#cbd5e1]/70 hover:text-white border border-[#cbd5e1]/15'
            }`}
          >
            <RotateCw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} />
            <span>{isAutoRotate ? 'Auto 3D' : 'Paused'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
