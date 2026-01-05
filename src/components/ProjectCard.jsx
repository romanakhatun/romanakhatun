import { FiServer, FiLayout, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative group flex flex-col justify-center ${
        index === 0 ? "pt-0 pb-10" : "py-10"
      }  border-b border-white/5 last:border-0`}
    >
      {/* Background Index Number */}
      <div
        className={`absolute top-1 font-black text-[15vw] leading-none text-white/2 select-none pointer-events-none transition-all duration-700 group-hover:text-primary/3
        ${isEven ? "right-0" : "left-0"}`}
      >
        0{index + 1}
      </div>

      <div
        className={`flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-16 
        ${isEven ? "" : "direction-rtl"}`}
      >
        {/* Content Area */}
        <div
          className={`w-full lg:col-span-6 space-y-6 z-10 ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase">
              {project.title}
            </h3>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.4em] ml-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base-content/60 text-sm leading-relaxed max-w-md">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold px-3 py-1 rounded-md bg-base-300/30 border text-primary border-primary/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            {/* Live Link Button */}
            <a
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-all group/link"
            >
              Live Preview{" "}
              <FiExternalLink className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            </a>

            {/* GitHub Links Group */}
            <div className="flex items-center gap-4">
              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-base-content hover:text-white transition-colors group/link"
                title="Client Side Code"
              >
                <FiLayout size={18} className="group-hover/link:text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Client
                </span>
              </a>

              {project.githubServer && (
                <a
                  href={project.githubServer}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-base-content hover:text-white transition-colors group/link"
                  title="Server Side Code"
                >
                  <FiServer
                    size={18}
                    className="group-hover/link:text-primary"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Server
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/*  Visual Stage */}
        <div
          className={`w-full lg:col-span-6 relative group ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative aspect-video rounded-sm overflow-hidden bg-base-300 shadow-2xl">
            <img
              src={project.projectImage}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-600 ease-out"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>

          {/* Corner Accents - Responsive size */}
          <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-primary/30 group-hover:border-primary transition-colors duration-500"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b border-l border-primary/30 group-hover:border-primary transition-colors duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
