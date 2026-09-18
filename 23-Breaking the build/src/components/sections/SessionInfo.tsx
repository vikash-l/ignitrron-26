import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, User, Building2, Gamepad2, CheckCircle, ArrowUpRight } from 'lucide-react';
import { eventData } from '../../data/event';
import { SectionHeader } from '../ui/SectionHeader';

export const SessionInfo: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Calendar':
        return <Calendar className="h-5 w-5 text-[#F97316]" />;
      case 'Clock':
        return <Clock className="h-5 w-5 text-[#EF4444]" />;
      case 'MapPin':
        return <MapPin className="h-5 w-5 text-[#F97316]" />;
      case 'User':
        return <User className="h-5 w-5 text-[#F59E0B]" />;
      case 'Building2':
        return <Building2 className="h-5 w-5 text-[#EF4444]" />;
      case 'Gamepad2':
        return <Gamepad2 className="h-5 w-5 text-[#F97316]" />;
      default:
        return <Calendar className="h-5 w-5 text-[#F97316]" />;
    }
  };

  return (
    <section id="info" className="py-24 relative overflow-hidden border-t border-[#7F1D1D]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="04"
          badge="SPECIFICATION MATRIX"
          title="SESSION INFORMATION"
          subtitle="Official parameters and schedule details for Breaking the Build."
          align="center"
        />

        {/* Technical Specification Matrix with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {eventData.specifications.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`tech-panel rounded-xl p-6 border flex flex-col justify-between transition-all duration-300 shadow-md ${
                spec.highlight 
                  ? 'border-[#B42318]/50 bg-[#1C0D0B]/95 hover:border-[#F97316]/60' 
                  : 'border-[#7F1D1D]/35 hover:border-[#B42318]/50 hover:bg-[#24100D]/85'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#120A08] border border-[#7F1D1D]/50 flex items-center justify-center">
                    {getIcon(spec.icon)}
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#6E6762] uppercase tracking-widest font-semibold">
                    SPEC 0{idx + 1}
                  </span>
                </div>

                <div className="text-[10px] font-mono-tech text-[#B42318] uppercase tracking-widest mb-1">
                  {spec.label}
                </div>
                <div className="text-[#F5F1ED] font-mono-tech text-base font-bold uppercase tracking-wide mb-2">
                  {spec.value}
                </div>
              </div>

              <div className="border-t border-[#7F1D1D]/25 pt-3 mt-4">
                <span className="text-xs text-[#A8A09A] font-normal">
                  {spec.subValue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Registration Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 tech-panel rounded-xl p-5 sm:p-6 border border-[#B42318]/40 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-full bg-[#24100D] border border-[#F97316]/50 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-4 w-4 text-[#F97316]" />
            </div>
            <div>
              <div className="text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-wider font-bold">
                REGISTRATION PORTAL IS ACTIVE
              </div>
              <div className="text-[#A8A09A] text-xs mt-0.5">
                Register as an individual participant for Breaking the Build.
              </div>
            </div>
          </div>

          <a
            href={eventData.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#B42318] hover:bg-[#EF4444] text-[#F5F1ED] font-mono-tech text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#B42318]/30 transition-all cursor-pointer flex-shrink-0 no-underline"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="h-4 w-4 text-[#F59E0B]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
