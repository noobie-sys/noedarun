"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { oapcity: 0, transition: { duration: 1 } },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="wait">
    <motion.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1 }} className="">
    {children}
    

    </motion.div>
    </AnimatePresence>
    {/* <motion.div initial={{opacity : 0}}  animate={{opacity : 1  , transition : {duration : 2 , ease : "linear"}} } exit={{opacity : 0}} className="w-full h-full bg-black pointer-events-none fixed top-0 left-0" /> */}
};

export default Template;
