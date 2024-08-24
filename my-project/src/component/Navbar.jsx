import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import twitter from "../image/twitter-svgrepo-com.svg";
import facebook from "../image/facebook-1-svgrepo-com.svg";
import github from "../image/github-color-svgrepo-com.svg";
import telegram from "../image/telegram-svgrepo-com.svg";
import linkedin from "../image/linkedin-1-svgrepo-com.svg";
import hireme from "../image/vmJwG401.svg";
import useThemeSwitcher from "./useThemeSwitcher";
import moon from "../Image2/icons8-pleine-lune-48.png";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setisOpen] = useState(false);

  const onclickMenuBar = () => {
    setisOpen(!isOpen);
  };

  const handleonclick = (sectionId) => {
    scrollToSection(sectionId);
  };
  const [mode, setMode] = useThemeSwitcher(); // Correctly call useThemeSwitcher

  const [darkmode, setdarkmode] = useState(true);
  const location = useLocation();
  const MotionLink = motion(Link);
  const [color, setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  const [undeline, setundeline] = useState("Home");

  useEffect(() => {
    window.addEventListener("scroll", changecolor);
    return () => {
      window.removeEventListener("scroll", changecolor);
    };
  }, []);
  const CustomLink = ({ to, title, sectionId, className = "" }) => {
    return (
      <Link
        onClick={() => {
          handleonclick(sectionId), setundeline(sectionId);
        }}
        className={`${className} group relative   dark:text-white `}
      >
        <span
          className={`h-[2px] inline-block w-0 bg-black  dark:bg-white absolute -bottom-[3px] group-hover:w-full transition-[width] duration-300 ease ${
            undeline === sectionId ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
        {title}
      </Link>
    );
  };
  const CustomLinkmenu = ({ to, title, sectionId, className = "" }) => {
    return (
      <Link
        onClick={() => {
          handleonclick(sectionId), setundeline(sectionId);
        }}
        className={`${className} group relative  text-white  dark:text-black `}
      >
        <span
          className={`h-[2px] inline-block w-0 bg-white   dark:bg-black absolute -bottom-[3px] group-hover:w-full transition-[width] duration-300 ease ${
            undeline === sectionId ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
        {title}
      </Link>
    );
  };

  return (
    <>
      <div
        className={`flex    items-center justify-between   max-md:h-20 lg:px-32 py-5 w-screen lg:mb-6 z-50 fixed transition-colors duration-300 ${
          color ? "bg-[rgb(33_51_41/0.4)] h-20 text-white " : ""
        }`}
      >
        <button
          className=" flex  flex-col   justify-center  items-center  ml-4 lg:hidden"
          onClick={onclickMenuBar}
        >
          <span
            className={`w-6   bg-black  dark:bg-white  h-0.5  rounded-sm ${
              isOpen
                ? "rotate-45  translate-y-1 transition duration-300 "
                : "-translate-y-0.5 transition duration-300 "
            } `}
          ></span>
          <span
            className={`w-6   bg-black  dark:bg-white  h-0.5  rounded-sm ${
              isOpen ? "hidden" : "block "
            }  `}
          ></span>
          <span
            className={` w-6     bg-black  dark:bg-white  h-0.5  rounded-sm ${
              isOpen
                ? "translate-y-0.5 -rotate-45 transition duration-300	  "
                : "rotate-0 transition duration-300	translate-y-0.5  "
            } `}
          ></span>
        </button>

        <div className="lg:flex lg:mb-3    hidden ">
          <CustomLink to="/" title="Home" sectionId="Home" className="mx-4" />
          <CustomLink
            to="/about"
            title="About"
            sectionId="About"
            className="mx-4"
          />
          <CustomLink
            to="/skills"
            title="Skills"
            sectionId="Skills"
            className="ml-4"
          />
          <CustomLink
            to="/project"
            title="Project"
            sectionId="Project"
            className="ml-4"
          />
          <CustomLink
            to="/contact"
            title="Contact"
            sectionId="Contact"
            className="ml-4"
          />
        </div>

        <MotionLink
          to="/"
          className="rounded-full  w-14 h-14  lg:ml-0 ml-14   lg:mt-0   lg:w-16 lg:h-16 bg-black text-white flex items-center justify-center lg:relative lg:right-10 text-2xl font-medium  dark:border  dark:border-solid   "
          initial={{ backgroundColor: "#1B1B1B" }} // Default state
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
          }}
          animate={{ backgroundColor: "#1B1B1B" }} // Ensure it returns to default
        >
          ZR.Y
        </MotionLink>
        <div className="relative   flex items-center lg:mb-0  mb-3 justify-center  lg:hidden ">
          <img
            src={hireme}
            className="w-24 animate-spin-slow mt-4 ml-3 "
            alt="Hire Me"
          />
          <Link
            to="/"
            className="absolute inset-0 flex items-center justify-center m-auto rounded-full  text-xs w-12 h-12 border border-solid shadow-md border-black bg-black text-white text-center translate-x-[5px] translate-y-2 hover:bg-white hover:text-black"
          >
            Hire Me
          </Link>
        </div>
        <div className="lg:flex    hidden">
          <Link
            to="https://www.facebook.com/profile.php?id=100009142466257 "
            className="  transition  ease duration-75 hover:-translate-y-0.5  "
          >
            <img
              src={facebook}
              alt=""
              className="w-8 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>
          <Link to="https://x.com/youneszerg">
            <img
              src={twitter}
              className="w-9 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
              alt=""
            />
          </Link>{" "}
          <Link to="https://github.com/YOUNESyoyou123">
            <img
              src={github}
              alt=""
              className="w-7 translate-y-0.5	 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>{" "}
          <Link to="https://www.facebook.com/profile.php?id=100009142466257">
            <img
              src={linkedin}
              alt=""
              className="w-8 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>{" "}
          <Link
            to="https://www.facebook.com/profile.php?id=100009142466257"
            className=" transition  ease duration-75 hover:-translate-y-0.5"
          >
            <img src={telegram} alt="" className="w-8   " />
          </Link>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <img src={moon} className="  ml-3 w-8" alt="Dark mode" />
            ) : (
              <img src={moon} alt="Light mode" className="  ml-3 w-8" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`min-w-[40vh]   bg-black/90  flex flex-col   left-1/2 -translate-x-1/2   dark:bg-white/75   border rounded-lg justify-between item-center   fixed z-50   top-1/2   -translate-y-1/2  backdrop-blur-sm  py-28 h-[450px]   ${
          isOpen
            ? "block  transition ease-in-out  duration-100  "
            : "hidden  transition  ease-out duration-100  "
        } `}
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        /
        <div className="flex flex-col lg:mb-3   justify-start  items-center   mb-4 ">
          <CustomLinkmenu to="/" title="Home" sectionId="Home" className="mb-1" />
          <CustomLinkmenu
            to="/about"
            title="About"
            sectionId="About"
            className="  mb-1    "
          />
          <CustomLinkmenu
            to="/skills"
            title="Skills"
            sectionId="Skills"
            className="mb-1"
          />
          <CustomLinkmenu
            to="/project"
            title="Project"
            sectionId="Project"
            className="mb-1"
          />
          <CustomLinkmenu
            to="/contact"
            title="Contact"
            sectionId="Contact"
            className=""
          />
        </div>
        <div className="  flex   items-center    justify-center   ">
          <Link
            to="https://www.facebook.com/profile.php?id=100009142466257 "
            className="  transition  ease duration-75 hover:-translate-y-0.5  "
          >
            <img
              src={facebook}
              alt=""
              className="w-8 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>
          <Link to="https://x.com/youneszerg">
            <img
              src={twitter}
              className="w-9 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
              alt=""
            />
          </Link>{" "}
          <Link to="https://github.com/YOUNESyoyou123">
            <img
              src={github}
              alt=""
              className="w-7 translate-y-0.5	 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>{" "}
          <Link to="https://www.facebook.com/profile.php?id=100009142466257">
            <img
              src={linkedin}
              alt=""
              className="w-8 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            />
          </Link>{" "}
          <Link
            to="https://www.facebook.com/profile.php?id=100009142466257"
            className=" transition  ease duration-75 hover:-translate-y-0.5"
          >
            <img src={telegram} alt="" className="w-8   " />
          </Link>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            {mode === "dark" ? (
              <img src={moon} className="  ml-3 w-8" alt="Dark mode" />
            ) : (
              <img src={moon} alt="Light mode" className="  ml-3 w-8" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
