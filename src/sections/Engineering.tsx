import { motion } from 'framer-motion';

export const Engineering = () => {
  return (
    <section className="min-h-screen bg-deep-black py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-electric-blue font-mono text-sm mb-4">
            // ENGINEERING_APPROACH
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Systems engineering methodology
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Every platform is designed from first principles, validated through simulation, 
            and refined through field operations.
          </p>
        </motion.div>

        <div className="space-y-4">
          <ProcessStep
            number="01"
            title="Requirements Analysis"
            description="Mission profile definition, environmental constraints, payload specifications, and operational parameters."
          />
          <ProcessStep
            number="02"
            title="Architecture Design"
            description="Subsystem decomposition, interface definition, power budget analysis, and thermal modeling."
          />
          <ProcessStep
            number="03"
            title="Prototype Development"
            description="Rapid iteration cycles with hardware-in-the-loop testing and failure mode analysis."
          />
          <ProcessStep
            number="04"
            title="Field Validation"
            description="Real-world operational testing under varying conditions with continuous performance monitoring."
          />
          <ProcessStep
            number="05"
            title="Production & Support"
            description="Controlled manufacturing, quality assurance protocols, and ongoing technical support."
          />
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex gap-6 border-l-2 border-gray-800 pl-6 py-4 hover:border-electric-blue/50 transition-colors"
  >
    <div className="text-signal-amber font-mono font-bold text-2xl min-w-[60px]">
      {number}
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);
