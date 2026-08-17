import React from 'react';
import { EventConfig } from '../types/event';
import { GhostRiderBackground } from '../components/ui/GhostRiderBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Machines } from '../components/sections/Machines';
import { Venue } from '../components/sections/Venue';
import { EventControl } from '../components/sections/EventControl';
import { FAQ } from '../components/sections/FAQ';
import { FinalCta } from '../components/sections/FinalCta';

export interface EventPageProps {
  event: EventConfig;
}

export const EventPage: React.FC<EventPageProps> = ({ event }) => {
  return (
    <div className="min-h-screen bg-[#030303] text-[#F5F2EC] selection:bg-[#D72614] selection:text-white relative font-sans">
      {/* Global continuous background layer (Asphalt + Fire Trails + Embers + Smoke) */}
      <GhostRiderBackground />

      {/* Universal Sticky Navbar */}
      <Navbar event={event} />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        {event.sections.hero && (
          <Hero event={event} />
        )}

        {event.sections.eventInfo && (
          <EventInfo event={event} />
        )}

        {event.sections.about && (
          <About event={event} />
        )}

        {event.sections.experience && (
          <Experience event={event} />
        )}

        {event.sections.machines && (
          <Machines event={event} />
        )}

        {event.sections.venue && (
          <Venue event={event} />
        )}

        {event.sections.contact && (
          <EventControl event={event} />
        )}

        {event.sections.faq && (
          <FAQ event={event} />
        )}

        {event.sections.finalCta && (
          <FinalCta event={event} />
        )}
      </main>

      {/* Footer */}
      <Footer event={event} />
    </div>
  );
};
