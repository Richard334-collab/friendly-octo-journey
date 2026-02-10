import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PowerModuleProps {
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const PowerModule = ({ separated, targetPosition }: PowerModuleProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const indicatorRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(0, -0.8, 0);
    groupRef.current.position.lerp(targetPos, 0.05);

    if (indicatorRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 3) * 0.5 + 0.5;
      const mat = indicatorRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + pulse * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.4, 0.9]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.85, 0.05, 0.85]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
          emissive="#00d9ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh ref={indicatorRef} position={[0.35, 0.1, 0.35]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
};
