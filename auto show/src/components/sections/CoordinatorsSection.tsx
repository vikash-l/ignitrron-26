'use client';

import { Phone, UserCheck, ShieldCheck, PhoneCall } from 'lucide-react';

export default function CoordinatorsSection() {
  const studentCoordinators = [
    { name: 'Vishal B S', phone: '7397508211', formattedPhone: '+91 73975 08211' },
    { name: 'Sathya R V', phone: '7604903115', formattedPhone: '+91 76049 03115' },
    { name: 'Sarveshwar', phone: '6382412143', formattedPhone: '+91 63824 12143' },
  ];

  return (
    <section
      id="coordinators"
      className="relative w-full bg-[#050505] text-white px-4 sm:px-8 lg:px-20 py-20 sm:py-28 z-20 select-none border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-accent/40 text-[10px] sm:text-[11px] font-mono tracking-widest text-accent uppercase font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>IGNITRRON ’26 EVENT LEADERSHIP</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
            EVENT <span className="text-accent text-glow">COORDINATORS.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            For inquiries, walk-in registration details, and exhibition logistics, reach out to our official faculty and student coordinators.
          </p>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Faculty Coordinator Card (4 cols) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl glass-panel border border-accent/40 bg-gradient-to-br from-black/90 via-black to-accent/15 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[9px] font-mono tracking-widest text-accent uppercase font-bold">
                  FACULTY COORDINATOR
                </span>
                <UserCheck className="w-5 h-5 text-accent" />
              </div>

              <div className="pt-2">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white group-hover:text-accent transition-colors">
                  Dr. RR. Shenthil Kumar
                </h3>
                <p className="font-mono text-xs text-neutral-400 tracking-wider mt-1">
                  FACULTY LEAD • IGNITRRON ’26
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-sans text-neutral-300 leading-relaxed">
              Supervising automotive exhibition operations, safety compliance, and official event administration.
            </div>
          </div>

          {/* Student Coordinators Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {studentCoordinators.map((coordinator, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-panel border border-white/15 hover:border-accent/50 bg-black/80 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-accent tracking-widest uppercase font-bold">
                      STUDENT COORDINATOR 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>

                  <h4 className="font-display text-xl font-bold uppercase text-white group-hover:text-accent transition-colors">
                    {coordinator.name}
                  </h4>
                  <p className="font-mono text-[10px] text-neutral-400 uppercase">
                    AUTO SHOW TEAM
                  </p>
                </div>

                <a
                  href={`tel:${coordinator.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-accent hover:text-white border border-white/10 transition-all duration-300 text-neutral-200 group/btn"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-accent group-hover/btn:text-white transition-colors" />
                    <span>{coordinator.formattedPhone}</span>
                  </div>
                  <PhoneCall className="w-4 h-4 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
