import React from "react";
import { motion } from "framer-motion";

const animate = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
    y: 0,
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto flex items-center justify-center  mb-4 ${className}`}
    >
      <motion.h1
        className={`inline-block w-full text-black font-bold text-6xl text-left ${className}`}
        variants={animate}
        initial="initial"
        animate="animate"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
