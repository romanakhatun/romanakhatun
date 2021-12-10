import React from "react";
import HeroHome from "../components/HeroHome";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

const Home = (props) => {
  const pathName = props.location.pathname;

  return (
    <>
      <HeroHome />
      <About homePath={pathName} />
      <Portfolio homePath={pathName} />
    </>
  );
};
export default Home;
