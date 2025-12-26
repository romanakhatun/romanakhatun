import SectionTitle from "../components/SectionTitle";

const Experience = () => {
  const experiences = [
    {
      company: "Namyata Technology",
      role: "Front-end Developer - Intern",
      location: "Delhi, India (Remote)",
      duration: "Mar 2021 – Sep 2021",
      description: [
        "Developed high-quality front-end features for a yoga instructor marketplace using TypeScript and Next.js.",
        "Built reusable UI components and improved performance by optimizing rendering processes.",
        "Contributed to SEO improvements using Server-Side Rendering (SSR) and modern web practices.",
      ],
      tags: ["Next.js", "TypeScript", "Redux", "Material UI", "Sass"],
    },
  ];

  return (
    <>
      <SectionTitle title1="Work" title2="History" sectionNumber="2" />

      <div className="mt-12 max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* The Timeline Line & Glow Node */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-base-300 group-hover:bg-primary/50 transition-colors duration-500"></div>

            {/* The Node */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8] group-hover:scale-150 transition-transform duration-300"></div>

            {/* Experience Card */}
            <div className="relative p-6 md:p-8 rounded-2xl border border-base-300 bg-base-100/40 backdrop-blur-md hover:border-primary/30 transition-all duration-500 mb-10">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-title text-2xl text-neutral font-bold tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-medium">
                      {exp.company}
                    </span>
                    <span className="text-base-content/40">•</span>
                    <span className="text-base-content/60 text-sm">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="font-body text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  {exp.duration}
                </div>
              </div>

              {/* Description List */}
              <ul className="space-y-4 mb-8">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base-content/80 leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Used */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-base-300 text-base-content/70 border border-white/5 group-hover:border-primary/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
