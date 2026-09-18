import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { RoadToClash } from '../components/sections/RoadToClash';
import { QualificationFunnel } from '../components/sections/QualificationFunnel';
import { Prelims } from '../components/sections/Prelims';
import { Rounds } from '../components/sections/Rounds';
import { FinalBoss } from '../components/sections/FinalBoss';
import { Requirements } from '../components/sections/Requirements';
import { Rules } from '../components/sections/Rules';
import { Prizes } from '../components/sections/Prizes';
import { Coordinators } from '../components/sections/Coordinators';
import { FAQ } from '../components/sections/FAQ';
import { Winners } from '../components/sections/Winners';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';
import { AIGuideAssistant } from '../components/ui/AIGuideAssistant';
import { RegistrationModal } from '../components/ui/RegistrationModal';
import { SystemScan } from '../components/ui/SystemScan';
import { eventData } from '../data/event';

export const EventPage: React.FC = () => {
  const [sections] = useState<{ [key: string]: boolean }>(eventData.sections);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen text-slate-200 bg-[#050814] selection:bg-cyan-500/30 selection:text-white font-sans relative">
      {/* System Scan Visual Transition Overlay */}
      <SystemScan />

      {/* Navigation Bar */}
      <Navbar sections={sections} onRegisterClick={handleOpenRegister} />

      {/* Main Sections */}
      <main>
        {sections.hero && <Hero onRegisterClick={handleOpenRegister} />}
        {sections.roadToClash && <RoadToClash />}
        {sections.funnel && <QualificationFunnel />}
        {sections.prelims && <Prelims />}
        {sections.round1 && <Rounds />}
        {sections.finalBoss && <FinalBoss />}
        {sections.requirements && <Requirements />}
        {sections.rules && <Rules />}
        {sections.prizes && <Prizes />}
        {sections.coordinators && <Coordinators />}
        {sections.faq && <FAQ />}
        {sections.winners && <Winners />}
        {sections.registration && <RegistrationCTA onRegisterClick={handleOpenRegister} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Guide Chat Widget (NEXA) */}
      <AIGuideAssistant />
    </div>
  );
};
