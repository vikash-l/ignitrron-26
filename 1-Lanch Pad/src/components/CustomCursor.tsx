import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor only on desktop devices with fine pointer
    if (window.matchMedia('(pointer: fine)').matches) {
      setVisible(true);
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  useEffect(() => {
    let animationId: number;
    const followCursor = () => {
      setTrailing(prev => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animationId = requestAnimationFrame(followCursor);
    };
    animationId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Crosshair Center */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ${
          isMouseDown ? 'scale-75' : isHovered ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Inner Red Dot */}
          <div className="w-2.5 h-2.5 bg-[#ff003c] rounded-full shadow-[0_0_8px_#ff003c]" />
          
          {/* Crosshair Ring */}
          <div
            className={`absolute rounded-full border border-[#00f0ff] transition-all duration-150 ${
              isHovered ? 'w-10 h-10 border-[#ff003c] rotate-45' : 'w-6 h-6'
            }`}
          />
        </div>
      </div>

      {/* Trailing Web Node */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#ff003c]/40 transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
    </div>
  );
};
