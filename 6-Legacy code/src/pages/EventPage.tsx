import React from 'react';
import type { EventConfig, SectionConfig } from '../data/event.types';
import { defaultSectionConfig } from '../config/sections.config';
import { legacyCodeRescueEvent } from '../data/legacy-code-rescue';
import { UltronBackground } from '../components/ui/UltronBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { Highlights } from '../components/sections/Highlights';
import { Rounds } from '../components/sections/Rounds';
import { Timeline } from '../components/sections/Timeline';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
import { Sponsors } from '../components/sections/Sponsors';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export interface EventPageProps {
  event?: EventConfig;
}

export const EventPage: React.FC<EventPageProps> = ({ event = legacyCodeRescueEvent }) => {
  // Merge default section config with event section overrides
  const sections: SectionConfig = {
    ...defaultSectionConfig,
    ...(event.sections || {}),
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] flex flex-col font-sans antialiased">
      {/* Ultron Machine Background Elements & Telemetry Overlay */}
      <UltronBackground />

      {/* Top Fixed Navbar */}
      <Navbar event={event} sections={sections} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {sections.hero && <Hero event={event} />}
        {sections.eventInfo && <EventInfo event={event} />}
        {sections.stats && <Stats event={event} />}
        {sections.about && <About event={event} />}
        {sections.highlights && <Highlights event={event} />}
        {sections.rounds && <Rounds event={event} />}
        {sections.timeline && <Timeline event={event} />}
        {sections.rules && <Rules event={event} />}
        {sections.prizes && <Prizes event={event} />}
        {sections.sponsors && <Sponsors event={event} />}
        {sections.faq && <FAQ event={event} />}
        {sections.registration && <RegistrationCTA event={event} />}
      </main>

      {/* Footer */}
      <Footer event={event} sections={sections} />
    </div>
  );
};

export default EventPage;
