'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FrostedGlass from './frosted-glass';
import Sphere from './sphere';
import Ambience from './ambience';

export default function ThreeCanvas() {
  return (
    <div className='fixed inset-0 -z-10'>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 100], zoom: 100 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'default', // Better compatibility
        }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          console.log('Three.js Canvas created successfully');
          gl.setClearColor(0x000000, 0); // Transparent background
        }}
        onError={(error) => {
          console.error('Three.js Canvas error:', error);
        }}
      >
        <Suspense fallback={null}>
          <FrostedGlass>
            <Sphere />
            <Ambience />
          </FrostedGlass>
        </Suspense>
      </Canvas>
    </div>
  );
}
