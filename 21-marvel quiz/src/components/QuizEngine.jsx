import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_ROUNDS } from '../data/quizData';
import { Timer, Zap, CheckCircle2, XCircle, ArrowRight, Sparkles, Eye, ShieldAlert } from 'lucide-react';
import { sounds } from '../services/soundEffects';

const LOKI_QUOTES = {
  correct: [
    "Impressive... for a mortal.",
    "That was almost clever.",
    "The timeline stabilizes... for now.",
    "You're becoming troublesome.",
  ],
  incorrect: [
    "Are you certain?",
    "Reality disagrees.",
    "Perhaps another timeline knows the answer.",
    "Interesting choice...",
    "Mischief favors the bold. You were not bold.",
  ]
};

export const QuizEngine = ({ initialRoundId = 'origin', onFinishQuiz, onExitQuiz }) => {
  const [selectedRoundId] = useState(initialRoundId);
  const round = TIMELINE_ROUNDS.find((r) => r.id === selectedRoundId) || TIMELINE_ROUNDS[0];
  const questions = round.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [stability, setStability] = useState(100);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lokiCommentary, setLokiCommentary] = useState('');
  const [showVariantDetected, setShowVariantDetected] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[currentIndex];

  // 30-Second Countdown Timer Per Question
  useEffect(() => {
    if (isAnswered || isTransitioning || showVariantDetected) return;

    if (timeLeft <= 0) {
      handleAnswerSelect(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 6 && prev > 1) {
          sounds.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isTransitioning, showVariantDetected]);

  const handleAnswerSelect = (optionIndex) => {
    if (isAnswered || isTransitioning) return;

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    const isTimeout = optionIndex === -1;

    // Pick random Loki quote
    const pool = isCorrect ? LOKI_QUOTES.correct : LOKI_QUOTES.incorrect;
    const quote = pool[Math.floor(Math.random() * pool.length)];
    setLokiCommentary(quote);

    let pointsEarned = 0;
    if (isCorrect) {
      sounds.playCorrect();
      const timeBonus = Math.floor(timeLeft * 2);
      pointsEarned = currentQuestion.points + timeBonus;
      setScore((prev) => prev + pointsEarned);
      setStreak((prev) => prev + 1);
      setStability((prev) => Math.min(100, prev + 2));
    } else {
      sounds.playIncorrect();
      setStreak(0);
      setStability((prev) => Math.max(10, prev - (isTimeout ? 15 : 10)));
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedOption: optionIndex,
        correctOption: currentQuestion.correctAnswer,
        isCorrect,
        pointsEarned,
        timeTaken: 30 - timeLeft,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (isTransitioning) return;

    sounds.playPortalHum();

    // 20% Chance of triggering "VARIANT DETECTED" Easter Egg screen split
    const triggerVariantEvent = Math.random() < 0.2 && currentIndex < questions.length - 1;

    if (triggerVariantEvent) {
      setShowVariantDetected(true);
      setTimeout(() => {
        setShowVariantDetected(false);
        advanceQuestion();
      }, 1000);
    } else {
      advanceQuestion();
    }
  };

  const advanceQuestion = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setLokiCommentary('');
        setTimeLeft(30);
        setIsTransitioning(false);
      } else {
        const totalDuration = Math.round((Date.now() - startTime) / 1000);
        onFinishQuiz({
          roundTitle: round.title,
          score,
          totalQuestions: questions.length,
          userAnswers,
          stability,
          durationSeconds: totalDuration,
        });
      }
    }, 500); // 500ms illusion particle transition
  };

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  const timerCircleOffset = 283 - (283 * timeLeft) / 30;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center relative">
      
      {/* VARIANT DETECTED Easter Egg Screen Split Overlay */}
      <AnimatePresence>
        {showVariantDetected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050706] flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-3">
              <ShieldAlert className="w-12 h-12 text-[#C8A951] animate-bounce" />
              <span className="font-mono text-xl font-bold text-[#35D98B] tracking-[0.4em] animate-glitch">
                VARIANT DETECTED
              </span>
              <span className="font-mono text-xs text-[#C8A951]">
                REALITY STREAM SPLITTING...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question Transition Illusion Clones Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050706]/90 backdrop-blur-md flex items-center justify-center pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.4, 0], opacity: [1, 0.5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 rounded-full border-2 border-[#35D98B] shadow-[0_0_40px_#35D98B]"
              />
              <span className="absolute font-mono text-xs text-[#35D98B] tracking-widest font-bold">
                WEAVING NEW TIMELINE...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP HEADER: Event & Stability */}
      <div className="glass-panel p-4 sm:p-6 rounded-2xl mb-8 border-[#35D98B]/20 shadow-emerald-glow flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <button
            onClick={onExitQuiz}
            className="px-3 py-1.5 rounded-lg border border-[#35D98B]/30 font-mono text-xs text-[#8E9A94] hover:text-[#35D98B] transition-colors"
          >
            ← ABANDON TRIAL
          </button>
          <div>
            <span className="font-mono text-[10px] text-[#C8A951] tracking-widest uppercase block">
              LOKI'S TIMELINE // {round.title}
            </span>
            <span className="font-display font-bold text-sm text-[#F4F7F5]">
              SACRED ANOMALY TRIAL
            </span>
          </div>
        </div>

        {/* Live Score & Stability */}
        <div className="flex items-center gap-6 font-mono">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#8E9A94]">VARIATION SCORE</span>
            <span className="text-xl font-bold text-[#35D98B] glow-text">{score} PTS</span>
          </div>

          <div className="h-8 w-[1px] bg-[#35D98B]/20" />

          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#8E9A94]">REALITY STABILITY</span>
            <div className="flex items-center gap-2">
              <span className={`text-base font-bold ${stability > 60 ? 'text-[#35D98B]' : stability > 30 ? 'text-[#C8A951]' : 'text-red-400'}`}>
                {stability}%
              </span>
              <div className="w-16 h-2 bg-[#0A100D] rounded-full overflow-hidden border border-[#35D98B]/30">
                <div
                  className={`h-full transition-all duration-500 ${stability > 60 ? 'bg-[#35D98B]' : stability > 30 ? 'bg-[#C8A951]' : 'bg-red-500'}`}
                  style={{ width: `${stability}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* MAIN QUIZ GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Progress & Time Ring */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border-[#35D98B]/20 flex flex-col items-center justify-between gap-6">
          
          <div className="w-full flex items-center justify-between font-mono text-xs text-[#8E9A94]">
            <span>ANOMALY QUERY</span>
            <span className="text-[#35D98B] font-bold">
              0{currentIndex + 1} / 0{questions.length}
            </span>
          </div>

          <div className="w-full h-1.5 bg-[#0A100D] rounded-full overflow-hidden border border-[#35D98B]/20">
            <motion.div
              className="h-full bg-gradient-to-r from-[#16A36A] to-[#35D98B]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Time Ring */}
          <div className="relative w-36 h-36 flex items-center justify-center my-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="stroke-[#0A100D] fill-none stroke-[6]" />
              <circle
                cx="50"
                cy="50"
                r="45"
                strokeDasharray="283"
                strokeDashoffset={timerCircleOffset}
                strokeLinecap="round"
                className={`fill-none stroke-[6] transition-all duration-1000 ${
                  timeLeft <= 7 ? 'stroke-red-500' : timeLeft <= 15 ? 'stroke-[#C8A951]' : 'stroke-[#35D98B]'
                }`}
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center font-mono">
              <span className="text-[9px] text-[#8E9A94] uppercase tracking-wider">TIME THREAD</span>
              <span className={`text-3xl font-extrabold ${timeLeft <= 7 ? 'text-red-400 animate-ping' : 'text-[#F4F7F5]'}`}>
                {timeLeft < 10 ? `0${timeLeft}` : timeLeft}s
              </span>
            </div>
          </div>

          {/* Streak Indicator */}
          {streak > 1 && (
            <div className="px-3 py-1.5 rounded-full bg-[#C8A951]/10 border border-[#C8A951]/40 font-mono text-xs text-[#E1C66A] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-[#C8A951]" />
              <span>{streak}X MULTIPLIER!</span>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Question & Answer Options */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Question Card */}
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 rounded-3xl border-[#35D98B]/20 shadow-emerald-lg relative overflow-hidden"
          >
            <span className="font-mono text-xs text-[#C8A951] font-semibold tracking-widest mb-2 block">
              QUERY #{currentIndex + 1}
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F4F7F5] leading-snug">
              {currentQuestion.question}
            </h2>
          </motion.div>

          {/* 4 Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, idx) => {
              const letterLabel = String.fromCharCode(65 + idx);
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === currentQuestion.correctAnswer;

              let cardStyle = 'glass-panel border-[#35D98B]/15 hover:border-[#35D98B]/50 hover:-translate-y-0.5';

              if (isAnswered) {
                if (isCorrectOption) {
                  cardStyle = 'bg-[#16A36A]/20 border-2 border-[#35D98B] shadow-[0_0_20px_#35D98B] text-white';
                } else if (isSelected && !isCorrectOption) {
                  cardStyle = 'bg-red-500/10 border-2 border-red-500/60 text-red-200';
                } else {
                  cardStyle = 'glass-panel opacity-40 border-transparent pointer-events-none';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleAnswerSelect(idx)}
                  onMouseEnter={() => !isAnswered && sounds.playHover()}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 relative overflow-hidden group ${cardStyle}`}
                >
                  {/* Option Letter Badge */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                      isAnswered && isCorrectOption
                        ? 'bg-[#35D98B] text-[#050706]'
                        : isSelected && !isCorrectOption
                        ? 'bg-red-500 text-white'
                        : 'bg-[#0A100D] border border-[#35D98B]/30 text-[#35D98B] group-hover:border-[#35D98B]'
                    }`}
                  >
                    {letterLabel}
                  </div>

                  <span className="font-display text-sm font-semibold text-[#F4F7F5] flex-1">
                    {option}
                  </span>

                  {isAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-[#35D98B]" />}
                  {isAnswered && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-red-400" />}
                </button>
              );
            })}
          </div>

          {/* Loki Commentary Banner */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="glass-panel p-6 rounded-2xl border-[#35D98B]/30 bg-[#0A100D]/90 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C8A951]">
                    <Eye className="w-4 h-4 text-[#35D98B]" />
                    <span>LOKI SAYS: "{lokiCommentary}"</span>
                  </div>
                  <p className="text-xs text-[#8E9A94]">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="btn-timeline-glow px-6 py-3 rounded-xl font-mono text-xs font-bold text-[#F4F7F5] flex items-center gap-2 whitespace-nowrap shadow-emerald-glow"
                >
                  <span>{currentIndex + 1 === questions.length ? 'RECEIVE LOKI\'S JUDGEMENT' : 'NEXT TIMELINE'}</span>
                  <ArrowRight className="w-4 h-4 text-[#35D98B]" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
};
