import React, { useEffect, useState } from 'react';

export function IgnitrronIntroOverlay({ onEnterSystem }) {
  const [logIndex, setLogIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logs = [
    "SYSTEM ONLINE",
    "MARK VII ARC CORE ACTIVE",
    "DOOMSDAY PROTOCOLS INITIALIZING",
    "27 STATIONS DETECTED",
    "MASTER ARCHIVE READY"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex(prev => {
        if (prev < logs.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setShowButton(true);
          return prev;
        }
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '20px' : '40px 20px',
      boxSizing: 'border-box',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, rgba(2, 6, 5, 0.4) 0%, rgba(2, 6, 5, 0.96) 100%)'
    }}>
      {/* Subtle Holographic Status Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '4px 14px',
        background: 'rgba(57, 255, 136, 0.05)',
        border: '1px solid rgba(57, 255, 136, 0.25)',
        borderRadius: '16px',
        fontSize: '10px',
        fontFamily: "'Share Tech Mono', monospace",
        color: '#39FF88',
        letterSpacing: '2px',
        marginBottom: '24px',
        opacity: 0.9
      }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#39FF88', boxShadow: '0 0 8px #39FF88' }} />
        {isMobile ? 'DOOMSDAY SPATIAL COMMAND' : 'DOOMSDAY SPATIAL COMMAND V26.4'}
      </div>

      {/* MAIN IGNITRRON ’26 TITLE */}
      <div style={{ padding: '0 10px', margin: '0 0 12px 0' }}>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(32px, 8.5vw, 96px)',
          fontWeight: 900,
          margin: 0,
          color: '#EAF7F0',
          letterSpacing: isMobile ? '3px' : '8px',
          textShadow: '0 0 25px rgba(234, 247, 240, 0.2), 0 0 50px rgba(57, 255, 136, 0.15)',
          lineHeight: 1.05
        }}>
          IGNITRRON <span style={{
            color: '#39FF88',
            textShadow: '0 0 30px rgba(57, 255, 136, 0.6)'
          }}>’26</span>
        </h1>
      </div>

      {/* Sub-Title */}
      <div style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: 'clamp(12px, 2.5vw, 24px)',
        fontWeight: 600,
        color: '#16C784',
        letterSpacing: isMobile ? '3px' : '7px',
        textTransform: 'uppercase',
        marginBottom: '28px',
        opacity: 0.9
      }}>
        MARVEL SPATIAL EVENT UNIVERSE
      </div>

      {/* Telemetry Logs */}
      <div style={{
        minHeight: '100px',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '11px',
        color: '#789589',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        alignItems: 'center',
        letterSpacing: '1.5px',
        opacity: 0.85
      }}>
        {logs.slice(0, logIndex).map((log, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: idx === logs.length - 1 ? '#39FF88' : '#789589',
            transition: 'color 0.3s ease'
          }}>
            <span style={{ color: '#39FF88', fontSize: '9px' }}>&gt;</span> {log}
          </div>
        ))}
      </div>

      {/* Action CTA */}
      {showButton && (
        <button
          onClick={onEnterSystem}
          style={{
            marginTop: '24px',
            padding: '14px 32px',
            background: 'rgba(57, 255, 136, 0.05)',
            border: '1px solid rgba(57, 255, 136, 0.4)',
            borderRadius: '4px',
            color: '#EAF7F0',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(57, 255, 136, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(57, 255, 136, 0.15)';
            e.currentTarget.style.borderColor = '#39FF88';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(57, 255, 136, 0.6)';
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(57, 255, 136, 0.05)';
            e.currentTarget.style.borderColor = 'rgba(57, 255, 136, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(57, 255, 136, 0.25)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          [ ENTER HOLOGRAPHIC ARCHIVE ]
        </button>
      )}
    </div>
  );
}
