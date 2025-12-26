import { FiGithub, FiExternalLink, FiFolder, FiCode } from "react-icons/fi";

const ArchivedProjectCard = ({ project }) => {
  return (
    <div className="group relative h-full">
      {/* Subtle Glow Background behind the card */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

      <div className="relative h-full flex flex-col p-6 md:p-8 rounded-3xl border border-white/5 bg-[#0d1526]/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/40">
        {/* Header: Folder Icon and Links */}
        <div className="flex items-center justify-between mb-8">
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
        <div className="flex-grow space-y-3">
          <h3 className="font-title text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="font-body text-xs md:text-sm text-base-content/60 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer: Tech Stack with Mini-Tag Style */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-primary/5 text-primary/70 border border-primary/10 group-hover:border-primary/30 transition-colors"
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
