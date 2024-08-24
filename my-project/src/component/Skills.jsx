import React, { useState } from "react";
import { IoServerOutline } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { FaFigma } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

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
      <div className="h-screen flex  justify-center   mt-48   lg:mb-34 mb-40">
        <div className="w-full max-w-5xl font-montserrat mt-10">
          <div className="w-full h-auto flex items-center flex-col justify-center   ">
            <motion.h1
              className="font-normal text-5xl mt-2 mb-3  dark:text-white "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Skills
            </motion.h1>
            <motion.p
              className="text-[#a1a1aa]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              My technical level
            </motion.p>
          </div>

          <div className="lg:flex lg:flex-wrap w-full  gap-4 lg:mt-24  dark:text-white ">
            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <motion.div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={front}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <PiBracketsCurly className="w-16 h-14 text-[#ef4444] mr-5  dark:text-[#ffd9b0]" />
                <motion.div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2 dark:text-white  ">
                    Frontend Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 1 year</p>
                </motion.div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24 dark:text-[#ffd9b0]" />
              </motion.div>
              {Fronts && (
                <motion.div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="lg:pl-12   ">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <div className="flex  justify-between lg:w-96  ">
                          <h1 className="" >HTML</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center  dark:bg-[#ffd9b0]">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389] dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <div className="flex  justify-between  lg:w-96">
                          <h1>CSS (Tailwind)</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]   dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      >
                        <div className="flex  justify-between   lg:w-96">
                          <h1>JS (React js)</h1>
                          <p className="text-end">75%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[75%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      >
                        <div className="flex  justify-between   lg:w-96">
                          <h1>Framer Motion</h1>
                          <p className="text-end">95%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[95%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
              <motion.div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                onClick={designer}
              >
                <FaFigma className="w-16 h-14 text-[#ef4444] mr-5 dark:text-[#ffd9b0] " />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Designer(Web interface)
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 2 years</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24 dark:text-[#ffd9b0] " />
              </motion.div>
              {design && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <div className="flex  justify-between   lg:w-96">
                          <h1>FIGMA</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <div className="flex  justify-between   lg:w-96">
                          <h1>Adobe Photoshop</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <motion.div
              className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={Backend}
              >
                <IoServerOutline className="w-16 h-14 text-[#ef4444] mr-5 dark:text-[#ffd9b0]" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Backend Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 1 year</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24 dark:text-[#ffd9b0]" />
              </div>
              {Backs && (
                <motion.div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <div className="flex  lg:w-96 justify-between">
                          <h1>Node Js</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <div className="flex   lg:w-96 justify-between ">
                          <h1>Express Js</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div
                className="flex flex-row w-full h-28 justify-center items-center cursor-pointer"
                onClick={RSD}
              >
                <FaServer className="w-16 h-14 text-[#ef4444] mr-5 dark:text-[#ffd9b0]" />
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <h1 className="font-medium text-xl mb-2">
                    Network and System Developer
                  </h1>
                  <p className="text-[#a1a1aa] text-lg">More than 2 years</p>
                </div>
                <IoIosArrowDown className="w-8 h-8 text-[#ef4444] ml-24 dark:text-[#ffd9b0]" />
              </div>
              {Network && (
                <div className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]">
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <div className="flex  justify-between   lg:w-96">
                          <h1>Network Configuration</h1>
                          <p className="text-end">95%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[95%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)]"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <div className="flex  justify-between   lg:lg:w-96">
                          <h1>Security</h1>
                          <p className="text-end">90%</p>
                        </div>
                        <div className="lg:lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[90%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="flex">
                      <motion.div
                        className="flex flex-col flex-1 min-w-[calc(50%-0.5rem)] "
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                      >
                        <div className="flex lg:w-96  justify-between    ">
                          <h1>OS Configuration</h1>
                          <p className="text-end">80%</p>
                        </div>
                        <div className="lg:w-96 rounded-3xl h-3 bg-[#fecaca] border border-solid border-[#fecaca] flex items-center dark:bg-[#ffd9b0]">
                          <div className="w-[80%] rounded-3xl h-3 bg-[#ef4444]  dark:bg-[#f9c389]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
