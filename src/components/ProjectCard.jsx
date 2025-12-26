import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 mb-24 last:mb-0 group`}
    >
      {/* 1. Project Image Container */}
      <div
        className={`relative md:col-span-7 h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-base-300 shadow-2xl transition-all duration-500 group-hover:border-primary/50
        ${isEven ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-6"}
      `}
      >
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="block w-full h-full relative"
        >
          {/* Greenish Overlay (Matches your image) */}
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
          <img
            src={project.projectImage}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </a>
      </div>

      {/* 2. Project Content Container */}
      <div
        className={`relative z-20 md:col-span-6 flex flex-col
        ${
          isEven
            ? "md:col-start-7 md:items-end text-right"
            : "md:col-start-1 md:items-start text-left"
        }
      `}
      >
        <p className="font-mono text-primary text-xs tracking-widest mb-2 font-bold uppercase">
          Featured Project
        </p>
        <h3 className="font-title text-3xl font-black text-white mb-6 tracking-tighter hover:text-primary transition-colors cursor-pointer">
          {project.title}
        </h3>

        {/* 3. The Floating Description Box (Matches the Image) */}
        <div className="p-6 rounded-lg bg-[#112240] border border-white/5 shadow-xl text-base-content/80 font-body text-sm leading-relaxed mb-6 transition-all group-hover:shadow-primary/5">
          {project.description}
        </div>

        {/* Tech Stack Tags */}
        <div
          className={`flex flex-wrap gap-3 mb-6 font-mono text-[11px] text-base-content/60
          ${isEven ? "justify-end" : "justify-start"}
        `}
        >
          {project.techStack.map((tech) => (
            <span key={tech} className="hover:text-primary transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-5 text-white">
          <a
            href={project.githubClient}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-all"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-all"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
