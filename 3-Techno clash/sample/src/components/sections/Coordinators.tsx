import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Phone, ShieldCheck, Users } from 'lucide-react';
import { eventData } from '../../data/event';
import { Card } from '../ui/Card';

export const Coordinators: React.FC = () => {
  const coordinators = eventData.coordinators;
  if (!coordinators) return null;

  return (
    <section id="coordinators" className="py-20 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Users className="w-3.5 h-3.5" /> EVENT COORDINATORS
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">COORDINATORS</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-2">
            Faculty and student organizing coordinators for Techno Clash – Quiz.
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Faculty Coordinator Card */}
          {coordinators.faculty.map((fac, idx) => (
            <motion.div
              key={`fac-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col justify-between bg-slate-900/40 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                    {fac.role}
                  </span>
                  <h3 className="text-xl font-black text-white font-mono mb-2">{fac.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Student Coordinator Cards */}
          {coordinators.student.map((stud, idx) => (
            <motion.div
              key={`stud-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 h-full flex flex-col justify-between bg-slate-900/40 border-violet-500/30 hover:border-violet-400 transition-all duration-300 backdrop-blur-md">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-4 text-violet-400">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-widest block mb-1">
                    {stud.role}
                  </span>
                  <h3 className="text-xl font-black text-white font-mono mb-3">{stud.name}</h3>
                </div>

                <a
                  href={`tel:${stud.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 border border-violet-500/30 text-violet-300 font-mono text-xs font-bold hover:bg-violet-950/40 hover:border-violet-400 transition-colors w-full justify-center mt-4"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                  <span>{stud.phone}</span>
                </a>
              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
