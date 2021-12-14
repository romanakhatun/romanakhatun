import React from "react";
import { WebsiteName } from "../App";
import HeroHome from "../components/HeroHome";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import HireMe from "../components/HireMe";
import Contact from "../components/Contact";

const Home = (props) => {
  document.title = "Web Developer | " + WebsiteName;

  const pathName = props.location.pathname;

  return (
    <>
      <HeroHome />
      <About homePath={pathName} />
      <Portfolio homePath={pathName} />
      <HireMe />
      <Contact homePath={pathName} />
    </>
  );
};
export default Home;
