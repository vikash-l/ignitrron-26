import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'EVENTS', id: 'events' },
    { label: 'SCHEDULE', id: 'schedule' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNav = (id) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#09090b]/90 border-b border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT: Branding */}
          <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => handleNav('home')}>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-wider text-zinc-100 font-sans flex items-center gap-1.5">
                IGNITRRON’26
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-purple-400 font-semibold -mt-1">
                FUEL THE SPARK WITHIN
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-xs font-mono tracking-wider font-semibold text-zinc-400 hover:text-purple-400 transition-colors py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RIGHT: Register Button Linked to Ticket9 */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.theticket9.com/event/ignitrron-26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              REGISTER NOW
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-zinc-300 hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-[#09090b] px-6 pt-2 pb-5 space-y-3"
          >
            <div className="flex flex-col space-y-2 pt-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-left text-xs font-mono tracking-wider font-semibold text-zinc-300 hover:text-purple-400 py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="pt-2">
              <a
                href="https://www.theticket9.com/event/ignitrron-26"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 text-xs font-mono font-bold tracking-wider rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow-md transition text-center"
              >
                REGISTER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
