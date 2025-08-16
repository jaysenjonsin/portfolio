'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Canvas component to avoid SSR issues
const ThreeCanvas = dynamic(() => import('./three-canvas'), {
  ssr: false,
  loading: () => null,
});

function hasWebGL(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const canvas = document.createElement('canvas');
    const context =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!context) return false;

    // Additional check to ensure WebGL is actually working
    const renderer = context.getParameter(context.RENDERER);
    return renderer !== null;
  } catch (e) {
    return false;
  }
}

export default function ThreeBackground() {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setWebGLSupported(hasWebGL());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until we're on client side and have checked WebGL
  if (!isClient || webGLSupported === null) {
    return null;
  }

  // If WebGL is not supported, return null (fallback to CSS background)
  if (!webGLSupported) {
    console.log('WebGL not supported, using fallback background');
    return null;
  }

  // Render the Three.js canvas
  return <ThreeCanvas />;
}
