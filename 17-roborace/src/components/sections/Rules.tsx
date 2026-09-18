import React from 'react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Maximize2, 
  Battery, 
  Radio, 
  Ban, 
  Activity, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle,
  Cpu
} from 'lucide-react';

export const Rules: React.FC = () => {
  // 10 Competition rules mapping
  const officialRules = [
    { id: "01", title: "Bot Dimensions", desc: "Max bot envelope is 30 × 30 × 15 cm.", icon: <Maximize2 className="h-4 w-4 text-sky-400" /> },
    { id: "02", title: "Track Width Limit", desc: "Standard clearance is 35 cm (narrows down in zones).", icon: <Activity className="h-4 w-4 text-sky-400" /> },
    { id: "03", title: "Battery Constraints", desc: "Voltage must be strictly less than 16.80 V.", icon: <Battery className="h-4 w-4 text-sky-400" /> },
    { id: "04", title: "Aerodynamic Shape", desc: "No restrictions on the geometric chassis shape.", icon: <Cpu className="h-4 w-4 text-sky-400" /> },
    { id: "05", title: "Assembly Restriction", desc: "Ready-made cars, Lego sets, and E-buggies are banned.", icon: <Ban className="h-4 w-4 text-red-500" /> },
    { id: "06", title: "Transmitter Envelope", desc: "External transmitter sizing is excluded from constraints.", icon: <Radio className="h-4 w-4 text-sky-400" /> },
    { id: "07", title: "Transmission Modes", desc: "Both wired and wireless control signals are permitted.", icon: <Radio className="h-4 w-4 text-sky-400" /> },
    { id: "08", title: "Signal Preference", desc: "Wireless RF transmission is highly recommended.", icon: <CheckCircle className="h-4 w-4 text-sky-400" /> },
    { id: "09", title: "Disqualification", desc: "Rules violations trigger instant disqualification or time penalties.", icon: <AlertTriangle className="h-4 w-4 text-amber-500 animate-pulse" /> },
    { id: "10", title: "Final Decisions", desc: "Event managers' calls are final and binding in all cases.", icon: <ShieldAlert className="h-4 w-4 text-red-500" /> }
  ];

  const specCards = [
    { title: "MAX BOT DIMENSIONS", value: "30 × 30 × 15 cm", sub: "Length × Width × Height", icon: <Maximize2 className="h-5 w-5 text-slate-300" /> },
    { title: "TRACK CLEARANCE", value: "35 cm", sub: "Narrows in technical corridors", icon: <Activity className="h-5 w-5 text-slate-300" /> },
    { title: "MAX BATTERY CAP", value: "< 16.80 Volts", sub: "Strictly checked at check-in", icon: <Battery className="h-5 w-5 text-slate-300" /> },
    { title: "VEHICLE LIMITS", value: "BANNED PARADIGMS", sub: "No Lego Sets or E-Buggy structures", icon: <Ban className="h-5 w-5 text-red-500" /> },
    { title: "TRANSMISSIONS", value: "WIRED & WIRELESS", sub: "Wireless preferred for speed", icon: <Radio className="h-5 w-5 text-slate-300" /> },
    { title: "TRANSMITTER SIZE", value: "EXCLUDED", sub: "RF controller envelope size limits", icon: <Radio className="h-5 w-5 text-slate-300" /> }
  ];

  return (
    <section id="rules" className="py-24 bg-transparent relative border-t border-zinc-900/50">
      <div className="absolute inset-0 bg-grid-racing opacity-[0.02] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="SPECIFICATIONS & RULES"
          subtitle="Championship build guidelines and racing code of conduct."
          badge="REGULATIONS"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Machine Specifications (Dashboard HUD Cards) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-base font-bold text-white tracking-widest font-display uppercase mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-sky-400" />
              // MACHINE SPECIFICATIONS
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {specCards.map((spec, idx) => (
                <Card 
                  key={idx}
                  glow={true}
                  glowColor={spec.title.includes("LIMITS") ? "blue" : "silver"}
                  hoverEffect={true}
                  className="p-5 bg-zinc-900/20 border-zinc-850 hover:border-slate-400/30 flex flex-col justify-between items-start min-h-[120px]"
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="text-[9px] font-bold text-slate-500 font-mono tracking-wider">
                      {spec.title}
                    </span>
                    <div className="p-1 rounded bg-transparent/80 border border-zinc-850">
                      {spec.icon}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm sm:text-base font-extrabold text-white font-display tracking-wide uppercase">
                      {spec.value}
                    </h4>
                    <p className="text-[10px] text-slate-550 font-mono mt-0.5">
                      {spec.sub}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="p-4 rounded border border-zinc-800 bg-zinc-900/10 font-mono text-[10px] text-slate-500 leading-normal">
              <span className="text-red-500 font-bold block mb-1">!! ATTENTION COMPETITORS !!</span>
              Ready-made retail chassis are prohibited to maintain event integrity. Custom chassis designs (3D printed, laser cut, machined) are highly encouraged. Max voltage limits will be measured pre-race.
            </div>
          </div>

          {/* Right Column: General Competition Rules */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-base font-bold text-white tracking-widest font-display uppercase mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-sky-400" />
              // EVENT RUN BOOK
            </h3>

            <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {officialRules.map((rule, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded border border-zinc-850 bg-zinc-900/35 backdrop-blur-sm group hover:border-slate-600/30 transition-all duration-120"
                >
                  {/* Icon & ID */}
                  <div className="flex flex-col items-center gap-1.5 font-mono">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      ID
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-transparent border border-zinc-800 text-slate-200 text-xs font-black">
                      {rule.id}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-[1px] h-10 bg-zinc-800 self-center" />

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      {rule.icon}
                      <h4 className="text-xs sm:text-sm font-bold text-white font-display uppercase tracking-wider group-hover:text-sky-400 transition-colors duration-120">
                        {rule.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-normal font-normal">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
