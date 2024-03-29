"use client";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/navbar";
import React, {  useLayoutEffect } from "react";
import { RecoilRoot } from "recoil";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AdditionalDetails from "@/components/AddditonalDetails";
import CartProvider from "@/components/Provider/cartProvider";
import { ShoppingCartModal } from "@/components/shoppingCartModal";
import CustomCursor from "@/components/customCursor";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
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
      <CartProvider>
        <ShoppingCartModal />
        <CustomCursor />
        <Navbar />

        {children}
        <AdditionalDetails />
        <Footer />
      </CartProvider>
    </RecoilRoot>
  );
};

export default Layout;
