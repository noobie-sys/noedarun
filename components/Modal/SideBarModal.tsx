import { slideIn } from "@/Animations/Transitions/transitions";
import React from "react";
import { motion } from "framer-motion";
import { CrossIcon } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { navbarModalState } from "@/context/navbarModalState";

const SideBarModal = ({ children }: { children: React.ReactNode }) => {
  const setOpen = useSetRecoilState(navbarModalState);
  const modalState = () => {
    setOpen((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  };
  return (
    <motion.div
      variants={slideIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="navbar-style-for-small-screen lg:hidden w-full h-full fixed top-0 right-0 bg-[#F5F5F5] "
    >
      <div className="absolute  top-10 right-10 cursor-pointer">
        <CrossIcon onClick={modalState} className="rotate-45 dark:fill-black
        " />
      </div>
      {children}
    </motion.div>
  );
};

export default SideBarModal;
