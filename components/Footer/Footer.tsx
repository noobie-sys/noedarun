import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <div className="w-full relative h-screen bg-[#000000] text-white ">
      <div>
        <div className="absolute top-16 left-16 uppercase">
          <span className="font-bold text-[12px]">Join our community</span>
        </div>
        <div className="w-[75%] pl-10  ">
          <h1 className="text-[8vw] leading-none tracking-tight pt-16  flex flex-col uppercase font-semibold">
            <span className="text-right">What do </span>
            <span>you run for?</span>
          </h1>
        </div>
        <div className="w-[75%] h-[40vh]  py-5 flex justify-around   mt-28">
          <div className="w-[60%] h-full justify-between flex border-t py-12 px-4   ">
            <div className=" flex flex-col ">
              <span className="text-xl font-semibold pb-5">
                Sign up for norda™ news
              </span>
              <div className="flex gap-5 px-2">
                <div>
                  <FaInstagram size={24} />
                </div>
                <div>
                  <FaTwitter size={24} />
                </div>
                <div>
                  <FaGithub size={24} />
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <form action="">
                <div className="input-div flex flex-col gap-5">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" className="bg-transparent outline-none border-none active:ouline-none active:border-none" placeholder="Email" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                  {/* <div className="w-full"> */}
                    <Button type="submit">Subscribe</Button>
                  {/* </div> */}
                </div>
              </form>
            </div>
          </div>
          <div className="border-t py-12 flex flex-col gap-4 font-bold">
            <div className="relative">
                <h1 className="textHoverEffect cursor-pointer">Questions and Answer</h1>
            </div>
            <div className="relative">
                <h1 className="textHoverEffect cursor-pointer">Where to buy</h1>
            </div>
            <div className="relative">
                <h1 className="textHoverEffect cursor-pointer">Performance and Sustainibilty</h1>
            </div>
            <div className="relative">
                <h1 className="textHoverEffect cursor-pointer">Contact Me</h1>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};
