'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); //needed to prevent hydration error with next-themes

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-8'>
        <Link href='/' className='text-lg font-bold'>
          Logo here
        </Link>
        {/* Desktop Nav */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-8'>
            <li>
              <Link
                href='#home'
                className='text sm font-medium text-muted-foreground hover:text-foreground'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#about'
                className='text-sm font-medium text-muted-foreground hover:text-foreground'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#skills'
                className='text-sm font-medium text-muted-foreground hover:text-foreground'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href='#projects'
                className='text-sm font-medium text-muted-foreground hover:text-foreground'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                className='text-sm font-medium text-muted-foreground hover:text-foreground'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
