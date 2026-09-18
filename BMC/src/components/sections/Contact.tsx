import React from 'react';
import { 
  Phone, 
  Mail, 
  User, 
  Building2
} from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

export const Contact: React.FC = () => {
  const coordinators = [
    {
      role: 'Lead Event Coordinator',
      name: 'To Be Announced',
      phone: 'To Be Announced',
      email: 'To Be Announced',
    },
    {
      role: 'Student Coordinator',
      name: 'To Be Announced',
      phone: 'To Be Announced',
      email: 'To Be Announced',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0f14] border border-[#00ff88]/30 text-xs font-mono text-[#00ff88] uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Executive Communications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-space mb-4">
            Event <span className="oscorp-gradient-text">Coordinators</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1]/80 max-w-xl mx-auto">
            Official secretariat contact points for IGNITRRON'26 BMC inquiries and team coordination.
          </p>
        </div>

        {/* Coordinator Cards with Clean "To Be Announced" placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coordinators.map((c, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playUiSound('hover')}
              className="relative rounded-2xl glass-oscorp p-6 sm:p-8 border border-[#cbd5e1]/15 hover:border-[#00ff88]/50 transition-all duration-300 transform hover:-translate-y-1 oscorp-cut"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#cbd5e1]/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff88]">
                  {c.role}
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30">
                  Announcement Pending
                </span>
              </div>

              <div className="space-y-4">
                {/* Coordinator Name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 flex items-center justify-center text-[#cbd5e1]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#cbd5e1]/60 uppercase">Coordinator Name</div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {c.name}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 flex items-center justify-center text-[#cbd5e1]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#cbd5e1]/60 uppercase">Phone Number</div>
                    <div className="text-xs sm:text-sm font-mono text-[#cbd5e1]">
                      {c.phone}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 flex items-center justify-center text-[#cbd5e1]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#cbd5e1]/60 uppercase">Email</div>
                    <div className="text-xs sm:text-sm font-mono text-[#cbd5e1]">
                      {c.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-[#cbd5e1]/10 text-[11px] font-mono text-[#cbd5e1]/50 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                Official desk contact numbers will be activated prior to boardroom briefing.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
