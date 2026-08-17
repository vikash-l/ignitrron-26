import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { eventData } from '../data/ps5Data';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-transparent">
      
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* Left Side: Typography & CTA */}
        <div className="lg:w-1/2 text-left z-20 mt-12 lg:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-black/40 backdrop-blur-md rounded-full px-5 py-2 border border-[#39ff14]/30 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
              <span className="text-gray-300 font-mono text-xs uppercase tracking-widest">{eventData.dates}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.0] tracking-tight mb-6 font-display drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]">
              GROOT'S <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">ARCADE</span>
            </h1>
            
            <p className="text-xl text-gray-300 font-light max-w-lg mb-10 leading-relaxed">
              Step into the forest. Experience the ultimate AAA gaming tournament with premium PS5 setups and exclusive prizes.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#pricing" className="btn-glow px-8 py-5 rounded-full text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                <Gamepad2 className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                Join the Arcade
              </a>
              <a href="#games" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                Lineup <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Hero 3D Render */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-16 lg:mt-0 relative z-10 pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, x: 50 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
             className="relative z-10 w-full max-w-2xl group"
           >
             <div className="absolute inset-0 bg-[#39ff14]/20 blur-[120px] rounded-full z-0 animate-pulse"></div>
             
             {/* Floating and interactive Groot */}
             <motion.img 
               animate={{ 
                 y: [0, -20, 0],
                 rotateZ: [0, 2, -2, 0]
               }}
               transition={{ 
                 duration: 6,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               src="/baby_groot_ps4.png" 
               alt="Groot holding PS5 controller" 
               className="relative z-10 w-full h-auto object-contain rounded-3xl drop-shadow-[0_0_50px_rgba(57,255,20,0.5)] cursor-pointer hover:scale-110 hover:-translate-y-4 hover:rotate-3 transition-all duration-500"
             />
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
