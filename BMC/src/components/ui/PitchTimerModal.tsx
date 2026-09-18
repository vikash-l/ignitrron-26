import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Volume2, VolumeX, Shield, Clock, AlertCircle } from 'lucide-react';
import { playUiSound } from '../../utils/soundEffects';

interface PitchTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchTimerModal: React.FC<PitchTimerModalProps> = ({ isOpen, onClose }) => {
  // 5 mins = 300s (Presentation), 3 mins = 180s (Q&A), Total = 480s
  const PRESENTATION_TIME = 300;
  const QA_TIME = 180;
  const TOTAL_TIME = PRESENTATION_TIME + QA_TIME;

  const [secondsLeft, setSecondsLeft] = useState<number>(TOTAL_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [audioAlerts, setAudioAlerts] = useState<boolean>(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === QA_TIME + 1 && audioAlerts) {
            playUiSound('alert');
          }
          if (prev <= 1) {
            if (audioAlerts) playUiSound('success');
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft, audioAlerts]);

  if (!isOpen) return null;

  const elapsedTime = TOTAL_TIME - secondsLeft;
  const isPresentationPhase = elapsedTime < PRESENTATION_TIME;
  const overallProgress = (elapsedTime / TOTAL_TIME) * 100;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    playUiSound('click');
    setIsRunning(false);
    setSecondsLeft(TOTAL_TIME);
  };

  const handleToggle = () => {
    playUiSound('select');
    setIsRunning(!isRunning);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0b0f14] border border-[#00ff88]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#00ff88]/20 overflow-hidden oscorp-cut">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#cbd5e1]/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#00ff88] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                Oscorp Pitch Practice Arena
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">8-Minute Boardroom Simulation</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playUiSound('hover');
                setAudioAlerts(!audioAlerts);
              }}
              className="p-2 rounded-lg bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-[#00ff88] hover:border-[#00ff88]/40 transition-colors"
              title={audioAlerts ? "Mute audio alerts" : "Enable audio alerts"}
            >
              {audioAlerts ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playUiSound('click');
                onClose();
              }}
              className="p-2 rounded-lg bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white hover:border-red-500/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Phase Status Banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#050816] border border-[#cbd5e1]/10">
          <div className="flex items-center gap-3">
            <Clock className={`w-5 h-5 ${isPresentationPhase ? 'text-[#00ff88]' : 'text-[#f59e0b]'}`} />
            <div>
              <span className="text-xs text-[#cbd5e1]/60 uppercase tracking-wider block">Current Stage</span>
              <span className="text-base font-bold text-white">
                {isPresentationPhase ? 'Phase 1: Pitch Presentation (5 Mins)' : 'Phase 2: Jury Q&A / Evaluation (3 Mins)'}
              </span>
            </div>
          </div>

          <span
            className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${
              isPresentationPhase
                ? 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30'
                : 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30'
            }`}
          >
            {isPresentationPhase ? 'Max 5–6 Slides' : 'Panel Interaction'}
          </span>
        </div>

        {/* Timer Display */}
        <div className="my-8 text-center">
          <div className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl sm:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(0,255,136,0.3)]">
            {formatTime(secondsLeft)}
          </div>
          <p className="mt-2 text-sm text-[#cbd5e1]/70 font-mono">
            {isPresentationPhase
              ? `Presentation Remaining: ${formatTime(secondsLeft - QA_TIME)}`
              : `Jury Q&A Remaining: ${formatTime(secondsLeft)}`}
          </p>

          {/* Dual Progress Bar */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-mono text-[#cbd5e1]/60">
              <span className="text-[#00ff88]">5 Min Presentation</span>
              <span className="text-[#f59e0b]">3 Min Q&A Interaction</span>
            </div>
            <div className="relative w-full h-3 bg-[#050816] rounded-full overflow-hidden border border-[#cbd5e1]/15 p-0.5">
              <div
                className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#00ff88] via-[#00c96b] to-[#f59e0b]"
                style={{ width: `${overallProgress}%` }}
              />
              {/* Divider mark for 5 min mark */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/40 z-10 pointer-events-none"
                style={{ left: `${(PRESENTATION_TIME / TOTAL_TIME) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Slide Pacing Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 p-3.5 rounded-xl bg-[#050816]/70 border border-[#cbd5e1]/10 text-center mb-6">
          <div>
            <div className="text-xs text-[#cbd5e1]/60">Recommended Pace</div>
            <div className="text-sm font-semibold text-white font-mono">~50s / Slide</div>
          </div>
          <div>
            <div className="text-xs text-[#cbd5e1]/60">Maximum Slides</div>
            <div className="text-sm font-semibold text-[#00ff88] font-mono">5–6 Slides</div>
          </div>
          <div>
            <div className="text-xs text-[#cbd5e1]/60">Deck Format</div>
            <div className="text-sm font-semibold text-[#f59e0b] font-mono">PPT + BMC</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#050816] border border-[#cbd5e1]/20 text-[#cbd5e1] hover:text-white hover:border-[#cbd5e1]/50 transition-all font-semibold text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button
            onClick={handleToggle}
            className={`flex items-center gap-2 px-8 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg ${
              isRunning
                ? 'bg-[#f59e0b] text-[#050816] hover:bg-[#d97706] shadow-[#f59e0b]/30'
                : 'bg-[#00ff88] text-[#050816] hover:bg-[#00c96b] shadow-[#00ff88]/30'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" /> Pause Simulation
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Start Boardroom Pitch
              </>
            )}
          </button>
        </div>

        {/* Footer advisory */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#cbd5e1]/50 text-center">
          <AlertCircle className="w-3.5 h-3.5 text-[#00ff88]" />
          <span>Practice with your 2–4 team members to master the 5-minute threshold.</span>
        </div>
      </div>
    </div>
  );
};
