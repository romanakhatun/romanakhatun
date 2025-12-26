import { FiArrowRight } from "react-icons/fi";
import RomanaAvatar from "../assets/romana-avatar.png";
import SocialIcon from "../components/SocialIcon";

const Home = () => {
  return (
    <section id="home" className="pt-45">
      <div className="section-animation">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
          <div className="flex-1 w-full space-y-2">
            <p className="font-mono text-primary text-sm md:text-base tracking-widest uppercase font-bold animate-pulse">
              Available for new projects
            </p>
            <h1 className="text-4xl md:text-7xl font-black font-bricolage text-neutral tracking-tighter leading-none">
              Romana <span className="text-primary italic">Khatun.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bricolage text-base-content/80 tracking-tight">
              A Full Stack Web Developer...
            </h2>
            <p className="max-w-lg text-base md:text-lg text-base-content/70 my-3 leading-relaxed">
              Building responsive, high-performance web applications with the
              <span className="highlight-text animate-gradient-x">
                {" "}
                MERN Stack & Next.js
              </span>
              . Specialized in creating secure authentication systems, scalable
              production workflows, and clean, maintainable code that delivers
              seamless user experiences.
            </p>

            {/* Professional Social Grid */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-6">
              <SocialIcon />

              {/* Separator Line */}
              <div className="h-8 w-px bg-base-300 mx-2 hidden md:block"></div>

              {/* Resume/CV Quick Link */}
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-3 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-neutral transition-all duration-300"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative shrink-0 mx-4 md:mx-0 group">
            {/* Avatar Container */}
            <div className="p-2 rounded-full border border-base-300 bg-base-100/50 backdrop-blur-sm">
              <div className="rounded-full border-2 border-primary/30 overflow-hidden shadow-inner">
                <img
                  className="w-60 aspect-square object-cover hover:scale-110 transition-transform duration-700"
                  src={RomanaAvatar}
                  alt="Romana Khatun"
                />
              </div>
            </div>

            {/* Status Indicator & Tooltip */}
            <div className="absolute bottom-10 right-4 flex items-center">
              {/* The Pulsing Indicator */}
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-success border-4 border-base-100"></span>
              </span>

              {/* The Hover Message */}
              <div className="absolute left-7 whitespace-nowrap bg-base-100 border border-base-300 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-base-content opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
