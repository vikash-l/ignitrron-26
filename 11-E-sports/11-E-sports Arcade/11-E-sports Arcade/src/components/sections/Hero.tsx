import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Shield } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about') || document.getElementById('eventInfo');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge above title */}
              {eventData.category && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/20 border border-blue-800/40 mb-6">
                  <Shield className="h-3.5 w-3.5" />
                  {eventData.category}
                </span>
              )}
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
                {eventData.name}
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 tracking-wide">
                {eventData.tagline}
              </p>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {eventData.description}
              </p>

              {/* Event Metadata (Date & Location Badges) */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                {eventData.date && (
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <Calendar className="h-4.5 w-4.5 text-blue-500" />
                    <span className="text-sm font-semibold tracking-wide">{eventData.date}</span>
                  </div>
                )}
                {eventData.venue && (
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <MapPin className="h-4.5 w-4.5 text-blue-500" />
                    <span className="text-sm font-semibold tracking-wide">{eventData.venue}</span>
                  </div>
                )}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {eventData.registration && (
                  <a href={eventData.registration.url} className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="w-full bg-blue-600 hover:bg-blue-500 shadow-blue-600/10" icon={<ArrowRight className="h-4 w-4" />}>
                      {eventData.registration.label}
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-slate-900 border-none hover:bg-slate-850 text-slate-300 hover:text-white"
                  onClick={handleScrollDown}
                >
                  VIEW DETAILS
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Circular badge in center */}
                <div className="h-24 w-24 rounded-full bg-blue-600/15 border-2 border-blue-600/30 flex items-center justify-center mb-6">
                  <span className="text-4xl font-extrabold text-blue-500">E</span>
                </div>
                <h3 className="text-lg font-bold text-slate-200 uppercase tracking-widest mb-1.5">
                  {eventData.name}
                </h3>
                <p className="text-xs font-mono tracking-wider text-slate-500 uppercase">
                  MASTER VISUAL CONTAINER
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
