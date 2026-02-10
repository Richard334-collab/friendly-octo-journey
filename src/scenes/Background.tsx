import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Background = () => {
  return (
    <>
      <ProceduralGrid />
      <ParticleField />
      <fog attach="fog" args={['#0a0a0a', 10, 50]} />
      <ambientLight intensity={0.1} />
    </>
  );
};

const ProceduralGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[100, 50, '#00d9ff', '#1a1a1a']}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3] = (Math.random() - 0.5) * 50;
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      // eslint-disable-next-line react-hooks/purity
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // eslint-disable-next-line react-hooks/purity
      const color = Math.random() > 0.5 ? new THREE.Color('#00d9ff') : new THREE.Color('#ffaa00');
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
