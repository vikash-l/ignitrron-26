import React, { useState } from 'react';
import { Lock, Unlock, Key, Terminal, ShieldCheck, Hash } from 'lucide-react';

export const Round2CipherVisual: React.FC = () => {
  const [dialValues, setDialValues] = useState<number[]>([7, 2, 9, 4]);
  const targetCode = [7, 2, 9, 4];
  const isUnlocked = dialValues.every((val, idx) => val === targetCode[idx]);

  const rotateDial = (index: number) => {
    setDialValues(prev => {
      const next = [...prev];
      next[index] = (next[index] + 1) % 10;
      return next;
    });
  };

  return (
    <div className="relative w-full h-full min-h-[320px] bg-[#000000] rounded-xl overflow-hidden border border-red-900/40 p-4 flex flex-col justify-between group">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-red-400 border-b border-red-900/30 pb-2 z-10">
        <div className="flex items-center gap-2 max-w-full overflow-hidden">
          {isUnlocked ? (
            <Unlock className="w-4 h-4 shrink-0 text-emerald-400 animate-bounce" />
          ) : (
            <Lock className="w-4 h-4 shrink-0 text-[#e31b23]" />
          )}
          <span className="truncate">CRYPTIC_CIPHER_MATRIX_V2.0</span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border whitespace-nowrap shrink-0 ${
          isUnlocked 
            ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40' 
            : 'bg-red-950 text-[#e31b23] border-red-600/40'
        }`}>
          {isUnlocked ? 'CHAMBER UNLOCKED' : 'VAULT LOCKED'}
        </span>
      </div>

      {/* Main Lock / Cipher Wheel Visual */}
      <div className="relative my-3 flex-1 rounded-lg overflow-hidden border border-red-900/40 bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-300 mb-1">
            <Key className="w-3.5 h-3.5 text-[#e31b23]" />
            <span>ESCAPE ROOM SECURITY LOCK</span>
          </div>
          <p className="text-[11px] text-slate-400 font-mono">
            {isUnlocked ? 'Sequence Matched. Escape Vector Open.' : 'Rotate dials to match encrypted case coordinates'}
          </p>
        </div>

        {/* 4 Interactive Combination Dials */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          {dialValues.map((val, idx) => (
            <button
              key={idx}
              onClick={() => rotateDial(idx)}
              className={`relative w-12 h-16 sm:w-14 sm:h-20 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                isUnlocked 
                  ? 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                  : 'bg-black border border-red-900/60 hover:border-[#e31b23] text-[#e31b23] hover:bg-red-950/40'
              }`}
            >
              <div className="absolute top-1 text-[9px] font-mono text-slate-500">DIGIT {idx + 1}</div>
              <span className="text-2xl font-bold font-mono my-auto">{val}</span>
              <div className="absolute bottom-1 w-6 h-0.5 bg-[#e31b23]/50 rounded" />
            </button>
          ))}
        </div>

        {/* Cipher matrix stream */}
        <div className="w-full bg-black rounded p-2 border border-red-900/30 flex items-center justify-between font-mono text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Hash className="w-3 h-3 text-[#e31b23]" />
            HASH: 0x{dialValues.join('')}9A7F
          </span>
          <span className="text-[#e31b23]">MATCH: {isUnlocked ? '100%' : 'PENDING'}</span>
        </div>
      </div>

      {/* Footer hint */}
      <div className="z-10 bg-black p-2.5 rounded-lg border border-red-900/40 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#e31b23]" />
          <span className="font-mono text-slate-300 text-[11px]">
            {isUnlocked ? 'Success! Proceed to Round 03 Crime Scene' : 'Interactive Hint: Click dials to cycle values'}
          </span>
        </div>
        {isUnlocked && (
          <span className="flex items-center gap-1 text-emerald-400 font-mono text-[10px] animate-pulse">
            <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
          </span>
        )}
      </div>
    </div>
  );
};
