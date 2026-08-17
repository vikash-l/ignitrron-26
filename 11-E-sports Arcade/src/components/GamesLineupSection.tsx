import { motion } from 'framer-motion';

const GamesLineupSection = () => {
  const games = [
    { title: 'EA FC 24', genre: 'Sports', image: '/Buy EA SPORTS FC 24 (Global) (PC) - EA Play - Digital Key.jpg' },
    { title: 'Tekken 8', genre: 'Fighting', image: '/Tekken8.jpg' },
    { title: 'Mortal Kombat 1', genre: 'Fighting', image: '/Mortal kombat 1.jpg' },
    { title: 'Spider-Man 2', genre: 'Action', image: '/Spider-Man 2 Player Recreates Tobey Maguire Movie___.jpg' },
  ];

  return (
    <section id="games" className="py-32 relative z-20 bg-transparent overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#39ff14]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight font-display drop-shadow-md">
            GAMES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">LINEUP</span>
          </h2>
          <p className="mt-4 text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Experience next-gen graphics and buttery-smooth gameplay on our premium PS5 setups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0f14] rounded-3xl overflow-hidden shadow-2xl border border-white/5 glass-card-tilt group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] to-transparent z-10"></div>
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-700 mix-blend-overlay group-hover:mix-blend-normal"
                />
              </div>
              <div className="p-6 relative z-20 -mt-6 bg-transparent rounded-t-3xl border-t border-white/5">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[#39ff14] text-xs font-mono tracking-widest uppercase mb-2 border border-[#39ff14]/20">
                  {game.genre}
                </span>
                <h3 className="text-2xl font-black text-white font-display group-hover:text-[#39ff14] transition-colors">
                  {game.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesLineupSection;
