import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FrameProps {
  separated: boolean;
  targetPosition: THREE.Vector3;
}

export const Frame = ({ separated, targetPosition }: FrameProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;

    const targetPos = separated ? targetPosition : new THREE.Vector3(0, 0, 0);
    groupRef.current.position.lerp(targetPos, 0.05);
  });

  const armPositions: [number, number, number][] = [
    [0.8, 0, 0.8],
    [-0.8, 0, 0.8],
    [0.8, 0, -0.8],
    [-0.8, 0, -0.8],
  ];

  return (
    <group ref={groupRef}>
      {armPositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, Math.atan2(pos[2], pos[0]), 0]}>
          <boxGeometry args={[0.6, 0.05, 0.08]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
      ))}

      <mesh>
        <torusGeometry args={[1, 0.03, 8, 32]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.9}
          roughness={0.2}
          emissive="#00d9ff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};
