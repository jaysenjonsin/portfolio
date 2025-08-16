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

  // Enhanced grain and contrast for both modes
  const glassProps = {
    samples: isDark ? 1 : 3,
    thickness: 0.15,
    chromaticAberration: isDark ? 0.02 : 0.02, // More chromatic aberration in dark mode for grain
    anisotropy: isDark ? 2 : 2,
    roughness: isDark ? 0.9 : 0.8, // Higher roughness in dark mode for more grain texture
    transparent: true,
    opacity: isDark ? 0.95 : 0.5, // Less transparent in dark mode for stronger contrast
    distortion: 0.9,
    distortionScale: isDark ? 0.5 : 0.3, // Stronger scaling in dark mode for pronounced grain
    temporalDistortion: isDark ? 0.08 : 0.05, // More temporal distortion in dark mode
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
