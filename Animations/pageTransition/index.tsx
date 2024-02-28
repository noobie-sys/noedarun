"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    oapcity: 1 ,
    transitionEnd: { opacity: 0 },
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  exit: { opacity: 0 },
};
const Fader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <motion.div
        variants={variants}
        initial="initial"
        exit="animate"
        className="fixed top-0 left-0 h-screen w-full pointer-events-none z-[50] bg-black transition-opacity duration-0 ease-linear delay-75"
      />

      {children}
    </div>
  );
};

export default Fader;
