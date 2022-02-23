import React from "react";
// import { WebsiteName } from "../App";
import HeroHome from "./HeroHome";
import About from "./About";
import Portfolio from "./Portfolio";
import HireMe from "./HireMe";
import Contact from "./Contact";

const Index = (props) => {
  //   document.title = WebsiteName;

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
export default Index;
