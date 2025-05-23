import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  return (
    <header className='w-full flex justify-between items-center py-4'>
      <div className='font-mono text-sm'>Jason Johnson</div>
      <nav className='flex items-center space-x-4 font-mono text-sm'>
        <Link href='/work' className='hover:underline'>
          work
        </Link>
        {/* <Link href='/projects' className='hover:underline'>
          projects
        </Link> */}
        <Link href='/resume' className='hover:underline'>
          resume{' '}
        </Link>
        <Link href='/about' className='hover:underline'>
          about
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
