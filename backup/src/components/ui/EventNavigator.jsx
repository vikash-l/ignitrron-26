import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Crosshair, ChevronRight, Radio, X, Compass, Calendar, Layers } from 'lucide-react';
import { EVENTS_DATA } from '../../data/eventsData';

export function EventNavigator({
  activeEventIndex,
  onSelectEvent,
  isEventFocused
}) {
  const [activeDayFilter, setActiveDayFilter] = useState('ALL'); // 'ALL' | 'Day 1' | 'Day 2' | 'Two-Day'
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const activeItemRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Responsive Breakpoint Listener
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w > 768 && w <= 1024);
      if (w <= 1024 && w > 768) {
        setIsCollapsed(true);
      } else if (w > 1024) {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtered & Grouped Events
  const eventsWithIndex = useMemo(() => {
    return EVENTS_DATA.map((evt, idx) => ({
      ...evt,
      originalIndex: idx
    }));
  }, []);

  const day1Events = useMemo(() => eventsWithIndex.filter(e => e.day === 'Day 1'), [eventsWithIndex]);
  const day2Events = useMemo(() => eventsWithIndex.filter(e => e.day === 'Day 2'), [eventsWithIndex]);
  const twoDayEvents = useMemo(() => eventsWithIndex.filter(e => e.day === 'Two-Day' || e.day === 'Both Days'), [eventsWithIndex]);

  const displayedGroups = useMemo(() => {
    if (activeDayFilter === 'Day 1') {
      return [{ title: 'DAY 1 EVENTS', count: day1Events.length, items: day1Events, color: '#39FF88' }];
    }
    if (activeDayFilter === 'Day 2') {
      return [{ title: 'DAY 2 EVENTS', count: day2Events.length, items: day2Events, color: '#16C784' }];
    }
    if (activeDayFilter === 'Two-Day') {
      return [{ title: 'TWO-DAY EVENTS', count: twoDayEvents.length, items: twoDayEvents, color: '#FBCA03' }];
    }
    return [
      { title: 'DAY 1 EVENTS', count: day1Events.length, items: day1Events, color: '#39FF88' },
      { title: 'DAY 2 EVENTS', count: day2Events.length, items: day2Events, color: '#16C784' },
      { title: 'TWO-DAY EVENTS', count: twoDayEvents.length, items: twoDayEvents, color: '#FBCA03' }
    ];
  }, [activeDayFilter, day1Events, day2Events, twoDayEvents]);

  // Auto-scroll active event into view inside the navigator
  useEffect(() => {
    if (activeItemRef.current && scrollContainerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [activeEventIndex, isCollapsed, isMobileOpen, activeDayFilter]);

  // Isolate mouse wheel/scroll events to prevent zooming/rotating the 3D scene
  const handleScrollContainerWheel = (e) => {
    e.stopPropagation();
  };

  const handleItemClick = (idx) => {
    onSelectEvent(idx);
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulseActiveGlow {
          0%, 100% {
            box-shadow: 0 0 16px rgba(57, 255, 136, 0.45), inset 0 0 12px rgba(57, 255, 136, 0.15);
            border-color: #39FF88;
          }
          50% {
            box-shadow: 0 0 24px rgba(57, 255, 136, 0.75), inset 0 0 18px rgba(57, 255, 136, 0.25);
            border-color: #72FFA6;
          }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        .custom-navigator-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-navigator-scroll::-webkit-scrollbar-track {
          background: rgba(2, 6, 5, 0.8);
          border-radius: 4px;
        }
        .custom-navigator-scroll::-webkit-scrollbar-thumb {
          background: rgba(57, 255, 136, 0.35);
          border-radius: 4px;
          border: 1px solid rgba(57, 255, 136, 0.2);
        }
        .custom-navigator-scroll::-webkit-scrollbar-thumb:hover {
          background: #39FF88;
          box-shadow: 0 0 8px #39FF88;
        }
      `}</style>

      {/* MOBILE FLOATING TRIGGER BUTTON (<= 768px) */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: '88px',
          right: '18px',
          zIndex: 40,
          pointerEvents: 'auto'
        }}>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              background: 'rgba(7, 17, 13, 0.95)',
              border: '1px solid #39FF88',
              borderRadius: '30px',
              padding: '10px 18px',
              color: '#39FF88',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(57, 255, 136, 0.35)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <Compass size={16} />
            <span>EVENT SCHEDULE [{activeEventIndex + 1}/27]</span>
          </button>
        </div>
      )}

      {/* MAIN COMMAND CENTER NAVIGATION PANEL */}
      {(!isMobile || isMobileOpen) && (
        <aside
          onWheel={handleScrollContainerWheel}
          onTouchMove={handleScrollContainerWheel}
          style={{
            position: 'fixed',
            right: isMobile ? '12px' : '24px',
            top: isMobile ? '80px' : '96px',
            height: isMobile ? 'calc(100vh - 170px)' : 'calc(100vh - 210px)',
            width: isMobile ? 'calc(100vw - 24px)' : (isCollapsed ? '54px' : '300px'),
            background: 'rgba(7, 17, 13, 0.95)',
            border: '1px solid rgba(57, 255, 136, 0.35)',
            borderRadius: '10px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(57, 255, 136, 0.12)',
            zIndex: 35,
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            transition: 'width 0.28s cubic-bezier(0.4, 0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* Top Neon Edge Indicator */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #39FF88 0%, #16C784 50%, #FBCA03 100%)'
          }} />

          {/* PANEL HEADER */}
          <div style={{
            padding: isCollapsed && !isMobile ? '14px 8px' : '12px 14px',
            borderBottom: '1px solid rgba(57, 255, 136, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed && !isMobile ? 'center' : 'space-between',
            background: 'rgba(2, 6, 5, 0.75)',
            flexShrink: 0
          }}>
            {isCollapsed && !isMobile ? (
              <button
                onClick={() => setIsCollapsed(false)}
                title="Expand Event Navigator"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#39FF88',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px'
                }}
              >
                <Crosshair size={18} />
              </button>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Radio size={14} color="#39FF88" style={{ animation: 'pulseDot 2s infinite ease-in-out' }} />
                  <div>
                    <div style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#EAF7F0',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase'
                    }}>
                      TECHNO STRUCTURE
                    </div>
                    <div style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '8.5px',
                      color: '#39FF88',
                      letterSpacing: '1px'
                    }}>
                      27 EVENT STATIONS
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {isMobile ? (
                    <button
                      onClick={() => setIsMobileOpen(false)}
                      style={{
                        background: 'rgba(57, 255, 136, 0.08)',
                        border: '1px solid rgba(57, 255, 136, 0.3)',
                        borderRadius: '4px',
                        color: '#EAF7F0',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <X size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsCollapsed(true)}
                      title="Collapse Panel"
                      style={{
                        background: 'rgba(57, 255, 136, 0.06)',
                        border: '1px solid rgba(57, 255, 136, 0.25)',
                        borderRadius: '4px',
                        color: '#789589',
                        padding: '4px 6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        fontFamily: "'Share Tech Mono', monospace"
                      }}
                    >
                      <ChevronRight size={14} color="#39FF88" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* DAY SEPARATION FILTER TABS */}
          {(!isCollapsed || isMobile) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '4px',
              padding: '8px 10px',
              background: 'rgba(2, 6, 5, 0.9)',
              borderBottom: '1px solid rgba(57, 255, 136, 0.15)',
              flexShrink: 0
            }}>
              {[
                { id: 'ALL', label: 'ALL', count: 27 },
                { id: 'Day 1', label: 'DAY 1', count: day1Events.length },
                { id: 'Day 2', label: 'DAY 2', count: day2Events.length },
                { id: 'Two-Day', label: '2-DAY', count: twoDayEvents.length }
              ].map(tab => {
                const isTabActive = activeDayFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDayFilter(tab.id)}
                    style={{
                      background: isTabActive ? 'rgba(57, 255, 136, 0.18)' : 'rgba(7, 17, 13, 0.7)',
                      border: isTabActive ? '1px solid #39FF88' : '1px solid rgba(57, 255, 136, 0.18)',
                      borderRadius: '4px',
                      padding: '5px 2px',
                      color: isTabActive ? '#39FF88' : '#789589',
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '9px',
                      fontWeight: isTabActive ? 'bold' : 'normal',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isTabActive ? '0 0 10px rgba(57, 255, 136, 0.25)' : 'none'
                    }}
                  >
                    {tab.label} ({tab.count})
                  </button>
                );
              })}
            </div>
          )}

          {/* SCROLLABLE EVENT LIST GROUPED BY DAY */}
          {(!isCollapsed || isMobile) && (
            <div
              ref={scrollContainerRef}
              className="custom-navigator-scroll"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '8px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxSizing: 'border-box'
              }}
            >
              {displayedGroups.map((group, gIdx) => (
                <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {/* Category Header Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '3px 6px',
                    background: 'rgba(57, 255, 136, 0.04)',
                    borderLeft: `2px solid ${group.color}`,
                    borderRadius: '2px',
                    marginBottom: '2px'
                  }}>
                    <span style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '9.5px',
                      fontWeight: 'bold',
                      color: group.color,
                      letterSpacing: '1px'
                    }}>
                      {group.title}
                    </span>
                    <span style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '8.5px',
                      color: '#789589'
                    }}>
                      [{group.count} EVENTS]
                    </span>
                  </div>

                  {/* Group Items */}
                  {group.items.map((item) => {
                    const isActive = activeEventIndex === item.originalIndex;
                    const isHovered = hoveredIdx === item.originalIndex;
                    const isHero = item.isHeroEvent;
                    const isComingSoon = item.status === 'coming-soon';

                    return (
                      <div
                        key={item.id}
                        ref={isActive ? activeItemRef : null}
                        onClick={() => handleItemClick(item.originalIndex)}
                        onMouseEnter={() => setHoveredIdx(item.originalIndex)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '7px 10px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          background: isActive
                            ? 'linear-gradient(90deg, rgba(57, 255, 136, 0.2) 0%, rgba(7, 17, 13, 0.95) 100%)'
                            : isHovered
                              ? 'rgba(57, 255, 136, 0.08)'
                              : 'rgba(2, 6, 5, 0.65)',
                          border: isActive
                            ? '1px solid #39FF88'
                            : isHovered
                              ? '1px solid rgba(57, 255, 136, 0.55)'
                              : '1px solid rgba(57, 255, 136, 0.12)',
                          animation: isActive ? 'pulseActiveGlow 2.2s infinite ease-in-out' : 'none',
                          transform: isHovered && !isActive ? 'translateX(-3px)' : 'translateX(0)',
                          transition: 'all 0.18s ease-out',
                          boxSizing: 'border-box',
                          position: 'relative'
                        }}
                      >
                        {/* Left: ID and Event Title */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          overflow: 'hidden',
                          paddingRight: '4px'
                        }}>
                          <span style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: '10.5px',
                            fontWeight: 'bold',
                            color: isActive ? '#39FF88' : isHovered ? '#72FFA6' : '#789589',
                            letterSpacing: '0.8px',
                            flexShrink: 0
                          }}>
                            {item.id}
                          </span>

                          <span style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '10px',
                            fontWeight: isActive ? 800 : 600,
                            color: isActive ? '#FFFFFF' : isHovered ? '#EAF7F0' : '#B8D4C8',
                            letterSpacing: '0.6px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {item.title}
                          </span>
                        </div>

                        {/* Right: Day badge or status */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                          {item.isHeroEvent && !isActive && (
                            <span style={{
                              fontFamily: "'Orbitron', sans-serif",
                              fontSize: '7px',
                              fontWeight: 800,
                              color: '#FFF',
                              background: '#E21D2D',
                              padding: '1px 4px',
                              borderRadius: '2px',
                              letterSpacing: '0.5px'
                            }}>
                              HERO
                            </span>
                          )}
                          {isActive ? (
                            <span style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '3px',
                              fontFamily: "'Share Tech Mono', monospace",
                              fontSize: '8px',
                              color: item.isHeroEvent ? '#FFF' : '#020605',
                              background: item.isHeroEvent ? '#E21D2D' : '#39FF88',
                              padding: '2px 5px',
                              borderRadius: '2px',
                              fontWeight: 'bold',
                              letterSpacing: '0.5px'
                            }}>
                              <span style={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: item.isHeroEvent ? '#FFF' : '#020605',
                                animation: 'pulseDot 1.2s infinite ease-in-out'
                              }} />
                              ACTIVE
                            </span>
                          ) : (
                            <span style={{
                              fontFamily: "'Share Tech Mono', monospace",
                              fontSize: '7.5px',
                              color: item.day === 'Day 1' ? '#39FF88' : item.day === 'Day 2' ? '#16C784' : '#FBCA03',
                              border: `1px solid ${item.day === 'Day 1' ? 'rgba(57, 255, 136, 0.3)' : item.day === 'Day 2' ? 'rgba(22, 199, 132, 0.3)' : 'rgba(251, 202, 3, 0.3)'}`,
                              padding: '1px 4px',
                              borderRadius: '2px'
                            }}>
                              {item.day === 'Day 1' ? 'D1' : item.day === 'Day 2' ? 'D2' : '2-DAY'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* COLLAPSED VERTICAL BAR */}
          {isCollapsed && !isMobile && (
            <div
              className="custom-navigator-scroll"
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '8px 4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {eventsWithIndex.map((item) => {
                const isActive = activeEventIndex === item.originalIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectEvent(item.originalIndex)}
                    title={`${item.id} — ${item.title} (${item.day})`}
                    style={{
                      width: '36px',
                      height: '30px',
                      borderRadius: '4px',
                      background: isActive ? 'rgba(57, 255, 136, 0.2)' : 'rgba(2, 6, 5, 0.6)',
                      border: isActive ? '1px solid #39FF88' : '1px solid rgba(57, 255, 136, 0.15)',
                      color: isActive ? '#39FF88' : '#789589',
                      fontFamily: "'Share Tech Mono', monospace",
                      fontSize: '9.5px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 0 12px rgba(57, 255, 136, 0.5)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {item.id}
                  </button>
                );
              })}
            </div>
          )}

          {/* PANEL FOOTER QUICK STATUS */}
          {(!isCollapsed || isMobile) && (
            <div style={{
              padding: '7px 12px',
              borderTop: '1px solid rgba(57, 255, 136, 0.18)',
              background: 'rgba(2, 6, 5, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '8.5px',
              color: '#789589',
              flexShrink: 0
            }}>
              <span>CLICK TO CENTER ORB</span>
              <span style={{ color: '#39FF88' }}>TECHNO STRUCTURE</span>
            </div>
          )}
        </aside>
      )}
    </>
  );
}
