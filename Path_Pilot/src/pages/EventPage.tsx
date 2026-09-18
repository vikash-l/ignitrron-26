import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Categories } from '../components/sections/Categories';
import { Rounds } from '../components/sections/Rounds';
import { Rules } from '../components/sections/Rules';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#9A9DA1] antialiased selection:bg-[#A30F18]/30 selection:text-[#E8E8E8]">
      {/* Global Layered Atmospheric Background with Sensor Trajectories & Radar Grid */}
      <AtmosphericBackground />

      {/* Sticky Header Navigation (5 Compact Sections + Register CTA) */}
      <Navbar />

      {/* Structured Autonomous Robotics Event Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Categories />
        <Rounds />
        <Rules />
        <FAQ />
        <Contact />
        <RegistrationCTA />
      </main>

      {/* Premium Technical Footer */}
      <Footer />
    </div>
  );
};


