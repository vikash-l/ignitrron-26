import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Obstacles } from '../components/sections/Obstacles';
import { RaceJourney } from '../components/sections/RaceJourney';
import { Rounds } from '../components/sections/Rounds';
import { TrackVisual } from '../components/sections/TrackVisual';
import { Judging } from '../components/sections/Judging';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
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
    <div className="min-h-screen text-slate-300 bg-transparent selection:bg-sky-500/30 selection:text-white relative z-10">
      {/* Sticky Navigation */}
      <Navbar sections={sections} />

      {/* Main Sections */}
      <main>
        {sections.hero && <Hero />}
        {sections.eventInfo && <EventInfo />}
        {sections.about && <About />}
        {sections.stats && <Stats />}
        {sections.highlights && <Obstacles />}
        {sections.researchJourney && <RaceJourney />}
        {sections.rounds && <Rounds />}
        {sections.rounds && <TrackVisual />}
        {sections.rounds && <Judging />}
        {sections.rules && <Rules />}
        {sections.prizes && <Prizes />}
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
