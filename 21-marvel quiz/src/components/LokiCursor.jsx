import React, { useEffect, useState } from 'react';

export const LokiCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isLokiHovered, setIsLokiHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-element');
      const isLokiElement = target.closest('.loki-visual-container, svg');

      setIsHovered(!!isInteractive);
      setIsLokiHovered(!!isLokiElement);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[150] overflow-hidden">
      {/* Primary Glowing Point */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#38E39A] rounded-full shadow-[0_0_12px_#38E39A] transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.6 : isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Primary Magic Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isHovered
            ? 'w-10 h-10 border-[#B99A45] bg-[#B99A45]/10 shadow-[0_0_20px_rgba(185,154,69,0.4)] animate-spin'
            : 'w-7 h-7 border-[#38E39A]/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* LOKI ILLUSION DUPLICATE CURSOR */}
      {isLokiHovered && (
        <div
          className="fixed top-0 left-0 w-3 h-3 bg-[#B99A45] rounded-full opacity-60 filter blur-[1px] transition-transform duration-300 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            transform: `translate3d(${pos.x + 16}px, ${pos.y + 16}px, 0)`,
          }}
        />
      )}
    </div>
  );
};
