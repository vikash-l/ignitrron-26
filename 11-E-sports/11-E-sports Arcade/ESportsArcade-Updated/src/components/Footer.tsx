import { Gamepad2, GraduationCap, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent pt-20 pb-10 relative z-20 border-t border-[#39ff14]/10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#39ff14]/5 border border-[#39ff14]/20 flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <Gamepad2 className="h-8 w-8 text-[#39ff14]" />
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl text-white font-black font-display tracking-widest mb-6 drop-shadow-md">
          GROOT<span className="font-light text-[#39ff14]">.ARCADE</span>
        </p>

        {/* Coordinators Quick Reference */}
        <div className="mb-10 p-6 rounded-2xl bg-black/40 border border-[#39ff14]/20 backdrop-blur-md max-w-2xl mx-auto">
          <h4 className="text-[#39ff14] text-xs font-mono font-bold uppercase tracking-widest mb-4">Event Contact Information</h4>
          
          <div className="flex flex-col sm:flex-row justify-around items-center gap-4 text-xs font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#39ff14]" />
              <span>Faculty Coordinator: <strong className="text-white">Mr. Munirathnam</strong></span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <a href="tel:9952747859" className="flex items-center justify-center gap-1.5 text-gray-300 hover:text-[#39ff14] transition-colors">
              <User className="w-3.5 h-3.5 text-[#39ff14]" />
              <span>T. Naveen S: <strong>9952747859</strong></span>
            </a>
            <a href="tel:7010564643" className="flex items-center justify-center gap-1.5 text-gray-300 hover:text-[#39ff14] transition-colors">
              <User className="w-3.5 h-3.5 text-[#39ff14]" />
              <span>Rajeswaran D: <strong>7010564643</strong></span>
            </a>
            <a href="tel:9363266674" className="flex items-center justify-center gap-1.5 text-gray-300 hover:text-[#39ff14] transition-colors">
              <User className="w-3.5 h-3.5 text-[#39ff14]" />
              <span>Gokul S: <strong>9363266674</strong></span>
            </a>
          </div>
        </div>

        <div className="text-gray-500 font-mono text-xs flex flex-col items-center gap-2 tracking-widest">
          <p>© 2026 GROOT'S ARCADE. ALL RIGHTS RESERVED.</p>
          <p className="opacity-40 text-[10px]">SYSTEM SECURED BY STARK INDUSTRIES • FAN EVENT</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
