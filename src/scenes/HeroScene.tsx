import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import { Drone } from '../three/Drone';
import { Background } from './Background';
import { Lights } from '../three/Lights';

interface HeroSceneProps {
  scrollProgress: number;
}

export const HeroScene = ({ scrollProgress }: HeroSceneProps) => {
  return (
    <div className="fixed inset-0 w-full h-screen">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Background />
          <Lights />
          
          <Drone scrollProgress={scrollProgress} />
          
          <ContactShadows
            position={[0, -5, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={10}
          />
          
          <Environment preset="city" />
          
          {scrollProgress < 0.1 && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};
