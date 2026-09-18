import React from 'react';
import { Phone, User, Landmark } from 'lucide-react';
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
    { id: 'researchJourney', label: 'Journey', show: eventData.sections.researchJourney },
    { id: 'rounds', label: 'Rounds', show: eventData.sections.rounds },
    { id: 'timeline', label: 'Timeline', show: eventData.sections.timeline },
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
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-black tracking-wider cursor-pointer bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent hover:brightness-110 transition-all mb-4 inline-block"
            >
              {eventData.name}
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Organized by the **Science Club**. Experience the scientific transformation from identifying a problem to defending a novel research idea.
            </p>
            {/* Social Icons (mocked/empty or default) */}
            {eventData.socials && eventData.socials.length > 0 && (
              <div className="flex space-x-4">
                {eventData.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors duration-200"
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
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider uppercase font-mono text-emerald-400">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
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
              <h3 className="text-white font-bold text-sm mb-6 tracking-wider uppercase font-mono text-emerald-400">Faculty Coordinator</h3>
              <ul className="space-y-4 mb-6">
                {eventData.contact.faculty && (
                  <li className="flex items-center text-sm text-slate-400">
                    <User className="h-4.5 w-4.5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span>{eventData.contact.faculty}</span>
                  </li>
                )}
              </ul>

              {eventData.contact.students && (
                <>
                  <h3 className="text-white font-bold text-sm mb-4 tracking-wider uppercase font-mono text-emerald-400">Student Coordinators</h3>
                  <ul className="space-y-3">
                    {eventData.contact.students.map((student, idx) => (
                      <li key={idx} className="flex flex-col text-xs text-slate-400">
                        <span className="font-bold text-slate-350 text-slate-300">{student.name}</span>
                        <a href={`tel:${student.phone}`} className="hover:text-emerald-400 transition-colors flex items-center mt-1">
                          <Phone className="h-3 w-3 text-emerald-500 mr-1.5" />
                          {student.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {/* Venue Info Card */}
          <div>
            <h3 className="text-white font-bold text-sm mb-6 tracking-wider uppercase font-mono text-emerald-400">Venue & Host</h3>
            <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-900">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-1">
                MECH CLASS
              </span>
              <p className="text-slate-300 text-xs font-bold leading-relaxed mb-2">
                Science Club Campus Event
              </p>
              <div className="flex items-center text-[10px] text-slate-500 font-semibold uppercase tracking-wider gap-1">
                <Landmark className="h-3.5 w-3.5 text-emerald-600" />
                Day 2 - On campus
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {eventData.name}. Science Club. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-400 transition-colors">Guidelines</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Academic Integrity</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
