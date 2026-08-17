import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Highlights } from '../components/sections/Highlights';
import { Rounds } from '../components/sections/Rounds';
import { Timeline } from '../components/sections/Timeline';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
import { Sponsors } from '../components/sections/Sponsors';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';
import { SectionConfigController } from '../components/ui/SectionConfigController';
import { AtmosphereBackground } from '../components/ui/AtmosphereBackground';
import { LokiCursorTrail } from '../components/ui/LokiCursorTrail';
import { eventData } from '../data/event';

export const EventPage: React.FC = () => {
  const [sections, setSections] = useState<{ [key: string]: boolean }>(eventData.sections);

  const handleSectionToggle = (key: string, value: boolean) => {
    setSections(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen text-slate-300 bg-[#020604] selection:bg-[#00E676]/30 selection:text-white relative">
      {/* Subtle Loki Green Atmospheric Ambient Background */}
      <AtmosphereBackground />

      {/* Custom Green Loki Cursor Trail (does NOT hide default cursor) */}
      <LokiCursorTrail />

      {/* Sticky Navigation */}
      <Navbar sections={sections} />

      {/* Main Sections */}
      <main className="relative z-10">
        {sections.hero && <Hero />}
        {sections.eventInfo && <EventInfo />}
        {sections.about && <About />}
        {sections.stats && <Stats />}
        {sections.highlights && <Highlights />}
        {sections.rounds && <Rounds />}
        {sections.timeline && <Timeline />}
        {sections.rules && <Rules />}
        {sections.prizes && <Prizes />}
        {sections.sponsors && <Sponsors />}
        {sections.faq && <FAQ />}
        {sections.registration && <RegistrationCTA />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic visibility floating controller */}
      <SectionConfigController sections={sections} onChange={handleSectionToggle} />
    </div>
  );
};
