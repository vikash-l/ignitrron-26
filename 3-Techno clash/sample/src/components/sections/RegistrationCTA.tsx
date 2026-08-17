import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { eventData } from '../../data/event';
import { sound } from '../../utils/audio';

interface RegistrationCTAProps {
  onRegisterClick: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onRegisterClick }) => {
  return (
    <section id="registration" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        
        <div className="relative bg-[#080d24]/90 border-2 border-cyan-400/70 rounded-3xl p-8 sm:p-14 shadow-[0_0_80px_rgba(0,240,255,0.3)] backdrop-blur-xl overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <svg className="w-[550px] h-[550px] animate-spin-slow" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="220" stroke="#00F0FF" strokeWidth="2" fill="none" strokeDasharray="20 10" />
              <circle cx="250" cy="250" r="170" stroke="#7000FF" strokeWidth="1.5" fill="none" strokeDasharray="30 15" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 mx-auto shadow-[0_0_30px_#00F0FF] animate-pulse">
              <img src={eventData.character.avatar} alt="NEXA" className="w-full h-full object-cover" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <Zap className="w-3.5 h-3.5 animate-bounce" /> HOLOGRAPHIC PORTAL ACTIVE
            </div>

            <h2 className="font-mono text-4xl sm:text-5xl font-black text-white tracking-tight">
              READY TO ENTER THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">CLASH?</span>
            </h2>

            <p className="text-slate-300 font-mono text-sm max-w-xl mx-auto leading-relaxed">
              Step through the portal to secure your team's official Holographic Entry Pass and challenge national tech elites.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  sound.playClick();
                  onRegisterClick();
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-mono font-black text-base shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="text-white">REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="pt-4 text-xs font-mono text-cyan-400/80 flex items-center justify-center gap-4">
              <span>ONLINE PRELIMS ACCESS</span>
              <span>•</span>
              <span>FREE TEAM REGISTRATION</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
