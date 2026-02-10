import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SensorArrayProps {
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const SensorArray = ({ separated, targetPosition }: SensorArrayProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(0, -0.5, 0.5);
    groupRef.current.position.lerp(targetPos, 0.05);

    if (lensRef.current) {
      lensRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <boxGeometry args={[0.8, 0.3, 0.5]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      <mesh ref={lensRef} position={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
        <meshStandardMaterial
          color="#000000"
          metalness={1}
          roughness={0}
          emissive="#00d9ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh position={[-0.3, 0, 0.3]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#ff0000"
          emissive="#ff0000"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
};
