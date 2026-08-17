import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const RegistrationCTA: React.FC = () => {
  if (!eventData.registration) return null;

  return (
    <section id="registration" className="py-24 bg-transparent relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[100px] pointer-events-none animate-pulse" />
      
      {/* Speed lines */}
      <div className="speed-streak-fast top-10 right-5" />
      <div className="speed-streak bottom-10 left-5" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative rounded-2xl border border-zinc-800 bg-zinc-900/10 backdrop-blur-md p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-grid-racing opacity-[0.03] pointer-events-none" />

          {/* Glowing streaks inside the card */}
          <div className="speed-streak top-1/4 left-0" style={{ animationDelay: '0.2s' }} />
          <div className="speed-streak-fast top-2/3 right-0" style={{ animationDelay: '0.7s' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="md:col-span-7 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950 border border-zinc-800 mb-6 shadow-inner text-sky-400 font-mono text-[10px] tracking-widest uppercase">
                <Gauge className="h-3.5 w-3.5" />
                // GRAND FINALE REGISTRATION
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-none font-display uppercase">
                CAN YOU KEEP UP?
              </h2>
              
              <div className="space-y-2 mb-10 font-display font-extrabold text-sm sm:text-base tracking-widest text-slate-300">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-sky-400">⚡</span> BUILD YOUR MACHINE.
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-sky-400">⚡</span> MASTER THE TRACK.
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-sky-400">⚡</span> BEAT THE CLOCK.
                </p>
              </div>

              <div className="flex justify-center md:justify-start">
                <a href={eventData.registration.url} className="w-full sm:w-auto">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto font-black"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    {eventData.registration.label}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Quicksilver Visual prominently next to CTA */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative w-44 sm:w-52 aspect-square rounded-full border border-zinc-800 bg-zinc-950/80 p-2 overflow-hidden shadow-2xl flex items-center justify-center group">
                {/* Silver speed trails inside the circle */}
                <div className="absolute inset-0 bg-radial-gradient from-sky-400/10 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
                <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[streak-move_0.8s_infinite_linear] pointer-events-none" />

                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX_uE1hyQ7YBfKgDgxStUfKq5Q4lCusfEGLdjndE39Q&s=10"
                  alt="Quicksilver Final Action"
                  className="w-full h-full object-cover rounded-full filter contrast-[1.05]"
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
