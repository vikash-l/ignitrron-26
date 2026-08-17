import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Award, ChevronLeft, ChevronRight, Sparkles, ArrowLeft, Play } from 'lucide-react';
import { EVENTS_DATA, TOTAL_PRIZE_POOL } from '../../data/eventsData';
import { DoomTransmissionOverlay } from './DoomTransmissionOverlay';

export function HolographicHUD({
  activeEventIndex,
  hoveredEventIndex,
  isEventFocused,
  onSelectEvent,
  onBackToArchive,
  onOpenDetails,
  onToggleSound,
  isMuted
}) {
  const [animatedPrize, setAnimatedPrize] = useState(0);
  const [hoveredTimelineIdx, setHoveredTimelineIdx] = useState(null);

  const activeEvent = EVENTS_DATA[activeEventIndex] || EVENTS_DATA[0];
  const hoveredEvent = (hoveredEventIndex !== null && EVENTS_DATA[hoveredEventIndex])
    ? EVENTS_DATA[hoveredEventIndex]
    : (hoveredTimelineIdx !== null ? EVENTS_DATA[hoveredTimelineIdx] : null);

  // Animated Prize Pool Counter: ₹0 -> ₹3,05,000
  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(progress * TOTAL_PRIZE_POOL);
      setAnimatedPrize(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  const handlePrev = () => {
    const nextIdx = (activeEventIndex - 1 + EVENTS_DATA.length) % EVENTS_DATA.length;
    onSelectEvent(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeEventIndex + 1) % EVENTS_DATA.length;
    onSelectEvent(nextIdx);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10,
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 24px 20px 24px',
      boxSizing: 'border-box',
      fontFamily: "'Rajdhani', sans-serif"
    }}>
      {/* Easter Egg: Subtle Floating Transmission Near Central 3D Core */}
      <DoomTransmissionOverlay isEventFocused={isEventFocused} />

      {/* 1. TOP SAFE ZONE: REBALANCED HEADER CONTAINER (flexShrink: 0) */}
      <div style={{
        width: '100%',
        maxWidth: '1840px',
        margin: '0 auto',
        flexShrink: 0,
        pointerEvents: 'auto'
      }}>
        <header style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          height: '72px',
          padding: '0 24px',
          background: 'rgba(7, 17, 13, 0.96)',
          border: '1px solid rgba(57, 255, 136, 0.35)',
          borderRadius: '10px',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.6), 0 0 25px rgba(57, 255, 136, 0.1)',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          {/* Top Edge Toxic Green Accent Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '20px',
            right: '20px',
            height: '2px',
            background: 'linear-gradient(90deg, #39FF88 0%, #16C784 50%, #FBCA03 100%)'
          }} />

          {/* LEFT BRAND / BACK CONTROL */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {isEventFocused ? (
              <button
                onClick={onBackToArchive}
                style={{
                  background: 'rgba(57, 255, 136, 0.08)',
                  border: '1px solid #39FF88',
                  borderRadius: '4px',
                  padding: '7px 18px',
                  color: '#EAF7F0',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(57, 255, 136, 0.25)'
                }}
              >
                <ArrowLeft size={14} /> [ BACK TO ARCHIVE ]
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #39FF88',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  background: 'rgba(57, 255, 136, 0.08)'
                }}>
                  <Shield size={20} color="#39FF88" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '17px', fontWeight: 900, color: '#EAF7F0', letterSpacing: '2px' }}>
                    IGNITRRON <span style={{ color: '#39FF88' }}>’26</span>
                  </div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: '#789589', letterSpacing: '1px' }}>
                    DOOMSDAY ARCHIVE // 27 STATIONS
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CENTER STATION SELECTOR BADGE */}
          {!isEventFocused && (
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '10px',
              color: '#39FF88',
              fontWeight: 'bold',
              letterSpacing: '2px',
              background: 'rgba(57, 255, 136, 0.06)',
              border: '1px solid rgba(57, 255, 136, 0.35)',
              padding: '5px 18px',
              borderRadius: '20px'
            }}>
              SELECT AN EVENT STATION
            </div>
          )}

          {/* RIGHT CONTROLS: PRIZE POOL & AUDIO TOGGLE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* PRIZE POOL */}
            <div style={{
              background: 'rgba(57, 255, 136, 0.05)',
              border: '1px solid rgba(251, 202, 3, 0.35)',
              borderRadius: '4px',
              padding: '5px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Award size={15} color="#FBCA03" />
              <div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '8px', color: '#789589' }}>
                  PRIZE POOL
                </div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '13px', fontWeight: 800, color: '#FBCA03' }}>
                  ₹{animatedPrize.toLocaleString()}
                </div>
              </div>
            </div>

            {/* AUDIO TOGGLE */}
            <button
              onClick={onToggleSound}
              style={{
                background: 'rgba(57, 255, 136, 0.06)',
                border: '1px solid rgba(57, 255, 136, 0.3)',
                borderRadius: '4px',
                padding: '7px 14px',
                color: '#39FF88',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontSize: '10px',
                fontFamily: "'Share Tech Mono', monospace"
              }}
            >
              {isMuted ? <VolumeX size={14} color="#E21D2D" /> : <Volume2 size={14} color="#39FF88" />}
              {isMuted ? 'OFF' : 'ON'}
            </button>
          </div>
        </header>
      </div>

      {/* 2. DEDICATED MAIN CONTENT AREA */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        width: '100%',
        minHeight: 0,
        padding: '12px 0',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        {/* HOVER LABEL OVER 3D STATIONS */}
        {!isEventFocused && hoveredEvent && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            background: 'rgba(7, 17, 13, 0.95)',
            border: '1px solid #39FF88',
            borderRadius: '6px',
            padding: '8px 18px',
            textAlign: 'center',
            boxShadow: '0 0 25px rgba(57, 255, 136, 0.3)',
            backdropFilter: 'blur(8px)',
            zIndex: 5
          }}>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', color: '#39FF88', fontWeight: 'bold', letterSpacing: '1px' }}>
              STATION {hoveredEvent.id} // {hoveredEvent.heroCharacter}
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '14px', fontWeight: 800, color: '#EAF7F0', letterSpacing: '1.5px', margin: '2px 0' }}>
              {hoveredEvent.title}
            </div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '11px', color: '#789589' }}>
              {hoveredEvent.category} • {hoveredEvent.day}
            </div>
          </div>
        )}

        {/* HERO EVENT CARD */}
        {isEventFocused && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            gap: '16px',
            width: '100%',
            maxWidth: '900px',
            maxHeight: 'calc(100vh - 210px)',
            margin: '0 auto',
            pointerEvents: 'auto'
          }}>
            {/* Previous Event Button */}
            <button
              onClick={handlePrev}
              style={{
                background: 'rgba(57, 255, 136, 0.08)',
                border: '1px solid rgba(57, 255, 136, 0.4)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#39FF88',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(57, 255, 136, 0.25)',
                flexShrink: 0
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* MAIN HERO EVENT CARD */}
            <div style={{
              background: activeEvent.isHeroEvent
                ? 'linear-gradient(135deg, rgba(226, 29, 45, 0.16) 0%, rgba(7, 17, 13, 0.96) 100%)'
                : 'linear-gradient(135deg, rgba(7, 17, 13, 0.96) 0%, rgba(2, 6, 5, 0.98) 100%)',
              border: activeEvent.isHeroEvent ? '2px solid #E21D2D' : '1px solid rgba(57, 255, 136, 0.45)',
              boxShadow: activeEvent.isHeroEvent ? '0 0 45px rgba(226, 29, 45, 0.35)' : '0 0 35px rgba(57, 255, 136, 0.25)',
              borderRadius: '12px',
              padding: 'clamp(24px, 3.5vw, 38px) clamp(24px, 4.5vw, 48px)',
              width: '90%',
              maxWidth: '720px',
              maxHeight: '100%',
              overflowY: 'auto',
              backdropFilter: 'blur(16px)',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}>
              {/* LEVEL 1: Station Badge */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '11px',
                  padding: '3px 12px',
                  background: 'rgba(57, 255, 136, 0.08)',
                  border: '1px solid #39FF88',
                  borderRadius: '3px',
                  color: '#39FF88',
                  fontWeight: 'bold',
                  letterSpacing: '1.5px'
                }}>
                  STATION {activeEvent.id} / 27
                </span>

                {activeEvent.isHeroEvent && (
                  <span style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '3px 10px',
                    background: '#E21D2D',
                    color: '#FFF',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={11} /> HERO EVENT
                  </span>
                )}
              </div>

              {/* LEVEL 1 HERO: EVENT NAME */}
              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(22px, 3.8vw, 36px)',
                fontWeight: 900,
                color: '#EAF7F0',
                margin: '0 auto 8px auto',
                maxWidth: '92%',
                letterSpacing: '2px',
                lineHeight: 1.15,
                textTransform: 'uppercase',
                textShadow: activeEvent.isHeroEvent ? '0 0 25px rgba(226, 29, 45, 0.5)' : '0 0 25px rgba(57, 255, 136, 0.35)'
              }}>
                {activeEvent.title}
              </h1>

              {/* LEVEL 2: CHARACTER MARVEL IDENTITY */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
                <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent 0%, #39FF88 50%, transparent 100%)' }} />
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: 'clamp(11px, 1.6vw, 14px)',
                  fontWeight: 700,
                  color: '#39FF88',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase'
                }}>
                  [ {activeEvent.heroCharacter.toUpperCase()} // PRECISION OPERATIVE ]
                </div>
              </div>

              {/* LEVEL 3: Character Quote / Subtitle */}
              <blockquote style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '14px',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#FBCA03',
                margin: '0 0 20px 0',
                padding: '0 10px',
                lineHeight: 1.45,
                opacity: 0.95
              }}>
                "{activeEvent.quote || "Whatever it takes."}"
              </blockquote>

              {/* LEVEL 4: Primary CTA Button (ENTER EVENT) */}
              <button
                onClick={onOpenDetails}
                style={{
                  padding: '12px 34px',
                  background: activeEvent.isHeroEvent ? '#E21D2D' : 'linear-gradient(135deg, #39FF88 0%, #16C784 100%)',
                  border: 'none',
                  borderRadius: '4px',
                  color: activeEvent.isHeroEvent ? '#FFF' : '#020605',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '2.5px',
                  cursor: 'pointer',
                  boxShadow: activeEvent.isHeroEvent ? '0 0 25px rgba(226, 29, 45, 0.6)' : '0 0 25px rgba(57, 255, 136, 0.5)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Play size={14} fill="currentColor" /> ENTER EVENT
              </button>
            </div>

            {/* Next Event Button */}
            <button
              onClick={handleNext}
              style={{
                background: 'rgba(57, 255, 136, 0.08)',
                border: '1px solid rgba(57, 255, 136, 0.4)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                color: '#39FF88',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(57, 255, 136, 0.25)',
                flexShrink: 0
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* 3. DEDICATED BOTTOM FOOTER NAVIGATION PANEL */}
      <div style={{
        width: '100%',
        maxWidth: '1840px',
        margin: '0 auto',
        flexShrink: 0,
        pointerEvents: 'auto',
        position: 'relative',
        zIndex: 20
      }}>
        <footer style={{
          background: 'rgba(7, 17, 13, 0.96)',
          border: '1px solid rgba(57, 255, 136, 0.35)',
          borderRadius: '10px',
          padding: '12px 24px',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(57, 255, 136, 0.1)',
          boxSizing: 'border-box'
        }}>
          {/* Header Row */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '8px',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '11px'
          }}>
            <div style={{ color: '#39FF88', fontWeight: 'bold', letterSpacing: '1.5px', flexShrink: 0 }}>
              DOOMSDAY STATIONS // 27 NODES
            </div>

            <div style={{
              color: '#EAF7F0',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textAlign: 'right',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              STATION {activeEvent.id} SELECTED <span style={{ color: '#39FF88' }}>— {activeEvent.title.toUpperCase()}</span>
            </div>
          </div>

          {/* Clean Progress Bar Container */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            height: '14px',
            background: 'rgba(57, 255, 136, 0.05)',
            border: '1px solid rgba(57, 255, 136, 0.25)',
            borderRadius: '7px',
            padding: '0 10px',
            boxSizing: 'border-box'
          }}>
            {EVENTS_DATA.map((evt, idx) => {
              const isSelected = idx === activeEventIndex;
              const isHoveredNode = idx === hoveredTimelineIdx;

              return (
                <button
                  key={evt.id}
                  onClick={() => onSelectEvent(idx)}
                  onMouseEnter={() => setHoveredTimelineIdx(idx)}
                  onMouseLeave={() => setHoveredTimelineIdx(null)}
                  title={`Station ${evt.id}: ${evt.title}`}
                  style={{
                    width: isSelected ? '10px' : '5px',
                    height: isSelected ? '10px' : '5px',
                    borderRadius: '50%',
                    background: isSelected ? '#39FF88' : (isHoveredNode ? '#16C784' : '#789589'),
                    border: isSelected ? '2px solid #FFF' : 'none',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 0 8px #39FF88' : 'none',
                    transition: 'all 0.2s ease',
                    padding: 0
                  }}
                />
              );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
}
