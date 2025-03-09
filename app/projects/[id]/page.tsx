import { getProjectsData } from "@/utils/data-loader";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  const projects = getProjectsData("es");
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectPageClient projectId={params.id} />;
}
