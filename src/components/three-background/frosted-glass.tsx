'use client';

import { useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, RenderTexture } from '@react-three/drei';
import { useEffect, useState } from 'react';

interface FrostedGlassProps {
  children: React.ReactNode;
}

export default function FrostedGlass({ children }: FrostedGlassProps) {
  const { viewport } = useThree();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Adjust properties based on theme
  const glassProps = {
    samples: 16,
    thickness: 0.1,
    chromaticAberration: 0,
    anisotropy: 1,
    roughness: isDark ? 1 : 0.8, // Less roughness in light mode for more clarity
    transparent: true,
    opacity: isDark ? 0.9 : 0.7, // More transparent in light mode
  };

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <MeshTransmissionMaterial {...glassProps}>
        <RenderTexture width={256} height={256} attach='buffer'>
          {children}
        </RenderTexture>
      </MeshTransmissionMaterial>
    </mesh>
  );
}
