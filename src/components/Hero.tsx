'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeOut = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeOut);
    }
  }, [typedText]);

  return (
    <section
      id='home'
      //min height of the screen minus the height of the header
      className='relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20'
    >
      <div className='container mx-auto px-4 text-center md:px-8'>
        <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
          Hi, I'm <span className='text-primary'>Jason 👋</span>
        </h1>
        <h2 className='mb-8 text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl'>
          <span className='inline-block min-h-[1.5em]'>{typedText}</span>
        </h2>
      </div>
    </section>
  );
}
