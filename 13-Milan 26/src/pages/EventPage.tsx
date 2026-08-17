import React from 'react';
import { ShieldHudCanvas } from '../components/canvas/ShieldHudCanvas';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { AboutConclave } from '../components/sections/AboutConclave';
import { WhyMilan } from '../components/sections/WhyMilan';
import { WhatOffers } from '../components/sections/WhatOffers';
import { CollaborativeInnovation } from '../components/sections/CollaborativeInnovation';
import { FutureReadyGeneration } from '../components/sections/FutureReadyGeneration';
import { CinematicManifesto } from '../components/sections/CinematicManifesto';
import { ClosingSection } from '../components/sections/ClosingSection';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-[#F8FAFC] selection:bg-[#1D4ED8] selection:text-white antialiased">
      {/* Background Interactive S.H.I.E.L.D. Tactical HUD Canvas */}
      <ShieldHudCanvas />

      {/* Top Command Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutConclave />
        <WhyMilan />
        <WhatOffers />
        <CollaborativeInnovation />
        <FutureReadyGeneration />
        <CinematicManifesto />
        <ClosingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
