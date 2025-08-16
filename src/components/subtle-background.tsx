'use client';

import { useEffect, useState } from 'react';

export default function SubtleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      <div className='absolute inset-0 opacity-[0.15] dark:opacity-[0.25]'>
        {Array.from({ length: 12 }).map((_, i) => {
          // Generate consistent random values for each element
          const width = 300 + ((i * 37) % 200);
          const height = 300 + ((i * 41) % 200);
          const left = (i * 17) % 100;
          const top = (i * 23) % 100;
          const delay = (i * 1.7) % 10;
          const duration = 10 + ((i * 1.3) % 15);

          return (
            <div
              key={i}
              className='absolute rounded-full blur-2xl animate-pulse'
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, ${
                  i % 4 === 0
                    ? 'rgba(var(--foreground), 0.08)'
                    : i % 4 === 1
                    ? 'rgba(var(--foreground), 0.06)'
                    : i % 4 === 2
                    ? 'rgba(var(--foreground), 0.04)'
                    : 'rgba(var(--foreground), 0.05)'
                }, transparent 70%)`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div className='absolute inset-0 opacity-[0.12] dark:opacity-[0.2]'>
        <div
          className='absolute w-[500px] h-[500px] rounded-full blur-xl animate-float-slow'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--foreground), 0.1), transparent 60%)',
            left: '5%',
            top: '15%',
          }}
        />
        <div
          className='absolute w-[400px] h-[400px] rounded-full blur-xl animate-float-slower'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--foreground), 0.08), transparent 60%)',
            right: '10%',
            top: '35%',
          }}
        />
        <div
          className='absolute w-[350px] h-[350px] rounded-full blur-xl animate-float-slowest'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--foreground), 0.06), transparent 60%)',
            left: '55%',
            bottom: '25%',
          }}
        />
        <div
          className='absolute w-[300px] h-[300px] rounded-full blur-xl animate-float-slow'
          style={{
            background:
              'radial-gradient(circle, rgba(var(--foreground), 0.07), transparent 60%)',
            right: '30%',
            bottom: '15%',
            animationDelay: '5s',
          }}
        />
      </div>

      {/* Base grain texture */}
      <div
        className='absolute inset-0 opacity-[0.10] dark:opacity-[0.04] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 .2 .3 .4 .5'/%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='currentColor'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      {/* Wave grain effect - horizontal */}
      <div
        className='absolute inset-0 opacity-[0.18] dark:opacity-[0.08] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='waveGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='2' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23waveGrain)' fill='currentColor'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          maskImage:
            'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
          animation: 'grain-wave 12s ease-in-out infinite',
        }}
      />

      {/* Wave grain effect - diagonal */}
      <div
        className='absolute inset-0 opacity-[0.14] dark:opacity-[0.06] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='waveGrain2'%3E%3CfeTurbulence type='turbulence' baseFrequency='1.5' numOctaves='1' seed='8' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23waveGrain2)' fill='currentColor'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          maskImage:
            'linear-gradient(135deg, transparent 0%, black 25%, black 75%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(135deg, transparent 0%, black 25%, black 75%, transparent 100%)',
          animation: 'grain-wave-diagonal 16s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}
