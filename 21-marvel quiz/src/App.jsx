import React, { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LokiMagicCursor } from './components/LokiMagicCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { EventIntro } from './components/EventIntro';
import { EventOverview } from './components/EventOverview';
import { WhatAwaitsYou } from './components/WhatAwaitsYou';
import { RoundsSection } from './components/RoundsSection';
import { EventTimeline } from './components/EventTimeline';
import { RulesSection } from './components/RulesSection';
import { PrizeSection } from './components/PrizeSection';
import { EventTeam } from './components/EventTeam';
import { FAQSection } from './components/FAQSection';
import { EasterEggs } from './components/EasterEggs';
import { Footer } from './components/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#030504] text-[#F4F5F3] relative overflow-x-hidden selection:bg-[#16A66A]/30 selection:text-[#38E39A]">
      
      {/* Cinematic Loki Loading Intro */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Persistent Canvas Background */}
      <AnimatedBackground />

      {/* Custom Loki Green Magic Cursor */}
      <LokiMagicCursor />

      {/* Hidden Easter Eggs */}
      <EasterEggs />

      {/* Main Informational Landing Microsite */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <CinematicHero />
            <EventIntro />
            <EventOverview />
            <WhatAwaitsYou />
            <RoundsSection />
            <EventTimeline />
            <RulesSection />
            <PrizeSection />
            <EventTeam />
            <FAQSection />
            <Footer />
          </main>
        </>
      )}

    </div>
  );
}

export default App;
