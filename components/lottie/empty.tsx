'use client'
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import dataAnimation from '@/Animations/lottiAnim/empty.json'

const Empty = () => {
  return (
    <div className="w-full h-full justify-center flex-col items-center">
      <Player
        src={dataAnimation}
        className="player w-full h-full"
        loop
        autoplay

        style={{width : "600px", height : "600px"}}
      />
      <div className="w-full flex justify-center text-xl text-gray-500 uppercase">
        <p>
          We don't have in our <span className="text-red-500">Norda</span>yet
        </p>
      </div>
    </div>
  );
};

export default Empty;
