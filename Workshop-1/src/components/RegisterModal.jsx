import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Rocket, ShieldCheck, Users, Mail, User, Code, ArrowRight } from 'lucide-react';

export const RegisterModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    teamSize: '3',
    track: 'AI Prompt-to-Prototype',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-lg bg-white dark:bg-[#141417] border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-slate-900 dark:text-zinc-100"
        >
          <button 
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Register for OVERDRIVE</h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">IGNITRRON’26 • 24-Hour AI Challenge</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1">
                    TEAM NAME *
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Prompt Engineers"
                      value={formData.teamName}
                      onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1">
                      TEAM LEADER NAME *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Full Name"
                      value={formData.leaderName}
                      onChange={(e) => setFormData({...formData, leaderName: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1">
                      TEAM SIZE *
                    </label>
                    <select 
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition"
                    >
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1">
                    LEADER EMAIL ADDRESS *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="leader@university.edu"
                    value={formData.leaderEmail}
                    onChange={(e) => setFormData({...formData, leaderEmail: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 mb-1">
                    PRIMARY INTEREST TRACK
                  </label>
                  <select 
                    value={formData.track}
                    onChange={(e) => setFormData({...formData, track: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-500 transition"
                  >
                    <option value="AI Prompt-to-Prototype">AI Prompt-to-Prototype (Core)</option>
                    <option value="EduTech & Knowledge Synthesis">EduTech & Knowledge Synthesis</option>
                    <option value="Interactive Micro-Tools & Apps">Interactive Micro-Tools & Apps</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium rounded-xl text-sm transition shadow-lg shadow-purple-500/20"
                  >
                    <span>CONFIRM REGISTRATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-400 dark:text-zinc-500 mt-2.5">
                    Free Entry • Venue: ADC LAB • 20 – 21 Sept 2026
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-4 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Registration Confirmed!</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 mb-6">
                Team <span className="font-semibold text-purple-600 dark:text-purple-400">{formData.teamName}</span> is registered for OVERDRIVE.
              </p>

              <div className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-4 text-left text-xs font-mono space-y-2 mb-6">
                <div className="flex justify-between border-b border-slate-200 dark:border-zinc-800 pb-2">
                  <span className="text-slate-400">REGISTRATION ID</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">OD-2026-8942</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">TEAM LEADER</span>
                  <span>{formData.leaderName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">TEAM SIZE</span>
                  <span>{formData.teamSize} Members</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">REPORTING VENUE</span>
                  <span>ADC LAB (08:30 AM, SEPT 20)</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="w-full py-2.5 px-4 bg-slate-900 dark:bg-zinc-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-zinc-900 font-medium rounded-xl text-sm transition"
              >
                Close Pass
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
