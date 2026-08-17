import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import StorySection from './components/StorySection';
import GamesLineupSection from './components/GamesLineupSection';
import PricingSection from './components/PricingSection';
import RulesSection from './components/RulesSection';
import TestimonialSection from './components/TestimonialSection';
import SponsorSection from './components/SponsorSection';
import Footer from './components/Footer';

import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#030508] text-[#e0e0e0] font-sans selection:bg-[#39ff14] selection:text-black relative">
      {/* Global Background */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-[url('/dark_jungle_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/80 via-[#030508]/60 to-[#030508]/90 z-10 pointer-events-none"></div>
      </div>
      
      <InteractiveBackground />
      <Header />
      <main>
        <HeroSection />
        <CountdownSection />
        <StorySection />
        <GamesLineupSection />
        <PricingSection />
        <RulesSection />
        <TestimonialSection />
        <SponsorSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
