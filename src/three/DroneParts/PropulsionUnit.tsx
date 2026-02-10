import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PropulsionUnitProps {
  position: [number, number, number];
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const PropulsionUnit = ({ position, separated, targetPosition }: PropulsionUnitProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const rotorRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(...position);
    groupRef.current.position.lerp(targetPos, 0.05);

    if (rotorRef.current) {
      rotorRef.current.rotation.y += 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.15, 0.4, 8]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh ref={rotorRef} position={[0, 0.25, 0]}>
        <boxGeometry args={[1.2, 0.02, 0.15]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 8]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};
