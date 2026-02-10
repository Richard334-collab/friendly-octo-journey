import { motion, AnimatePresence } from 'framer-motion';

interface HUDProps {
  scrollProgress: number;
}

export const HUD = ({ scrollProgress }: HUDProps) => {
  const showLabels = scrollProgress > 0.3 && scrollProgress < 0.75;
  const showDiagnostics = scrollProgress > 0.45 && scrollProgress < 0.75;

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="scanline fixed inset-0" />
      
      <div className="absolute top-8 left-8 font-mono text-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-electric-blue font-bold text-2xl mb-2">
            AEGIS SYSTEMS
          </div>
          <div className="text-gray-400">
            Autonomous Aerial Platform
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showDiagnostics && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-8 right-8 font-mono text-xs bg-graphite/80 p-4 border border-electric-blue/30"
          >
            <div className="text-electric-blue mb-3 font-bold">SYSTEM STATUS</div>
            
            <StatusLine label="FLIGHT CONTROL" status="STABLE" active />
            <StatusLine label="THERMAL SENSORS" status="ACTIVE" active />
            <StatusLine label="LIDAR ARRAY" status="ONLINE" active />
            <StatusLine label="NETWORK LINK" status="SECURE" active />
            
            <div className="mt-4 pt-3 border-t border-gray-700">
              <div className="text-gray-500 text-[10px]">UPTIME: 2847:42:18</div>
              <div className="text-gray-500 text-[10px]">TEMP: 42°C</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLabels && (
          <>
            <ComponentLabel
              position={{ top: '20%', left: '25%' }}
              label="FLIGHT_CORE"
              sublabel="AI Processing Unit"
            />
            <ComponentLabel
              position={{ top: '60%', left: '30%' }}
              label="SENSOR_ARRAY"
              sublabel="Multi-spectrum Imaging"
            />
            <ComponentLabel
              position={{ top: '15%', right: '25%' }}
              label="PROPULSION_01"
              sublabel="Brushless Motor System"
            />
            <ComponentLabel
              position={{ top: '70%', left: '50%' }}
              label="POWER_MODULE"
              sublabel="LiPo 6S 10000mAh"
            />
            <ComponentLabel
              position={{ top: '10%', left: '50%' }}
              label="COMMS_MODULE"
              sublabel="5.8GHz Telemetry"
            />
          </>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-8 font-mono text-xs text-gray-600">
        <div>LAT: 37.7749° N</div>
        <div>LON: 122.4194° W</div>
        <div>ALT: 125m MSL</div>
      </div>
    </div>
  );
};

interface StatusLineProps {
  label: string;
  status: string;
  active: boolean;
}

const StatusLine = ({ label, status, active }: StatusLineProps) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-gray-400">{label}</span>
    <span className={active ? 'text-green-400' : 'text-red-400'}>{status}</span>
  </div>
);

interface ComponentLabelProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  label: string;
  sublabel: string;
}

const ComponentLabel = ({ position, label, sublabel }: ComponentLabelProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    style={position}
    className="absolute font-mono"
  >
    <div className="relative">
      <div className="bg-graphite/90 border border-electric-blue/50 p-2 text-xs">
        <div className="text-electric-blue font-bold">{label}</div>
        <div className="text-gray-400 text-[10px]">{sublabel}</div>
      </div>
      <div className="absolute top-1/2 -left-8 w-8 h-[1px] bg-electric-blue/50" />
      <div className="absolute top-1/2 -left-8 w-2 h-2 border border-electric-blue/50 rounded-full bg-electric-blue/20" />
    </div>
  </motion.div>
);
