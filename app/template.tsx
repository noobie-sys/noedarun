"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { oapcity: 0, transition: { duration: 1 } },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
     
      {children}
    </AnimatePresence>
  );
};

export default Template;
