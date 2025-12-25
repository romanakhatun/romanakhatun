import { LuLinkedin } from "react-icons/lu";
import RomanaAvatar from "../assets/romana-avatar.png";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";

const Social_Links = [
  {
    name: "GitHub",
    icon: <FiGithub size={20} />,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <LuLinkedin size={20} />,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: <RiTwitterXLine size={20} />,
    href: "https://x.com/yourusername",
  },
  {
    name: "Website",
    icon: <CiGlobe size={20} />,
    href: "https://yourwebsite.com",
  },
];

const Home = () => {
  return (
    <div className="section-animation">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="flex-1 w-full">
          <p className="text-primary">Hi, my name is</p>
          <h1 className="text-3xl font-bold font-jetBrans">Romana Khatun.</h1>
          <h2 className="text-xl font-jetBrans">
            A Full Stack Web Developer...
          </h2>
          <p className="max-w-lg my-2">
            Building responsive, high-performance web applications with the
            <span className=""> MERN Stack & Next.js</span>. Specialized in
            creating secure authentication systems, scalable production
            workflows, and clean, maintainable code that delivers seamless user
            experiences.
          </p>

          <div className="flex items-center gap-4 pt-2">
            {Social_Links.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                {social.icon} {social.name}
              </a>
            ))}
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
        {/* <div className="relative shrink-0 mx-4 md:mx-0">
          <div className="p-2 rounded-full border border-base-300 bg-base-100/50 backdrop-blur-sm">
            <div className="rounded-full border-2 border-primary/30 overflow-hidden shadow-inner">
              <img
                className="w-28 md:w-36 aspect-square object-cover hover:scale-110 transition-transform duration-700"
                src={RomanaAvatar}
                alt="Romana Khatun"
              />
            </div>
          </div>
          <span className="absolute bottom-3 right-3 w-5 h-5 bg-success border-4 border-base-100 rounded-full"></span>
 
        </div> */}
      </div>
    </div>
  );
};

export default Home;
