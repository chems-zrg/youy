import React from "react";

import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Infinitybar = () => {
  return (
    <div className="    flex group  mx-auto  overflow-hidden  mt-16 w-[850px] bg-[#0e100f]  ">
      <div className="animate-infinit-scroll flex group-hover:paused  ">
        <FaReact className=" mx-7    h-20  w-20 hover:w-22 text-[#ffd9b0] " />
        <FaNodeJs className=" mx-7   h-20  w-20 hover:w-22 text-[#ffd9b0] " />
        <SiMongodb className=" mx-7   h-20  w-20 hover:w-22   text-[#ffd9b0]" />
        <FaPhp className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]" />
        <FaHtml5 className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]" />
        <FaCss3Alt className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]" />
        <IoLogoJavascript className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]" />
      </div>
      <div className="animate-infinit-scroll flex aria-hidden:true group-hover:paused ">
        <FaReact className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]  " />
        <FaNodeJs className=" mx-7   h-20  w-20 hover:w-22 text-[#ffd9b0]   " />
        <SiMongodb className=" mx-7   h-20  w-20 hover:w-22   text-[#ffd9b0] " />
        <FaPhp className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]  " />
        <FaHtml5 className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]  " />
        <FaCss3Alt className=" mx-7   h-20  w-20 hover:w-22  text-[#ffd9b0]  " />
        <IoLogoJavascript className=" mx-7   h-20  w-20 hover:w-22   text-[#ffd9b0] " />
      </div>
    </div>
  );
};

export default Infinitybar;
