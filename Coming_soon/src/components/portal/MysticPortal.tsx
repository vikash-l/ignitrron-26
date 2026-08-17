import React from 'react';

interface MysticPortalProps {
  reducedMotion?: boolean;
  className?: string;
}

export const MysticPortal: React.FC<MysticPortalProps> = ({
  reducedMotion = false,
  className = '',
}) => {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      
      {/* LAYER 1: Deep Volumetric Atmospheric Glow & Singularity Halo */}
      <div 
        className="absolute w-[140%] h-[140%] rounded-full opacity-40 blur-[90px] animate-portal-pulse pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(53, 230, 161, 0.45) 0%, rgba(22, 163, 106, 0.25) 35%, rgba(10, 21, 18, 0.1) 65%, transparent 80%)',
        }}
      />

      {/* LAYER 5 (Core Background): Soft Central Energy Lens */}
      <div 
        className="absolute w-[65%] h-[65%] rounded-full opacity-60 blur-[30px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 255, 203, 0.35) 0%, rgba(22, 163, 106, 0.2) 50%, transparent 75%)',
        }}
      />

      {/* SVG Multi-Layered Mystical Dimensional Rings */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full relative z-0 overflow-visible"
        fill="none"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="emeraldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7CFFCB" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#35E6A1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#16A36A" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="emeraldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#35E6A1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0A1512" stopOpacity="0.1" />
          </linearGradient>

          <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="strongGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LAYER 2: Outermost Technical Arcane Track (Slow CW) */}
        <g className={reducedMotion ? '' : 'animate-portal-cw-slow'} style={{ transformOrigin: '300px 300px' }}>
          {/* Main outer boundary */}
          <circle
            cx="300"
            cy="300"
            r="285"
            stroke="#16A36A"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="4 8"
          />
          <circle
            cx="300"
            cy="300"
            r="272"
            stroke="#35E6A1"
            strokeWidth="1.2"
            strokeOpacity="0.45"
            strokeDasharray="16 12 4 12"
          />
          {/* Cardinal & ordinal rune nodes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x = 300 + 272 * Math.cos(rad);
            const y = 300 + 272 * Math.sin(rad);
            return (
              <g key={`outer-node-${idx}`}>
                <circle cx={x} cy={y} r="2.5" fill="#7CFFCB" filter="url(#emeraldGlow)" />
                <line
                  x1={300 + 264 * Math.cos(rad)}
                  y1={300 + 264 * Math.sin(rad)}
                  x2={300 + 280 * Math.cos(rad)}
                  y2={300 + 280 * Math.sin(rad)}
                  stroke="#35E6A1"
                  strokeWidth="1"
                  strokeOpacity="0.7"
                />
              </g>
            );
          })}
        </g>

        {/* LAYER 3: Sacred Geometric Interlocking Polygons & Arcane Inscription (Counter-CW) */}
        <g className={reducedMotion ? '' : 'animate-portal-ccw-slow'} style={{ transformOrigin: '300px 300px' }}>
          {/* 12-pointed inscribed star / multi-square geometry */}
          <rect
            x="95"
            y="95"
            width="410"
            height="410"
            fill="none"
            stroke="#16A36A"
            strokeWidth="0.9"
            strokeOpacity="0.35"
          />
          <rect
            x="95"
            y="95"
            width="410"
            height="410"
            fill="none"
            stroke="#35E6A1"
            strokeWidth="0.9"
            strokeOpacity="0.3"
            transform="rotate(30 300 300)"
          />
          <rect
            x="95"
            y="95"
            width="410"
            height="410"
            fill="none"
            stroke="#16A36A"
            strokeWidth="0.9"
            strokeOpacity="0.35"
            transform="rotate(60 300 300)"
          />

          {/* Geometric Inner Boundary Circle */}
          <circle
            cx="300"
            cy="300"
            r="230"
            stroke="#35E6A1"
            strokeWidth="1.5"
            strokeOpacity="0.5"
            strokeDasharray="60 15 30 15"
          />

          {/* Inscribed mystic ticks */}
          {Array.from({ length: 24 }).map((_, idx) => {
            const angle = (idx * 15 * Math.PI) / 180;
            const x1 = 300 + 224 * Math.cos(angle);
            const y1 = 300 + 224 * Math.sin(angle);
            const x2 = 300 + 230 * Math.cos(angle);
            const y2 = 300 + 230 * Math.sin(angle);
            return (
              <line
                key={`tick-${idx}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#7CFFCB"
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
            );
          })}
        </g>

        {/* LAYER 4: Bright Arcane Energy Glyphs & Fragmented Rings (Faster CW) */}
        <g className={reducedMotion ? '' : 'animate-portal-cw-medium'} style={{ transformOrigin: '300px 300px' }}>
          {/* High-energy segmented arcs */}
          <circle
            cx="300"
            cy="300"
            r="185"
            stroke="url(#emeraldGrad1)"
            strokeWidth="2"
            strokeDasharray="90 40 15 40 60 30"
            filter="url(#emeraldGlow)"
          />
          <circle
            cx="300"
            cy="300"
            r="170"
            stroke="#7CFFCB"
            strokeWidth="1"
            strokeOpacity="0.75"
            strokeDasharray="2 12"
            className="animate-rune-shimmer"
          />

          {/* Mysterious Glyphic Runes / Angular Marks */}
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 300 + 185 * Math.cos(rad);
            const cy = 300 + 185 * Math.sin(rad);
            return (
              <g key={`glyph-${idx}`} transform={`rotate(${angle} ${cx} ${cy})`}>
                <polygon
                  points={`${cx},${cy - 5} ${cx + 4},${cy + 4} ${cx - 4},${cy + 4}`}
                  fill="#7CFFCB"
                  filter="url(#strongGlow)"
                />
              </g>
            );
          })}
        </g>

        {/* Inner Counter-Rotating Focal Core Ring (Fast CCW) */}
        <g className={reducedMotion ? '' : 'animate-portal-ccw-medium'} style={{ transformOrigin: '300px 300px' }}>
          <circle
            cx="300"
            cy="300"
            r="135"
            stroke="#35E6A1"
            strokeWidth="1.8"
            strokeDasharray="40 25 15 25"
            strokeOpacity="0.65"
            filter="url(#emeraldGlow)"
          />
          <circle
            cx="300"
            cy="300"
            r="105"
            stroke="#16A36A"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="8 8"
          />
          {/* Core Energy Points */}
          {[0, 90, 180, 270].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x = 300 + 135 * Math.cos(rad);
            const y = 300 + 135 * Math.sin(rad);
            return (
              <circle
                key={`core-node-${idx}`}
                cx={x}
                cy={y}
                r="3"
                fill="#7CFFCB"
                filter="url(#strongGlow)"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
