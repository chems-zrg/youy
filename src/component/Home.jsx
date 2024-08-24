import React from "react";
import Layout from "./layout";
import profileImage from "../image/developer-pic-1.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import hireme from "../image/vmJwG401.svg";
import cv from "../cv/Cv Étudiant Simple Blanc (2) (2).pdf";

const Home = () => {
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
  const animate2 = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
      y: 0,
    },
  };
  const animate3 = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      transition: { delay: 1.2, duration: 1 },
      y: 0,
    },
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-between w-[100%]      dark:bg-dark bg-[#F9F9FB] ">
        <div className="relative mt-10 w-screen  lg:w-1/2 z-30 flex   justify-center items-center ml-5 lg:ml-0 ">
          <img
            src={profileImage}
            alt="Profile"
            className="lg:w-full md:w-[60%]    h-auto"
          />
        </div>
        <div className="w-screen  text-center lg:w-1/2 flex flex-col items-center justify-center   ">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." />
          <motion.p
            className=" sm:text-center lg:text-left text-lg mb-4 px-4 sm:px-0  dark:text-white "
            variants={animate}
            initial="initial"
            animate="animate"
          >
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </motion.p>
          <div className="w-full flex items-center my-3 lg:justify-start  justify-center dark:text-white">
            <motion.a
              href={cv}
              download
              className="p-2 w-36 text-lg text-white text-center flex items-center   justify-center font-bold bg-black   dark:bg-white   hover:dark:border-white    hover:dark:bg-dark   rounded border-2 border-transparent hover:bg-white hover:text-black hover:border-black group"
              variants={animate2}
              initial="initial"
              animate="animate"
            >
              <p className=" dark:text-dark   group-hover:dark:text-white      ">Resume</p>
              <FaArrowUpRightFromSquare className="text-white group-hover:text-black   group-hover:dark:text-white  inline ml-2  dark:text-dark  group-dark:text-white " />
            </motion.a>
            <motion.a
              href="#contact"
              className="ml-6 text-xl capitalize underline dark:text-white "
              variants={animate3}
              initial="initial"
              animate="animate"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed bottom-0 left-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:relative lg:flex lg:items-center lg:justify-center  hidden">
          <img
            src={hireme}
            className="w-48 animate-spin-slow mt-4 ml-3"
            alt="Hire Me"
          />
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center m-auto rounded-full w-20 h-20 border border-solid shadow-md border-black bg-black text-white text-center translate-x-[5px] translate-y-2 hover:bg-white hover:text-black  dark:bg-white dark:text-black dark:text-lg dark:font-semibold hover:dark:border-white hover:dark:bg-dark  hover:dark:text-white"
          >
            Hire Me
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
