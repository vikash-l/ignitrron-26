import React from 'react';
import { Globe, PhoneCall, Radio, UserCheck, Users } from 'lucide-react';
import type { EventConfig, SectionConfig } from '../../data/event.types';
import { Container } from '../ui/Container';

export interface FooterProps {
  event: EventConfig;
  sections: SectionConfig;
}

export const Footer: React.FC<FooterProps> = ({ event, sections }) => {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'MISSION', href: '#about', visible: sections.about },
    { label: 'PROTOCOL', href: '#rounds', visible: sections.rounds },
    { label: 'TIMELINE', href: '#timeline', visible: sections.timeline },
    { label: 'RULES', href: '#rules', visible: sections.rules },
    { label: 'REWARDS', href: '#prizes', visible: sections.prizes },
    { label: 'FAQ', href: '#faq', visible: sections.faq },
  ].filter((link) => link.visible);

  const hasContacts = Boolean(
    (event.facultyCoordinators && event.facultyCoordinators.length > 0) ||
      (event.organizers && event.organizers.length > 0)
  );

  return (
    <footer className="bg-[#070809] border-t border-[#262A33] pt-12 pb-10 text-xs font-mono text-[#9CA3AA]">
      <Container size="lg">
        {/* Mission Control Panel with Distinct Sections */}
        {hasContacts && (
          <div className="mb-10 p-6 bg-[#121418] border border-[#262A33] clip-corner-sm space-y-6">
            <div className="flex items-center gap-2 text-[10px] tracking-widest text-[#F04444] uppercase font-bold border-b border-[#262A33] pb-3">
              <Radio className="w-3.5 h-3.5" />
              <span>MISSION CONTROL // CONTACT DIRECTORY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Distinct Faculty Coordinator Section */}
              {event.facultyCoordinators && event.facultyCoordinators.length > 0 && (
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-[#E8EAED] uppercase font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-[#F04444]" />
                    <span>FACULTY COORDINATOR</span>
                  </div>
                  {event.facultyCoordinators.map((faculty, idx) => (
                    <div
                      key={idx}
                      className="bg-[#171A21] p-4 border-l-2 border-l-[#F04444] border-y border-r border-[#3A404E] space-y-1.5 clip-corner-sm"
                    >
                      <div className="font-bold text-sm text-[#E8EAED]">
                        {faculty.name}
                      </div>
                      <div className="text-[10px] text-[#9CA3AA] tracking-widest uppercase">
                        {faculty.role || 'FACULTY COORDINATOR'}
                      </div>
                      <a
                        href={`tel:${faculty.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1.5 text-xs text-[#F04444] font-bold hover:underline pt-1"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>{faculty.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {/* Distinct Event Organizers Section */}
              {event.organizers && event.organizers.length > 0 && (
                <div className="lg:col-span-7 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-[#E8EAED] uppercase font-semibold">
                    <Users className="w-3.5 h-3.5 text-[#9CA3AA]" />
                    <span>EVENT ORGANIZERS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                    {event.organizers.map((organizer, idx) => (
                      <div
                        key={idx}
                        className="bg-[#171A21] p-3.5 border border-[#2B2F38] space-y-1 hover:border-[#3A404E] transition-colors"
                      >
                        <div className="font-bold text-xs text-[#E8EAED] truncate">
                          {organizer.name}
                        </div>
                        <div className="text-[9px] text-[#626870] tracking-widest uppercase">
                          ORGANIZER
                        </div>
                        <a
                          href={`tel:${organizer.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center gap-1 text-[11px] text-[#F04444] hover:underline pt-1"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>{organizer.phone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#262A33]">
          {/* Quick Navigation Links */}
          <div className="md:col-span-6 space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[#E8EAED] font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-1.5 text-xs text-[#9CA3AA]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#E8EAED] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Platform */}
          <div className="md:col-span-6 space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[#E8EAED] font-bold">
              SYSTEM CHANNELS
            </h4>
            {event.socialLinks && event.socialLinks.length > 0 ? (
              <ul className="space-y-1.5 text-xs text-[#9CA3AA]">
                {event.socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E8EAED] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#F04444]" />
                      <span>{social.platform}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[10px] text-[#626870]">
                NO ACTIVE CHANNELS
              </p>
            )}
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#626870] uppercase tracking-widest">
          <div>
            © {year} {event.name}. ALL RIGHTS RESERVED.
          </div>
          <div>
            SYSTEM RECONSTRUCTION // CODE RECOVERY // EVOLVE
          </div>
        </div>
      </Container>
    </footer>
  );
};
