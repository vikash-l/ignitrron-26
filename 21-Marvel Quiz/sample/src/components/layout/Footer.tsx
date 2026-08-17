import React from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { eventData } from '../../data/event';

export const Footer: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    const iconClass = "h-5 w-5";
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'twitter':
      case 'x':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'github':
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const navLinks = [
    { id: 'about', label: 'About', show: eventData.sections.about },
    { id: 'highlights', label: 'Highlights', show: eventData.sections.highlights },
    { id: 'rounds', label: 'Rounds', show: eventData.sections.rounds },
    { id: 'timeline', label: 'Schedule', show: eventData.sections.timeline },
    { id: 'rules', label: 'Rules', show: eventData.sections.rules },
    { id: 'prizes', label: 'Prizes', show: eventData.sections.prizes },
  ].filter(link => link.show);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020604] border-t border-[#063D29] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer mb-4 inline-flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-[#00E676]" />
              <span className="text-xl font-black tracking-wider text-white">
                MARVEL <span className="text-[#00E676]">QUIZ</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {eventData.description}
            </p>
            {/* Social Icons */}
            {eventData.socials && eventData.socials.length > 0 && (
              <div className="flex space-x-4">
                {eventData.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 rounded-lg bg-[#020604] border border-[#063D29] text-slate-400 hover:text-[#00E676] hover:border-[#00E676]/40 transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-[#00E676] text-sm font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          {eventData.contact && (
            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">TVA Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-sm text-slate-400">
                  <Mail className="h-5 w-5 text-[#00E676] mr-3 flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${eventData.contact.email}`} className="hover:text-[#00E676] transition-colors">
                    {eventData.contact.email}
                  </a>
                </li>
                <li className="flex items-start text-sm text-slate-400">
                  <Phone className="h-5 w-5 text-[#C9A227] mr-3 flex-shrink-0 mt-0.5" />
                  <a href={`tel:${eventData.contact.phone}`} className="hover:text-[#C9A227] transition-colors">
                    {eventData.contact.phone}
                  </a>
                </li>
                <li className="flex items-start text-sm text-slate-400">
                  <MapPin className="h-5 w-5 text-[#00E676] mr-3 flex-shrink-0 mt-0.5" />
                  <span>{eventData.contact.location}</span>
                </li>
              </ul>
            </div>
          )}

          {/* Event Host Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Event Host</h3>
            <div className="p-4 rounded-lg bg-[#020604] border border-[#063D29]">
              <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-1">
                IGNITRRON '26
              </span>
              <p className="text-slate-200 text-xs font-semibold leading-relaxed mb-2">
                KPR Institute of Engineering and Technology
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Coimbatore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#063D29] pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IGNITRRON '26 MARVEL QUIZ. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-[#00E676] transition-colors">TVA Protocols</a>
            <a href="#" className="hover:text-[#00E676] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00E676] transition-colors">Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
