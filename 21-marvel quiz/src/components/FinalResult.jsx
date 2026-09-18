import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw, Trophy, Award, Clock, Activity, Home, ArrowRight } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const FinalResult = ({ results, onRestartQuiz, onViewLeaderboard, onGoHome }) => {
  const { roundTitle, score, totalQuestions, userAnswers, stability, durationSeconds } = results;

  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  const [counterScore, setCounterScore] = useState(0);

  // Determine Rank Classification Title based on accuracy
  let rankTitle = "TIMELINE VARIANT";
  if (accuracy === 100) rankTitle = "GOD OF STORIES";
  else if (accuracy >= 80) rankTitle = "TEMPORAL ARCHITECT";
  else if (accuracy >= 60) rankTitle = "CHRONO MASTER";
  else if (accuracy >= 40) rankTitle = "VOID SURVIVOR";

  useEffect(() => {
    // Trigger confetti burst on completion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#35D98B', '#16A36A', '#C8A951', '#E1C66A'],
    });

    sounds.playCorrect();

    // Animated score count-up effect
    let current = 0;
    const increment = Math.max(1, Math.floor(score / 40));
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setCounterScore(score);
        clearInterval(timer);
      } else {
        setCounterScore(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [score]);

  const formatDuration = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins > 0 ? `${mins}m ` : ''}${remainder}s`;
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full glass-panel p-8 sm:p-12 rounded-3xl border-[#35D98B]/30 shadow-emerald-lg relative overflow-hidden"
      >
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#C8A951]/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#35D98B] animate-ping" />
          <span className="font-mono text-xs text-[#E1C66A] tracking-[0.3em]">
            TVA SIMULATION COMPLETE
          </span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F4F7F5] mb-2 tracking-tight">
          TIMELINE <span className="text-[#35D98B] font-mono">STABILIZED.</span>
        </h1>

        <p className="font-mono text-xs sm:text-sm text-[#C8A951] tracking-widest uppercase mb-8">
          "THE TIMELINE REMEMBERS YOUR CHOICES."
        </p>

        {/* Big Counter Score Display */}
        <div className="my-6 p-6 rounded-2xl glass-panel border-[#35D98B]/20 bg-[#0A100D]/80 flex flex-col items-center justify-center">
          <span className="font-mono text-xs text-[#8E9A94] uppercase tracking-wider mb-1">
            FINAL VARIANT SCORE
          </span>
          <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-extrabold text-[#35D98B] glow-text">
            {counterScore} <span className="text-xl text-[#8E9A94] font-normal">PTS</span>
          </span>
          <div className="mt-3 px-4 py-1.5 rounded-full bg-[#C8A951]/10 border border-[#C8A951]/40 font-mono text-xs text-[#E1C66A] font-bold">
            RANK: {rankTitle}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8 font-mono">
          <div className="p-4 rounded-xl glass-panel border-[#35D98B]/10 flex flex-col items-center">
            <Trophy className="w-5 h-5 text-[#35D98B] mb-1" />
            <span className="text-[10px] text-[#8E9A94]">CORRECT</span>
            <span className="text-lg font-bold text-[#F4F7F5]">{correctCount} / {totalQuestions}</span>
          </div>

          <div className="p-4 rounded-xl glass-panel border-[#35D98B]/10 flex flex-col items-center">
            <Award className="w-5 h-5 text-[#C8A951] mb-1" />
            <span className="text-[10px] text-[#8E9A94]">ACCURACY</span>
            <span className="text-lg font-bold text-[#C8A951]">{accuracy}%</span>
          </div>

          <div className="p-4 rounded-xl glass-panel border-[#35D98B]/10 flex flex-col items-center">
            <Clock className="w-5 h-5 text-[#35D98B] mb-1" />
            <span className="text-[10px] text-[#8E9A94]">TIME TAKEN</span>
            <span className="text-lg font-bold text-[#F4F7F5]">{formatDuration(durationSeconds)}</span>
          </div>

          <div className="p-4 rounded-xl glass-panel border-[#35D98B]/10 flex flex-col items-center">
            <Activity className="w-5 h-5 text-[#35D98B] mb-1" />
            <span className="text-[10px] text-[#8E9A94]">STABILITY</span>
            <span className="text-lg font-bold text-[#35D98B]">{stability}%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => {
              sounds.playClick();
              onRestartQuiz();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#35D98B] text-[#35D98B] hover:bg-[#35D98B]/10 font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>TRY ANOTHER TIMELINE</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onViewLeaderboard();
            }}
            className="btn-timeline-glow w-full sm:w-auto px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-[#F4F7F5] tracking-wider flex items-center justify-center gap-2 shadow-emerald-glow"
          >
            <Trophy className="w-4 h-4 text-[#C8A951]" />
            <span>VIEW LEADERBOARD</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onGoHome();
            }}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl glass-panel text-[#8E9A94] hover:text-[#F4F7F5] font-mono text-xs tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>RETURN HOME</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
};
