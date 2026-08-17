import React from 'react';
import { motion } from 'framer-motion';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';
import { Gauge, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  if (!eventData.about) return null;

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-racing opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-slate-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <SectionHeader
              title={eventData.about.title}
              subtitle={eventData.name}
              badge="EVENT CONCEPT"
              align="left"
              className="mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
              className="text-base sm:text-lg leading-relaxed mb-8 text-slate-400 font-normal"
            >
              {eventData.about.description}
            </motion.p>

            {/* Checkmark Bullets List */}
            {eventData.about.bullets && eventData.about.bullets.length > 0 && (
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="space-y-4 text-left inline-block w-full"
              >
                {eventData.about.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-350 text-slate-300">
                      {bullet}
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {/* RC Car + Speed Trail visual dashboard */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-[480px] aspect-[4/3] border border-zinc-800/80 rounded-xl flex flex-col justify-center items-center p-6 bg-zinc-900/10 backdrop-blur-md relative overflow-hidden shadow-2xl"
            >
              {/* Corner HUD markers */}
              <div className="absolute top-4 left-4 text-[8px] font-mono text-slate-600">// SCANNING_CIRCUIT: ACTIVE</div>
              <div className="absolute top-4 right-4 flex space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-ping" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              </div>
              
              {/* Low-opacity Quicksilver movement streak outline in background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRX_uE1hyQ7YBfKgDgxStUfKq5Q4lCusfEGLdjndE39Q&s=10"
                  alt="Background outline"
                  className="w-full h-full object-cover scale-150 filter invert"
                />
              </div>

              {/* Styled Track SVG with animating RC Car */}
              <div className="relative w-full h-44 mb-6 flex items-center justify-center">
                <svg className="w-full h-full opacity-65" viewBox="0 0 400 150">
                  {/* Track line (dashed white-grey) */}
                  <path 
                    d="M 30 75 Q 100 20 200 75 T 370 75" 
                    stroke="#1e293b" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  <path 
                    id="race-track-path"
                    d="M 30 75 Q 100 20 200 75 T 370 75" 
                    stroke="#38bdf8" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                  
                  {/* RC Car chassis drawing */}
                  <g className="animate-[pulse_1.5s_infinite]">
                    {/* Shadow/trail behind the car */}
                    <path 
                      d="M 125 42 Q 155 45 185 52" 
                      stroke="url(#speed-trail-grad)" 
                      strokeWidth="6" 
                      fill="none" 
                    />
                    
                    {/* The Car Group */}
                    <g transform="translate(180, 52) rotate(12) scale(0.6)">
                      {/* Chassis */}
                      <rect x="-35" y="-18" width="70" height="36" rx="6" fill="#cbd5e1" stroke="#ffffff" strokeWidth="2" />
                      {/* Spoiler */}
                      <rect x="-38" y="-22" width="6" height="44" fill="#0f172a" />
                      {/* Wheels */}
                      <rect x="-26" y="-24" width="16" height="8" rx="2" fill="#060608" />
                      <rect x="-26" y="16" width="16" height="8" rx="2" fill="#060608" />
                      <rect x="12" y="-24" width="14" height="8" rx="2" fill="#060608" />
                      <rect x="12" y="16" width="14" height="8" rx="2" fill="#060608" />
                      {/* Shock antenna */}
                      <line x1="-15" y1="0" x2="-25" y2="-20" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="-25" cy="-20" r="2.5" fill="#38bdf8" />
                    </g>
                  </g>
                  
                  <defs>
                    <linearGradient id="speed-trail-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="text-center font-mono w-full">
                <span className="text-[10px] sm:text-xs tracking-widest text-slate-500 uppercase block mb-1">
                  RC CAR RACING SCHEMATIC
                </span>
                <div className="h-[1px] w-24 bg-zinc-800 mx-auto mb-3" />
                <p className="text-[10px] text-sky-400 font-bold leading-relaxed max-w-[320px] mx-auto flex items-center justify-center gap-1.5">
                  <Gauge className="h-3 w-3 animate-spin" style={{ animationDuration: '3s' }} />
                  SPEED TRAIL • 17 OBSTACLE CORRIDORS • 2 ROUNDS
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
