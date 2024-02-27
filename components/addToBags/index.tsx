"use client";
import React from "react";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";

interface Props {
  name: string;
  model: string;
  price: number;
  description: string;
  image: string;
  id: string;
  price_id?: string;
}

const AddToCart = ({ ...Props }: Props) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const { description, id, image, model, name, price } = Props;
  const product = {
    name,
    price,
    model,
    description,
    id,
    image,
    price_id: "3242345",
    // sku: "54456456",/
    currency: "usd",
  };
  return (
    <div>
      <Button
        onClick={() => {
          addItem(product);
          handleCartClick()
        }}
        className="w-full text-black bg-white hover:bg-[#222222] hover:text-white uppercase font-bold"
        variant={"secondary"}
      >
        Add to Carts - ${price} USD
      </Button>
    </div>
  );
};

export default AddToCart;
