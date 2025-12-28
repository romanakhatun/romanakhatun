import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu when a link is clicked
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] navbar border border-base-300 bg-base-100/80 backdrop-blur-md px-4 md:px-8 max-w-3xl w-[90%] rounded-[2rem] md:rounded-full shadow-lg transition-all duration-300">
      <div className="flex-1">
        <Link to="#home" onClick={(e) => handleScrollTo(e, "home")}>
          <Logo />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex px-1 gap-6 items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                activeSection === link.href
                  ? "text-primary font-black"
                  : "text-base-content/60"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <div className="w-px h-4 bg-base-300 mx-2"></div>
        <ThemeToggle />
      </ul>

      {/* Mobile Toggle & Theme */}
      <div className="flex md:hidden items-center gap-4">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-primary bg-primary/10 rounded-full cursor-pointer"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute top-[110%] left-0 w-full bg-base-100 border border-base-300 rounded-2xl p-4 flex flex-col gap-4 shadow-xl md:hidden animate-in fade-in slide-in-from-top-2 duration-300"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`#${link.href}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`block text-center text-[10px] font-bold uppercase tracking-widest py-2 rounded-lg ${
                    activeSection === link.href
                      ? "bg-primary/10 text-primary font-black"
                      : "text-base-content/60"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
