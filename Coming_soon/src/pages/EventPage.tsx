import React from 'react';
import { AtmosphericBackground } from '../components/background/AtmosphericBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { NextChapter } from '../components/sections/NextChapter';

export const EventPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050807] text-[#F1F5F2] antialiased selection:bg-[#16A36A]/40 selection:text-[#7CFFCB]">
      {/* Global Layered Mystic Background */}
      <AtmosphericBackground />

      {/* Sticky Minimal Header */}
      <Navbar />

      {/* Main Coming Soon Presentation */}
      <main className="relative z-10">
        <Hero />
        <NextChapter />
      </main>

      {/* Minimal Mystic Footer */}
      <Footer />
    </div>
  );
};
