import React from "react";
import Layout from "./layout";
import profileImage from "../image/developer-pic-1.png";
import AnimatedText from "./AnimatedText";
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import hireme from "../image/vmJwG401.svg";
import About from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Project from "./Project";

export default function Home() {
  const animate = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
      y: 0,
    },
  };

  return (
    <>
      <div>
        <Navbar />
        <Layout>
          <div className="flex items-center justify-between w-full min-h-screen">
            <div className="relative w-1/2 z-30">
              <img src={profileImage} alt="" className="w-full h-auto " />
            </div>
            <div className="w-1/2 h-full flex flex-col self-center pb-28">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." />
              <motion.p
                className="text-left text-lg my-4"
                variants={animate}
                initial="initial"
                animate="animate"
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </motion.p>
              <div className="w-full flex items-center my-3">
                <Link
                  to="/"
                  className="p-2 w-36 text-lg text-white text-center flex items-center justify-center font-bold bg-black rounded border-2 border-transparent hover:bg-white hover:text-black hover:border-black group"
                  download={true}
                >
                  <p>Resume</p>
                  <FaArrowUpRightFromSquare className="text-white group-hover:text-black inline ml-2" />
                </Link>
                <Link to="/" className="ml-6 text-xl capitalize underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center  ">
              <img
                src={hireme}
                className="w-48 animate-spin-slow  mt-4 ml-3  "
                alt="Hire Me"
              />
              <Link
                to="/"
                className="absolute inset-0 flex items-center justify-center m-auto rounded-full w-20 h-20 border border-solid shadow-md border-black bg-black text-white text-center  translate-x-[5px] translate-y-2  hover:bg-white hover:text-black "
              >
                Hire Me
              </Link>
            </div>
          </div>
        </Layout>
        <About />
        <Skills />
        <Project />
      </div>
    </>
  );
}
