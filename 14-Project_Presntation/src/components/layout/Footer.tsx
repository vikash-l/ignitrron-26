import React from 'react';
import { Calendar, Clock, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02040a] border-t border-blue-900/30 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Organizer (4 cols) */}
          <div className="lg:col-span-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group mb-4 inline-flex"
            >
              <div 
                className="w-8 h-8 rounded flex items-center justify-center font-display text-white text-base font-bold transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                }}
              >
                {eventData.logoText}
              </div>
              <div>
                <div className="text-white font-display text-base tracking-wider uppercase leading-none group-hover:text-blue-300 transition-colors">
                  {eventData.name}
                </div>
                <div className="text-cyan-400 font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                  {eventData.organizer}
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal max-w-sm">
              {eventData.footer.description}
            </p>

            <a
              href={eventData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md shadow-blue-600/30 no-underline"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-cyan-200" />
            </a>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col space-y-2.5">
              {navSections.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-400 hover:text-cyan-300 font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span className="text-blue-400 mr-2 font-bold">{link.index}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Event Specifications (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              EVENT
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Calendar className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>18 September 2026</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{eventData.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>KPRIET ECE Classroom</span>
              </div>
            </div>
          </div>

          {/* Column 4: Official General Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-mono-tech text-xs uppercase tracking-widest font-bold mb-4">
              GENERAL CONTACT
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-slate-400">
              <div className="text-slate-300 font-semibold mb-1">
                {eventData.organizer}
              </div>
              
              <a
                href={eventData.footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded tech-panel border border-blue-900/30 text-slate-300 hover:text-cyan-300 hover:border-blue-700/50 transition-colors no-underline group"
              >
                <svg 
                  className="h-4 w-4 text-cyan-400 flex-shrink-0 group-hover:text-cyan-300 transition-colors" 
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
                className="flex items-center gap-2.5 p-2.5 rounded tech-panel border border-blue-900/30 text-slate-300 hover:text-cyan-300 hover:border-blue-700/50 transition-colors no-underline group"
              >
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <span className="font-mono-tech text-xs">{eventData.footer.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {eventData.name} | {eventData.festName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>HOSTED BY</span>
            <span className="text-cyan-400 font-bold">{eventData.organizer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
