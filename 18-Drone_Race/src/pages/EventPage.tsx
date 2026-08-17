import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About as Race } from '../components/sections/About';
import { Rounds as Format } from '../components/sections/Rounds';
import { Categories as Specs } from '../components/sections/Categories';
import { Rules } from '../components/sections/Rules';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050607] text-[#879296] antialiased selection:bg-[#d6a84f]/30 selection:text-[#f3f3ef]">
      {/* Global Layered Aerospace Atmospheric Background */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Recommended Sequential Page Flow */}
      <main className="relative z-10">
        <Hero />
        <Race />
        <Format />
        <Specs />
        <Rules />
        <FAQ />
        <Contact />
        <RegistrationCTA />
      </main>

      {/* Minimal Editorial Aerospace Footer */}
      <Footer />
    </div>
  );
};
