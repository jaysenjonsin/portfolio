export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  year: string;
  category: 'work' | 'personal' | 'open-source';
};

export const projects: Project[] = [
  {
    id: 'Glassdoor',
    title: 'Glassdoor',
    description: 'growing user engagement and content contribution @ Glassdoor',
    longDescription:
      'Glassdoor is a platform for workplace transparency, helping employees and job seekers research companies, read reviews, and make informed career decisions. As a Front-end Software Engineer Intern at Glassdoor, I built features and infrastructure that boosted content contribution, enhanced the user experience, and streamlined developer workflows. I built the “add company” feature within the company review survey using advanced React reducer patterns, GraphQL queries/mutations, and dynamic form validation, boosting employer review survey submissions by 6%. I refactored legacy autocomplete components to meet WCAG accessibility standards and maintain UX consistency across multiple survey workflows. I also architected A/B test infrastructure with Amplitude that drove a 102% increase in survey submissions, and improved test coverage across all salary survey modules by 94% using TypeScript, Jest, and React Testing Library. Additionally, I enhanced developer experience by creating Storybook documentation with GraphQL API mocking and i18n context integration, streamlining onboarding and cross-team collaboration.',
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
    liveUrl: 'https://www.glassdoor.com/surveys/start',
  },
  {
    id: 'Konvene',
    title: 'Konvene',
    description: 'streamlining convention organization @ Konvene',
    longDescription:
      'Konvene is a convention event management application that helps organizers plan, manage, and run local conventions, while providing attendees and vendors a seamless event experience. As a Software Engineer at Konvene, I contributed across the full stack to build a platform that streamlined event organization. On the frontend, I designed and implemented 10+ responsive React pages with MUI, ensuring a cohesive, mobile-first experience across different user roles. I also architected the authentication system with React Router, Context API, and JWTs to enable secure, role-based access and persistent session management. On the backend, I built and maintained PostgreSQL schemas and models in Ruby on Rails to handle vendor applications, event add-ons, payments (via Stripe), and automated email notifications. To support smooth deployments, I set up CI/CD pipelines with GitHub Actions for database migrations and schema changes.',
    technologies: [
      'React',
      'Javascript',
      'Ruby',
      'Ruby on Rails',
      'PostgreSQL',
      'Stripe',
      'CI/CD',
      'GitHub Actions',
      'MUI',
      'React Router',
      'Context API',
      'JWT',
    ],
    year: '2022',
    category: 'work',
  },
  {
    id: 'Knoted',
    title: 'Knoted',
    description: 'making learning more efficient @ Knoted',
    longDescription:
      'Knoted doesn’t just help you learn — it helps you learn how to learn. Personalized flashcards, spaced repetition, audio reviews, and more in one hub. Currently in production.',
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
    githubUrl: 'https://github.com/oslabs-beta/Scribe-for-GraphQL',
    articleUrl:
      'https://medium.com/@scribegraphql/writing-jest-tests-for-graphql-scribe-graphql-387e414eea0c',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
