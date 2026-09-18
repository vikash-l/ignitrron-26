'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/providers/SmoothScroll';
import Navbar from '@/components/Navbar';
import VideoLandingIntro from '@/components/sections/VideoLandingIntro';
import HeroOverlay from '@/components/sections/HeroOverlay';
import ScrollExperience from '@/components/sections/ScrollExperience';
import ExhibitionSection from '@/components/sections/ExhibitionSection';
import EventInfoSection from '@/components/sections/EventInfoSection';
import CoordinatorsSection from '@/components/sections/CoordinatorsSection';
import RegistrationCTA from '@/components/sections/RegistrationCTA';

// Dynamically import WebGL 3D Canvas with ssr: false to prevent server-side WebGL rendering errors
const SceneCanvas = dynamic(() => import('@/components/canvas/SceneCanvas'), {
  ssr: false,
});

export default function Home() {
  const [showTeaserIntro, setShowTeaserIntro] = useState(true);
  const [, setCurrentStage] = useState(1);

  return (
    <SmoothScroll>
      <main className="relative bg-[#050505] text-white min-h-screen selection:bg-accent selection:text-white overflow-hidden">
        {/* Cinematic Video Teaser Landing Screen (First Screen Before Showroom) */}
        <VideoLandingIntro
          isOpen={showTeaserIntro}
          onEnterShowroom={() => setShowTeaserIntro(false)}
          onClose={() => setShowTeaserIntro(false)}
        />

        {/* Global Fixed Header Navigation */}
        <Navbar onOpenTeaser={() => setShowTeaserIntro(true)} />

        {/* Fixed 3D WebGL Canvas Background */}
        <SceneCanvas isLoaded={true} />

        {/* Scrollable Page Content Overlays */}
        <div className="relative z-20">
          <HeroOverlay
            onExploreClick={() => setCurrentStage(1)}
            onOpenTeaser={() => setShowTeaserIntro(true)}
          />
          <ScrollExperience onStageChange={setCurrentStage} />
          <ExhibitionSection />
          <EventInfoSection />
          <CoordinatorsSection />
          <RegistrationCTA />
        </div>
      </main>
    </SmoothScroll>
  );
}
