import React from 'react';
import { Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { EventConfig } from '../../types/event';
import { IconRenderer } from '../ui/IconRenderer';

interface FooterProps {
  event: EventConfig;
}

export const Footer: React.FC<FooterProps> = ({ event }) => {
  return (
    <footer className="bg-[#050407] border-t border-[#231538] text-[#A7A0B2] pt-16 pb-12 relative overflow-hidden">
      {/* Glow ambient bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#7B2CFF] to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7B2CFF] to-[#FF4FD8] p-0.5 shadow-lg shadow-[#7B2CFF]/30">
                <div className="w-full h-full bg-[#07060A] rounded-[7px] flex items-center justify-center text-[#FF4FD8] font-mono font-extrabold text-base">
                  X
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  {event.name}
                </span>
                <p className="text-[10px] text-[#D12CFF] font-mono uppercase">
                  {event.subtitle || 'IN.ZEROS'} • GDC
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A7A0B2] leading-relaxed">
              {event.description}
            </p>

            {event.socials && event.socials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {event.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#100A18] border border-[#231538] flex items-center justify-center text-[#F5F2F8] hover:text-[#FF4FD8] hover:border-[#7B2CFF]/50 transition-all"
                    aria-label={social.platform}
                  >
                    <IconRenderer name={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D12CFF]"></span>
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#FF4FD8] transition-colors">
                  00 // HERO
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF4FD8] transition-colors">
                  01 // THE GENESIS
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-[#FF4FD8] transition-colors">
                  02 // THE PITCH
                </a>
              </li>
              <li>
                <a href="#rounds" className="hover:text-[#FF4FD8] transition-colors">
                  03 // THE PITCH TABLE
                </a>
              </li>
              <li>
                <a href="#rules" className="hover:text-[#FF4FD8] transition-colors">
                  04 // THE RULEBOOK
                </a>
              </li>
              <li>
                <a href="#conduct" className="hover:text-[#FF4FD8] transition-colors">
                  05 // PLAY FAIR
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:text-[#FF4FD8] transition-colors">
                  06 // THE WINNERS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Event Overview Specs */}
          <div>
            <h3 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7B2CFF]"></span>
              EVENT SPECIFICATIONS
            </h3>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#D12CFF]" />
                <span className="text-[#A7A0B2]">Date:</span>
                <span className="text-[#F5F2F8] font-bold">{event.date}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FF4FD8]" />
                <span className="text-[#A7A0B2]">Time:</span>
                <span className="text-[#F5F2F8]">{event.time}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7B2CFF]" />
                <span className="text-[#A7A0B2]">Venue:</span>
                <span className="text-[#D12CFF] font-bold">{event.venue}</span>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-[#231538]">
                <span className="text-[#A7A0B2]">Team:</span>
                <span className="text-[#F5F2F8] font-bold">{event.teamSize}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Mission Control / Coordinator Contacts */}
          <div>
            <h3 className="text-white font-mono font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4FD8]"></span>
              MISSION CONTROL
            </h3>

            {event.coordinators && event.coordinators.length > 0 ? (
              <div className="space-y-3 text-xs">
                {event.coordinators.map((coordinator, idx) => (
                  <div key={idx} className="bg-[#100A18] p-3 rounded-lg border border-[#231538]">
                    <p className="text-[10px] text-[#D12CFF] font-mono uppercase">{coordinator.role}</p>
                    <p className="text-white font-bold font-display">{coordinator.name}</p>
                    <a
                      href={`tel:${coordinator.phone.replace(/\s+/g, '')}`}
                      className="mt-1 flex items-center gap-1.5 text-xs text-[#FF4FD8] font-mono hover:underline"
                    >
                      <Phone className="w-3 h-3 text-[#FF4FD8]" />
                      <span>{coordinator.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#A7A0B2]">Contact coordinator for details.</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#231538] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A7A0B2]">
          <p>{event.footer?.copyright || `© 2026 GAME GENESIS X • IN.ZEROS • GAME DEVELOPMENT CLUB`}</p>
          <p className="text-center md:text-right">
            {event.footer?.disclaimer || `Hosted by Game Development Club in collaboration with InZeros.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
