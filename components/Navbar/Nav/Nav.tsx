"use client";
import React, { useState } from "react";
import { textSlideIn } from "@/Animations/Transitions/transitions";
import { motion } from "framer-motion";
import SideBarModal from "@/components/Modal/SideBarModal";

const navLinks = ["Men", "Women", "Stories"];
const navItems = [ "Shoes" , "Apparal" , "Accessories" , "Other"];

const MobileNav = () => {
  const [active , setActive ] = useState(false)
  
  return (
    <SideBarModal>
      <div className="items flex flex-col gap-5 text-5xl pt-[108px] w-full h-full dark:text-black tracking-tighter">
        {navLinks.map((links, idx) => (
          <div
            className="flex flex-col overflow-hidden  pl-4  cursor-pointer"
            key={idx}
          >
            <motion.h1
              variants={textSlideIn}
              initial="initial"
              animate="animate"
              exit={"exit"}
              custom={idx}
              onClick={() => setActive(!active)}
            >
              {links}
            </motion.h1>
           
            
          </div>
        ))}
      </div>
    </SideBarModal>
  );
};

export default MobileNav;