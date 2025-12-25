import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useTheme = () => {
  const themeInfo = use(ThemeContext);
  return themeInfo;
};

export default useTheme;
