'use client';
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/navbar";
import React from "react";
import { RecoilRoot } from "recoil";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot >
      <Navbar />

      {children}
      <Footer />
    </RecoilRoot>
  );
};

export default Layout;
