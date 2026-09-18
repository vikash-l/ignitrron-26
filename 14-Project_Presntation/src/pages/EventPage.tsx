import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { EventInfo } from '../components/sections/EventInfo';
import { Categories } from '../components/sections/Categories';
import { Highlights } from '../components/sections/Highlights';
import { Rounds } from '../components/sections/Rounds';
import { Timeline } from '../components/sections/Timeline';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#02040A] text-slate-300 antialiased selection:bg-blue-600/30 selection:text-white">
      {/* Global Layered Atmospheric Background */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Recommended Sequential Page Flow */}
      <main className="relative z-10">
        <Hero />
        <Categories />
        <About />
        <EventInfo />
        <Highlights />
        <Rounds />
        <Timeline />
        <Rules />
        <Prizes />
        <FAQ />
        <Contact />
        <RegistrationCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
};
