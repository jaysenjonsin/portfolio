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
    technologies: ['Technology 1', 'Technology 2'],
    year: '2021',
    category: 'work',
  },
  {
    id: 'Konvene',
    title: 'Konvene',
    description: 'Description 2',
    longDescription: 'Long Description 2',
    technologies: ['Technology 3', 'Technology 4'],
    year: '2022',
    category: 'personal',
  },
  {
    id: 'Knote',
    title: 'Knote',
    description: 'Description 3',
    longDescription: 'Long Description 3',
    technologies: ['Technology 5', 'Technology 6'],
    year: '2023',
    category: 'open-source',
  },
  {
    id: 'Scribe',
    title: 'Scribe',
    description: 'Description 4',
    longDescription: 'Long Description 4',
    technologies: ['Technology 7', 'Technology 8'],
    year: '2024',
    category: 'personal',
  },
];
