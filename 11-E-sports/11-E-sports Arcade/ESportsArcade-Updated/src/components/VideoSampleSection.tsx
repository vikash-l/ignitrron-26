import { motion } from 'framer-motion';

const VideoSampleSection = () => {
  return (
    <section className="relative py-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-widest font-display drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
            Spiderman <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">Sample Video</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A sample video integration for your web creation journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#39ff14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)] bg-black/50 p-2 backdrop-blur-sm"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center">
            <video 
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              src="/spiderman.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSampleSection;
