import { motion } from 'framer-motion';
import { eventData } from '../data/ps5Data';
import { Sparkles, QrCode } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 relative z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight font-display drop-shadow-md">
            ACCESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">PASSES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Member Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0f14]/80 backdrop-blur-xl rounded-3xl p-8 border border-[#39ff14]/50 shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden group hover:border-[#39ff14] transition-colors"
          >
            <div className="absolute top-0 right-0 p-6">
              <Sparkles className="w-8 h-8 text-[#39ff14] opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-wider">VIP / Member</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white font-display drop-shadow-md">{eventData.pricing.member}</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]"></div> Full Tournament Access
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]"></div> VIP Lounge & Refreshments
              </li>
              <li className="flex items-center gap-3 text-gray-300 font-light">
                <div className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_10px_#39ff14]"></div> Exclusive Groot Merchandise
              </li>
            </ul>
            <button className="w-full btn-glow py-4 rounded-xl font-bold tracking-widest uppercase text-sm">
              Acquire Pass
            </button>
          </motion.div>

          {/* Non-Member Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0a0f14]/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 shadow-inner relative overflow-hidden group hover:border-white/20 transition-colors"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-2 font-display uppercase tracking-wider">Guest Pass</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white font-display">{eventData.pricing.nonMember}</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></div> Full Tournament Access
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></div> Standard Seating
              </li>
            </ul>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-colors">
              Acquire Pass
            </button>
          </motion.div>

        </div>

        {/* QR Code Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#0a0f14]/60 backdrop-blur-md border border-[#39ff14]/20 rounded-3xl p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <div className="w-32 h-32 bg-white rounded-2xl p-4 flex-shrink-0 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <QrCode className="w-full h-full text-black" />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white font-display mb-2 uppercase tracking-wide">On-Site Scanner</h4>
            <p className="text-gray-400 font-light text-sm mb-4">
              Scan this terminal at the main entrance to bypass the registration queue and authenticate your pass immediately.
            </p>
            <span className="text-[#39ff14] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse shadow-[0_0_10px_#39ff14]"></span> System Online
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PricingSection;
