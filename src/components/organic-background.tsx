'use client';

import { useEffect, useRef } from 'react';

export function OrganicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    const drawOrganicShape = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      // Create organic flowing shape
      ctx.beginPath();

      const centerX = width * 0.7;
      const centerY = height * 0.3;
      const baseRadius = Math.min(width, height) * 0.4;

      // Create smooth organic curves using multiple sine waves
      for (let angle = 0; angle <= Math.PI * 2; angle += 0.1) {
        const noise1 = Math.sin(angle * 3 + time * 0.002) * 0.3;
        const noise2 = Math.cos(angle * 2 + time * 0.001) * 0.2;
        const noise3 = Math.sin(angle * 5 + time * 0.003) * 0.1;

        const radius = baseRadius * (1 + noise1 + noise2 + noise3);
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (angle === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();

      // Apply subtle gradient fill
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        baseRadius
      );

      // Check if dark mode
      const isDark = document.documentElement.classList.contains('dark');

      if (isDark) {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.06)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.01)');
      }

      ctx.fillStyle = gradient;
      ctx.fill();

      // Add subtle grain texture
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * (isDark ? 8 : 4);
        data[i] += noise; // Red
        data[i + 1] += noise; // Green
        data[i + 2] += noise; // Blue
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 16;
      drawOrganicShape();
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 pointer-events-none'
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
