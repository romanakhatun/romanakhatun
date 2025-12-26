import ProjectCard from "../components/ProjectCard";
import ArchivedProjectCard from "../components/ArchivedProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { archivedProject } from "../data/archivedProjects";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide how many projects to show initially (e.g., 2)
  const initialCount = 2;
  const visibleProjects = showAll
    ? archivedProject
    : archivedProject.slice(0, initialCount);

  return (
    <section id="projects" className="pt-32 max-w-7xl mx-auto px-6">
      {/* Main Title */}
      <SectionTitle title1="Featured" title2="Works" sectionNumber="3" />

      {/* Featured Projects*/}
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Archive Header */}
      <div className="mb-12 mt-6 flex items-center gap-4">
        <h3 className="font-title text-2xl font-bold text-white uppercase tracking-tighter">
          Other Noteworthy <span className="text-primary italic">Projects</span>
        </h3>
        <div className="grow h-px bg-white/5"></div>
      </div>

      {/* Archived */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {visibleProjects.map((archived, index) => (
          <ArchivedProjectCard
            key={archived.id}
            project={archived}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-primary hover:text-white"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>

          {showAll ? (
            <>
              Show Less <FiMinus className="animate-bounce" />
            </>
          ) : (
            <>
              Show More <FiPlus className="animate-bounce" />
            </>
          )}
        </button>
      </div>

      {/* Professional Footer Indicator */}
      <div className="flex justify-center mt-20 opacity-30 group hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-6 text-base-content font-mono text-[10px] uppercase tracking-[0.6em]">
          <div className="w-16 h-px bg-linear-to-r from-transparent to-current"></div>
          End of Showcase
          <div className="w-16 h-px bg-linear-to-l from-transparent to-current"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
