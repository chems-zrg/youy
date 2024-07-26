import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lottie from "lottie-react";
import education from "../image/Animation - 1721599481798.json";
import work from "../image/Animation - 1721600398560.json";
import sidepicture from "../image/Animation - 1721601906693.json";
import shape from "../image/shape-circle.svg";
import waves from "../image/wave (1).svg";
import Infinitybar from "./Infnity";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [" center end ", " start start"],
  });

  return (
    <>
      <div
        ref={ref}
        className="relative h-auto w-full font-inter overflow-hidden mt-12"
      >
        <div className="flex flex-col items-center mb-4">
          <h1 className="font-normal text-5xl mt-5 mb-3">Qualifications</h1>
          <p className="text-[#a1a1aa]">Experience & Education</p>
        </div>
        <div className="flex flex-row w-full justify-center gap-20">
          <motion.div
            style={{ scale: scrollYProgress }}
            className="absolute z-20 left-80  top-56  w-[5px] h-[500px] bg-black origin-top"
          ></motion.div>
          <div>
            <div className="flex items-end">
              <Lottie animationData={education} className="w-24" loop={true} />
              <h1 className="text-xl text-[#52525b] font-medium py-2">
                Education
              </h1>
            </div>

            <div>
              <div className="flex flex-col">
                <div className=" w-8 h-8   rounded-full   border-solid   border-black border-2 absolute  left-[307px] z-50 bg-white flex items-center  justify-center">
                  <div className=" w-4 h-4   rounded-full   border-solid   border-black border-2 absolute   z-50  bg-[#dc2626] animate-pulse	 "></div>
                </div>
                <h1 className="text-xl font-medium my-1">
                  Licence Degree in software engineering
                </h1>
                <p className="text-[#a1a1aa]">Ferhat Abbas University</p>
                <p className="text-[#a1a1aa]">2021-2024</p>
              </div>
              <motion.div style={{ pathLength: scrollYProgress }}>
                <div className=" w-8 h-8   rounded-full   border-solid   border-black border-2 absolute  left-[307px] z-50 bg-white flex items-center  justify-center">
                  <div className=" w-4 h-4   rounded-full   border-solid   border-black border-2 absolute   z-50  bg-[#dc2626] animate-pulse	 "></div>
                </div>
                <h1 className="text-xl font-medium my-2">Web Developer</h1>
                <p className="text-[#a1a1aa]">YouTube tutorials, Udemy</p>
                <p className="text-[#a1a1aa]">2023-2024</p>
              </motion.div>
              <div>
                <div className=" w-8 h-8   rounded-full   border-solid   border-black border-2 absolute  left-[307px] z-50 bg-white flex items-center  justify-center">
                  <div className=" w-4 h-4   rounded-full   border-solid   border-black border-2 absolute   z-50  bg-[#dc2626] animate-pulse	 "></div>
                </div>
                <h1 className="text-xl font-medium my-2">
                  Master's Degree in Network Engineering (currently)
                </h1>
                <p className="text-[#a1a1aa]">
                  Ferhat Abbas University, Algeria
                </p>
                <p className="text-[#a1a1aa]">2024-2026</p>
              </div>
              <div>
                <div className=" w-8 h-8   rounded-full   border-solid   border-black border-2 absolute  left-[307px] z-50 bg-white flex items-center  justify-center">
                  <div className=" w-4 h-4   rounded-full   border-solid   border-black border-2 absolute   z-50  bg-[#dc2626] animate-pulse	 "></div>
                </div>
                <h1 className="text-xl font-medium my-2">
                  Cisco Certified Network Associate (currently)
                </h1>
                <p className="text-[#a1a1aa]">Setif, Algeria</p>
                <p className="text-[#a1a1aa]">2024-2026</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-end mt-8">
              <Lottie animationData={work} loop={true} className="w-14 pb-1" />
              <h1 className="text-xl text-[#52525b] font-medium">Work</h1>
            </div>

            <motion.div
              style={{ scale: scrollYProgress }}
              className="absolute      top-56  w-[5px] h-[80px]  -ml-[27px] bg-black origin-top"
            ></motion.div>
            <div className="">
              <div className=" w-8 h-8   rounded-full   border-solid   border-black border-2 absolute  -translate-x-10 z-50 bg-white flex items-center  justify-center">
                <div className=" w-4 h-4   rounded-full   border-solid   border-black border-2 absolute   z-50  bg-[#dc2626] animate-pulse	 "></div>
              </div>
              <h1 className="text-xl font-medium my-2">
                Full Stack Web Developer
              </h1>
              <p className="text-[#a1a1aa]">Fiverr/Upwork</p>
              <p className="text-[#a1a1aa]">2023-2024</p>
            </div>
          </div>
        </div>
        <div>
          <Lottie
            animationData={sidepicture}
            loop={true}
            className="absolute w-72 right-0 bottom-0"
          />
          <img
            src={shape}
            alt=""
            className="absolute -left-20 opacity-10 rotate-45 bottom-0"
          />
          
        </div>
        
      </div>
      <Infinitybar/>
    </>
  );
}
