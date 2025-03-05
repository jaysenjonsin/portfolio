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
      {' '}
    </section>
  );
}
