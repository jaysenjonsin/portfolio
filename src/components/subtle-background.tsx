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
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full blur-2xl animate-pulse'
            style={{
              width: `${Math.random() * 500 + 300}px`,
              height: `${Math.random() * 500 + 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 4 === 0
                  ? 'rgba(148, 163, 184, 0.3)'
                  : i % 4 === 1
                  ? 'rgba(71, 85, 105, 0.25)'
                  : i % 4 === 2
                  ? 'rgba(30, 41, 59, 0.2)'
                  : 'rgba(203, 213, 225, 0.15)'
              }, transparent 70%)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className='absolute inset-0 opacity-[0.12] dark:opacity-[0.2]'>
        <div
          className='absolute w-[500px] h-[500px] rounded-full blur-xl animate-float-slow'
          style={{
            background:
              'radial-gradient(circle, rgba(100, 116, 139, 0.4), transparent 60%)',
            left: '5%',
            top: '15%',
          }}
        />
        <div
          className='absolute w-[400px] h-[400px] rounded-full blur-xl animate-float-slower'
          style={{
            background:
              'radial-gradient(circle, rgba(51, 65, 85, 0.3), transparent 60%)',
            right: '10%',
            top: '35%',
          }}
        />
        <div
          className='absolute w-[350px] h-[350px] rounded-full blur-xl animate-float-slowest'
          style={{
            background:
              'radial-gradient(circle, rgba(15, 23, 42, 0.25), transparent 60%)',
            left: '55%',
            bottom: '25%',
          }}
        />
        <div
          className='absolute w-[300px] h-[300px] rounded-full blur-xl animate-float-slow'
          style={{
            background:
              'radial-gradient(circle, rgba(203, 213, 225, 0.2), transparent 60%)',
            right: '30%',
            bottom: '15%',
            animationDelay: '5s',
          }}
        />
      </div>

      <div
        className='absolute inset-0 opacity-[0.08] dark:opacity-[0.15] mix-blend-screen dark:mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='6' seed='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 .5 .5 .7 .8 .9 1'/%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div
        className='absolute inset-0 opacity-[0.06] dark:opacity-[0.12] animate-pulse'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          animationDuration: '8s',
        }}
      />
    </div>
  );
}
