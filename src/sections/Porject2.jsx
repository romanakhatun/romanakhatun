import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects"; // Import your projects data
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects2 = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle title1="Featured" title2="Works" sectionNumber="3" />

      {/* <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
      {/* </div> */}
    </section>
  );
};

export default Projects2;
