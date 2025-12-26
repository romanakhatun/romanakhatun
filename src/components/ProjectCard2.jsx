import {
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronRight,
  FiTerminal,
  FiFolder,
} from "react-icons/fi";

const ProjectCard2 = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div>
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32 group items-center">
        {/* 1. The Image Layer */}
        <div
          className={`relative lg:col-span-8 h-[300px] md:h-[450px] overflow-hidden rounded-3xl border border-base-300 transition-all duration-700 
        ${isEven ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-5"}`}
        >
          <div className="absolute inset-0 bg-base-100/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img
            src={project.projectImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
        </div>

        <div
          className={`relative z-20 lg:col-span-5 p-8 md:p-10 rounded-3xl border border-white/10 bg-base-100/40 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-primary/30
        ${isEven ? "lg:col-start-8 lg:-ml-20" : "lg:col-start-1 lg:-mr-20"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <FiLayers className="text-primary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Featured Case Study
            </span>
          </div>

          <h3 className="font-title text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
            {project.title}
          </h3>

          <p className="font-body text-sm md:text-base text-base-content/80 leading-relaxed mb-6">
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

          <div className="flex items-center gap-6">
            <a
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-all group/link"
            >
              Live Preview{" "}
              <FiExternalLink className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
            </a>
            <div className="w-px h-4 bg-base-300"></div>
            <a
              href={project.githubClient}
              target="_blank"
              className="text-base-content/60 hover:text-white transition-all"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="group relative bg-base-100 border border-base-300 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section with Internal Badges */}
          <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
            <img
              src={project.projectImage}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-md border border-white/10 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-title text-3xl font-black text-white uppercase italic tracking-tighter">
                  {project.title}
                </h3>
                <span className="font-mono text-primary text-xl opacity-20 group-hover:opacity-100 transition-opacity">
                  //0{index + 1}
                </span>
              </div>
              <p className="font-body text-base-content/70 leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-base-300">
              <div className="flex gap-4">
                <a
                  href={project.githubClient}
                  className="text-base-content hover:text-primary transition-colors"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href={project.liveLink}
                  className="text-base-content hover:text-primary transition-colors"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
              <a
                href={project.liveLink}
                className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/link"
              >
                Case Study{" "}
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard2;
