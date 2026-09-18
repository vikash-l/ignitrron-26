import React, { useState, useEffect } from 'react';

export function DoomTransmissionOverlay({ isEventFocused }) {
  const [phase, setPhase] = useState(0); // 0: Idle, 1: Transmission Start, 2: "IRON MAN?", 3: "NO.", 4: "I AM DOOM.", 5: Dissolving, 6: Complete
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    // Run only once per initial visit / session
    if (sessionStorage.getItem('doom_transmission_viewed')) {
      setHasRun(true);
      return;
    }

    // Delay start by 1.2 seconds after entering main universe
    const timer1 = setTimeout(() => setPhase(1), 1200);  // INCOMING TRANSMISSION
    const timer2 = setTimeout(() => setPhase(2), 2000);  // IRON MAN?
    const timer3 = setTimeout(() => setPhase(3), 3000);  // NO.
    const timer4 = setTimeout(() => setPhase(4), 4000);  // I AM DOOM.
    const timer5 = setTimeout(() => setPhase(5), 5800);  // Dissolve/Pulse
    const timer6 = setTimeout(() => {
      setPhase(6);
      sessionStorage.setItem('doom_transmission_viewed', 'true');
      setHasRun(true);
    }, 6600); // Complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  // Do not show if completed or if hero event card is currently focused
  if (hasRun || phase === 0 || phase === 6 || isEventFocused) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 15,
      pointerEvents: 'none',
      width: '90%',
      maxWidth: '440px',
      boxSizing: 'border-box'
    }}>
      {/* Keyframe animations */}
      <style>{`
        @keyframes doomGlitchFade {
          0% { opacity: 0; transform: translateY(-8px) scale(0.96); filter: blur(4px); }
          20% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
          85% { opacity: 1; }
          100% { opacity: 0; transform: translateY(6px) scale(1.02); filter: blur(6px); }
        }

        @keyframes textGlitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-1px); }
        }

        @keyframes doomPulseBorder {
          0%, 100% { border-color: rgba(57, 255, 136, 0.35); boxShadow: 0 0 20px rgba(57, 255, 136, 0.15); }
          50% { border-color: rgba(57, 255, 136, 0.75); boxShadow: 0 0 35px rgba(57, 255, 136, 0.4); }
        }
      `}</style>

      {/* Floating Holographic Transmission Box */}
      <div style={{
        background: 'rgba(7, 17, 13, 0.92)',
        border: '1px solid rgba(57, 255, 136, 0.4)',
        borderRadius: '8px',
        padding: '16px 24px',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 25px rgba(57, 255, 136, 0.2)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        animation: phase === 5 ? 'doomGlitchFade 0.8s forwards' : 'doomPulseBorder 3s infinite'
      }}>
        {/* Subtle Scanline Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(57, 255, 136, 0.03) 50%, rgba(0, 0, 0, 0.25) 50%)',
          backgroundSize: '100% 4px',
          pointerEvents: 'none'
        }} />

        {/* Micro Header: INCOMING TRANSMISSION */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '8px',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '10px',
          color: '#789589',
          letterSpacing: '2px',
          marginBottom: '10px'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#39FF88',
            boxShadow: '0 0 8px #39FF88'
          }} />
          INCOMING TRANSMISSION // SECURE FREQ
        </div>

        {/* Dynamic Transmission Steps */}
        <div style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Phase 2: IRON MAN? */}
          {phase === 2 && (
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '20px',
              fontWeight: 800,
              color: '#CBD5E1',
              letterSpacing: '4px',
              animation: 'textGlitch 0.3s ease-out'
            }}>
              IRON MAN?
            </div>
          )}

          {/* Phase 3: NO. */}
          {phase === 3 && (
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '22px',
              fontWeight: 900,
              color: '#E21D2D',
              letterSpacing: '5px',
              textShadow: '0 0 15px rgba(226, 29, 45, 0.6)'
            }}>
              NO.
            </div>
          )}

          {/* Phase 4 & 5: I AM DOOM. */}
          {(phase === 4 || phase === 5) && (
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              fontWeight: 900,
              color: '#EAF7F0',
              letterSpacing: '6px',
              textShadow: '0 0 25px rgba(57, 255, 136, 0.85), 0 0 50px rgba(57, 255, 136, 0.4)',
              animation: 'textGlitch 0.4s ease-out'
            }}>
              I AM DOOM.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
