import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FlightCoreProps {
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const FlightCore = ({ separated, targetPosition }: FlightCoreProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const emissiveRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(0, 0, 0);
    groupRef.current.position.lerp(targetPos, 0.05);

    if (emissiveRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 0.5;
      emissiveRef.current.emissiveIntensity = 0.5 + pulse * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <boxGeometry args={[1, 0.6, 1]} />
        <meshStandardMaterial
          ref={emissiveRef}
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
          emissive="#00d9ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 16]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.1}
          emissive="#ffaa00"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};
