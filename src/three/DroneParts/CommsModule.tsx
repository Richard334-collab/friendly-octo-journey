import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CommsModuleProps {
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const CommsModule = ({ separated, targetPosition }: CommsModuleProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const antennaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(0, 0.8, 0);
    groupRef.current.position.lerp(targetPos, 0.05);

    if (antennaRef.current) {
      antennaRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.3, 8]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={antennaRef} position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};
