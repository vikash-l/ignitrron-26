import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    { name: "Rocket R.", role: "Pro Gamer", text: "The controllers actually work this time! Best tournament ever." },
    { name: "Peter Q.", role: "Casual", text: "I didn't win, but the vibes were immaculate. And the music was great!" },
    { name: "Drax", role: "Fighting Game Champ", text: "I stood so perfectly still, my opponents could not see my moves." }
  ];

  return (
    <section className="py-24 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white font-display tracking-tight mb-16 uppercase drop-shadow-md">
          Hall of <span className="text-[#39ff14]">Fame</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0f14]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative group hover:-translate-y-2 hover:border-[#39ff14]/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6 group-hover:text-[#39ff14]/20 transition-colors" />
              <p className="text-gray-300 font-light mb-6 relative z-10 italic">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold font-display text-lg uppercase tracking-wider">{t.name}</h4>
                <p className="text-[#39ff14] text-xs font-mono tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
