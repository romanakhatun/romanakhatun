import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-100 navbar border border-base-300 bg-base-100 px-8 max-w-3xl w-[90%] rounded-full shadow-lg">
      <div className="flex-1">
        <a href="/#home" className="text-xl font-bold text-primary">
          <Logo />
        </a>
      </div>
      <ul className="px-1 gap-4 flex items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={`#${link.href}`}
              className={`text-xs uppercase ${
                activeSection === link.href
                  ? "text-primary active"
                  : "text-base-content"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </div>
  );
};

export default Navbar;
