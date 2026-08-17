import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { eventData } from '../data/ps5Data';

const RulesSection = () => {
  return (
    <section id="rules" className="py-32 relative z-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39ff14]/10 mb-6 border border-[#39ff14]/30 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <ShieldCheck className="w-8 h-8 text-[#39ff14]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase drop-shadow-md">
            Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">Protocols</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0f14]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#39ff14]/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          <ul className="space-y-6">
            {eventData.rules.map((rule, index) => (
              <li key={index} className="flex gap-4 items-start group">
                <span className="font-mono text-[#39ff14] font-bold text-xl mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-white font-bold text-xl font-display uppercase tracking-wide mb-1">{rule.title}</h4>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">{rule.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        
      </div>
    </section>
  );
};

export default RulesSection;
