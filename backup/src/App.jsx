import React, { useState, useEffect, useRef } from 'react';
import { MainCanvas } from './components/canvas/MainCanvas';
import { ArcReactorLoadingHUD } from './components/ui/ArcReactorLoadingHUD';
import { IgnitrronIntroOverlay } from './components/ui/IgnitrronIntroOverlay';
import { HolographicHUD } from './components/ui/HolographicHUD';
import { EventDetailModal } from './components/ui/EventDetailModal';
import { EventNavigator } from './components/ui/EventNavigator';
import { CustomCursor } from './components/ui/CustomCursor';
import { EVENTS_DATA } from './data/eventsData';
import { soundEngine } from './utils/soundEngine';

export default function App() {
  // Check if participant already completed intro in this session or navigated back
  const hasEnteredBefore = typeof window !== 'undefined' && (
    sessionStorage.getItem('ignitrron_entered_system') === 'true' ||
    Boolean(window.location.hash && window.location.hash.startsWith('#station-')) ||
    Boolean(new URLSearchParams(window.location.search).get('event'))
  );

  // Compute initial active event index (from URL parameter, hash, or sessionStorage)
  const getInitialActiveIndex = () => {
    if (typeof window === 'undefined') return 26;

    try {
      // 1. Check URL query param e.g. ?event=12
      const params = new URLSearchParams(window.location.search);
      const queryEvent = params.get('event');
      if (queryEvent) {
        const found = EVENTS_DATA.findIndex(e => e.id === queryEvent || e.id === queryEvent.padStart(2, '0'));
        if (found !== -1) return found;
      }

      // 2. Check URL hash e.g. #station-12
      const hash = window.location.hash;
      if (hash && hash.startsWith('#station-')) {
        const id = hash.replace('#station-', '');
        const found = EVENTS_DATA.findIndex(e => e.id === id || e.id === id.padStart(2, '0'));
        if (found !== -1) return found;
      }

      // 3. Check sessionStorage
      const savedIdx = sessionStorage.getItem('ignitrron_last_event_idx');
      if (savedIdx !== null) {
        const parsed = parseInt(savedIdx, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < EVENTS_DATA.length) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read session state', e);
    }

    return 26; // Default to Flagship Hero Event (Station 27)
  };

  // Stages: 1 = Arc Reactor, 2 = Intro, 4 = Spatial Environment & Archive
  const [currentStage, setCurrentStage] = useState(() => (hasEnteredBefore ? 4 : 1));
  const [loadingProgress, setLoadingProgress] = useState(() => (hasEnteredBefore ? 100 : 0));

  // 3D Spatial State
  const [activeEventIndex, setActiveEventIndex] = useState(getInitialActiveIndex);
  const [hoveredEventIndex, setHoveredEventIndex] = useState(null);
  const [isEventFocused, setIsEventFocused] = useState(() => {
    if (hasEnteredBefore) {
      try {
        const focused = sessionStorage.getItem('ignitrron_event_focused');
        return focused !== 'false';
      } catch (e) {
        return true;
      }
    }
    return false;
  });
  const [isMuted, setIsMuted] = useState(false);

  // Modal State (Preserved for future event registration/details integration)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState('details');

  const scrollCooldownRef = useRef(false);

  // 1. Stage 01 Arc Reactor Progress Simulation (0% -> 100%)
  useEffect(() => {
    if (currentStage !== 1) return;

    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [currentStage]);

  const handleArcReactorComplete = () => {
    setCurrentStage(2);
  };

  const handleEnterSystem = () => {
    setCurrentStage(4);
    try {
      sessionStorage.setItem('ignitrron_entered_system', 'true');
    } catch (e) {}
  };

  const handleToggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleSelectEvent = (idx) => {
    setActiveEventIndex(idx);
    setIsEventFocused(true);
    try {
      sessionStorage.setItem('ignitrron_entered_system', 'true');
      sessionStorage.setItem('ignitrron_last_event_idx', idx.toString());
      sessionStorage.setItem('ignitrron_event_focused', 'true');
    } catch (e) {}
  };

  const handleOpenEvent = (evt) => {
    const targetEvent = evt || EVENTS_DATA[activeEventIndex];
    if (!targetEvent) return;

    try {
      sessionStorage.setItem('ignitrron_entered_system', 'true');
      sessionStorage.setItem('ignitrron_last_event_idx', activeEventIndex.toString());
      sessionStorage.setItem('ignitrron_event_focused', 'true');
    } catch (e) {}

    if (targetEvent.url) {
      window.location.href = targetEvent.url;
    } else if (targetEvent.status === 'coming-soon') {
      window.location.href = '/coming-soon/';
    }
  };

  const handleBackToArchive = () => {
    setIsEventFocused(false);
    try {
      sessionStorage.setItem('ignitrron_event_focused', 'false');
    } catch (e) {}
  };

  // 2. Keyboard & Scroll Handlers
  useEffect(() => {
    if (currentStage !== 4 || isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isEventFocused) {
        handleBackToArchive();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const nextIdx = (activeEventIndex + 1) % EVENTS_DATA.length;
        handleSelectEvent(nextIdx);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prevIdx = (activeEventIndex - 1 + EVENTS_DATA.length) % EVENTS_DATA.length;
        handleSelectEvent(prevIdx);
      }
    };

    const handleWheel = (e) => {
      if (scrollCooldownRef.current) return;
      scrollCooldownRef.current = true;

      if (e.deltaY > 0) {
        const nextIdx = (activeEventIndex + 1) % EVENTS_DATA.length;
        handleSelectEvent(nextIdx);
      } else if (e.deltaY < 0) {
        const prevIdx = (activeEventIndex - 1 + EVENTS_DATA.length) % EVENTS_DATA.length;
        handleSelectEvent(prevIdx);
      }

      setTimeout(() => {
        scrollCooldownRef.current = false;
      }, 400);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentStage, isModalOpen, isEventFocused, activeEventIndex]);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#020605',
      color: '#EAF7F0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Custom Cursor Pointer */}
      <CustomCursor />

      {/* 3D WebGL Canvas Engine */}
      <MainCanvas
        currentStage={currentStage}
        loadingProgress={loadingProgress}
        activeEventIndex={activeEventIndex}
        isEventFocused={isEventFocused}
        onArcReactorComplete={handleArcReactorComplete}
        onSelectEvent={handleSelectEvent}
        onHoverEvent={(idx) => setHoveredEventIndex(idx)}
      />

      {/* STAGE 01: Arc Reactor Loading Screen */}
      {currentStage === 1 && (
        <ArcReactorLoadingHUD progress={loadingProgress} />
      )}

      {/* STAGE 02: IGNITRRON Introduction */}
      {currentStage === 2 && (
        <IgnitrronIntroOverlay onEnterSystem={handleEnterSystem} />
      )}

      {/* STAGE 03 & 04: Immersive Doomsday Spatial Workspace HUD */}
      {(currentStage === 3 || currentStage === 4) && (
        <>
          <HolographicHUD
            activeEventIndex={activeEventIndex}
            hoveredEventIndex={hoveredEventIndex}
            isEventFocused={isEventFocused}
            onSelectEvent={handleSelectEvent}
            onBackToArchive={handleBackToArchive}
            onOpenDetails={() => handleOpenEvent(EVENTS_DATA[activeEventIndex])}
            onOpenRegister={() => {
              // Placeholder: Registration action disabled for now
            }}
            onToggleSound={handleToggleSound}
            isMuted={isMuted}
          />
          <EventNavigator
            activeEventIndex={activeEventIndex}
            onSelectEvent={handleSelectEvent}
            isEventFocused={isEventFocused}
          />
        </>
      )}

      {/* Event Details & Registration Modal (Preserved intact in codebase) */}
      <EventDetailModal
        event={EVENTS_DATA[activeEventIndex]}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab={modalInitialTab}
      />
    </div>
  );
}
