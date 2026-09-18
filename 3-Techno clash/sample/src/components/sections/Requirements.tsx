import React from 'react';
import { Users, UserCheck, Laptop, Wifi, Code, Activity, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

export const Requirements: React.FC = () => {
  const getReqIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-violet-400" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-cyan-300" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-rose-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      default: return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="requirements" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <CheckCircle2 className="w-3.5 h-3.5" /> CHECKLIST & PREREQUISITES
          </div>
          <h2 className="font-mono text-4xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            PARTICIPANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">REQUIREMENTS</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            Essential prerequisites for all competing teams.
          </p>
        </div>

        {/* 8 Technical Requirement Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {eventData.requirements.map((req) => (
            <div
              key={req.id}
              onMouseEnter={() => sound.playHover()}
              className="group bg-[#080d24]/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 transition">
                    {getReqIcon(req.icon)}
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {req.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 tracking-wide group-hover:text-cyan-300 transition">
                  {req.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  "{req.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
