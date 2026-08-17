import React from 'react';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { eventData, navSections } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090C] border-t border-[#C9A45C]/25 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Experience Info (5 cols) */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group mb-4 inline-flex"
            >
              <div 
                className="w-8 h-8 rounded flex items-center justify-center font-display text-[#F1E8D5] text-base font-bold transition-transform group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #C63C32 0%, #243B63 100%)',
                  border: '1px solid rgba(201, 164, 92, 0.45)',
                  boxShadow: '0 0 16px rgba(198, 60, 50, 0.4)',
                }}
              >
                <span className="text-xs font-mono-tech">JS</span>
              </div>
              <div>
                <div className="text-[#F1E8D5] font-display text-lg tracking-wider uppercase leading-none group-hover:text-[#C9A45C] transition-colors">
                  {eventData.name}
                </div>
                <div className="text-[#C9A45C] font-mono-tech text-[10px] tracking-widest uppercase mt-0.5">
                  {eventData.organizer}
                </div>
              </div>
            </div>

            <p className="text-[#9B9A96] text-xs leading-relaxed mb-6 font-normal max-w-sm">
              {eventData.footer.description}
            </p>

            <a
              href={eventData.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#C63C32] hover:bg-[#A82B22] text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md shadow-[#C63C32]/30 no-underline border border-[#C9A45C]/30"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#C9A45C]" />
            </a>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C63C32]" />
              <span>QUICK LINKS</span>
            </h3>
            <div className="flex flex-col space-y-2.5">
              {navSections.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-[#9B9A96] hover:text-[#C9A45C] font-mono-tech text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span className="text-[#C63C32] mr-2 font-bold">{link.index}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Official General Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="text-[#F1E8D5] font-mono-tech text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
              <span>CONNECT WITH IGNITRRON</span>
            </h3>
            <div className="space-y-3 font-mono-tech text-xs text-[#9B9A96]">
              <div className="text-[#F1E8D5] font-semibold mb-1">
                {eventData.organizer}
              </div>
              
              <a
                href={eventData.footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded ronin-panel border border-[#C9A45C]/25 text-[#F1E8D5] hover:text-[#C9A45C] hover:border-[#C63C32]/60 transition-colors no-underline group"
              >
                <svg 
                  className="h-4 w-4 text-[#C9A45C] flex-shrink-0 group-hover:text-[#C63C32] transition-colors" 
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
                className="flex items-center gap-2.5 p-2.5 rounded ronin-panel border border-[#C9A45C]/25 text-[#F1E8D5] hover:text-[#C9A45C] hover:border-[#C63C32]/60 transition-colors no-underline group"
              >
                <Mail className="h-4 w-4 text-[#C9A45C] flex-shrink-0 group-hover:text-[#C63C32] transition-colors" />
                <span className="font-mono-tech text-xs">{eventData.footer.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A45C]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#9B9A96]">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#C9A45C]" />
            <span>&copy; {new Date().getFullYear()} {eventData.name} | {eventData.festName}. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-2">
            <span>HOSTED BY</span>
            <span className="text-[#C9A45C] font-bold">{eventData.organizer}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
