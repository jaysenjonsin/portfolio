import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function WorkPage() {
  return (
    <>
      <main className='flex-1 py-16'>
        <h1 className='text-3xl font-mono mb-8'>work</h1>

        <div className='space-y-8'>
          {projects
            .filter((project) => project.category === 'work')
            .map((project) => (
              <section key={project.id}>
                <h2 className='font-mono text-sm mb-2'>{project.title}</h2>
                <p className='font-mono text-sm leading-relaxed max-w-lg mb-4'>
                  {project.description}
                </p>
                <Link
                  href={`/project/${project.id}`}
                  className='font-mono text-sm hover:underline'
                >
                  view work →
                </Link>
              </section>
            ))}
        </div>
      </main>
    </>
  );
}
