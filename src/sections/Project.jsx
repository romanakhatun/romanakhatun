import ProjectCard from "../components/ProjectCard";
import ArchivedProjectCard from "../components/ArchivedProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { archivedProject } from "../data/archivedProjects";

const Projects = () => {
  return (
    <section id="projects" className="pt-35">
      <SectionTitle title1="Featured" title2="Works" sectionNumber="3" />

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 mb-32 ">
        {archivedProject.map((archivedProject, index) => (
          <ArchivedProjectCard
            key={archivedProject.id}
            project={archivedProject}
            index={index}
          />
        ))}
      </div>

      {/* Decorative End-of-Section Element */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-4 text-base-content/20 font-mono text-xs uppercase tracking-[0.5em]">
          <div className="w-12 h-px bg-current"></div>
          End of Portfolio
          <div className="w-12 h-px bg-current"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
