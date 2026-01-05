import { FiDownload } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section id="about" className="pt-35">
      <SectionTitle title1="ABOUT " title2="ME" sectionNumber="1" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* The Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl text-neutral font-bold leading-tight uppercase tracking-tight">
            Bridging the gap between{" "}
            <span className="text-primary">Complex Logic</span> and{" "}
            <span className="text-primary italic">Seamless Design.</span>
          </h3>
          <p className="text-base text-base-content/90 leading-relaxed">
            As a{" "}
            <span className="font-medium">
              Front-end & MERN Stack Developer
            </span>
            , I specialize in engineering high-performance web architectures. My
            approach is rooted in technical precision, ensuring that every line
            of code contributes to a scalable, secure, and user-centric
            production environment.
          </p>

          {/* I focus on the intersection of Performance Optimization and SEO,
          utilizing Next.js and Server-Side Rendering (SSR) to ensure
          applications are not only robust but also discoverable. I am committed
          to writing clean, maintainable, and well-documented code that powers
          seamless user experiences. */}

          <p className="text-base-content/80 leading-relaxed">
            With expertise in{" "}
            <span className="text-primary font-medium">
              React, Next.js, and Node.js
            </span>
            , I specialize in building scalable applications that don't just
            work—they perform. From crafting secure authentication systems to
            optimizing production workflows, I am dedicated to writing clean,
            maintainable code.
          </p>
          <div className="relative pl-6 py-2 border-l-4 rounded-r-lg border-primary bg-primary/5  mt-8 overflow-hidden group">
            <div className="absolute top-0 right-0 pr-3 opacity-10 group-hover:scale-110 group-hover:text-neutral transition-transform">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L12.017 14C12.017 12.8954 12.9124 12 14.017 12L17.017 12C18.1216 12 19.017 12.8954 19.017 14L19.017 17C19.017 19.2091 17.2261 21 15.017 21L14.017 21ZM5.01695 21L5.01695 18C5.01695 16.8954 4.12152 16 3.01695 16L3.01695 14C3.01695 12.8954 3.91238 12 5.01695 12L8.01695 12C9.12152 12 10.017 12.8954 10.017 14L10.017 17C10.017 19.2091 8.22609 21 6.01695 21L5.01695 21Z" />
              </svg>
            </div>
            <p className="text-neutral font-medium italic leading-relaxed relative z-10">
              "My mission is to develop secure, role-based full-stack
              applications that simplify complex business workflows while
              maintaining high technical integrity."
            </p>
          </div>
        </div>

        {/* Right Side: Quick Info Card */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-2xl border border-base-300 bg-base-100/50 backdrop-blur-sm relative overflow-hidden group transition-all duration-500 ease-out hover:border-primary/50 hover:-translate-y-2">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-pink-500/40 transition-colors duration-500"></div>

            {/* <h3 className="text-xl mb-6 uppercase tracking-wider">
              Fast Facts
            </h3> */}

            <h4 className="font-title text-sm text-primary font-bold uppercase tracking-[0.3em] mb-8">
              Technical Overview
            </h4>

            <ul className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    Education
                  </span>
                  <span className="text-sm font-medium">
                    B.Sc. in Statistics
                  </span>
                  <span className="text-base-content/60 text-xs italic">
                    Eden Mohila College, 2024
                  </span>
                </li>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    Current Focus
                  </span>
                  <span className="text-sm font-medium">
                    Next.js & Microservices Architecture
                  </span>
                </li>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    Core Stack
                  </span>
                  <span className="text-sm font-medium italic">
                    MongoDB, Express, React.js, Node (MERN)
                  </span>
                </li>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                    Location
                  </span>
                  <span className="text-sm font-medium">Bangladesh</span>
                  <span className="text-base-content/60 text-xs italic">
                    Available for Global Remote Work
                  </span>
                </li>
              </div>
            </ul>

            {/* CTA button */}
            <a
              href="../assets/Romana-Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-neutral transition-all duration-300 mt-8 cursor-pointer"
            >
              <FiDownload size={16} className="animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>

        {/* <div className="lg:col-span-5">
          <div className="relative p-8 rounded-3xl border border-base-300 bg-base-100/30 backdrop-blur-xl shadow-2xl">
            
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 rounded-3xl"></div>

            <h4 className="font-title text-sm text-primary font-bold uppercase tracking-[0.3em] mb-8">
              Technical Overview
            </h4>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-base-content/50 font-bold mb-1">
                    Education
                  </p>
                  <p className="text-neutral text-sm font-semibold">
                    B.Sc. in Computer Science
                  </p>
                  <p className="text-base-content/60 text-xs mt-0.5">
                    University of Scholars
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-base-content/50 font-bold mb-1">
                    Expertise
                  </p>
                  <p className="text-neutral text-sm font-semibold">
                    Full Stack Architecture
                  </p>
                  <p className="text-base-content/60 text-xs mt-0.5">
                    Specializing in MERN & Next.js
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#38bdf8]"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-base-content/50 font-bold mb-1">
                    Location
                  </p>
                  <p className="text-neutral text-sm font-semibold">Bangladesh</p>
                  <p className="text-base-content/60 text-xs mt-0.5">
                    Available for Global Remote Work
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/resume.pdf"
              className="mt-10 group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-slate-900 font-bold text-xs uppercase tracking-widest transition-all hover:bg-primary hover:text-neutral"
            >
              <FiDownload size={16} className="group-hover:animate-bounce" />
              Download
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
