import React from 'react';
import { Calendar, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050607] border-t border-[#d6a84f]/20 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Host (4 cols) */}
          <div className="lg:col-span-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group mb-4 inline-flex"
            >
              <div 
                className="w-8 h-8 rounded flex items-center justify-center font-display text-[#050607] text-base font-bold transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f2d58a 0%, #d6a84f 50%, #8c6a2d 100%)',
                }}
              >
                {eventData.logoText}
              </div>
              <div>
                <div className="text-[#f3f3ef] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#f2d58a] transition-colors">
                  {eventData.name}
                </div>
                <div className="text-[#d6a84f] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                  {eventData.festName}
                </div>
              </div>
            </div>

            <p className="text-[#879296] text-xs leading-relaxed mb-6 font-normal max-w-sm">
              {eventData.footer.description}
            </p>

            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-gradient-to-r from-[#d6a84f] via-[#e8a63a] to-[#d6a84f] hover:from-[#f2d58a] hover:to-[#e8a63a] text-[#050607] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all cursor-pointer shadow-md shadow-[#d6a84f]/25 no-underline"
            >
              <span>REGISTER NOW ↗</span>
            </a>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              QUICK NAVIGATION
            </h3>
            <div className="flex flex-col space-y-2.5">
              {navSections.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-[#879296] hover:text-[#f2d58a] font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span className="text-[#d6a84f] mr-2 font-bold">{link.index}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Event Specifications (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              EVENT INFO
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-[#879296]">
              <div className="flex items-start gap-2">
                <Calendar className="h-3.5 w-3.5 text-[#d6a84f] flex-shrink-0 mt-0.5" />
                <span>18 September 2026</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 text-[#d6a84f] flex-shrink-0 mt-0.5" />
                <span>10:00 AM – 4:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#e8a63a] flex-shrink-0 mt-0.5" />
                <span>MECH / CS</span>
              </div>
              <div className="text-[10px] text-[#f2d58a] font-semibold pt-1">
                ONLINE + ON-SPOT
              </div>
            </div>
          </div>

          {/* Column 4: Race Control Coordinators (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#f3f3ef] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              RACE CONTROL
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-[#879296]">
              <div className="text-[#f3f3ef] font-semibold mb-1">
                HOST: {eventData.organizer}
              </div>

              {eventData.contacts.map((c, i) => (
                <a
                  key={i}
                  href={`tel:${c.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 p-2.5 rounded tech-panel border border-[#d6a84f]/25 text-[#879296] hover:text-[#f2d58a] hover:border-[#d6a84f]/50 transition-colors no-underline group"
                >
                  <Phone className="h-3.5 w-3.5 text-[#d6a84f] flex-shrink-0 group-hover:scale-105 transition-transform" />
                  <div>
                    <div className="text-[#f3f3ef] font-bold text-xs">{c.name}</div>
                    <div className="text-[11px] text-[#f2d58a]">{c.phone}</div>
                  </div>
                </a>
              ))}
              
              <a
                href={eventData.footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded tech-panel border border-[#d6a84f]/20 text-[#879296] hover:text-[#f2d58a] hover:border-[#d6a84f]/40 transition-colors no-underline group"
              >
                <svg 
                  className="h-3.5 w-3.5 text-[#d6a84f] flex-shrink-0 group-hover:text-[#f2d58a] transition-colors" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="font-mono-tech text-[11px]">{eventData.footer.instagram}</span>
              </a>

              <a
                href={`mailto:${eventData.footer.email}`}
                className="flex items-center gap-2.5 p-2 rounded tech-panel border border-[#d6a84f]/20 text-[#879296] hover:text-[#f2d58a] hover:border-[#d6a84f]/40 transition-colors no-underline group"
              >
                <Mail className="h-3.5 w-3.5 text-[#d6a84f] flex-shrink-0 group-hover:text-[#f2d58a] transition-colors" />
                <span className="font-mono-tech text-[11px]">{eventData.footer.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d6a84f]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#879296]">
          <div>
            &copy; {new Date().getFullYear()} {eventData.name} | {eventData.festName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>HOSTED BY</span>
            <span className="text-[#f2d58a] font-bold">{eventData.organizer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
