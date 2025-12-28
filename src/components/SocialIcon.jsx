import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { PiInstagramLogo } from "react-icons/pi";

const Social_Links = [
  {
    name: "GitHub",
    icon: <FiGithub size={20} />,
    href: "https://github.com/romanakhatun/",
  },
  {
    name: "LinkedIn",
    icon: <LuLinkedin size={20} />,
    href: "https://linkedin.com/in/romana-khatun",
  },
  {
    name: "Instagram",
    icon: <PiInstagramLogo size={20} />,
    href: "https://www.instagram.com/romanakhatun_2004/",
  },
  // {
  //   name: "Twitter",
  //   icon: <RiTwitterXLine size={20} />,
  //   href: "https://x.com/yourusername",
  // },
  {
    name: "Website",
    icon: <CiGlobe size={20} />,
    href: "https://romana-khatun.web.app/",
  },
];
const SocialIcon = () => {
  return (
    <>
      {Social_Links.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-base-300 bg-base-100/40 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.1)]"
          aria-label={social.name}
        >
          {/* Icon with Hover Color Change */}
          <span className="text-base-content/70 group-hover:text-primary transition-colors duration-300">
            {social.icon}
          </span>

          {/* Elegant Tooltip Pop-up */}
          <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all duration-300 px-3 py-1 rounded-lg bg-base-100 border border-base-300 text-[10px] font-bold uppercase tracking-widest text-primary shadow-xl pointer-events-none">
            {social.name}
          </span>

          {/* Hidden decorative glow on hover */}
          <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
      ))}
    </>
  );
};

export default SocialIcon;
