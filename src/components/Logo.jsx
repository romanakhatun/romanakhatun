import WhiteLogo from "../assets/white-logo.png";
import BlackLogo from "../assets/dark-logo.png";
import useTheme from "../hooks/useTheme";

const Logo = () => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div>
      <img
        className="h-5"
        src={theme === "dark" ? WhiteLogo : BlackLogo}
        alt="Romana Logo"
      />
      {/* <h1 className="text-xl font-bold text-neutral font-zen-dots tracking-wider">
        Romana
      </h1> */}
    </div>
  );
};

export default Logo;
