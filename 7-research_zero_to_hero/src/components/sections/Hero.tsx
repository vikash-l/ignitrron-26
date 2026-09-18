import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Shield, Users, Clock, ArrowRight } from 'lucide-react';
import { eventData } from '../../data/event';
import { Button } from '../ui/Button';
import bruceBannerImg from '../../assets/bruce_banner.jpg';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#04080F]">
      {/* Background Gamma-Energy Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-full max-w-[350px] h-[350px] sm:w-full max-w-[600px] sm:h-[600px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-full max-w-[350px] h-[350px] sm:w-full max-w-[600px] sm:h-[600px] rounded-full bg-green-600/5 blur-[120px] pointer-events-none" />
      
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Organized by Science Club badge */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/20 border border-emerald-800/40 mb-6">
                <Shield className="h-3.5 w-3.5" />
                {eventData.category}
              </span>
              
              {/* Event Name */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl md:text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
                {eventData.name}
              </h1>
              
              {/* Subheading / Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 mb-4 tracking-wide uppercase">
                {eventData.tagline}
              </p>
              <p className="text-sm font-semibold tracking-wider text-slate-500 mb-6 uppercase font-mono">
                // Every breakthrough begins with a question.
              </p>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {eventData.description}
              </p>

              {/* Event Metadata (Day, Time, Venue, Team size badges) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                {eventData.date && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-905 text-slate-300">
                    <Calendar className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">{eventData.date}</span>
                  </div>
                )}
                {eventData.time && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-905 text-slate-300">
                    <Clock className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">{eventData.time}</span>
                  </div>
                )}
                {eventData.venue && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-905 text-slate-300">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">{eventData.venue}</span>
                  </div>
                )}
                {eventData.teamSize && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-905 text-slate-300">
                    <Users className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">TEAM SIZE: {eventData.teamSize}</span>
                  </div>
                )}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 shadow-emerald-600/10 text-white font-bold"
                  icon={<ArrowRight className="h-4 w-4" />}
                  onClick={() => handleScrollTo('researchJourney')}
                >
                  Explore the Research Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-slate-900 border-none hover:bg-slate-850 text-slate-300 hover:text-white"
                  onClick={() => handleScrollTo('rounds')}
                >
                  View Rounds
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column - Bruce Banner Researcher */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative w-full max-w-full max-w-[380px] sm:max-w-full max-w-[420px] aspect-square rounded-2xl border border-slate-900 bg-slate-900/40 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center group"
            >
              {/* Subtle green ambient lighting grid */}
              <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent opacity-50 z-10 pointer-events-none" />
              
              <img 
                src={bruceBannerImg} 
                alt="Bruce Banner - The Researcher" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Monospace overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 rounded-xl border border-slate-900 bg-slate-950/80 backdrop-blur-md text-left font-mono">
                <span className="text-emerald-450 text-[10px] font-bold tracking-widest block uppercase mb-0.5">
                  // Core Researcher
                </span>
                <span className="text-white text-xs font-bold">
                  BRUCE BANNER
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
