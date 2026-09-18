import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const CountdownSection = () => {
  return (
    <section className="py-20 relative z-20 bg-transparent border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-rich p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left: Registration Counter */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#39ff14]" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#39ff14] animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#39ff14]"></div>
            </div>
            <div>
              <div className="text-4xl font-black text-white font-display tracking-tight">142+</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest font-semibold">Gamers Registered</div>
            </div>
          </div>

          {/* Center: Separator */}
          <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Right: Countdown */}
          <div className="flex items-center gap-6">
            <div>
              <div className="flex gap-4 text-center">
                {[
                  { label: 'DAYS', value: '08' },
                  { label: 'HOURS', value: '14' },
                  { label: 'MINS', value: '45' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center bg-[#0a0f14] border border-white/5 rounded-2xl w-20 h-24 shadow-inner">
                    <span className="text-4xl font-black text-[#39ff14] font-display">{item.value}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
