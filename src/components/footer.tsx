import { GradientShift } from './gradient-shift';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full flex justify-between items-center py-4'>
      <Link href='/'>
        <p className='font-mono text-sm'>© Jason Johnson</p>
      </Link>
      <Link href='/'>{/* <GradientShift /> */}</Link>
    </footer>
  );
};
