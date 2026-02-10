import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FlightCore } from './DroneParts/FlightCore';
import { SensorArray } from './DroneParts/SensorArray';
import { PropulsionUnit } from './DroneParts/PropulsionUnit';
import { PowerModule } from './DroneParts/PowerModule';
import { CommsModule } from './DroneParts/CommsModule';
import { Frame } from './DroneParts/Frame';

interface DroneProps {
  scrollProgress: number;
}

const SEPARATION_START = 0.25;
const SEPARATION_END = 0.45;
const INSPECTION_END = 0.75;
const REASSEMBLY_END = 1.0;

export const Drone = ({ scrollProgress }: DroneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  const separationProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - SEPARATION_START) / (SEPARATION_END - SEPARATION_START))
  );

  const reassemblyProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - INSPECTION_END) / (REASSEMBLY_END - INSPECTION_END))
  );

  const isSeparated = scrollProgress > SEPARATION_START && scrollProgress < INSPECTION_END;
  const separationFactor = isSeparated ? separationProgress : 1 - reassemblyProgress;

  useFrame((state) => {
    if (groupRef.current) {
      if (scrollProgress < 0.2) {
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      } else if (scrollProgress > 0.8) {
        groupRef.current.rotation.y = Math.PI * 2 * (scrollProgress - 0.8) / 0.2;
      }
    }
  });

  const getTargetPosition = (baseX: number, baseY: number, baseZ: number): THREE.Vector3 => {
    return new THREE.Vector3(
      baseX * separationFactor * 2.5,
      baseY * separationFactor * 2.5,
      baseZ * separationFactor * 2.5
    );
  };

  return (
    <group ref={groupRef}>
      <Frame
        separated={isSeparated}
        targetPosition={getTargetPosition(0, 0, -2)}
      />

      <FlightCore
        separated={isSeparated}
        targetPosition={getTargetPosition(0, 0, 0)}
      />

      <SensorArray
        separated={isSeparated}
        targetPosition={getTargetPosition(0, -1.5, 1.5)}
      />

      <PowerModule
        separated={isSeparated}
        targetPosition={getTargetPosition(0, -2, 0)}
      />

      <CommsModule
        separated={isSeparated}
        targetPosition={getTargetPosition(0, 2, 0)}
      />

      <PropulsionUnit
        position={[0.8, 0.3, 0.8]}
        separated={isSeparated}
        targetPosition={getTargetPosition(1.5, 0.5, 1.5)}
      />
      <PropulsionUnit
        position={[-0.8, 0.3, 0.8]}
        separated={isSeparated}
        targetPosition={getTargetPosition(-1.5, 0.5, 1.5)}
      />
      <PropulsionUnit
        position={[0.8, 0.3, -0.8]}
        separated={isSeparated}
        targetPosition={getTargetPosition(1.5, 0.5, -1.5)}
      />
      <PropulsionUnit
        position={[-0.8, 0.3, -0.8]}
        separated={isSeparated}
        targetPosition={getTargetPosition(-1.5, 0.5, -1.5)}
      />
    </group>
  );
};
