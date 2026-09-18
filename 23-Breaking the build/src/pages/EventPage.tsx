import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Session } from '../components/sections/Session';
import { Guest } from '../components/sections/Guest';
import { Experience } from '../components/sections/Experience';
import { SessionInfo } from '../components/sections/SessionInfo';
import { Conduct } from '../components/sections/Conduct';
import { Certificates } from '../components/sections/Certificates';
import { Coordinators } from '../components/sections/Coordinators';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030304] text-[#A8A09A] antialiased selection:bg-[#B42318]/40 selection:text-[#F5F1ED]">
      {/* Global Layered Cosmic Crimson Atmospheric Background */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation (6 primary items + CTA) */}
      <Navbar />

      {/* Sequential Event Flow */}
      <main className="relative z-10">
        <Hero />
        <Session />
        <Guest />
        <Experience />
        <SessionInfo />
        <Coordinators />
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
