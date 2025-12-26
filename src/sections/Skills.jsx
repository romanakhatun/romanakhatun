import SectionTitle from "../components/SectionTitle";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Redux", "HTML5", "CSS3"],
      accent: "from-blue-500 to-cyan-400",
    },
    {
      title: "Styling & UI",
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Sass",
        "Framer Motion",
        "Styled-components",
      ],
      accent: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "JWT",
        "RESTful APIs",
      ],
      accent: "from-green-500 to-emerald-400",
    },
    {
      title: "Workflow & Tools",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Figma",
        "Performance Optimization",
        "Cross-Browser Compatibility",
      ],
      accent: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <section id="skills" className="pt-35">
      <SectionTitle title1="Technical" title2="Expertise" sectionNumber="2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-3xl border border-base-300 bg-base-100/30 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div
              className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.accent} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            <h3 className="font-title text-xl text-neutral font-bold mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-base-200 border border-white/5 text-base-content/80 text-sm font-body font-medium transition-all duration-300 hover:bg-base-300 hover:text-primary hover:border-primary/30"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modern "Bottom Bar" for Skills */}
      <div className="mt-12 p-8 rounded-2xl bg-base-300/30 border border-dashed border-base-300 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
        <p className="font-body text-sm text-base-content/60">
          Actively working with{" "}
          <span className="text-neutral font-bold">Modern Web Standards</span>{" "}
          and <span className="text-neutral font-bold">Best Practices</span> for
          clean, maintainable code.
        </p>
      </div>
    </section>
  );
};

export default Skills;
