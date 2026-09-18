import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { OutcomesSection } from './components/OutcomesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { EngineerMindset } from './components/EngineerMindset';
import { RegistrationCTA } from './components/RegistrationCTA';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { CalendarModal } from './components/CalendarModal';
import { NavModals } from './components/NavModals';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [activeNavModal, setActiveNavModal] = useState(null);

  const handleNavClick = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        setActiveNavModal(id);
      }
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar 
          onRegisterOpen={() => setIsRegisterOpen(true)}
          onNavClick={handleNavClick}
        />

        {/* Main Content Layout */}
        <main className="flex-grow">
          <Hero 
            onRegisterOpen={() => setIsRegisterOpen(true)}
            onCalendarOpen={() => setIsCalendarOpen(true)}
          />
          
          <ProblemSection />
          
          <OutcomesSection />
          
          <WorkflowSection />
          
          <EngineerMindset />
          
          <RegistrationCTA 
            onRegisterOpen={() => setIsRegisterOpen(true)}
          />
        </main>

        {/* Footer */}
        <Footer onNavClick={handleNavClick} />

        {/* Interactive Modals */}
        <RegisterModal 
          isOpen={isRegisterOpen} 
          onClose={() => setIsRegisterOpen(false)} 
        />

        <CalendarModal 
          isOpen={isCalendarOpen} 
          onClose={() => setIsCalendarOpen(false)} 
        />

        <NavModals 
          activeModal={activeNavModal} 
          onClose={() => setActiveNavModal(null)}
          onRegisterOpen={() => setIsRegisterOpen(true)}
        />

      </div>
    </ThemeProvider>
  );
}
