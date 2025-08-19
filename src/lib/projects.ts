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
    longDescription:
      'As a Front-end Software Engineer Intern, I worked on features and infrastructure that improved both the user experience and developer workflow. I built a new “add company” feature within the review survey using advanced React reducer patterns, GraphQL queries/mutations, and dynamic validation—boosting survey submissions by 6%. I refactored legacy autocomplete components to meet WCAG accessibility standards and maintain UX consistency across multiple survey workflows. I also architected A/B test infrastructure with Amplitude that drove a 102% increase in survey submissions, and improved test coverage by 94% using TypeScript, Jest, and React Testing Library. Additionally, I enhanced developer experience by creating Storybook documentation with GraphQL API mocking and i18n context integration, streamlining onboarding and cross-team collaboration.',
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
    description: 'streamlining convention organization @ Konvene',
    longDescription:
      'As a Software Engineer at Konvene, I contributed across the full stack to build a platform that streamlined event organization for vendors, owners, and attendees. On the frontend, I designed and implemented 10+ responsive React pages with MUI, ensuring a cohesive, mobile-first experience across different user roles. I also architected the authentication system with React Router, Context API, and JWTs to enable secure, role-based access and persistent session management. On the backend, I built and maintained PostgreSQL schemas and models in Ruby on Rails to handle vendor applications, event add-ons, payments (via Stripe), and automated notifications. To support smooth deployments, I set up CI/CD pipelines with GitHub Actions for database migrations and schema changes. Together, these contributions delivered a scalable, user-friendly platform that simplified convention management end-to-end.',
    technologies: ['Technology 3', 'Technology 4'],
    year: '2022',
    category: 'work',
  },
  {
    id: 'Knote',
    title: 'Knote',
    description: 'making learning more efficient @ Knote',
    longDescription: 'In production.',
    technologies: ['Technology 5', 'Technology 6'],
    year: '2023',
    category: 'work',
  },
  {
    id: 'Scribe',
    title: 'Scribe',
    description: 'generating automated tests @ Scribe',
    longDescription:
      'As a Software Engineer, I contributed to building Scribe, an open-source tool developed under the OS Labs accelerator that automated Jest test generation for GraphQL schemas and resolvers. On the frontend, I created a React interface with an integrated code editor for writing and saving GraphQL queries/mutations, and implemented Redux Toolkit for centralized state management, improving readability and reducing prop-drilling complexity. On the backend, I configured an Express.js/Node.js server to generate type-safe unit and integration tests aligned with Apollo GraphQL standards. I also optimized API performance with Redis caching, cutting redundant database queries and improving response times by up to 80%.',
    technologies: ['Technology 7', 'Technology 8'],
    year: '2024',
    category: 'work',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
