'use client'

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

const Success = () => {
  return (
    <div className="success-page w-full h-screen justify-center items-center">
      <Player src={'https://lottie.host/3744e50c-cfa7-4fda-b712-0886a7b5b418/YAKfv0y0ZU.json'}
       className="player w-[450px] h-[450px]"
       loop
       autoplay
      />
      <h1 className="w-full text-center">Payment Succesfull</h1>
      <h1 className="w-full text-center mt-4 underline">

      <Link href={'/'}>Continue Shopping</Link>
      </h1>
    </div>
  );
};

export default Success;
