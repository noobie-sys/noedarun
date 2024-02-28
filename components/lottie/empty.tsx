'use client'
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import dataAnimation from '@/Animations/lottiAnim/empty.json'
import Link from "next/link";

const Empty = () => {
  return (
    <div className="w-full h-full justify-center flex-col items-center">
      {/* <Player
        src={dataAnimation}
        className="player w-full h-full"
        loop
        autoplay

        style={{width : "600px", height : "600px"}}
      /> */}
      <div className="w-full flex flex-col items-center justify-center text-xl text-gray-500 uppercase">
        <p>
          We don&apos;t have in our <span className="text-red-500">Norda</span> yet
        </p>
        <Link href="/collections/all-products/" className="text-red-500 ml-2">Shop Now</Link>
      </div>
      
    </div>
  );
};

export default Empty;
