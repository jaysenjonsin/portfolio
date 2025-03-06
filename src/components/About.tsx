import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
export function About() {
  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='mb-12 text-center'>
          <h2 className='text-2xl font-bold sm:text-4xl'>About Me</h2>
          <div className='mt-4 h-1 w-20 bg-primary mx-auto'>
            {/*blue line*/}
          </div>
        </div>
        <div className='flex flex-col items-center gap-12 md:flex-row'>
          <div className='w-full md:w-1/3'>
            <div className='relative mx-auto aspect-square w-64 overflow-hidden rounded-xl'>
              <Image
                src='/images/about.jpg'
                alt='Jason'
                width={256}
                height={256}
                className='object-cover'
              />
            </div>
          </div>
          <div className='w-full md:w-2/3'>
            <h3 className='mb-4 text-2xl font-semibold'>
              Full Stack Developer with a passion for creating beautiful and
              functional user experiences
            </h3>
            <p className='mb-6 text-muted-foreground'>
              I'm an experienced software engineer passionate about building
              full stack applications using modern technolgies such as React,
              Next.js, Typescript and Node.js.
            </p>
            <p className='mb-6 text-muted-foreground'>
              I'm dedicated to delivering efficient and well designed solutions
              for exceptional user experiences. My approach combines technical
              expertise with an eye for design, ensuring that the applications I
              build are not only functional but also visually appealing to use!
            </p>
            <div className='flex flex-wrap gap-4'>
              <Button asChild variant='outline'>
                Resume
              </Button>
              <Button asChild>
                <a href='#projects'>View my work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
