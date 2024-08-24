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
    offset: ["center end", "start start"],
  });

  return (
    <>
      <div
        ref={ref}
        className="relative h-auto w-full font-inter overflow-hidden mt-12"
      >
        <div className="flex flex-col items-center mb-4">
          <motion.h1
            className="font-normal text-5xl dark:text-white mt-5 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Qualifications
          </motion.h1>
          <motion.p
            className="text-[#a1a1aa]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience & Education
          </motion.p>
        </div>
        <motion.div
          className="flex-col lg:flex lg:flex-row w-full justify-center gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            style={{ scale: scrollYProgress }}
            className="z-20 absolute left-[13px] top-56 lg:relative lg:top-24 lg:left-[2px] w-[5px] lg:h-[390px] h-[337px] bg-black origin-top dark:bg-[#a1a1aa] "
          ></motion.div>
          <div>
            <div className="flex items-end w-screen justify-center lg:w-[100%] lg:justify-start">
              <Lottie animationData={education} className="w-24" loop={true} />
              <h1 className="text-xl text-[#52525b] font-medium py-2">
                Education
              </h1>
            </div>
            <div>
              {/* Education Section */}
              <div className="flex flex-col">
                <div className="w-8 h-8 rounded-full border-solid border-black border-2 absolute lg:translate-x-[-97px] z-50 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-solid border-black border-2 absolute z-50 bg-[#dc2626] animate-pulse"></div>
                </div>
                <motion.h1
                  className="lg:text-xl font-medium my-1 pl-12 lg:pl-0 lg:text-start  dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  Licence Degree in software engineering
                </motion.h1>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.23 }}
                >
                  Ferhat Abbas University
                </motion.p>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.26 }}
                >
                  2021-2024
                </motion.p>
              </div>
              <motion.div style={{ pathLength: scrollYProgress }}>
                <div className="w-8 h-8 rounded-full border-solid border-black border-2 absolute lg:translate-x-[-97px] z-50 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-solid border-black border-2 absolute z-50 bg-[#dc2626] animate-pulse"></div>
                </div>
                <motion.h1
                  className="lg:text-xl font-medium my-1 pl-12 lg:pl-0 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 }}
                >
                  Web Developer
                </motion.h1>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.63 }}
                >
                  YouTube tutorials, Udemy
                </motion.p>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.66 }}
                >
                  2023-2024
                </motion.p>
              </motion.div>
              <div>
                <div className="w-8 h-8 rounded-full border-solid border-black border-2 absolute lg:translate-x-[-97px] z-50 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-solid border-black border-2 absolute z-50 bg-[#dc2626] animate-pulse"></div>
                </div>
                <motion.h1
                  className="lg:text-xl font-medium my-1 pl-12 lg:pl-0 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Master's Degree in Network Engineering (currently)
                </motion.h1>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.3 }}
                >
                  Ferhat Abbas University, Algeria
                </motion.p>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.6 }}
                >
                  2024-2026
                </motion.p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full border-solid border-black border-2 absolute lg:translate-x-[-97px] z-50 bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-solid border-black border-2 absolute z-50 bg-[#dc2626] animate-pulse"></div>
                </div>
                <motion.h1
                  className="lg:text-xl font-medium my-1 pl-12 lg:pl-0 dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  Cisco Certified Network Associate (currently)
                </motion.h1>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3.3 }}
                >
                  Setif, Algeria
                </motion.p>
                <motion.p
                  className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3.6 }}
                >
                  2024-2026
                </motion.p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-end w-screen pt-[20px] mb-3 justify-center lg:w-[100%] lg:justify-start">
              <Lottie animationData={work} loop={true} className="w-14 pb-1" />
              <h1 className="text-xl text-[#52525b] font-medium">Work</h1>
            </div>
            <motion.a
              style={{ scale: scrollYProgress }}
              className="lg:top-54 w-[5px] h-[88px]   absolute  left-3 lg:left-[59.56%]  bg-black dark:bg-[#a1a1aa] "
            ></motion.a>
            <div>
              <div className="w-8 h-8 rounded-full border-solid border-black border-2 absolute lg:left-[58.6%] lg:z-50 bg-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-solid border-black border-2 absolute z-50 bg-[#dc2626] animate-pulse"></div>
              </div>
              <h1
                className="lg:text-xl font-medium my-1 pl-12 lg:pl-0 lg:text-start dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              >
                Full Stack Web Developer
              </h1>
              <motion.p
                className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.34 }}
              >
                Fiverr/Upwork
              </motion.p>
              <motion.p
                className="text-[#a1a1aa] lg:text-xl font-medium my-1 lg:pl-0 pl-12 lg:text-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.38 }}
              >
                2023-2024
              </motion.p>
            </div>
          </div>
        </motion.div>
        <div>
          <Lottie
            animationData={sidepicture}
            loop={true}
            className="absolute w-72 right-0 bottom-0"
          />
          <img
            src={shape}
            alt=""
            className="lg:absolute -left-20 opacity-10 rotate-45 bottom-0"
          />
        </div>
      </div>
      <Infinitybar />
    </>
  );
}
