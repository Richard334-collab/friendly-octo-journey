import { useScrollProgress } from '../hooks/useScrollProgress';
import { HeroScene } from '../scenes/HeroScene';
import { HUD } from '../ui/HUD';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollProgress = useScrollProgress('hero-container');

  return (
    <div id="hero-container" className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroScene scrollProgress={scrollProgress} />
        <HUD scrollProgress={scrollProgress} />

        {scrollProgress < 0.15 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
          >
            <div className="text-gray-500 font-mono text-xs mb-2">SCROLL TO EXPLORE</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-electric-blue"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
