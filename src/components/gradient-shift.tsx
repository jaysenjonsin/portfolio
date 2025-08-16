'use client';

import { useEffect, useState } from 'react';

export function GradientShift() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 0.5) % 360); // slower increment and full 360 degree cycle
    }, 50); // faster update interval for smoother animation

    return () => clearInterval(interval);
  }, []);

  const getGradientColors = (progress: number) => {
    const phase = (progress / 360) * Math.PI * 2;

    const colors = [
      ['#ffffff', '#f8fafc'], // white to light grey
      ['#f8fafc', '#f1f5f9'], // light grey to slate-100
      ['#f1f5f9', '#e2e8f0'], // slate-100 to slate-200
      ['#e2e8f0', '#dbeafe'], // slate-200 to blue-100
      ['#dbeafe', '#bfdbfe'], // blue-100 to blue-200
      ['#bfdbfe', '#93c5fd'], // blue-200 to blue-300
      ['#93c5fd', '#cbd5e1'], // blue-300 to slate-300
      ['#cbd5e1', '#94a3b8'], // slate-300 to slate-400
      ['#94a3b8', '#64748b'], // slate-400 to slate-500
      ['#64748b', '#475569'], // slate-500 to slate-600
      ['#475569', '#374151'], // slate-600 to gray-700
      ['#374151', '#334155'], // gray-700 to slate-700
      ['#334155', '#1e293b'], // slate-700 to slate-800
      ['#1e293b', '#111827'], // slate-800 to gray-900
      ['#111827', '#0f172a'], // gray-900 to slate-900
      ['#0f172a', '#000000'], // slate-900 to black
      ['#000000', '#111827'], // black to gray-900
      ['#111827', '#1e293b'], // gray-900 to slate-800
      ['#1e293b', '#334155'], // slate-800 to slate-700
      ['#334155', '#475569'], // slate-700 to slate-600
      ['#475569', '#64748b'], // slate-600 to slate-500
      ['#64748b', '#94a3b8'], // slate-500 to slate-400
      ['#94a3b8', '#cbd5e1'], // slate-400 to slate-300
      ['#cbd5e1', '#93c5fd'], // slate-300 to blue-300
      ['#93c5fd', '#bfdbfe'], // blue-300 to blue-200
      ['#bfdbfe', '#dbeafe'], // blue-200 to blue-100
      ['#dbeafe', '#e2e8f0'], // blue-100 to slate-200
      ['#e2e8f0', '#f1f5f9'], // slate-200 to slate-100
      ['#f1f5f9', '#f8fafc'], // slate-100 to light grey
    ];

    const exactIndex = (Math.sin(phase) + 1) * 0.5 * (colors.length - 1);
    const colorIndex = Math.floor(exactIndex);
    const nextIndex = (colorIndex + 1) % colors.length;
    const blend = exactIndex - colorIndex;

    const currentColors = colors[colorIndex];
    const nextColors = colors[nextIndex];

    const blendColor = (color1: string, color2: string, ratio: number) => {
      const hex1 = color1.replace('#', '');
      const hex2 = color2.replace('#', '');
      const r1 = Number.parseInt(hex1.substr(0, 2), 16);
      const g1 = Number.parseInt(hex1.substr(2, 2), 16);
      const b1 = Number.parseInt(hex1.substr(4, 2), 16);
      const r2 = Number.parseInt(hex2.substr(0, 2), 16);
      const g2 = Number.parseInt(hex2.substr(2, 2), 16);
      const b2 = Number.parseInt(hex2.substr(4, 2), 16);

      const r = Math.round(r1 + (r2 - r1) * ratio);
      const g = Math.round(g1 + (g2 - g1) * ratio);
      const b = Math.round(b1 + (b2 - b1) * ratio);

      return `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const color1 = blendColor(currentColors[0], nextColors[0], blend);
    const color2 = blendColor(currentColors[1], nextColors[1], blend);

    return [color1, color2];
  };

  const [color1, color2] = getGradientColors(progress);

  return (
    <div
      className='w-8 h-8 rounded-full border border-border transition-all duration-100 ease-linear' // added smooth CSS transitions
      style={{
        background: `linear-gradient(45deg, ${color1}, ${color2})`,
      }}
    />
  );
}
