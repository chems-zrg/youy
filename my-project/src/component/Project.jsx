import React from "react";
import imgprj from "../image/image.png";
import bg from "../image/bg.jpg";
import prj2 from "../image/prj2.png";
import bg2 from "../image/bg2.avif";
import video from "../image/vid.mp4";

import { FaArrowRightLong } from "react-icons/fa6";

export default function Project() {
  return (
    <>
      <div className="h-[160vh] w-full px-64 font-playfair">
        <div className="w-[100%] flex justify-center font-medium text-4xl mb-1">
          <h1>Project</h1>
        </div>
        <div className="w-[100%] flex justify-center mb-12 text-[#a1a1aa]">
          <h1>Explore My latest works</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-12">
          <div className="h-[340px] max-w-[100%] flex flex-col">
            <div
              className="h-[280px] bg-[#0f172a] rounded-2xl"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={imgprj}
                alt=""
                className="w-[440px] h-60 m-auto mt-4 rounded-xl"
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-5 px-5">
              <div className="flex flex-col">
                <h1 className="font-medium text-xl">Library online</h1>
                <p className="text-[#a1a1aa]">Full website</p>
              </div>
              <div>
                <div className="py-1 px-2 border border-solid border-black rounded-full">
                  <FaArrowRightLong className="text-3xl text-[#a1a1aa]" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[340px] max-w-[100%] flex flex-col">
            <div
              className="h-[280px] bg-[#0f172a] rounded-2xl"
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={prj2}
                alt=""
                className="w-[420px] h-60 m-auto mt-4 rounded-xl"
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-5 px-5">
              <div className="flex flex-col">
                <h1 className="font-medium text-xl">Portfolio</h1>
                <p className="text-[#a1a1aa]">Landing Page</p>
              </div>
              <div>
                <div className="py-1 px-2 border border-solid border-black rounded-full">
                  <FaArrowRightLong className="text-3xl text-[#a1a1aa]" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-black max-w-[100%] h-[300px]">
            <div>
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-full rounded-lg"
              ></video>
            </div>
            <div className="flex flex-row justify-between items-center mt-5 px-5">
              <div className="flex flex-col">
                <h1 className="font-medium text-xl">Amazon forest web site</h1>
                <p className="text-[#a1a1aa]">Landing Page</p>
              </div>
              <div>
                <div className="py-1 px-2 border border-solid border-black rounded-full">
                  <FaArrowRightLong className="text-3xl text-[#a1a1aa]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
