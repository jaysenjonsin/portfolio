'use client';

import { OrthographicCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function Sphere() {
  const [isDark, setIsDark] = useState(true); // Default to dark

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Use dark color in dark mode, light color in light mode
  const sphereColor = isDark ? '#111' : '#f0f0f0';

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={isDark ? [0, 0, 100] : [0, 0, 5]} // Much closer camera position in light mode
        zoom={isDark ? 140 : 140} // Keep same zoom but move camera closer
      />
      <mesh position={isDark ? [2, 0, 0] : [0, 0, 0]}>
        {' '}
        {/* Center the sphere in light mode */}
        <sphereGeometry args={isDark ? [4.25, 64, 64] : [10, 32, 32]} />{' '}
        {/* Much larger sphere in light mode */}
        <meshStandardMaterial
          color={sphereColor}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </>
  );
}
