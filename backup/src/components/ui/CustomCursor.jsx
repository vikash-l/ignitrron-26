import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch screens
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.onclick || target.getAttribute('role') === 'button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

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
          zIndex: 9999,
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
          zIndex: 9998,
          transition: 'width 0.15s ease, height 0.15s ease, border 0.15s ease',
          boxShadow: isHovered ? '0 0 15px rgba(57, 255, 136, 0.6)' : 'none'
        }}
      />
    </>
  );
}
