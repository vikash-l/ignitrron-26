import React from 'react';
import { motion } from 'framer-motion';

export const WorkflowSection = () => {
  const steps = [
    {
      id: '01',
      title: 'PROMPT',
      desc: 'Raw intent & system instructions',
    },
    {
      id: '02',
      title: 'CONTEXT',
      desc: 'PDF, notes & syllabus injection',
    },
    {
      id: '03',
      title: 'AI PROCESSING',
      desc: 'LLM reasoning & execution',
    },
    {
      id: '04',
      title: 'STRUCTURE',
      desc: 'JSON & UI schema enforcement',
    },
    {
      id: '05',
      title: 'WORKING OUTPUT',
      desc: 'Live functional widget & prototype',
    },
  ];

  return (
    <section id="schedule" className="py-16 sm:py-20 relative border-t border-zinc-800/80 bg-[#0a0a0f] overflow-hidden">
      
      {/* Subtle Technical Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>WORKFLOW PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            FROM PROMPT → PROTOTYPE
          </h2>
        </div>

        {/* Horizontal Workflow Line */}
        <div className="relative py-2">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-4 h-0.5 bg-zinc-800 -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-full bg-purple-600 origin-left"
            />
          </div>

          {/* 5 Stage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-[#14141a] border border-zinc-800 rounded-xl p-4 text-center hover:border-purple-500/40 transition"
              >
                <div className="text-[10px] font-mono font-bold text-purple-400 mb-1">
                  STAGE {step.id}
                </div>
                <h4 className="text-xs font-bold font-mono text-zinc-100 mb-1">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-[11px] font-sans">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
