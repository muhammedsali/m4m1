import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <section id="work" className="bg-white px-6 py-24 text-black">
      <h2 className="mb-16 leading-none tracking-[-0.03em]">
        <span className="text-[8vw] font-black">SEÇİLEN </span>
        <span className="text-[8vw] font-thin italic">PROJELER</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
