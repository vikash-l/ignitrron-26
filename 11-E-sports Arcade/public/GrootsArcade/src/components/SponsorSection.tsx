import { motion } from 'framer-motion';

const SponsorSection = () => {
  return (
    <section className="py-16 bg-transparent border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 font-mono text-xs tracking-widest uppercase mb-8">
          System Backed By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
          {['Stark Industries', 'Nova Corps', 'Knowhere Tech', 'Sovereign Energy'].map((sponsor, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-black text-white font-display hover:text-[#39ff14] transition-colors cursor-pointer drop-shadow-md hover:drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]"
            >
              {sponsor}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
