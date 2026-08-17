import { useState } from 'react';
import { WebBackgroundCanvas } from './components/WebBackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MysteryBoxSection } from './components/MysteryBoxSection';
import { DiscoverSection } from './components/DiscoverSection';
import { BuildSection } from './components/BuildSection';
import { MysteryTwistSection } from './components/MysteryTwistSection';
import { PitchSection } from './components/PitchSection';
import { LookingForSection } from './components/LookingForSection';
import { TeamSizeSection } from './components/TeamSizeSection';
import { PrizeSection } from './components/PrizeSection';
import { EventDetailsSection } from './components/EventDetailsSection';
import { CrewSection } from './components/CrewSection';
import { WhyLaunchpadSection } from './components/WhyLaunchpadSection';
import { FinalCTASection } from './components/FinalCTASection';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';
import type { DomainPrompt } from './utils/domainsData';


export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<DomainPrompt | null>(null);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleScrollToMystery = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMysteryUnlocked = () => {
    const el = document.getElementById('challenge');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white selection:bg-[#ff003c] selection:text-white font-inter">
      {/* Spider-Verse Web Physics Canvas overlay */}
      <WebBackgroundCanvas />

      {/* Custom Crosshair Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Progression */}
      <main className="relative z-10">
        <HeroSection
          onOpenRegister={handleOpenRegister}
          onScrollToMystery={handleScrollToMystery}
        />

        <MysteryBoxSection onUnlocked={handleMysteryUnlocked} />

        <DiscoverSection
          selectedDomain={selectedDomain}
          onSelectDomain={(domain) => setSelectedDomain(domain)}
        />

        <BuildSection />

        <MysteryTwistSection />

        <PitchSection />

        <LookingForSection />

        <TeamSizeSection />

        <PrizeSection />

        <EventDetailsSection />

        <CrewSection />

        <WhyLaunchpadSection />

        <FinalCTASection onOpenRegister={handleOpenRegister} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        initialDomain={selectedDomain}
      />
    </div>
  );
}

export default App;
