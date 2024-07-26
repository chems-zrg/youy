import React, { useState } from "react";
import { IoServerOutline } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Skills = () => {
  const [Fronts, setFronts] = useState(false);
  const [design, setdesign] = useState(false);
  const [Network, setNetwork] = useState(false);
  const [Backs, setBacks] = useState(false);

  const designer = () => {
    setdesign(!design);
  };

  const RSD = () => {
    setNetwork(!Network);
  };

  const Backend = () => {
    setBacks(!Backs);
  };

  const front = () => {
    setFronts(!Fronts);
  };

  return (
    <>
      <div className="h-screen flex  justify-center   mt-48">
        <div className="w-full max-w-5xl font-montserrat mt-10">
          <div className="w-full h-auto flex items-center flex-col justify-center">
            <h1 className="font-normal text-5xl mt-2 mb-3">Skills</h1>
            <p className="text-[#a1a1aa]">My technical level</p>
          </div>

          <div className="flex flex-wrap w-full  gap-4 mt-24">
            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={front}
              >
                <PiBracketsCurly className="w-16 h-14 text-[#ef4444] mr-5" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Frontend Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 1 year</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24" />
              </div>
              {Fronts && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>HTML</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>CSS (Tailwind)</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>JS (React js)</h1>
                          <p className="text-end">75%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[75%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Framer Motion</h1>
                          <p className="text-end">95%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[95%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={designer}
              >
                <FaFigma className="w-16 h-14 text-[#ef4444] mr-5" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Designer(Web interface)
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 2 years</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24" />
              </div>
              {design && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>FIGMA</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Adobe Photoshop</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={Backend}
              >
                <IoServerOutline className="w-16 h-14 text-[#ef4444] mr-5" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Backend Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 1 year</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24" />
              </div>
              {Backs && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Node Js</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Express Js</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={RSD}
              >
                <FaServer className="w-16 h-14 text-[#ef4444] mr-5" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Network and System Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 2 years</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24" />
              </div>
              {Network && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Network Configuration</h1>
                          <p className="text-end">95%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[95%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>Security</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-12">
                    <div className="flex">
                      <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                        <div className="flex w-full justify-between">
                          <h1>OS Configuration</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Skills;
