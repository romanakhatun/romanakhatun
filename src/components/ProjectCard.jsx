import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative group flex flex-col justify-center py-20 border-b border-white/5 last:border-0">
      <div
        className={`absolute top-10 font-black text-[15vw] leading-none text-white/[0.02] select-none pointer-events-none
        ${isEven ? "right-0" : "left-0"}`}
      >
        0{index + 1}
      </div>

      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 
        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      >
        <div className="w-full lg:w-1/3 space-y-8 z-10">
          {/* <div className="flex items-center gap-3 mb-4">
              <FiLayers className="text-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Featured Case Study
              </span>
            </div> */}

          <h3 className="font-title text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            {project.title}
          </h3>

          <p className="text-primary font-body text-xs font-bold uppercase tracking-[0.4em] ml-1">
            {project.subtitle}
          </p>

          <p className="font-body text-base-content/60 text-sm md:text-base leading-relaxed max-w-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold px-3 py-1 rounded-full bg-base-300/50 border border-white/5 text-base-content/60 group-hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 pt-6">
            <a
              href={project.liveLink}
              className="text-[10px] font-bold uppercase tracking-widest text-neutral flex items-center gap-2 group/link"
            >
              View Live{" "}
              <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
            </a>

            <a
              href={project.githubClient}
              className="text-base-content/40 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
          </div>
        </div>

        {/* 3. The Visual Stage (70% Width) */}
        <div className="w-full lg:w-2/3 relative group">
          <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-base-300">
            {/* Image with subtle zoom/parallax effect */}
            <img
              src={project.projectImage}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
            />

            {/* Color Flash Overlay on Hover */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Decorative Corner accents */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
