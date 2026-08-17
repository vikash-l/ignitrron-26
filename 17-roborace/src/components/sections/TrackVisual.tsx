import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Flag, Compass, Zap, HelpCircle, CheckCircle } from 'lucide-react';

interface Checkpoint {
  name: string;
  progress: number; // 0 to 1
  x: number;
  y: number;
  icon: React.ReactNode;
}

export const TrackVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [carPos, setCarPos] = useState({ x: 40, y: 30, angle: 0 });
  const [activeCheckpoint, setActiveCheckpoint] = useState<number>(0);

  // Scroll tracking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const checkpoints: Checkpoint[] = [
    { name: "START", progress: 0.05, x: 50, y: 30, icon: <Flag className="h-3 w-3 text-emerald-400" /> },
    { name: "OBSTACLE ZONE", progress: 0.32, x: 230, y: 45, icon: <HelpCircle className="h-3 w-3 text-sky-400" /> },
    { name: "TECHNICAL ZONE", progress: 0.55, x: 120, y: 110, icon: <Compass className="h-3 w-3 text-amber-400" /> },
    { name: "MAXIMUM CHALLENGE", progress: 0.78, x: 300, y: 125, icon: <Zap className="h-3 w-3 text-red-500" /> },
    { name: "FINISH", progress: 0.95, x: 360, y: 75, icon: <CheckCircle className="h-3 w-3 text-sky-400" /> }
  ];

  // Map scroll progress to track coordinates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    // Clamp latest between 0 and 1
    const clampedProgress = Math.max(0, Math.min(latest, 1));
    const targetLength = clampedProgress * length;

    // Get current coordinate
    const point = path.getPointAtLength(targetLength);

    // Get a point slightly ahead to compute rotation tangent angle
    const stepAhead = 2; // px
    const pointAhead = path.getPointAtLength(Math.min(length, targetLength + stepAhead));
    
    const dx = pointAhead.x - point.x;
    const dy = pointAhead.y - point.y;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * (180 / Math.PI);

    setCarPos({ x: point.x, y: point.y, angle: angleDeg });

    // Determine active checkpoint
    let closestCheckpoint = 0;
    let minDistance = 9999;
    checkpoints.forEach((cp, idx) => {
      const dist = Math.abs(clampedProgress - cp.progress);
      if (dist < minDistance) {
        minDistance = dist;
        closestCheckpoint = idx;
      }
    });

    if (minDistance < 0.15) {
      setActiveCheckpoint(closestCheckpoint);
    } else {
      setActiveCheckpoint(-1);
    }
  });

  // Set initial position once SVG binds
  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const point = path.getPointAtLength(0);
      setCarPos(prev => ({ ...prev, x: point.x, y: point.y }));
    }
  }, []);

  return (
    <section ref={containerRef} id="trackVisual" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-racing opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="RACE TRACK MATRIX"
          subtitle="A top-down interactive schematic mapping critical turns and speed zones."
          badge="THE CIRCUIT"
        />

        <div className="relative border border-zinc-800 bg-zinc-900/10 backdrop-blur-md rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center shadow-2xl overflow-hidden min-h-[400px]">
          
          {/* HUD overlay grid */}
          <div className="absolute top-4 left-6 text-[9px] font-mono text-slate-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            <span>TRACK_TELEMETRY: RUNNING</span>
          </div>

          <div className="absolute top-4 right-6 text-[9px] font-mono text-slate-500">
            GRID_SCALE: 1:100
          </div>

          {/* Glowing Race Track SVG */}
          <div className="w-full max-w-3xl aspect-[16/9] relative">
            <svg className="w-full h-full" viewBox="0 0 400 160" fill="none">
              
              {/* Outer Track glow line */}
              <path 
                d="M 40 30 Q 150 10 230 45 T 120 110 Q 180 150 300 125 T 370 75" 
                stroke="rgba(56, 189, 248, 0.15)" 
                strokeWidth="10" 
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Core Silver track */}
              <path 
                ref={pathRef}
                id="hud-track-svg-path"
                d="M 40 30 Q 150 10 230 45 T 120 110 Q 180 150 300 125 T 370 75" 
                stroke="#cbd5e1" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              />

              {/* Track Center Lane Dash */}
              <path 
                d="M 40 30 Q 150 10 230 45 T 120 110 Q 180 150 300 125 T 370 75" 
                stroke="#060608" 
                strokeWidth="0.8" 
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 4"
              />

              {/* Dynamic scroll progress highlights */}
              {checkpoints.map((cp, idx) => (
                <g key={idx}>
                  {/* Glowing Node anchor */}
                  <circle 
                    cx={cp.x} 
                    cy={cp.y} 
                    r="4" 
                    fill={activeCheckpoint === idx ? "#38bdf8" : "#2d2f36"} 
                    stroke={activeCheckpoint === idx ? "#ffffff" : "#475569"} 
                    strokeWidth="1.5"
                    className="transition-colors duration-150 shadow-[0_0_10px_#38bdf8]"
                  />
                  {/* Ping animation on active node */}
                  {activeCheckpoint === idx && (
                    <circle 
                      cx={cp.x} 
                      cy={cp.y} 
                      r="8" 
                      fill="none" 
                      stroke="#38bdf8" 
                      strokeWidth="1.5"
                      className="animate-ping"
                    />
                  )}
                </g>
              ))}

              {/* Moving RC Car */}
              <g 
                transform={`translate(${carPos.x}, ${carPos.y}) rotate(${carPos.angle}) scale(0.4)`}
                className="transition-transform duration-75 ease-out"
              >
                {/* Underglow glow */}
                <ellipse cx="0" cy="0" rx="20" ry="12" fill="rgba(56, 189, 248, 0.45)" className="blur-[4px]" />
                
                {/* Wheels */}
                <rect x="-18" y="-14" width="10" height="4" rx="1" fill="#000000" />
                <rect x="-18" y="10" width="10" height="4" rx="1" fill="#000000" />
                <rect x="8" y="-14" width="10" height="4" rx="1" fill="#000000" />
                <rect x="8" y="10" width="10" height="4" rx="1" fill="#000000" />
                
                {/* Body */}
                <rect x="-20" y="-10" width="40" height="20" rx="4" fill="#ffffff" stroke="#38bdf8" strokeWidth="2" />
                
                {/* Driver Cockpit */}
                <rect x="-5" y="-6" width="16" height="12" rx="2" fill="#0f172a" />
                <circle cx="2" cy="0" r="2.5" fill="#38bdf8" />
                
                {/* Spoiler */}
                <rect x="-24" y="-12" width="4" height="24" fill="#1e293b" />
              </g>

            </svg>

            {/* Floating text labels at exact locations */}
            {checkpoints.map((cp, idx) => (
              <div 
                key={idx}
                className="absolute text-[8px] sm:text-[10px] font-mono font-bold transition-all duration-150 pointer-events-none flex flex-col items-center"
                style={{ 
                  left: `${(cp.x / 400) * 100}%`, 
                  top: `${(cp.y / 160) * 100}%`,
                  transform: 'translate(-50%, -140%)' 
                }}
              >
                <span className={`px-2 py-0.5 rounded border flex items-center gap-1 shadow-md ${
                  activeCheckpoint === idx 
                    ? 'bg-sky-950/90 border-sky-500 text-sky-400 font-black' 
                    : 'bg-transparent/80 border-zinc-800 text-slate-500'
                }`}>
                  {cp.icon}
                  {cp.name}
                </span>
                {/* Line anchor pointer */}
                <div className={`w-[1px] h-3 ${
                  activeCheckpoint === idx ? 'bg-sky-500' : 'bg-zinc-800'
                }`} />
              </div>
            ))}
          </div>

          <div className="mt-8 font-mono text-[10px] sm:text-xs text-slate-400 text-center max-w-md border border-zinc-800/80 rounded p-4 bg-transparent/50">
            <span className="text-sky-400 font-bold block mb-1">SCROLL PROGRESS DECODED</span>
            The telemetry RC vehicle above will traverse the track checkpoints, synchronizing with your browser viewport navigation scroll pace.
          </div>

        </div>
      </div>
    </section>
  );
};
