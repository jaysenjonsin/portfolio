'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

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
          <span className='inline-block min-h-[1.5em]'>
            {typedText}
            <span className='cursor-blink text-foreground'>|</span>
          </span>
        </h2>
        <p className='mx-auto mb-10 max-w-2xl text-lg text-muted-foreground'>
          I build responsive, accessbile, and performant web applications with
          modern technologies.
        </p>
        <div className='mb-12 flex justify-center space-x-4'>
          <Button
            asChild //this is to make the button a child of the link - instead of rendering <button> <a></a> </button> it will render as just <a> </a>
            variant='outline'
            size='icon'
            className='rounded-full'
          >
            <a
              href='https://github.com/jaysenjonsin'
              target='_blank' //open in new tab
              rel='noopener noreferrer' //security
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </a>
          </Button>
          <Button
            asChild
            variant='outline'
            size='icon'
            className='rounded-full'
          >
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </Button>
        </div>
        <Button asChild>
          <a href='#contact'>Get in touch</a>
        </Button>
      </div>
      <a
        href='#about'
        //use absolute positioning to position the arrow down icon in the center of the screen relative to the hero section
        className='absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce items-center justify-center rounded-full p-2'
        aria-label='Scroll to About section'
      >
        <ArrowDown className='h-6 w-6 text-muted-foreground' />
      </a>
    </section>
  );
}
