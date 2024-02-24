import Image from "next/image";
import React from "react";

const shippingDetails = [
  {
    title: "Free shipping",
    description: "Free standard shipping available",
    image: "/assets/banner/icon-shipping_small2.png",
  },
  {
    title: "Free and easy returns",
    description:
      "Shop with confidence with free returns & exchanges in North America",
    image: "/assets/banner/icon-returns_small2.png",
  },
  {
    title: "Considered craftsmanship",
    description: "Cut by laser, sewn by hand, using only the finest materials",
    image: "/assets/banner/icon-sustainability_small2.png",
  },
];
const AdditionalDetails = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full p-10">
        <div className="w-full h-full flex flex-col lg:flex-row justify-evenly items-center py-10">
          {shippingDetails.map((item, i) => (
            <div
              key={i}
              className="box-1 flex flex-col justify-center items-center"
            >
              <div>
                <Image
                  src={item.image}
                  alt="Icon return"
                  width={100}
                  height={100}
                  className="dark:invert"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-bold text-xl mb-2">{item.title}</h1>
                  <p className="lg:w-[21vw] text-center font-medium">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
