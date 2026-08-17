import React, { useState } from 'react';
import { EventConfig, SectionKey } from '../types/event';
import { eventData as defaultEventData } from '../data/event';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { EventInfo } from '../components/sections/EventInfo';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { Highlights } from '../components/sections/Highlights';
import { Rounds } from '../components/sections/Rounds';
import { Timeline } from '../components/sections/Timeline';
import { Rules } from '../components/sections/Rules';
import { Conduct } from '../components/sections/Conduct';
import { Prizes } from '../components/sections/Prizes';
import { Sponsors } from '../components/sections/Sponsors';
import { InZerosPartner } from '../components/sections/InZerosPartner';
import { FAQ } from '../components/sections/FAQ';
import { RegistrationCTA } from '../components/sections/RegistrationCTA';
import { GambitBackground } from '../components/background/GambitBackground';
import { SlidersHorizontal, Check, Eye } from 'lucide-react';

export const EventPage: React.FC = () => {
  const [event, setEvent] = useState<EventConfig>(defaultEventData);
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  const toggleSection = (sectionKey: SectionKey) => {
    setEvent((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionKey]: !prev.sections[sectionKey],
      },
    }));
  };

  const sectionsList: { key: SectionKey; label: string }[] = [
    { key: 'hero', label: 'Hero Banner' },
    { key: 'eventInfo', label: 'Event Info Stats' },
    { key: 'about', label: '01 // THE GENESIS' },
    { key: 'stats', label: 'Common Stats' },
    { key: 'highlights', label: '02 // WHAT MAKES A GAME' },
    { key: 'rounds', label: '03 // THE PITCH TABLE' },
    { key: 'timeline', label: 'Schedule Agenda' },
    { key: 'rules', label: '04 // THE RULEBOOK' },
    { key: 'conduct', label: '05 // PLAY FAIR' },
    { key: 'prizes', label: '06 // THE WINNERS' },
    { key: 'inZeros', label: 'InZeros Collaboration' },
    { key: 'sponsors', label: 'Sponsors' },
    { key: 'faq', label: '07 // FAQS' },
    { key: 'registration', label: 'Final Registration CTA' },
  ];

  return (
    <div className="min-h-screen bg-[#050308] text-[#F5F2F8] flex flex-col font-sans selection:bg-[#D12CFF] selection:text-white relative overflow-x-hidden">
      
      {/* CINEMATIC GAMBIT AMBIENT BACKGROUND */}
      <GambitBackground />

      {/* Sticky Header Navbar */}
      <Navbar event={event} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {event.sections.hero !== false && <Hero event={event} />}
        {event.sections.eventInfo !== false && <EventInfo event={event} />}
        {event.sections.about !== false && <About event={event} />}
        {event.sections.stats !== false && <Stats event={event} />}
        {event.sections.highlights !== false && <Highlights event={event} />}
        {event.sections.rounds !== false && <Rounds event={event} />}
        {event.sections.timeline !== false && <Timeline event={event} />}
        {event.sections.rules !== false && <Rules event={event} />}
        {event.sections.conduct !== false && <Conduct event={event} />}
        {event.sections.prizes !== false && <Prizes event={event} />}
        {event.sections.inZeros !== false && <InZerosPartner event={event} />}
        {event.sections.sponsors !== false && <Sponsors event={event} />}
        {event.sections.faq !== false && <FAQ event={event} />}
        {event.sections.registration !== false && <RegistrationCTA event={event} />}
      </main>

      {/* Footer */}
      <Footer event={event} />

      {/* Floating Section Configurator Trigger */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowConfigPanel(!showConfigPanel)}
          className="p-3.5 rounded-full bg-gradient-to-r from-[#7B2CFF] to-[#D12CFF] text-white shadow-[0_0_25px_rgba(209,44,255,0.6)] font-bold hover:scale-110 transition-transform flex items-center gap-2 group cursor-pointer border border-[#FF4FD8]/40"
          title="Toggle Section Visibility Configuration"
        >
          <SlidersHorizontal className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="text-xs font-mono font-bold hidden sm:inline">SECTION CONFIG</span>
        </button>
      </div>

      {/* Configuration Modal Drawer */}
      {showConfigPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#100A18] border border-[#7B2CFF]/50 rounded-2xl w-full max-w-md p-6 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-[#231538] pb-4">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#FF4FD8]" />
                <h3 className="font-display font-bold text-white text-lg">
                  Section Visibility Controls
                </h3>
              </div>
              <button
                onClick={() => setShowConfigPanel(false)}
                className="text-[#A7A0B2] hover:text-white text-sm font-mono"
              >
                ✕ CLOSE
              </button>
            </div>

            <p className="text-xs text-[#A7A0B2]">
              Toggle section visibility for Game Genesis X template testing.
            </p>

            <div className="space-y-2">
              {sectionsList.map(({ key, label }) => {
                const isVisible = event.sections[key] !== false;
                return (
                  <button
                    key={key}
                    onClick={() => toggleSection(key)}
                    className={`w-full px-4 py-2.5 rounded-lg border text-xs font-mono font-medium flex items-center justify-between transition-all ${
                      isVisible
                        ? 'bg-[#7B2CFF]/20 border-[#7B2CFF]/50 text-[#F5F2F8]'
                        : 'bg-[#07060A] border-[#231538] text-[#A7A0B2] line-through'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center border ${
                        isVisible ? 'bg-[#D12CFF] border-[#FF4FD8] text-white' : 'border-[#231538]'
                      }`}
                    >
                      {isVisible && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
