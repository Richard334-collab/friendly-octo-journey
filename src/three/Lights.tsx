import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Lights = () => {
  const rimLightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (rimLightRef.current) {
      const time = state.clock.elapsedTime;
      rimLightRef.current.intensity = 2 + Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} color="#ffffff" />
      
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
      />
      
      <directionalLight
        ref={rimLightRef}
        position={[-5, 3, -5]}
        intensity={2}
        color="#00d9ff"
      />
      
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffaa00"
      />
      
      <hemisphereLight
        args={['#00d9ff', '#1a1a1a', 0.5]}
      />
    </>
  );
};
