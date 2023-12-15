"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Encapsulating
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
               Ideas  {" "}
            </span>
            into codes
         </span>
        
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Frontend developer skilled in React, Node.js, Firebase. Passionate about problem-solving. Embraces challenges and excels in crafting effective solutions.
        </motion.p>
        <Link href="/bhavya_resume.pdf" className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" passHref>
          <motion.a
            variants={slideInFromLeft(1)}
           
          >
            Resume
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroContent;
