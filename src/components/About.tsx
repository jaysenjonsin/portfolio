import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
export function About() {
  return (
    <section id='about'>
      <div>
        <div>
          <h2>About Me</h2>
          <div></div>
        </div>
        <div>
          <div>
            <div>
              <Image
                src='/images/about.jpg'
                alt='Jason'
                width={256}
                height={256}
                className='object-cover'
              />
            </div>
          </div>
          <div>
            <h3>
              Full Stack Developer with a passion for creating beautiful and
              functional user experiences
            </h3>
            <p>
              I'm an experienced software engineer passionate about building
              full stack applications using modern technolgies such as React,
              Next.js, Typescript and Node.js.
            </p>
            <p>
              I'm dedicated to delivering efficient and well designed solutions
              for exceptional user experiences. My approach combines technical
              expertise with an eye for design, ensuring that the applications I
              build are not only functional but also visually appealing to use!
            </p>
            <div>
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
