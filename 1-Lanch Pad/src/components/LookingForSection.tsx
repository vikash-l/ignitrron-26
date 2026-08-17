import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Eye, BookOpen, Rocket, CheckSquare } from 'lucide-react';
import { soundFx } from '../utils/soundFx';

interface Criterion {
  title: string;
  subtext: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const LookingForSection: React.FC = () => {
  const criteria: Criterion[] = [
    {
      title: 'CREATIVITY',
      subtext: 'Unconventional Thinking',
      icon: <Lightbulb className="w-8 h-8 text-[#ff003c]" />,
      color: '#ff003c',
      description: 'Original concepts that break away from mundane tropes and present a fresh perspective on the domain.'
    },
    {
      title: 'STRATEGY',
      subtext: 'Market Alignment',
      icon: <Target className="w-8 h-8 text-[#00f0ff]" />,
      color: '#00f0ff',
      description: 'Clear positioning, defined target audience, and realistic go-to-market mechanics for your brand.'
    },
    {
      title: 'VISUAL IMPACT',
      subtext: 'Aesthetic Mastery',
      icon: <Eye className="w-8 h-8 text-[#ff00aa]" />,
      color: '#ff00aa',
      description: 'Striking color palettes, typography hierarchy, logo mark coherence, and high-definition key visuals.'
    },
    {
      title: 'BRAND STORYTELLING',
      subtext: 'Origin Narrative',
      icon: <BookOpen className="w-8 h-8 text-[#bf00ff]" />,
      color: '#bf00ff',
      description: 'An emotional, engaging origin story that connects customers to the core mission of the brand.'
    },
    {
      title: 'INNOVATION',
      subtext: 'Problem Solving',
      icon: <Rocket className="w-8 h-8 text-[#00ff88]" />,
      color: '#00ff88',
      description: 'Clever integration of the Mystery Box twist into the brand identity seamlessly.'
    },
    {
      title: 'EXECUTION',
      subtext: 'Professional Finish',
      icon: <CheckSquare className="w-8 h-8 text-[#ffff00]" />,
      color: '#ffff00',
      description: 'High quality presentation polish, complete brand collateral, and clear pitch delivery.'
    }
  ];

  return (
    <section className="relative py-28 px-4 bg-[#0a0a0c] overflow-hidden border-t border-white/10">
      {/* Spider-Verse Halftone Texture Overlay */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-space text-xs tracking-widest text-[#00f0ff] uppercase font-bold">
            EVALUATION CRITERIA
          </span>
          <h2 className="font-anton text-5xl sm:text-7xl text-white tracking-wider uppercase mt-2">
            WHAT WE'RE LOOKING FOR
          </h2>
          <p className="font-space text-base text-gray-400 mt-3">
            Six pillars that set champion brand identities apart from standard designs.
          </p>
        </div>

        {/* 6 Visual Keywords Comic Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onMouseEnter={() => soundFx.playClick()}
              className="group relative p-8 bg-[#121216] border-2 border-white/15 hover:border-[#ff003c] rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-spider-red overflow-hidden"
            >
              {/* Comic Number Watermark */}
              <div className="absolute -top-4 -right-4 font-anton text-7xl text-white/5 group-hover:text-[#ff003c]/10 transition-colors pointer-events-none">
                0{index + 1}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-black border border-white/20 rounded group-hover:border-[#00f0ff] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-anton text-2xl text-white tracking-wide uppercase group-hover:text-[#00f0ff] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-bebas text-sm text-[#ff003c] tracking-wider uppercase">
                    {item.subtext}
                  </span>
                </div>
              </div>

              <p className="font-inter text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
