import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { CaseBrief } from './components/CaseBrief';
import { WhyParticipate } from './components/WhyParticipate';
import { Rounds } from './components/Rounds';
import { Timeline } from './components/Timeline';
import { Rules } from './components/Rules';
import { Prizes } from './components/Prizes';
import { Sponsors } from './components/Sponsors';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'rounds', 'timeline', 'rules', 'prizes', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-[#C1121F]/40 selection:text-white">
      {/* Fixed Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Stats />
        <CaseBrief />
        <WhyParticipate />
        <Rounds />
        <Timeline />
        <Rules />
        <Prizes />
        <Sponsors />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </div>
  );
};

export default App;
