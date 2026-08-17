import React, { useEffect, useState } from 'react';
import { sound } from '../../utils/audio';

interface SystemScanProps {
  triggerKey?: string | number;
}

export const SystemScan: React.FC<SystemScanProps> = ({ triggerKey }) => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    setScanning(true);
    sound.playScan();
    const timer = setTimeout(() => {
      setScanning(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [triggerKey]);

  if (!scanning) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Laser line sweep */}
      <div 
        className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00F0FF] animate-[scanline-beam_1.2s_ease-in-out]"
      />
      {/* HUD Telemetry Banner */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 border border-cyan-500/50 px-6 py-2 rounded text-cyan-400 font-mono text-xs tracking-widest flex items-center gap-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.3)]">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        TECHNO CLASH // SYSTEM SCAN // MODULE INITIALIZED
      </div>
    </div>
  );
};
