import React from 'react';
import { Mail } from 'lucide-react';
import { comingSoonData } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050807] border-t border-[#16A36A]/20 pt-14 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#16A36A]/15">
          
          {/* Brand & Statement */}
          <div className="text-center md:text-left">
            <div 
              onClick={scrollToTop}
              className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group mb-3"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display text-white text-base font-bold transition-transform group-hover:scale-105 border border-[#35E6A1]/40"
                style={{
                  background: 'linear-gradient(135deg, #0A1512 0%, #16A36A 100%)',
                }}
              >
                <span className="text-[#7CFFCB]">26</span>
              </div>
              <div className="text-[#F1F5F2] font-display text-xl tracking-widest uppercase leading-none group-hover:text-[#35E6A1] transition-colors">
                {comingSoonData.festName}
              </div>
            </div>

            <p className="text-[#82958C] text-xs font-mono-tech tracking-widest uppercase max-w-md">
              THE NEXT EXPERIENCE IS COMING.
            </p>
          </div>

          {/* Official Social / Email Contacts */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href={comingSoonData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#08110E] border border-[#16A36A]/30 text-[#82958C] hover:text-[#7CFFCB] hover:border-[#35E6A1]/60 transition-all text-xs font-mono-tech tracking-wider no-underline group"
            >
              <svg 
                className="h-4 w-4 text-[#35E6A1] group-hover:text-[#7CFFCB] transition-colors" 
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
              <span>{comingSoonData.social.instagram}</span>
            </a>

            <a
              href={`mailto:${comingSoonData.social.email}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#08110E] border border-[#16A36A]/30 text-[#82958C] hover:text-[#7CFFCB] hover:border-[#35E6A1]/60 transition-all text-xs font-mono-tech tracking-wider no-underline group"
            >
              <Mail className="h-4 w-4 text-[#35E6A1] group-hover:text-[#7CFFCB] transition-colors" />
              <span>{comingSoonData.social.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#82958C]/70">
          <div>
            &copy; {new Date().getFullYear()} {comingSoonData.festName}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span>HOSTED BY</span>
            <span className="text-[#7CFFCB] font-bold">{comingSoonData.organizer}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
