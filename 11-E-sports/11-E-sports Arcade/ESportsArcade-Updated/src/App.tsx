import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import GamesLineupSection from './components/GamesLineupSection';
import RulesSection from './components/RulesSection';
import TestimonialSection from './components/TestimonialSection';
import SponsorSection from './components/SponsorSection';
import CoordinatorsSection from './components/CoordinatorsSection';
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
      {/* Global Background Video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-[#030508]">
        <iframe
          className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 blur-xl pointer-events-none"
          src="https://www.youtube.com/embed/f77SKdyn-1Y?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&playsinline=1&playlist=f77SKdyn-1Y"
          allow="autoplay; encrypted-media"
          title="Groot Background"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/90 via-[#030508]/60 to-[#030508]/90 z-10 pointer-events-none"></div>
      </div>
      
      <InteractiveBackground />
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <GamesLineupSection />
        <RulesSection />
        <TestimonialSection />
        <SponsorSection />
        <CoordinatorsSection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919952747859" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:bg-[#128C7E] hover:scale-110 hover:-translate-y-2 transition-all duration-300 animate-bounce hover:animate-none"
        aria-label="Chat with Coordinator on WhatsApp"
      >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
