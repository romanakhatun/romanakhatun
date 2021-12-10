import React from "react";
import HeroHome from "../components/HeroHome";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import HireMe from "../components/HireMe";

const Home = (props) => {
  const pathName = props.location.pathname;

  return (
    <>
      <HeroHome />
      <About homePath={pathName} />
      <Portfolio homePath={pathName} />
      <HireMe />
    </>
  );
};
export default Home;
