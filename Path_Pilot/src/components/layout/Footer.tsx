import React from 'react';
import { Calendar, Clock, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#25292E] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Organizer (4 cols) */}
          <div className="lg:col-span-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group mb-4 inline-flex"
            >
              <div 
                className="w-8 h-8 rounded flex items-center justify-center font-display text-white text-base font-bold transition-transform group-hover:scale-105 border border-[#A30F18]/50"
                style={{
                  background: 'linear-gradient(135deg, #191C20 0%, #111316 100%)',
                }}
              >
                {eventData.logoText}
              </div>
              <div>
                <div className="text-[#E8E8E8] font-display text-base tracking-wider uppercase leading-none group-hover:text-[#A30F18] transition-colors">
                  {eventData.name}
                </div>
                <div className="text-[#A30F18] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5 font-semibold">
                  {eventData.organizer}
                </div>
              </div>
            </div>

            <p className="text-[#9A9DA1] text-xs leading-relaxed mb-6 font-normal max-w-sm">
              {eventData.footer.description}
            </p>

            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#A30F18] hover:bg-[#D51F2A] text-[#FFFFFF] font-mono-tech text-xs uppercase tracking-widest font-bold transition-all cursor-pointer glow-btn-red no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#FFFFFF]" />
            </a>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col space-y-2.5">
              {navSections.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-[#9A9DA1] hover:text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span className="text-[#A30F18] mr-2 font-bold">{link.index}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Event Specifications (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              EVENT
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-[#9A9DA1]">
              <div className="flex items-start gap-2">
                <Calendar className="h-3.5 w-3.5 text-[#A30F18] flex-shrink-0 mt-0.5" />
                <span>{eventData.date}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 text-[#777D83] flex-shrink-0 mt-0.5" />
                <span>{eventData.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#A30F18] flex-shrink-0 mt-0.5" />
                <span>{eventData.venue}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Official General Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#E8E8E8] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              GENERAL CONTACT
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-[#9A9DA1]">
              <div className="text-[#E8E8E8] font-semibold mb-1">
                {eventData.organizer} | {eventData.festName}
              </div>
              
              <a
                href={eventData.footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded tech-panel border border-[#25292E] bg-[#111316]/60 text-[#9A9DA1] hover:text-[#E8E8E8] hover:border-[#A30F18]/50 transition-colors no-underline group"
              >
                <svg 
                  className="h-4 w-4 text-[#A30F18] flex-shrink-0 group-hover:text-[#D51F2A] transition-colors" 
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
                <span className="font-mono-tech text-xs">{eventData.footer.instagram}</span>
              </a>

              <a
                href={`mailto:${eventData.footer.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded tech-panel border border-[#25292E] bg-[#111316]/60 text-[#9A9DA1] hover:text-[#E8E8E8] hover:border-[#A30F18]/50 transition-colors no-underline group"
              >
                <Mail className="h-4 w-4 text-[#A30F18] flex-shrink-0 group-hover:text-[#D51F2A] transition-colors" />
                <span className="font-mono-tech text-xs">{eventData.footer.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#25292E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#9A9DA1]">
          <div>
            &copy; {new Date().getFullYear()} {eventData.name} | {eventData.festName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>ORGANIZED BY</span>
            <span className="text-[#A30F18] font-bold">{eventData.organizer}</span>
            <span className="text-[#4A5056]">|</span>
            <span className="text-[#E8E8E8]">{eventData.footer.institution}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};




