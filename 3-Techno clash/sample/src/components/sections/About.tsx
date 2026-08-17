import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { eventData } from '../../data/event';

export const About: React.FC = () => {
  if (!eventData.about) return null;
  const about = eventData.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(0,240,255,0.3)] glass-hud">
              <img 
                src={eventData.character.avatar} 
                alt="NEXA Digital Architect" 
                className="w-full h-full object-cover filter contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-cyan-400/60 p-3 rounded-xl font-mono text-xs text-white">
                <div className="text-[10px] text-cyan-400 font-bold mb-0.5">CHARACTER ARCHITECT</div>
                <div className="font-bold">{eventData.character.name} — {eventData.character.role}</div>
                <p className="text-[11px] text-slate-400 font-sans mt-1">{eventData.character.bio}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Cpu className="w-3.5 h-3.5" /> SYSTEM ARCHITECTURE
            </div>

            <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
              {about.title}
            </h2>

            <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
              {about.description}
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-slate-200">
              {about.bullets.map((bullet: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/80 border border-cyan-500/20 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
