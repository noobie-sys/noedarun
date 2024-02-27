import React from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      currency="usd"
      cartMode="client-only"
      stripe={"process.env.NEXT_PUBLIC_STRIPE_KEY"}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/cancel"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
