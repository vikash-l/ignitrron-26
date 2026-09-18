import React from 'react';
import { OscorpTechCanvas } from '../components/canvas/OscorpTechCanvas';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { AboutEvent } from '../components/sections/AboutEvent';
import { PresentationFormat } from '../components/sections/PresentationFormat';
import { WhatTeamsShouldPresent } from '../components/sections/WhatTeamsShouldPresent';
import { BusinessModelCanvasBoard } from '../components/sections/BusinessModelCanvasBoard';
import { WhyParticipate } from '../components/sections/WhyParticipate';
import { Prizes } from '../components/sections/Prizes';
import { EventHighlights } from '../components/sections/EventHighlights';
import { Contact } from '../components/sections/Contact';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] text-[#f8fafc] selection:bg-[#00ff88] selection:text-[#050816] antialiased">
      {/* Background Interactive Oscorp Tech Node Network Canvas */}
      <OscorpTechCanvas />

      {/* Top Corporate Command Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutEvent />
        <PresentationFormat />
        <WhatTeamsShouldPresent />
        <BusinessModelCanvasBoard />
        <WhyParticipate />
        <Prizes />
        <EventHighlights />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
