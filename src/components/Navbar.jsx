import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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

  // Smooth Scroll Click Handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-100 navbar border border-base-300 bg-base-100/80 backdrop-blur-md px-8 max-w-3xl w-[90%] rounded-full shadow-lg">
      <div className="flex-1">
        <Link
          to="#home"
          onClick={(e) => handleScrollTo(e, "home")}
          className="text-xl font-bold text-neutral"
        >
          Romana
        </Link>
      </div>
      <ul className="px-1 gap-6 flex items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${
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
    </header>
  );
};

export default Navbar;
