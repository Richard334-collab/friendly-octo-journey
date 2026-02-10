import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section className="min-h-screen bg-graphite flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-8 text-center"
      >
        <div className="text-signal-amber font-mono text-sm mb-4">
          // CONTACT
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Partner with us
        </h2>
        
        <p className="text-gray-400 text-lg mb-12">
          We work with organizations that require proven autonomous systems 
          for mission-critical operations.
        </p>

        <div className="space-y-4 font-mono text-sm">
          <div className="border border-gray-700 bg-deep-black p-4">
            <span className="text-gray-500">EMAIL: </span>
            <span className="text-electric-blue">contact@aegis-systems.com</span>
          </div>
          
          <div className="border border-gray-700 bg-deep-black p-4">
            <span className="text-gray-500">TECHNICAL INQUIRIES: </span>
            <span className="text-electric-blue">engineering@aegis-systems.com</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-600 text-xs font-mono">
            AEGIS AUTONOMOUS SYSTEMS © 2026
            <br />
            PRECISION ENGINEERED | FIELD PROVEN
          </p>
        </div>
      </motion.div>
    </section>
  );
};
