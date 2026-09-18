import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, ExternalLink, X, Check } from 'lucide-react';

export const CalendarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//IGNITRRON 26//OVERDRIVE Event//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:IGNITRRON'26 — OVERDRIVE
DESCRIPTION:Master AI. Build Smarter. Move Faster. 24-Hour AI Prompt-to-Prototype Hackathon.
LOCATION:ADC LAB
DTSTART:20260920T033000Z
DTEND:20260921T033000Z
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'OVERDRIVE_IGNITRRON26.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=IGNITRRON%2726+%E2%80%94+OVERDRIVE&dates=20260920T033000Z/20260921T033000Z&details=Master+AI.+Build+Smarter.+Move+Faster.+24-Hour+AI+Prompt-to-Prototype+Hackathon.&location=ADC+LAB`;

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

          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/40 text-purple-600 dark:text-purple-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Add to Calendar</h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">IGNITRRON’26 — OVERDRIVE</p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800/80 rounded-lg p-3.5 mb-5 text-sm space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-zinc-400 text-xs font-mono">DATE</span>
              <span className="font-semibold text-xs">20 – 21 SEPT 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-zinc-400 text-xs font-mono">TIME</span>
              <span className="font-semibold text-xs">09:00 AM (24 HOURS)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-zinc-400 text-xs font-mono">VENUE</span>
              <span className="font-semibold text-xs">ADC LAB</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={downloadICS}
              className="w-full flex items-center justify-between px-4 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium rounded-lg text-sm transition shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download .ICS File</span>
              </span>
              <span className="text-xs opacity-80 font-mono">iCal / Apple / Outlook</span>
            </button>

            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-slate-800 dark:text-zinc-200 font-medium rounded-lg text-sm border border-slate-200 dark:border-zinc-700 transition"
            >
              <span className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4 text-purple-500" />
                <span>Google Calendar</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">Web Link →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
