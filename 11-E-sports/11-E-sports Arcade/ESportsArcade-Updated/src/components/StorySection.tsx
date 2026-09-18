import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section id="story" className="py-32 relative z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#39ff14] uppercase tracking-widest mb-4 font-mono">The Lore</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white font-display leading-tight mb-8">
              Play with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">Groot</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Deep within the neon-lit forests of the Arcade, Groot awaits his next challenger. It's not just about winning; it's about dominating the digital jungle.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Enter the tournament. Whether you're a seasoned pro or a casual player, Groot's Arcade is the ultimate battleground to prove your worth.
            </p>
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="w-16 h-px bg-white/10"></div>
              <span className="text-[#39ff14] font-mono text-xs tracking-widest">SYSTEM_READY</span>
              <div className="w-16 h-px bg-white/10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
