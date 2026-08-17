import React from 'react';

export const AtmosphereBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" style={{ pointerEvents: 'none' }}>
      {/* Black base */}
      <div className="absolute inset-0 bg-[#020604]" />

      {/* Slow pulsing emerald atmospheric ambient lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-radial from-[#0B5D3B]/15 via-[#063D29]/5 to-transparent blur-[140px] animate-pulse duration-[12000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] rounded-full bg-radial from-[#063D29]/20 via-[#0B5D3B]/5 to-transparent blur-[160px] animate-pulse duration-[16000ms]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-radial from-[#00E676]/5 via-[#0B5D3B]/3 to-transparent blur-[150px]" />

      {/* Large, extremely subtle Asgardian / Loki Rune Shapes (Slowly rotating/drifting, opacity ~3-5%) */}
      <div className="absolute top-[15%] right-[5%] w-[420px] h-[420px] opacity-[0.03] text-[#00E676] animate-spin duration-[90000ms] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="38" />
          <polygon points="50,12 83,70 17,70" />
          <polygon points="50,88 17,30 83,30" />
          <circle cx="50" cy="50" r="18" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[3%] w-[500px] h-[500px] opacity-[0.025] text-[#C9A227] animate-spin duration-[120000ms] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
          <circle cx="50" cy="50" r="48" />
          <path d="M50 2 L50 98 M2 50 L98 50 M16 16 L84 84 M16 84 L84 16" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="28" />
        </svg>
      </div>

      {/* Faint timeline grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00E676_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.02]" />
    </div>
  );
};
