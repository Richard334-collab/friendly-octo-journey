import { motion } from 'framer-motion';

export const Capabilities = () => {
  return (
    <section className="min-h-screen bg-graphite py-24 relative">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-signal-amber font-mono text-sm mb-4">
            // CORE_CAPABILITIES
          </div>
          <h2 className="text-4xl font-bold text-white">
            Engineered for operational certainty
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CapabilityCard
            title="Autonomous Navigation"
            description="Real-time SLAM with visual-inertial odometry for GPS-denied environments. Obstacle avoidance through stereo depth mapping and LiDAR point cloud fusion."
            tags={['SLAM', 'VIO', 'LiDAR']}
          />
          
          <CapabilityCard
            title="Thermal Imaging"
            description="LWIR sensor integration for heat signature detection, electrical fault identification, and night operations. 14-bit radiometric data capture."
            tags={['LWIR', 'Radiometric', '640×512']}
          />
          
          <CapabilityCard
            title="Secure Telemetry"
            description="AES-256 encrypted command & control link. Frequency-hopping spread spectrum with automatic failsafe protocols. 15km line-of-sight range."
            tags={['AES-256', 'FHSS', '15km']}
          />
          
          <CapabilityCard
            title="Edge Processing"
            description="Onboard AI inference for object detection, classification, and tracking. NVIDIA Jetson platform running optimized YOLO models at 30fps."
            tags={['Jetson', 'YOLO', '30fps']}
          />
        </div>
      </div>
    </section>
  );
};

interface CapabilityCardProps {
  title: string;
  description: string;
  tags: string[];
}

const CapabilityCard = ({ title, description, tags }: CapabilityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-deep-black border border-gray-800 p-6 hover:border-electric-blue/50 transition-colors"
  >
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono bg-graphite text-electric-blue px-2 py-1 border border-electric-blue/30"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);
