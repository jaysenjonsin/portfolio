import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-between max-w-2xl mx-auto px-4 py-8'>
      <header className='w-full flex justify-between items-center py-4'>
        <div className='font-mono text-sm'>Jason Johnson</div>
        <nav className='flex items-center space-x-4 font-mono text-sm'>
          <Link href='/work' className='hover:underline'>
            work
          </Link>
          <Link href='/projects' className='hover:underline'>
            projects
          </Link>
          <Link href='/about' className='hover:underline'>
            about
          </Link>
          <ThemeToggle />
        </nav>
      </header>
    </div>
  );
}
