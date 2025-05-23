import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function About() {
  return (

    
    //SKILLS SECTION
    <section className='mb-16'>
      <h2 className='font-mono text-sm mb-4'>skills</h2>
      <div className='space-y-4'>
        <div>
          <h3 className='font-mono text-xs mb-2 text-muted-foreground'>
            languages
          </h3>
          <div className='flex flex-wrap gap-1'>
            {[
              'TypeScript',
              'JavaScript(ES6)',
              'Python',
              'HTML/CSS',
              'Ruby',
            ].map((skill) => (
              <span
                key={skill}
                className='font-mono text-xs px-2 py-1 border border-border rounded-sm'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className='font-mono text-xs mb-2 text-muted-foreground'>
            libraries/frameworks
          </h3>
          <div className='flex flex-wrap gap-1'>
            {[
              'React',
              'Next.js',
              'Node.js',
              'Express',
              'GraphQL',
              'Tailwind',
              'SCSS',
              'MUI',
              'Bootstrap',
            ].map((skill) => (
              <span
                key={skill}
                className='font-mono text-xs px-2 py-1 border border-border rounded-sm'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className='font-mono text-xs mb-2 text-muted-foreground'>
            development tools/platforms
          </h3>
          <div className='flex flex-wrap gap-1'>
            {['Git', 'GitHub', 'Vercel', 'Netlify', 'VS Code', 'Figma'].map(
              (skill) => (
                <span
                  key={skill}
                  className='font-mono text-xs px-2 py-1 border border-border rounded-sm'
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className='font-mono text-xs mb-2 text-muted-foreground'>
            databases
          </h3>
          <div className='flex flex-wrap gap-1'>
            {[
              'SQL',
              'NoSQL',
              'PostgreSQL',
              'MongoDB',
              'Redis',
              'Supabase',
              'Firebase',
            ].map((skill) => (
              <span
                key={skill}
                className='font-mono text-xs px-2 py-1 border border-border rounded-sm'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
