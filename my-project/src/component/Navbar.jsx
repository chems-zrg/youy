import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import twitter from "../image/twitter-svgrepo-com.svg";
import facebook from "../image/facebook-1-svgrepo-com.svg";
import github from "../image/github-color-svgrepo-com.svg";
import telegram from "../image/telegram-svgrepo-com.svg";
import linkedin from "../image/linkedin-1-svgrepo-com.svg";

export default function Navbar() {
  const location = useLocation();
  const MotionLink = motion(Link);

  const CustomLink = ({ to, title, className = "" }) => {
    return (
      <Link to={to} className={`${className} group relative`}>
        <span
          className={`h-[2px] inline-block w-0 bg-black absolute -bottom-[3px] group-hover:w-full transition-[width] duration-300 ease ${
            location.pathname === to ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
        {title}
      </Link>
    );
  };

  return (
    <div className="flex items-center justify-between px-32 py-8 ">
      <div className="flex mb-3 ">
        <CustomLink to="/" title="Home" className="mx-4" />
        <CustomLink to="/about" title="About" className="mx-4" />
        <CustomLink to="/project" title="Project" className="ml-4" />
      </div>
      <MotionLink
        to="/"
        className="rounded-full w-16 h-16 bg-black  text-white  flex items-center justify-center  relative  right-10 text-2xl font-medium "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <MotionLink to="/">ZR.Y</MotionLink>
      </MotionLink>
      <div className="flex">
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
        <Link to="https://www.facebook.com/profile.php?id=100009142466257">
          <img
            src={twitter}
            className="w-9 mr-4 transition  ease duration-75 hover:-translate-y-0.5"
            alt=""
          />
        </Link>{" "}
        <Link to="https://www.facebook.com/profile.php?id=100009142466257">
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
      </div>
    </div>
  );
}
