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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Responsive Breakpoint Listener
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w > 768 && w <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const handlePrev = (e) => {
    if (e) {
      e.stopPropagation?.();
      e.preventDefault?.();
    }
    const nextIdx = (activeEventIndex - 1 + EVENTS_DATA.length) % EVENTS_DATA.length;
    onSelectEvent(nextIdx);
  };

  const handleNext = (e) => {
    if (e) {
      e.stopPropagation?.();
      e.preventDefault?.();
    }
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
      padding: isMobile ? '8px 10px 10px 10px' : '16px 24px 20px 24px',
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
          height: isMobile ? '56px' : '72px',
          padding: isMobile ? '0 12px' : '0 24px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '14px' }}>
            {isEventFocused ? (
              <button
                onClick={onBackToArchive}
                style={{
                  background: 'rgba(57, 255, 136, 0.08)',
                  border: '1px solid #39FF88',
                  borderRadius: '4px',
                  padding: isMobile ? '5px 12px' : '7px 18px',
                  color: '#EAF7F0',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: isMobile ? '10px' : '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px rgba(57, 255, 136, 0.25)'
                }}
              >
                <ArrowLeft size={isMobile ? 12 : 14} /> [ BACK ]
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '6px' : '12px' }}>
                <a href="https://ignitrron-26.freelancerskpriet.workers.dev/"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '6px' : '12px',
                    textDecoration: 'none',
                    pointerEvents: 'auto'
                  }}
                >
                  <div style={{
                    width: isMobile ? '28px' : '36px',
                    height: isMobile ? '28px' : '36px',
                    borderRadius: '50%',
                    border: '1px solid #39FF88',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(57, 255, 136, 0.08)'
                  }}>
                    <Shield size={isMobile ? 16 : 20} color="#39FF88" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: isMobile ? '14px' : '17px', fontWeight: 900, color: '#EAF7F0', letterSpacing: '2px' }}>
                      IGNITRRON <span style={{ color: '#39FF88' }}>’26</span>
                    </div>
                    {!isMobile && (
                      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: '#789589', letterSpacing: '1px' }}>
                        DOOMSDAY ARCHIVE // 27 STATIONS
                      </div>
                    )}
                  </div>
                </a>
              </div>
            )}
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
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justify: 'center',
            gap: isMobile ? '12px' : '16px',
            width: '100%',
            maxWidth: isMobile ? '100%' : '900px',
            maxHeight: isMobile ? 'calc(100vh - 160px)' : 'calc(100vh - 210px)',
            margin: '0 auto',
            pointerEvents: 'auto',
            padding: isMobile ? '0 12px' : '0'
          }}>
            {/* Previous Event Button */}
            {!isMobile && (
              <button
                onClick={handlePrev}
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                title="Previous Event Station"
                style={{
                  background: 'rgba(7, 17, 13, 0.92)',
                  border: '1px solid #39FF88',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#39FF88',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(57, 255, 136, 0.35)',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 100,
                  pointerEvents: 'auto',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(57, 255, 136, 0.25)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 255, 136, 0.75)';
                  e.currentTarget.style.transform = 'scale(1.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(7, 17, 13, 0.92)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(57, 255, 136, 0.35)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <ChevronLeft size={22} style={{ pointerEvents: 'none' }} />
              </button>
            )}

            {/* MAIN HERO EVENT CARD */}
            <div style={{
              background: activeEvent.isHeroEvent
                ? 'rgba(18, 2, 4, 0.55)'
                : 'rgba(2, 12, 8, 0.55)',
              border: activeEvent.isHeroEvent 
                ? '1px solid rgba(255, 30, 56, 0.45)' 
                : '1px solid rgba(30, 255, 150, 0.35)',
              boxShadow: activeEvent.isHeroEvent 
                ? '0 0 20px rgba(226, 29, 45, 0.08)' 
                : '0 0 20px rgba(20, 255, 140, 0.08)',
              borderRadius: '12px',
              padding: isMobile ? '20px 20px' : 'clamp(24px, 3.5vw, 38px) clamp(24px, 4.5vw, 48px)',
              width: '100%',
              maxWidth: isMobile ? '100%' : '720px',
              maxHeight: '100%',
              overflowY: 'auto',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}>
              {/* LEVEL 1: Station Badge & Day Indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: isMobile ? '8px' : '12px' }}>
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: isMobile ? '9.5px' : '11px',
                  padding: '3px 10px',
                  background: 'rgba(57, 255, 136, 0.08)',
                  border: '1px solid #39FF88',
                  borderRadius: '3px',
                  color: '#39FF88',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}>
                  STATION {activeEvent.id} / 27
                </span>

                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: isMobile ? '9px' : '10px',
                  padding: '3px 8px',
                  background: activeEvent.day === 'Day 1' ? 'rgba(57, 255, 136, 0.15)' : activeEvent.day === 'Day 2' ? 'rgba(22, 199, 132, 0.15)' : 'rgba(251, 202, 3, 0.15)',
                  border: `1px solid ${activeEvent.day === 'Day 1' ? '#39FF88' : activeEvent.day === 'Day 2' ? '#16C784' : '#FBCA03'}`,
                  borderRadius: '3px',
                  color: activeEvent.day === 'Day 1' ? '#39FF88' : activeEvent.day === 'Day 2' ? '#16C784' : '#FBCA03',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}>
                  {activeEvent.day.toUpperCase()}
                </span>

                {activeEvent.isHeroEvent && (
                  <span style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: isMobile ? '9px' : '10px',
                    fontWeight: 800,
                    padding: '3px 8px',
                    background: '#E21D2D',
                    color: '#FFF',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Sparkles size={11} /> HERO
                  </span>
                )}
              </div>

              {/* LEVEL 1 HERO: EVENT NAME */}
              <h1 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: isMobile ? '20px' : 'clamp(22px, 3.8vw, 36px)',
                fontWeight: 900,
                color: '#EAF7F0',
                margin: '0 auto 6px auto',
                maxWidth: '96%',
                letterSpacing: '1.5px',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                textShadow: activeEvent.isHeroEvent ? '0 0 25px rgba(226, 29, 45, 0.5)' : '0 0 25px rgba(57, 255, 136, 0.35)'
              }}>
                {activeEvent.title}
              </h1>

              {/* LEVEL 2: CHARACTER MARVEL IDENTITY */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: isMobile ? '10px' : '14px' }}>
                <div style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg, transparent 0%, #39FF88 50%, transparent 100%)' }} />
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: isMobile ? '10px' : 'clamp(11px, 1.6vw, 14px)',
                  fontWeight: 700,
                  color: '#39FF88',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  [ {activeEvent.heroCharacter.toUpperCase()} ]
                </div>
              </div>

              {/* LEVEL 3: Character Quote / Subtitle */}
              <blockquote style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: isMobile ? '12px' : '14px',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#FBCA03',
                margin: isMobile ? '0 0 16px 0' : '0 0 20px 0',
                padding: '0 8px',
                lineHeight: 1.4,
                opacity: 0.95
              }}>
                "{activeEvent.quote || "Whatever it takes."}"
              </blockquote>

              {/* LEVEL 4: Primary CTA Button (ENTER EVENT) */}
              <button
                onClick={onOpenDetails}
                style={{
                  padding: isMobile ? '10px 24px' : '12px 34px',
                  background: activeEvent.isHeroEvent ? '#E21D2D' : 'linear-gradient(135deg, #39FF88 0%, #16C784 100%)',
                  border: 'none',
                  borderRadius: '4px',
                  color: activeEvent.isHeroEvent ? '#FFF' : '#020605',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  boxShadow: activeEvent.isHeroEvent ? '0 0 25px rgba(226, 29, 45, 0.6)' : '0 0 25px rgba(57, 255, 136, 0.5)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Play size={12} fill="currentColor" /> ENTER EVENT
              </button>

              {/* Mobile Chevrons Row */}
              {isMobile && (
                <div style={{
                  display: 'flex',
                  justify: 'center',
                  alignItems: 'center',
                  gap: '24px',
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(57, 255, 136, 0.15)'
                }}>
                  <button
                    onClick={handlePrev}
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(57, 255, 136, 0.06)',
                      border: '1px solid #39FF88',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#39FF88',
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '12px', color: '#789589' }}>
                    {activeEvent.id} / 27
                  </span>
                  <button
                    onClick={handleNext}
                    onMouseDown={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(57, 255, 136, 0.06)',
                      border: '1px solid #39FF88',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#39FF88',
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* Next Event Button */}
            {!isMobile && (
              <button
                onClick={handleNext}
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                title="Next Event Station"
                style={{
                  background: 'rgba(7, 17, 13, 0.92)',
                  border: '1px solid #39FF88',
                  borderRadius: '50%',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#39FF88',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(57, 255, 136, 0.35)',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 100,
                  pointerEvents: 'auto',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(57, 255, 136, 0.25)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 255, 136, 0.75)';
                  e.currentTarget.style.transform = 'scale(1.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(7, 17, 13, 0.92)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(57, 255, 136, 0.35)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <ChevronRight size={22} style={{ pointerEvents: 'none' }} />
              </button>
            )}
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
          padding: isMobile ? '8px 12px' : '12px 24px',
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
            marginBottom: isMobile ? '4px' : '8px',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: isMobile ? '9px' : '11px'
          }}>
            <div style={{ color: '#39FF88', fontWeight: 'bold', letterSpacing: '1.5px', flexShrink: 0 }}>
              {isMobile ? 'STATIONS // 27 NODES' : 'DOOMSDAY STATIONS // 27 NODES'}
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
              {isMobile ? (
                <span>STN {activeEvent.id} <span style={{ color: '#39FF88' }}>— {activeEvent.title.toUpperCase()}</span></span>
              ) : (
                <span>STATION {activeEvent.id} SELECTED <span style={{ color: '#39FF88' }}>— {activeEvent.title.toUpperCase()}</span></span>
              )}
            </div>
          </div>

          {/* Clean Progress Bar Container */}
          {isMobile ? (
            <div style={{
              position: 'relative',
              height: '4px',
              background: 'rgba(57, 255, 136, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
              marginTop: '4px'
            }}>
              <div style={{
                width: `${((activeEventIndex + 1) / EVENTS_DATA.length) * 100}%`,
                height: '100%',
                background: '#39FF88',
                boxShadow: '0 0 8px #39FF88',
                transition: 'width 0.3s ease'
              }} />
            </div>
          ) : (
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
          )}
        </footer>
      </div>
    </div>
  );
}
