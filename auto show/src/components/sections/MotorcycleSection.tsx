'use client';

import { Zap, ShieldCheck, Gauge } from 'lucide-react';

export default function MotorcycleSection() {
  return (
    <section
      id="motorcycle-section"
      className="relative w-full min-h-screen flex items-center justify-between px-6 lg:px-20 py-24 z-20 pointer-events-none select-none overflow-hidden"
    >
      <div className="max-w-xl pointer-events-auto my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 mb-6 text-[11px] font-mono tracking-widest text-accent">
          <Zap className="w-3.5 h-3.5" />
          <span>MOTORCYCLE EXPERIENCE</span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none mb-6 drop-shadow-2xl">
          TWO WHEELS. <br />
          <span className="text-accent text-glow">ONE FUTURE.</span>
        </h2>

        <p className="font-mono text-xs md:text-sm tracking-widest text-neutral-300 uppercase mb-8 leading-relaxed">
          PURPOSE-BUILT HYPERBIKE ARCHITECTURE COMBINING LIGHTWEIGHT TITANIUM TRELLIS CHASSIS WITH HIGH-OUTPUT ELECTRIC TORQUE VECTORING.
        </p>

        {/* Motorcycle Specs Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md mb-8">
          <div className="p-4 glass-panel rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-neutral-400 font-mono text-[10px] uppercase mb-1">
              <Gauge className="w-3.5 h-3.5 text-accent" />
              <span>TOP SPEED</span>
            </div>
            <span className="font-display text-2xl font-bold text-white">290 KM/H</span>
          </div>

          <div className="p-4 glass-panel rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-neutral-400 font-mono text-[10px] uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>DRY WEIGHT</span>
            </div>
            <span className="font-display text-2xl font-bold text-white">165 KG</span>
          </div>
        </div>

        <p className="font-sans text-xs text-neutral-400 max-w-md leading-relaxed">
          Designed for absolute rider connection. Featuring cornering ABS, active aero winglets, and high-frequency telemetry logging.
        </p>
      </div>
    </section>
  );
}
