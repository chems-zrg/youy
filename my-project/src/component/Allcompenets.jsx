import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contactus";
import Navbar from "./Navbar";

const Allcompenets = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className=" bg-[#F9F9FB] dark:bg-dark">
        <Navbar scrollToSection={scrollToSection} />
        <div id="Home">
          <Home />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Project">
          <Project />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Allcompenets;
