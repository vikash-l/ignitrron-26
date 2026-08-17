import { Gamepad2, Share2, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent pt-20 pb-10 relative z-20 border-t border-[#39ff14]/10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#39ff14]/5 border border-[#39ff14]/20 flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <Gamepad2 className="h-8 w-8 text-[#39ff14]" />
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl text-white font-black font-display tracking-widest mb-10 drop-shadow-md">
          GROOT<span className="font-light text-[#39ff14]">.ARCADE</span>
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#39ff14] hover:border-[#39ff14] hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
            <Share2 className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#39ff14] hover:border-[#39ff14] hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#39ff14] hover:border-[#39ff14] hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
            <Globe className="w-4 h-4" />
          </a>
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
