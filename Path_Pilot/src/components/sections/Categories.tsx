import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CornerDownRight, 
  GitCommit, 
  RotateCw, 
  GitFork, 
  Unlink, 
  Layers, 
  Maximize2, 
  BatteryCharging, 
  Radio, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const Categories: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'straight':
        return <Zap className="h-5 w-5 text-[#A30F18] group-hover:scale-110 transition-transform duration-300" />;
      case 'sharp-bends':
        return <CornerDownRight className="h-5 w-5 text-[#777D83] group-hover:scale-110 transition-transform duration-300" />;
      case 'gradual-curves':
        return <GitCommit className="h-5 w-5 text-[#A30F18] group-hover:scale-110 transition-transform duration-300" />;
      case 'loops':
        return <RotateCw className="h-5 w-5 text-[#777D83] group-hover:scale-110 transition-transform duration-300" />;
      case 'intersections':
        return <GitFork className="h-5 w-5 text-[#A30F18] group-hover:scale-110 transition-transform duration-300" />;
      case 'gaps':
        return <Unlink className="h-5 w-5 text-[#777D83] group-hover:scale-110 transition-transform duration-300" />;
      case 'arrangements':
        return <Layers className="h-5 w-5 text-[#A30F18] group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <GitCommit className="h-5 w-5 text-[#A30F18]" />;
    }
  };

  const specs = [
    {
      icon: <Maximize2 className="h-5 w-5 text-[#A30F18]" />,
      label: "MAX ROBOT SIZE",
      value: eventData.maxRobotSize,
      subValue: "Chassis bounding box limit",
      badge: "DIMENSIONS"
    },
    {
      icon: <BatteryCharging className="h-5 w-5 text-[#777D83]" />,
      label: "POWER LIMIT",
      value: eventData.powerLimit,
      subValue: "Strictly below 16.8 V battery",
      badge: "VOLTAGE"
    },
    {
      icon: <Cpu className="h-5 w-5 text-[#A30F18]" />,
      label: "OPERATION",
      value: eventData.operationMode,
      subValue: "100% onboard sensor control",
      badge: "NAVIGATION"
    },
    {
      icon: <Radio className="h-5 w-5 text-[#777D83]" />,
      label: "REMOTE CONTROL",
      value: eventData.remoteControlRule,
      subValue: "Zero wireless or manual inputs",
      badge: "RESTRICTION"
    }
  ];

  return (
    <section id="track" className="py-24 relative overflow-hidden border-t border-[#25292E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="02"
          badge="COURSE MATRIX"
          title="THE TRACK"
          subtitle="Official track layout features, black line dimensions, and strict technical parameters."
          align="center"
        />

        {/* Large Futuristic Track Blueprint Visualization Area */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 tech-panel rounded-3xl p-6 sm:p-10 border border-[#25292E] relative overflow-hidden shadow-2xl bg-gradient-to-b from-[#191C20]/95 via-[#111316]/95 to-[#050505]/98"
        >
          {/* Blueprint Corner Brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#A30F18]/70" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#A30F18]/70" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#A30F18]/70" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#A30F18]/70" />

          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#25292E] relative z-10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A30F18] animate-ping" />
              <span className="font-mono-tech text-xs text-[#E8E8E8] font-bold uppercase tracking-widest">
                OFFICIAL COMPETITION COURSE BLUEPRINT
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-xs text-[#E8E8E8] bg-[#111316]/90 border border-[#25292E] px-3 py-1 rounded">
                LINE SPEC: <strong className="text-[#A30F18]">{eventData.trackLineWidth}</strong>
              </span>
            </div>
          </div>

          {/* Interactive SVG Course Blueprint */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] bg-[#050505] rounded-2xl border border-[#25292E] p-4 overflow-hidden flex items-center justify-center">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-circuit-grid opacity-20" />

            <svg className="w-full h-full" viewBox="0 0 900 350" fill="none">
              {/* Radar Circles in Background */}
              <circle cx="450" cy="175" r="140" stroke="rgba(74, 80, 86, 0.08)" strokeWidth="1" />
              <circle cx="450" cy="175" r="80" stroke="rgba(163, 15, 24, 0.08)" strokeWidth="1" />
              <line x1="450" y1="0" x2="450" y2="350" stroke="rgba(74, 80, 86, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="175" x2="900" y2="175" stroke="rgba(74, 80, 86, 0.1)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Complex Official Track Path Simulation with 7 elements */}
              {/* Segment 1: Start straight */}
              <path
                d="M 50 280 L 160 280"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Segment 2: Sharp Bend 90 deg */}
              <path
                d="M 160 280 L 160 120"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Segment 3: Gradual Curve */}
              <path
                d="M 160 120 C 160 60, 260 60, 300 120"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Segment 4: Loop */}
              <path
                d="M 300 120 C 350 200, 420 200, 420 120 C 420 50, 340 50, 350 140"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Segment 5: Intersection */}
              <path
                d="M 350 140 L 520 140"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 430 80 L 430 200"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Segment 6: Gap Section */}
              <path
                d="M 520 140 L 580 140"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />
              {/* Gap between 580 and 640 */}
              <path
                d="M 640 140 C 700 140, 740 220, 820 220 L 860 220"
                stroke="#191C20"
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* Glowing Vector Overlay */}
              <path
                d="M 50 280 L 160 280 L 160 120 C 160 60, 260 60, 300 120 C 350 200, 420 200, 420 120 C 420 50, 340 50, 350 140 L 580 140"
                stroke="#A30F18"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-trajectory"
              />
              <path
                d="M 640 140 C 700 140, 740 220, 820 220 L 860 220"
                stroke="#A30F18"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-trajectory"
              />

              {/* Gap Section Discontinuity Marker */}
              <line x1="580" y1="140" x2="640" y2="140" stroke="#777D83" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="610" y="125" fill="#777D83" fontSize="10" fontFamily="monospace" textAnchor="middle">GAP (DEAD-RECKONING)</text>

              {/* Start & Finish Markers */}
              <circle cx="50" cy="280" r="10" fill="#A30F18" fillOpacity="0.2" stroke="#A30F18" strokeWidth="2" />
              <text x="50" y="310" fill="#A30F18" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">START</text>

              <circle cx="860" cy="220" r="10" fill="#A30F18" fillOpacity="0.2" stroke="#A30F18" strokeWidth="2" />
              <text x="860" y="250" fill="#A30F18" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">FINISH</text>

              {/* Checkpoint Indicators */}
              <circle cx="160" cy="280" r="5" fill="#4A5056" />
              <circle cx="300" cy="120" r="5" fill="#4A5056" />
              <circle cx="430" cy="140" r="5" fill="#4A5056" />
              <circle cx="580" cy="140" r="5" fill="#777D83" />
              <circle cx="640" cy="140" r="5" fill="#777D83" />

              {/* Moving Autonomous Robot Dot on Course */}
              <motion.circle
                r="7"
                fill="#A30F18"
                stroke="#E8E8E8"
                strokeWidth="2"
                animate={{
                  cx: [50, 160, 160, 230, 300, 380, 420, 350, 430, 580, 640, 740, 860],
                  cy: [280, 280, 120, 70, 120, 180, 100, 140, 140, 140, 140, 200, 220],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Live Track HUD Overlay Badges */}
            <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#050505]/90 border border-[#25292E] text-[10px] font-mono-tech text-[#E8E8E8]">
              COURSE: HIGH-SPEED HYBRID ARENA
            </div>
            <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-[#050505]/90 border border-[#25292E] text-[10px] font-mono-tech text-[#9A9DA1]">
              OPTICAL SENSOR CONTRAST: HIGH (BLACK ON LIGHT SURFACE)
            </div>
          </div>

          {/* 4 Technical Parameter Badges inside Track Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[#25292E]">
            {specs.map((s, idx) => (
              <div key={idx} className="tech-panel p-4 rounded-xl border border-[#25292E] flex items-start gap-3 bg-[#111316]/70">
                <div className="w-9 h-9 rounded-lg bg-[#191C20] border border-[#25292E] flex items-center justify-center flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[9px] font-mono-tech text-[#777D83] uppercase tracking-widest font-bold">
                    {s.label}
                  </div>
                  <div className="text-sm font-mono-tech text-[#E8E8E8] font-bold tracking-wide mt-0.5">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono-tech text-[#9A9DA1] mt-0.5">
                    {s.subValue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7 Track Challenge Feature Cards */}
        <div className="mb-6">
          <div className="text-center mb-8">
            <span className="font-mono-tech text-xs text-[#E8E8E8] uppercase tracking-widest font-bold bg-[#111316]/90 border border-[#25292E] px-3 py-1 rounded shadow-sm">
              07 TRACK GEOMETRIES &amp; CHALLENGES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-5">
            {eventData.trackFeatures.map((feat, idx) => {
              const isWide = idx === 6;

              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.52, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`tech-panel rounded-xl p-6 border border-[#25292E] hover:border-[#A30F18]/50 hover:bg-[#191C20]/95 hover:shadow-[0_16px_36px_-10px_rgba(5,5,5,0.9),0_0_24px_rgba(163,15,24,0.15)] flex flex-col justify-between transition-all duration-300 shadow-md relative overflow-hidden group ${
                    isWide ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A30F18]/0 to-transparent group-hover:via-[#A30F18]/60 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#111316] border border-[#25292E] flex items-center justify-center flex-shrink-0 group-hover:border-[#A30F18]/60 transition-all duration-300">
                        {getFeatureIcon(feat.id)}
                      </div>
                      <span className="font-mono-tech text-[10px] text-[#A30F18] bg-[#191C20]/90 border border-[#25292E] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        {feat.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono-tech text-xs text-[#A30F18] font-bold">
                        {feat.number}
                      </span>
                      <h3 className="text-[#E8E8E8] font-display text-2xl uppercase tracking-wide group-hover:text-[#A30F18] transition-colors">
                        {feat.name}
                      </h3>
                    </div>

                    <p className="text-[#9A9DA1] text-xs leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>

                  <div className="border-t border-[#25292E] pt-3 mt-4 flex items-center justify-between text-[9px] font-mono-tech text-[#777D83] uppercase tracking-widest">
                    <span>OFFICIAL ELEMENT</span>
                    <span className="text-[#E8E8E8] flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-[#A30F18]" />
                      STANDARDIZED
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Track Adherence Note */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full tech-panel border border-[#25292E] text-[#E8E8E8] font-mono-tech text-xs bg-[#111316]/80">
            <ShieldCheck className="h-4 w-4 text-[#A30F18]" />
            <span>Black Line: <strong>2.0–2.5 cm</strong> | No remote control permitted | Maximum robot size: <strong>250 mm × 250 mm</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




