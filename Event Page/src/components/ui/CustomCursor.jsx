import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check initial fine pointer capability (mouse / trackpad / stylus)
    const hasFinePointer = typeof window !== 'undefined' && 
      (window.matchMedia ? window.matchMedia('(pointer: fine)').matches : true);

    const handlePointerMove = (e) => {
      // Suppress custom reticle on touch contact so it doesn't jump under finger taps
      if (e.pointerType === 'touch') {
        setIsVisible(false);
        document.body.classList.remove('has-custom-cursor');
        return;
      }

      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      document.body.classList.add('has-custom-cursor');

      const target = e.target;
      if (target && typeof target.closest === 'function') {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], [cursor="pointer"]');
        if (interactive) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      } else {
        setIsHovered(false);
      }
    };

    const handlePointerDown = (e) => {
      if (e.pointerType === 'touch') return;
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('has-custom-cursor');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    // On fine-pointer capable devices, activate custom cursor class
    if (hasFinePointer) {
      document.body.classList.add('has-custom-cursor');
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Targeting Reticle Dot (Doomsday Green) */}
      <div
        style={{
          position: 'fixed',
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          width: '6px',
          height: '6px',
          background: '#39FF88',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999999,
          boxShadow: '0 0 10px #39FF88'
        }}
      />

      {/* Outer Lock-on Ring */}
      <div
        style={{
          position: 'fixed',
          top: `${pos.y}px`,
          left: `${pos.x}px`,
          width: isClicked ? '42px' : (isHovered ? '34px' : '24px'),
          height: isClicked ? '42px' : (isHovered ? '34px' : '24px'),
          border: isHovered ? '1px solid #39FF88' : '1px solid rgba(57, 255, 136, 0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999998,
          transition: 'width 0.15s ease, height 0.15s ease, border 0.15s ease',
          boxShadow: isHovered ? '0 0 15px rgba(57, 255, 136, 0.6)' : 'none'
        }}
      />
    </>
  );
}
