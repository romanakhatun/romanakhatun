import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const ArchivedProjectCard = ({ project }) => {
  return (
    <div className="group relative h-full">
      <div className="relative h-full flex flex-col p-6 md:p-7 rounded-2xl border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/40">
        {/* Folder Icon and Links */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-base-300/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            <FiFolder size={24} />
          </div>
          <div className="flex items-center gap-4 text-base-content/40">
            <a
              href={project.githubClient}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="View Source"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
              title="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="grow space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-neutral tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-xs md:text-sm text-base-content/60 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/*  Tech Stack with Mini-Tag Style */}
        <div className="mt-5 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-bold px-2 py-1 rounded bg-primary/5 text-primary/70 border border-primary/10 group-hover:border-primary/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedProjectCard;
