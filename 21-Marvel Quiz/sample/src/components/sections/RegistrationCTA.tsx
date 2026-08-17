import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const RegistrationCTA: React.FC = () => {
  if (!eventData.registration) return null;

  return (
    <section id="registration" className="py-24 bg-[#020604]/40 relative overflow-hidden border-t border-[#063D29]/40">
      {/* Decorative background glows (pointer-events-none) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00E676]/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#C9A227]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-[#063D29] bg-[#020604]/80 backdrop-blur-md p-10 sm:p-16 text-center glow-loki-emerald overflow-hidden"
        >
          {/* Subtle grid pattern in container */}
          <div className="absolute inset-0 bg-loki-pattern opacity-40 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#020604] border border-[#063D29] mb-6 shadow-inner text-[#00E676]">
              <Sparkles className="h-8 w-8 text-glow-emerald animate-pulse" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              Fulfill Your Glorious Purpose
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
              Step forward into the TVA archives for IGNITRRON'26. Test your MCU lore, unravel multiversal mysteries, and earn your place in the Sacred Timeline.
            </p>

            {eventData.deadline && (
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C9A227] mb-6">
                TIMELINE REGISTRATION DEADLINE: {eventData.deadline}
              </p>
            )}

            <div className="flex justify-center z-20 relative">
              <a
                href={eventData.registration.url}
                className="inline-block cursor-pointer"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-gradient-to-r from-[#0B5D3B] via-[#063D29] to-[#0B5D3B] border border-[#00E676]/60 text-white shadow-[0_0_20px_rgba(0,230,118,0.25)] hover:shadow-[0_0_30px_rgba(0,230,118,0.45)] hover:border-[#00E676]"
                  icon={<ArrowRight className="h-5 w-5 text-[#00E676]" />}
                >
                  {eventData.registration.label}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
