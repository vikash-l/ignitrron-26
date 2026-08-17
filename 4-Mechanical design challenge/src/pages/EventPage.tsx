import React from 'react';
import { SpiderCadCanvas } from '../components/canvas/SpiderCadCanvas';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { EventFlow } from '../components/sections/EventFlow';
import { Rules } from '../components/sections/Rules';
import { Software } from '../components/sections/Software';
import { WhyParticipate } from '../components/sections/WhyParticipate';
import { Contact } from '../components/sections/Contact';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#05060b] text-slate-100 selection:bg-[#ff0055] selection:text-white">
      {/* Background Interactive Spider-Verse CAD Canvas */}
      <SpiderCadCanvas />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EventFlow />
        <Rules />
        <Software />
        <WhyParticipate />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
