import { motion } from 'framer-motion';

export const Mission = () => {
  return (
    <section className="min-h-screen bg-deep-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-8 relative z-10"
      >
        <div className="text-electric-blue font-mono text-sm mb-4">
          // MISSION_OBJECTIVE
        </div>
        
        <h2 className="text-5xl font-bold mb-6 text-white">
          Engineering autonomous aerial systems for critical infrastructure monitoring and security operations
        </h2>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          We design and manufacture autonomous drone platforms engineered for reliability, 
          precision, and extended operational capability in demanding environments.
        </p>
        
        <p className="text-gray-400 text-lg leading-relaxed">
          Our systems integrate advanced sensor fusion, real-time processing, and secure 
          communication protocols to deliver actionable intelligence for industrial inspection, 
          perimeter security, and emergency response scenarios.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-8">
          <Metric value="50+" label="Flight Hours" />
          <Metric value="99.2%" label="System Uptime" />
          <Metric value="15km" label="Operational Range" />
        </div>
      </motion.div>
    </section>
  );
};

interface MetricProps {
  value: string;
  label: string;
}

const Metric = ({ value, label }: MetricProps) => (
  <div className="border-l-2 border-electric-blue pl-4">
    <div className="text-3xl font-bold text-electric-blue">{value}</div>
    <div className="text-sm text-gray-500 font-mono">{label}</div>
  </div>
);
