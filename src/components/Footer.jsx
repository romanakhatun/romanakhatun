import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-base-300 bg-base-100/50 backdrop-blur-md pt-16 pb-8">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <h2 className="font-title text-2xl font-black text-neutral uppercase tracking-tighter">
              Romana <span className="text-primary italic">Khatun</span>
            </h2>
            <p className="font-body text-sm text-base-content/60 max-w-[280px] leading-relaxed">
              MERN Stack Developer specializing in high-performance web
              applications and seamless user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <SocialIcon />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-base-content/40">
            © {currentYear} • Built with React & Tailwind by Romana
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-primary hover:text-neutral transition-colors cursor-pointer"
          >
            Back to top
            <FiArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
