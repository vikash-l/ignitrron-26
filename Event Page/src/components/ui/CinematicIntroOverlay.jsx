import React, { useEffect, useState } from 'react';

export function CinematicIntroOverlay({ onComplete }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // 0.0s - 1.0s: Step 1 (IRON MAN)
    const t2 = setTimeout(() => setStep(2), 1000);  // 1.0s -> Step 2 (Superhero-Tech Transition)
    const t3 = setTimeout(() => setStep(3), 2100);  // 2.1s -> Step 3 (I AM DOOM.)
    const t4 = setTimeout(() => setStep(4), 3500);  // 3.5s -> Step 4 (Green Energy Dissolve)
    const t5 = setTimeout(() => {
      setStep(5);
      if (onComplete) onComplete();
    }, 4500); // 4.5s -> Complete & Reveal IGNITRRON '26 Main Page

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (step === 5) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 99999,
      backgroundColor: '#020605',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      pointerEvents: 'auto',
      boxSizing: 'border-box'
    }}>
      {/* CSS Keyframes for Cinematic Glitch & Energy Streaks */}
      <style>{`
        @keyframes ironManZoom {
          0% { transform: scale(0.92); opacity: 0; }
          20% { transform: scale(1); opacity: 1; }
          85% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1.1); opacity: 0; }
        }

        @keyframes energyStreakFast {
          0% { transform: translateX(-120%) scaleY(1); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(120%) scaleY(2); opacity: 0; }
        }

        @keyframes doomGlitchReveal {
          0% { transform: scale(0.95); opacity: 0; filter: blur(8px); }
          25% { transform: scale(1.02); opacity: 0.9; filter: blur(0px); }
          30% { transform: translateX(-4px); }
          35% { transform: translateX(4px); }
          40% { transform: translateX(0); }
          90% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(1.08); opacity: 0; filter: blur(4px); }
        }

        @keyframes greenFlashPulse {
          0% { transform: scale(0.6); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>

      {/* ------------------------------------------------
          STEP 1 (0.0s – 1.0s): IRON MAN
          ------------------------------------------------ */}
      {step === 1 && (
        <div style={{
          animation: 'ironManZoom 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(42px, 8vw, 84px)',
            fontWeight: 900,
            letterSpacing: '10px',
            margin: 0,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(226, 29, 45, 0.2)'
          }}>
            IRON MAN
          </h1>
        </div>
      )}

      {/* ------------------------------------------------
          STEP 2 (1.0s – 2.1s): SHORT CINEMATIC SUPERHERO-TECH ANIMATION
          ------------------------------------------------ */}
      {step === 2 && (
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Fast Red/Gold Energy Streak */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #E21D2D 40%, #FBCA03 60%, transparent 100%)',
            animation: 'energyStreakFast 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            boxShadow: '0 0 25px #E21D2D, 0 0 50px #FBCA03'
          }} />

          {/* Mechanical HUD Fragments & Light Flash */}
          <div style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            border: '1px solid rgba(226, 29, 45, 0.4)',
            borderRadius: '50%',
            animation: 'greenFlashPulse 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            boxShadow: '0 0 40px rgba(226, 29, 45, 0.6)'
          }} />
        </div>
      )}

      {/* ------------------------------------------------
          STEP 3 (2.1s – 3.5s): I AM DOOM.
          ------------------------------------------------ */}
      {step === 3 && (
        <div style={{
          animation: 'doomGlitchReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(46px, 9vw, 96px)',
            fontWeight: 900,
            letterSpacing: '8px',
            margin: '0 0 12px 0',
            color: '#EAF7F0',
            textShadow: '0 0 35px rgba(57, 255, 136, 0.85), 0 0 70px rgba(57, 255, 136, 0.45)'
          }}>
            I AM DOOM.
          </h1>

          {/* Small Optional Microtext */}
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '12px',
            color: '#39FF88',
            letterSpacing: '3px',
            opacity: 0.85,
            textShadow: '0 0 10px rgba(57, 255, 136, 0.6)'
          }}>
            DOOMSDAY PROTOCOL // ACTIVE
          </div>
        </div>
      )}

      {/* ------------------------------------------------
          STEP 4 (3.5s – 4.5s): GREEN ENERGY TRANSITION
          ------------------------------------------------ */}
      {step === 4 && (
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justify: 'center'
        }}>
          {/* Expanding Green Energy Shockwave */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '2px solid #39FF88',
            borderRadius: '50%',
            animation: 'greenFlashPulse 1.0s ease-out forwards',
            boxShadow: '0 0 60px #39FF88'
          }} />

          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: 900,
            color: '#EAF7F0',
            letterSpacing: '6px',
            opacity: 0.6
          }}>
            IGNITRRON ’26
          </div>
        </div>
      )}
    </div>
  );
}
