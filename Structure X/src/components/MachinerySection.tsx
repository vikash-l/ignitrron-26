import React from 'react';
import { Wrench } from 'lucide-react';
import { MACHINERY_ITEMS } from '../data/eventData';

export const MachinerySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080d] relative border-t border-[#1b2538]">
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07111b] border border-[#00d9ff]/30 text-[#00d9ff] text-xs font-mono mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>CONSTRUCTION LOGISTICS & MACHINERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight uppercase">
            THE MACHINES BEHIND THE <span className="text-[#00d9ff]">LANDMARK</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 italic font-sans">
            "Tower cranes, high-pressure concrete pumps, and heavy rigging systems make supertall erection possible."
          </p>
        </div>

        {/* 6 Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-3 gap-6">
          {MACHINERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#07111b] rounded-xl p-6 border border-[#1b2538] hover:border-[#00d9ff]/50 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#00d9ff] font-bold">
                  {item.category}
                </span>
                <Wrench className="w-4 h-4 text-gray-500 group-hover:text-[#00d9ff] transition-colors" />
              </div>

              <h3 className="text-base font-mono font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {item.role}
              </p>

              <div className="pt-3 border-t border-[#1b2538] text-[10px] font-mono text-gray-400">
                <span className="text-gray-500 block">EQUIPMENT TYPE:</span>
                <span className="text-gray-200">{item.modernEquivalent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
