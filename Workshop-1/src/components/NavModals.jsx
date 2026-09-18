import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Code, Cpu, HelpCircle, Mail, Globe, Trophy } from 'lucide-react';

export const NavModals = ({ activeModal, onClose, onRegisterOpen }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'events':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IGNITRRON’26 Events</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Explore flagship engineering tracks</p>
              </div>
            </div>
            <div className="space-y-3 my-4 max-h-[60vh] overflow-y-auto pr-1">
              <div className="p-3.5 rounded-xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-sm text-purple-700 dark:text-purple-300">
                  <span>OVERDRIVE (FLAGSHIP)</span>
                  <span className="px-2 py-0.5 rounded bg-purple-600 text-white text-[10px] font-mono">FEATURED</span>
                </div>
                <p className="text-slate-600 dark:text-zinc-300">24-Hour AI Prompt-to-Prototype Hackathon. Build functional tools, calculators & knowledge engines.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>ROBO-STRIKE</span>
                  <span className="text-slate-500 dark:text-zinc-400 text-[10px] font-mono">HARDWARE</span>
                </div>
                <p className="text-slate-600 dark:text-zinc-400">Autonomous obstacle navigation & robotic combat showcase.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>CYBER-HERTZ</span>
                  <span className="text-slate-500 dark:text-zinc-400 text-[10px] font-mono">SECURITY</span>
                </div>
                <p className="text-slate-600 dark:text-zinc-400">Jeopardy-style Capture The Flag cybersecurity competition.</p>
              </div>
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">OVERDRIVE Timeline</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Sept 20 – Sept 21, 2026 Schedule</p>
              </div>
            </div>

            <div className="space-y-3 my-4 text-xs font-mono max-h-[60vh] overflow-y-auto pr-1">
              <div className="border-l-2 border-purple-500 pl-3 py-1">
                <span className="text-purple-600 dark:text-purple-400 font-bold">SEPT 20 • 08:30 AM</span>
                <p className="text-slate-800 dark:text-zinc-200 font-sans font-medium text-xs">Reporting & Team Check-in at ADC Lab</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-3 py-1">
                <span className="text-purple-600 dark:text-purple-400 font-bold">SEPT 20 • 09:30 AM</span>
                <p className="text-slate-800 dark:text-zinc-200 font-sans font-medium text-xs">HACKATHON KICKOFF & Problem Statements Briefing</p>
              </div>
              <div className="border-l-2 border-slate-300 dark:border-zinc-700 pl-3 py-1">
                <span className="text-slate-500 dark:text-zinc-400">SEPT 20 • 02:00 PM</span>
                <p className="text-slate-800 dark:text-zinc-200 font-sans text-xs">Checkpoint 1: System Architecture & Prompt Framework Review</p>
              </div>
              <div className="border-l-2 border-slate-300 dark:border-zinc-700 pl-3 py-1">
                <span className="text-slate-500 dark:text-zinc-400">SEPT 20 • 10:00 PM</span>
                <p className="text-slate-800 dark:text-zinc-200 font-sans text-xs">Checkpoint 2: Working Prototype & Code Evaluation</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-3 py-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">SEPT 21 • 09:30 AM</span>
                <p className="text-slate-800 dark:text-zinc-200 font-sans font-medium text-xs">Final Pitching, Demo Showcase & Award Ceremony</p>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">About IGNITRRON’26</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Fuel The Spark Within</p>
              </div>
            </div>
            <div className="space-y-3 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed my-4">
              <p>
                <strong>IGNITRRON’26</strong> is the premier annual technical symposium bringing together top student developers, mechanical minds, and AI builders.
              </p>
              <p>
                <strong>OVERDRIVE</strong> is designed to elevate how engineers interact with AI—transitioning from basic question-answering to directed system architecture, zero-hallucination prompt pipelines, and real working code output.
              </p>
              <div className="bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-3 rounded-lg flex items-center justify-between font-mono text-[11px]">
                <span>LOCATION: ADC LAB</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">CAMPUS MAIN BLOCK</span>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Contact Team OVERDRIVE</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">We're here to answer any queries</p>
              </div>
            </div>
            <div className="space-y-3 my-4 text-xs">
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900">
                <Mail className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-zinc-100">Event Email</p>
                  <p className="text-slate-500 dark:text-zinc-400 font-mono text-[11px]">overdrive@ignitrron26.edu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900">
                <MapPin className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-zinc-100">Venue</p>
                  <p className="text-slate-500 dark:text-zinc-400">Advanced Digital Computing Lab (ADC LAB)</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md bg-white dark:bg-[#141417] border border-slate-200 dark:border-zinc-800 rounded-xl p-6 shadow-2xl relative text-slate-900 dark:text-zinc-100"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {renderContent()}

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition"
            >
              Close Window
            </button>

            {activeModal === 'events' && (
              <button
                onClick={() => {
                  onClose();
                  onRegisterOpen();
                }}
                className="px-4 py-2 text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
              >
                Register For Overdrive →
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
