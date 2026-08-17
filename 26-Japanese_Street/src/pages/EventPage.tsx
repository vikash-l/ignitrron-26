import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { EventCarousel } from '../components/sections/EventCarousel';
import { Activities } from '../components/sections/Categories';
import { Schedule } from '../components/sections/Timeline';
import { Guidelines } from '../components/sections/Rules';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#F1E8D5] antialiased selection:bg-[#C63C32]/40 selection:text-white">
      {/* Global Layered Night Street Atmospheric Background */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Recommended Sequential Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EventCarousel />
        <Activities />
        <Schedule />
        <Guidelines />
        <FAQ />
        <Contact />
        <RegistrationCTA />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
};
