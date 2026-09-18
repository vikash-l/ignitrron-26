import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#030508]/80 backdrop-blur-xl border-b border-[#39ff14]/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a
            href="https://ignitrron-26.freelancerskpriet.workers.dev/"
            className="flex items-center gap-3 no-underline"
          >
            <div className="w-10 h-10 rounded-xl bg-black/40 border border-[#39ff14]/30 flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <Leaf className="text-[#39ff14] w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-white font-display tracking-widest uppercase">
              E-SPORT'S<span className="text-[#39ff14] font-light">.ARCADE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-[#39ff14] font-medium text-xs tracking-[0.2em] uppercase transition-colors">Home</a>
            <a href="#games" className="text-gray-300 hover:text-[#39ff14] font-medium text-xs tracking-[0.2em] uppercase transition-colors">Games</a>
            <a href="#story" className="text-gray-300 hover:text-[#39ff14] font-medium text-xs tracking-[0.2em] uppercase transition-colors">Lore</a>
            <a href="#rules" className="text-gray-300 hover:text-[#39ff14] font-medium text-xs tracking-[0.2em] uppercase transition-colors">Rules</a>
            <a href="#coordinators" className="text-gray-300 hover:text-[#39ff14] font-medium text-xs tracking-[0.2em] uppercase transition-colors">Coordinators</a>
          </nav>

          {/* CTA */}
          {/* Removed Register Now button */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
