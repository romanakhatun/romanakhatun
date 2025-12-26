import ProjectCard from "../components/ProjectCard";
import ProjectCard2 from "../components/ProjectCard2";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="pt-35">
      <SectionTitle title1="Featured" title2="Works" sectionNumber="3" />

      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {projects.map((project, index) => (
        <ProjectCard2 key={project.id} project={project} index={index} />
      ))}

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
