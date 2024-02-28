'use client'

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="success-page w-full h-screen justify-center items-center">
      <Player src={'https://lottie.host/cea04c89-36ee-444d-a3b6-feb179e4b108/fXtqmkZwxd.json'}
       className="player w-[450px] h-[450px]"
       loop
       autoplay
      />
      <h1 className="w-full text-center">Payment Cancel</h1>
      <h1 className="w-full text-center mt-4 underline">

      <Link href={'/'}>Continue Shopping</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
