import React from "react";
import imgprj from "../image/image.png";
import bg from "../image/bg.jpg";
import prj2 from "../image/prj2.png";
import bg2 from "../image/bg2.avif";
import video from "../image/vid.mp4";
import { motion } from "framer-motion";

import "./card.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <div className="lg:h-[160vh]  sm:h-[70vh] md:h-[90vh] w-full lg:px-64   mb-10 lg:mb-0 font-playfair   md:mb-96">
        <motion.div
          className="w-[100%]  flex justify-center font-medium text-4xl mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" dark:text-white ">Project</h1>
        </motion.div>
        <motion.div
          className="w-[100%] flex justify-center mb-12 text-[#a1a1aa]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <h1>Explore My latest works</h1>
        </motion.div>
        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2  flex flex-wrap lg:gap-12">
          <motion.a
            href="https://younesyoyou123.github.io/finalLibrary_website/"
            target="_blank"
            class=" group  cursor-pointer group overflow-hidden relative text-gray-50  h-[220px]    md:h-[400px] lg:h-72 lg:w-[470px] rounded-2xl hover:duration-700 duration-700 mb-5  shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <img src={imgprj} alt="" className=" lg:h-60" />
            <div class="w-[480px] h-80  text-gray-800">
              <div class="flex flex-row justify-between  dark:bg-white ">
                <svg
                  class="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class=""
                    d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
                <svg
                  class="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class="svg-stroke-primary"
                    d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="absolute bg-gray-50 -bottom-24 lg:w-[470px]    w-full  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span class="text-lime-400 font-bold text-xs">Full Website </span>
              <span class="text-gray-800 font-bold text-3xl">
                library website{" "}
              </span>
              <p class="text-neutral-800">Book a book online</p>
            </div>
          </motion.a>
          <motion.a
            class=" group  cursor-pointer group overflow-hidden relative h-[240px] text-gray-50  md:h-[400px] lg:h-72 w-full lg:w-[470px] rounded-2xl hover:duration-700 duration-700 mb-5 shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <img src={prj2} className=" lg:h-60  lg:w-full " alt="" />
            <div class="w-[470px] h-72  text-gray-800">
              <div class="flex flex-row justify-between    bg-white ">
                <svg
                  class="fill-current stroke-current w-8 h-8 p-2 hover:bg-lime-200  rounded-full m-1"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class=""
                    d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
                <svg
                  class="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-lime-200 rounded-full"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class="svg-stroke-primary"
                    d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="8"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="absolute bg-gray-50 -bottom-24 lg:w-[470px] p-3 flex w-full flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span class="text-lime-400 font-bold text-xs">Full Website </span>
              <span class="text-gray-800 font-bold text-3xl">
                Portfolio website{" "}
              </span>
              <p class="text-neutral-800">This is my portfolio.</p>
            </div>
          </motion.a>

          <motion.a
            href="https://younesyoyou123.github.io/damn/"
            target="_blanck"
            className="col-span-2  max-w-[100%]  lg:h-[300px]  shadow-xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <div>
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full     lg:h-full rounded-lg"
              />
            </div>
            <div className="flex flex-row justify-between items-center max-mt-5 lg:mt-5 px-5  rounded-xl  ">
              <div className="flex flex-col">
                <h1 className="font-medium lg:text-xl  dark:text-white">
                  Amazon forest web site
                </h1>
                <p className="text-[#a1a1aa]">Landing Page</p>
              </div>
              <div>
                <div className="lg:py-1 px-2 border border-solid border-black rounded-full  dark:border-white">
                  <FaArrowRightLong className="lg:text-3xl text-xl text-[#a1a1aa]  " />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </>
  );
}
