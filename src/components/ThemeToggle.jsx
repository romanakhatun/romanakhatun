import useTheme from "../hooks/useTheme";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme} className="cursor-pointer">
        {theme === "light" ? <BsMoon /> : <BsSun className="text-[#ffec99]" />}
      </button>
    </>
  );
};

export default ThemeToggle;
