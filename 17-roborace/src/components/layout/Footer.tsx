import React from 'react';
import { Phone, User, Landmark } from 'lucide-react';
import { eventData } from '../../data/event';

export const Footer: React.FC = () => {
  const navLinks = [
    { id: 'about', label: 'About', show: eventData.sections.about },
    { id: 'raceJourney', label: 'Race Journey', show: eventData.sections.researchJourney },
    { id: 'rounds', label: 'Rounds', show: eventData.sections.rounds },
    { id: 'obstacles', label: 'Obstacles', show: eventData.sections.highlights },
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
    <footer id="contact" className="bg-transparent border-t border-zinc-900 pt-16 pb-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl sm:text-2xl font-black tracking-widest cursor-pointer text-white hover:text-sky-400 font-display transition-all mb-2 inline-block uppercase"
            >
              {eventData.name}
            </span>
            <div className="text-[10px] font-bold text-sky-400 font-mono tracking-widest mb-4 uppercase">
              // SPEED WITHOUT LIMITS.
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Organized by **ARC**. Build your customized RC racing machine, conquer 17 technical track hazards, and beat the clock to win the championship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs mb-6 tracking-widest uppercase font-mono text-sky-400">// Navigation</h3>
            <ul className="space-y-3 font-mono">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-120 cursor-pointer"
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
              <h3 className="text-white font-bold text-xs mb-6 tracking-widest uppercase font-mono text-sky-400">// Faculty</h3>
              <ul className="space-y-4 mb-6">
                {eventData.contact.faculty && (
                  <li className="flex items-center text-xs text-slate-400">
                    <User className="h-4 w-4 text-sky-400 mr-3 flex-shrink-0" />
                    <span>{eventData.contact.faculty}</span>
                  </li>
                )}
              </ul>

              {eventData.contact.students && (
                <>
                  <h3 className="text-white font-bold text-xs mb-4 tracking-widest uppercase font-mono text-sky-400">// Coordinators</h3>
                  <ul className="space-y-3 font-mono">
                    {eventData.contact.students.map((student, idx) => (
                      <li key={idx} className="flex flex-col text-xs text-slate-400">
                        <span className="font-bold text-slate-300">{student.name}</span>
                        <a href={`tel:${student.phone}`} className="hover:text-white transition-colors flex items-center mt-1">
                          <Phone className="h-3.5 w-3.5 text-sky-400 mr-1.5" />
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
            <h3 className="text-white font-bold text-xs mb-6 tracking-widest uppercase font-mono text-sky-400">// Location & Date</h3>
            <div className="p-4 rounded border border-zinc-850 bg-zinc-900/10">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-1 font-mono">
                {eventData.venue}
              </span>
              <p className="text-slate-300 text-xs font-bold leading-relaxed mb-2">
                ARC Arena
              </p>
              <div className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest gap-1.5 font-mono">
                <Landmark className="h-3.5 w-3.5 text-sky-500" />
                {eventData.date} - ON-CAMPUS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-slate-550">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {eventData.name}. Organized by ARC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#rules" className="hover:text-slate-400 transition-colors uppercase tracking-wider">Specifications</a>
            <a href="#about" className="hover:text-slate-400 transition-colors uppercase tracking-wider">General Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
