import { getProjectById } from '@/lib/projects';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <div>{project.title}</div>;
}
