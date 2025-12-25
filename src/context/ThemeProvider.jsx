import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const getLocalStorageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(getLocalStorageTheme || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeInfo = {
    toggleTheme,
    theme,
  };

  return <ThemeContext value={themeInfo}>{children}</ThemeContext>;
};

export default ThemeProvider;
