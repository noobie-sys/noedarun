"use client";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/navbar";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AdditionalDetails from "@/components/AddditonalDetails";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <RecoilRoot>
      <Navbar />

      {children}
      <AdditionalDetails />
      <Footer />
    </RecoilRoot>
  );
};

export default Layout;
