import React, { useState, useEffect, useRef } from 'react';
import { MainCanvas } from './components/canvas/MainCanvas';
import { ArcReactorLoadingHUD } from './components/ui/ArcReactorLoadingHUD';
import { IgnitrronIntroOverlay } from './components/ui/IgnitrronIntroOverlay';
import { HolographicHUD } from './components/ui/HolographicHUD';
import { EventDetailModal } from './components/ui/EventDetailModal';
import { CustomCursor } from './components/ui/CustomCursor';
import { EVENTS_DATA } from './data/eventsData';
import { soundEngine } from './utils/soundEngine';

export default function App() {
  // Stages: 1 = Arc Reactor, 2 = Intro, 4 = Spatial Environment & Archive
  const [currentStage, setCurrentStage] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // 3D Spatial State
  const [activeEventIndex, setActiveEventIndex] = useState(15); // Index 15 = 24-Hour Hackathon (Event 16)
  const [hoveredEventIndex, setHoveredEventIndex] = useState(null);
  const [isEventFocused, setIsEventFocused] = useState(false);
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
  };

  const handleToggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleSelectEvent = (idx) => {
    setActiveEventIndex(idx);
    setIsEventFocused(true);
  };

  const handleOpenEvent = (evt) => {
    const targetEvent = evt || EVENTS_DATA[activeEventIndex];
    if (!targetEvent) return;

    if (targetEvent.url) {
      window.location.href = targetEvent.url;
    } else if (targetEvent.status === 'coming-soon') {
      window.location.href = '/coming-soon/';
    }
  };

  const handleBackToArchive = () => {
    setIsEventFocused(false);
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
