import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Highlights } from '../components/sections/Highlights';
import { ResearchJourney } from '../components/sections/ResearchJourney';
import { Rounds } from '../components/sections/Rounds';
import { Timeline } from '../components/sections/Timeline';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
import { Sponsors } from '../components/sections/Sponsors';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';
import { SectionConfigController } from '../components/ui/SectionConfigController';
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
    <div className={`min-h-screen text-slate-350 ${eventData.theme.bgColor} selection:bg-emerald-600/30 selection:text-white`}>
      {/* Sticky Navigation */}
      <Navbar sections={sections} />

      {/* Main Sections */}
      <main>
        {sections.hero && <Hero />}
        {sections.eventInfo && <EventInfo />}
        {sections.about && <About />}
        {sections.stats && <Stats />}
        {sections.highlights && <Highlights />}
        {sections.researchJourney && <ResearchJourney />}
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
