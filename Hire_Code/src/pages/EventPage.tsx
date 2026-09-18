import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Session } from '../components/sections/Session';
import { Guest } from '../components/sections/Guest';
import { Experience } from '../components/sections/Experience';
import { VideoResume } from '../components/sections/VideoResume';
import { SessionInfo } from '../components/sections/SessionInfo';
import { Conduct } from '../components/sections/Conduct';
import { Certificates } from '../components/sections/Certificates';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#05070A] text-[#E8EEF2] antialiased selection:bg-[#00BFA6]/30 selection:text-[#22D3EE]">
      {/* Global Layered Obsidian & Emerald Atmospheric Background */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation (5 primary items + CTA) */}
      <Navbar />

      {/* Sequential Event Flow */}
      <main className="relative z-10">
        <Hero />
        <Session />
        <Guest />
        <Experience />
        <VideoResume />
        <SessionInfo />
        <Conduct />
        <Certificates />
        <FAQ />
        <RegistrationCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
};

