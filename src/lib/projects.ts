export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  category: 'work' | 'personal' | 'open-source';
};

export const projects: Project[] = [
  {
    id: 'Glassdoor',
    title: 'Glassdoor',
    description: 'growing user engagement and content contribution @ Glassdoor',
    longDescription: 'Long Description 1',
    technologies: [
      'React',
      'Typescript',
      'Next.js',
      'GraphQL',
      'SCSS',
      'Jest',
      'Vitest',
      'React Testing Library',
      'Amplitude',
      'Storybook',
    ],
    year: '2021',
    category: 'work',
  },
  {
    id: 'Konvene',
    title: 'Konvene',
    description: 'Streamlining convention organization @ Konvene',
    longDescription: 'Long Description 2',
    technologies: ['Technology 3', 'Technology 4'],
    year: '2022',
    category: 'work',
  },
  {
    id: 'Knote',
    title: 'Knote',
    description: 'Making learning more efficient @ Knote',
    longDescription: 'Long Description 3',
    technologies: ['Technology 5', 'Technology 6'],
    year: '2023',
    category: 'work',
  },
  {
    id: 'Scribe',
    title: 'Scribe',
    description: 'generating automated tests @ Scribe',
    longDescription: 'Long Description 4',
    technologies: ['Technology 7', 'Technology 8'],
    year: '2024',
    category: 'work',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
