import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MagneticParticles } from './components/MagneticParticles';
import { BlueprintCanvasOverlay } from './components/BlueprintCanvasOverlay';
import { Hero } from './components/Hero';
import { EventSnapshot } from './components/EventSnapshot';
import { SignatureScrollTransformation } from './components/SignatureScrollTransformation';
import { AboutSection } from './components/AboutSection';
import { ChallengeSection } from './components/ChallengeSection';
import { WorldOfStructures } from './components/WorldOfStructures';
import { ResearchSection } from './components/ResearchSection';
import { ForceVisualization } from './components/ForceVisualization';
import { TowerStructuralCutaway } from './components/TowerStructuralCutaway';
import { ConstructionTimeline } from './components/ConstructionTimeline';
import { MachinerySection } from './components/MachinerySection';
import { MaterialsSection } from './components/MaterialsSection';
import { ChallengesSection } from './components/ChallengesSection';
import { InnovationSection } from './components/InnovationSection';
import { SafetySustainabilitySection } from './components/SafetySustainabilitySection';
import { PresentationGuide } from './components/PresentationGuide';
import { TechnicalInteraction } from './components/TechnicalInteraction';
import { EvaluationDashboard } from './components/EvaluationDashboard';
import { TeamSection } from './components/TeamSection';
import { PrizeSection } from './components/PrizeSection';
import { RegistrationCTA } from './components/RegistrationCTA';
import { Footer } from './components/Footer';

export function App() {
  const [blueprintMode, setBlueprintMode] = useState<boolean>(false);

  useEffect(() => {
    if (blueprintMode) {
      document.body.classList.add('blueprint-mode');
    } else {
      document.body.classList.remove('blueprint-mode');
    }
  }, [blueprintMode]);

  return (
    <div className="min-h-screen bg-[#05070d] text-[#f8fafc] font-sans antialiased selection:bg-[#06b6d4] selection:text-[#05070d] relative">
      {/* Magnetic Particles Canvas Background */}
      <MagneticParticles blueprintMode={blueprintMode} />

      {/* Global Architectural Blueprint Overlay Mode */}
      <BlueprintCanvasOverlay
        active={blueprintMode}
        onClose={() => setBlueprintMode(false)}
      />

      {/* Floating Header Navbar */}
      <Navbar
        blueprintMode={blueprintMode}
        setBlueprintMode={setBlueprintMode}
      />

      {/* Main Page Sections */}
      <main>
        {/* 01. HERO */}
        <Hero
          blueprintMode={blueprintMode}
          setBlueprintMode={setBlueprintMode}
        />

        {/* 02. EVENT SNAPSHOT */}
        <EventSnapshot />

        {/* 03. SIGNATURE TRANSFORMATION & BEYOND THE BLUEPRINT ABOUT */}
        <SignatureScrollTransformation />
        <AboutSection />

        {/* 04. YOUR STRUCTURE. YOUR ANALYSIS. */}
        <ChallengeSection />

        {/* 05. WORLD OF STRUCTURES */}
        <WorldOfStructures />

        {/* 06. INVESTIGATE THE STRUCTURE */}
        <ResearchSection />

        {/* 07. WHAT HOLDS IT TOGETHER? */}
        <ForceVisualization />

        {/* 08. TOWER STRUCTURAL CUTAWAY ANALYSIS */}
        <TowerStructuralCutaway />

        {/* 09. FROM FOUNDATION TO SKYLINE (TIMELINE) */}
        <ConstructionTimeline />

        {/* 10. THE MACHINES BEHIND THE LANDMARK */}
        <MachinerySection />

        {/* 11. BUILT FROM MATTER */}
        <MaterialsSection />

        {/* 12. WHEN ENGINEERING MEETS THE IMPOSSIBLE */}
        <ChallengesSection />

        {/* 13. ENGINEERING THE UNEXPECTED */}
        <InnovationSection />

        {/* 14. SAFETY + SUSTAINABILITY */}
        <SafetySustainabilitySection />

        {/* 15. BUILD THE STORY */}
        <PresentationGuide />

        {/* 16. THEN COME THE QUESTIONS */}
        <TechnicalInteraction />

        {/* 17. WHAT MATTERS */}
        <EvaluationDashboard />

        {/* 18. TWO ENGINEERS. ONE STRUCTURE. */}
        <TeamSection />

        {/* 19. PRIZE POOL (₹6,000 Total: 1st ₹3,000, 2nd ₹2,000, 3rd ₹1,000) */}
        <PrizeSection />

        {/* 20. FINAL EVENT SUMMARY & CTA */}
        <RegistrationCTA />
      </main>

      {/* 21. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
